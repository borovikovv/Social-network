import image from './../img/no-image.jpeg';
let newId = 6;

const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: newId++,
                text: state.newMessageText
        };
        return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, newMessage]
        }
        case ADD_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.payload
            }
        default:
            return state;
}

}
;

export const sendMessageCreator = (text) => ({ 
    type: SEND_MESSAGE, 
    payload: text });

export const addMessageBodyCreator = (text) => ({
    type: ADD_MESSAGE_TEXT,
    payload: text
});

export default dialogReducer;