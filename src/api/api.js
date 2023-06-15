import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ec426fce-33e0-48a7-ab9a-0cadf75c7500"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe(){
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const followAPI = {
    followUser(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

