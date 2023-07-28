import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import React, {useEffect} from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {appStateType} from "../../redux/reduxStore";
import {userType} from "../../types/types";

type PropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    isFollowing: Array<number>
    totalUsers: number
    users: Array<userType>


    setCurrentPage: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
const UsersContainer: React.FC<PropsType> = props => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])

    const onPageSelectorClick = (selectedPage: number) => {
        props.setCurrentPage(selectedPage)
        props.getUsers(selectedPage, props.pageSize)
    }

    return <>
        {props.isFetching
            ? <Preloader/>
            : <Users
                {...props}
                onPageSelectorClick={onPageSelectorClick}
            />}
    </>
}

let mapStateToProps = (state: appStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
})(UsersContainer)