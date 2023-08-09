import {appStateType} from "../../redux/reduxStore";

export const getAuthUserId = (state: appStateType) => {
    return state.auth.authUserId
}
export const getEmail = (state: appStateType) => {
    return state.auth.email
}
export const getLogin = (state: appStateType) => {
    return state.auth.login
}
export const getIsFetching = (state: appStateType) => {
    return state.auth.isFetching
}
export const getIsAuth = (state: appStateType) => {
    return state.auth.isAuth
}
export const getCaptchaUrl = (state: appStateType) => {
    return state.auth.captchaUrl
}


