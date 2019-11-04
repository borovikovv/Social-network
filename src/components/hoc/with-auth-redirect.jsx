import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = ({auth}) => {
    return {
        isAuth: auth.isAuth
    }
};

export const withAuthRedirect = (Wrapped) => {
    class RedirectComponent extends Component {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login' />
            return <Wrapped {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
};

