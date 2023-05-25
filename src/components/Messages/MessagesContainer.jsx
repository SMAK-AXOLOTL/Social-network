import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage._newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(addMessageActionCreator())
        },
        onChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer