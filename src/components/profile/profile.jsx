import React from 'react';
import style from './profile.module.css';
import MyPosts from './my-posts/my-posts';
import ava from '../../img/AVA.jpeg';

const Profile = (props) => {

    const { posts, newPostText} = props.profilePage;
    return(
        <div className = {style.profile}>
            <div className={style.imageContainer}>
                <img className={style.img} src={ava} alt='img'/>
            </div>
            <MyPosts newPostText={newPostText}
                    posts={posts} />
        </div>
    )
}

export default Profile;