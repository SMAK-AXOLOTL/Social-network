import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_AUTH_IS_FETCHING = 'TOGGLE_AUTH_IS_FETCHING'

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        case TOGGLE_AUTH_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (id, email, login) => ({
    type: SET_USER_DATA,
    payload: {
        id: id,
        email: email,
        login: login
    }
})
export const toggleAuthIsFetching = (isFetching) => ({
    type: TOGGLE_AUTH_IS_FETCHING,
    payload: isFetching
})

export const authMe = () => (dispatch) => {
    dispatch(toggleAuthIsFetching(true))
    authAPI.authMe().then(data => {
        if (data.resultCode == 0){
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
            dispatch(toggleAuthIsFetching(false))
        }
    })
}