import React from 'react';
import style from './profile.module.css';
import MyPosts from './my-posts/my-posts';
import ava from '../../img/AVA.jpeg';

const Profile = ({posts}) => {
    return(
        <div className = {style.profile}>
            <img className={style.img} src={ava} alt='img'/>
            <MyPosts posts={posts} />
        </div>
    )
}

export default Profile;