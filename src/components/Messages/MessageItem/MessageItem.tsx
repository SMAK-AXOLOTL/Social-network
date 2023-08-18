import s from "./MessageItem.module.css";
import React from "react";
import {Icons} from "../../../assets/images/Icons";

type PropsType = {
    text: string
}
const MessageItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message}>
            <img alt={'user avatar'} src={Icons.UserPlaceholder} width={60}/> <b>UserName</b>
            <br/>
            {props.text}
        </div>
    );
}
export default MessageItem
