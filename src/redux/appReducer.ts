import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED'
export type SetInitializedActionType = {
    type: typeof SET_INITIALIZED
}


let initialState: InitialStateType = {
    initialized: false
}

type InitialStateType = {
    initialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: SetInitializedActionType):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default: return state
    }
}

export const setInitialized = ():SetInitializedActionType => ({
    type: SET_INITIALIZED
})

export const initializeApp = () => (dispatch: any) => {
    let authPromise = dispatch(getAuthUserData())

    Promise.all([authPromise]).then( () => {
        dispatch(setInitialized())
    })
}