import React, { Component } from 'react';
import Login from './login-form';
import { reset } from 'redux-form';
import {connect} from "react-redux";

class LoginFormContainer extends Component {

    submit = (value) => {
        console.log(value)
        this.props.resetLoginForm();
    };

    render() {
        return (
            <Login onSubmit={this.submit}/>
        )
    }
}

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetLoginForm: () => {
            dispatch(reset('login'));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);