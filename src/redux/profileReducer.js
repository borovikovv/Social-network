import image from '../img/AVA.jpeg';
let newId = 6;
const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, text: 'Hello world'},
        {id: 2, text: 'I am working today'},
        {id: 3, text: 'Smell my hand, bro...'},
    ],
    newPostText: ''
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

export default profileReducer;