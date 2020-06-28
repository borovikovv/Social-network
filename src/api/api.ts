import axios from 'axios';
import {UserProfileType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f2d480c2-f123-42dd-91cf-92498ea25b61'
    }
});

export const userAPI = {
    requestUsers(pageSize=10, currentPage=1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    followUserRequest(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    unfollowUserRequest(id: number) {
    return instance.delete(`follow/${id}`)
        .then(response => response.data);
    }
};

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`/auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return instance.post<LoginResponseType>(`/auth/login`,
            { email, password, rememberMe, captcha }).then(res => res.data);
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
};

type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodes
    messages: Array<string>
};

type MeResponseType = {
    data: { id: number, login: string, email: string }
    resultCode: ResultCodes
    messages: Array<string>
};

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeCaptcha {
    CaptchaIsRequired = 10
}

export const profileAPI = {
    requestProfile(userId: number){
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    requestStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(responce => responce.data);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status}).then(responce => responce.data);
    },
    updatePhoto(photo: any) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profile: UserProfileType) {
        return instance.put(`profile`, profile)
    }
};

export const SecurityAPI = {
    getCaptchaURL(){
        return instance.get(`security/get-captcha-url`)
    }
};