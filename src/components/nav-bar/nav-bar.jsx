import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './nav-bar.module.css';

const NavBar = () => {
    return(
        <div className = {style.nav}>
            <div className={style.item}>
                <NavLink activeStyle={{ color: 'steelblue'}} to='/profile'>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeStyle={{ color: 'steelblue'}} to='/users'>Friends</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeStyle={{ color: 'steelblue'}} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeStyle={{ color: 'steelblue'}} to='/news'>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeStyle={{ color: 'steelblue'}} to='/music'>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink activeStyle={{ color: 'steelblue'}} to='/setting'>Settings</NavLink>
            </div>
        </div>
    )
}

export default NavBar;