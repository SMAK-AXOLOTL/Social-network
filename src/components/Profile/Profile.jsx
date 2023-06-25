import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPostsContainer from "./AllPosts/AllPostsContainer";

const Profile = (props) => {
    return (<div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} setStatus={props.setStatus}/>
        <AllPostsContainer/>
    </div>)
}

export default Profile