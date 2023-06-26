import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
export const setUserProfile = (text) => ({
    type: SET_USER_PROFILE,
    payload: text
})
export const getUserProfile = (userId) => (dispatch) => {
    if (!userId){
        userId = 29281
    }
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const setStatus = (text) => ({
    type: SET_STATUS,
    payload: text
})
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
}

