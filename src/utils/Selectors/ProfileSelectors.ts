import {appStateType} from "../../redux/reduxStore";

export const getProfile = (state: appStateType) => {
    return state.profilePage.profile
}
export const getUserStatus = (state: appStateType) => {
    return state.profilePage.status
}



