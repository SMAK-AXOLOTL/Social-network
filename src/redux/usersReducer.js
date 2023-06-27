import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelper";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE_IS_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, "id", {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, "id", {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...action.payload]
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state, totalUsers: action.payload
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.payload
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.payload.isFollowing
                    ? [...state.isFollowing, action.payload.userId]
                    : state.isFollowing.filter(id => id !== action.payload.userId)
            }
        }
        default: {
            return state
        }
    }
}

export const confirmFollow = (userId) => ({
    type: FOLLOW,
    payload: userId
})
export const confirmUnfollow = (userId) => ({
    type: UNFOLLOW,
    payload: userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
})
export const setTotalUsers = (totalUsersCount) => ({
    type: SET_TOTAL_USERS,
    payload: totalUsersCount
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
})
export const toggleIsFollowing = (isFollowing, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    payload: {
        isFollowing: isFollowing,
        userId: userId
    }
})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    try {
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsers(data.totalCount))
    } finally {
        dispatch(toggleIsFetching(false))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowing(true, userId))
    try {
        let data = await apiMethod(userId)
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
    } finally {
        dispatch(toggleIsFollowing(false, userId))
    }
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.followUser.bind(usersAPI), confirmFollow)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.unfollowUser.bind(usersAPI), confirmUnfollow)
}