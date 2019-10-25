import React, { Component } from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import {toggleLoading } from '../../redux/usersReducer';
import { setUserProfile } from '../../redux/profileReducer';
import * as axios from 'axios';

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, {toggleLoading, setUserProfile })(ProfileContainer);