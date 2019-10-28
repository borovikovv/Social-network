import React, { Component } from 'react';
import Profile from './profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {toggleLoading } from '../../redux/usersReducer';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import * as axios from 'axios';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 4978;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
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
    connect(mapStateToProps, {toggleLoading, setUserProfile }),
    withRouter
    )(ProfileContainer);