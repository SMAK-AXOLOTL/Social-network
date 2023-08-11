import {GetItemsType, instance} from "./api";
import {FilterType, UserType} from "../types/types";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, filter: FilterType) {
        return instance.get<GetItemsType<UserType>>(
            `users?page=${currentPage}&count=${pageSize}&term=${filter.term}&friend=${filter.onlyShow}`
        ).then(response => response.data)
    }
}