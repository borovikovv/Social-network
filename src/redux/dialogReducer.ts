import image from './../img/no-image.jpeg';
import {DialogType, MessageType} from "../types/types";
let newId = 6;

const SEND_MESSAGE_TEXT = 'SEND_MESSAGE';

let initialState= {
    messages: [
        { id: 1, text: 'Lorem Ipsum ho ho ho'},
        { id: 2, text: 'Lorem Ipsum ho ho ho'},
        { id: 3, text: 'Lorem Ipsum ho ho ho'},
        { id: 4, text: 'Lorem Ipsum ho ho ho'},
        { id: 5, text: 'Lorem Ipsum ho ho ho'}
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Tom Tailor', image: image},
        {id: 2, name: 'Bob Marti', image: image},
        {id: 3, name: 'Alex Borov', image: image},
        {id: 4, name: 'Viktor Nagg', image: image},
        {id: 5, name: 'Samanta Cris', image: image},
    ] as Array<DialogType>
};

export type InitialStateType = typeof initialState;

const dialogReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE_TEXT:
            let newMessage = {
                id: newId++,
                text: action.payload
        };
        return {
            ...state,
            messages: [...state.messages, newMessage]
        };
        default:
            return state;
    }

};

type sendMessageBodyActionType = {
    type: typeof SEND_MESSAGE_TEXT,
    payload: string
};

export const sendMessageBody = (text: string): sendMessageBodyActionType => ({
    type: SEND_MESSAGE_TEXT,
    payload: text
});

export default dialogReducer;