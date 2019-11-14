import React from 'react';
import style from './header.module.css';
import icon from './../../img/header-icon.png';
import { Link } from 'react-router-dom';

const Header = ({isAuth, login, logout}) => {
    return(
        <div className = {style.header}>
            <div className = {style.img}>
                <Link to='/profile'>
                    <img src={icon} alt='img' />
                </Link>
            </div>
            <div className={style.login}>
                {
                    isAuth
                        ? <div>{login} <button onClick={logout} className={style.button + ' ' + 'btn'}> <i className="fa fa-power-off"></i></button> </div>
                    :
                        <Link to='/'>
                            Login
                        </Link>
                }
            </div>
        </div>
    )
}

export default Header;