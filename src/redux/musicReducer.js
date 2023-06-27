const SET_MUSIC = 'music/SET_MUSIC'


let initialState = {
    musicData: [
    ]
}

export const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MUSIC: {
            return {
                ...state,
                musicData: [...state.musicData, ...action.payload]
            }
        }
        default: {
            return state
        }
    }
}

export const setMusic = (musicData) => ({
    type: SET_MUSIC,
    payload: musicData
})

