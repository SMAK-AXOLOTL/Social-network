import React from "react";
import s from './Users.module.css'
import UserItem from "./UserItem/UserItem";
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div className={s.box}>{
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