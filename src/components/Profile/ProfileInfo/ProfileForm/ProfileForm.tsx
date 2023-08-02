import {Form, Formik} from "formik";
import {validateProfileInfo} from "../../../../utils/Validation";
import {Checkbox, TextInput} from "../../../../utils/FormComponents";
import React from "react";
import {profileType} from "../../../../types/types";

type PropsType = {
    profile: profileType

    updateProfileData: (profile: profileType, toggleEditMode: Function) => void
    toggleEditMode: () => void
}

const ProfileForm = (props: PropsType) => {
    return <Formik initialValues={
        {
            userId: props.profile.userId,
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            contacts: {
                facebook: props.profile.contacts.facebook || '',
                website: props.profile.contacts.website || '',
                vk: props.profile.contacts.vk || '',
                twitter: props.profile.contacts.twitter || '',
                instagram: props.profile.contacts.instagram || '',
                youtube: props.profile.contacts.youtube || '',
                github: props.profile.contacts.github || ''
            },
            photos: {
                small: props.profile.photos.small,
                large: props.profile.photos.large
            }
        }}
                   validate={validateProfileInfo}
                   onSubmit={(values) => {
                       if (props.updateProfileData) {
                           props.updateProfileData(values, props.toggleEditMode)
                       }
                   }}>
        <Form>
            <div>
                <div>
                    <TextInput
                        label={"Whats your full name?* "}
                        name={"fullName"}
                        type={"text"}
                        placeholder={props.profile.fullName}
                    />
                </div>
                <div>
                    <TextInput
                        label={"Tell us something about you:* "}
                        name={"aboutMe"}
                        type={"text"}
                        placeholder={props.profile.aboutMe}
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
                        placeholder={props.profile.lookingForAJobDescription}
                    />
                </div>
                <div>
                    <p>Edit your contacts below:</p>
                    <TextInput
                        label={"facebook"}
                        name={"contacts.facebook"}
                        type={"text"}
                        placeholder={props.profile.contacts.facebook}
                    />
                    <TextInput
                        label={"website"}
                        name={"contacts.website"}
                        type={"text"}
                        placeholder={props.profile.contacts.website}
                    />
                    <TextInput
                        label={"vk"}
                        name={"contacts.vk"}
                        type={"text"}
                        placeholder={props.profile.contacts.vk}
                    />
                    <TextInput
                        label={"twitter"}
                        name={"contacts.twitter"}
                        type={"text"}
                        placeholder={props.profile.contacts.twitter}
                    />
                    <TextInput
                        label={"instagram"}
                        name={"contacts.instagram"}
                        type={"text"}
                        placeholder={props.profile.contacts.instagram}
                    />
                    <TextInput
                        label={"youtube"}
                        name={"contacts.youtube"}
                        type={"text"}
                        placeholder={props.profile.contacts.youtube}
                    />
                    <TextInput
                        label={"github"}
                        name={"contacts.github"}
                        type={"text"}
                        placeholder={props.profile.contacts.github}
                    />
                </div>
            </div>
            <button>Submit changes</button>
            <button onClick={props.toggleEditMode}>Cancel</button>
        </Form>
    </Formik>
}

export default ProfileForm