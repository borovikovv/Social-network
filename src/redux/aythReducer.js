const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

let initialState = {
    email: null,
    login: null,
    userId: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
        switch (action.type) {
            case SET_LOGIN_DATA:
                return {
                    ...state,
                    ...action.payload,
                    isAuth: true
                }
            default:
                return state;
        }

    }
;

export const setLoginDataCreator = (email, login, userId) => ({
    type: SET_LOGIN_DATA,
    payload: {email, login, userId}
});


export default authReducer;