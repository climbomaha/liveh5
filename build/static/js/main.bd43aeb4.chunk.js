(this.webpackJsonpliveh5=this.webpackJsonpliveh5||[]).push([[0],{27:function(e,t,n){e.exports=n(55)},32:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(24),r=n.n(o),c=n(11),s=n(1),u=(n(32),function(){var e=document,t=16;try{t=e.documentElement.currentStyle?e.documentElement.currentStyle.fontSize:getComputedStyle(e.documentElement,!1).fontSize}catch(n){console.log(n)}return 16/parseFloat(t)}),d=(n(26),n(9)),l=n.n(d),w=function(e){alert(e)},m=l.a.create(),f=function(e){switch(e.status){case 200:case 300:case 301:case 302:switch(e.data.code){case 0:return e.data;default:return w(e.data.msg),Promise.reject()}default:return w(e.data.msg),Promise.reject()}};m.interceptors.response.use((function(e){return f(e)}),(function(e){return w("\u8bf7\u6c42\u5931\u8d25"),Promise.reject(e)}));var g,p,h,v=navigator.userAgent,E=navigator.userAgent.toLowerCase(),b=!(!!v.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)||/iphone|ipad|ipod/.test(E));/iphone/gi.test(v)&&812===window.screen.height&&window.screen.width,v.indexOf("fengrong"),window.location.protocol.indexOf("https"),E.match(/MicroMessenger/i),function(){var e,t=navigator.userAgent,n=t.match(/NetType\/\w+/)?t.match(/NetType\/\w+/)[0]:"NetType/other";switch(n=n.toLowerCase().replace("nettype/","")){case"wifi":e="wifi";break;case"4g":e="4g";break;case"3g":case"3gnet":e="3g";break;case"2g":e="2g";break;default:e="other"}}();var y=0;if(b){var J=!0;p=function(e,t,n){try{J&&(window.WebViewJavascriptBridge.init(),J=!1)}catch(a){}window.WebViewJavascriptBridge.callHandler(e,t,n)},h=function(){return new Promise((function(e,t){window.WebViewJavascriptBridge?e():document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(window.WebViewJavascriptBridge)}),!1)}))},g=function(e,t){return new Promise((function(n,a){h().then((function(){p(e,t,(function(e){console.log(y++),n(JSON.parse(e))}))}))}))}}else{p=function(e,t,n){!function(e){if(window.WebViewJavascriptBridge)return e(window.WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout((function(){document.documentElement.removeChild(t)}),0)}((function(a){a.callHandler(e,t,n)}))},g=function(e,t){return new Promise((function(n,a){p(e,t,(function(e){n(JSON.parse(e))}))}))}}var k=g,B=function(e){return i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){k("getData",{type:"userInfo"}).then((function(e){alert(JSON.stringify(e))}))}},"\u6d4b\u8bd5getData userInfo"),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){k("getData",{type:"device"}).then((function(e){alert(JSON.stringify(e))}))}},"\u6d4b\u8bd5getData device"))};!function(){window.FR_GLOBAL_REM_NORAML=!0;var e=document.documentElement,t="orientationchange"in window?"orientationchange":"resize",n=u(),a=function(){var t=e.clientWidth;t&&(e.style.fontSize=10*n*(t/375)+"px")};document.addEventListener&&(window.addEventListener(t,a,!1),document.addEventListener("DOMContentLoaded",a,!1))}();var W=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(c.a,null,i.a.createElement(s.a,{path:"/",component:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.bd43aeb4.chunk.js.map