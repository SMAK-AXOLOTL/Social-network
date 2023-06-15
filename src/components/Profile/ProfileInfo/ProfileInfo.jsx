import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import placeholder from '../../../assets/images/user_image_placeholder.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let isLookingForJob = () => {
        if (props.profile.lookingForAJob == true) {
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

    let getAllContacts = () => {
        return Object.entries(props.profile.contacts).map(([key, value]) => {
            if (value != null) {
                switch (key) {
                    case 'facebook':
                        return <a href={props.profile.contacts.facebook}>
                            <img className={s.pic}
                                 src={'https://lawshelf.com/assets/img/Facebook%20logo.png'}/>
                        </a>
                        break
                    case 'website':
                        return <a href={props.profile.contacts.website}>
                            <img className={s.pic}
                                 src={'https://school-6-kholmsk.ru/wp-content/uploads/2018/09/Иконка-сайта-1024x1024.png'}/>
                        </a>
                        break
                    case 'vk':
                        return <a href={props.profile.contacts.vk}>
                            <img className={s.pic}
                                 src={'https://bioschool.pnpi.nrcki.ru/wp-content/uploads/2022/11/vkontakte-png-1024x1024.png'}/>
                        </a>
                        break
                    case 'twitter':
                        return <a href={props.profile.contacts.twitter}>
                            <img className={s.pic}
                                 src={'https://www.vhv.rs/dpng/d/551-5511916_2019-pro-exp-media-inc-circle-twitter-logo.png'}/>
                        </a>
                        break
                    case 'instagram':
                        return <a href={props.profile.contacts.instagram}>
                            <img className={s.pic}
                                 src={'https://www.accosmetictattooing.com.au/wp-content/uploads/2022/11/instagram-300x300.png'}/>
                        </a>
                        break
                    case 'youtube':
                        return <a href={props.profile.contacts.youtube}>
                            <img className={s.pic}
                                 src={'https://w7.pngwing.com/pngs/982/799/png-transparent-youtube-logo-youtube-logo-internet-marketing-subscribe-television-label-text.png'}/>
                        </a>
                        break
                    case 'github':
                        return <a href={props.profile.contacts.github}>
                            <img className={s.pic}
                                 src={'https://e7.pngegg.com/pngimages/947/829/png-clipart-gray-and-blue-cat-illustration-github-computer-icons-logo-github-mammal-cat-like-mammal.png'}/>
                        </a>
                        break
                }
            }
        })
    }

    return (
        <div className={s.profile_block}>
            <img className={s.bigPicture} src='https://media.zicxa.com/6858371'/>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : placeholder}
                     className={s.profile_pic}/>
                <div>
                    {props.profile.fullName}
                </div>
                <div className={s.multiline}>
                    {props.profile.aboutMe}
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