import React from "react";
import s from './Users.module.css'
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg',
                fullName: 'Ivan',
                status: '',
                location: {city: 'Moscow', country: 'Russia'},
                isFollowed: false
            },
            {
                id: 2,
                photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg',
                fullName: 'Misha',
                status: '',
                location: {city: 'St-Petersburg', country: 'Russia'},
                isFollowed: true
            },
            {
                id: 3,
                photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg',
                fullName: 'Grisha',
                status: '',
                location: {city: 'Cheta', country: 'Russia'},
                isFollowed: false
            },
            {
                id: 4,
                photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg',
                fullName: 'Peter',
                status: '',
                location: {city: 'London', country: 'England'},
                isFollowed: false
            },
            {
                id: 5,
                photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg',
                fullName: 'John',
                status: '',
                location: {city: 'Washington DC', country: 'USA'},
                isFollowed: true
            },
            {
                id: 6,
                photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg',
                fullName: 'Mario',
                status: '',
                location: {city: 'Rome', country: 'Italy'},
                isFollowed: false
            },
            {
                id: 7,
                photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg',
                fullName: 'Palliacci',
                status: '',
                location: {city: 'Venecia', country: 'Italy'},
                isFollowed: false
            },
            {
                id: 8,
                photoUrl: 'https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg',
                fullName: 'Pier',
                status: '',
                location: {city: 'Paris', country: 'France'},
                isFollowed: false
            },])
    }

    let usersMapped = props.users.map(u =><UserItem user={u} follow={props.follow} unfollow={props.unfollow}/>)

    return(
        <div className={s.box}>{usersMapped}</div>
    )
}

export default Users