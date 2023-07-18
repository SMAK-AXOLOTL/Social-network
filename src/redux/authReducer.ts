import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA'

type SetUserDataActionPayloadType = {
    authUserId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetUserDataActionPayloadType
}

const TOGGLE_AUTH_IS_FETCHING = 'auth/TOGGLE_AUTH_IS_FETCHING'
type ToggleAuthIsFetchingActionType = {
    type: typeof TOGGLE_AUTH_IS_FETCHING
    payload: boolean
}

const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'
type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    payload: string
}

const initialState: InitialStateType = {
    authUserId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}
type InitialStateType = {
    authUserId: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    captchaUrl: string | null
}

export const authReducer = (state: InitialStateType = initialState, action: SetUserDataActionType | ToggleAuthIsFetchingActionType| SetCaptchaUrlActionType): InitialStateType => {
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

const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean):SetUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        authUserId: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
})
const toggleAuthIsFetching = (isFetching: boolean):ToggleAuthIsFetchingActionType => ({
    type: TOGGLE_AUTH_IS_FETCHING,
    payload: isFetching
})

const setCaptchaUrl = (captchaUrl: string):SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    payload: captchaUrl
})

export const getAuthUserData = () => async (dispatch: any) => {
    dispatch(toggleAuthIsFetching(true))
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
        dispatch(toggleAuthIsFetching(false))
    }
}
export const login = (email: string, password: string, rememberMe = false, captcha = '', setStatus: any) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url

    dispatch(setCaptchaUrl(captchaUrl))
}