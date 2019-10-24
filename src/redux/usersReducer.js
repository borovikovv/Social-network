const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const GET_USERS_COUNT = 'GET_USERS_COUNT';
const TOGGLE_LOADING = 'TOGGLE_LOADING';


let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 7,
    totalItemsCount: 0,
    loading: true
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
                ...state,
                loading: false,
                users: [...action.payload]
            };
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.payload
                }
            case GET_USERS_COUNT:
                return {
                    ...state,
                    totalItemsCount: action.payload
                }
            case TOGGLE_LOADING:
                return {
                    ...state,
                    loading: true
                };
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, payload: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, payload: userId});
export const setUsers = (users) => ({type: SET_USERS, payload: users});
export const setCurrentPage = (count) => ({type: SET_CURRENT_PAGE, payload: count});
export const getUsersCount = (count) => ({type: GET_USERS_COUNT, payload: count});
export const toggleLoading = () => ({type: TOGGLE_LOADING});

export default usersReducer;