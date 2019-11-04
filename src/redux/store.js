import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './aythReducer';
import  thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
    sidebarReducer: sidebarReducer,
    usersReducer: usersReducer,
    auth: authReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;