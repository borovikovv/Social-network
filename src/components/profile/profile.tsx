import React, {FC} from 'react';
import ProfileInfo from './profile-info';
import MyPostsContainer from './my-posts/my-posts-container';
import {UserProfileType} from "../../types/types";

type Props = {
    userProfile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    updatePhoto: () => void
    isOwner: boolean
    updateProfileInfo: () => void
    isFormError: boolean
}

const Profile: FC<Props> = ({userProfile, status, updateUserStatus,
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
};

export default Profile;