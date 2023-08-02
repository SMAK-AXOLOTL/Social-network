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
import {profileType} from "../../types/types";

type PropsType = {
    userId: number
    profile: profileType
    status: string

    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    setStatus: (status: string) => void
    savePhoto: (photo: File) => void
    updateProfileData: (profile: profileType, toggleEditMode: Function) => void
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
