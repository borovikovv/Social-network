import {AppStateType} from "../redux/store";

export const getUsers = (state: AppStateType) => {
    return state.usersReducer.users;
};

export const getCurrentPage = (state: AppStateType) => {
    return state.usersReducer.currentPage;
};

export const getFollowingIsProgress = (state: AppStateType) => {
    return state.usersReducer.followingIsProgress;
};

export const getPageSize = (state: AppStateType) => {
    return state.usersReducer.pageSize;
};
export const getTotalItemsCount = (state: AppStateType) => {
    return state.usersReducer.totalItemsCount;
};
export const getLoading = (state: AppStateType) => {
    return state.usersReducer.loading;
};
