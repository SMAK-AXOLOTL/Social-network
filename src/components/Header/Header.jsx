import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img className={s.logo}
             src='https://avatars.mds.yandex.net/get-yapic/58107/IPSvG2CEX560BInBX0Y7xH4Fbn8-1/islands-retina-50'/> Header
        <div className={s.login_block}>
            {props.isAuth
                ? <div>
                    <div>
                        {props.login} - <button onClick={props.logout}>Log out</button>
                    </div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header