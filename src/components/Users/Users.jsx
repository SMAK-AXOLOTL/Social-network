import React from 'react'
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Paginator from "../Common/Paginator/Paginator";

let Users = ({
                 totalUsers, pageSize, currentPage,
                 onPageSelectorClick, follow, unfollow,
                 isFollowing, users
             }) => {
    return <div className={s.box}>
        <Paginator totalUsers={totalUsers} pageSize={pageSize} currentPage={currentPage}
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