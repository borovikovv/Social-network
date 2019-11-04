import { authAPI } from "../api/api";

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

export const setLoginData = () => (dispatch) => {
    authAPI.login()
        .then(response => {
            if(response.data.resultCode === 0) {
                const { login, email, id } = response.data.data;
                dispatch(setLoginDataCreator(email, login, id))
            }
        });
}


export default authReducer;