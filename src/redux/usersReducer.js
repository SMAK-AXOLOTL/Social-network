import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

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
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return {...u, followed: false}
                    }
                    return u
                })
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

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize).finally(dispatch(toggleIsFetching(false))).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsers(data.totalCount))
    })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    followAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(confirmFollow(userId))
            dispatch(toggleIsFollowing(false, userId))
        }
    })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    followAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(confirmUnfollow(userId))
            dispatch(toggleIsFollowing(false, userId))
        }
    })
}