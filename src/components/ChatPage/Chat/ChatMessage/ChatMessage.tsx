import s from "./ChatMessage.module.css";
import React from "react";

import {Icons} from "../../../../assets/images/Icons";

export type ChatMessageType = {
    message: string
    photo: string
    userId: number,
    userName: string
}
const ChatMessage: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div className={s.message}>
            <img alt={'user avatar'} src={message.photo? message.photo : Icons.UserPlaceholder} width={60}/> <b>{message.userName}</b>
            <br/>
            {message.message}
        </div>
    );
}
export default ChatMessage