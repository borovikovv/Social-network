import { createStore, combineReducers } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

let rootReducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
    sidebarReducer: sidebarReducer,
    usersReducer: usersReducer
});

let store = createStore(rootReducer);

export default store;