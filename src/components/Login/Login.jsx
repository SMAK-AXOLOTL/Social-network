import React from "react";
import {Form, Formik} from "formik";
import {Checkbox, TextInput} from "../../utils/FormComponents";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {syncValidate} from "../../utils/Validation";


const LoginForm = (props) => {
    /*const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        }, onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 2))
            props.login(values.email, values.password, values.rememberMe, actions.setStatus)
            actions.resetForm()
        }, /!*validate: values => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required'
            }
            return errors;
        }*!/
    })

    return <form onSubmit={formik.handleSubmit}>
        <label>email - </label>
        <input id={'email'} name={'email'} type={'text'} onChange={formik.handleChange} value={formik.values.email}/>
        {errors.email && touched.email}
        <div></div>
        <label>password - </label>
        <input id={'password'} name={'password'} type={'password'} onChange={formik.handleChange} value={formik.values.password}/>
        <div></div>
        <label>Remember me - </label>
        <input id={'rememberMe'} name={'rememberMe'} type={'checkbox'} onChange={formik.handleChange} value={formik.values.rememberMe}/>
        <div></div>
        <button>Submit</button>
    </form>*/
    return <Formik
        initialValues={{
            email: '',
            password: '',
            rememberMe: false
        }}
        validate={syncValidate}
        onSubmit={(values, actions) => {
            props.login(values.email, values.password, values.rememberMe)
            actions.resetForm()
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
                <button>Submit</button>
            </div>
        </Form>
    </Formik>

}

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    //TODO: ajax validation
    return <div className={s.container}>
        <div className={s.content}>
            <h1>
                Login
            </h1>
            <div>
                <LoginForm login={props.login}/>
            </div>
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isAuthErrorToggled: state.auth.isAuthErrorToggled
})

export default connect(mapStateToProps, {login})(Login)