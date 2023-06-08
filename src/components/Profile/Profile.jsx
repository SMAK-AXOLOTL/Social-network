import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPostsContainer from "./AllPosts/AllPostsContainer";


const Profile = (props) => {
    return (<div className={s.content}>
        <ProfileInfo/>
        <AllPostsContainer
            store={props.store}
        />
    </div>)
}

export default Profile