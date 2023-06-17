import React from "react";
import {Form, Formik} from "formik";
import {Checkbox, TextInput} from "../../utils/FormComponents";
import * as Yup from 'yup'
import s from './Login.module.css'


const loginForm = () =>{
    return <Formik
        initialValues={{
            email: '',
            password: '',
            rememberMe: false
        }}
        validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
        })}
        onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
        }}
    >
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
                <button type="submit">Submit</button>
            </div>
        </Form>
    </Formik>
}

const Login = () => {
    return <div className={s.container}>
        <div className={s.content}>
            <h1>
                Login
            </h1>
            <div>
                {loginForm()}
            </div>
        </div>
    </div>
};

export default Login