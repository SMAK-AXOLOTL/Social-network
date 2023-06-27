import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED'


let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state
    }
}

export const setInitialized = () => ({
    type: SET_INITIALIZED
})

export const initializeApp = () => (dispatch) => {
    let authPromise = dispatch(getAuthUserData())

    Promise.all([authPromise]).then( () => {
        dispatch(setInitialized())
    })
}