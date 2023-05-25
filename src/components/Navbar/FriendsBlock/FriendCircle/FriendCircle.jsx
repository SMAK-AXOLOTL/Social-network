import s from "./FriendCircle.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const FriendCircle = (props) =>{
    return(
        <div className={s.item}>
            <NavLink to={'/messages/' + props.id}>
                <img src='https://i.stack.imgur.com/oNqt6.png?s=128&g=1'/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}
export default FriendCircle