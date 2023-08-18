import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Form, Formik} from "formik";
import {TextInput} from "../../utils/FormComponents";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {appStateType} from "../../redux/reduxStore";
import {AnyAction} from "redux";
import {getDialogsData, getMessagesData, getNewMessageText} from "../../utils/Selectors/MessagesSelectors";
import {addMessage, updateNewMessageText} from "../../redux/messagesReducer";
import {useAuthRedirect} from "../../hooks/useAuthRedirect";


const Messages: React.FC = () => {
    /*useAuthRedirect()*/

    const dialogsData = useSelector(getDialogsData)
    const messagesData = useSelector(getMessagesData)
    const newMessageText = useSelector(getNewMessageText)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const addNewMessage = () => {
        dispatch(addMessage)
    }
    const updateNewMessageTextHere = (newMessageText: string) => {
        dispatch(updateNewMessageText(newMessageText))
    }

    const dialogsMapped = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesMapped = messagesData.map(m => <MessageItem key={m.id} text={m.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsMapped}
            </div>
            <div className={s.messages}>
                <div style={{height: '200', overflowY: "scroll"}}>
                    {messagesMapped}
                </div>
                <div>
                    <Formik
                        initialValues={{
                            newMessageText: newMessageText
                        }}
                        onSubmit={(values, actions) => {
                            addNewMessage()
                            actions.setFieldValue('newMessageText', '')
                        }}
                    >
                        <Form>
                            <div>
                                <TextInput
                                    name={'newMessageText'}
                                    placeholder={'Enter message here!'}
                                    onBlur={(e:React.FormEvent<HTMLInputElement>) => {
                                        updateNewMessageTextHere(e.currentTarget.value)
                                    }}
                                />
                                <button type={"submit"}>Send</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Messages