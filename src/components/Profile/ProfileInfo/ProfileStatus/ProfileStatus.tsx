import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUserStatus} from "../../../../utils/Selectors/ProfileSelectors";
import {useParams} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";
import {appStateType} from "../../../../redux/reduxStore";
import {AnyAction} from "redux";
import {updateStatus} from "../../../../redux/profileReducer";

const ProfileStatus: React.FC = () => {
    const {userId} = useParams()
    const isOwner = !userId
    const status = useSelector(getUserStatus)
    let [editMode, setEditMode] = useState(false)
    let [localStatus, setLocalStatus] = useState(status)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const updateStatusData = () => {
        dispatch(updateStatus(localStatus))
    }

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const activeEditMode = () => {
        if (isOwner) {
            setEditMode(true)
        }
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        updateStatusData()
    }

    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    return <div>{
        !editMode
            ? <span onDoubleClick={activeEditMode}>{status || 'User haven\'t set status yet'}</span>
            : <input name={'status'} autoFocus={true}
                     onBlur={deactiveEditMode} onChange={onStatusChange}
                     value={localStatus}
            />
    }
    </div>
}

export default ProfileStatus