import image from './../img/no-image.jpeg';

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT';

let store = {

    _state: {
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
            ],
            newMessageText: ''
        },
    
        profilePage: {
            posts: [
                {id: 1, text: 'Hello world'},
                {id: 2, text: 'I am working today'},
                {id: 3, text: 'Smell my hand, bro...'},
            ],
            newPostText: ''
        }
    },
    _callSubscriber() {
        console.log('state change');
    },

    getState() {
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    addMessage(text) {
        let newMessage = {
            id: 11, 
            text: text
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
    },

    updateMessageText(text) {
        this._state.dialogsPage.newMessageText = text;
    },

    addPost() {
        let newPost = {
            id: 6,
            text: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
    },

    updatePostText(text) {
        this._state.profilePage.newPostText = text;
    },



    dispatch(action){
        if(action.type === ADD_POST) {
            this.addPost()
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_POST_TEXT){
            this.updatePostText(action.text);
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE) {
            this.addMessage(action.text);
            this._callSubscriber(this._state);
        } else if(action.type === ADD_MESSAGE_TEXT) {
            this.updateMessageText(action.text);
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangedActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    text: text
});

export const sendMessageCreator = (text) => ({ 
    type: SEND_MESSAGE, 
    text: text });

export const addMessageBodyCreator = (text) => ({
    type: ADD_MESSAGE_TEXT,
    text: text
});



export default store;