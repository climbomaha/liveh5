import axios from "axios";
import {
    AXIOS_CODE_SUCCESS,
    AXIOS_CODE_OTHER_LOGIN,
    AXIOS_CODE_OTHER_LOGIN_MSG,
    AXIOS_CODE_TIMEOUT,
    AXIOS_CODE_TIMEOUT_MSG,
    AXIOS_CODE_NOT_LOGIN,
    AXIOS_CODE_NOT_LOGIN_MSG,
    AXIOS_CODE_LOGOUT,
    AXIOS_CODE_LOGOUT_MSG,
} from "./const";
const throttle = (msg) => { alert(msg)}
const aimsAxios = axios.create();
export const axiosParseCode = (response) => {
    switch (response.status) {
        case 200:
            switch (response.data.code) {
                case AXIOS_CODE_SUCCESS:
                    return response.data;
                case AXIOS_CODE_OTHER_LOGIN:
                    throttle(AXIOS_CODE_OTHER_LOGIN_MSG);
                    window.location.href = '/Login';
                    return Promise.reject('AXIOS_CODE_OTHER_LOGIN');
                case AXIOS_CODE_TIMEOUT:
                    throttle(AXIOS_CODE_TIMEOUT_MSG);
                    window.location.href = '/Login';
                    return Promise.reject('AXIOS_CODE_TIMEOUT');
                case AXIOS_CODE_NOT_LOGIN:
                    throttle(AXIOS_CODE_NOT_LOGIN_MSG);
                    window.location.href = '/Login';
                    return Promise.reject('AXIOS_CODE_NOT_LOGIN');
                case AXIOS_CODE_LOGOUT:
                    throttle(AXIOS_CODE_LOGOUT_MSG);
                    window.location.href = '/Login';
                    return Promise.reject('AXIOS_CODE_LOGOUT');
                default:
                    throttle(response.data.msg);
                    return Promise.reject();
            }
        case 300:
        case 301:
        case 302:
            throttle('请重新登陆');
            window.location.href = '/Login';
            return Promise.reject('未登录');
        default:
            throttle(response.data.msg);
            return Promise.reject();
    }
}

aimsAxios.interceptors.response.use(function (response) {
    return axiosParseCode(response)
}, function (error) {
    throttle('请求失败');
    return Promise.reject(error);
});

export default aimsAxios
