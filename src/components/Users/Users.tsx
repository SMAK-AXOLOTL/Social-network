import React, {useEffect} from 'react'
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Paginator from "../Common/Paginator/Paginator";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllUsers,
    getCurrentPage,
    getFilter,
    getIsFollowing,
    getPageSize,
    getTotalUsers
} from "../../utils/Selectors/UserSelectors";
import {follow, getUsers, unfollow} from "../../redux/usersReducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {appStateType} from "../../redux/reduxStore";
import {useLocation, useNavigate} from "react-router-dom"
import {UsersSearchForm} from "./UsersSearchForm";

const Users: React.FC = () => {
    const location = useLocation()

    const totalUsers = useSelector(getTotalUsers)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getAllUsers)
    const isFollowing = useSelector(getIsFollowing)
    const filter = useSelector(getFilter)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const navigate = useNavigate()
    const onPageSelectorClick = (selectedPage: number) => {
        dispatch(getUsers(selectedPage, pageSize, filter))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    useEffect(() => {
        //TODO fix filter drops after posting links & filter drops if page was selected
        const search = new URLSearchParams(location.search)
        const searchedTerm = search.get('term')
        const searchedFollowedFilter = search.get('friend')
        const searchedPage = search.get('page')
        let displayedPage = currentPage
        let displayedFilter = filter

        if (searchedPage) displayedPage = Number(searchedPage)
        if (searchedTerm) displayedFilter = {...displayedFilter, term: searchedTerm}
        switch (searchedFollowedFilter) {
            case 'true':
                displayedFilter = {...displayedFilter, onlyShow: true}
                break
            case 'false':
                displayedFilter = {...displayedFilter, onlyShow: false}
                break
            default:
                displayedFilter = {...displayedFilter, onlyShow: null}
        }
        dispatch(getUsers(displayedPage, pageSize, displayedFilter))
    }, [])

    useEffect(() => {
        const query: { term?: string, friend?: string, page?: string } = {}

        if (filter.term) query.term = filter.term
        if (filter.onlyShow !== null) query.friend = String(filter.onlyShow)
        if (currentPage !== 1) query.page = String(currentPage)

        const queryToString = new URLSearchParams(query)
        navigate(`/users?${queryToString}`)
        dispatch(getUsers(currentPage, pageSize, filter))
    }, [filter, currentPage])


    return <div className={s.box}>
        <div>Showing {totalUsers} existing users matching your search parameters!</div>
        <Paginator totalItems={totalUsers} pageSize={pageSize} currentPage={currentPage}
                   onPageSelectorClick={onPageSelectorClick}/>
        <UsersSearchForm/>
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