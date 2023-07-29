import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Form, Formik} from "formik";
import {TextInput} from "../../utils/FormComponents";

type PropsType = {
    dialogsData: { id: number, name: string }[]
    messagesData: { id: number, text: string }[]
    newMessageText: string

    updateNewMessageText: (text: string) => void
    addMessage: () => void
}

const Messages: React.FC<PropsType> = (props) => {

    const dialogsMapped = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesMapped = props.messagesData.map(m => <MessageItem key={m.id} text={m.text}/>)

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
                    onSubmit={(values, actions) => {
                        props.addMessage()
                        actions.setFieldValue('newMessageText', '')
                    }}
                >
                    <Form>
                        <TextInput
                            name={'newMessageText'}
                            placeholder={'Enter message here!'}
                            onBlur={(e:React.FormEvent<HTMLInputElement>) => {
                                props.updateNewMessageText(e.currentTarget.value)
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