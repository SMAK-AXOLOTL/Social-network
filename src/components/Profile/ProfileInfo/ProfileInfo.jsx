import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import placeholder from '../../../assets/images/user_image_placeholder.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const isLookingForJob = () => {
        if (props.profile.lookingForAJob === true) {
            return <div>
                <p>
                    I'm looking for a job!
                </p>
                {
                    props.profile.lookingForAJobDescription
                }
            </div>
        }
    }

    const getAllContacts = () => {
        return Object.entries(props.profile.contacts).map(([key, value]) => {
            if (value != null) {
                switch (key) {
                    case 'facebook':
                        return <a href={props.profile.contacts.facebook}>
                            <img className={s.pic}
                                 src={'https://lawshelf.com/assets/img/Facebook%20logo.png'}/>
                        </a>
                    case 'website':
                        return <a href={props.profile.contacts.website}>
                            <img className={s.pic}
                                 src={'https://school-6-kholmsk.ru/wp-content/uploads/2018/09/Иконка-сайта-1024x1024.png'}/>
                        </a>
                    case 'vk':
                        return <a href={props.profile.contacts.vk}>
                            <img className={s.pic}
                                 src={'https://bioschool.pnpi.nrcki.ru/wp-content/uploads/2022/11/vkontakte-png-1024x1024.png'}/>
                        </a>
                    case 'twitter':
                        return <a href={props.profile.contacts.twitter}>
                            <img className={s.pic}
                                 src={'https://www.vhv.rs/dpng/d/551-5511916_2019-pro-exp-media-inc-circle-twitter-logo.png'}/>
                        </a>
                    case 'instagram':
                        return <a href={props.profile.contacts.instagram}>
                            <img className={s.pic}
                                 src={'https://www.accosmetictattooing.com.au/wp-content/uploads/2022/11/instagram-300x300.png'}/>
                        </a>
                    case 'youtube':
                        return <a href={props.profile.contacts.youtube}>
                            <img className={s.pic}
                                 src={'https://w7.pngwing.com/pngs/982/799/png-transparent-youtube-logo-youtube-logo-internet-marketing-subscribe-television-label-text.png'}/>
                        </a>
                    case 'github':
                        return <a href={props.profile.contacts.github}>
                            <img className={s.pic}
                                 src={'https://e7.pngegg.com/pngimages/947/829/png-clipart-gray-and-blue-cat-illustration-github-computer-icons-logo-github-mammal-cat-like-mammal.png'}/>
                        </a>
                }
            }
        })
    }

    return (
        <div className={s.profile_block}>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : placeholder}
                     className={s.profile_pic}/>
                <div>
                    {props.profile.fullName}
                </div>
                <div className={s.multiline}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} setStatus={props.setStatus}/>
                </div>
                <div>
                    {isLookingForJob()}
                </div>
                <div>
                    <p>Contact me on:</p>
                    {getAllContacts()}
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo