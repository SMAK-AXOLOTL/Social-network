import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, setStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";


const ProfileContainer = props => {

    useEffect(() => {
        let userId = props.router.params.userId
        if (!userId){
            userId = props.userId
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])


        return <div>
            <Profile {...props}/>
        </div>

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
