import {Form, Formik} from "formik";
import {validateProfileInfo} from "../../../../utils/Validation";
import {Checkbox, TextInput} from "../../../../utils/FormComponents";
import React from "react";
import {ProfileType} from "../../../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../../../utils/Selectors/ProfileSelectors";
import {ThunkDispatch} from "redux-thunk";
import {appStateType} from "../../../../redux/reduxStore";
import {AnyAction} from "redux";
import {updateProfileData} from "../../../../redux/profileReducer";

type PropsType = {
    toggleEditMode: () => void
}
export const ProfileForm: React.FC<PropsType> = (props) => {
    const profile = useSelector(getProfile)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const updateProfileDataDispatcher = (profile: ProfileType, toggleEditMode: Function) => {
        dispatch(updateProfileData(profile, toggleEditMode))
    }
    return <Formik initialValues={
        {
            userId: profile.userId,
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: {
                facebook: profile.contacts.facebook || '',
                website: profile.contacts.website || '',
                vk: profile.contacts.vk || '',
                twitter: profile.contacts.twitter || '',
                instagram: profile.contacts.instagram || '',
                youtube: profile.contacts.youtube || '',
                github: profile.contacts.github || ''
            },
            photos: {
                small: profile.photos.small,
                large: profile.photos.large
            }
        }}
                   validate={validateProfileInfo}
                   onSubmit={(values) => {
                           updateProfileDataDispatcher(values, props.toggleEditMode)
                   }}>
        <Form>
            <div>
                <div>
                    <TextInput
                        label={"Whats your full name?* "}
                        name={"fullName"}
                        type={"text"}
                        placeholder={profile.fullName}
                    />
                </div>
                <div>
                    <TextInput
                        label={"Tell us something about you:* "}
                        name={"aboutMe"}
                        type={"text"}
                        placeholder={profile.aboutMe}
                    />
                </div>
                <div>
                    <Checkbox name={"lookingForAJob"}>
                        Are you looking for a job?
                    </Checkbox>
                    <TextInput
                        label={"Enter your desired job description:* "}
                        name={"lookingForAJobDescription"}
                        type={"text"}
                        placeholder={profile.lookingForAJobDescription}
                    />
                </div>
                <div>
                    <p>Edit your contacts below:</p>

                    <div><TextInput
                        label={"facebook"}
                        name={"contacts.facebook"}
                        type={"text"}
                        placeholder={profile.contacts.facebook}
                    /></div>
                    <div><TextInput
                        label={"website"}
                        name={"contacts.website"}
                        type={"text"}
                        placeholder={profile.contacts.website}
                    /></div>
                    <div><TextInput
                        label={"vk"}
                        name={"contacts.vk"}
                        type={"text"}
                        placeholder={profile.contacts.vk}
                    /></div>
                    <div><TextInput
                        label={"twitter"}
                        name={"contacts.twitter"}
                        type={"text"}
                        placeholder={profile.contacts.twitter}
                    /></div>
                    <div><TextInput
                        label={"instagram"}
                        name={"contacts.instagram"}
                        type={"text"}
                        placeholder={profile.contacts.instagram}
                    /></div>
                    <div><TextInput
                        label={"youtube"}
                        name={"contacts.youtube"}
                        type={"text"}
                        placeholder={profile.contacts.youtube}
                    /></div>
                    <div><TextInput
                        label={"github"}
                        name={"contacts.github"}
                        type={"text"}
                        placeholder={profile.contacts.github}
                    /></div>
                </div>
            </div>
            <button>Submit changes</button>
            <button onClick={props.toggleEditMode}>Cancel</button>
        </Form>
    </Formik>
}

