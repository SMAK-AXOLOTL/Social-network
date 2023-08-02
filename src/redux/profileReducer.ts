import {profileAPI} from "../api/api";
import store from "./reduxStore";
import {profileType} from "../types/types";


const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS'
const UPDATE_PROFILE_SUCCESS = 'profile/UPDATE_PROFILE_SUCCESS'


type initialStateType = {
    profile: profileType
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
        photos: {}
    },
    status: ''
}

export const profileReducer = (state = initialState, action: any): initialStateType => {
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
                profile: {...state.profile, photos: action.photos}
            }
        default: {
            return state
        }
    }
}

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    payload: {}
}
export const setUserProfile = (text: {}): setUserProfileActionType => ({
    type: SET_USER_PROFILE,
    payload: text
})

type setPhotoSuccessActionType = {
    type: typeof SET_PHOTO_SUCCESS
    photos: string[]
}
export const setPhotoSuccess = (photos: string[]): setPhotoSuccessActionType => ({
    type: SET_PHOTO_SUCCESS,
    photos: photos
})

type updateProfileSuccessActionType = {
    type: typeof UPDATE_PROFILE_SUCCESS
    payload: {}
}
export const updateProfileSuccess = (profile: {}): updateProfileSuccessActionType => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: profile
})
export const getUserProfile = (userId: number | null) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

type setStatusActionType = {
    type: typeof SET_STATUS
    payload: string
}
export const setStatus = (text: string): setStatusActionType => ({
    type: SET_STATUS,
    payload: text
})
export const getStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photo: File) => async (dispatch: any) => {
    let data = await profileAPI.setPhoto(photo)
    if (data.resultCode === 0) {
        dispatch(setPhotoSuccess(data.data.photos))
    }
}

export const updateProfileData = (profile: profileType, toggleEditMode: Function) => async (dispatch: any) => {
    let data = await profileAPI.updateProfileData(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(store.getState().auth.authUserId))
        toggleEditMode()
    }
}