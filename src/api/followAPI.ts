import {instance, ResponseType} from "./api";

export const followAPI = {
    followUser(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(response => response.data)
    }
}