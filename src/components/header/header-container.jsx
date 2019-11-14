import React, { Component} from 'react';
import Header from "./header";
import { connect } from "react-redux";
import {logout} from "../../redux/aythReducer";

class HeaderContainer extends Component {

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
export default connect(mapStateToProps, {logout})(HeaderContainer);

