import {appStateType} from "../../redux/reduxStore";

export const getMusicData = (state: appStateType) => {
    return state.musicPage.musicData
}


