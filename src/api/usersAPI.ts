import {GetItemsType, instance} from "./api";
import {UserType} from "../types/types";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetItemsType<UserType> >(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}