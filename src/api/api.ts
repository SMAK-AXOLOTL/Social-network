import axios from "axios";
import {photosType, profileType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ec426fce-33e0-48a7-ab9a-0cadf75c7500"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaError = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: string[]
}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum
    messages: string[]
}
type LogoutResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: string[]
}
export const authAPI = {
    authMe() {
        return instance.get<MeResponseType>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha = '') {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`).then(response => response.data)
    }
}

type FollowResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: string[]
}
type UnfollowResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: string[]
}
export const followAPI = {
    followUser(userId: number) {
        return instance.post<FollowResponseType>(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId: number) {
        return instance.delete<UnfollowResponseType>(`follow/${userId}`).then(response => response.data)
    }
}


type GetProfileResponseType = profileType
type GetStatusResponseType = string
type UpdateStatusResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: string[]
}
type SetPhotoResponseType = {
    data: {
        photos: photosType
    }
    resultCode: ResultCodeEnum
    messages: string[]
}
type UpdateProfileResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: string[]
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<GetProfileResponseType>(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<GetStatusResponseType>(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(statusText: string) {
        return instance.put<UpdateStatusResponseType>(`profile/status`, {status: statusText})
    },
    setPhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<SetPhotoResponseType>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => response.data)
    },
    updateProfileData(profile: profileType){
        return instance.put<UpdateProfileResponseType>(`profile`, profile).then(response => response.data)
    }
}


type GetCaptchaResponseType = {
    url: string
}
export const securityAPI = {
    getCaptcha(){
        return instance.get<GetCaptchaResponseType>("security/get-captcha-url").then(response => response.data)
    }
}