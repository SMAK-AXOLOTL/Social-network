import {appStateType} from "../../redux/reduxStore";

export const getAllUsers = (state: appStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: appStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsers = (state: appStateType) => {
    return state.usersPage.totalUsers
}
export const getCurrentPage = (state: appStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: appStateType) => {
    return state.usersPage.isFetching
}
export const getIsFollowing = (state: appStateType) => {
    return state.usersPage.isFollowing
}
export const getFilter = (state: appStateType) => {
    return state.usersPage.filter
}