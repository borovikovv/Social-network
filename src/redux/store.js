import { createStore, combineReducers } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from "./aythReducer";

let rootReducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
    sidebarReducer: sidebarReducer,
    usersReducer: usersReducer,
    auth: authReducer
});

let store = createStore(rootReducer);
window.store = store;

export default store;