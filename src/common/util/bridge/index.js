
/*  支持bridge调用的基础方法
    1. startBridge 方法是异步调用
    2. 尽量使用 bridge目录下的const.js里面的常量
    3. 如果有问题可以和原生一起调试，逐步完善

    使用方法:
    import startBridge from 'fr-base/refine/fr-util/bridge';

    startBridge(BRIDGE_METHOD_GET_DATA, {
        type: BRIDGE_DATA_TYPE_USER
    }).then((ret) => {
        xxx
    });

    参考项目:
    https://github.com/lzyzsd/JsBridge
    https://github.com/marcuswestin/WebViewJavascriptBridge
    */



import { ENV_IS_ADR } from '../env';


let startBridge, frBridge, initBridgeReady;
let count = 0;
if(ENV_IS_ADR) {
    /*安卓bridge方案*/
    let WebViewJavascriptBridgeNotInited = true;
    frBridge = function (api, parameter, callback) {
        try {
            /*这里有可能和其他bridge方式混用，其他地方执行window.WebViewJavascriptBridge.init()，页面就会抛错*/
            if(WebViewJavascriptBridgeNotInited) {
                window.WebViewJavascriptBridge.init();
                WebViewJavascriptBridgeNotInited = false;
            }
        }catch (e) {

        }
    
        window.WebViewJavascriptBridge.callHandler(api, parameter, callback);
    };
    initBridgeReady = function () {
        return new Promise(function (resolve, reject) {
            if (window.WebViewJavascriptBridge) {
                resolve();
            } else {
                document.addEventListener(
                    'WebViewJavascriptBridgeReady'
                    , function () {
                        resolve(window.WebViewJavascriptBridge);
                    },
                    false
                );
            }
        })
    };
   startBridge = function (api, param) {
        return new Promise(function (resolve, reject) {
            initBridgeReady().then(() => {
                frBridge(api, param, function (ret) {
                    /* 在这里调用 console.log 似乎能减少出现获取环境超时的概率。。。*/
                    console.log(count++)
                    resolve(JSON.parse(ret))
                });
            });
        })
    };
} else {
    /*ios bridge方案*/
    const setupWebViewJavascriptBridge =  (callback) => {
        if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        let WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    };
    frBridge = function (api, param, callBack) {
        setupWebViewJavascriptBridge(function(bridge) {
            bridge.callHandler(api, param, callBack)
        })
    };
    startBridge = function (api, param) {
        return new Promise(function (resolve, reject) {
            frBridge(api, param, function (ret) {
                resolve(JSON.parse(ret))
            });
        })
    };
}

export default startBridge





