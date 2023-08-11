import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPosts from "./AllPosts/AllPosts";
import {useAuthRedirect} from "../../hooks/useAuthRedirect";

export const Profile: React.FC = () => {
    useAuthRedirect()

    return <div className={s.content}>
        <ProfileInfo/>
        <AllPosts/>
    </div>
}

export default Profile