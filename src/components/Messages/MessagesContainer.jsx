import {addMessage, updateNewMessageText} from "../../redux/messagesReducer.ts";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const MessagesContainer = props => {
        return <Messages {...props}/>
}

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage._newMessageText
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    withAuthRedirect
)(MessagesContainer)