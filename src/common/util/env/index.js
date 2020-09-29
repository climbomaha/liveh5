const  agent  = navigator.userAgent;
const  ua  = navigator.userAgent.toLowerCase();

export const ENV_IS_IOS = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || /iphone|ipad|ipod/.test(ua);

export const ENV_IS_ADR = !ENV_IS_IOS;

export const ENV_IS_IPHONEX = /iphone/gi.test(agent) && (window.screen.height === 812 && window.screen.width === 375);
export const ENV_IS_FENGRONG = agent.indexOf('fengrong') > -1;
export const ENV_SYSTEM = ENV_IS_ADR ? 'Android' : 'iOS';
export const ENV_IS_ONLINE =  window.location.protocol.indexOf('https') > -1;
export const ENV_IS_WX = ua.match(/MicroMessenger/i) == "micromessenger";
export const ENV_NETWORK_TYPE = getNetworkType();


export const ENV_PLAT_TYPE =  ENV_IS_ADR ? 1 : 2;
export const ENV_PLAT_TYPE_DAIHOU =  ENV_IS_ADR ? 31 : 32;
export const ENV_PLAT_VERSION_DAIHOU =  2;

function getNetworkType() {
    var ua = navigator.userAgent;
    var networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other';
    networkStr = networkStr.toLowerCase().replace('nettype/', '');
    var networkType;
    switch (networkStr) {
        case 'wifi':
            networkType = 'wifi';
            break;
        case '4g':
            networkType = '4g';
            break;
        case '3g':
            networkType = '3g';
            break;
        case '3gnet':
            networkType = '3g';
            break;
        case '2g':
            networkType = '2g';
            break;
        default:
            networkType = 'other';
    }
    return networkType;
}