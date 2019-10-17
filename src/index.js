import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import './style.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <App    state={state} 
                    dispatch={store.dispatch.bind(store)} />
        </Router>
    , document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)