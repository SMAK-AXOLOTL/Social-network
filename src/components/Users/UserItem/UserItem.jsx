import React from "react";
import s from './UserItem.module.css'
import user_image from '../../../assets/images/user_image_placeholder.png'
const UserItem = (props) => {

    return(
        <div className={s.box}>
            <div className={s.leftside}>
                <div>
                    <img className={s.img} src={props.user.photos.small != null? props.user.photos.small: user_image}/>
                </div>
                <div>
                    {props.user.isFollowed
                        ?<button onClick={() => props.unfollow(props.user.id)}>Unfollow</button>
                        :<button onClick={() => props.follow(props.user.id)}>Follow</button>}
                </div>
            </div>
                <div className={s.rightside}>
                    <div className={s.fullName}>{props.user.name}</div>
                    <div className={s.country}>{"props.user.location.country"}</div>
                    <div className={s.status}>{props.user.status}</div>
                    <div className={s.city}>{"props.user.location.city"}</div>
                </div>
        </div>)
}

export default UserItem