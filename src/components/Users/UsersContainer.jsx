import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsers,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageSelectorClick = (selectedPage) => {
        this.props.setCurrentPage(selectedPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageSelectorClick={this.onPageSelectorClick}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsers,
    setCurrentPage,
    toggleIsFetching
})(UsersContainer)