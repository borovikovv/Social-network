import { userAPI} from "../api/api";
import {getFollowingIsProgress} from "../selectors/user-selectors";
import {findObjectProps} from "../utils/findObjectProps";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const GET_USERS_COUNT = 'GET_USERS_COUNT';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';


let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 7,
    totalItemsCount: 0,
    loading: true,
    followingIsProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: findObjectProps(state.users, action.payload, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: findObjectProps(state.users, action.payload, {followed: false})
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
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(id => id !== action.userId)
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
export const toggleIsFollowing = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING, isFetching: isFetching, userId: id});

export const requestUsersThunkCreator = () => (dispatch) => {
    userAPI.requestUsers().then(data => {
            dispatch(toggleLoading());
            dispatch(setUsers(data.items));
            dispatch(getUsersCount(data.totalCount));
        });
}

export const changePageThunkCreator = (num, pageSize, currentPage) => async (dispatch) => {
    dispatch(setCurrentPage(num));
    let data = await userAPI.requestUsers(pageSize, currentPage)
        dispatch(toggleLoading());
        dispatch(setUsers(data.items));
};

const followUnfollowFlow = async (dispatch, id, apiMethod, action ) => {
    dispatch(toggleIsFollowing(true, id));
    let data = await apiMethod(id);
    if(data.resultCode === 0){
        dispatch(action(id))
    }
    dispatch(toggleIsFollowing(false, id))
};

export const followingSuccess = (id) => async (dispatch) => {
    return followUnfollowFlow(dispatch, id, userAPI.followUserRequest, follow);
};

export const unfollowingSuccess = (id) => async (dispatch) => {
    return followUnfollowFlow(dispatch, id, userAPI.unfollowUserRequest, unfollow);
};

export default usersReducer;