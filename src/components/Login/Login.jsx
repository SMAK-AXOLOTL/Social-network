import React, {useState} from "react";
import {Form, Formik} from "formik";
import {Checkbox, TextInput} from "../../utils/FormComponents";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {syncValidate} from "../../utils/Validation";


const LoginForm = (props) => {
    const [status, changeStatus] = useState('')

    return <Formik
        initialValues={{
            email: '',
            password: '',
            rememberMe: false
        }}
        validate={syncValidate}
        onSubmit={(values, actions) => {
            props.login(values.email, values.password, values.rememberMe, (newStatus) => {
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
            <div>
                {status}
            </div>
            <div>
                <button>Submit</button>
            </div>
        </Form>
    </Formik>
}

const Login = ({isAuth, login}) => {
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div className={s.container}>
        <div className={s.content}>
            <h1>
                Login
            </h1>
            <div>
                <LoginForm login={login}/>
            </div>
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isAuthErrorToggled: state.auth.isAuthErrorToggled
})

export default connect(mapStateToProps, {login})(Login)