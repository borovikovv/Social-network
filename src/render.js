import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <App state={state} />
        </Router>
    , document.getElementById('root'));
}
