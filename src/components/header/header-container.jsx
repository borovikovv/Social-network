import React, { Component} from 'react';
import Header from "./header";
import { connect } from "react-redux";
import {setLoginData} from "../../redux/aythReducer";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setLoginData();
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
export default connect(mapStateToProps, {setLoginData})(HeaderContainer);

