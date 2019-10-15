import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';
import { addPost } from './state/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <App state={state} addPost={addPost} />
        </Router>
    , document.getElementById('root'));
}
