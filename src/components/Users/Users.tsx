import React, {useEffect} from 'react'
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Paginator from "../Common/Paginator/Paginator";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getIsFollowing, getPageSize, getTotalUsers, getAllUsers} from "../../utils/Selectors/UserSelectors";
import {follow, getUsers, unfollow} from "../../redux/usersReducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {appStateType} from "../../redux/reduxStore";

const Users: React.FC = () => {
    const totalUsers = useSelector(getTotalUsers)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getAllUsers)
    const isFollowing = useSelector(getIsFollowing)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const onPageSelectorClick = (selectedPage: number) => {
        dispatch(getUsers(selectedPage, pageSize))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [])


    return <div className={s.box}>
        <div>Here you can find any of {totalUsers} existing users!</div>
        <Paginator totalItems={totalUsers} pageSize={pageSize} currentPage={currentPage}
                   onPageSelectorClick={onPageSelectorClick}/>
        <div className={s.usersBox}>
            {users.map(u =>
                <UserItem
                    key={u.id}
                    user={u}
                    follow={followUser}
                    unfollow={unfollowUser}
                    isFollowing={isFollowing}
                />
            )
            }
        </div>
    </div>
}

export default Users