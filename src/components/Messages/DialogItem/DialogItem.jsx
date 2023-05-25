import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src='https://i.stack.imgur.com/oNqt6.png?s=128&g=1'/>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem