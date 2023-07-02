import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPostsContainer from "./AllPosts/AllPostsContainer";

const Profile = (props) => {
    return (<div className={s.content}>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus} setStatus={props.setStatus} savePhoto={props.savePhoto}
                     updateProfileData={props.updateProfileData}
        />
        <AllPostsContainer/>
    </div>)
}

export default Profile