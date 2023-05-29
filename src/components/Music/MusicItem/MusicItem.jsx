import React from "react";
import s from './MusicItem.module.css'

const MusicItem = (props) => {

    return (
        <div key={props.key} className={s.container}>
                <div className={s.imgBox}>
                    <img className={s.img} src={props.trek.albumCover}/>
                </div>
                <div className={s.infoBox}>
                    <div className={s.name}>{props.trek.name}</div>
                    <div className={s.performer}>{props.trek.performer + ', '}</div>
                    <div className={s.album}>{props.trek.album}</div>
                </div>
                <div className={s.durationBox}>{props.trek.duration}</div>
        </div>
    )
}

export default MusicItem