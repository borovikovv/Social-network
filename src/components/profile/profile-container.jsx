import React, { Component } from 'react';
import Profile from './profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {toggleLoading } from '../../redux/usersReducer';
import {requestUserProfile, requestUserStatus, updateUserStatus} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {

    componentDidMount() {
        const { match, requestUserProfile, requestUserStatus } = this.props;
        let userId = match.params.userId;
        if (!userId) userId = 4978;
        requestUserProfile(userId)
        requestUserStatus(userId)
    }

    render() {

        const {userProfile, status, updateUserStatus } = this.props;
        return (
            <div>
                <Profile {...this.props} status={status}
                         userProfile={userProfile}
                         updateUserStatus={updateUserStatus}/>
            </div>
        )
    }
}

const mapStateToProps = ({profileReducer}) => {
    return {
        userProfile: profileReducer.userProfile,
        status: profileReducer.status
    }
}

export default compose(
    connect(mapStateToProps, {toggleLoading, requestUserProfile, requestUserStatus, updateUserStatus}),
    withRouter
    )(ProfileContainer);