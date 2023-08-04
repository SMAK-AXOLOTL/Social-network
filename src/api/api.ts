import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ec426fce-33e0-48a7-ab9a-0cadf75c7500"
    }
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaError = 10
}


export type GetItemsType<T> = {
    items: T[]
    totalCount: number
    error: string | null
}

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    resultCode: RC
    messages: string[]
}