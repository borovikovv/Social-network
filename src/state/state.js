import image from './../img/no-image.jpeg';
import { rerenderEntireTree } from '../render';

let state = {
    dialogsPage:  {
        messages: [
            { id: 1, text: 'Lorem Ipsum ho ho ho'},
            { id: 2, text: 'Lorem Ipsum ho ho ho'},
            { id: 3, text: 'Lorem Ipsum ho ho ho'},
            { id: 4, text: 'Lorem Ipsum ho ho ho'},
            { id: 5, text: 'Lorem Ipsum ho ho ho'}
        ],
        dialogs: [
            {id: 1, name: 'Tom Tailor', image: image},
            {id: 2, name: 'Bob Marti', image: image},
            {id: 3, name: 'Alex Borov', image: image},
            {id: 4, name: 'Viktor Nagg', image: image},
            {id: 5, name: 'Samanta Cris', image: image},
        ]
    },

    profilePage: {
        posts: [
            {id: 1, text: 'Hello world'},
            {id: 2, text: 'I am working today'},
            {id: 3, text: 'Smell my hand, bro...'},
        ],
        newPostText: ''
    }
};

let newId = 6;

export let updatePostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};

export const addPost = () => {
    let newPost = {
        id: newId++,
        text: state.profilePage.newPostText
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
};

export default state;