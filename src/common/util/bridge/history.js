/*  一些非常历史久远的方法
    1. 原生可能会无意识下掉
    2. 尽量避免使用，改用bridge相关调用

    使用方法：
    import { toLogin } from "fr-base/refine/fr-util/bridge/history";
    toLogin();

    */


import {ENV_IS_ADR} from "../env";

const iosPost =  (msg) => {
    try {
        window.webkit.messageHandlers.NativeMethod.postMessage(msg);
    }catch (e) {
        console.log(e)
    }
};

export const toLogin = () => {
    iosPost('jump_login');
    try  {
        window.onCallByH5.startActivity('LoginActivity');
    }catch (e) {
        console.log(e)
    }

};

export const toWx = function () {

    if(ENV_IS_ADR) {
        try  {
            window.onCallByH5.openWeixin();
        }catch (e) {
            console.log(e)
        }
    }else {
        try {
            window.webkit.messageHandlers.NativeMethod.postMessage('openWechat');
        }catch (e) {

        }
        try {
            window.webkit.messageHandlers.NativeMethod.postMessage('openWeixin');
        }catch (e) {

        }



    }


};

export const toHelp = () => {
    /*咨询客服*/
    iosPost('jump_server');
    try {
        window.onCallByH5.customeSerive();
    }catch (e) {
        console.log(e)
    }
};

export const toMain = () => {
    /*去申请页面*/
    iosPost('jump_jianrong');
    try {
        window.onCallByH5.startMainActivity();
    }catch (e) {
        console.log(e)
    }
};


export const closeWebview = () => {
    /*关闭webview*/
    iosPost('close');
    try {
        window.onCallByH5.close();
    }catch (e) {
        console.log(e)
    }
};


