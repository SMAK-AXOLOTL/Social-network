import React from 'react'
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Paginator from "../Common/Paginator/Paginator";
import {userType} from "../../types/types";

type PropsType = {
    totalUsers: number
    pageSize: number
    currentPage: number
    onPageSelectorClick: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isFollowing: Array<number>
    users: Array<userType>
}

const Users: React.FC<PropsType> = ({
                 totalUsers, pageSize, currentPage,
                 onPageSelectorClick, follow, unfollow,
                 isFollowing, users
             }) => {
    return <div className={s.box}>
        <div>Here you can find any of {totalUsers} existing users!</div>
        <Paginator totalItems={totalUsers} pageSize={pageSize} currentPage={currentPage}
                   onPageSelectorClick={onPageSelectorClick}/>
        <div className={s.usersBox}>
            {
                users.map(u =>
                    <UserItem
                        key={u.id}
                        user={u}
                        follow={follow}
                        unfollow={unfollow}
                        isFollowing={isFollowing}
                    />
                )
            }
        </div>
    </div>
}

export default Users