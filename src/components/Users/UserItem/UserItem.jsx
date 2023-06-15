import React from "react";
import s from './UserItem.module.css'
import user_image from '../../../assets/images/user_image_placeholder.png'
import {NavLink} from "react-router-dom";


const UserItem = (props) => {
    return (
        <div className={s.box}>
            <div className={s.leftside}>
                <NavLink to={'/profile/' + props.user.id}>
                    <div>
                        <img className={s.img}
                             src={props.user.photos.small != null ? props.user.photos.small : user_image}/>
                    </div>
                </NavLink>
                <div>
                    {props.user.followed
                        ? <button disabled={props.isFollowing.some(id => id === props.user.id)}
                                  onClick={() => props.unfollow(props.user.id)}>Unfollow</button>
                        : <button disabled={props.isFollowing.some(id => id === props.user.id)}
                                  onClick={() => props.follow(props.user.id)}>Follow</button>}
                </div>
            </div>
            <div className={s.rightside}>
                <div className={s.fullName}>{props.user.name}</div>
                <div className={s.country}>{"Страна:"}</div>
                <div className={s.status}>{props.user.status}</div>
                <div className={s.city}>{"Город"}</div>
            </div>
        </div>)
}

export default UserItem