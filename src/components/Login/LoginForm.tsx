import React, {useState} from "react";
import {Form, Formik} from "formik";
import {validateLogin} from "../../utils/Validation";
import {Checkbox, TextInput} from "../../utils/FormComponents";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../redux/reduxStore";
import {login} from "../../redux/authReducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

const LoginForm: React.FC = () => {
    const [status, changeStatus] = useState<string>('')

    const captchaUrl = useSelector((state: appStateType) => state.auth.captchaUrl)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()

    return <Formik
        initialValues={{
            email: '',
            password: '',
            rememberMe: false,
            captchaText: ''
        }}
        validate={validateLogin}
        onSubmit={(values, actions) => {
            //wtf?
            dispatch(login(values.email, values.password, values.rememberMe, values.captchaText, (newStatus) => {
                changeStatus(newStatus)
            })).catch(actions.setFieldValue('password', '').then)
        }}>
        <Form>
            <TextInput
                label='E-mail - '
                name='email'
                type='text'
                placeholder='Enter E-mail here'
            />
            <TextInput
                label='Password - '
                name='password'
                type='password'
                placeholder='Enter password here'
            /><div>
            <Checkbox name='rememberMe'>
                Remember me?
            </Checkbox>
        </div>
            {captchaUrl && <div>
                <img src={captchaUrl} alt={"captcha code"}/>
                <TextInput
                    label='Captcha - '
                    name='captchaText'
                    type='text'
                    placeholder='Enter CAPTCHA code here'
                />
            </div>}
            <div>
                {status}
            </div>
            <div>
                <button type={"submit"}>Submit</button>
            </div>
        </Form>
    </Formik>
}
export default LoginForm