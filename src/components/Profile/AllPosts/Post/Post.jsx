import React, {useState} from "react";
import s from './Post.module.css'

const Post = (props) => {
    let [currentRating, setCurrentRating] = useState(props.rating)
    let [isRatedWith, RateWith] = useState(0)


    function likePost() {
        switch (isRatedWith){
            case 1:
                setCurrentRating(currentRating - 1)
                RateWith(0)
                break
            default:
                setCurrentRating(props.rating + 1)
                RateWith(1)
                break
        }
    }

    function dislikePost() {
        switch (isRatedWith){
            case -1:
                setCurrentRating(currentRating + 1)
                RateWith(0)
                break
            default:
                setCurrentRating(props.rating - 1)
                RateWith(-1)
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