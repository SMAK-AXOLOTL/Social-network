import React from "react";
import s from './MusicItem.module.css'

const MusicItem = (props) => {

    return (
        <div key={props.key} className={s.container}>
            <div className={s.content}>
                <div>
                    <img className={s.img} src={props.trek.albumCover}/>
                </div>
                <div className={s.name}>{props.trek.name}</div>
                <div>{props.trek.performer + ', '}</div>
                <div>{props.trek.album}</div>
                <div>{props.trek.duration}</div>
            </div>
        </div>
    )
}

export default MusicItem