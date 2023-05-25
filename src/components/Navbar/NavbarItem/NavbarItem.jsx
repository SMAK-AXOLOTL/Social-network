import s from "./NavbarItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const NavbarItem = (props) =>{
    return(
        <div>
            <div className={s.item}>
                <img src='https://lh4.ggpht.com/hOtYe8us-QmU6aJGGyLhik9VXCKmWlrx3xNpksb-WDqJ3AnOgnIjUOOtNivRdKJ-baU=w220'/>
                <NavLink to={props.address}>{props.itemName}</NavLink>
            </div>
        </div>
    )
}
export default NavbarItem