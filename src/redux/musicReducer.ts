const SET_MUSIC = 'music/SET_MUSIC'

export type musicItemType = {
    id: number,
    albumCover: string,
    name: string,
    performer: string,
    album: string,
    duration: string
}
type initialStateType = {
    musicData: musicItemType[]
}
let initialState: initialStateType = {
    musicData: [
        {
            id: 1,
            albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
            name: 'defaultName1',
            performer: 'performerName1',
            album: '1st album',
            duration: '2:10'
        },
        {
            id: 2,
            albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
            name: 'defaultName2',
            performer: 'performerName2',
            album: '1st album',
            duration: '3:15'
        },
        {
            id: 3,
            albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
            name: 'defaultName3',
            performer: 'performerName3',
            album: '1st album',
            duration: '1:49'
        },
        {
            id: 4,
            albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
            name: 'defaultName4',
            performer: 'performerName4',
            album: '1st album',
            duration: '6:55'
        },
        {
            id: 5,
            albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
            name: 'defaultName4',
            performer: 'performerName4',
            album: '1st album',
            duration: '6:55'
        },
        {
            id: 6,
            albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
            name: 'defaultName4',
            performer: 'performerName4',
            album: '1st album',
            duration: '6:55'
        },
        {
            id: 7,
            albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
            name: 'defaultName4',
            performer: 'performerName4',
            album: '1st album',
            duration: '6:55'
        },
        {
            id: 8,
            albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
            name: 'defaultName4',
            performer: 'performerName4',
            album: '1st album',
            duration: '6:55'
        },
    ]
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

export type setMusicActionType = {
    type: typeof SET_MUSIC
    payload: musicItemType[]
}
export const setMusic = (musicData: musicItemType[]):setMusicActionType => ({
    type: SET_MUSIC,
    payload: musicData
})

