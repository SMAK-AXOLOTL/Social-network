import s from "./NavbarItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const NavbarItem = (props) => {
    return (
        <NavLink to={props.address} className={s.item}>{
            <div>
                <img src='https://lh4.ggpht.com/hOtYe8us-QmU6aJGGyLhik9VXCKmWlrx3xNpksb-WDqJ3AnOgnIjUOOtNivRdKJ-baU=w220'/>
                {props.itemName}
            </div>
        }
        </NavLink>
    )
}
export default NavbarItem