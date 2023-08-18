import React, {useEffect, useState} from 'react'
import s from './Chat.module.css'
import {Form, Formik} from "formik";
import {TextInput} from "../../../utils/FormComponents";
import ChatMessage, {ChatMessageType} from "./ChatMessage/ChatMessage";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export const Chat: React.FC = () => {

    const [messagesData, setMessages] = useState<ChatMessageType[]>([])
    const [newMessageText, setNewMessageText] = useState('')

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data);
            setMessages((prevState) => [...prevState, ...newMessages])
        })
    }, [])

    const messagesMapped = messagesData.map((m , index)=> <ChatMessage key={index} message={m}/>)

    const sendMessage = () => {
        if(newMessageText !== ''){
            ws.send(newMessageText)
            setNewMessageText('')
        }
    }

    return (
        <div className={s.dialogs}>
            <div style={{height: '200', overflowY: "scroll"}}>
                {messagesMapped}
            </div>
            <div></div>
            <div>
                <Formik
                    initialValues={{
                        newMessageText: newMessageText
                    }}
                    onSubmit={(values, actions) => {
                        sendMessage()
                        actions.setFieldValue('newMessageText', '')
                    }}
                >
                    <Form>
                        <div>
                            <TextInput
                                name={'newMessageText'}
                                placeholder={'Enter message here!'}
                                onBlur={(e: React.FormEvent<HTMLInputElement>) => {
                                    setNewMessageText(e.currentTarget.value)
                                }}
                            />
                            <button type={"submit"}>Send</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}