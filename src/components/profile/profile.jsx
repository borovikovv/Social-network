import React from 'react';
import ProfileInfo from './profile-info';
import MyPostsContainer from './my-posts/my-posts-container';

const Profile = ({userProfile, status, updateUserStatus,
                     updatePhoto, isOwner, updateProfileInfo, isFormError}) => {

    return(
        <div>
            <ProfileInfo
                isFormError={isFormError}
                isOwner={isOwner}
                updateProfileInfo={updateProfileInfo}
                updateUserStatus={updateUserStatus}
                status={status}
                userProfile={userProfile}
                updatePhoto={updatePhoto}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;