import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

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
                    ...action.payload
                };
            default:
                return state;
        }

    }
;

const setLoginDataAC = (email, login, userId, isAuth) => ({
    type: SET_LOGIN_DATA,
    payload: {email, login, userId, isAuth}
});

export const setLoginData = () => async (dispatch) => {
    let response = await authAPI.me();
    if(response.data.resultCode === 0) {
        const { login, email, id } = response.data.data;
        dispatch(setLoginDataAC(email, login, id, true))
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(setLoginData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setLoginDataAC(null, null, null, false))
    }

};


export default authReducer;