const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1
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
export const setTotalUsersAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS,
    payload: totalUsersCount
})
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
})


