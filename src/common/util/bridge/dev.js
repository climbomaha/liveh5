/*  这是个简单的模拟bridge的方法
    1. 引入这个文件可以使本地环境有一个mock的Bridge, 方便调试只能在原生环境中才能打开的页面

    使用方法:
    import "fr-util/bridge/dev";
    本地连接拼接参数bridge=1

    例如:
    https://h5-zakas.mifengkong.cn/m-jieba-index?type=sudai&bridge=1

    */

import {BRIDGE_METHOD_GET_DATA, BRIDGE_METHOD_GO_NATIVE} from "../const/bridge";

const mockHandler = function (api, parameter, callback) {


    const dataMook = {
        getData: {
            device: {
                message: "success",
                status: 1,
                data: {
                    app_name: "速贷金融贷款软件",
                    app_union_name: "sudai",
                    capcitySize: "57.56 GB",
                    channel_id: "channelid",
                    countryCode: "CN",
                    dev_brand: "samsung",
                    dev_no: "SM-N9500",
                    dev_sys: "26",
                    languageCode: "zh",
                    mobileOperators: "中国移动",
                    net_info: "4g",
                    package_name: "cn.mifengkong.huaxiaapp",
                    plat_type: "1",
                    plat_version: "4.1.6",
                    screenSize: "1440*2792",
                    source_id: "channelid",
                    uuid: "333b921ba8fb275f2d07bd377d5a5a1d"
                }
            },
            version: {
                message: "success",
                status: 1,
                data: {
                    channel_id: "channelid",
                    package_name: "cn.mifengkong.huaxiaapp",
                    plat_type: "1",
                    plat_version: "4.1.6",
                    source_id: "channelid",
                    uuid: "333b921ba8fb275f2d07bd377d5a5a1d"
                }
            },
            userInfo: {
                message: "success",
                status: 1,
                data: {
                    phone: "15700077781",
                    token: "74dec90e67d79f5be351e818453285a0",
                    user_id: "888401"
                }
            }
        }
    };
    let returnData = null;

    switch (api) {
        case BRIDGE_METHOD_GET_DATA:
            returnData = dataMook[BRIDGE_METHOD_GET_DATA][parameter['type']];
            break;
        case BRIDGE_METHOD_GO_NATIVE:
            window.location.href = parameter['pageName'];
            break;
        case BRIDGE_METHOD_OPENWX:
            alert('你调用了bridge打开微信');
            break;
        default:
            alert(`你调用了bridge API: ${api} 参数是：${JSON.stringify(parameter)}`)
            break;

    }

    callback(JSON.stringify(returnData))



};

const isBridge = window.location.href.includes('bridge=1');


(() => {
    //这里不区分安卓和ios 都注册一个WebViewJavascriptBridge

    if(isBridge) {
        window.WebViewJavascriptBridge = {
            init: () => {
                console.log('mook bridge init')
            },
            callHandler: mockHandler
        };
    }


})();


export default isBridge