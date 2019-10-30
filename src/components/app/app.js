import React from 'react';
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
import LoginForm from "../login/login-form";


const App = () => {
    return(
    <div className = {style.appWrapper}>
        <HeaderContainer />
        <NavBar />
        <Switch>
            <nav className={style.appWrapperContent}>
                <Route path='/login' component={LoginForm}/>
                <Route path='/profile/:userId?' exact component={ProfileContainer} />
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

export default App;