import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelper";
import {userType} from "../types/types";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE_IS_FOLLOWING'


type initialStateType = {
    users: userType[]
    pageSize: number,
    totalUsers: number,
    currentPage: number,
    isFetching: boolean,
    isFollowing: number[]
}
let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
}

export const usersReducer = (state = initialState, action:any):initialStateType => {
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

type confirmFollowActionType = {
    type: typeof FOLLOW
    payload: number
}
export const confirmFollow = (userId:number):confirmFollowActionType => ({
    type: FOLLOW,
    payload: userId
})

type confirmUnfollowActionType = {
    type: typeof UNFOLLOW
    payload: number
}
export const confirmUnfollow = (userId:number):confirmUnfollowActionType => ({
    type: UNFOLLOW,
    payload: userId
})

type setUsersActionType = {
    type: typeof SET_USERS
    payload: {}[]
}
export const setUsers = (users:userType[]):setUsersActionType => ({
    type: SET_USERS,
    payload: users
})

type setTotalUsersActionType = {
    type: typeof SET_TOTAL_USERS,
    payload: number
}
export const setTotalUsers = (totalUsersCount: number):setTotalUsersActionType => ({
    type: SET_TOTAL_USERS,
    payload: totalUsersCount
})

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    payload: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
})

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    payload: boolean
}
export const toggleIsFetching = (isFetching:boolean): toggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
})

type toggleIsFollowingActionType = {
    type: typeof TOGGLE_IS_FOLLOWING,
    payload: {
        isFollowing: boolean,
        userId: number
    }
}
export const toggleIsFollowing = (isFollowing: boolean, userId: number): toggleIsFollowingActionType => ({
    type: TOGGLE_IS_FOLLOWING,
    payload: {
        isFollowing: isFollowing,
        userId: userId
    }
})

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    try {
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsers(data.totalCount))
    } finally {
        dispatch(toggleIsFetching(false))
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: Function, actionCreator: Function) => {
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

export const follow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, followAPI.followUser.bind(usersAPI), confirmFollow)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, followAPI.unfollowUser.bind(usersAPI), confirmUnfollow)
}