import s from "../ProfileInfo.module.css";
import placeholder from "../../../../assets/images/user_image_placeholder.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import React from "react";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string

    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
}

const ProfileData = (props: PropsType) => {
    const getAllContacts = () => {
        return Object.entries(props.profile.contacts).map(([key, value]) => {
            if (value !== '' && value) {
                switch (key) {
                    case 'facebook':
                        return <a key={key} href={props.profile.contacts.facebook}>
                            <img className={s.pic}
                                 src={'https://lawshelf.com/assets/img/Facebook%20logo.png'}
                                 alt={'facebook logo'}
                            />
                        </a>
                    case 'website':
                        return <a key={key} href={props.profile.contacts.website}>
                            <img className={s.pic}
                                 src={'https://school-6-kholmsk.ru/wp-content/uploads/2018/09/Иконка-сайта-1024x1024.png'}
                                 alt={'website logo'}
                            />
                        </a>
                    case 'vk':
                        return <a key={key} href={props.profile.contacts.vk}>
                            <img className={s.pic}
                                 src={'https://bioschool.pnpi.nrcki.ru/wp-content/uploads/2022/11/vkontakte-png-1024x1024.png'}
                                 alt={'vk logo'}
                            />
                        </a>
                    case 'twitter':
                        return <a key={key} href={props.profile.contacts.twitter}>
                            <img className={s.pic}
                                 src={'https://www.vhv.rs/dpng/d/551-5511916_2019-pro-exp-media-inc-circle-twitter-logo.png'}
                                 alt={'twitter logo'}
                            />
                        </a>
                    case 'instagram':
                        return <a key={key} href={props.profile.contacts.instagram}>
                            <img className={s.pic}
                                 src={'https://www.accosmetictattooing.com.au/wp-content/uploads/2022/11/instagram-300x300.png'}
                                 alt={'instagram logo'}
                            />
                        </a>
                    case 'youtube':
                        return <a key={key} href={props.profile.contacts.youtube}>
                            <img className={s.pic}
                                 src={'https://w7.pngwing.com/pngs/982/799/png-transparent-youtube-logo-youtube-logo-internet-marketing-subscribe-television-label-text.png'}
                                 alt={'youtube logo'}
                            />
                        </a>
                    case 'github':
                        return <a key={key} href={props.profile.contacts.github}>
                            <img className={s.pic}
                                 src={'https://e7.pngegg.com/pngimages/947/829/png-clipart-gray-and-blue-cat-illustration-github-computer-icons-logo-github-mammal-cat-like-mammal.png'}
                                 alt={'github logo'}
                            />
                        </a>
                }
            }
        })
    }
    const ProfilePhotoSelected = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length && props.savePhoto) {
            props.savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div className={s.profile_block}>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : placeholder}
                     className={s.profile_pic} alt={'Profile picture'}/>
                {props.isOwner && <input type={'file'} onChange={ProfilePhotoSelected}/>}
                <div>
                    <b>{props.profile.fullName}</b>
                </div>
                <div className={s.multiline}>
                    <b>My status:</b>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}
                                   isOwner={props.isOwner}/>
                </div>
                <div>
                    <b>About me:</b> {props.profile.aboutMe}
                </div>
                <div>
                    <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}</div>
                    <div><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>
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

export default ProfileData