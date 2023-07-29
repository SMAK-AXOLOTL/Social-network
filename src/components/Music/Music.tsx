import React, {useEffect} from "react";
import s from './Music.module.css'
import MusicItem from "./MusicItem/MusicItem";
import {musicItemType} from "../../redux/musicReducer";

type PropsType = {
    musicData: Array<musicItemType>
    setMusic: (musicData: Array<musicItemType>) => void
}

const Music: React.FC<PropsType> = ({musicData, setMusic}) => {
    useEffect(() => {
        if (musicData.length === 0) {
            setMusic(musicData)
        }
    }, [])

    return (
        <div className={s.container}>
            {musicData.map(m => <MusicItem key={m.id} trek={m}/>)}
        </div>
    );
}

export default Music