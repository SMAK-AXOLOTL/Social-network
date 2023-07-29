import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getStatus,
    updateStatus,
    setStatus,
    savePhoto,
    updateProfileData
} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {useParams} from "react-router-dom";
import {appStateType} from "../../redux/reduxStore";

type PropsType = {
    userId: number

    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
}
const ProfileContainer: React.FC<PropsType> = (props) => {

    let {userId} = useParams()

    useEffect(() => {
        const fetchData = async (userId: number) => {
            props.getUserProfile(userId)
            props.getStatus(userId)
        }

        fetchData(Number(userId) ? Number(userId) : props.userId)
    }, [userId])

    return <div>
        <Profile isOwner={!Number(userId)} {...props}/>
    </div>
}

let mapStateToProps = (state: appStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.authUserId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, setStatus, savePhoto, updateProfileData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
