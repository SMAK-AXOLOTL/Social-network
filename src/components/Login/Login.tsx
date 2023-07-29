import React from "react";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import {appStateType} from "../../redux/reduxStore";

type PropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean, captchaText: string, callback: (arg: string) => void) => void
    captchaUrl: string | null
}

const Login: React.FC<PropsType> = ({isAuth, login, captchaUrl}) => {
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div className={s.container}>
        <div className={s.content}>
            <h1>
                Login
            </h1>
            <div>
                <LoginForm login={login} captchaUrl={captchaUrl}/>
            </div>
        </div>
        <div className={s.loginInfo}>
            <div>
                You can test the site with this login information:
            </div>
            <div>Email: free@samuraijs.com

                Password: free</div>
        </div>
    </div>
};

const mapStateToProps = (state: appStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)