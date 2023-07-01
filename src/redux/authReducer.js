import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const TOGGLE_AUTH_IS_FETCHING = 'auth/TOGGLE_AUTH_IS_FETCHING'

let initialState = {
    authUserId: null,
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
        authUserId: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
})
export const toggleAuthIsFetching = (isFetching) => ({
    type: TOGGLE_AUTH_IS_FETCHING,
    payload: isFetching
})

export const getAuthUserData = () => async (dispatch) => {
    dispatch(toggleAuthIsFetching(true))
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
        dispatch(toggleAuthIsFetching(false))
    }
}
export const login = (email, password, rememberMe = false, setStatus) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        setStatus('Invalid E-mail or password')
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}