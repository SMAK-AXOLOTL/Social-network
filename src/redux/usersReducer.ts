import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelper";
import {userType} from "../types/types";
import { Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./reduxStore";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_USERS = 'users/SET_TOTAL_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE_IS_FOLLOWING'


type initialStateType = {
    users: Array<userType>
    pageSize: number
    totalUsers: number
    currentPage: number
    isFetching: boolean
    isFollowing: Array<number>
}
let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
}

type ActionType = confirmFollowActionType | confirmUnfollowActionType | setUsersActionType
    | setTotalUsersActionType | setCurrentPageActionType | toggleIsFetchingActionType
    | toggleIsFollowingActionType

export const usersReducer = (state = initialState, action: ActionType): initialStateType => {
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
export const confirmFollow = (userId: number): confirmFollowActionType => ({
    type: FOLLOW,
    payload: userId
})

type confirmUnfollowActionType = {
    type: typeof UNFOLLOW
    payload: number
}
export const confirmUnfollow = (userId: number): confirmUnfollowActionType => ({
    type: UNFOLLOW,
    payload: userId
})

type setUsersActionType = {
    type: typeof SET_USERS
    payload: Array<userType>
}
export const setUsers = (users: userType[]): setUsersActionType => ({
    type: SET_USERS,
    payload: users
})

type setTotalUsersActionType = {
    type: typeof SET_TOTAL_USERS,
    payload: number
}
export const setTotalUsers = (totalUsersCount: number): setTotalUsersActionType => ({
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
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({
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

type ThunkType = ThunkAction<Promise<void>, appStateType, any, ActionType>

export const getUsers = (currentPage: number = 1,
                         pageSize: number = 5): ThunkType =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true))
        try {
            let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(data.items))
            dispatch(setTotalUsers(data.totalCount))
        } finally {
            dispatch(toggleIsFetching(false))
        }
    }

const _followUnfollowFlow = async (dispatch: Dispatch<ActionType>,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (id: number) => confirmFollowActionType | confirmUnfollowActionType) => {
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

export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, followAPI.followUser.bind(usersAPI), confirmFollow)
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, followAPI.unfollowUser.bind(usersAPI), confirmUnfollow)
}