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

class ProfileContainer extends Component {

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
        requestUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        const {userProfile, status, updateUserStatus, updateProfilePhoto, updateProfileInfo} = this.props;
        return (
            <div>
                <Profile {...this.props} status={status}
                         isOwner={!this.props.match.params.userId}
                         userProfile={userProfile}
                         updateUserStatus={updateUserStatus}
                         updateProfileInfo={updateProfileInfo}
                         updatePhoto={updateProfilePhoto}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initializationUserId: state.auth.userId,
        userProfile: state.profileReducer.userProfile,
        status: state.profileReducer.status
    }
};

export default compose(
    connect(mapStateToProps, {toggleLoading, updateProfileInfo,
        requestUserProfile, requestUserStatus, updateUserStatus, updateProfilePhoto}),
    withRouter
    )(ProfileContainer);