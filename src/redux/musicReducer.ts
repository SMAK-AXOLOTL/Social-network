const SET_MUSIC = 'music/SET_MUSIC'

type musicItemType = {
    id: number,
    albumCover: string,
    name: string,
    performer: string,
    album: string,
    duration: string
}
type initialStateType = {
    musicData: musicItemType[] | null
}
let initialState: initialStateType = {
    musicData: []
}

export const musicReducer = (state = initialState, action: setMusicActionType):initialStateType => {
    switch (action.type) {
        case SET_MUSIC: {
            return {
                ...state,
                musicData: [...action.payload]
            }
        }
        default: {
            return state
        }
    }
}

type setMusicActionType = {
    type: typeof SET_MUSIC
    payload: musicItemType[]
}
export const setMusic = (musicData: musicItemType[]):setMusicActionType => ({
    type: SET_MUSIC,
    payload: musicData
})

