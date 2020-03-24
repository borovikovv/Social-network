import React from 'react';
import {createField, Input, Textarea} from "../../utils/form-validate/input-validate";
import {reduxForm} from "redux-form";
import style from './profile-info.module.css';

const ProfileInfoDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error &&
                <div>
                    <span className={style.error}>{error}</span>
                </div>
            }
            <span className={style.input}>{createField('about me...', 'aboutMe', [], Textarea, 'type to about you')} </span>
            <b>Contacts :</b> {
            Object.keys(profile.contacts).map(key => {
                return <div className={style.contactsInfo}><b key={key}>{key}:</b> {createField(key, 'contacts.' + key, [], Input, 'type to about you')}</div>
            })
        }
            <span className={style.input}>{createField('looking for a Job...', 'lookingForAJob', [], Input, {type: 'checkbox'})} </span>
            <span className={style.input}>{createField('what jobs you want...', 'lookingForAJobDescription', [], Textarea, 'type what job you want')} </span>
            <span className={style.input}>{createField('full name...', 'fullName', [], Input, 'type to full Name')}</span>
            <button className={style.btn} onSubmit={() => {}}>save profile info</button>
        </form>
    )
};

const ProfileInfoDataFormReduxForm = reduxForm({
    form: 'edit-profile-info'
})(ProfileInfoDataForm);

export default ProfileInfoDataFormReduxForm;