import s from "./NavbarItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const NavbarItem = (props) => {
    return (
        <NavLink to={props.address} className={s.item}>{
            <div>
                <img src='https://schtandart.com/bitrix/templates/concept_landing/images/new-blocks_20180813/personal-stepanov-icon_01.png'/>
                {props.itemName}
            </div>
        }
        </NavLink>
    )
}
export default NavbarItem