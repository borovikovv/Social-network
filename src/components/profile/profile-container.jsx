import React, { Component } from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import {toggleLoading, setUserProfile } from '../../redux/usersReducer';
import * as axios from 'axios';

class ProfileContainer extends Component {

    componentDidMount() {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
        .then(response => {
            this.props.toggleLoading();
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
console.log(userProfile);

export default connect(mapStateToProps, {toggleLoading, setUserProfile })(ProfileContainer);