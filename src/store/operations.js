import { API, onPost } from '../service/network/network';

const endpoints = {
    login: `/users/login`,
    register: `/users/register`
}

export function register(body) {
    return onPost(endpoints.register, body, undefined, false);
}

export function login(body) {
    return onPost(endpoints.login, body, undefined, false);
}

export default {
    register,
    login
}