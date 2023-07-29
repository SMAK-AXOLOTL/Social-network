import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <img src='https://i.stack.imgur.com/oNqt6.png?s=128&g=1' alt={"user profile pic"}/>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem