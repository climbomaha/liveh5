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
const throttle = (msg) => {
  alert(msg);
};
const aimsAxios = axios.create();
export const axiosParseCode = (response) => {
  switch (response.status) {
    case 200:
    case 300:
    case 301:
    case 302:
      switch (response.data.code) {
        case AXIOS_CODE_SUCCESS:
          return response.data;

        default:
          throttle(response.data.msg);
          return Promise.reject();
      }

    default:
      throttle(response.data.msg);
      return Promise.reject();
  }
};

aimsAxios.interceptors.response.use(
  function (response) {
    return axiosParseCode(response);
  },
  function (error) {
    throttle("请求失败");
    return Promise.reject(error);
  }
);

export default aimsAxios;
