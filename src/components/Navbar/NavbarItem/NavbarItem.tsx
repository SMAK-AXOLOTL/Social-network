import s from "./NavbarItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type PropsType = {
    address: string
    itemName: string
    icon: string
}

const NavbarItem: React.FC<PropsType> = (props) => {
    return (
        <NavLink to={props.address} className={s.item}>
            <div>
                <img alt={'icon'} src={props.icon}/>
                <span className={s.text}>
                    {props.itemName}
                </span>
            </div>
        </NavLink>
    )
}
export default NavbarItem