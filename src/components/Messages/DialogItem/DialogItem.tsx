import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {Icons} from "../../../assets/images/Icons";

type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <img src={Icons.UserPlaceholder} alt={"user profile pic"}/>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem