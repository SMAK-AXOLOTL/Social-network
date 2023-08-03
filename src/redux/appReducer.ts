import {getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./reduxStore";


const SET_INITIALIZED = 'app/SET_INITIALIZED'

type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
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

export type SetInitializedActionType = {
    type: typeof SET_INITIALIZED
}
export const setInitialized = ():SetInitializedActionType => ({
    type: SET_INITIALIZED
})

export const initializeApp = (): ThunkAction<void, appStateType, any, SetInitializedActionType> => (dispatch) => {
    let authPromise = dispatch(getAuthUserData())

    Promise.all([authPromise]).then( () => {
        dispatch(setInitialized())
    })
}