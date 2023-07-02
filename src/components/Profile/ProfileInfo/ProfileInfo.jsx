import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import placeholder from '../../../assets/images/user_image_placeholder.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {Form, Formik} from "formik";
import {Checkbox, TextInput} from "../../../utils/FormComponents";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const getAllContacts = () => {
        return Object.entries(props.profile.contacts).map(([key, value]) => {
            if (value != null) {
                switch (key) {
                    case 'facebook':
                        return <a href={props.profile.contacts.facebook}>
                            <img className={s.pic}
                                 src={'https://lawshelf.com/assets/img/Facebook%20logo.png'}
                                 alt={'facebook logo'}
                            />
                        </a>
                    case 'website':
                        return <a href={props.profile.contacts.website}>
                            <img className={s.pic}
                                 src={'https://school-6-kholmsk.ru/wp-content/uploads/2018/09/Иконка-сайта-1024x1024.png'}
                                 alt={'website logo'}
                            />
                        </a>
                    case 'vk':
                        return <a href={props.profile.contacts.vk}>
                            <img className={s.pic}
                                 src={'https://bioschool.pnpi.nrcki.ru/wp-content/uploads/2022/11/vkontakte-png-1024x1024.png'}
                                 alt={'vk logo'}
                            />
                        </a>
                    case 'twitter':
                        return <a href={props.profile.contacts.twitter}>
                            <img className={s.pic}
                                 src={'https://www.vhv.rs/dpng/d/551-5511916_2019-pro-exp-media-inc-circle-twitter-logo.png'}
                                 alt={'twitter logo'}
                            />
                        </a>
                    case 'instagram':
                        return <a href={props.profile.contacts.instagram}>
                            <img className={s.pic}
                                 src={'https://www.accosmetictattooing.com.au/wp-content/uploads/2022/11/instagram-300x300.png'}
                                 alt={'instagram logo'}
                            />
                        </a>
                    case 'youtube':
                        return <a href={props.profile.contacts.youtube}>
                            <img className={s.pic}
                                 src={'https://w7.pngwing.com/pngs/982/799/png-transparent-youtube-logo-youtube-logo-internet-marketing-subscribe-television-label-text.png'}
                                 alt={'youtube logo'}
                            />
                        </a>
                    case 'github':
                        return <a href={props.profile.contacts.github}>
                            <img className={s.pic}
                                 src={'https://e7.pngegg.com/pngimages/947/829/png-clipart-gray-and-blue-cat-illustration-github-computer-icons-logo-github-mammal-cat-like-mammal.png'}
                                 alt={'github logo'}
                            />
                        </a>
                }
            }
        })
    }
    const ProfilePhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const toggleEditMode = () => {
        setEditMode(!editMode)
    }
    const ProfileForm = ({profile}) => {
        return <Formik initialValues={
            {
                fullName: profile.fullName,
                aboutMe: profile.aboutMe,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                contacts: {
                    facebook: profile.contacts.facebook,
                    website: profile.contacts.website,
                    vk: profile.contacts.vk,
                    twitter: profile.contacts.twitter,
                    instagram: profile.contacts.instagram,
                    youtube: profile.contacts.youtube,
                    github: profile.contacts.github
                }
            }
        } onSubmit={(values) => {
            props.updateProfileData(values, profile.userId)
            toggleEditMode()
        }}>
            <Form>
                <div>
                    <div>
                        <TextInput
                            label={"Whats your full name? "}
                            name={"fullName"}
                            type={"text"}
                            placeholder={profile.aboutMe}
                        />
                    </div>
                    <div>
                        <TextInput
                            label={"Tell us something about you: "}
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
                            label={"Enter your desired job description: "}
                            name={"lookingForAJobDescription"}
                            type={"text"}
                            placeholder={profile.lookingForAJobDescription}
                        />
                    </div>
                    <div>
                        <p>Edit your contacts below:</p>
                        <TextInput
                            label={"facebook"}
                            name={"contacts.facebook"}
                            type={"text"}
                            placeholder={profile.contacts.facebook}
                        />
                        <TextInput
                            label={"website"}
                            name={"contacts.website"}
                            type={"text"}
                            placeholder={profile.contacts.website}
                        />
                        <TextInput
                            label={"vk"}
                            name={"contacts.vk"}
                            type={"text"}
                            placeholder={profile.contacts.vk}
                        />
                        <TextInput
                            label={"twitter"}
                            name={"contacts.twitter"}
                            type={"text"}
                            placeholder={profile.contacts.twitter}
                        />
                        <TextInput
                            label={"instagram"}
                            name={"contacts.instagram"}
                            type={"text"}
                            placeholder={profile.contacts.instagram}
                        />
                        <TextInput
                            label={"youtube"}
                            name={"contacts.youtube"}
                            type={"text"}
                            placeholder={profile.contacts.youtube}
                        />
                        <TextInput
                            label={"github"}
                            name={"contacts.github"}
                            type={"text"}
                            placeholder={profile.contacts.github}
                        />
                    </div>
                </div>
                <button>Submit changes</button>
                <button onClick={toggleEditMode}>Cancel</button>
            </Form>
        </Formik>
    }
    const ProfileData = ({profile}) => {
        return (
            <div className={s.profile_block}>
                <div>
                    <img src={profile.photos.large ? profile.photos.large : placeholder}
                         className={s.profile_pic} alt={'Profile picture'}/>
                    {props.isOwner && <input type={'file'} onChange={ProfilePhotoSelected}/>}
                    <div>
                        <b>{profile.fullName}</b>
                    </div>
                    <div className={s.multiline}>
                        <b>My status:</b>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}
                                       setStatus={props.setStatus}/>
                    </div>
                    <div>
                        <b>About me:</b> {profile.aboutMe || "Not set yet"}
                    </div>
                    <div>
                        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</div>
                        <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>
                    </div>
                    <div>
                        <b>Contact me on:</b>
                        <div>
                            {getAllContacts()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return <div>
        {props.isOwner && !editMode && <button onClick={toggleEditMode}>Edit profile</button>}
        {props.isOwner && editMode ? <ProfileForm profile={props.profile}/> : <ProfileData profile={props.profile}/>}
    </div>
}
export default ProfileInfo