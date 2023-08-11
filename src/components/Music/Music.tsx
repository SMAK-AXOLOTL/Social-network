import React, {useEffect} from "react";
import s from './Music.module.css'
import MusicItem from "./MusicItem/MusicItem";
import {musicItemType, setMusic} from "../../redux/musicReducer";
import {useDispatch, useSelector} from "react-redux";
import {getMusicData} from "../../utils/Selectors/MusicSelectors";
import {ThunkDispatch} from "redux-thunk";
import {appStateType} from "../../redux/reduxStore";
import {AnyAction} from "redux";


export const Music: React.FC = () => {
    const musicData = useSelector(getMusicData)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction>  = useDispatch()

    const setMusicData = (musicData: musicItemType[]) => {
        dispatch(setMusic(musicData))
    }

    useEffect(() => {
        if (musicData.length === 0) {
            setMusicData(musicData)
        }
    }, [])

    return (
        <div className={s.container}>
            {musicData.map(m => <MusicItem key={m.id} trek={m}/>)}
        </div>
    );
}