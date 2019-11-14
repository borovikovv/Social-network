import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './aythReducer';
import  thunkMiddleware from 'redux-thunk';
import {  reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
    sidebarReducer: sidebarReducer,
    usersReducer: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;