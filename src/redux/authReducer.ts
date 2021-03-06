import {authAPI, ResultCodes, ResultCodeCaptcha, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

export type InitialStateType = typeof initialState;

let initialState = {
    email: null as string | null,
    login: null as string | null,
    userId: null as number | null,
    isAuth: false,
    captchaURL: null as string | null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
        switch (action.type) {
            case SET_LOGIN_DATA:
                return {
                    ...state,
                    ...action.payload
                };
            case GET_CAPTCHA_URL:
                return {
                    ...state,
                    captchaURL: action.payload
                };
            default:
                return state;
        }

};

type setLoginDataActionPayloadType = {
    email: string | null,
    login:string | null,
    userId: number | null,
    isAuth: boolean
};

type setLoginDataActionType = {
    type: typeof SET_LOGIN_DATA,
    payload: setLoginDataActionPayloadType
};

const setLoginDataAC = (email: string | null, login: string | null, userId: number | null, isAuth: boolean): setLoginDataActionType => ({
    type: SET_LOGIN_DATA,
    payload: {email, login, userId, isAuth}
});

type getCaptchaURLType = {
    type: typeof GET_CAPTCHA_URL,
    payload: string
}

const getCaptchaURL = (url: string): getCaptchaURLType => ({
    type: GET_CAPTCHA_URL,
    payload: url
});

export const setLoginData = () => async (dispatch: any) => {
    let meData = await authAPI.me();

    if(meData.resultCode === ResultCodes.Success) {
        const { login, email, id } = meData.data;
        dispatch(setLoginDataAC(email, login, id, true))
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodes.Success) {
        dispatch(setLoginData());
    } else {
        if(data.resultCode === ResultCodeCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === ResultCodes.Success) {
        dispatch(setLoginDataAC(null, null, null, false))
    }

};

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await SecurityAPI.getCaptchaURL();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaURL(captchaUrl))

};


export default authReducer;