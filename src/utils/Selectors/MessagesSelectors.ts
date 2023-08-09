import {appStateType} from "../../redux/reduxStore";

export const getNewMessageText = (state: appStateType) => {
    return state.messagesPage._newMessageText
}
export const getDialogsData = (state: appStateType) => {
    return state.messagesPage.dialogsData
}
export const getMessagesData= (state: appStateType) => {
    return state.messagesPage.messagesData
}



