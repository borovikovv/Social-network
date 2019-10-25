import React from 'react';
import ProfileInfo from './profile-info';
import MyPostsContainer from './my-posts/my-posts-container';

const Profile = ({userProfile}) => {

    return(
        <div>
            <ProfileInfo userProfile={userProfile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;