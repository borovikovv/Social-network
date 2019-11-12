import { profileAPI } from "../api/api";
import image from '../img/AVA.jpeg';
let newId = 6;
const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'Hello world'},
        {id: 2, text: 'I am working today'},
        {id: 3, text: 'Smell my hand, bro...'},
    ],
    newPostText: '',
    userProfile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: newId++,
                text: state.newPostText,
                image: image
            };
            return {
                ...state,
                posts: [ ...state.posts, newPost ],
                newPostText: '',
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.payload
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload
            };
        case GET_USER_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
};
export const addPostActionCreator = (text) => ({ type: ADD_POST, payload: text });

export const onPostChangedActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    payload: text
});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, payload: userProfile});

const getUserStatusAC = (status) => ({
    type: GET_USER_STATUS,
    payload: status
});

const updateUserStatusAC = (status) => ({
    type: UPDATE_USER_STATUS,
    payload: status
});

export const requestUserProfile = (id) => (dispatch) => {
    profileAPI.requestProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};

export const requestUserStatus = (id) => (dispatch) => {
    profileAPI.requestStatus(id).then(responce => {
        dispatch(getUserStatusAC(responce))
    });
};

export const updateUserStatus = (status) => (dispatch) => {
        debugger
    profileAPI.updateStatus(status).then(responce => {
        debugger
        if(responce.resultCode === 0){
            dispatch(updateUserStatusAC(status))
        };
    });
};

export default profileReducer;