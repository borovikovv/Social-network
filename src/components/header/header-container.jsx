import React, { Component} from 'react';
import Header from "./header";
import { connect } from "react-redux";
import * as axios from "axios";
import {setLoginDataCreator} from "../../redux/aythReducer";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    const { login, email, id } = response.data.data;
                    this.props.setLoginDataCreator(email, login, id)
                }
            });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}
const mapStateToProps = ({auth: {login, isAuth}}) => {
    return {
        login,
        isAuth
    }
};
export default connect(mapStateToProps, {setLoginDataCreator})(HeaderContainer);

