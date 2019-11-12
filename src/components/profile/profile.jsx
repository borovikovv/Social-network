import React from 'react';
import ProfileInfo from './profile-info';
import MyPostsContainer from './my-posts/my-posts-container';

const Profile = ({userProfile, status, updateUserStatus}) => {

    return(
        <div>
            <ProfileInfo updateUserStatus={updateUserStatus} status={status} userProfile={userProfile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;