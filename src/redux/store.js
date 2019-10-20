import { createStore, combineReducers } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let rootReducer = combineReducers({
    dialogReducer: dialogReducer,
    profileReducer: profileReducer,
    sidebarReducer: sidebarReducer
});

let store = createStore(rootReducer);

export default store;