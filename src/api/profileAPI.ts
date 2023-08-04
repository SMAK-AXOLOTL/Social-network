import {PhotosType, ProfileType} from "../types/types";
import {instance, ResponseType} from "./api";

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(statusText: string) {
        return instance.put<ResponseType>(`profile/status`, {status: statusText})
    },
    setPhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseType<PhotosType>>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => response.data)
    },
    updateProfileData(profile: ProfileType) {
        return instance.put<ResponseType>(`profile`, profile).then(response => response.data)
    }
}