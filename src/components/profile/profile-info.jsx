import React from 'react';
import style from './profile.module.css'
import ava from '../../img/AVA.jpeg';

const ProfileInfo = ({userProfile}) => {

    return(
        <div className = {style.profile}>
            <div className={style.imageContainer}>
                <img className={style.img} src={ava} alt='img'/>
            </div>
        </div>
    )
}

export default ProfileInfo;