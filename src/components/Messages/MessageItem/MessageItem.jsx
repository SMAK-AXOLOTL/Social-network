import s from "./MessageItem.module.css";
import React from "react";

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}
export default MessageItem
