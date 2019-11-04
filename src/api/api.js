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
    login() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
    }
};

export const profileAPI = {
    requestProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
}