import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profileType} from "../../types/types";
import AllPosts from "./AllPosts/AllPosts";

type PropsType = {
    isOwner: boolean
    userId: number
    profile: profileType
    status: string

    updateStatus: (status: string) => void
    setStatus: (status: string) => void
    savePhoto: (photo: File) => void
    updateProfileData: (profile: profileType, toggleEditMode: Function) => void
}
const Profile: React.FC<PropsType> = (props) => {
    return (<div className={s.content}>
        <ProfileInfo isOwner={props.isOwner} userId={props.userId} profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus} setStatus={props.setStatus} savePhoto={props.savePhoto}
                     updateProfileData={props.updateProfileData}
        />
        <AllPosts/>
    </div>)
}

export default Profile