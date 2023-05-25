import React from "react";
import s from './Post.module.css'

const Post = (props) => {

    const updateRating = () => {

    }

    return (
        <div className={s.item}>
            <img src='https://cs6.pikabu.ru/avatars/377/v377504.jpg?329968686'></img>
            {props.message}
            <div>
                <button className={s.like} onClick={updateRating}>Like</button><span> {props.rating} </span><button className={s.dislike}>Dislike</button>
            </div>
        </div>
    )
}

export default Post