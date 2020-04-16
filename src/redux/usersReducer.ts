import { userAPI} from "../api/api";
import {findObjectProps} from "../utils/findObjectProps";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const GET_USERS_COUNT = 'GET_USERS_COUNT';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';


let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSize: 7,
    totalItemsCount: 0,
    loading: true,
    followingIsProgress: [] as Array<number> // array of users id
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
                };
            case GET_USERS_COUNT:
                return {
                    ...state,
                    totalItemsCount: action.payload
                };
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

type FollowActionType = {
    type: typeof FOLLOW,
    payload: number
}
type UnfollowActionType = {
    type: typeof UNFOLLOW,
    payload: number
}
type SetUsersActionType = {
    type: typeof SET_USERS,
    payload: Array<UserType>
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    payload: number
}
type GetUsersCountActionType = {
    type: typeof GET_USERS_COUNT,
    payload: number
}
type ToggleLoadingActionType = {
    type: typeof TOGGLE_LOADING
}
type ToggleIsFollowingActionType = {
    type: typeof TOGGLE_IS_FOLLOWING,
    isFetching: boolean,
    userId: number
}
type ActionsTypes = UnfollowActionType | SetUsersActionType | FollowActionType | SetCurrentPageActionType |
                    GetUsersCountActionType | ToggleLoadingActionType | ToggleIsFollowingActionType

export const follow = (userId: number): FollowActionType => ({type: FOLLOW, payload: userId});
export const unfollow = (userId: number): UnfollowActionType => ({type: UNFOLLOW, payload: userId});
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, payload: users});
export const setCurrentPage = (count: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, payload: count});
export const getUsersCount = (count: number): GetUsersCountActionType => ({type: GET_USERS_COUNT, payload: count});
export const toggleLoading = ():ToggleLoadingActionType => ({type: TOGGLE_LOADING});
export const toggleIsFollowing = (isFetching: boolean, id: number): ToggleIsFollowingActionType => ({ type: TOGGLE_IS_FOLLOWING, isFetching: isFetching, userId: id});

type DispatchType = () => Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requestUsersThunkCreator = (): ThunkType => async (dispatch) => {
    userAPI.requestUsers().then((data: any) => {
            dispatch(toggleLoading());
            dispatch(setUsers(data.items));
            dispatch(getUsersCount(data.totalCount));
        });
};

export const changePageThunkCreator = (num: number, pageSize: number, currentPage: number): ThunkType => async (dispatch: any) => {
    dispatch(setCurrentPage(num));
    let data = await userAPI.requestUsers(pageSize, currentPage);
        dispatch(toggleLoading());
        dispatch(setUsers(data.items));
};

const followUnfollowFlow = async (dispatch: any, id: number, apiMethod: any, action: any) => {
    dispatch(toggleIsFollowing(true, id));
    let data = await apiMethod(id);
    if(data.resultCode === 0){
        dispatch(action(id))
    }
    dispatch(toggleIsFollowing(false, id))
};

export const followingSuccess = (id: number): ThunkType => async (dispatch: any) => {
    return followUnfollowFlow(dispatch, id, userAPI.followUserRequest, follow);
};

export const unfollowingSuccess = (id: number): ThunkType => async (dispatch: any) => {
    return followUnfollowFlow(dispatch, id, userAPI.unfollowUserRequest, unfollow);
};

export default usersReducer;