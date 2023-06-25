import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, setStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId){
            userId = this.props.userId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <div>
            <Profile {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, setStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
