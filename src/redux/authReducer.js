import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const TOGGLE_AUTH_IS_FETCHING = 'auth/TOGGLE_AUTH_IS_FETCHING'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

const initialState = {
    authUserId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
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
        case SET_CAPTCHA_URL:{
            return {
                ...state, captchaUrl: action.payload
            }
        }
        default: {
            return state
        }
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        authUserId: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
})
const toggleAuthIsFetching = (isFetching) => ({
    type: TOGGLE_AUTH_IS_FETCHING,
    payload: isFetching
})

const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    payload: captchaUrl
})

export const getAuthUserData = () => async (dispatch) => {
    dispatch(toggleAuthIsFetching(true))
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
        dispatch(toggleAuthIsFetching(false))
    }
}
export const login = (email, password, rememberMe = false, captcha = '', setStatus) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (data.resultCode === 10){
        dispatch(getCaptchaUrl())
        setStatus('Incorrect anti-bot symbols')
    } else {
        setStatus('Invalid E-mail or password')
    }
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url

    dispatch(setCaptchaUrl(captchaUrl))
}