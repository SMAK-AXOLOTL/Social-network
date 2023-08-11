import React, {useEffect, useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileData from "./ProfileData/ProfileData";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile} from "../../../redux/profileReducer";
import {ThunkDispatch} from "redux-thunk";
import store, {appStateType} from "../../../redux/reduxStore";
import {AnyAction} from "redux";
import {getAuthUserId} from "../../../utils/Selectors/AuthSelectors";
import {getProfile} from "../../../utils/Selectors/ProfileSelectors";
import {ProfileForm} from "./ProfileForm/ProfileForm";

const ProfileInfo: React.FC = () => {

    const {userId} = useParams()
    const profile = useSelector(getProfile)
    const isOwner = !userId

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()

    const getUserProfileData = () => {
        if (userId) {
            dispatch(getUserProfile(Number(userId)))
        } else {
            dispatch(getUserProfile(getAuthUserId(store.getState())))
        }

    }
    const getStatusData = () => {
        if (userId) {
            dispatch(getStatus(Number(userId)))
        } else {
            dispatch(getStatus(getAuthUserId(store.getState())))
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            getUserProfileData()
            getStatusData()
        }

        fetchData()
    }, [userId])

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    return <div>
        {isOwner && !editMode && <button onClick={toggleEditMode}>Edit profile</button>}
        {isOwner && editMode
            ? <ProfileForm toggleEditMode={toggleEditMode}/>
            : <ProfileData/>}
    </div>
}
export default ProfileInfo