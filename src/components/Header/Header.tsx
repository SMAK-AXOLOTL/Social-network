import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLogin} from "../../utils/Selectors/AuthSelectors";
import {ThunkDispatch} from "redux-thunk";
import {logout} from "../../redux/authReducer";
import {appStateType} from "../../redux/reduxStore";
import {AnyAction} from "redux";

const Header: React.FC = () => {
    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const onLogoutClick = () => {
        dispatch(logout())
    }

    return <header className={s.header}>
        <img className={s.logo} alt={"header image"}
             src='https://avatars.mds.yandex.net/get-yapic/58107/IPSvG2CEX560BInBX0Y7xH4Fbn8-1/islands-retina-50'/> Header
        <div className={s.login_block}>
            {isAuth
                ? <div>
                    <div>
                        {login} - <button onClick={onLogoutClick}>Log out</button>
                    </div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header