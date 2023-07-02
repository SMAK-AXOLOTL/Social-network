import {profileAPI} from "../api/api";
import store from "./reduxStore";

const ADD_POST = 'profile/ADD_POST'
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS'
const UPDATE_PROFILE_SUCCESS = 'profile/UPDATE_PROFILE_SUCCESS'

let initialState = {
    profile: null,
    postsData: [
        {id: 1, message: 'I\'m scared', rating: 0},
        {id: 2, message: 'Am I alone here?', rating: 0},
        {id: 3, message: 'Hello?', rating: 0},
        {id: 4, message: 'Where is everybody?', rating: 0},
        {id: 5, message: 'Hello, world!', rating: 0},
    ],
    _newPostText: '',
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: 6, message: state._newPostText, rating: 0}],
                _newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                _newPostText: action.payload
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.payload)
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

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    payload: text
})
export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId
})

export const setUserProfile = (text) => ({
    type: SET_USER_PROFILE,
    payload: text
})

export const setPhotoSuccess = (photos) => ({
    type: SET_PHOTO_SUCCESS,
    photos
})

export const updateProfileSuccess = (profile) => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload: profile
})
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const setStatus = (text) => ({
    type: SET_STATUS,
    payload: text
})
export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photo) => async (dispatch)=> {
    let data = await profileAPI.setPhoto(photo)
    if (data.resultCode === 0) {
        dispatch(setPhotoSuccess(data.data.photos))
    }
}

export const updateProfileData = (profile) => async (dispatch) => {
    let data = await profileAPI.updateProfileData(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(store.getState().auth.authUserId))
    }
}