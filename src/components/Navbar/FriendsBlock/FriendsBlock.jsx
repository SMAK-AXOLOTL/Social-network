import s from "./FriendsBlock.module.css";
import React from "react";
import FriendCircle from "./FriendCircle/FriendCircle";

const FriendsBlock = (props) =>{
    let friends = props.dialogs.map(d => <FriendCircle name={d.name} id={d.id}/>)
    return(
        <div className={s.box}>
            {friends}
        </div>
    )
}
export default FriendsBlock