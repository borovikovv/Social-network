import React, { Component } from 'react';
import Profile from './profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {toggleLoading } from '../../redux/usersReducer';
import { requestUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from "../hoc/with-auth-redirect";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 4978;
        this.props.requestUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile} />
            </div>
        )
    }
}

const mapStateToProps = ({profileReducer}) => {
    return {
        userProfile: profileReducer.userProfile
    }
}

export default compose(
    connect(mapStateToProps, {toggleLoading, requestUserProfile }),
    withAuthRedirect,
    withRouter
    )(ProfileContainer);