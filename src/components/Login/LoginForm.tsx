import React, {useState} from "react";
import {Form, Formik} from "formik";
import {validateLogin} from "../../utils/Validation";
import {Checkbox, TextInput} from "../../utils/FormComponents";

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean, captchaText: string, callback: (arg: string) => void) => void
    captchaUrl: string | null
}

const LoginForm: React.FC<PropsType> = (props) => {
    const [status, changeStatus] = useState('')

    return <Formik
        initialValues={{
            email: '',
            password: '',
            rememberMe: false,
            captchaText: ''
        }}
        validate={validateLogin}
        onSubmit={(values, actions) => {
            props.login(values.email, values.password, values.rememberMe, values.captchaText, (newStatus) => {
                changeStatus(newStatus)
            })
            actions.setFieldValue('password', '')
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
            />
            <Checkbox name='rememberMe'>
                Remember me?
            </Checkbox>
            {props.captchaUrl && <div>
                <img src={props.captchaUrl} alt={"captcha code"}/>
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
                <button>Submit</button>
            </div>
        </Form>
    </Formik>
}
export default LoginForm