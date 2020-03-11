import React from 'react';
import ProfileInfo from './profile-info';
import MyPostsContainer from './my-posts/my-posts-container';

const Profile = ({userProfile, status, updateUserStatus, updatePhoto, isOwner}) => {

    return(
        <div>
            <ProfileInfo
                isOwner={isOwner}
                updateUserStatus={updateUserStatus}
                status={status}
                userProfile={userProfile}
                updatePhoto={updatePhoto}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;