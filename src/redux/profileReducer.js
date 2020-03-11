import { profileAPI } from "../api/api";
import image from '../img/AVA.jpeg';
let newId = 6;
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
const UPDATE_PROFILE_PHOTO = 'UPDATE_PROFILE_PHOTO';

let initialState = {
    posts: [
        {id: 1, text: 'Hello world'},
        {id: 2, text: 'I am working today'},
        {id: 3, text: 'Smell my hand, bro...'},
    ],
    userProfile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: newId++,
                text: action.payload,
                image: image
            };
            return {
                ...state,
                posts: [ ...state.posts, newPost ]
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
            };
        case UPDATE_PROFILE_PHOTO:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.payload}
            };
        default:
            return state;
    }
};

export const addPost = (text) => ({
   type: ADD_POST,
   payload: text
});

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, payload: userProfile});
const updateProfilePhotoSuccess = (photo) => ({type: UPDATE_PROFILE_PHOTO, payload: photo});

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

export const requestUserStatus = (id) => async (dispatch) => {
    let resolve = await profileAPI.requestStatus(id)
        dispatch(getUserStatusAC(resolve))
};

export const updateUserStatus = (status) => async (dispatch) => {
    let resolve = await profileAPI.updateStatus(status);
    if (resolve.resultCode === 0) {
        dispatch(updateUserStatusAC(status));
    }
};

export const updateProfilePhoto = (photo) => async (dispatch) => {
    let resolve = await profileAPI.updatePhoto(photo);
    if (resolve.resultCode === 0) {
        dispatch(updateProfilePhotoSuccess(resolve.data.data.photos));
    }
};

export default profileReducer;