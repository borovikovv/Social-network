import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav-bar.module.css';

const NavBar = () => {
    return(
        <div className = {style.nav}>
            <div className = {style.item}>
                <Link to='/'>Profile</Link>
            </div>
            <div className = {style.item}>
                <Link to='/dialogs'>Messages</Link>
            </div>
            <div className = {style.item}>
                <Link to='/news'>News</Link>
            </div>
            <div className = {style.item}>
                <Link to='/music'>Music</Link>
            </div>
            <div className = {style.item}>
                <Link to='/setting'>Settings</Link>
            </div>
        </div>
    )
}

export default NavBar;