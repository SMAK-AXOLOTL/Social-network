const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return {...u, isFollowed: true}
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
                        return {...u, isFollowed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.payload]
            }
        }
        default: {
            return state
        }
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    payload: userId
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    payload: userId
})
export const setUsersAC = (users) => ({
    type: SET_USERS,
    payload: users
})


