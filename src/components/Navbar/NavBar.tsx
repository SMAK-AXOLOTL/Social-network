import React from 'react'
import NavbarItem from "./NavbarItem/NavbarItem";
import {Icons} from "../../assets/images/Icons";
import s from './Navbar.module.css'
export const NavBar = () => {
    return <div className={s.navBar}>
        <NavbarItem address='profile/' itemName='Profile' icon={Icons.UserIcon}/>
        <NavbarItem address='messages' itemName='Messages' icon={Icons.UserIcon}/>
        <NavbarItem address='news' itemName='News' icon={Icons.NewsIcon}/>
        <NavbarItem address='music' itemName='Music' icon={Icons.MusicIcon}/>
        <NavbarItem address='users' itemName='Users' icon={Icons.UsersIcon}/>
        <NavbarItem address='settings' itemName='Settings' icon={Icons.SettingsIcon}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <NavbarItem address='chat' itemName='All Chat' icon={Icons.MessagesIcon}/>
    </div>
}