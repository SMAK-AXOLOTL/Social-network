import React from "react";
import s from './Navbar.module.css'
import NavbarItem from "./NavbarItem/NavbarItem";
import FriendsBlock from "./FriendsBlock/FriendsBlock";


const Navbar = (props) => {
    return (<div className={s.navBar}>
            <nav className={s.nav}>
                <NavbarItem address='profile' itemName='Profile'/>
                <NavbarItem address='messages' itemName='Messages'/>
                <NavbarItem address='news' itemName='News'/>
                <NavbarItem address='music' itemName='Music'/>
                <br/>
                <NavbarItem address='settings' itemName='Settings'/>
                <br/>
                <br/>
                <br/>
            </nav>
            {/*<FriendsBlock dialogs={props.dialogs}/>*/}
        </div>
    )
}

export default Navbar