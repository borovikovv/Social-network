import React from 'react';
import style from './header.module.css';
import icon from './../../img/header-icon.png';
import { Link } from 'react-router-dom';

const Header = ({isAuth, login}) => {
    return(
        <div className = {style.header}>
            <div className = {style.img}>
                <Link to='/profile'>
                    <img src={icon} alt='img' />
                </Link>
            </div>
            <div className={style.login}>
                {
                    isAuth ? login :
                        <Link to='/login'>
                            Login
                        </Link>
                }
            </div>
        </div>
    )
}

export default Header;