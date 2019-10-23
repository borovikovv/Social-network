const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const GET_USERS_COUNT = 'GET_USERS_COUNT';


let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUserCount: 100
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
            return {
                ...state, users: [...action.payload]
            };
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.payload
                }
            case GET_USERS_COUNT:
                return {
                    ...state,
                    totalUserCount: action.payload
                }
        default:
            return state;
    }
};

export const followCreator = (userId) => ({type: FOLLOW, payload: userId});
export const unfollowCreator = (userId) => ({type: UNFOLLOW, payload: userId});
export const setUsersCreator = (users) => ({type: SET_USERS, payload: users});
export const setCurrentPageCreator = (count) => ({type: SET_CURRENT_PAGE, payload: count});
export const getUsersCountCreator = (count) => ({type: GET_USERS_COUNT, payload: count});

export default usersReducer;