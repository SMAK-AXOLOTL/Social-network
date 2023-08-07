import {updateUserInUsersArray} from "../utils/objectHelper";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {appStateType, InferActionsTypes} from "./reduxStore";
import {usersAPI} from "../api/usersAPI";
import {followAPI} from "../api/followAPI";


type initialStateType = {
    users: Array<UserType>
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

export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: updateUserInUsersArray(state.users,  "id", action.payload,{followed: true})
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: updateUserInUsersArray(state.users, "id", action.payload, {followed: false})
            }
        }
        case "SET_USERS": {
            return {
                ...state, users: [...action.payload]
            }
        }
        case "SET_TOTAL_USERS": {
            return {
                ...state, totalUsers: action.payload
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state, currentPage: action.payload
            }
        }
        case "TOGGLE_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case "TOGGLE_IS_FOLLOWING": {
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

type ActionsType = InferActionsTypes<typeof actions>
export const actions = {
    confirmFollow: (userId: number) => ({
        type: "FOLLOW",
        payload: userId
    } as const),
    confirmUnfollow: (userId: number) => ({
        type: "UNFOLLOW",
        payload: userId
    } as const),
    setUsers: (users: UserType[]) => ({
        type: "SET_USERS",
        payload: users
    } as const),
    setTotalUsers: (totalUsersCount: number) => ({
        type: "SET_TOTAL_USERS",
        payload: totalUsersCount
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: "SET_CURRENT_PAGE",
        payload: currentPage
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: "TOGGLE_IS_FETCHING",
        payload: isFetching
    } as const),
    toggleIsFollowing: (isFollowing: boolean, userId: number) => ({
        type: "TOGGLE_IS_FOLLOWING",
        payload: {
            isFollowing: isFollowing,
            userId: userId
        }
    } as const)
}


type ThunkType = ThunkAction<Promise<void>, appStateType, any, ActionsType>
export const getUsers = (currentPage: number = 1,
                         pageSize: number = 5): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        try {
            let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(actions.setCurrentPage(currentPage))
            dispatch(actions.setUsers(data.items))
            dispatch(actions.setTotalUsers(data.totalCount))
        } finally {
            dispatch(actions.toggleIsFetching(false))
        }
    }

const _followUnfollowFlow =
    async (dispatch: Dispatch<ActionsType>, userId: number, apiMethod: any, actionCreator: (id: number) => ActionsType) => {

    dispatch(actions.toggleIsFollowing(true, userId))
    try {
        let data = await apiMethod(userId)
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
    } finally {
        dispatch(actions.toggleIsFollowing(false, userId))
    }
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, followAPI.followUser.bind(usersAPI), actions.confirmFollow)
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, followAPI.unfollowUser.bind(usersAPI), actions.confirmUnfollow)
}