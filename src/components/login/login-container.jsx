import React, { Component } from 'react';
import Login from './login-form';
import {connect} from "react-redux";
import {login} from "../../redux/aythReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {reset} from "redux-form";

class LoginFormContainer extends Component {

    submit = (value) => {
        this.props.login(value.email, value.password, value.rememberMe, value.captcha);
        this.props.resetForm();
    };

    render() {
        const { isAuth, captchaURL } = this.props;
        return (
            <Login captchaURL={captchaURL} isAuth={isAuth} onSubmit={this.submit}/>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return {
        isAuth: auth.isAuth,
        captchaURL: auth.captchaURL
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe, captcha) => {
            dispatch(login(email, password, rememberMe, captcha));
        },
        resetForm: () => {
            dispatch(reset('login'))
        }

    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
    )(LoginFormContainer);