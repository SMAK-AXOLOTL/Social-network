import React from "react";
import s from './UserItem.module.css'
import user_image from '../../../assets/images/user_image_placeholder.png'
import {NavLink} from "react-router-dom";
import {userType} from "../../../types/types";

type PropsType = {
    user: userType
    isFollowing: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
const UserItem: React.FC<PropsType> = ({user, isFollowing, unfollow, follow}) => {
    return (
        <div className={s.box}>
            <div className={s.leftside}>
                <NavLink to={'/profile/' + user.id}>
                    <div>
                        <img className={s.img} alt={"profile picture"}
                             src={user.photos.small != null ? user.photos.small : user_image}/>
                    </div>
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={isFollowing.some(id => id === user.id)}
                                  onClick={() => unfollow(user.id)}>Unfollow</button>
                        : <button disabled={isFollowing.some(id => id === user.id)}
                                  onClick={() => follow(user.id)}>Follow</button>}
                </div>
            </div>
            <div className={s.rightside}>
                <div className={s.fullName}>{user.name}</div>
                <div className={s.country}>{"Страна:"}</div>
                <div className={s.status}>{user.status}</div>
                <div className={s.city}>{"Город"}</div>
            </div>
        </div>)
}

export default UserItem