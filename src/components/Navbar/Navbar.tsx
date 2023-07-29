import React from "react";
import s from './Navbar.module.css'
import NavbarItem from "./NavbarItem/NavbarItem";


const Navbar: React.FC = () => {
    return (<div className={s.navBar}>
            <nav className={s.nav}>
                <NavbarItem address='profile/' itemName='Profile'/>
                <NavbarItem address='messages' itemName='Messages'/>
                <NavbarItem address='news' itemName='News'/>
                <NavbarItem address='music' itemName='Music'/>
                <NavbarItem address='users' itemName='Users'/>
                <br/>
                <NavbarItem address='settings' itemName='Settings'/>
                <br/>
                <br/>
                <br/>
            </nav>
        </div>
    )
}

export default Navbar