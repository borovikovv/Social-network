import React, { Component } from 'react';
import HeaderContainer from '../header/header-container';
import NavBar from '../nav-bar/nav-bar';
import ProfileContainer from '../profile/profile-container';
import style from './app.module.css';
import DialogContainer from '../dialogs/dialogs-container';
import News from '../news/news';
import Music from '../music/music';
import Settings from '../settings/settings';
import { Route, Switch } from 'react-router-dom';
import UsersContainer from './../users/users-container';
import LoginFormContainer from "../login/login-container";
import {connect} from "react-redux";
import { initialization } from "../../redux/app-reducer";
import Spinner from "../common/spinner/spinner";



class App extends Component {

    componentDidMount() {
        this.props.initialization()
    }

    render() {

        if(!this.props.initializationApp) {
            return <Spinner />
        }

        return(
            <div className = {style.appWrapper}>
                <HeaderContainer />
                <NavBar />
                <Switch>
                    <nav className={style.appWrapperContent}>
                        <Route path='/' exact component={LoginFormContainer}/>
                        <Route path='/profile/:userId?' component={ProfileContainer} />
                        <Route path='/users' component={UsersContainer} />
                        <Route path='/dialogs' component={DialogContainer} />
                        <Route path='/news' component={News} />
                        <Route path='/setting' component={Settings} />
                        <Route path='/music' component={Music} />
                    </nav>
                </Switch>
            </div>
        )
    }
};

const mapStateToProps = ({app}) => ({
    initializationApp: app.initializationSuccess
});


export default connect(mapStateToProps, {initialization})(App);