import React, { Component } from 'react';
import Login from './login-form';
import {connect} from "react-redux";
import {login} from "../../redux/aythReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class LoginFormContainer extends Component {

    submit = (value) => {
        this.props.login(value.email, value.password, value.rememberMe);
    };

    render() {
        const { isAuth } = this.props;
        return (
            <Login isAuth={isAuth} onSubmit={this.submit}/>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return {
        isAuth: auth.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(login(email, password, rememberMe));
        }
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
(LoginFormContainer);