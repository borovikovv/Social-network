import image from './../img/no-image.jpeg';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        { id: 1, photos: image, name: 'Juriy Bura', status: 'hello, bro ...', followed: true },
        { id: 2, photos: image, name: 'Juriy Bura', status: 'hello, bro ...', followed: true },
        { id: 3, photos: image, name: 'Juriy Bura', status: 'hello, bro ...', followed: true },
        { id: 4, photos: image, name: 'Juriy Bura', status: 'hello, bro ...', followed: false },
        { id: 5, photos: image, name: 'Juriy Bura', status: 'hello, bro ...', followed: false },
        { id: 6, photos: image, name: 'Juriy Bura', status: 'hello, bro ...', followed: false }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.payload) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            let users = state.users;
            let id = action.payload;
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.payload) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return{
                ...state, users: [...state.users, ...action.payload]
            }
        default:
            return state;
    }
};

export const followCreator = (userId) => ({type: FOLLOW, payload: userId});
export const unfollowCreator = (userId) => ({type: UNFOLLOW, payload: userId});
export const setUsersCreator = (users) => ({type: SET_USERS, payload: users});

export default usersReducer;