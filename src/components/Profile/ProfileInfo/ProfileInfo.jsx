import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = () => {
    return (
        <div className={s.profile_block}>
            <img className={s.bigPicture} src='https://media.zicxa.com/6858371'/>
            <div>ava + desc</div>
        </div>
    )
}
export default ProfileInfo