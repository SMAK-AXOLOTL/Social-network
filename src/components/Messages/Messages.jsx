import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Form, Formik} from "formik";
import {TextInput} from "../../utils/FormComponents";

const Messages = (props) => {

    const dialogsMapped = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesMapped = props.messagesData.map(m => <MessageItem text={m.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsMapped}
            </div>
            <div className={s.messages}>
                {messagesMapped}
                <Formik
                    initialValues={{
                        newMessageText: props.newMessageText
                    }}
                    onSubmit={(values) => {
                        props.updateNewMessageText(values.newMessageText)
                        props.addMessage()
                    }}
                >
                    <Form>
                        <TextInput
                            name={'newMessageText'}
                            placeholder={'Enter message here!'}
                            onBlur={e => {
                                props.updateNewMessageText(e.target.value)
                            }}
                        />
                        <button>Send</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Messages