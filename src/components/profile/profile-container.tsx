import React, { Component } from 'react';
import Profile from './profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {toggleLoading } from '../../redux/usersReducer';
import {
    requestUserProfile,
    requestUserStatus,
    updateProfileInfo,
    updateProfilePhoto,
    updateUserStatus
} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import {AppStateType} from "../../redux/store";
import {UserProfileType} from "../../types/types";

type MapStateToPropsType = {
    initializationUserId: number,
    userProfile: UserProfileType,
    status: string,
    isFormError: boolean
};
type MapDispatchToPropsType = {
    toggleLoading: () => void
    updateProfileInfo: () => void
    requestUserProfile: (userId: number) => void
    requestUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    updateProfilePhoto: () => void
};
type OwnPropsType = {
    match: any
    history: any
};
type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

class ProfileContainer extends Component<Props> {

    refreshProfile() {
        const { match, requestUserProfile, requestUserStatus, initializationUserId } = this.props;
        let userId = match.params.userId;
        if (!userId) {
            userId = initializationUserId;
            if(!userId) {
                this.props.history.push('/');
            }
        }
        requestUserProfile(userId);
        requestUserStatus(userId);
        requestUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: OwnPropsType) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        const {userProfile, status, updateUserStatus, updateProfilePhoto,
            updateProfileInfo, isFormError} = this.props;
        return (
            <div>
                <Profile {...this.props} status={status}
                         isOwner={!this.props.match.params.userId}
                         userProfile={userProfile}
                         updateUserStatus={updateUserStatus}
                         updateProfileInfo={updateProfileInfo}
                         updatePhoto={updateProfilePhoto}
                         isFormError={isFormError}/>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initializationUserId: state.auth.userId,
        userProfile: state.profileReducer.userProfile,
        status: state.profileReducer.status,
        isFormError: state.profileReducer.profileInfoFormError
    }
};

export default compose(
    connect(mapStateToProps, {toggleLoading, updateProfileInfo,
        requestUserProfile, requestUserStatus, updateUserStatus,
        updateProfilePhoto}),
    withRouter
    )(ProfileContainer);