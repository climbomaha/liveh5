

const getZoomRatio = () => {
    let doc = document, user_webset_font = 16;

    try {
        if(doc.documentElement.currentStyle) {
            user_webset_font = doc.documentElement.currentStyle['fontSize'];
        } else {
            user_webset_font = getComputedStyle(doc.documentElement,false)['fontSize'];
        }
    }catch (e) {
        console.log(e)
    }

    return 16/parseFloat(user_webset_font)
    //return 1

};


export const remSet = () => {
    window.FR_GLOBAL_REM_NORAML = true;
    let docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const zoomRatio = getZoomRatio();

    let recalc = () => {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = zoomRatio * 20 * (clientWidth / 375) + 'px';  /*计算出来的结果表示 1rem等于20px*/
    };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
};

export const remInit = () => {
    /*根据高清方案设置的rem*/
    window.FR_GLOBAL_REM_DPR = true;
    const zoomRatio = getZoomRatio();
    let dpr, rem, scale;
    const docEl = document.documentElement;
    const fontEl = document.createElement('style');
    const metaEl = document.querySelector('meta[name="viewport"]');

    const clWidth = docEl.clientWidth || document.body.clientWidth || window.localStorage.getItem('FR_GLOBAL_CLIENT_WIDTH');
    window.localStorage.setItem('FR_GLOBAL_CLIENT_WIDTH', clWidth);

    dpr = window.devicePixelRatio || 1;

    /* docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'*/

    rem = zoomRatio * clWidth * dpr * 20 / 375;

    scale = 1 / dpr;


// 设置viewport，进行缩放，达到高清效果
    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ', initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

// 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr);

// 动态写入样式
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
};



