export const getUsers = (state) => {
    return state.usersReducer.users;
};

export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage;
};

export const getFollowingIsProgress = (state) => {
    return state.usersReducer.followingIsProgress;
};

export const getPageSize = (state) => {
    return state.usersReducer.pageSize;
};
export const getTotalItemsCount = (state) => {
    return state.usersReducer.totalItemsCount;
};
export const getLoading = (state) => {
    return state.usersReducer.loading;
};
