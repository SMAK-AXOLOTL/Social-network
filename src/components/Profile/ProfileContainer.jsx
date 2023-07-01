import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, setStatus, savePhoto} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {useParams} from "react-router-dom";


const ProfileContainer = props => {

    let {userId} = useParams()/*useState(() => {return props.router.params.userId || props.userId})*/



    useEffect(() => {
        const fetchData = async (userId) => {
            props.getUserProfile(userId)
            props.getStatus(userId)
        }

        fetchData(userId? userId : props.userId)
    }, [userId])

        return <div>
            <Profile isOwner={!userId} {...props}/>
        </div>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.authUserId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, setStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
