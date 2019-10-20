import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import './style.css';
import { Provider } from 'react-redux';


ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
, document.getElementById('root'));