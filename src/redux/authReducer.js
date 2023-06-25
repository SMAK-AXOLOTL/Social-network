import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_AUTH_IS_FETCHING = 'TOGGLE_AUTH_IS_FETCHING'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case TOGGLE_AUTH_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
})
export const toggleAuthIsFetching = (isFetching) => ({
    type: TOGGLE_AUTH_IS_FETCHING,
    payload: isFetching
})

export const getAuthUserData = () => (dispatch) => {
    dispatch(toggleAuthIsFetching(true))
    return authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
            dispatch(toggleAuthIsFetching(false))
        }
    })
}
export const login = (email, password, rememberMe = false, setStatus) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                setStatus('Invalid E-mail or password')
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}