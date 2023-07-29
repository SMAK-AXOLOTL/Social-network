import s from "./MessageItem.module.css";
import React from "react";

type PropsType = {
    text: string
}
const MessageItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}
export default MessageItem
