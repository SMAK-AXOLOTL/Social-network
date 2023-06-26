import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import React, {useEffect} from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


const UsersContainer = props => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    },[])

    const onPageSelectorClick = (selectedPage) => {
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

let mapStateToProps = (state) => {
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