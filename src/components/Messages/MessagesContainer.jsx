import {addMessage, updateNewMessageText} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";

class MessagesContainer extends React.Component {
    render() {
        return <>
            <Messages
                dialogsData={this.props.dialogsData}
                messagesData={this.props.messagesData}
                newMessageText={this.props.newMessageText}
                updateNewMessageText={this.props.updateNewMessageText}
                addMessage={this.props.addMessage}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage._newMessageText
    }
}

export default connect(mapStateToProps, {addMessage, updateNewMessageText})(MessagesContainer)