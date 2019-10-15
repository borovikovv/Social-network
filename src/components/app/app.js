import React from 'react';
import Header from '../header/header';
import NavBar from '../nav-bar/nav-bar';
import Profile from '../profile/profile';
import style from './app.module.css';
import Dialogs from '../dialogs/dilogs';
import News from '../news/news';
import Music from '../music/music';
import Settings from '../settings/settings';
import { Route, Switch } from 'react-router-dom';


const App = (props) => {
    return(
    <div className = {style.appWrapper}>
        <Header />
        <NavBar />
        <Switch>
            <div className={style.appWrapperContent}>
                <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>} />
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>} />
                <Route path='/news' component={News} />
                <Route path='/setting' component={Settings} />
                <Route path='/music' component={Music} />
            </div>
        </Switch>
    </div>
    )
}

export default App;