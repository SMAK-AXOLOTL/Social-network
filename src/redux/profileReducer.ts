import store, {appStateType} from "./reduxStore";
import {PhotosType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {profileAPI} from "../api/profileAPI";


const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS'
const UPDATE_PROFILE_SUCCESS = 'profile/UPDATE_PROFILE_SUCCESS'


type initialStateType = {
    profile: ProfileType
    status: string
}
let initialState: initialStateType = {
    profile: {
        userId: -1,
        aboutMe: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
        },
        photos: {
            small: null,
            large: null
        }
    },
    status: ''
}

type ActionType = setUserProfileActionType | setPhotoSuccessActionType | updateProfileSuccessActionType | setStatusActionType

export const profileReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case SET_PHOTO_SUCCESS:
            return {
                ...state,
                // @ts-ignore
                profile: {...state.profile, photos: {small: action.photos.photos.small, large: action.photos.photos.large}}
            }
        default: {
            return state
        }
    }
}

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    payload: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({
    type: SET_USER_PROFILE,
    payload: profile
})

type setPhotoSuccessActionType = {
    type: typeof SET_PHOTO_SUCCESS
    photos: PhotosType
}
export const setPhotoSuccess = (photos: PhotosType): setPhotoSuccessActionType => ({
    type: SET_PHOTO_SUCCESS,
    photos: photos
})

type updateProfileSuccessActionType = {
    type: typeof UPDATE_PROFILE_SUCCESS
    payload: {}
}
export const updateProfileSuccess = (profile: ProfileType): updateProfileSuccessActionType => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: profile
})
export const getUserProfile = (userId: number | null) => async (dispatch: any) => {
    if (userId){
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}

type setStatusActionType = {
    type: typeof SET_STATUS
    payload: string
}
export const setStatus = (text: string): setStatusActionType => ({
    type: SET_STATUS,
    payload: text
})

type ThunkType = ThunkAction<Promise<void>, appStateType, any, ActionType>
export const getStatus = (userId: number | null): ThunkType => async (dispatch) => {
    if (userId){
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
    }
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photo: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.setPhoto(photo)
    if (data.resultCode === 0) {
        debugger
        dispatch(setPhotoSuccess(data.data))
    }
}

export const updateProfileData = (profile: ProfileType, toggleEditMode: Function): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateProfileData(profile)
    if (data.resultCode === 0) {
        await dispatch(getUserProfile(store.getState().auth.authUserId))
        toggleEditMode()
    }
}