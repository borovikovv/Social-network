import React from 'react';
import style from './profile.module.css';
import MyPostsContainer from './my-posts/my-posts-container';
import ava from '../../img/AVA.jpeg';

const Profile = () => {

    return(
        <div className = {style.profile}>
            <div className={style.imageContainer}>
                <img className={style.img} src={ava} alt='img'/>
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;