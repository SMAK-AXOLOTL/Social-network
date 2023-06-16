import {addMessage, updateNewMessageText} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class MessagesContainer extends React.Component {
    render() {
        return <Messages {...this.props}/>
    }
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