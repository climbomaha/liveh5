

import axios from "axios";
import { axiosParseCode } from ".";

const throttle = (msg: any) => {alert(msg)}
interface ConfigProps {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    disableAutoAddIndex?: any;
}

interface ResultProps {
    get: (url: string, params?: any) => Promise<any>;
    post: (url: string, params: any) => Promise<any>;
    put: (url: string, params: any) => Promise<any>;
    delete: (url: string, params?: any) => Promise<any>;
}
export default function axiosCreate(config: ConfigProps): ResultProps {
    const { setLoading, disableAutoAddIndex } = config;
    const thisAxios = axios.create();
    // 添加请求拦截器
    thisAxios.interceptors.request.use(function (config) {
        setLoading(true);
        return config;
    }, function (error) {
        // 对请求错误做些什么
        setLoading(false);
        return Promise.reject(error);
    });
    // 添加响应拦截器
    thisAxios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        setLoading(false);
       
        return axiosParseCode(response)
    }, function (error) {
        // 对响应错误做点什么
        setLoading(false);
        throttle('请求失败');
        return Promise.reject(error);
    });

    const getRet = (res: any) => {
        // 加上统一的错误参数
        let ret = {};
        Object.assign(ret, {
            then: (func: any, onError: any) => {
                if (onError) {
                    return res.then(func, onError)
                } else {
                    return res.then(func, (e: any) => {
                        console.log('AXIOS_ERROR:' + e)
                    })
                }
            }
        })
        return ret as Promise<any>;
    }


    // let reAxios = (a: string, b: any) => {
    //     return getRet(thisAxios.get(a, b))
    // }

    // Object.assign({}, {
    //     get: (a: string, b: any) => {
    //         return getRet(thisAxios.get(a, b))
    //     },
    //     post: (a: string, b: any) => {
    //         return getRet(thisAxios.post(a, b))
    //     },
    //     put: (a: string, b: any) => {
    //         return getRet(thisAxios.put(a, b))
    //     },
    //     delete: (a: string, b: any) => {
    //         return getRet(thisAxios.delete(a, b))
    //     }
    // });

    return {
        get: (a: string, b?: any) => {
            return getRet(thisAxios.get(a, b))
        },
        post: (a: string, b: any) => {
            return getRet(thisAxios.post(a, b))
        },
        put: (a: string, b: any) => {
            return getRet(thisAxios.put(a, b))
        },
        delete: (a: string, b?: any) => {
            return getRet(thisAxios.delete(a, b))
        }
    }
    //return thisAxios

}