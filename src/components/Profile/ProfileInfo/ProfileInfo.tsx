import React, {useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../types/types";
import ProfileForm from "./ProfileForm/ProfileForm";
import ProfileData from "./ProfileData/ProfileData";

type PropsType = {
    isOwner: boolean
    userId?: number
    profile: ProfileType
    status: string

    updateStatus: (status: string) => void
    setStatus?: (status: string) => void
    savePhoto: (photo: File) => void
    updateProfileData: (profile: ProfileType, toggleEditMode: Function) => void
}

const ProfileInfo: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    return <div>
        {props.isOwner && !editMode && <button onClick={toggleEditMode}>Edit profile</button>}
        {props.isOwner && editMode
            ? <ProfileForm
                profile={props.profile}
                updateProfileData={props.updateProfileData}
                toggleEditMode={toggleEditMode}
            />
            : <ProfileData profile={props.profile} isOwner={props.isOwner} status={props.status}
                           updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>}
    </div>
}
export default ProfileInfo