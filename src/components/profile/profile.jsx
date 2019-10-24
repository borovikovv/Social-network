import React from 'react';
import style from './profile.module.css';
import ProfileInfo from './profile-info';
import MyPostsContainer from './my-posts/my-posts-container';

const Profile = ({userProfile}) => {

    return(
        <div className = {style.profile}>
            <ProfileInfo userProfile={userProfile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;