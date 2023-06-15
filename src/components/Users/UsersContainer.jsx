import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageSelectorClick = (selectedPage) => {
        this.props.setCurrentPage(selectedPage)

        this.props.getUsers(selectedPage, this.props.pageSize)
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
                    isFollowing={this.props.isFollowing}
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