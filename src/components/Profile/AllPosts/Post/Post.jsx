import React, {useState} from "react";
import s from './Post.module.css'

const Post = (props) => {
    let [currentRating, setCurrentRating] = useState(props.rating)
    let [isLiked, setIsLiked] = useState(false)
    let [isDisliked, setIsDisliked] = useState(false)

    function likePost() {
        switch (isLiked){
            case false:
                setCurrentRating(currentRating + 1)
                setIsLiked(true)
                setIsDisliked( false)
                break
            case true:
                setCurrentRating(currentRating - 1)
                setIsLiked(false)
                setIsDisliked( false)
                break
        }
    }

    function dislikePost() {
        switch (isDisliked){
            case false:
                setCurrentRating(currentRating - 1)
                setIsLiked(false)
                setIsDisliked( true)
                break
            case true:
                setCurrentRating(currentRating + 1)
                setIsLiked(false)
                setIsDisliked( false)
                break
        }
    }

    return (
        <div className={s.item}>
            <img src='https://cs6.pikabu.ru/avatars/377/v377504.jpg?329968686'></img>
            {props.message}
            <div>
                <button className={s.like} onClick={likePost}>
                    Like
                </button>
                <span>
                    {currentRating}
                </span>
                <button className={s.dislike} onClick={dislikePost}>
                    Dislike
                </button>
            </div>
        </div>
    )
}

export default Post