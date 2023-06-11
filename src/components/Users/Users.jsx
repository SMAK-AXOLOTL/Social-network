import React from 'react'
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curPL = (props.currentPage - 5 < 0 ? 0 : props.currentPage - 5)
    let curPR = props.currentPage + 5
    let slicedPages = pages.slice(curPL, curPR)

 
    return <div className={s.box}>
        <div className={s.pageSelector}>
            {slicedPages.map(p => {
                return <span
                    className={props.currentPage === p && s.selectedPage}
                    onClick={() =>
                        props.onPageSelectorClick(p)
                    }>
                            {p + ' '}
                        </span>
            })}
        </div>
        {
            props.users.map(u =>
                <NavLink to={'/profile/' + u.id}>
                    <UserItem
                        key={u.id}
                        user={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                </NavLink>
                )
        }
    </div>
}

export default Users