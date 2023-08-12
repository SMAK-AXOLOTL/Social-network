import React from "react";
import s from './Login.module.css'
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";
import {appStateType} from "../../redux/reduxStore";

const Login: React.FC = () => {
    const isAuth = useSelector((state: appStateType) => state.auth.isAuth)

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div className={s.container}>
        <div className={s.content}>
            <h1>
                Login
            </h1>
            <div>
                <LoginForm/>
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
}

export default Login
