import React, {useState} from 'react';
import style from './profile-info.module.css';
import ava from '../../img/AVA.jpeg';
import Spinner from '../common/spinner/spinner';
import ProfileStatus from "./profile-status/profile-status";
import ProfileInfoDataForm from "./profile-info-data-form";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);
    const {userProfile, status, updateUserStatus,isOwner,
        updatePhoto, updateProfileInfo, isFormError} = props;

    if (!userProfile) {
        return <Spinner/>
    }

    const updatePhotos = (e) => {
        if(e.target.files.length) {
            updatePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (dataForm) => {
        updateProfileInfo(dataForm);
        if(isFormError) {
            setEditMode(false);
        }
    };

    return (
        <div className={style.profile}>
            <div className={style.profileInfo}>
                <img className={style.img} src={userProfile.photos.large ? userProfile.photos.large : ava} alt='img'/>
                {isOwner && <input type='file' onChange={updatePhotos}/>}
                <ProfileStatus updateUserStatus={ updateUserStatus } status={status}/>
                <button className={style.btn} onClick={() => {setEditMode(true)}}>Edit profile</button>
                { isOwner && editMode ? <ProfileInfoDataForm profile={userProfile} initialValues={userProfile} onSubmit={onSubmit} /> : <ProfileInfoData userProfile={userProfile} />  }
            </div>
        </div>
    )
};

const ProfileInfoData = ({userProfile}) => {
    return (
        <div className={style.info}>
            <span className={style.fullName}>{userProfile.fullName}</span>
            <span className={style.aboutMe}>{userProfile.aboutMe}</span>
            <span className={style.aboutMe}><b>looking for a Job: </b>{userProfile.lookingForAJob ? 'yes' : 'no'}</span>
            <div className={style.contacts}>
                <b>Contacts :</b> {
                Object.keys(userProfile.contacts).map(key => {
                    return <Contacts key={key} contactsTitle={key} contactsDescription={userProfile.contacts[key]}/>
                })
            }
        </div>
    </div>
    )
};

const Contacts = ({contactsTitle, contactsDescription}) => {
    return <div><b>{contactsTitle}</b>: {contactsDescription}</div>
};

export default ProfileInfo;