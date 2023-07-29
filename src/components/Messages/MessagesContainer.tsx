import {addMessage, updateNewMessageText} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {appStateType} from "../../redux/reduxStore";

let mapStateToProps = (state: appStateType) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage._newMessageText
    }
}


export default compose<any>(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    withAuthRedirect
)(Messages)