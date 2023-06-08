import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) => {

    const dialogsMapped = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesMapped = props.messagesData.map(m => <MessageItem text={m.text}/>)

    let messageElement = React.createRef()

    const onClick = () => {
        props.addMessage()
    }

    const onChange = () =>{
        let text = messageElement.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsMapped}
            </div>
            <div className={s.messages}>
                {messagesMapped}
                <textarea ref={messageElement} value={props.newMessageText} placeholder={'Enter message here!'} onChange={onChange}></textarea>
                <button onClick={onClick}>Send</button>
            </div>
        </div>
    )
}

export default Messages