import * as axios from 'axios';

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

    followUserRequest(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    unfollowUserRequest(id) {
    return instance.delete(`follow/${id}`)
        .then(response => response.data);
    }
};

export const authAPI = {
    me() {
        return instance.get(`/auth/me`);
    },
    login(email, password, rememberMe) {
        return instance.post(`/auth/login`,
            { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
};

export const profileAPI = {
    requestProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    requestStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(responce => responce.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status}).then(responce => responce.data);
    },
    updatePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}