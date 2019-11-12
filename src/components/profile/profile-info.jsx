import React from 'react';
import style from './profile-info.module.css';
import ava from '../../img/AVA.jpeg';
import Spinner from '../common/spinner/spinner';
import ProfileStatus from "./profile-status/profile-status";

const ProfileInfo = (props) => {
    const {userProfile, status, updateUserStatus} = props;
    if (!userProfile) {
        return <Spinner/>
    }

    return (
        <div className={style.profile}>
            <div className={style.profileInfo}>
                <img className={style.img} src={userProfile.photos.large ? userProfile.photos.large : ava} alt='img'/>
                <div className={style.info}>
                    <span className={style.fullName}>{userProfile.fullName}</span>
                    <span className={style.aboutMe}>{userProfile.aboutMe}</span>
                    <ProfileStatus updateUserStatus={ updateUserStatus } status={status}/>
                    <span className={style.contacts}>{userProfile.contacts.instagram}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;