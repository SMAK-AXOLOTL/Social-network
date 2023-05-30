import React from "react";
import s from './Users.module.css'
import UserItem from "./UserItem/UserItem";
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onPageSelectorClick(selectedPage) {
        this.props.setCurrentPage(selectedPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++)
        {
            pages.push(i)
        }
        let curPL = (this.props.currentPage - 5 < 0 ? 0 : this.props.currentPage - 5)
        let curPR = this.props.currentPage + 5
        let slicedPages = pages.slice(curPL, curPR)


        return (
            <div className={s.box}>
                <div className={s.pageSelector}>
                    {slicedPages.map(p => {
                        return <span
                            className={this.props.currentPage === p && s.selectedPage}
                            onClick={() =>
                                this.onPageSelectorClick(p)
                            }>
                            {p + ' '}
                        </span>
                    })}
                </div>
                {
                    this.props.users.map(u =>
                        <UserItem
                            key={u.id}
                            user={u}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                        />)
                }
            </div>
        )
    }
}

export default Users