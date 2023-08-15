import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLogin} from "../../utils/Selectors/AuthSelectors";
import {ThunkDispatch} from "redux-thunk";
import {logout} from "../../redux/authReducer";
import {appStateType} from "../../redux/reduxStore";
import {AnyAction} from "redux";
import {Button} from "antd";

const HeaderComponent: React.FC = () => {
    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const onLogoutClick = () => {
        dispatch(logout())
    }

    return <>
        <img className={s.logo} alt={"header image"}
             src='https://avatars.mds.yandex.net/get-yapic/58107/IPSvG2CEX560BInBX0Y7xH4Fbn8-1/islands-retina-50'/>
        <h2 className={s.siteName}>
            Social Network
        </h2>
        <div className={s.login_block}>
            {isAuth
                ? <div>
                    <div>
                        {login} - <Button onClick={onLogoutClick}>Log out</Button>
                    </div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </>
}

export default HeaderComponent