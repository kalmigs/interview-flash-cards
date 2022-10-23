var Uh=Object.defineProperty;var Bh=(e,n,t)=>n in e?Uh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ll=(e,n,t)=>(Bh(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nn={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),Hh=Symbol.for("react.portal"),Vh=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),Yh=Symbol.for("react.provider"),Xh=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Kh=Symbol.for("react.memo"),Zh=Symbol.for("react.lazy"),Nl=Symbol.iterator;function ef(e){return e===null||typeof e!="object"?null:(e=Nl&&e[Nl]||e["@@iterator"],typeof e=="function"?e:null)}var Fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lc=Object.assign,Nc={};function tr(e,n,t){this.props=e,this.context=n,this.refs=Nc,this.updater=t||Fc}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zc(){}zc.prototype=tr.prototype;function Ts(e,n,t){this.props=e,this.context=n,this.refs=Nc,this.updater=t||Fc}var Es=Ts.prototype=new zc;Es.constructor=Ts;Lc(Es,tr.prototype);Es.isPureReactComponent=!0;var zl=Array.isArray,Wc=Object.prototype.hasOwnProperty,Ps={current:null},_c={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Wc.call(n,r)&&!_c.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Gr,type:e,key:i,ref:a,props:o,_owner:Ps.current}}function nf(e,n){return{$$typeof:Gr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Is(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function tf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Wl=/\/+/g;function qi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?tf(""+e.key):n.toString(36)}function Ro(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gr:case Hh:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+qi(a,0):r,zl(o)?(t="",e!=null&&(t=e.replace(Wl,"$&/")+"/"),Ro(o,n,t,"",function(u){return u})):o!=null&&(Is(o)&&(o=nf(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Wl,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",zl(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+qi(i,s);a+=Ro(i,n,t,l,o)}else if(l=ef(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+qi(i,s++),a+=Ro(i,n,t,l,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function oo(e,n,t){if(e==null)return e;var r=[],o=0;return Ro(e,r,"","",function(i){return n.call(t,i,o++)}),r}function rf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Co={transition:null},of={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Co,ReactCurrentOwner:Ps};H.Children={map:oo,forEach:function(e,n,t){oo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return oo(e,function(){n++}),n},toArray:function(e){return oo(e,function(n){return n})||[]},only:function(e){if(!Is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=tr;H.Fragment=Vh;H.Profiler=Jh;H.PureComponent=Ts;H.StrictMode=$h;H.Suspense=Gh;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=of;H.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lc({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Ps.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Wc.call(n,l)&&!_c.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Gr,type:e.type,key:o,ref:i,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:Xh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yh,_context:e},e.Consumer=e};H.createElement=qc;H.createFactory=function(e){var n=qc.bind(null,e);return n.type=e,n};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Qh,render:e}};H.isValidElement=Is;H.lazy=function(e){return{$$typeof:Zh,_payload:{_status:-1,_result:e},_init:rf}};H.memo=function(e,n){return{$$typeof:Kh,type:e,compare:n===void 0?null:n}};H.startTransition=function(e){var n=Co.transition;Co.transition={};try{e()}finally{Co.transition=n}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,n){return Ae.current.useCallback(e,n)};H.useContext=function(e){return Ae.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};H.useEffect=function(e,n){return Ae.current.useEffect(e,n)};H.useId=function(){return Ae.current.useId()};H.useImperativeHandle=function(e,n,t){return Ae.current.useImperativeHandle(e,n,t)};H.useInsertionEffect=function(e,n){return Ae.current.useInsertionEffect(e,n)};H.useLayoutEffect=function(e,n){return Ae.current.useLayoutEffect(e,n)};H.useMemo=function(e,n){return Ae.current.useMemo(e,n)};H.useReducer=function(e,n,t){return Ae.current.useReducer(e,n,t)};H.useRef=function(e){return Ae.current.useRef(e)};H.useState=function(e){return Ae.current.useState(e)};H.useSyncExternalStore=function(e,n,t){return Ae.current.useSyncExternalStore(e,n,t)};H.useTransition=function(){return Ae.current.useTransition()};H.version="18.2.0";(function(e){e.exports=H})(nn);const To=Oc(nn.exports);var ba={},Uc={exports:{}},Xe={},Bc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,F){var O=j.length;j.push(F);e:for(;0<O;){var y=O-1>>>1,g=j[y];if(0<o(g,F))j[y]=F,j[O]=g,O=y;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var F=j[0],O=j.pop();if(O!==F){j[0]=O;e:for(var y=0,g=j.length,pn=g>>>1;y<pn;){var Ue=2*(y+1)-1,vn=j[Ue],X=Ue+1,Ie=j[X];if(0>o(vn,O))X<g&&0>o(Ie,vn)?(j[y]=Ie,j[X]=O,y=X):(j[y]=vn,j[Ue]=O,y=Ue);else if(X<g&&0>o(Ie,O))j[y]=Ie,j[X]=O,y=X;else break e}}return F}function o(j,F){var O=j.sortIndex-F.sortIndex;return O!==0?O:j.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],p=1,d=null,f=3,w=!1,v=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var F=t(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=j)r(u),F.sortIndex=F.expirationTime,n(l,F);else break;F=t(u)}}function S(j){if(x=!1,m(j),!v)if(t(l)!==null)v=!0,Fe(C);else{var F=t(u);F!==null&&Pe(S,F.startTime-j)}}function C(j,F){v=!1,x&&(x=!1,c(I),I=-1),w=!0;var O=f;try{for(m(F),d=t(l);d!==null&&(!(d.expirationTime>F)||j&&!A());){var y=d.callback;if(typeof y=="function"){d.callback=null,f=d.priorityLevel;var g=y(d.expirationTime<=F);F=e.unstable_now(),typeof g=="function"?d.callback=g:d===t(l)&&r(l),m(F)}else r(l);d=t(l)}if(d!==null)var pn=!0;else{var Ue=t(u);Ue!==null&&Pe(S,Ue.startTime-F),pn=!1}return pn}finally{d=null,f=O,w=!1}}var k=!1,R=null,I=-1,N=5,z=-1;function A(){return!(e.unstable_now()-z<N)}function L(){if(R!==null){var j=e.unstable_now();z=j;var F=!0;try{F=R(!0,j)}finally{F?q():(k=!1,R=null)}}else k=!1}var q;if(typeof h=="function")q=function(){h(L)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Oe=de.port2;de.port1.onmessage=L,q=function(){Oe.postMessage(null)}}else q=function(){T(L,0)};function Fe(j){R=j,k||(k=!0,q())}function Pe(j,F){I=T(function(){j(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Fe(C))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(j){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var O=f;f=F;try{return j()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,F){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var O=f;f=j;try{return F()}finally{f=O}},e.unstable_scheduleCallback=function(j,F,O){var y=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?y+O:y):O=y,j){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=O+g,j={id:p++,callback:F,priorityLevel:j,startTime:O,expirationTime:g,sortIndex:-1},O>y?(j.sortIndex=O,n(u,j),t(l)===null&&j===t(u)&&(x?(c(I),I=-1):x=!0,Pe(S,O-y))):(j.sortIndex=g,n(l,j),v||w||(v=!0,Fe(C))),j},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(j){var F=f;return function(){var O=f;f=F;try{return j.apply(this,arguments)}finally{f=O}}}})(Hc);(function(e){e.exports=Hc})(Bc);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=nn.exports,Ye=Bc.exports;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $c=new Set,Or={};function kt(e,n){Xt(e,n),Xt(e+"Capture",n)}function Xt(e,n){for(Or[e]=n,e=0;e<n.length;e++)$c.add(n[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ra=Object.prototype.hasOwnProperty,af=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_l={},ql={};function sf(e){return Ra.call(ql,e)?!0:Ra.call(_l,e)?!1:af.test(e)?ql[e]=!0:(_l[e]=!0,!1)}function lf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uf(e,n,t,r){if(n===null||typeof n>"u"||lf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Me(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Se[n]=new Me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var js=/[\-:]([a-z])/g;function Ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(js,Ds);Se[n]=new Me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(js,Ds);Se[n]=new Me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(js,Ds);Se[n]=new Me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function As(e,n,t,r){var o=Se.hasOwnProperty(n)?Se[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(uf(n,t,o,r)&&(t=null),r||o===null?sf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var _n=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),Pt=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),Ca=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),Yc=Symbol.for("react.context"),Os=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Xc=Symbol.for("react.offscreen"),Ul=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=Ul&&e[Ul]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Ui;function wr(e){if(Ui===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ui=n&&n[1]||""}return`
`+Ui+e}var Bi=!1;function Hi(e,n){if(!e||Bi)return"";Bi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Bi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?wr(e):""}function cf(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function Pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case Pt:return"Portal";case Ca:return"Profiler";case Ms:return"StrictMode";case Ta:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yc:return(e.displayName||"Context")+".Consumer";case Jc:return(e._context.displayName||"Context")+".Provider";case Os:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return n=e.displayName||null,n!==null?n:Pa(e.type)||"Memo";case Un:n=e._payload,e=e._init;try{return Pa(e(n))}catch{}}return null}function pf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pa(n);case 8:return n===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function df(e){var n=Qc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ao(e){e._valueTracker||(e._valueTracker=df(e))}function Gc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Qc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ia(e,n){var t=n.checked;return ie({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function Bl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=tt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Kc(e,n){n=n.checked,n!=null&&As(e,"checked",n,!1)}function ja(e,n){Kc(e,n);var t=tt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Da(e,n.type,t):n.hasOwnProperty("defaultValue")&&Da(e,n.type,tt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Hl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Da(e,n,t){(n!=="number"||_o(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var vr=Array.isArray;function _t(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+tt(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Aa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return ie({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(vr(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:tt(t)}}function Zc(e,n){var t=tt(n.value),r=tt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function $l(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ep(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,np=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Fr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hf=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){hf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Sr[n]=Sr[e]})});function tp(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+n).trim():n+"px"}function rp(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=tp(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var ff=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(e,n){if(n){if(ff[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Fa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var La=null;function Ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Na=null,qt=null,Ut=null;function Jl(e){if(e=eo(e)){if(typeof Na!="function")throw Error(E(280));var n=e.stateNode;n&&(n=fi(n),Na(e.stateNode,e.type,n))}}function op(e){qt?Ut?Ut.push(e):Ut=[e]:qt=e}function ip(){if(qt){var e=qt,n=Ut;if(Ut=qt=null,Jl(e),n)for(e=0;e<n.length;e++)Jl(n[e])}}function ap(e,n){return e(n)}function sp(){}var Vi=!1;function lp(e,n,t){if(Vi)return e(n,t);Vi=!0;try{return ap(e,n,t)}finally{Vi=!1,(qt!==null||Ut!==null)&&(sp(),ip())}}function Lr(e,n){var t=e.stateNode;if(t===null)return null;var r=fi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var za=!1;if(Ln)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){za=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{za=!1}function mf(e,n,t,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var br=!1,qo=null,Uo=!1,Wa=null,yf={onError:function(e){br=!0,qo=e}};function gf(e,n,t,r,o,i,a,s,l){br=!1,qo=null,mf.apply(yf,arguments)}function wf(e,n,t,r,o,i,a,s,l){if(gf.apply(this,arguments),br){if(br){var u=qo;br=!1,qo=null}else throw Error(E(198));Uo||(Uo=!0,Wa=u)}}function St(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function up(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yl(e){if(St(e)!==e)throw Error(E(188))}function vf(e){var n=e.alternate;if(!n){if(n=St(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Yl(o),e;if(i===r)return Yl(o),n;i=i.sibling}throw Error(E(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===t){a=!0,t=o,r=i;break}if(s===r){a=!0,r=o,t=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===t){a=!0,t=i,r=o;break}if(s===r){a=!0,r=i,t=o;break}s=s.sibling}if(!a)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function cp(e){return e=vf(e),e!==null?pp(e):null}function pp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=pp(e);if(n!==null)return n;e=e.sibling}return null}var dp=Ye.unstable_scheduleCallback,Xl=Ye.unstable_cancelCallback,xf=Ye.unstable_shouldYield,kf=Ye.unstable_requestPaint,le=Ye.unstable_now,Sf=Ye.unstable_getCurrentPriorityLevel,Ns=Ye.unstable_ImmediatePriority,hp=Ye.unstable_UserBlockingPriority,Bo=Ye.unstable_NormalPriority,bf=Ye.unstable_LowPriority,fp=Ye.unstable_IdlePriority,ci=null,Cn=null;function Rf(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Ef,Cf=Math.log,Tf=Math.LN2;function Ef(e){return e>>>=0,e===0?32:31-(Cf(e)/Tf|0)|0}var lo=64,uo=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~o;s!==0?r=xr(s):(i&=a,i!==0&&(r=xr(i)))}else a=t&~o,a!==0?r=xr(a):i!==0&&(r=xr(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&o)===0&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-yn(n),o=1<<t,r|=e[t],n&=~o;return r}function Pf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function If(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-yn(i),s=1<<a,l=o[a];l===-1?((s&t)===0||(s&r)!==0)&&(o[a]=Pf(s,n)):l<=n&&(e.expiredLanes|=s),i&=~s}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mp(){var e=lo;return lo<<=1,(lo&4194240)===0&&(lo=64),e}function $i(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=t}function jf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-yn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function zs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-yn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var $=0;function yp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gp,Ws,wp,vp,xp,qa=!1,co=[],Yn=null,Xn=null,Qn=null,Nr=new Map,zr=new Map,Hn=[],Df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(e,n){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Nr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(n.pointerId)}}function pr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=eo(n),n!==null&&Ws(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Af(e,n,t,r,o){switch(n){case"focusin":return Yn=pr(Yn,e,n,t,r,o),!0;case"dragenter":return Xn=pr(Xn,e,n,t,r,o),!0;case"mouseover":return Qn=pr(Qn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Nr.set(i,pr(Nr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zr.set(i,pr(zr.get(i)||null,e,n,t,r,o)),!0}return!1}function kp(e){var n=pt(e.target);if(n!==null){var t=St(n);if(t!==null){if(n=t.tag,n===13){if(n=up(t),n!==null){e.blockedOn=n,xp(e.priority,function(){wp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ua(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);La=r,t.target.dispatchEvent(r),La=null}else return n=eo(t),n!==null&&Ws(n),e.blockedOn=t,!1;n.shift()}return!0}function Gl(e,n,t){Eo(e)&&t.delete(n)}function Mf(){qa=!1,Yn!==null&&Eo(Yn)&&(Yn=null),Xn!==null&&Eo(Xn)&&(Xn=null),Qn!==null&&Eo(Qn)&&(Qn=null),Nr.forEach(Gl),zr.forEach(Gl)}function dr(e,n){e.blockedOn===n&&(e.blockedOn=null,qa||(qa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Mf)))}function Wr(e){function n(o){return dr(o,e)}if(0<co.length){dr(co[0],e);for(var t=1;t<co.length;t++){var r=co[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Yn!==null&&dr(Yn,e),Xn!==null&&dr(Xn,e),Qn!==null&&dr(Qn,e),Nr.forEach(n),zr.forEach(n),t=0;t<Hn.length;t++)r=Hn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(t=Hn[0],t.blockedOn===null);)kp(t),t.blockedOn===null&&Hn.shift()}var Bt=_n.ReactCurrentBatchConfig,Vo=!0;function Of(e,n,t,r){var o=$,i=Bt.transition;Bt.transition=null;try{$=1,_s(e,n,t,r)}finally{$=o,Bt.transition=i}}function Ff(e,n,t,r){var o=$,i=Bt.transition;Bt.transition=null;try{$=4,_s(e,n,t,r)}finally{$=o,Bt.transition=i}}function _s(e,n,t,r){if(Vo){var o=Ua(e,n,t,r);if(o===null)ta(e,n,r,$o,t),Ql(e,r);else if(Af(o,e,n,t,r))r.stopPropagation();else if(Ql(e,r),n&4&&-1<Df.indexOf(e)){for(;o!==null;){var i=eo(o);if(i!==null&&gp(i),i=Ua(e,n,t,r),i===null&&ta(e,n,r,$o,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else ta(e,n,r,null,t)}}var $o=null;function Ua(e,n,t,r){if($o=null,e=Ls(r),e=pt(e),e!==null)if(n=St(e),n===null)e=null;else if(t=n.tag,t===13){if(e=up(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $o=e,null}function Sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sf()){case Ns:return 1;case hp:return 4;case Bo:case bf:return 16;case fp:return 536870912;default:return 16}default:return 16}}var $n=null,qs=null,Po=null;function bp(){if(Po)return Po;var e,n=qs,t=n.length,r,o="value"in $n?$n.value:$n.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return Po=o.slice(e,1<r?1-r:void 0)}function Io(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Kl(){return!1}function Qe(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?po:Kl,this.isPropagationStopped=Kl,this}return ie(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=Qe(rr),Zr=ie({},rr,{view:0,detail:0}),Lf=Qe(Zr),Ji,Yi,hr,pi=ie({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Ji=e.screenX-hr.screenX,Yi=e.screenY-hr.screenY):Yi=Ji=0,hr=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),Zl=Qe(pi),Nf=ie({},pi,{dataTransfer:0}),zf=Qe(Nf),Wf=ie({},Zr,{relatedTarget:0}),Xi=Qe(Wf),_f=ie({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=Qe(_f),Uf=ie({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=Qe(Uf),Hf=ie({},rr,{data:0}),eu=Qe(Hf),Vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jf[e])?!!n[e]:!1}function Bs(){return Yf}var Xf=ie({},Zr,{key:function(e){if(e.key){var n=Vf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qf=Qe(Xf),Gf=ie({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=Qe(Gf),Kf=ie({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),Zf=Qe(Kf),em=ie({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nm=Qe(em),tm=ie({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rm=Qe(tm),om=[9,13,27,32],Hs=Ln&&"CompositionEvent"in window,Rr=null;Ln&&"documentMode"in document&&(Rr=document.documentMode);var im=Ln&&"TextEvent"in window&&!Rr,Rp=Ln&&(!Hs||Rr&&8<Rr&&11>=Rr),tu=String.fromCharCode(32),ru=!1;function Cp(e,n){switch(e){case"keyup":return om.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jt=!1;function am(e,n){switch(e){case"compositionend":return Tp(n);case"keypress":return n.which!==32?null:(ru=!0,tu);case"textInput":return e=n.data,e===tu&&ru?null:e;default:return null}}function sm(e,n){if(jt)return e==="compositionend"||!Hs&&Cp(e,n)?(e=bp(),Po=qs=$n=null,jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!lm[e.type]:n==="textarea"}function Ep(e,n,t,r){op(r),n=Jo(n,"onChange"),0<n.length&&(t=new Us("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Cr=null,_r=null;function um(e){zp(e,0)}function di(e){var n=Mt(e);if(Gc(n))return e}function cm(e,n){if(e==="change")return n}var Pp=!1;if(Ln){var Qi;if(Ln){var Gi="oninput"in document;if(!Gi){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Gi=typeof iu.oninput=="function"}Qi=Gi}else Qi=!1;Pp=Qi&&(!document.documentMode||9<document.documentMode)}function au(){Cr&&(Cr.detachEvent("onpropertychange",Ip),_r=Cr=null)}function Ip(e){if(e.propertyName==="value"&&di(_r)){var n=[];Ep(n,_r,e,Ls(e)),lp(um,n)}}function pm(e,n,t){e==="focusin"?(au(),Cr=n,_r=t,Cr.attachEvent("onpropertychange",Ip)):e==="focusout"&&au()}function dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(_r)}function hm(e,n){if(e==="click")return di(n)}function fm(e,n){if(e==="input"||e==="change")return di(n)}function mm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:mm;function qr(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Ra.call(n,o)||!wn(e[o],n[o]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lu(e,n){var t=su(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=su(t)}}function jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Dp(){for(var e=window,n=_o();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=_o(e.document)}return n}function Vs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ym(e){var n=Dp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&jp(t.ownerDocument.documentElement,t)){if(r!==null&&Vs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=lu(t,i);var a=lu(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gm=Ln&&"documentMode"in document&&11>=document.documentMode,Dt=null,Ba=null,Tr=null,Ha=!1;function uu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ha||Dt==null||Dt!==_o(r)||(r=Dt,"selectionStart"in r&&Vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&qr(Tr,r)||(Tr=r,r=Jo(Ba,"onSelect"),0<r.length&&(n=new Us("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Dt)))}function ho(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var At={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Ki={},Ap={};Ln&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function hi(e){if(Ki[e])return Ki[e];if(!At[e])return e;var n=At[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ap)return Ki[e]=n[t];return e}var Mp=hi("animationend"),Op=hi("animationiteration"),Fp=hi("animationstart"),Lp=hi("transitionend"),Np=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ot(e,n){Np.set(e,n),kt(n,[e])}for(var Zi=0;Zi<cu.length;Zi++){var ea=cu[Zi],wm=ea.toLowerCase(),vm=ea[0].toUpperCase()+ea.slice(1);ot(wm,"on"+vm)}ot(Mp,"onAnimationEnd");ot(Op,"onAnimationIteration");ot(Fp,"onAnimationStart");ot("dblclick","onDoubleClick");ot("focusin","onFocus");ot("focusout","onBlur");ot(Lp,"onTransitionEnd");Xt("onMouseEnter",["mouseout","mouseover"]);Xt("onMouseLeave",["mouseout","mouseover"]);Xt("onPointerEnter",["pointerout","pointerover"]);Xt("onPointerLeave",["pointerout","pointerover"]);kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xm=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function pu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,wf(r,n,void 0,e),e.currentTarget=null}function zp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;pu(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;pu(o,s,u),i=l}}}if(Uo)throw e=Wa,Uo=!1,Wa=null,e}function Z(e,n){var t=n[Xa];t===void 0&&(t=n[Xa]=new Set);var r=e+"__bubble";t.has(r)||(Wp(n,e,2,!1),t.add(r))}function na(e,n,t){var r=0;n&&(r|=4),Wp(t,e,r,n)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[fo]){e[fo]=!0,$c.forEach(function(t){t!=="selectionchange"&&(xm.has(t)||na(t,!1,e),na(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fo]||(n[fo]=!0,na("selectionchange",!1,n))}}function Wp(e,n,t,r){switch(Sp(n)){case 1:var o=Of;break;case 4:o=Ff;break;default:o=_s}t=o.bind(null,n,t,e),o=void 0,!za||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ta(e,n,t,r,o){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=pt(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}lp(function(){var u=i,p=Ls(t),d=[];e:{var f=Np.get(e);if(f!==void 0){var w=Us,v=e;switch(e){case"keypress":if(Io(t)===0)break e;case"keydown":case"keyup":w=Qf;break;case"focusin":v="focus",w=Xi;break;case"focusout":v="blur",w=Xi;break;case"beforeblur":case"afterblur":w=Xi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Zl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Zf;break;case Mp:case Op:case Fp:w=qf;break;case Lp:w=nm;break;case"scroll":w=Lf;break;case"wheel":w=rm;break;case"copy":case"cut":case"paste":w=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=nu}var x=(n&4)!==0,T=!x&&e==="scroll",c=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,m;h!==null;){m=h;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,c!==null&&(S=Lr(h,c),S!=null&&x.push(Br(h,S,m)))),T)break;h=h.return}0<x.length&&(f=new w(f,v,null,t,p),d.push({event:f,listeners:x}))}}if((n&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&t!==La&&(v=t.relatedTarget||t.fromElement)&&(pt(v)||v[Nn]))break e;if((w||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,w?(v=t.relatedTarget||t.toElement,w=u,v=v?pt(v):null,v!==null&&(T=St(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(x=Zl,S="onMouseLeave",c="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=nu,S="onPointerLeave",c="onPointerEnter",h="pointer"),T=w==null?f:Mt(w),m=v==null?f:Mt(v),f=new x(S,h+"leave",w,t,p),f.target=T,f.relatedTarget=m,S=null,pt(p)===u&&(x=new x(c,h+"enter",v,t,p),x.target=m,x.relatedTarget=T,S=x),T=S,w&&v)n:{for(x=w,c=v,h=0,m=x;m;m=Et(m))h++;for(m=0,S=c;S;S=Et(S))m++;for(;0<h-m;)x=Et(x),h--;for(;0<m-h;)c=Et(c),m--;for(;h--;){if(x===c||c!==null&&x===c.alternate)break n;x=Et(x),c=Et(c)}x=null}else x=null;w!==null&&du(d,f,w,x,!1),v!==null&&T!==null&&du(d,T,v,x,!0)}}e:{if(f=u?Mt(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var C=cm;else if(ou(f))if(Pp)C=fm;else{C=dm;var k=pm}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=hm);if(C&&(C=C(e,u))){Ep(d,C,t,p);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Da(f,"number",f.value)}switch(k=u?Mt(u):window,e){case"focusin":(ou(k)||k.contentEditable==="true")&&(Dt=k,Ba=u,Tr=null);break;case"focusout":Tr=Ba=Dt=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,uu(d,t,p);break;case"selectionchange":if(gm)break;case"keydown":case"keyup":uu(d,t,p)}var R;if(Hs)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else jt?Cp(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Rp&&t.locale!=="ko"&&(jt||I!=="onCompositionStart"?I==="onCompositionEnd"&&jt&&(R=bp()):($n=p,qs="value"in $n?$n.value:$n.textContent,jt=!0)),k=Jo(u,I),0<k.length&&(I=new eu(I,e,null,t,p),d.push({event:I,listeners:k}),R?I.data=R:(R=Tp(t),R!==null&&(I.data=R)))),(R=im?am(e,t):sm(e,t))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(p=new eu("onBeforeInput","beforeinput",null,t,p),d.push({event:p,listeners:u}),p.data=R))}zp(d,n)})}function Br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Jo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Lr(e,t),i!=null&&r.unshift(Br(e,i,o)),i=Lr(e,n),i!=null&&r.push(Br(e,i,o))),e=e.return}return r}function Et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Lr(t,i),l!=null&&a.unshift(Br(t,l,s))):o||(l=Lr(t,i),l!=null&&a.push(Br(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var km=/\r\n?/g,Sm=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(Sm,"")}function mo(e,n,t){if(n=hu(n),hu(e)!==n&&t)throw Error(E(425))}function Yo(){}var Va=null,$a=null;function Ja(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,bm=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(Cm)}:Ya;function Cm(e){setTimeout(function(){throw e})}function ra(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Wr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Wr(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),bn="__reactFiber$"+or,Hr="__reactProps$"+or,Nn="__reactContainer$"+or,Xa="__reactEvents$"+or,Tm="__reactListeners$"+or,Em="__reactHandles$"+or;function pt(e){var n=e[bn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Nn]||t[bn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=mu(e);e!==null;){if(t=e[bn])return t;e=mu(e)}return n}e=t,t=e.parentNode}return null}function eo(e){return e=e[bn]||e[Nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function fi(e){return e[Hr]||null}var Qa=[],Ot=-1;function it(e){return{current:e}}function ne(e){0>Ot||(e.current=Qa[Ot],Qa[Ot]=null,Ot--)}function G(e,n){Ot++,Qa[Ot]=e.current,e.current=n}var rt={},Te=it(rt),We=it(!1),yt=rt;function Qt(e,n){var t=e.type.contextTypes;if(!t)return rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function Xo(){ne(We),ne(Te)}function yu(e,n,t){if(Te.current!==rt)throw Error(E(168));G(Te,n),G(We,t)}function _p(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(E(108,pf(e)||"Unknown",o));return ie({},t,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rt,yt=Te.current,G(Te,e),G(We,We.current),!0}function gu(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=_p(e,n,yt),r.__reactInternalMemoizedMergedChildContext=e,ne(We),ne(Te),G(Te,e)):ne(We),G(We,t)}var Dn=null,mi=!1,oa=!1;function qp(e){Dn===null?Dn=[e]:Dn.push(e)}function Pm(e){mi=!0,qp(e)}function at(){if(!oa&&Dn!==null){oa=!0;var e=0,n=$;try{var t=Dn;for($=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Dn=null,mi=!1}catch(o){throw Dn!==null&&(Dn=Dn.slice(e+1)),dp(Ns,at),o}finally{$=n,oa=!1}}return null}var Ft=[],Lt=0,Go=null,Ko=0,Ke=[],Ze=0,gt=null,An=1,Mn="";function lt(e,n){Ft[Lt++]=Ko,Ft[Lt++]=Go,Go=e,Ko=n}function Up(e,n,t){Ke[Ze++]=An,Ke[Ze++]=Mn,Ke[Ze++]=gt,gt=e;var r=An;e=Mn;var o=32-yn(r)-1;r&=~(1<<o),t+=1;var i=32-yn(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,An=1<<32-yn(n)+o|t<<o|r,Mn=i+e}else An=1<<i|t<<o|r,Mn=e}function $s(e){e.return!==null&&(lt(e,1),Up(e,1,0))}function Js(e){for(;e===Go;)Go=Ft[--Lt],Ft[Lt]=null,Ko=Ft[--Lt],Ft[Lt]=null;for(;e===gt;)gt=Ke[--Ze],Ke[Ze]=null,Mn=Ke[--Ze],Ke[Ze]=null,An=Ke[--Ze],Ke[Ze]=null}var Je=null,Ve=null,te=!1,mn=null;function Bp(e,n){var t=tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function wu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Je=e,Ve=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Je=e,Ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=gt!==null?{id:An,overflow:Mn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Je=e,Ve=null,!0):!1;default:return!1}}function Ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ka(e){if(te){var n=Ve;if(n){var t=n;if(!wu(e,n)){if(Ga(e))throw Error(E(418));n=Gn(t.nextSibling);var r=Je;n&&wu(e,n)?Bp(r,t):(e.flags=e.flags&-4097|2,te=!1,Je=e)}}else{if(Ga(e))throw Error(E(418));e.flags=e.flags&-4097|2,te=!1,Je=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function yo(e){if(e!==Je)return!1;if(!te)return vu(e),te=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ja(e.type,e.memoizedProps)),n&&(n=Ve)){if(Ga(e))throw Hp(),Error(E(418));for(;n;)Bp(e,n),n=Gn(n.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ve=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ve=null}}else Ve=Je?Gn(e.stateNode.nextSibling):null;return!0}function Hp(){for(var e=Ve;e;)e=Gn(e.nextSibling)}function Gt(){Ve=Je=null,te=!1}function Ys(e){mn===null?mn=[e]:mn.push(e)}var Im=_n.ReactCurrentBatchConfig;function hn(e,n){if(e&&e.defaultProps){n=ie({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Zo=it(null),ei=null,Nt=null,Xs=null;function Qs(){Xs=Nt=ei=null}function Gs(e){var n=Zo.current;ne(Zo),e._currentValue=n}function Za(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ht(e,n){ei=e,Xs=Nt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ze=!0),e.firstContext=null)}function an(e){var n=e._currentValue;if(Xs!==e)if(e={context:e,memoizedValue:n,next:null},Nt===null){if(ei===null)throw Error(E(308));Nt=e,ei.dependencies={lanes:0,firstContext:e}}else Nt=Nt.next=e;return n}var dt=null;function Ks(e){dt===null?dt=[e]:dt.push(e)}function Vp(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Ks(n)):(t.next=o.next,o.next=t),n.interleaved=t,zn(e,r)}function zn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Bn=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $p(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,zn(e,t)}return o=r.interleaved,o===null?(n.next=n,Ks(r)):(n.next=o.next,o.next=n),r.interleaved=n,zn(e,t)}function jo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zs(e,t)}}function xu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ni(e,n,t,r){var o=e.updateQueue;Bn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==a&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;a=0,p=u=l=null,s=i;do{var f=s.lane,w=s.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(f=n,w=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(w,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(w,d,f):v,f==null)break e;d=ie({},d,f);break e;case 2:Bn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else w={eventTime:w,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=w,l=d):p=p.next=w,a|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(p===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);vt|=a,e.lanes=a,e.memoizedState=d}}function ku(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Jp=new Vc.Component().refs;function es(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ie({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var yi={isMounted:function(e){return(e=e._reactInternals)?St(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=De(),o=et(e),i=Fn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Kn(e,i,o),n!==null&&(gn(n,e,o,r),jo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=De(),o=et(e),i=Fn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Kn(e,i,o),n!==null&&(gn(n,e,o,r),jo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=De(),r=et(e),o=Fn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Kn(e,o,r),n!==null&&(gn(n,e,r,t),jo(n,e,r))}};function Su(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!qr(t,r)||!qr(o,i):!0}function Yp(e,n,t){var r=!1,o=rt,i=n.contextType;return typeof i=="object"&&i!==null?i=an(i):(o=_e(n)?yt:Te.current,r=n.contextTypes,i=(r=r!=null)?Qt(e,o):rt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function bu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&yi.enqueueReplaceState(n,n.state,null)}function ns(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=Jp,Zs(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=an(i):(i=_e(n)?yt:Te.current,o.context=Qt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(es(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&yi.enqueueReplaceState(o,o.state,null),ni(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var s=o.refs;s===Jp&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function go(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ru(e){var n=e._init;return n(e._payload)}function Xp(e){function n(c,h){if(e){var m=c.deletions;m===null?(c.deletions=[h],c.flags|=16):m.push(h)}}function t(c,h){if(!e)return null;for(;h!==null;)n(c,h),h=h.sibling;return null}function r(c,h){for(c=new Map;h!==null;)h.key!==null?c.set(h.key,h):c.set(h.index,h),h=h.sibling;return c}function o(c,h){return c=nt(c,h),c.index=0,c.sibling=null,c}function i(c,h,m){return c.index=m,e?(m=c.alternate,m!==null?(m=m.index,m<h?(c.flags|=2,h):m):(c.flags|=2,h)):(c.flags|=1048576,h)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function s(c,h,m,S){return h===null||h.tag!==6?(h=pa(m,c.mode,S),h.return=c,h):(h=o(h,m),h.return=c,h)}function l(c,h,m,S){var C=m.type;return C===It?p(c,h,m.props.children,S,m.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Un&&Ru(C)===h.type)?(S=o(h,m.props),S.ref=fr(c,h,m),S.return=c,S):(S=Lo(m.type,m.key,m.props,null,c.mode,S),S.ref=fr(c,h,m),S.return=c,S)}function u(c,h,m,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=da(m,c.mode,S),h.return=c,h):(h=o(h,m.children||[]),h.return=c,h)}function p(c,h,m,S,C){return h===null||h.tag!==7?(h=mt(m,c.mode,S,C),h.return=c,h):(h=o(h,m),h.return=c,h)}function d(c,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pa(""+h,c.mode,m),h.return=c,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case io:return m=Lo(h.type,h.key,h.props,null,c.mode,m),m.ref=fr(c,null,h),m.return=c,m;case Pt:return h=da(h,c.mode,m),h.return=c,h;case Un:var S=h._init;return d(c,S(h._payload),m)}if(vr(h)||ur(h))return h=mt(h,c.mode,m,null),h.return=c,h;go(c,h)}return null}function f(c,h,m,S){var C=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:s(c,h,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case io:return m.key===C?l(c,h,m,S):null;case Pt:return m.key===C?u(c,h,m,S):null;case Un:return C=m._init,f(c,h,C(m._payload),S)}if(vr(m)||ur(m))return C!==null?null:p(c,h,m,S,null);go(c,m)}return null}function w(c,h,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(m)||null,s(h,c,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case io:return c=c.get(S.key===null?m:S.key)||null,l(h,c,S,C);case Pt:return c=c.get(S.key===null?m:S.key)||null,u(h,c,S,C);case Un:var k=S._init;return w(c,h,m,k(S._payload),C)}if(vr(S)||ur(S))return c=c.get(m)||null,p(h,c,S,C,null);go(h,S)}return null}function v(c,h,m,S){for(var C=null,k=null,R=h,I=h=0,N=null;R!==null&&I<m.length;I++){R.index>I?(N=R,R=null):N=R.sibling;var z=f(c,R,m[I],S);if(z===null){R===null&&(R=N);break}e&&R&&z.alternate===null&&n(c,R),h=i(z,h,I),k===null?C=z:k.sibling=z,k=z,R=N}if(I===m.length)return t(c,R),te&&lt(c,I),C;if(R===null){for(;I<m.length;I++)R=d(c,m[I],S),R!==null&&(h=i(R,h,I),k===null?C=R:k.sibling=R,k=R);return te&&lt(c,I),C}for(R=r(c,R);I<m.length;I++)N=w(R,c,I,m[I],S),N!==null&&(e&&N.alternate!==null&&R.delete(N.key===null?I:N.key),h=i(N,h,I),k===null?C=N:k.sibling=N,k=N);return e&&R.forEach(function(A){return n(c,A)}),te&&lt(c,I),C}function x(c,h,m,S){var C=ur(m);if(typeof C!="function")throw Error(E(150));if(m=C.call(m),m==null)throw Error(E(151));for(var k=C=null,R=h,I=h=0,N=null,z=m.next();R!==null&&!z.done;I++,z=m.next()){R.index>I?(N=R,R=null):N=R.sibling;var A=f(c,R,z.value,S);if(A===null){R===null&&(R=N);break}e&&R&&A.alternate===null&&n(c,R),h=i(A,h,I),k===null?C=A:k.sibling=A,k=A,R=N}if(z.done)return t(c,R),te&&lt(c,I),C;if(R===null){for(;!z.done;I++,z=m.next())z=d(c,z.value,S),z!==null&&(h=i(z,h,I),k===null?C=z:k.sibling=z,k=z);return te&&lt(c,I),C}for(R=r(c,R);!z.done;I++,z=m.next())z=w(R,c,I,z.value,S),z!==null&&(e&&z.alternate!==null&&R.delete(z.key===null?I:z.key),h=i(z,h,I),k===null?C=z:k.sibling=z,k=z);return e&&R.forEach(function(L){return n(c,L)}),te&&lt(c,I),C}function T(c,h,m,S){if(typeof m=="object"&&m!==null&&m.type===It&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case io:e:{for(var C=m.key,k=h;k!==null;){if(k.key===C){if(C=m.type,C===It){if(k.tag===7){t(c,k.sibling),h=o(k,m.props.children),h.return=c,c=h;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Un&&Ru(C)===k.type){t(c,k.sibling),h=o(k,m.props),h.ref=fr(c,k,m),h.return=c,c=h;break e}t(c,k);break}else n(c,k);k=k.sibling}m.type===It?(h=mt(m.props.children,c.mode,S,m.key),h.return=c,c=h):(S=Lo(m.type,m.key,m.props,null,c.mode,S),S.ref=fr(c,h,m),S.return=c,c=S)}return a(c);case Pt:e:{for(k=m.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){t(c,h.sibling),h=o(h,m.children||[]),h.return=c,c=h;break e}else{t(c,h);break}else n(c,h);h=h.sibling}h=da(m,c.mode,S),h.return=c,c=h}return a(c);case Un:return k=m._init,T(c,h,k(m._payload),S)}if(vr(m))return v(c,h,m,S);if(ur(m))return x(c,h,m,S);go(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(t(c,h.sibling),h=o(h,m),h.return=c,c=h):(t(c,h),h=pa(m,c.mode,S),h.return=c,c=h),a(c)):t(c,h)}return T}var Kt=Xp(!0),Qp=Xp(!1),no={},Tn=it(no),Vr=it(no),$r=it(no);function ht(e){if(e===no)throw Error(E(174));return e}function el(e,n){switch(G($r,n),G(Vr,e),G(Tn,no),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ma(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ma(n,e)}ne(Tn),G(Tn,n)}function Zt(){ne(Tn),ne(Vr),ne($r)}function Gp(e){ht($r.current);var n=ht(Tn.current),t=Ma(n,e.type);n!==t&&(G(Vr,e),G(Tn,t))}function nl(e){Vr.current===e&&(ne(Tn),ne(Vr))}var re=it(0);function ti(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=[];function tl(){for(var e=0;e<ia.length;e++)ia[e]._workInProgressVersionPrimary=null;ia.length=0}var Do=_n.ReactCurrentDispatcher,aa=_n.ReactCurrentBatchConfig,wt=0,oe=null,he=null,ye=null,ri=!1,Er=!1,Jr=0,jm=0;function be(){throw Error(E(321))}function rl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function ol(e,n,t,r,o,i){if(wt=i,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Do.current=e===null||e.memoizedState===null?Om:Fm,e=t(r,o),Er){i=0;do{if(Er=!1,Jr=0,25<=i)throw Error(E(301));i+=1,ye=he=null,n.updateQueue=null,Do.current=Lm,e=t(r,o)}while(Er)}if(Do.current=oi,n=he!==null&&he.next!==null,wt=0,ye=he=oe=null,ri=!1,n)throw Error(E(300));return e}function il(){var e=Jr!==0;return Jr=0,e}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?oe.memoizedState=ye=e:ye=ye.next=e,ye}function sn(){if(he===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var n=ye===null?oe.memoizedState:ye.next;if(n!==null)ye=n,he=e;else{if(e===null)throw Error(E(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ye===null?oe.memoizedState=ye=e:ye=ye.next=e}return ye}function Yr(e,n){return typeof n=="function"?n(e):n}function sa(e){var n=sn(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var p=u.lane;if((wt&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,oe.lanes|=p,vt|=p}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,wn(r,n.memoizedState)||(ze=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,vt|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function la(e){var n=sn(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);wn(i,n.memoizedState)||(ze=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Kp(){}function Zp(e,n){var t=oe,r=sn(),o=n(),i=!wn(r.memoizedState,o);if(i&&(r.memoizedState=o,ze=!0),r=r.queue,al(td.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ye!==null&&ye.memoizedState.tag&1){if(t.flags|=2048,Xr(9,nd.bind(null,t,r,o,n),void 0,null),we===null)throw Error(E(349));(wt&30)!==0||ed(t,n,o)}return o}function ed(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=oe.updateQueue,n===null?(n={lastEffect:null,stores:null},oe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function nd(e,n,t,r){n.value=t,n.getSnapshot=r,rd(n)&&od(e)}function td(e,n,t){return t(function(){rd(n)&&od(e)})}function rd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function od(e){var n=zn(e,1);n!==null&&gn(n,e,1,-1)}function Cu(e){var n=kn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},n.queue=e,e=e.dispatch=Mm.bind(null,oe,e),[n.memoizedState,e]}function Xr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=oe.updateQueue,n===null?(n={lastEffect:null,stores:null},oe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function id(){return sn().memoizedState}function Ao(e,n,t,r){var o=kn();oe.flags|=e,o.memoizedState=Xr(1|n,t,void 0,r===void 0?null:r)}function gi(e,n,t,r){var o=sn();r=r===void 0?null:r;var i=void 0;if(he!==null){var a=he.memoizedState;if(i=a.destroy,r!==null&&rl(r,a.deps)){o.memoizedState=Xr(n,t,i,r);return}}oe.flags|=e,o.memoizedState=Xr(1|n,t,i,r)}function Tu(e,n){return Ao(8390656,8,e,n)}function al(e,n){return gi(2048,8,e,n)}function ad(e,n){return gi(4,2,e,n)}function sd(e,n){return gi(4,4,e,n)}function ld(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ud(e,n,t){return t=t!=null?t.concat([e]):null,gi(4,4,ld.bind(null,n,e),t)}function sl(){}function cd(e,n){var t=sn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&rl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function pd(e,n){var t=sn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&rl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function dd(e,n,t){return(wt&21)===0?(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=t):(wn(t,n)||(t=mp(),oe.lanes|=t,vt|=t,e.baseState=!0),n)}function Dm(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var r=aa.transition;aa.transition={};try{e(!1),n()}finally{$=t,aa.transition=r}}function hd(){return sn().memoizedState}function Am(e,n,t){var r=et(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},fd(e))md(n,t);else if(t=Vp(e,n,t,r),t!==null){var o=De();gn(t,e,r,o),yd(t,n,r)}}function Mm(e,n,t){var r=et(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(fd(e))md(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,s=i(a,t);if(o.hasEagerState=!0,o.eagerState=s,wn(s,a)){var l=n.interleaved;l===null?(o.next=o,Ks(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}t=Vp(e,n,o,r),t!==null&&(o=De(),gn(t,e,r,o),yd(t,n,r))}}function fd(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function md(e,n){Er=ri=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function yd(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zs(e,t)}}var oi={readContext:an,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Om={readContext:an,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:an,useEffect:Tu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ao(4194308,4,ld.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ao(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ao(4,2,e,n)},useMemo:function(e,n){var t=kn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=kn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Am.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:Cu,useDebugValue:sl,useDeferredValue:function(e){return kn().memoizedState=e},useTransition:function(){var e=Cu(!1),n=e[0];return e=Dm.bind(null,e[1]),kn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=oe,o=kn();if(te){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),we===null)throw Error(E(349));(wt&30)!==0||ed(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Tu(td.bind(null,r,i,e),[e]),r.flags|=2048,Xr(9,nd.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=kn(),n=we.identifierPrefix;if(te){var t=Mn,r=An;t=(r&~(1<<32-yn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=jm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Fm={readContext:an,useCallback:cd,useContext:an,useEffect:al,useImperativeHandle:ud,useInsertionEffect:ad,useLayoutEffect:sd,useMemo:pd,useReducer:sa,useRef:id,useState:function(){return sa(Yr)},useDebugValue:sl,useDeferredValue:function(e){var n=sn();return dd(n,he.memoizedState,e)},useTransition:function(){var e=sa(Yr)[0],n=sn().memoizedState;return[e,n]},useMutableSource:Kp,useSyncExternalStore:Zp,useId:hd,unstable_isNewReconciler:!1},Lm={readContext:an,useCallback:cd,useContext:an,useEffect:al,useImperativeHandle:ud,useInsertionEffect:ad,useLayoutEffect:sd,useMemo:pd,useReducer:la,useRef:id,useState:function(){return la(Yr)},useDebugValue:sl,useDeferredValue:function(e){var n=sn();return he===null?n.memoizedState=e:dd(n,he.memoizedState,e)},useTransition:function(){var e=la(Yr)[0],n=sn().memoizedState;return[e,n]},useMutableSource:Kp,useSyncExternalStore:Zp,useId:hd,unstable_isNewReconciler:!1};function er(e,n){try{var t="",r=n;do t+=cf(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function ua(e,n,t){return{value:e,source:null,stack:t!=null?t:null,digest:n!=null?n:null}}function ts(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Nm=typeof WeakMap=="function"?WeakMap:Map;function gd(e,n,t){t=Fn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ai||(ai=!0,ds=r),ts(e,n)},t}function wd(e,n,t){t=Fn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){ts(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ts(e,n),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Eu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Nm;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Gm.bind(null,e,n,t),n.then(e,e))}function Pu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Iu(e,n,t,r,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Fn(-1,1),n.tag=2,Kn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var zm=_n.ReactCurrentOwner,ze=!1;function je(e,n,t,r){n.child=e===null?Qp(n,null,t,r):Kt(n,e.child,t,r)}function ju(e,n,t,r,o){t=t.render;var i=n.ref;return Ht(n,o),r=ol(e,n,t,r,i,o),t=il(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Wn(e,n,o)):(te&&t&&$s(n),n.flags|=1,je(e,n,r,o),n.child)}function Du(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!ml(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,vd(e,n,i,r,o)):(e=Lo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:qr,t(a,r)&&e.ref===n.ref)return Wn(e,n,o)}return n.flags|=1,e=nt(i,r),e.ref=n.ref,e.return=n,n.child=e}function vd(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(qr(i,r)&&e.ref===n.ref)if(ze=!1,n.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ze=!0);else return n.lanes=e.lanes,Wn(e,n,o)}return rs(e,n,t,r,o)}function xd(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Wt,He),He|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,G(Wt,He),He|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,G(Wt,He),He|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,G(Wt,He),He|=r;return je(e,n,o,t),n.child}function kd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function rs(e,n,t,r,o){var i=_e(t)?yt:Te.current;return i=Qt(n,i),Ht(n,o),t=ol(e,n,t,r,i,o),r=il(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Wn(e,n,o)):(te&&r&&$s(n),n.flags|=1,je(e,n,t,o),n.child)}function Au(e,n,t,r,o){if(_e(t)){var i=!0;Qo(n)}else i=!1;if(Ht(n,o),n.stateNode===null)Mo(e,n),Yp(n,t,r),ns(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=an(u):(u=_e(t)?yt:Te.current,u=Qt(n,u));var p=t.getDerivedStateFromProps,d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&bu(n,a,r,u),Bn=!1;var f=n.memoizedState;a.state=f,ni(n,r,a,o),l=n.memoizedState,s!==r||f!==l||We.current||Bn?(typeof p=="function"&&(es(n,t,p,r),l=n.memoizedState),(s=Bn||Su(n,t,s,r,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,$p(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:hn(n.type,s),a.props=u,d=n.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=an(l):(l=_e(t)?yt:Te.current,l=Qt(n,l));var w=t.getDerivedStateFromProps;(p=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==l)&&bu(n,a,r,l),Bn=!1,f=n.memoizedState,a.state=f,ni(n,r,a,o);var v=n.memoizedState;s!==d||f!==v||We.current||Bn?(typeof w=="function"&&(es(n,t,w,r),v=n.memoizedState),(u=Bn||Su(n,t,u,r,f,v,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return os(e,n,t,r,i,o)}function os(e,n,t,r,o,i){kd(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&gu(n,t,!1),Wn(e,n,i);r=n.stateNode,zm.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Kt(n,e.child,null,i),n.child=Kt(n,null,s,i)):je(e,n,s,i),n.memoizedState=r.state,o&&gu(n,t,!0),n.child}function Sd(e){var n=e.stateNode;n.pendingContext?yu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&yu(e,n.context,!1),el(e,n.containerInfo)}function Mu(e,n,t,r,o){return Gt(),Ys(o),n.flags|=256,je(e,n,t,r),n.child}var is={dehydrated:null,treeContext:null,retryLane:0};function as(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,n,t){var r=n.pendingProps,o=re.current,i=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(re,o&1),e===null)return Ka(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=xi(a,r,0,null),e=mt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=as(t),n.memoizedState=is,e):ll(n,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Wm(e,n,a,r,s,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=nt(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=nt(s,i):(i=mt(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?as(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=is,r}return i=e.child,e=i.sibling,r=nt(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ll(e,n){return n=xi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function wo(e,n,t,r){return r!==null&&Ys(r),Kt(n,e.child,null,t),e=ll(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=ua(Error(E(422))),wo(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=xi({mode:"visible",children:r.children},o,0,null),i=mt(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&Kt(n,e.child,null,a),n.child.memoizedState=as(a),n.memoizedState=is,i);if((n.mode&1)===0)return wo(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=ua(i,r,void 0),wo(e,n,a,r)}if(s=(a&e.childLanes)!==0,ze||s){if(r=we,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,zn(e,o),gn(r,e,o,-1))}return fl(),r=ua(Error(E(421))),wo(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Km.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Ve=Gn(o.nextSibling),Je=n,te=!0,mn=null,e!==null&&(Ke[Ze++]=An,Ke[Ze++]=Mn,Ke[Ze++]=gt,An=e.id,Mn=e.overflow,gt=n),n=ll(n,r.children),n.flags|=4096,n)}function Ou(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Za(e.return,n,t)}function ca(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Rd(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(je(e,n,r.children,t),r=re.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,t,n);else if(e.tag===19)Ou(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(re,r),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ti(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ca(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ti(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ca(n,!0,t,null,i);break;case"together":ca(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Mo(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=nt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=nt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _m(e,n,t){switch(n.tag){case 3:Sd(n),Gt();break;case 5:Gp(n);break;case 1:_e(n.type)&&Qo(n);break;case 4:el(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;G(Zo,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(G(re,re.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?bd(e,n,t):(G(re,re.current&1),e=Wn(e,n,t),e!==null?e.sibling:null);G(re,re.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Rd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(re,re.current),r)break;return null;case 22:case 23:return n.lanes=0,xd(e,n,t)}return Wn(e,n,t)}var Cd,ss,Td,Ed;Cd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ss=function(){};Td=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,ht(Tn.current);var i=null;switch(t){case"input":o=Ia(e,o),r=Ia(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=Aa(e,o),r=Aa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yo)}Oa(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Or.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Or.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Ed=function(e,n,t,r){t!==r&&(n.flags|=4)};function mr(e,n){if(!te)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function qm(e,n,t){var r=n.pendingProps;switch(Js(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return _e(n.type)&&Xo(),Re(n),null;case 3:return r=n.stateNode,Zt(),ne(We),ne(Te),tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mn!==null&&(ms(mn),mn=null))),ss(e,n),Re(n),null;case 5:nl(n);var o=ht($r.current);if(t=n.type,e!==null&&n.stateNode!=null)Td(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return Re(n),null}if(e=ht(Tn.current),yo(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[bn]=n,r[Hr]=i,e=(n.mode&1)!==0,t){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<kr.length;o++)Z(kr[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Bl(r,i),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Z("invalid",r);break;case"textarea":Vl(r,i),Z("invalid",r)}Oa(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&mo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&mo(r.textContent,s,e),o=["children",""+s]):Or.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Z("scroll",r)}switch(t){case"input":ao(r),Hl(r,i,!0);break;case"textarea":ao(r),$l(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ep(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[bn]=n,e[Hr]=r,Cd(e,n,!1,!1),n.stateNode=e;e:{switch(a=Fa(t,r),t){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<kr.length;o++)Z(kr[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":Bl(e,r),o=Ia(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Vl(e,r),o=Aa(e,r),Z("invalid",e);break;default:o=r}Oa(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?rp(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&np(e,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Fr(e,l):typeof l=="number"&&Fr(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Or.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&As(e,i,l,a))}switch(t){case"input":ao(e),Hl(e,r,!1);break;case"textarea":ao(e),$l(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_t(e,!!r.multiple,i,!1):r.defaultValue!=null&&_t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Yo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Re(n),null;case 6:if(e&&n.stateNode!=null)Ed(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=ht($r.current),ht(Tn.current),yo(n)){if(r=n.stateNode,t=n.memoizedProps,r[bn]=n,(i=r.nodeValue!==t)&&(e=Je,e!==null))switch(e.tag){case 3:mo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[bn]=n,n.stateNode=r}return Re(n),null;case 13:if(ne(re),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ve!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Hp(),Gt(),n.flags|=98560,i=!1;else if(i=yo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[bn]=n}else Gt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),i=!1}else mn!==null&&(ms(mn),mn=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(re.current&1)!==0?fe===0&&(fe=3):fl())),n.updateQueue!==null&&(n.flags|=4),Re(n),null);case 4:return Zt(),ss(e,n),e===null&&Ur(n.stateNode.containerInfo),Re(n),null;case 10:return Gs(n.type._context),Re(n),null;case 17:return _e(n.type)&&Xo(),Re(n),null;case 19:if(ne(re),i=n.memoizedState,i===null)return Re(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)mr(i,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=ti(e),a!==null){for(n.flags|=128,mr(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return G(re,re.current&1|2),n.child}e=e.sibling}i.tail!==null&&le()>nr&&(n.flags|=128,r=!0,mr(i,!1),n.lanes=4194304)}else{if(!r)if(e=ti(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),mr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!te)return Re(n),null}else 2*le()-i.renderingStartTime>nr&&t!==1073741824&&(n.flags|=128,r=!0,mr(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=le(),n.sibling=null,t=re.current,G(re,r?t&1|2:t&1),n):(Re(n),null);case 22:case 23:return hl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(He&1073741824)!==0&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function Um(e,n){switch(Js(n),n.tag){case 1:return _e(n.type)&&Xo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zt(),ne(We),ne(Te),tl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return nl(n),null;case 13:if(ne(re),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));Gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(re),null;case 4:return Zt(),null;case 10:return Gs(n.type._context),null;case 22:case 23:return hl(),null;case 24:return null;default:return null}}var vo=!1,Ce=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,M=null;function zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function ls(e,n,t){try{t()}catch(r){ae(e,n,r)}}var Fu=!1;function Hm(e,n){if(Va=Vo,e=Dp(),Vs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,p=0,d=e,f=null;n:for(;;){for(var w;d!==t||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(w=d.firstChild)!==null;)f=d,d=w;for(;;){if(d===e)break n;if(f===t&&++u===o&&(s=a),f===i&&++p===r&&(l=a),(w=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=w}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for($a={focusedElem:e,selectionRange:t},Vo=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var v=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,T=v.memoizedState,c=n.stateNode,h=c.getSnapshotBeforeUpdate(n.elementType===n.type?x:hn(n.type,x),T);c.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){ae(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return v=Fu,Fu=!1,v}function Pr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ls(n,t,i)}o=o.next}while(o!==r)}}function wi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function us(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pd(e){var n=e.alternate;n!==null&&(e.alternate=null,Pd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[bn],delete n[Hr],delete n[Xa],delete n[Tm],delete n[Em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Id(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yo));else if(r!==4&&(e=e.child,e!==null))for(cs(e,n,t),e=e.sibling;e!==null;)cs(e,n,t),e=e.sibling}function ps(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ps(e,n,t),e=e.sibling;e!==null;)ps(e,n,t),e=e.sibling}var xe=null,fn=!1;function qn(e,n,t){for(t=t.child;t!==null;)jd(e,n,t),t=t.sibling}function jd(e,n,t){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(ci,t)}catch{}switch(t.tag){case 5:Ce||zt(t,n);case 6:var r=xe,o=fn;xe=null,qn(e,n,t),xe=r,fn=o,xe!==null&&(fn?(e=xe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):xe.removeChild(t.stateNode));break;case 18:xe!==null&&(fn?(e=xe,t=t.stateNode,e.nodeType===8?ra(e.parentNode,t):e.nodeType===1&&ra(e,t),Wr(e)):ra(xe,t.stateNode));break;case 4:r=xe,o=fn,xe=t.stateNode.containerInfo,fn=!0,qn(e,n,t),xe=r,fn=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&ls(t,n,a),o=o.next}while(o!==r)}qn(e,n,t);break;case 1:if(!Ce&&(zt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ae(t,n,s)}qn(e,n,t);break;case 21:qn(e,n,t);break;case 22:t.mode&1?(Ce=(r=Ce)||t.memoizedState!==null,qn(e,n,t),Ce=r):qn(e,n,t);break;default:qn(e,n,t)}}function Nu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bm),n.forEach(function(r){var o=Zm.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function dn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,fn=!1;break e;case 3:xe=s.stateNode.containerInfo,fn=!0;break e;case 4:xe=s.stateNode.containerInfo,fn=!0;break e}s=s.return}if(xe===null)throw Error(E(160));jd(i,a,o),xe=null,fn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ae(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Dd(n,e),n=n.sibling}function Dd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(n,e),xn(e),r&4){try{Pr(3,e,e.return),wi(3,e)}catch(x){ae(e,e.return,x)}try{Pr(5,e,e.return)}catch(x){ae(e,e.return,x)}}break;case 1:dn(n,e),xn(e),r&512&&t!==null&&zt(t,t.return);break;case 5:if(dn(n,e),xn(e),r&512&&t!==null&&zt(t,t.return),e.flags&32){var o=e.stateNode;try{Fr(o,"")}catch(x){ae(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Kc(o,i),Fa(s,a);var u=Fa(s,i);for(a=0;a<l.length;a+=2){var p=l[a],d=l[a+1];p==="style"?rp(o,d):p==="dangerouslySetInnerHTML"?np(o,d):p==="children"?Fr(o,d):As(o,p,d,u)}switch(s){case"input":ja(o,i);break;case"textarea":Zc(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?_t(o,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?_t(o,!!i.multiple,i.defaultValue,!0):_t(o,!!i.multiple,i.multiple?[]:"",!1))}o[Hr]=i}catch(x){ae(e,e.return,x)}}break;case 6:if(dn(n,e),xn(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ae(e,e.return,x)}}break;case 3:if(dn(n,e),xn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wr(n.containerInfo)}catch(x){ae(e,e.return,x)}break;case 4:dn(n,e),xn(e);break;case 13:dn(n,e),xn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(pl=le())),r&4&&Nu(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||p,dn(n,e),Ce=u):dn(n,e),xn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&(e.mode&1)!==0)for(M=e,p=e.child;p!==null;){for(d=M=p;M!==null;){switch(f=M,w=f.child,f.tag){case 0:case 11:case 14:case 15:Pr(4,f,f.return);break;case 1:zt(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(x){ae(r,t,x)}}break;case 5:zt(f,f.return);break;case 22:if(f.memoizedState!==null){Wu(d);continue}}w!==null?(w.return=f,M=w):Wu(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=tp("display",a))}catch(x){ae(e,e.return,x)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ae(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dn(n,e),xn(e),r&4&&Nu(e);break;case 21:break;default:dn(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Id(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Fr(o,""),r.flags&=-33);var i=Lu(e);ps(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Lu(e);cs(e,s,a);break;default:throw Error(E(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vm(e,n,t){M=e,Ad(e)}function Ad(e,n,t){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||vo;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Ce;s=vo;var u=Ce;if(vo=a,(Ce=l)&&!u)for(M=o;M!==null;)a=M,l=a.child,a.tag===22&&a.memoizedState!==null?_u(o):l!==null?(l.return=a,M=l):_u(o);for(;i!==null;)M=i,Ad(i),i=i.sibling;M=o,vo=s,Ce=u}zu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,M=i):zu(e)}}function zu(e){for(;M!==null;){var n=M;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ce||wi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ce)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:hn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ku(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ku(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Wr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||n.flags&512&&us(n)}catch(f){ae(n,n.return,f)}}if(n===e){M=null;break}if(t=n.sibling,t!==null){t.return=n.return,M=t;break}M=n.return}}function Wu(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var t=n.sibling;if(t!==null){t.return=n.return,M=t;break}M=n.return}}function _u(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wi(4,n)}catch(l){ae(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(l){ae(n,o,l)}}var i=n.return;try{us(n)}catch(l){ae(n,i,l)}break;case 5:var a=n.return;try{us(n)}catch(l){ae(n,a,l)}}}catch(l){ae(n,n.return,l)}if(n===e){M=null;break}var s=n.sibling;if(s!==null){s.return=n.return,M=s;break}M=n.return}}var $m=Math.ceil,ii=_n.ReactCurrentDispatcher,ul=_n.ReactCurrentOwner,rn=_n.ReactCurrentBatchConfig,V=0,we=null,pe=null,ke=0,He=0,Wt=it(0),fe=0,Qr=null,vt=0,vi=0,cl=0,Ir=null,Ne=null,pl=0,nr=1/0,jn=null,ai=!1,ds=null,Zn=null,xo=!1,Jn=null,si=0,jr=0,hs=null,Oo=-1,Fo=0;function De(){return(V&6)!==0?le():Oo!==-1?Oo:Oo=le()}function et(e){return(e.mode&1)===0?1:(V&2)!==0&&ke!==0?ke&-ke:Im.transition!==null?(Fo===0&&(Fo=mp()),Fo):(e=$,e!==0||(e=window.event,e=e===void 0?16:Sp(e.type)),e)}function gn(e,n,t,r){if(50<jr)throw jr=0,hs=null,Error(E(185));Kr(e,t,r),((V&2)===0||e!==we)&&(e===we&&((V&2)===0&&(vi|=t),fe===4&&Vn(e,ke)),qe(e,r),t===1&&V===0&&(n.mode&1)===0&&(nr=le()+500,mi&&at()))}function qe(e,n){var t=e.callbackNode;If(e,n);var r=Ho(e,e===we?ke:0);if(r===0)t!==null&&Xl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xl(t),n===1)e.tag===0?Pm(qu.bind(null,e)):qp(qu.bind(null,e)),Rm(function(){(V&6)===0&&at()}),t=null;else{switch(yp(r)){case 1:t=Ns;break;case 4:t=hp;break;case 16:t=Bo;break;case 536870912:t=fp;break;default:t=Bo}t=_d(t,Md.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Md(e,n){if(Oo=-1,Fo=0,(V&6)!==0)throw Error(E(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=Ho(e,e===we?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=li(e,r);else{n=r;var o=V;V|=2;var i=Fd();(we!==e||ke!==n)&&(jn=null,nr=le()+500,ft(e,n));do try{Xm();break}catch(s){Od(e,s)}while(1);Qs(),ii.current=i,V=o,pe!==null?n=0:(we=null,ke=0,n=fe)}if(n!==0){if(n===2&&(o=_a(e),o!==0&&(r=o,n=fs(e,o))),n===1)throw t=Qr,ft(e,0),Vn(e,r),qe(e,le()),t;if(n===6)Vn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Jm(o)&&(n=li(e,r),n===2&&(i=_a(e),i!==0&&(r=i,n=fs(e,i))),n===1))throw t=Qr,ft(e,0),Vn(e,r),qe(e,le()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:ut(e,Ne,jn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(n=pl+500-le(),10<n)){if(Ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ya(ut.bind(null,e,Ne,jn),n);break}ut(e,Ne,jn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-yn(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$m(r/1960))-r,10<r){e.timeoutHandle=Ya(ut.bind(null,e,Ne,jn),r);break}ut(e,Ne,jn);break;case 5:ut(e,Ne,jn);break;default:throw Error(E(329))}}}return qe(e,le()),e.callbackNode===t?Md.bind(null,e):null}function fs(e,n){var t=Ir;return e.current.memoizedState.isDehydrated&&(ft(e,n).flags|=256),e=li(e,n),e!==2&&(n=Ne,Ne=t,n!==null&&ms(n)),e}function ms(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Jm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!wn(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vn(e,n){for(n&=~cl,n&=~vi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-yn(n),r=1<<t;e[t]=-1,n&=~r}}function qu(e){if((V&6)!==0)throw Error(E(327));Vt();var n=Ho(e,0);if((n&1)===0)return qe(e,le()),null;var t=li(e,n);if(e.tag!==0&&t===2){var r=_a(e);r!==0&&(n=r,t=fs(e,r))}if(t===1)throw t=Qr,ft(e,0),Vn(e,n),qe(e,le()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ut(e,Ne,jn),qe(e,le()),null}function dl(e,n){var t=V;V|=1;try{return e(n)}finally{V=t,V===0&&(nr=le()+500,mi&&at())}}function xt(e){Jn!==null&&Jn.tag===0&&(V&6)===0&&Vt();var n=V;V|=1;var t=rn.transition,r=$;try{if(rn.transition=null,$=1,e)return e()}finally{$=r,rn.transition=t,V=n,(V&6)===0&&at()}}function hl(){He=Wt.current,ne(Wt)}function ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,bm(t)),pe!==null)for(t=pe.return;t!==null;){var r=t;switch(Js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:Zt(),ne(We),ne(Te),tl();break;case 5:nl(r);break;case 4:Zt();break;case 13:ne(re);break;case 19:ne(re);break;case 10:Gs(r.type._context);break;case 22:case 23:hl()}t=t.return}if(we=e,pe=e=nt(e.current,null),ke=He=n,fe=0,Qr=null,cl=vi=vt=0,Ne=Ir=null,dt!==null){for(n=0;n<dt.length;n++)if(t=dt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}dt=null}return e}function Od(e,n){do{var t=pe;try{if(Qs(),Do.current=oi,ri){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ri=!1}if(wt=0,ye=he=oe=null,Er=!1,Jr=0,ul.current=null,t===null||t.return===null){fe=1,Qr=n,pe=null;break}e:{var i=e,a=t.return,s=t,l=n;if(n=ke,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=s,d=p.tag;if((p.mode&1)===0&&(d===0||d===11||d===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Pu(a);if(w!==null){w.flags&=-257,Iu(w,a,s,i,n),w.mode&1&&Eu(i,u,n),n=w,l=u;var v=n.updateQueue;if(v===null){var x=new Set;x.add(l),n.updateQueue=x}else v.add(l);break e}else{if((n&1)===0){Eu(i,u,n),fl();break e}l=Error(E(426))}}else if(te&&s.mode&1){var T=Pu(a);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),Iu(T,a,s,i,n),Ys(er(l,s));break e}}i=l=er(l,s),fe!==4&&(fe=2),Ir===null?Ir=[i]:Ir.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var c=gd(i,l,n);xu(i,c);break e;case 1:s=l;var h=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Zn===null||!Zn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=wd(i,s,n);xu(i,S);break e}}i=i.return}while(i!==null)}Nd(t)}catch(C){n=C,pe===t&&t!==null&&(pe=t=t.return);continue}break}while(1)}function Fd(){var e=ii.current;return ii.current=oi,e===null?oi:e}function fl(){(fe===0||fe===3||fe===2)&&(fe=4),we===null||(vt&268435455)===0&&(vi&268435455)===0||Vn(we,ke)}function li(e,n){var t=V;V|=2;var r=Fd();(we!==e||ke!==n)&&(jn=null,ft(e,n));do try{Ym();break}catch(o){Od(e,o)}while(1);if(Qs(),V=t,ii.current=r,pe!==null)throw Error(E(261));return we=null,ke=0,fe}function Ym(){for(;pe!==null;)Ld(pe)}function Xm(){for(;pe!==null&&!xf();)Ld(pe)}function Ld(e){var n=Wd(e.alternate,e,He);e.memoizedProps=e.pendingProps,n===null?Nd(e):pe=n,ul.current=null}function Nd(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=qm(t,n,He),t!==null){pe=t;return}}else{if(t=Um(t,n),t!==null){t.flags&=32767,pe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,pe=null;return}}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);fe===0&&(fe=5)}function ut(e,n,t){var r=$,o=rn.transition;try{rn.transition=null,$=1,Qm(e,n,t,r)}finally{rn.transition=o,$=r}return null}function Qm(e,n,t,r){do Vt();while(Jn!==null);if((V&6)!==0)throw Error(E(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(jf(e,i),e===we&&(pe=we=null,ke=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||xo||(xo=!0,_d(Bo,function(){return Vt(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=rn.transition,rn.transition=null;var a=$;$=1;var s=V;V|=4,ul.current=null,Hm(e,t),Dd(t,e),ym($a),Vo=!!Va,$a=Va=null,e.current=t,Vm(t),kf(),V=s,$=a,rn.transition=i}else e.current=t;if(xo&&(xo=!1,Jn=e,si=o),i=e.pendingLanes,i===0&&(Zn=null),Rf(t.stateNode),qe(e,le()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ai)throw ai=!1,e=ds,ds=null,e;return(si&1)!==0&&e.tag!==0&&Vt(),i=e.pendingLanes,(i&1)!==0?e===hs?jr++:(jr=0,hs=e):jr=0,at(),null}function Vt(){if(Jn!==null){var e=yp(si),n=rn.transition,t=$;try{if(rn.transition=null,$=16>e?16:e,Jn===null)var r=!1;else{if(e=Jn,Jn=null,si=0,(V&6)!==0)throw Error(E(331));var o=V;for(V|=4,M=e.current;M!==null;){var i=M,a=i.child;if((M.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var p=M;switch(p.tag){case 0:case 11:case 15:Pr(8,p,i)}var d=p.child;if(d!==null)d.return=p,M=d;else for(;M!==null;){p=M;var f=p.sibling,w=p.return;if(Pd(p),p===u){M=null;break}if(f!==null){f.return=w,M=f;break}M=w}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}M=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,M=a;else e:for(;M!==null;){if(i=M,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Pr(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,M=c;break e}M=i.return}}var h=e.current;for(M=h;M!==null;){a=M;var m=a.child;if((a.subtreeFlags&2064)!==0&&m!==null)m.return=a,M=m;else e:for(a=h;M!==null;){if(s=M,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:wi(9,s)}}catch(C){ae(s,s.return,C)}if(s===a){M=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,M=S;break e}M=s.return}}if(V=o,at(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(ci,e)}catch{}r=!0}return r}finally{$=t,rn.transition=n}}return!1}function Uu(e,n,t){n=er(t,n),n=gd(e,n,1),e=Kn(e,n,1),n=De(),e!==null&&(Kr(e,1,n),qe(e,n))}function ae(e,n,t){if(e.tag===3)Uu(e,e,t);else for(;n!==null;){if(n.tag===3){Uu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=er(t,e),e=wd(n,e,1),n=Kn(n,e,1),e=De(),n!==null&&(Kr(n,1,e),qe(n,e));break}}n=n.return}}function Gm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=De(),e.pingedLanes|=e.suspendedLanes&t,we===e&&(ke&t)===t&&(fe===4||fe===3&&(ke&130023424)===ke&&500>le()-pl?ft(e,0):cl|=t),qe(e,n)}function zd(e,n){n===0&&((e.mode&1)===0?n=1:(n=uo,uo<<=1,(uo&130023424)===0&&(uo=4194304)));var t=De();e=zn(e,n),e!==null&&(Kr(e,n,t),qe(e,t))}function Km(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),zd(e,t)}function Zm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),zd(e,t)}var Wd;Wd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||We.current)ze=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ze=!1,_m(e,n,t);ze=(e.flags&131072)!==0}else ze=!1,te&&(n.flags&1048576)!==0&&Up(n,Ko,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Mo(e,n),e=n.pendingProps;var o=Qt(n,Te.current);Ht(n,t),o=ol(null,n,r,e,o,t);var i=il();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,_e(r)?(i=!0,Qo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Zs(n),o.updater=yi,n.stateNode=o,o._reactInternals=n,ns(n,r,e,t),n=os(null,n,r,!0,i,t)):(n.tag=0,te&&i&&$s(n),je(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Mo(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=ny(r),e=hn(r,e),o){case 0:n=rs(null,n,r,e,t);break e;case 1:n=Au(null,n,r,e,t);break e;case 11:n=ju(null,n,r,e,t);break e;case 14:n=Du(null,n,r,hn(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:hn(r,o),rs(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:hn(r,o),Au(e,n,r,o,t);case 3:e:{if(Sd(n),e===null)throw Error(E(387));r=n.pendingProps,i=n.memoizedState,o=i.element,$p(e,n),ni(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=er(Error(E(423)),n),n=Mu(e,n,r,t,o);break e}else if(r!==o){o=er(Error(E(424)),n),n=Mu(e,n,r,t,o);break e}else for(Ve=Gn(n.stateNode.containerInfo.firstChild),Je=n,te=!0,mn=null,t=Qp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Gt(),r===o){n=Wn(e,n,t);break e}je(e,n,r,t)}n=n.child}return n;case 5:return Gp(n),e===null&&Ka(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ja(r,o)?a=null:i!==null&&Ja(r,i)&&(n.flags|=32),kd(e,n),je(e,n,a,t),n.child;case 6:return e===null&&Ka(n),null;case 13:return bd(e,n,t);case 4:return el(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Kt(n,null,r,t):je(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:hn(r,o),ju(e,n,r,o,t);case 7:return je(e,n,n.pendingProps,t),n.child;case 8:return je(e,n,n.pendingProps.children,t),n.child;case 12:return je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,G(Zo,r._currentValue),r._currentValue=a,i!==null)if(wn(i.value,a)){if(i.children===o.children&&!We.current){n=Wn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Fn(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Za(i.return,t,n),s.lanes|=t;break}l=l.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(E(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Za(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}je(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Ht(n,t),o=an(o),r=r(o),n.flags|=1,je(e,n,r,t),n.child;case 14:return r=n.type,o=hn(r,n.pendingProps),o=hn(r.type,o),Du(e,n,r,o,t);case 15:return vd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:hn(r,o),Mo(e,n),n.tag=1,_e(r)?(e=!0,Qo(n)):e=!1,Ht(n,t),Yp(n,r,o),ns(n,r,o,t),os(null,n,r,!0,e,t);case 19:return Rd(e,n,t);case 22:return xd(e,n,t)}throw Error(E(156,n.tag))};function _d(e,n){return dp(e,n)}function ey(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,n,t,r){return new ey(e,n,t,r)}function ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ny(e){if(typeof e=="function")return ml(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Os)return 11;if(e===Fs)return 14}return 2}function nt(e,n){var t=e.alternate;return t===null?(t=tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Lo(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")ml(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case It:return mt(t.children,o,i,n);case Ms:a=8,o|=8;break;case Ca:return e=tn(12,t,n,o|2),e.elementType=Ca,e.lanes=i,e;case Ta:return e=tn(13,t,n,o),e.elementType=Ta,e.lanes=i,e;case Ea:return e=tn(19,t,n,o),e.elementType=Ea,e.lanes=i,e;case Xc:return xi(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jc:a=10;break e;case Yc:a=9;break e;case Os:a=11;break e;case Fs:a=14;break e;case Un:a=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=tn(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function mt(e,n,t,r){return e=tn(7,e,r,n),e.lanes=t,e}function xi(e,n,t,r){return e=tn(22,e,r,n),e.elementType=Xc,e.lanes=t,e.stateNode={isHidden:!1},e}function pa(e,n,t){return e=tn(6,e,null,n),e.lanes=t,e}function da(e,n,t){return n=tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ty(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$i(0),this.expirationTimes=$i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function yl(e,n,t,r,o,i,a,s,l){return e=new ty(e,n,t,s,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=tn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zs(i),e}function ry(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qd(e){if(!e)return rt;e=e._reactInternals;e:{if(St(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(_e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(_e(t))return _p(e,t,n)}return n}function Ud(e,n,t,r,o,i,a,s,l){return e=yl(t,r,!0,e,o,i,a,s,l),e.context=qd(null),t=e.current,r=De(),o=et(t),i=Fn(r,o),i.callback=n!=null?n:null,Kn(t,i,o),e.current.lanes=o,Kr(e,o,r),qe(e,r),e}function ki(e,n,t,r){var o=n.current,i=De(),a=et(o);return t=qd(t),n.context===null?n.context=t:n.pendingContext=t,n=Fn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Kn(o,n,a),e!==null&&(gn(e,o,a,i),jo(e,o,a)),a}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function gl(e,n){Bu(e,n),(e=e.alternate)&&Bu(e,n)}function oy(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function wl(e){this._internalRoot=e}Si.prototype.render=wl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));ki(e,n,null,null)};Si.prototype.unmount=wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xt(function(){ki(null,e,null,null)}),n[Nn]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var n=vp();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Hn.length&&n!==0&&n<Hn[t].priority;t++);Hn.splice(t,0,e),t===0&&kp(e)}};function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function iy(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ui(a);i.call(u)}}var a=Ud(n,r,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=a,e[Nn]=a.current,Ur(e.nodeType===8?e.parentNode:e),xt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ui(l);s.call(u)}}var l=yl(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=l,e[Nn]=l.current,Ur(e.nodeType===8?e.parentNode:e),xt(function(){ki(n,l,t,r)}),l}function Ri(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=ui(a);s.call(l)}}ki(n,a,e,o)}else a=iy(t,n,e,o,r);return ui(a)}gp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xr(n.pendingLanes);t!==0&&(zs(n,t|1),qe(n,le()),(V&6)===0&&(nr=le()+500,at()))}break;case 13:xt(function(){var r=zn(e,1);if(r!==null){var o=De();gn(r,e,1,o)}}),gl(e,1)}};Ws=function(e){if(e.tag===13){var n=zn(e,134217728);if(n!==null){var t=De();gn(n,e,134217728,t)}gl(e,134217728)}};wp=function(e){if(e.tag===13){var n=et(e),t=zn(e,n);if(t!==null){var r=De();gn(t,e,n,r)}gl(e,n)}};vp=function(){return $};xp=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};Na=function(e,n,t){switch(n){case"input":if(ja(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=fi(r);if(!o)throw Error(E(90));Gc(r),ja(r,o)}}}break;case"textarea":Zc(e,t);break;case"select":n=t.value,n!=null&&_t(e,!!t.multiple,n,!1)}};ap=dl;sp=xt;var ay={usingClientEntryPoint:!1,Events:[eo,Mt,fi,op,ip,dl]},yr={findFiberByHostInstance:pt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sy={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cp(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{ci=ko.inject(sy),Cn=ko}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay;Xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vl(n))throw Error(E(200));return ry(e,n,null,t)};Xe.createRoot=function(e,n){if(!vl(e))throw Error(E(299));var t=!1,r="",o=Bd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=yl(e,1,!1,null,null,t,!1,r,o),e[Nn]=n.current,Ur(e.nodeType===8?e.parentNode:e),new wl(n)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=cp(n),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return xt(e)};Xe.hydrate=function(e,n,t){if(!bi(n))throw Error(E(200));return Ri(null,e,n,!0,t)};Xe.hydrateRoot=function(e,n,t){if(!vl(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=Bd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Ud(n,null,e,1,t!=null?t:null,o,!1,i,a),e[Nn]=n.current,Ur(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Si(n)};Xe.render=function(e,n,t){if(!bi(n))throw Error(E(200));return Ri(null,e,n,!1,t)};Xe.unmountComponentAtNode=function(e){if(!bi(e))throw Error(E(40));return e._reactRootContainer?(xt(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[Nn]=null})}),!0):!1};Xe.unstable_batchedUpdates=dl;Xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!bi(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ri(e,n,t,!1,r)};Xe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=Xe})(Uc);var Vu=Uc.exports;ba.createRoot=Vu.createRoot,ba.hydrateRoot=Vu.hydrateRoot;var Ci={exports:{}},Ti={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=nn.exports,uy=Symbol.for("react.element"),cy=Symbol.for("react.fragment"),py=Object.prototype.hasOwnProperty,dy=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hy={key:!0,ref:!0,__self:!0,__source:!0};function Hd(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)py.call(n,r)&&!hy.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:uy,type:e,key:i,ref:a,props:o,_owner:dy.current}}Ti.Fragment=cy;Ti.jsx=Hd;Ti.jsxs=Hd;(function(e){e.exports=Ti})(Ci);const fy=Ci.exports.Fragment,ge=Ci.exports.jsx,Dr=Ci.exports.jsxs,Vd=nn.exports.createContext({page:"Home",setPage:()=>{},setReactJS:()=>{}});function my({children:e}){const n=i=>o(a=>({...a,page:i})),t=i=>o(a=>({...a,reactJS:i})),[r,o]=nn.exports.useState({page:"Home",setPage:n,setReactJS:t});return ge(Vd.Provider,{value:r,children:e})}function xl(){return nn.exports.useContext(Vd)}const $u={1:{question:"1. ## What is React?",answer:`

    React is an **open-source front-end JavaScript library** that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by [Jordan Walke](https://github.com/jordwalke), a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.`},2:{question:"2. ## What are the major features of React?",answer:`

    The major features of React are:

    * It uses **VirtualDOM** instead of RealDOM considering that RealDOM manipulations are expensive.
    * Supports **server-side rendering**.
    * Follows **Unidirectional** data flow or data binding.
    * Uses **reusable/composable** UI components to develop the view.`},3:{question:"3. ## What is JSX?",answer:`

    *JSX* is a XML-like syntax extension to ECMAScript (the acronym stands for *JavaScript XML*). Basically it just provides syntactic sugar for the \`React.createElement()\` function, giving us expressiveness of JavaScript along with HTML like template syntax.

    In the example below text inside \`<h1>\` tag is returned as JavaScript function to the render function.

    \`\`\`jsx harmony
    class App extends React.Component {
      render() {
        return(
          <div>
            <h1>{'Welcome to React world!'}</h1>
          </div>
        )
      }
    }
    \`\`\``},4:{question:"4. ## What is the difference between Element and Component?",answer:`

    An *Element* is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. *Elements* can contain other *Elements* in their props. Creating a React element is cheap. Once an element is created, it is never mutated.

    The object representation of React Element would be as follows:

    \`\`\`javascript
    const element = React.createElement(
      'div',
      {id: 'login-btn'},
      'Login'
    )
    \`\`\`

    The above \`React.createElement()\` function returns an object:

    \`\`\`
    {
      type: 'div',
      props: {
        children: 'Login',
        id: 'login-btn'
      }
    }
    \`\`\`

    And finally it renders to the DOM using \`ReactDOM.render()\`:

    \`\`\`html
    <div id='login-btn'>Login</div>
    \`\`\`

    Whereas a **component** can be declared in several different ways. It can be a class with a \`render()\` method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:

    \`\`\`javascript
    const Button = ({ onLogin }) =>
      <div id={'login-btn'} onClick={onLogin}>Login</div>
    \`\`\`

    Then JSX gets transpiled to a \`React.createElement()\` function tree:

    \`\`\`javascript
    const Button = ({ onLogin }) => React.createElement(
      'div',
      { id: 'login-btn', onClick: onLogin },
      'Login'
    )
    \`\`\``},5:{question:"5. ## How to create components in React?",answer:`

    There are two possible ways to create a component.

    1. **Function Components:** This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the first parameter and return React elements:

        \`\`\`jsx harmony
        function Greeting({ message }) {
          return <h1>{\`Hello, \${message}\`}</h1>

        }
        \`\`\`

    2. **Class Components:** You can also use ES6 class to define a component. The above function component can be written as:

        \`\`\`jsx harmony
        class Greeting extends React.Component {
          render() {
            return <h1>{\`Hello, \${this.props.message}\`}</h1>
          }
        }
        \`\`\``},6:{question:"6. ## When to use a Class Component over a Function Component?",answer:`

    If the component needs *state or lifecycle methods* then use class component otherwise use function component.
    *However, from React 16.8 with the addition of Hooks, you could use state , lifecycle  methods and other features that were only available in class component right in your function component.*
    *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries *`},7:{question:"7. ## What are Pure Components?",answer:"\n\n    *`React.PureComponent`* is exactly the same as *`React.Component`* except that it handles the `shouldComponentUpdate()` method for you. When props or state changes, *PureComponent* will do a shallow comparison on both props and state. *Component* on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever `shouldComponentUpdate` is called."},8:{question:"8. ## What is state in React?",answer:`

    *State* of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

    Let's create a user component with message state,


    \`\`\`jsx harmony
    class User extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          message: 'Welcome to React world'
        }
      }

      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        )
      }
    }
    \`\`\`

    ![state](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/images/state.jpg)

    State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.`},9:{question:"9. ## What are props in React?",answer:`

    *Props* are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

    The primary purpose of props in React is to provide following component functionality:

    1. Pass custom data to your component.
    2. Trigger state changes.
    3. Use via \`this.props.reactProp\` inside component's \`render()\` method.

    For example, let us create an element with \`reactProp\` property:

    \`\`\`jsx harmony
    <Element reactProp={'1'} />
    \`\`\`

    This \`reactProp\` (or whatever you came up with) name then becomes a property attached to React's native props object which originally already exists on all components created using React library.

    \`\`\`
    props.reactProp
    \`\`\`
    

    **Example: Props in Class Based Component**

    \`\`\`jsx
    import React from 'react'
    import ReactDOM from 'react-dom'

    class ChildComponent extends React.Component {
        render() {
            return (
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.age}</p>
                </div>
            )
        }
    }

    class ParentComponent extends React.Component {
        render() {
            return (
                <div>
                    <ChildComponent name='John' age='30' />
                    <ChildComponent name='Mary' age='25' />
                </div>
            )
        }
    }
    \`\`\`

    **Example: Props in Functional Component**

    \`\`\`jsx
    import React from 'react'
    import ReactDOM from 'react-dom'

    const ChildComponent = (props) => {
        return (
            <div>
                <p>{props.name}</p>
                <p>{props.age}</p>
            </div>
        )
    }

    const ParentComponent = () => {
        return (
            <div>
                <ChildComponent name='John' age='30' />
                <ChildComponent name='Mary' age='25' />
            </div>
        )
    }
    \`\`\``},10:{question:"10. ## What is the difference between state and props?",answer:`

    Both *props* and *state* are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.`},11:{question:"11. ## Why should we not update the state directly?",answer:`

    If you try to update the state directly then it won't re-render the component.

    \`\`\`javascript
    //Wrong
    this.state.message = 'Hello world'
    \`\`\`

    Instead use \`setState()\` method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

    \`\`\`javascript
    //Correct
    this.setState({ message: 'Hello World' })
    \`\`\`

    **Note:** You can directly assign to the state object either in *constructor* or using latest javascript's class field declaration syntax.`},12:{question:"12. ## What is the purpose of callback function as an argument of `setState()`?",answer:"\n\n    The callback function is invoked when setState finished and the component gets rendered. Since `setState()` is **asynchronous** the callback function is used for any post action.\n\n    **Note:** It is recommended to use lifecycle method rather than this callback function.\n\n    ```javascript\n    setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))\n    ```"},13:{question:"13. ## What is the difference between HTML and React event handling?",answer:`
    Below are some of the main differences between HTML and React event handling,

    1. In HTML, the event name usually represents in *lowercase* as a convention:

        \`\`\`html
        <button onclick='activateLasers()'>
        \`\`\`

       Whereas in React it follows *camelCase* convention:

        \`\`\`jsx harmony
        <button onClick={activateLasers}>
        \`\`\`

    2. In HTML, you can return \`false\` to prevent default behavior:

        \`\`\`html
        <a href='#' onclick='console.log("The link was clicked."); return false;' />
        \`\`\`

       Whereas in React you must call \`preventDefault()\` explicitly:

        \`\`\`javascript
        function handleClick(event) {
          event.preventDefault()
          console.log('The link was clicked.')
        }
        \`\`\`

    3. In HTML, you need to invoke the function by appending \`()\`
       Whereas in react you should not append \`()\` with the function name. (refer "activateLasers" function in the first point for example)`},14:{question:"14. ## How to bind methods or event handlers in JSX callbacks?",answer:`

    There are 3 possible ways to achieve this:

    1.	**Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

        \`\`\`javascript
        class Foo extends Component {
          constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
          }
          handleClick() {
            console.log('Click happened');
          }
          render() {
            return <button onClick={this.handleClick}>Click Me</button>;
          }
        }

        \`\`\`

    2. **Public class fields syntax:** If you don't like to use bind approach then *public class fields syntax* can be used to correctly bind callbacks.

        \`\`\`jsx harmony
        handleClick = () => {
          console.log('this is:', this)
        }
        \`\`\`

        \`\`\`jsx harmony
        <button onClick={this.handleClick}>
          {'Click me'}
        </button>
        \`\`\`

    3. **Arrow functions in callbacks:** You can use *arrow functions* directly in the callbacks.

        \`\`\`jsx harmony
        handleClick() {
            console.log('Click happened');
        }
        render() {
            return <button onClick={() => this.handleClick()}>Click Me</button>;
        }
        \`\`\`

    **Note:** If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with \`.bind()\` or *public class fields syntax* approach considering performance.`},15:{question:"15. ## How to pass a parameter to an event handler or callback?",answer:'\n\n    You can use an *arrow function* to wrap around an *event handler* and pass parameters:\n\n    ```jsx harmony\n    <button onClick={() => this.handleClick(id)} />\n    ```\n\n    This is an equivalent to calling `.bind`:\n\n    ```jsx harmony\n    <button onClick={this.handleClick.bind(this, id)} />\n    ```\n    Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function\n    ```jsx harmony\n    <button onClick={this.handleClick(id)} />\n    handleClick = (id) => () => {\n        console.log("Hello, your ticket number is", id)\n    };\n    ```'},16:{question:"16. ## What are synthetic events in React?",answer:"\n\n    `SyntheticEvent` is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers."},17:{question:"17. ## What are inline conditional expressions?",answer:`

    You can use either *if statements* or *ternary expressions* which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator \`&&\`.

    \`\`\`jsx harmony
    <h1>Hello!</h1>
    {
        messages.length > 0 && !isLogin?
          <h2>
              You have {messages.length} unread messages.
          </h2>
          :
          <h2>
              You don't have unread messages.
          </h2>
    }
    \`\`\``},18:{question:'18. ## What is "key" prop and what is the benefit of using it in arrays of elements?',answer:`

    A \`key\` is a special string attribute you **should** include when creating arrays of elements. *Key* prop helps React identify which items have changed, are added, or are removed.

    Most often we use ID from our data as *key*:

    \`\`\`jsx harmony
    const todoItems = todos.map((todo) =>
      <li key={todo.id}>
        {todo.text}
      </li>
    )
    \`\`\`

    When you don't have stable IDs for rendered items, you may use the item *index* as a *key* as a last resort:

    \`\`\`jsx harmony
    const todoItems = todos.map((todo, index) =>
      <li key={index}>
        {todo.text}
      </li>
    )
    \`\`\`

    **Note:**

    1. Using *indexes* for *keys* is **not recommended** if the order of items may change. This can negatively impact performance and may cause issues with component state.
    2. If you extract list item as separate component then apply *keys* on list component instead of \`li\` tag.
    3. There will be a warning message in the console if the \`key\` prop is not present on list items.`},19:{question:"19. ## What is the use of refs?",answer:`

    The *ref* is used to return a reference to the element. They *should be avoided* in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.`},20:{question:"20. ## How to create refs?",answer:`

    There are two approaches
    1. This is a recently added approach. *Refs* are created using \`React.createRef()\` method and attached to React elements via the \`ref\` attribute. In order to use *refs* throughout the component, just assign the *ref* to the instance property within constructor.

        \`\`\`jsx harmony
        class MyComponent extends React.Component {
          constructor(props) {
            super(props)
            this.myRef = React.createRef()
          }
          render() {
            return <div ref={this.myRef} />
          }
        }
        \`\`\`
    2. You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element is accessed as follows,
        \`\`\`jsx harmony
        class SearchBar extends Component {
           constructor(props) {
              super(props);
              this.txtSearch = null;
              this.state = { term: '' };
              this.setInputSearchRef = e => {
                 this.txtSearch = e;
              }
           }
           onInputChange(event) {
              this.setState({ term: this.txtSearch.value });
           }
           render() {
              return (
                 <input
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                    ref={this.setInputSearchRef} />
              );
           }
        }
        \`\`\`

    You can also use *refs* in function components using **closures**.
    **Note**: You can also use inline ref callbacks even though it is not a recommended approach.`},21:{question:"21. ## What are forward refs?",answer:`

    *Ref forwarding* is a feature that lets some components take a *ref* they receive, and pass it further down to a child.

    \`\`\`jsx harmony
    const ButtonElement = React.forwardRef((props, ref) => (
      <button ref={ref} className="CustomButton">
        {props.children}
      </button>
    ));

    // Create ref to the DOM button:
    const ref = React.createRef();
    <ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>
    \`\`\``},22:{question:"22. ## Which is preferred option with in callback refs and findDOMNode()?",answer:`

    It is preferred to use *callback refs* over \`findDOMNode()\` API. Because \`findDOMNode()\` prevents certain improvements in React in the future.

    The **legacy** approach of using \`findDOMNode\`:

    \`\`\`javascript
    class MyComponent extends Component {
      componentDidMount() {
        findDOMNode(this).scrollIntoView()
      }

      render() {
        return <div />
      }
    }
    \`\`\`

    The recommended approach is:

    \`\`\`javascript
    class MyComponent extends Component {
      constructor(props){
        super(props);
        this.node = createRef();
      }
      componentDidMount() {
        this.node.current.scrollIntoView();
      }

      render() {
        return <div ref={this.node} />
      }
    }
    \`\`\``},23:{question:"23. ## Why are String Refs legacy?",answer:`

    If you worked with React before, you might be familiar with an older API where the \`ref\` attribute is a string, like \`ref={'textInput'}\`, and the DOM node is accessed as \`this.refs.textInput\`. We advise against it because *string refs have below issues*, and are considered legacy. String refs were **removed in React v16**.

    1. They *force React to keep track of currently executing component*. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.
    2. They are *not composable* \u2014 if a library puts a ref on the passed child, the user can't put another ref on it. Callback refs are perfectly composable.
    3. They *don't work with static analysis* like Flow. Flow can't guess the magic that framework does to make the string ref appear on \`this.refs\`, as well as its type (which could be different). Callback refs are friendlier to static analysis.
    4. It doesn't work as most people would expect with the "render callback" pattern (e.g. <DataGrid renderRow={this.renderRow} />)
       \`\`\`jsx harmony
       class MyComponent extends Component {
         renderRow = (index) => {
           // This won't work. Ref will get attached to DataTable rather than MyComponent:
           return <input ref={'input-' + index} />;

           // This would work though! Callback refs are awesome.
           return <input ref={input => this['input-' + index] = input} />;
         }

         render() {
           return <DataTable data={this.props.data} renderRow={this.renderRow} />
         }
       }
       \`\`\``},24:{question:"24. ## What is Virtual DOM?",answer:`

    The *Virtual DOM* (VDOM) is an in-memory representation of *Real DOM*. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called *reconciliation*.`},25:{question:"25. ## How Virtual DOM works?",answer:`

    The *Virtual DOM* works in three simple steps.

    1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

        ![vdom](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/images/vdom1.png)

    2. Then the difference between the previous DOM representation and the new one is calculated.

        ![vdom2](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/images/vdom2.png)

    3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

        ![vdom3](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/images/vdom3.png)`},26:{question:"26. ## What is the difference between Shadow DOM and Virtual DOM?",answer:`

    The *Shadow DOM* is a browser technology designed primarily for scoping variables and CSS in *web components*. The *Virtual DOM* is a concept implemented by libraries in JavaScript on top of browser APIs.`},27:{question:"27. ## What is React Fiber?",answer:`

    Fiber is the new *reconciliation* engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.`},28:{question:"28. ## What is the main goal of React Fiber?",answer:`

    The goal of *React Fiber* is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.
    
    *from documentation*

    Its main goals are:
      1. Ability to split interruptible work in chunks.
      2. Ability to prioritize, rebase and reuse work in progress.
      3. Ability to yield back and forth between parents and children to support layout in React.
      4. Ability to return multiple elements from render().
      5. Better support for error boundaries.`},29:{question:"29. ## What are controlled components?",answer:`

    A component that controls the input elements within the forms on subsequent user input is called **Controlled Component**, i.e, every state mutation will have an associated handler function.

    For example, to write all the names in uppercase letters, we use handleChange as below,

    \`\`\`javascript
    handleChange(event) {
      this.setState({value: event.target.value.toUpperCase()})
    }
    \`\`\``},30:{question:"30. ## What are uncontrolled components?",answer:`

    The **Uncontrolled Components** are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

    In the below UserProfile component, the \`name\` input is accessed using ref.

    \`\`\`jsx harmony
    class UserProfile extends React.Component {
      constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value)
        event.preventDefault()
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              {'Name:'}
              <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    \`\`\`

    In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form         data is handled by the DOM itself.`},31:{question:"31. ## What is the difference between createElement and cloneElement?",answer:"\n\n    JSX elements will be transpiled to `React.createElement()` functions to create React elements which are going to be used for the object representation of UI. Whereas `cloneElement` is used to clone an element and pass it new props."},32:{question:"32. ## What is Lifting State Up in React?",answer:`

    When several components need to share the same changing data then it is recommended to *lift the shared state up* to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.`},33:{question:"33. ## What are the different phases of component lifecycle?",answer:"\n\n    The component lifecycle has three distinct lifecycle phases:\n\n    1. **Mounting:** The component is ready to mount in the browser DOM. This phase covers initialization from `constructor()`, `getDerivedStateFromProps()`, `render()`, and `componentDidMount()` lifecycle methods.\n\n    2. **Updating:** In this phase, the component gets updated in two ways, sending the new props and updating the state either from `setState()` or `forceUpdate()`. This phase covers `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()` and `componentDidUpdate()` lifecycle methods.\n\n    3. **Unmounting:** In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes `componentWillUnmount()` lifecycle method.\n\n    It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows\n\n    1. **Render** The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.\n\n    2. **Pre-commit** Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the `getSnapshotBeforeUpdate()`.\n\n    3. **Commit** React works with the DOM and executes the final lifecycles respectively `componentDidMount()` for mounting, `componentDidUpdate()` for updating, and `componentWillUnmount()` for unmounting.\n\n    React 16.3+ Phases (or an [interactive version](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/))\n\n    ![phases 16.4+](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/images/phases16.4.png)\n\n    Before React 16.3\n\n    ![phases 16.2](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/images/phases.png)"},34:{question:"34. ## What are the lifecycle methods of React?",answer:`

    Before React 16.3

    - **componentWillMount:** Executed before rendering and is used for App level configuration in your root component.
    - **componentDidMount:** Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
    - **componentWillReceiveProps:** Executed when particular prop updates to trigger state transitions.
    - **shouldComponentUpdate:** Determines if the component will be updated or not. By default it returns \`true\`. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
    - **componentWillUpdate:** Executed before re-rendering the component when there are props & state changes confirmed by \`shouldComponentUpdate()\` which returns true.
    - **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes.
    - **componentWillUnmount:** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

    React 16.3+

    - **getDerivedStateFromProps:** Invoked right before calling \`render()\` and is invoked on *every* render. This exists for rare use cases where you need a derived state. Worth reading [if you need derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
    - **componentDidMount:** Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
    - **shouldComponentUpdate:** Determines if the component will be updated or not. By default, it returns \`true\`. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
    - **getSnapshotBeforeUpdate:** Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into \`componentDidUpdate()\`. This is useful to capture information from the DOM i.e. scroll position.
    - **componentDidUpdate:** Mostly it is used to update the DOM in response to prop or state changes. This will not fire if \`shouldComponentUpdate()\` returns \`false\`.
    - **componentWillUnmount** It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.`},35:{question:"35. ## What are Higher-Order Components?",answer:`

    A *higher-order component* (*HOC*) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

    We call them **pure components** because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

    \`\`\`javascript
    const EnhancedComponent = higherOrderComponent(WrappedComponent)
    \`\`\`

    HOC can be used for many use cases:

    1. Code reuse, logic and bootstrap abstraction.
    2. Render hijacking.
    3. State abstraction and manipulation.
    4. Props manipulation.`},36:{question:"36. ## How to create props proxy for HOC component?",answer:`

    You can add/edit props passed to the component using *props proxy* pattern like this:

    \`\`\`jsx harmony
    function HOC(WrappedComponent) {
      return class Test extends Component {
        render() {
          const newProps = {
            title: 'New Header',
            footer: false,
            showFeatureX: false,
            showFeatureY: true
          }

          return <WrappedComponent {...this.props} {...newProps} />
        }
      }
    }
    \`\`\``},37:{question:"37. ## What is context?",answer:`

    *Context* provides a way to pass data through the component tree without having to pass props down manually at every level.

    For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

    \`\`\`javascript
    const {Provider, Consumer} = React.createContext(defaultValue)
    \`\`\``},38:{question:"38. ## What is children prop?",answer:`

    *Children* is a prop (\`this.props.children\`) that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as \`children\` prop.

    There are several methods available in the React API to work with this prop. These include \`React.Children.map\`, \`React.Children.forEach\`, \`React.Children.count\`, \`React.Children.only\`, \`React.Children.toArray\`.

    A simple usage of children prop looks as below,

    \`\`\`jsx harmony
    const MyDiv = React.createClass({
      render: function() {
        return <div>{this.props.children}</div>
      }
    })

    ReactDOM.render(
      <MyDiv>
        <span>{'Hello'}</span>
        <span>{'World'}</span>
      </MyDiv>,
      node
    )
    \`\`\``},39:{question:"39. ## How to write comments in React?",answer:`

    The comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.

    **Single-line comments:**

    \`\`\`jsx harmony
    <div>
      {/* Single-line comments(In vanilla JavaScript, the single-line comments are represented by double slash(//)) */}
      {\`Welcome \${user}, let's play React\`}
    </div>
    \`\`\`

    **Multi-line comments:**

    \`\`\`jsx harmony
    <div>
      {/* Multi-line comments for more than
       one line */}
      {\`Welcome \${user}, let's play React\`}
    </div>
    \`\`\``},40:{question:"40. ## What is the purpose of using super constructor with props argument?",answer:`

    A child class constructor cannot make use of \`this\` reference until the \`super()\` method has been called. The same applies to ES6 sub-classes as well. The main reason for passing props parameter to \`super()\` call is to access \`this.props\` in your child constructors.

    **Passing props:**

    \`\`\`javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)

        console.log(this.props) // prints { name: 'John', age: 42 }
      }
    }
    \`\`\`

    **Not passing props:**

    \`\`\`javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super()

        console.log(this.props) // prints undefined

        // but props parameter is still available
        console.log(props) // prints { name: 'John', age: 42 }
      }

      render() {
        // no difference outside constructor
        console.log(this.props) // prints { name: 'John', age: 42 }
      }
    }
    \`\`\`

    The above code snippets reveals that \`this.props\` is different only within the constructor. It would be the same outside the constructor.`},41:{question:"41. ## What is reconciliation?",answer:`

    When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called *reconciliation*.`},42:{question:"42. ## How to set state with a dynamic key name?",answer:`

    If you are using ES6 or the Babel transpiler to transform your JSX code then you can accomplish this with *computed property names*.

    \`\`\`javascript
    handleInputChange(event) {
      this.setState({ [event.target.id]: event.target.value })
    }
    \`\`\``},43:{question:"43. ## What would be the common mistake of function being called every time the component renders?",answer:`

    You need to make sure that function is not being called while passing the function as a parameter.

    \`\`\`jsx harmony
    render() {
      // Wrong: handleClick is called instead of passed as a reference!
      return <button onClick={this.handleClick()}>{'Click Me'}</button>
    }
    \`\`\`

    Instead, pass the function itself without parenthesis:

    \`\`\`jsx harmony
    render() {
      // Correct: handleClick is passed as a reference!
      return <button onClick={this.handleClick}>{'Click Me'}</button>
    }
    \`\`\``},44:{question:"44. ## Is lazy function supports named exports?",answer:'\n    No, currently `React.lazy` function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don\u2019t pull unused components.\n    Let\'s take a component file which exports multiple named components,\n    ```javascript\n    // MoreComponents.js\n    export const SomeComponent = /* ... */;\n    export const UnusedComponent = /* ... */;\n    ```\n    and reexport `MoreComponents.js` components in an intermediate file `IntermediateComponent.js`\n    ```javascript\n    // IntermediateComponent.js\n    export { SomeComponent as default } from "./MoreComponents.js";\n    ```\n    Now you can import the module using lazy function as below,\n    ```javascript\n    import React, { lazy } from \'react\';\n    const SomeComponent = lazy(() => import("./IntermediateComponent.js"));\n    ```'},45:{question:"45. ## Why React uses `className` over `class` attribute?",answer:"\n\n    `class` is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses `className` instead of `class`. Pass a string as the `className` prop.\n\n    ```jsx harmony\n    render() {\n      return <span className={'menu navigation-menu'}>{'Menu'}</span>\n    }\n    ```"},46:{question:"46. ## What are fragments?",answer:`

    It's a common pattern in React which is used for a component to return multiple elements. *Fragments* let you group a list of children without adding extra nodes to the DOM.

    \`\`\`jsx harmony
    render() {
      return (
        <React.Fragment>
          <ChildA />
          <ChildB />
          <ChildC />
        </React.Fragment>
      )
    }
    \`\`\`

    There is also a *shorter syntax*, but it's not supported in many tools:

    \`\`\`jsx harmony
    render() {
      return (
        <>
          <ChildA />
          <ChildB />
          <ChildC />
        </>
      )
    }
    \`\`\``},47:{question:"47. ## Why fragments are better than container divs?",answer:`
    Below are the list of reasons,

    1. Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
    2. Some CSS mechanisms like *Flexbox* and *CSS Grid* have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
    3. The DOM Inspector is less cluttered.`},48:{question:"48. ## What are portals in React?",answer:`

    *Portal* is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

    \`\`\`javascript
    ReactDOM.createPortal(child, container)
    \`\`\`

    The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.`},49:{question:"49. ## What are stateless components?",answer:"\n\n    If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the `this` keyword altogether."},50:{question:"50. ## What are stateful components?",answer:`

    If the behaviour of a component is dependent on the *state* of the component then it can be termed as stateful component. These *stateful components* are always *class components* and have a state that gets initialized in the \`constructor\`.

    \`\`\`javascript
    class App extends Component {
      constructor(props) {
        super(props)
        this.state = { count: 0 }
      }

      render() {
        // ...
      }
    }
    \`\`\`
    **React 16.8 Update:**

     Hooks let you use state and other React features without writing classes.

     *The Equivalent Functional Component*

       \`\`\`javascript
        import React, {useState} from 'react';

        const App = (props) => {
          const [count, setCount] = useState(0);

          return (
            // JSX
          )
        }
       \`\`\``},51:{question:"51. ## How to apply validation on props in React?",answer:`

    When the application is running in *development mode*, React will automatically check all props that we set on components to make sure they have *correct type*. If the type is incorrect, React will generate warning messages in the console. It's disabled in *production mode* due to performance impact. The mandatory props are defined with \`isRequired\`.

    The set of predefined prop types:

    1. \`PropTypes.number\`
    2. \`PropTypes.string\`
    3. \`PropTypes.array\`
    4. \`PropTypes.object\`
    5. \`PropTypes.func\`
    6. \`PropTypes.node\`
    7. \`PropTypes.element\`
    8. \`PropTypes.bool\`
    9. \`PropTypes.symbol\`
    10. \`PropTypes.any\`

    We can define \`propTypes\` for \`User\` component as below:

    \`\`\`jsx harmony
    import React from 'react'
    import PropTypes from 'prop-types'

    class User extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }

      render() {
        return (
          <>
            <h1>{\`Welcome, \${this.props.name}\`}</h1>
            <h2>{\`Age, \${this.props.age}\`}</h2>
          </>
        )
      }
    }
    \`\`\`

    **Note:** In React v15.5 *PropTypes* were moved from \`React.PropTypes\` to \`prop-types\` library.

    *The Equivalent Functional Component*

    \`\`\`jsx harmony
    import React from 'react'
    import PropTypes from 'prop-types'
   
    function User({name, age}) {
      return (
        <>
          <h1>{\`Welcome, \${name}\`}</h1>
          <h2>{\`Age, \${age}\`}</h2>
        </>
      )
    }

    User.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }
    \`\`\``},52:{question:"52. ## What are the advantages of React?",answer:`
    Below are the list of main advantages of React,

    1. Increases the application's performance with *Virtual DOM*.
    2. JSX makes code easy to read and write.
    3. It renders both on client and server side (*SSR*).
    4. Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
    5. Easy to write unit and integration tests with tools such as Jest.`},53:{question:"53. ## What are the limitations of React?",answer:`
    Apart from the advantages, there are few limitations of React too,

    1. React is just a view library, not a full framework.
    2. There is a learning curve for beginners who are new to web development.
    3. Integrating React into a traditional MVC framework requires some additional configuration.
    4. The code complexity increases with inline templating and JSX.
    5. Too many smaller components leading to over engineering or boilerplate.`},54:{question:"54. ## What are error boundaries in React v16?",answer:`

    *Error boundaries* are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    A class component becomes an error boundary if it defines a new lifecycle method called \`componentDidCatch(error, info)\` or \`static getDerivedStateFromError() \`:

    \`\`\`jsx harmony
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props)
        this.state = { hasError: false }
      }

      componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info)
      }

      static getDerivedStateFromError(error) {
         // Update state so the next render will show the fallback UI.
         return { hasError: true };
       }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>{'Something went wrong.'}</h1>
        }
        return this.props.children
      }
    }
    \`\`\`

    After that use it as a regular component:

    \`\`\`jsx harmony
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>
    \`\`\``},55:{question:"55. ## How are error boundaries handled in React v15?",answer:"\n\n    React v15 provided very basic support for *error boundaries* using `unstable_handleError` method. It has been renamed to `componentDidCatch` in React v16."},56:{question:"56. ## What are the recommended ways for static type checking?",answer:"\n\n    Normally we use *PropTypes library* (`React.PropTypes` moved to a `prop-types` package since React v15.5) for *type checking* in the React applications. For large code bases, it is recommended to use *static type checkers* such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features."},57:{question:"57. ## What is the use of `react-dom` package?",answer:"\n\n    The `react-dom` package provides *DOM-specific methods* that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:\n\n    1. `render()`\n    2. `hydrate()`\n    3. `unmountComponentAtNode()`\n    4. `findDOMNode()`\n    5. `createPortal()`"},58:{question:"58. ## What is the purpose of render method of `react-dom`?",answer:`

    This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

    \`\`\`
    ReactDOM.render(element, container, [callback])
    \`\`\`

    If the optional callback is provided, it will be executed after the component is rendered or updated.`},59:{question:"59. ## What is ReactDOMServer?",answer:`

    The \`ReactDOMServer\` object enables you to render components to static markup (typically used on node server). This object is mainly used for *server-side rendering* (SSR). The following methods can be used in both the server and browser environments:

    1. \`renderToString()\`
    2. \`renderToStaticMarkup()\`

    For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call \`renderToString\` to render your root component to a string, which you then send as response.

    \`\`\`javascript
    // using Express
    import { renderToString } from 'react-dom/server'
    import MyPage from './MyPage'

    app.get('/', (req, res) => {
      res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>')
      res.write('<div id="content">')
      res.write(renderToString(<MyPage/>))
      res.write('</div></body></html>')
      res.end()
    })
    \`\`\``},60:{question:"60. ## How to use innerHTML in React?",answer:"\n\n    The `dangerouslySetInnerHTML` attribute is React's replacement for using `innerHTML` in the browser DOM. Just like `innerHTML`, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a `__html` object as key and HTML text as value.\n\n    In this example MyComponent uses `dangerouslySetInnerHTML` attribute for setting HTML markup:\n\n    ```jsx harmony\n    function createMarkup() {\n      return { __html: 'First &middot; Second' }\n    }\n\n    function MyComponent() {\n      return <div dangerouslySetInnerHTML={createMarkup()} />\n    }\n    ```"},61:{question:"61. ## How to use styles in React?",answer:`

    The \`style\` attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

    \`\`\`jsx harmony
    const divStyle = {
      color: 'blue',
      backgroundImage: 'url(' + imgUrl + ')'
    };

    function HelloWorldComponent() {
      return <div style={divStyle}>Hello World!</div>
    }
    \`\`\`

    Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. \`node.style.backgroundImage\`).`},62:{question:"62. ## How events are different in React?",answer:`

    Handling events in React elements has some syntactic differences:

    1. React event handlers are named using camelCase, rather than lowercase.
    2. With JSX you pass a function as the event handler, rather than a string.`},63:{question:"63. ## What will happen if you use `setState()` in constructor?",answer:"\n\n    When you use `setState()`, then apart from assigning to the object state React also re-renders the component and all its children. You would get error like this: *Can only update a mounted or mounting component.* So we need to use `this.state` to initialize variables inside constructor."},64:{question:"64. ## What is the impact of indexes as keys?",answer:`

    Keys should be stable, predictable, and unique so that React can keep track of elements.

    In the below code snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do.

    \`\`\`jsx harmony
    {todos.map((todo, index) =>
      <Todo
        {...todo}
        key={index}
      />
    )}
    \`\`\`

    If you use element data for unique key, assuming todo.id is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.

    \`\`\`jsx harmony
    {todos.map((todo) =>
      <Todo {...todo}
        key={todo.id} />
    )}
    \`\`\``},65:{question:"65. ## Is it good to use `setState()` in `componentWillMount()` method?",answer:"\n\n    Yes, it is safe to use `setState()` inside `componentWillMount()` method. But at the same it is recommended to avoid async initialization in `componentWillMount()` lifecycle method. `componentWillMount()` is invoked immediately before mounting occurs. It is called before `render()`, therefore setting state in this method will not trigger a re-render. Avoid introducing any side-effects or subscriptions in this method. We need to make sure async calls for component initialization happened in `componentDidMount()` instead of `componentWillMount()`.\n\n    ```jsx harmony\n    componentDidMount() {\n      axios.get(`api/todos`)\n        .then((result) => {\n          this.setState({\n            messages: [...result.data]\n          })\n        })\n    }\n    ```"},66:{question:"66. ## What will happen if you use props in initial state?",answer:`

    If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created.

    The below component won't display the updated input value:

    \`\`\`jsx harmony
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          records: [],
          inputValue: this.props.inputValue
        };
      }

      render() {
        return <div>{this.state.inputValue}</div>
      }
    }
    \`\`\`

    Using props inside render method will update the value:

    \`\`\`jsx harmony
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          record: []
        }
      }

      render() {
        return <div>{this.props.inputValue}</div>
      }
    }
    \`\`\``},67:{question:"67. ## How do you conditionally render components?",answer:`

    In some cases you want to render different components depending on some state. JSX does not render \`false\` or \`undefined\`, so you can use conditional *short-circuiting* to render a given part of your component only if a certain condition is true.

    \`\`\`jsx harmony
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address &&
          <p>{address}</p>
        }
      </div>
    )
    \`\`\`

    If you need an \`if-else\` condition then use *ternary operator*.

    \`\`\`jsx harmony
    const MyComponent = ({ name, address }) => (
      <div>
        <h2>{name}</h2>
        {address
          ? <p>{address}</p>
          : <p>{'Address is not available'}</p>
        }
      </div>
    )
    \`\`\``},68:{question:"68. ## Why we need to be careful when spreading props on DOM elements?",answer:`

    When we *spread props* we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with \`...rest\` operator, so it will add only required props.

    For example,

    \`\`\`jsx harmony
    const ComponentA = () =>
      <ComponentB isDisplay={true} className={'componentStyle'} />

    const ComponentB = ({ isDisplay, ...domProps }) =>
      <div {...domProps}>{'ComponentB'}</div>
    \`\`\``},69:{question:"69. ## How you use decorators in React?",answer:`

    You can *decorate* your *class* components, which is the same as passing the component into a function. **Decorators** are flexible and readable way of modifying component functionality.

    \`\`\`jsx harmony
    @setTitle('Profile')
    class Profile extends React.Component {
        //....
    }

    /*
      title is a string that will be set as a document title
      WrappedComponent is what our decorator will receive when
      put directly above a component class as seen in the example above
    */
    const setTitle = (title) => (WrappedComponent) => {
      return class extends React.Component {
        componentDidMount() {
          document.title = title
        }

        render() {
          return <WrappedComponent {...this.props} />
        }
      }
    }
    \`\`\`

    **Note:** Decorators are a feature that didn't make it into ES7, but are currently a *stage 2 proposal*.`},70:{question:"70. ## How do you memoize a component?",answer:`

    There are memoize libraries available which can be used on function components.

    For example \`moize\` library can memoize the component in another component.

    \`\`\`jsx harmony
    import moize from 'moize'
    import Component from './components/Component' // this module exports a non-memoized component

    const MemoizedFoo = moize.react(Component)

    const Consumer = () => {
      <div>
        {'I will memoize the following entry:'}
        <MemoizedFoo/>
      </div>
    }
    \`\`\`

    **Update:** Since React v16.6.0, we have a \`React.memo\`. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.

    \`\`\`js
      const MemoComponent = React.memo(function MemoComponent(props) {
        /* render using props */
      });
      OR
      export default React.memo(MyFunctionComponent);
    \`\`\``},71:{question:"71. ## How you implement Server Side Rendering or SSR?",answer:`

    React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.

    \`\`\`jsx harmony
    import ReactDOMServer from 'react-dom/server'
    import App from './App'

    ReactDOMServer.renderToString(<App />)
    \`\`\`

    This method will output the regular HTML as a string, which can be then placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.`},72:{question:"72. ## How to enable production mode in React?",answer:"\n\n    You should use Webpack's `DefinePlugin` method to set `NODE_ENV` to `production`, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify's dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle."},73:{question:"73. ## What is CRA and its benefits?",answer:`

    The \`create-react-app\` CLI tool allows you to quickly create & run React applications with no configuration step.

    Let's create Todo App using *CRA*:

    \`\`\`console
    # Installation
    $ npm install -g create-react-app

    # Create new project
    $ create-react-app todo-app
    $ cd todo-app

    # Build, test and run
    $ npm run build
    $ npm run test
    $ npm start
    \`\`\`
    It includes everything we need to build a React app:

    1. React, JSX, ES6, and Flow syntax support.
    2. Language extras beyond ES6 like the object spread operator.
    3. Autoprefixed CSS, so you don\u2019t need -webkit- or other prefixes.
    4. A fast interactive unit test runner with built-in support for coverage reporting.
    5. A live development server that warns about common mistakes.
    6. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.`},74:{question:"74. ## What is the lifecycle methods order in mounting?",answer:"\n\n    The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.\n\n    1. `constructor()`\n    2. `static getDerivedStateFromProps()`\n    3. `render()`\n    4. `componentDidMount()`"},75:{question:"75. ## What are the lifecycle methods going to be deprecated in React v16?",answer:"\n\n    The following lifecycle methods going to be unsafe coding practices and will be more problematic with async rendering.\n\n    1. `componentWillMount()`\n    2. `componentWillReceiveProps()`\n    3. `componentWillUpdate()`\n\n    Starting with React v16.3 these methods are aliased with `UNSAFE_` prefix, and the unprefixed version will be removed in React v17."},76:{question:"76. ## What is the purpose of `getDerivedStateFromProps()` lifecycle method?",answer:"\n\n    The new static `getDerivedStateFromProps()` lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or `null` to indicate that the new props do not require any state updates.\n\n    ```javascript\n    class MyComponent extends React.Component {\n      static getDerivedStateFromProps(props, state) {\n        // ...\n      }\n    }\n    ```\n\n    This lifecycle method along with `componentDidUpdate()` covers all the use cases of `componentWillReceiveProps()`."},77:{question:"77. ## What is the purpose of `getSnapshotBeforeUpdate()` lifecycle method?",answer:"\n\n    The new `getSnapshotBeforeUpdate()` lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to `componentDidUpdate()`.\n\n    ```javascript\n    class MyComponent extends React.Component {\n      getSnapshotBeforeUpdate(prevProps, prevState) {\n        // ...\n      }\n    }\n    ```\n\n    This lifecycle method along with `componentDidUpdate()` covers all the use cases of `componentWillUpdate()`."},78:{question:"78. ## Do Hooks replace render props and higher order components?",answer:`

    Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.`},79:{question:"79. ## What is the recommended way for naming components?",answer:`

    It is recommended to name the component by reference instead of using \`displayName\`.

    Using \`displayName\` for naming component:

    \`\`\`javascript
    export default React.createClass({
      displayName: 'TodoApp',
      // ...
    })
    \`\`\`

    The **recommended** approach:

    \`\`\`javascript
    export default class TodoApp extends React.Component {
      // ...
    }
    \`\`\`
    also 
    \`\`\`javascript 
    const TodoApp = () => {
     //...
    }
    export default TodoApp;
    \`\`\``},80:{question:"80. ## What is the recommended ordering of methods in component class?",answer:"\n\n    *Recommended* ordering of methods from *mounting* to *render stage*:\n\n    1. `static` methods\n    2. `constructor()`\n    3. `getChildContext()`\n    4. `componentWillMount()`\n    5. `componentDidMount()`\n    6. `componentWillReceiveProps()`\n    7. `shouldComponentUpdate()`\n    8. `componentWillUpdate()`\n    9. `componentDidUpdate()`\n    10. `componentWillUnmount()`\n    11. click handlers or event handlers like `onClickSubmit()` or `onChangeDescription()`\n    12. getter methods for render like `getSelectReason()` or `getFooterContent()`\n    13. optional render methods like `renderNavigation()` or `renderProfilePicture()`\n    14. `render()`"},81:{question:"81. ## What is a switching component?",answer:`

    A *switching component* is a component that renders one of many components. We need to use object to map prop values to components.

    For example, a switching component to display different pages based on \`page\` prop:

    \`\`\`jsx harmony
    import HomePage from './HomePage'
    import AboutPage from './AboutPage'
    import ServicesPage from './ServicesPage'
    import ContactPage from './ContactPage'

    const PAGES = {
      home: HomePage,
      about: AboutPage,
      services: ServicesPage,
      contact: ContactPage
    }

    const Page = (props) => {
      const Handler = PAGES[props.page] || ContactPage

      return <Handler {...props} />
    }

    // The keys of the PAGES object can be used in the prop types to catch dev-time errors.
    Page.propTypes = {
      page: PropTypes.oneOf(Object.keys(PAGES)).isRequired
    }
    \`\`\``},82:{question:"82. ## Why we need to pass a function to setState()?",answer:"\n\n    The reason behind for this is that `setState()` is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after `setState()` is called. That means you should not rely on the current state when calling `setState()`\u200Asince you can't be sure what that state will be. The solution is to  pass a function to `setState()`, with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of `setState()`.\n\n    Let's say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.\n\n    ```javascript\n    // assuming this.state.count === 0\n    this.setState({ count: this.state.count + 1 })\n    this.setState({ count: this.state.count + 1 })\n    this.setState({ count: this.state.count + 1 })\n    // this.state.count === 1, not 3\n    ```\n\n    If we pass a function to `setState()`, the count gets incremented correctly.\n\n    ```javascript\n    this.setState((prevState, props) => ({\n      count: prevState.count + props.increment\n    }))\n    // this.state.count === 3 as expected\n    ```\n\n    **(OR)**\n\n    ### Why function is preferred over object for `setState()`?\n\n     React may batch multiple `setState()` calls into a single update for performance. Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.\n\n     This counter example will fail to update as expected:\n\n     ```javascript\n     // Wrong\n     this.setState({\n       counter: this.state.counter + this.props.increment,\n     })\n     ```\n\n     The preferred approach is to call `setState()` with function rather than object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.\n\n     ```javascript\n     // Correct\n     this.setState((prevState, props) => ({\n       counter: prevState.counter + props.increment\n     }))\n     ```"},83:{question:"83. ## What is strict mode in React?",answer:`

    \`React.StrictMode\` is a useful component for highlighting potential problems in an application. Just like \`<Fragment>\`, \`<StrictMode>\` does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for *development mode* only.

    \`\`\`jsx harmony
    import React from 'react'

    function ExampleApplication() {
      return (
        <div>
          <Header />
          <React.StrictMode>
            <div>
              <ComponentOne />
              <ComponentTwo />
            </div>
          </React.StrictMode>
          <Header />
        </div>
      )
    }
    \`\`\`

    In the example above, the *strict mode* checks apply to \`<ComponentOne>\` and \`<ComponentTwo>\` components only.`},84:{question:"84. ## What are React Mixins?",answer:`

    *Mixins* are a way to totally separate components to have a common functionality. Mixins **should not be used** and can be replaced with *higher-order components* or *decorators*.

    One of the most commonly used mixins is \`PureRenderMixin\`. You might be using it in some components to prevent unnecessary re-renders when the props and state are shallowly equal to the previous props and state:

    \`\`\`javascript
    const PureRenderMixin = require('react-addons-pure-render-mixin')

    const Button = React.createClass({
      mixins: [PureRenderMixin],
      // ...
    })
    \`\`\`
    <!-- TODO: mixins are deprecated -->`},85:{question:"85. ## Why is `isMounted()` an anti-pattern and what is the proper solution?",answer:"\n\n    The primary use case for `isMounted()` is to avoid calling `setState()` after a component has been unmounted, because it will emit a warning.\n\n    ```javascript\n    if (this.isMounted()) {\n      this.setState({...})\n    }\n    ```\n\n    Checking `isMounted()` before calling `setState()` does eliminate the warning, but it also defeats the purpose of the warning. Using `isMounted()` is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.\n\n    An optimal solution would be to find places where `setState()` might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in `componentWillUnmount()`, prior to unmounting."},86:{question:"86. ## What are the Pointer Events supported in React?",answer:"\n\n    *Pointer Events* provide a unified way of handling all input events. In the old days we had a mouse and respective event listeners to handle them but nowadays we have many devices which don't correlate to having a mouse, like phones with touch surface or pens. We need to remember that these events will only work in browsers that support the *Pointer Events* specification.\n\n    The following event types are now available in *React DOM*:\n\n    1. `onPointerDown`\n    2. `onPointerMove`\n    3. `onPointerUp`\n    4. `onPointerCancel`\n    5. `onGotPointerCapture`\n    6. `onLostPointerCapture`\n    7. `onPointerEnter`\n    8. `onPointerLeave`\n    9. `onPointerOver`\n    10. `onPointerOut`"},87:{question:"87. ## Why should component names start with capital letter?",answer:`

    If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.
    \`\`\`jsx harmony
    class SomeComponent extends Component {
     // Code goes here
    }
    \`\`\`
    You can define component class which name starts with lowercase letter, but when it's imported it should have capital letter. Here lowercase is fine:

    \`\`\`jsx harmony
    class myComponent extends Component {
      render() {
        return <div />
      }
    }

    export default myComponent
    \`\`\`

    While when imported in another file it should start with capital letter:

    \`\`\`jsx harmony
    import MyComponent from './myComponent'
    \`\`\`


    #### What are the exceptions on React component naming?

    The component names should start with an uppercase letter but there are few exceptions to this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names.
    For example, the below tag can be compiled to a valid component,

    \`\`\`jsx harmony
         render() {
              return (
                <obj.component/> // \`React.createElement(obj.component)\`
              )
        }
    \`\`\``},88:{question:"88. ## Are custom DOM attributes supported in React v16?",answer:`

    Yes. In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn't recognize, React would just skip it.

    For example, let's take a look at the below attribute:

    \`\`\`jsx harmony
    <div mycustomattribute={'something'} />
    \`\`\`

    Would render an empty div to the DOM with React v15:

    \`\`\`html
    <div />
    \`\`\`

    In React v16 any unknown attributes will end up in the DOM:

    \`\`\`html
    <div mycustomattribute='something' />
    \`\`\`

    This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.`},89:{question:"89. ## What is the difference between constructor and getInitialState?",answer:`

    You should initialize state in the constructor when using ES6 classes, and \`getInitialState()\` method when using \`React.createClass()\`.

    **Using ES6 classes:**

    \`\`\`javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)
        this.state = { /* initial state */ }
      }
    }
    \`\`\`

    **Using \`React.createClass()\`:**

    \`\`\`javascript
    const MyComponent = React.createClass({
      getInitialState() {
        return { /* initial state */ }
      }
    })
    \`\`\`

    **Note:** \`React.createClass()\` is deprecated and removed in React v16. Use plain JavaScript classes instead.`},90:{question:"90. ## Can you force a component to re-render without calling setState?",answer:"\n\n    By default, when your component's state or props change, your component will re-render. If your `render()` method depends on some other data, you can tell React that the component needs re-rendering by calling `forceUpdate()`.\n\n    ```javascript\n    component.forceUpdate(callback)\n    ```\n\n    It is recommended to avoid all uses of `forceUpdate()` and only read from `this.props` and `this.state` in `render()`."},91:{question:"91. ## What is the difference between `super()` and `super(props)` in React using ES6 classes?",answer:"\n\n    When you want to access `this.props` in `constructor()` then you should pass props to `super()` method.\n\n    **Using `super(props)`:**\n\n    ```javascript\n    class MyComponent extends React.Component {\n      constructor(props) {\n        super(props)\n        console.log(this.props) // { name: 'John', ... }\n      }\n    }\n    ```\n\n    **Using `super()`:**\n\n    ```javascript\n    class MyComponent extends React.Component {\n      constructor(props) {\n        super()\n        console.log(this.props) // undefined\n      }\n    }\n    ```\n\n    Outside `constructor()` both will display same value for `this.props`."},92:{question:"92. ## How to loop inside JSX?",answer:`

    You can simply use \`Array.prototype.map\` with ES6 *arrow function* syntax.

    For example, the \`items\` array of objects is mapped into an array of components:

    \`\`\`jsx harmony
    <tbody>
      {items.map(item => <SomeComponent key={item.id} name={item.name} />)}
    </tbody>
    \`\`\`

    But you can't iterate using \`for\` loop:

    \`\`\`jsx harmony
    <tbody>
      for (let i = 0; i < items.length; i++) {
        <SomeComponent key={items[i].id} name={items[i].name} />
      }
    </tbody>
    \`\`\`

    This is because JSX tags are transpiled into *function calls*, and you can't use statements inside expressions. This may change thanks to \`do\` expressions which are *stage 1 proposal*.`},93:{question:"93. ## How do you access props in attribute quotes?",answer:"\n\n    React (or JSX) doesn't support variable interpolation inside an attribute value. The below representation won't work:\n\n    ```jsx harmony\n    <img className='image' src='images/{this.props.image}' />\n    ```\n\n    But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:\n\n    ```jsx harmony\n    <img className='image' src={'images/' + this.props.image} />\n    ```\n\n    Using *template strings* will also work:\n\n    ```jsx harmony\n    <img className='image' src={`images/${this.props.image}`} />\n    ```"},94:{question:"94. ## What is React proptype array with shape?",answer:`

    If you want to pass an array of objects to a component with a particular shape then use \`React.PropTypes.shape()\` as an argument to \`React.PropTypes.arrayOf()\`.

    \`\`\`javascript
    ReactComponent.propTypes = {
      arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape({
        color: React.PropTypes.string.isRequired,
        fontSize: React.PropTypes.number.isRequired
      })).isRequired
    }
    \`\`\``},95:{question:"95. ## How to conditionally apply class attributes?",answer:"\n\n    You shouldn't use curly braces inside quotes because it is going to be evaluated as a string.\n\n    ```jsx harmony\n    <div className=\"btn-panel {this.props.visible ? 'show' : 'hidden'}\">\n    ```\n\n    Instead you need to move curly braces outside (don't forget to include spaces between class names):\n\n    ```jsx harmony\n    <div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>\n    ```\n\n    *Template strings* will also work:\n\n    ```jsx harmony\n    <div className={`btn-panel ${this.props.visible ? 'show' : 'hidden'}`}>\n    ```"},96:{question:"96. ## What is the difference between React and ReactDOM?",answer:"\n\n    The `react` package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The `react-dom` package contains `ReactDOM.render()`, and in `react-dom/server` we have *server-side rendering* support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`."},97:{question:"97. ## Why ReactDOM is separated from React?",answer:"\n\n    The React team worked on extracting all DOM-related features into a separate library called *ReactDOM*. React v0.14 is the first release in which the libraries are split. By looking at some of the packages, `react-native`, `react-art`, `react-canvas`, and `react-three`, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.\n\n    To build more environments that React can render to, React team planned to split the main React package into two: `react` and `react-dom`. This paves the way to writing components that can be shared between the web version of React and React Native."},98:{question:"98. ## How to use React label element?",answer:"\n\n    If you try to render a `<label>` element bound to a text input using the standard `for` attribute, then it produces HTML missing that attribute and prints a warning to the console.\n\n    ```jsx harmony\n    <label for={'user'}>{'User'}</label>\n    <input type={'text'} id={'user'} />\n    ```\n\n    Since `for` is a reserved keyword in JavaScript, use `htmlFor` instead.\n\n    ```jsx harmony\n    <label htmlFor={'user'}>{'User'}</label>\n    <input type={'text'} id={'user'} />\n    ```"},99:{question:"99. ## How to combine multiple inline style objects?",answer:"\n\n    You can use *spread operator* in regular React:\n\n    ```jsx harmony\n     <button style={{...styles.panel.button, ...styles.panel.submitButton}}>{'Submit'}</button>\n    ```\n\n    If you're using React Native then you can use the array notation:\n\n    ```jsx harmony\n    <button style={[styles.panel.button, styles.panel.submitButton]}>{'Submit'}</button>\n    ```"},100:{question:"100. ## How to re-render the view when the browser is resized?",answer:`

     You can listen to the \`resize\` event in \`componentDidMount()\` and then update the dimensions (\`width\` and \`height\`). You should remove the listener in \`componentWillUnmount()\` method.

     \`\`\`javascript
     class WindowDimensions extends React.Component {
       constructor(props){
         super(props);
         this.updateDimensions = this.updateDimensions.bind(this);
       }
        
       componentWillMount() {
         this.updateDimensions()
       }

       componentDidMount() {
         window.addEventListener('resize', this.updateDimensions)
       }

       componentWillUnmount() {
         window.removeEventListener('resize', this.updateDimensions)
       }

       updateDimensions() {
         this.setState({width: window.innerWidth, height: window.innerHeight})
       }

       render() {
         return <span>{this.state.width} x {this.state.height}</span>
       }
     }
     \`\`\``},101:{question:"101. ## What is the difference between `setState()` and `replaceState()` methods?",answer:"\n\n     When you use `setState()` the current and previous states are merged. `replaceState()` throws out the current state, and replaces it with only what you provide. Usually `setState()` is used unless you really need to remove all previous keys for some reason. You can also set state to `false`/`null` in `setState()` instead of using `replaceState()`."},102:{question:"102. ## How to listen to state changes?",answer:"\n\n     The `componentDidUpdate` lifecycle method will be called when state changes. You can compare provided state and props values with current state and props to determine if something meaningful changed.\n\n     ```\n     componentDidUpdate(object prevProps, object prevState)\n     ```\n\n     **Note:** The previous releases of ReactJS also uses `componentWillUpdate(object nextProps, object nextState)` for state changes. It has been deprecated in latest releases."},103:{question:"103. ## What is the recommended approach of removing an array element in React state?",answer:`

     The better approach is to use \`Array.prototype.filter()\` method.

     For example, let's create a \`removeItem()\` method for updating the state.

     \`\`\`javascript
     removeItem(index) {
       this.setState({
         data: this.state.data.filter((item, i) => i !== index)
       })
     }
     \`\`\``},104:{question:"104. ## Is it possible to use React without rendering HTML?",answer:`

     It is possible with latest version (>=16.2). Below are the possible options:

     \`\`\`jsx harmony
     render() {
       return false
     }
     \`\`\`

     \`\`\`jsx harmony
     render() {
       return null
     }
     \`\`\`

     \`\`\`jsx harmony
     render() {
       return []
     }
     \`\`\`

     \`\`\`jsx harmony
     render() {
       return <React.Fragment></React.Fragment>
     }
     \`\`\`

     \`\`\`jsx harmony
     render() {
       return <></>
     }
     \`\`\`

     Returning \`undefined\` won't work.`},105:{question:"105. ## How to pretty print JSON with React?",answer:`

     We can use \`<pre>\` tag so that the formatting of the \`JSON.stringify()\` is retained:

     \`\`\`jsx harmony
     const data = { name: 'John', age: 42 }

     class User extends React.Component {
       render() {
         return (
           <pre>
             {JSON.stringify(data, null, 2)}
           </pre>
         )
       }
     }

     React.render(<User />, document.getElementById('container'))
     \`\`\``},106:{question:"106. ## Why you can't update props in React?",answer:`

     The React philosophy is that props should be *immutable* and *top-down*. This means that a parent can send any prop values to a child, but the child can't modify received props.`},107:{question:"107. ## How to focus an input element on page load?",answer:`

     You can do it by creating *ref* for \`input\` element and using it in \`componentDidMount()\`:

     \`\`\`jsx harmony
     class App extends React.Component{
       componentDidMount() {
         this.nameInput.focus()
       }

       render() {
         return (
           <div>
             <input
               defaultValue={'Won\\'t focus'}
             />
             <input
               ref={(input) => this.nameInput = input}
               defaultValue={'Will focus'}
             />
           </div>
         )
       }
     }

     ReactDOM.render(<App />, document.getElementById('app'))
     \`\`\`

     Also in Functional component (react 16.08 and above)
     
      \`\`\`jsx harmony
      import React, {useEffect, useRef} from 'react';

      const App = () => {
        const inputElRef = useRef(null)
        
        useEffect(()=>{
          inputElRef.current.focus()
        }, [])
        
        return(
          <div>
            <input
              defaultValue={'Won\\'t focus'}
            />
            <input
              ref={inputElRef}
              defaultValue={'Will focus'}
            />
          </div>
        )
      }

      ReactDOM.render(<App />, document.getElementById('app'))
      \`\`\``},108:{question:"108. ## What are the possible ways of updating objects in state?",answer:`

     1. **Calling \`setState()\` with an object to merge with state:**

         * Using \`Object.assign()\` to create a copy of the object:

             \`\`\`javascript
             const user = Object.assign({}, this.state.user, { age: 42 })
             this.setState({ user })
             \`\`\`

         * Using *spread operator*:

             \`\`\`javascript
             const user = { ...this.state.user, age: 42 }
             this.setState({ user })
             \`\`\`

     2. **Calling \`setState()\` with a function:**

         \`\`\`javascript
         this.setState(prevState => ({
           user: {
             ...prevState.user,
             age: 42
           }
         }))
         \`\`\``},109:{question:"109. ## How can we find the version of React at runtime in the browser?",answer:"\n\n     You can use `React.version` to get the version.\n\n     ```jsx harmony\n     const REACT_VERSION = React.version\n\n     ReactDOM.render(\n       <div>{`React version: ${REACT_VERSION}`}</div>,\n       document.getElementById('app')\n     )\n     ```"},110:{question:"110. ## What are the approaches to include polyfills in your `create-react-app`?",answer:"\n\n     There are approaches to include polyfills in create-react-app,\n\n     1. **Manual import from `core-js`:**\n\n         Create a file called (something like) `polyfills.js` and import it into root `index.js` file. Run `npm install core-js` or `yarn add core-js` and import your specific required features.\n\n         ```javascript\n         import 'core-js/fn/array/find'\n         import 'core-js/fn/array/includes'\n         import 'core-js/fn/number/is-nan'\n         ```\n\n     2. **Using Polyfill service:**\n\n         Use the polyfill.io CDN to retrieve custom, browser-specific polyfills by adding this line to `index.html`:\n\n         ```html\n         <script src='https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes'><\/script>\n         ```\n\n         In the above script we had to explicitly request the `Array.prototype.includes` feature as it is not included in the default feature set."},111:{question:"111. ## How to use https instead of http in create-react-app?",answer:'\n\n     You just need to use `HTTPS=true` configuration. You can edit your `package.json` scripts section:\n\n     ```json\n     "scripts": {\n       "start": "set HTTPS=true && react-scripts start"\n     }\n     ```\n\n     or just run `set HTTPS=true && npm start`'},112:{question:"112. ## How to avoid using relative path imports in create-react-app?",answer:"\n\n     Create a file called `.env` in the project root and write the import path:\n\n     ```\n     NODE_PATH=src/app\n     ```\n\n     After that restart the development server. Now you should be able to import anything inside `src/app` without relative paths."},113:{question:"113. ## How to add Google Analytics for React Router?",answer:`

     Add a listener on the \`history\` object to record each page view:

     \`\`\`javascript
     history.listen(function (location) {
       window.ga('set', 'page', location.pathname + location.search)
       window.ga('send', 'pageview', location.pathname + location.search)
     })
     \`\`\``},114:{question:"114. ## How to update a component every second?",answer:`

     You need to use \`setInterval()\` to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

     \`\`\`javascript
     componentDidMount() {
       this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
     }

     componentWillUnmount() {
       clearInterval(this.interval)
     }
     \`\`\``},115:{question:"115. ## How do you apply vendor prefixes to inline styles in React?",answer:`

     React *does not* apply *vendor prefixes* automatically. You need to add vendor prefixes manually.

     \`\`\`jsx harmony
     <div style={{
       transform: 'rotate(90deg)',
       WebkitTransform: 'rotate(90deg)', // note the capital 'W' here
       msTransform: 'rotate(90deg)' // 'ms' is the only lowercase vendor prefix
     }} />
     \`\`\``},116:{question:"116. ## How to import and export components using React and ES6?",answer:`

     You should use default for exporting the components

     \`\`\`jsx harmony
     import React from 'react'
     import User from 'user'

     export default class MyProfile extends React.Component {
       render(){
         return (
           <User type="customer">
             //...
           </User>
         )
       }
     }
     \`\`\`

     With the export specifier, the MyProfile is going to be the member and exported to this module and the same can be imported without mentioning the name in other components.`},117:{question:"117. ## Why is a component constructor called only once?",answer:`

     React's *reconciliation* algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it's the same component as before, so reuses the previous instance rather than creating a new one.`},118:{question:"118. ## How to define constants in React?",answer:"\n\n     You can use ES7 `static` field to define constant.\n\n     ```javascript\n     class MyComponent extends React.Component {\n       static DEFAULT_PAGINATION = 10\n     }\n     ```"},119:{question:"119. ## How to programmatically trigger click event in React?",answer:"\n\n     You could use the ref prop to acquire a reference to the underlying `HTMLInputElement` object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the `HTMLElement.click` method.\n\n     This can be done in two steps:\n\n     1. Create ref in render method:\n\n         ```jsx harmony\n         <input ref={input => this.inputElement = input} />\n         ```\n\n     2. Apply click event in your event handler:\n\n         ```javascript\n         this.inputElement.click()\n         ```"},120:{question:"120. ## Is it possible to use async/await in plain React?",answer:"\n\n     If you want to use `async`/`await` in React, you will need *Babel* and [transform-async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator) plugin. React Native ships with Babel and a set of transforms."},121:{question:"121. ## What are the common folder structures for React?",answer:`

     There are two common practices for React project file structure.

     1. **Grouping by features or routes:**

         One common way to structure projects is locate CSS, JS, and tests together, grouped by feature or route.

         \`\`\`
         common/
         \u251C\u2500 Avatar.js
         \u251C\u2500 Avatar.css
         \u251C\u2500 APIUtils.js
         \u2514\u2500 APIUtils.test.js
         feed/
         \u251C\u2500 index.js
         \u251C\u2500 Feed.js
         \u251C\u2500 Feed.css
         \u251C\u2500 FeedStory.js
         \u251C\u2500 FeedStory.test.js
         \u2514\u2500 FeedAPI.js
         profile/
         \u251C\u2500 index.js
         \u251C\u2500 Profile.js
         \u251C\u2500 ProfileHeader.js
         \u251C\u2500 ProfileHeader.css
         \u2514\u2500 ProfileAPI.js
         \`\`\`

     2. **Grouping by file type:**

         Another popular way to structure projects is to group similar files together.

         \`\`\`
         api/
         \u251C\u2500 APIUtils.js
         \u251C\u2500 APIUtils.test.js
         \u251C\u2500 ProfileAPI.js
         \u2514\u2500 UserAPI.js
         components/
         \u251C\u2500 Avatar.js
         \u251C\u2500 Avatar.css
         \u251C\u2500 Feed.js
         \u251C\u2500 Feed.css
         \u251C\u2500 FeedStory.js
         \u251C\u2500 FeedStory.test.js
         \u251C\u2500 Profile.js
         \u251C\u2500 ProfileHeader.js
         \u2514\u2500 ProfileHeader.css
         \`\`\``},122:{question:"122. ## What are the popular packages for animation?",answer:`

     *React Transition Group* and *React Motion* are popular animation packages in React ecosystem.`},123:{question:"123. ## What is the benefit of styles modules?",answer:`

     It is recommended to avoid hard coding style values in components. Any values that are likely to be used across different UI components should be extracted into their own modules.

     For example, these styles could be extracted into a separate component:

     \`\`\`javascript
     export const colors = {
       white,
       black,
       blue
     }

     export const space = [
       0,
       8,
       16,
       32,
       64
     ]
     \`\`\`

     And then imported individually in other components:

     \`\`\`javascript
     import { space, colors } from './styles'
     \`\`\``},124:{question:"124. ## What are the popular React-specific linters?",answer:"\n\n     ESLint is a popular JavaScript linter. There are plugins available that analyse specific code styles. One of the most common for React is an npm package called `eslint-plugin-react`. By default, it will check a number of best practices, with rules checking things from keys in iterators to a complete set of prop types.\n\n     Another popular plugin is `eslint-plugin-jsx-a11y`, which will help fix common issues with accessibility. As JSX offers slightly different syntax to regular HTML, issues with `alt` text and `tabindex`, for example, will not be picked up by regular plugins."},125:{question:"125. ## How to make AJAX call and in which component lifecycle methods should I make an AJAX call?",answer:`

     You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in \`fetch\`. You should fetch data in the \`componentDidMount()\` lifecycle method. This is so you can use \`setState()\` to update your component when the data is retrieved.

     For example, the employees list fetched from API and set local state:

     \`\`\`jsx harmony
     class MyComponent extends React.Component {
       constructor(props) {
         super(props)
         this.state = {
           employees: [],
           error: null
         }
       }

       componentDidMount() {
         fetch('https://api.example.com/items')
           .then(res => res.json())
           .then(
             (result) => {
               this.setState({
                 employees: result.employees
               })
             },
             (error) => {
               this.setState({ error })
             }
           )
       }

       render() {
         const { error, employees } = this.state
         if (error) {
           return <div>Error: {error.message}</div>;
         } else {
           return (
             <ul>
               {employees.map(employee => (
                 <li key={employee.name}>
                   {employee.name}-{employee.experience}
                 </li>
               ))}
             </ul>
           )
         }
       }
     }
     \`\`\``},126:{question:"126. ## What are render props?",answer:`

     **Render Props** is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

     \`\`\`jsx harmony
     <DataProvider render={data => (
       <h1>{\`Hello \${data.target}\`}</h1>
     )}/>
     \`\`\`

     Libraries such as React Router and DownShift are using this pattern.

## React Router`},127:{question:"127. ## What is React Router?",answer:`

     React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.`},128:{question:"128. ## How React Router is different from history library?",answer:"\n\n     React Router is a wrapper around the `history` library which handles interaction with the browser's `window.history` with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node."},129:{question:"129. ## What are the `<Router>` components of React Router v4?",answer:"\n\n     React Router v4 provides below 3 `<Router>` components:\n\n     1. `<BrowserRouter>`\n     2. `<HashRouter>`\n     3. `<MemoryRouter>`\n\n     The above components will create *browser*, *hash*, and *memory* history instances. React Router v4 makes the properties and methods of the `history` instance associated with your router available through the context in the `router` object."},130:{question:"130. ## What is the purpose of `push()` and `replace()` methods of `history`?",answer:"\n\n     A history instance has two methods for navigation purpose.\n\n     1. `push()`\n     2. `replace()`\n\n     If you think of the history as an array of visited locations, `push()` will add a new location to the array and `replace()` will replace the current location in the array with the new one."},131:{question:"131. ## How do you programmatically navigate using React Router v4?",answer:`

     There are three different ways to achieve programmatic routing/navigation within components.

     1. **Using the \`withRouter()\` higher-order function:**

         The \`withRouter()\` higher-order function will inject the history object as a prop of the component. This object provides \`push()\` and \`replace()\` methods to avoid the usage of context.

         \`\`\`jsx harmony
         import { withRouter } from 'react-router-dom' // this also works with 'react-router-native'

         const Button = withRouter(({ history }) => (
           <button
             type='button'
             onClick={() => { history.push('/new-location') }}
           >
             {'Click Me!'}
           </button>
         ))
         \`\`\`

     2. **Using \`<Route>\` component and render props pattern:**

         The \`<Route>\` component passes the same props as \`withRouter()\`, so you will be able to access the history methods through the history prop.

         \`\`\`jsx harmony
         import { Route } from 'react-router-dom'

         const Button = () => (
           <Route render={({ history }) => (
             <button
               type='button'
               onClick={() => { history.push('/new-location') }}
             >
               {'Click Me!'}
             </button>
           )} />
         )
         \`\`\`

     3. **Using context:**

         This option is not recommended and treated as unstable API.

         \`\`\`jsx harmony
         const Button = (props, context) => (
           <button
             type='button'
             onClick={() => {
               context.history.push('/new-location')
             }}
           >
             {'Click Me!'}
           </button>
         )

         Button.contextTypes = {
           history: React.PropTypes.shape({
             push: React.PropTypes.func.isRequired
           })
         }
         \`\`\``},132:{question:"132. ## How to get query parameters in React Router v4?",answer:`

     The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.

     \`\`\`javascript
     const queryString = require('query-string');
     const parsed = queryString.parse(props.location.search);
     \`\`\`

     You can also use \`URLSearchParams\` if you want something native:

     \`\`\`javascript
     const params = new URLSearchParams(props.location.search)
     const foo = params.get('name')
     \`\`\`

     You should use a *polyfill* for IE11.`},133:{question:'133. ## Why you get "Router may have only one child element" warning?',answer:"\n\n     You have to wrap your Route's in a `<Switch>` block because `<Switch>` is unique in that it renders a route exclusively.\n\n     At first you need to add `Switch` to your imports:\n\n     ```javascript\n     import { Switch, Router, Route } from 'react-router'\n     ```\n\n     Then define the routes within `<Switch>` block:\n\n     ```jsx harmony\n     <Router>\n       <Switch>\n         <Route {/* ... */} />\n         <Route {/* ... */} />\n       </Switch>\n     </Router>\n     ```"},134:{question:"134. ## How to pass params to `history.push` method in React Router v4?",answer:"\n\n     While navigating you can pass props to the `history` object:\n\n     ```javascript\n     this.props.history.push({\n       pathname: '/template',\n       search: '?name=sudheer',\n       state: { detail: response.data }\n     })\n     ```\n\n     The `search` property is used to pass query params in `push()` method."},135:{question:"135. ## How to implement *default* or *NotFound* page?",answer:'\n\n     A `<Switch>` renders the first child `<Route>` that matches. A `<Route>` with no path always matches. So you just need to simply drop path attribute as below\n\n     ```jsx harmony\n     <Switch>\n       <Route exact path="/" component={Home}/>\n       <Route path="/user" component={User}/>\n       <Route component={NotFound} />\n     </Switch>\n     ```'},136:{question:"136. ## How to get history on React Router v4?",answer:`
     Below are the list of steps to get history object on React Router v4,

     1. Create a module that exports a \`history\` object and import this module across the project.

         For example, create \`history.js\` file:

         \`\`\`javascript
         import { createBrowserHistory } from 'history'

         export default createBrowserHistory({
           /* pass a configuration object here if needed */
         })
         \`\`\`

     2. You should use the \`<Router>\` component instead of built-in routers. Import the above \`history.js\` inside \`index.js\` file:

         \`\`\`jsx harmony
         import { Router } from 'react-router-dom'
         import history from './history'
         import App from './App'

         ReactDOM.render((
           <Router history={history}>
             <App />
           </Router>
         ), holder)
         \`\`\`

     3. You can also use push method of \`history\` object similar to built-in history object:

         \`\`\`javascript
         // some-other-file.js
         import history from './history'

         history.push('/go-here')
         \`\`\``},137:{question:"137. ## How to perform automatic redirect after login?",answer:`

     The \`react-router\` package provides \`<Redirect>\` component in React Router. Rendering a \`<Redirect>\` will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.

     \`\`\`javascript
     import React, { Component } from 'react'
     import { Redirect } from 'react-router'

     export default class LoginComponent extends Component {
       render() {
         if (this.state.isLoggedIn === true) {
           return <Redirect to="/your/redirect/page" />
         } else {
           return <div>{'Login Please'}</div>
         }
       }
     }
     \`\`\`

## React Internationalization`},138:{question:"138. ## What is React Intl?",answer:`

     The *React Intl* library makes internationalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of *FormatJS* which provides bindings to React via its components and API.`},139:{question:"139. ## What are the main features of React Intl?",answer:`
     Below are the main features of React Intl,

        1. Display numbers with separators.
        2. Display dates and times correctly.
        3. Display dates relative to "now".
        4. Pluralize labels in strings.
        5. Support for 150+ languages.
        6. Runs in the browser and Node.
        7. Built on standards.`},140:{question:"140. ## What are the two ways of formatting in React Intl?",answer:`

     The library provides two ways to format strings, numbers, and dates:

     1. **Using react components:**

         \`\`\`jsx harmony
         <FormattedMessage
           id={'account'}
           defaultMessage={'The amount is less than minimum balance.'}
         />
         \`\`\`

     2. **Using an API:**

         \`\`\`javascript
         const messages = defineMessages({
           accountMessage: {
             id: 'account',
             defaultMessage: 'The amount is less than minimum balance.',
           }
         })

         formatMessage(messages.accountMessage)
         \`\`\``},141:{question:"141. ## How to use `<FormattedMessage>` as placeholder using React Intl?",answer:"\n\n     The `<Formatted... />` components from `react-intl` return elements, not plain text, so they can't be used for placeholders, alt text, etc. In that case, you should use lower level API `formatMessage()`. You can inject the `intl` object into your component using `injectIntl()` higher-order component and then format the message using `formatMessage()` available on that object.\n\n     ```jsx harmony\n     import React from 'react'\n     import { injectIntl, intlShape } from 'react-intl'\n\n     const MyComponent = ({ intl }) => {\n       const placeholder = intl.formatMessage({id: 'messageId'})\n       return <input placeholder={placeholder} />\n     }\n\n     MyComponent.propTypes = {\n       intl: intlShape.isRequired\n     }\n\n     export default injectIntl(MyComponent)\n     ```"},142:{question:"142. ## How to access current locale with React Intl?",answer:`

     You can get the current locale in any component of your application using \`injectIntl()\`:

     \`\`\`jsx harmony
     import { injectIntl, intlShape } from 'react-intl'

     const MyComponent = ({ intl }) => (
       <div>{\`The current locale is \${intl.locale}\`}</div>
     )

     MyComponent.propTypes = {
       intl: intlShape.isRequired
     }

     export default injectIntl(MyComponent)
     \`\`\``},143:{question:"143. ## How to format date using React Intl?",answer:`

     The \`injectIntl()\` higher-order component will give you access to the \`formatDate()\` method via the props in your component. The method is used internally by instances of \`FormattedDate\` and it returns the string representation of the formatted date.

     \`\`\`jsx harmony
     import { injectIntl, intlShape } from 'react-intl'

     const stringDate = this.props.intl.formatDate(date, {
       year: 'numeric',
       month: 'numeric',
       day: 'numeric'
     })

     const MyComponent = ({intl}) => (
       <div>{\`The formatted date is \${stringDate}\`}</div>
     )

     MyComponent.propTypes = {
       intl: intlShape.isRequired
     }

     export default injectIntl(MyComponent)
     \`\`\`

## React Testing`},144:{question:"144. ## What is Shallow Renderer in React testing?",answer:`

     *Shallow rendering* is useful for writing unit test cases in React. It lets you render a component *one level deep* and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered.

     For example, if you have the following component:

     \`\`\`javascript
     function MyComponent() {
       return (
         <div>
           <span className={'heading'}>{'Title'}</span>
           <span className={'description'}>{'Description'}</span>
         </div>
       )
     }
     \`\`\`

     Then you can assert as follows:

     \`\`\`jsx harmony
     import ShallowRenderer from 'react-test-renderer/shallow'

     // in your test
     const renderer = new ShallowRenderer()
     renderer.render(<MyComponent />)

     const result = renderer.getRenderOutput()

     expect(result.type).toBe('div')
     expect(result.props.children).toEqual([
       <span className={'heading'}>{'Title'}</span>,
       <span className={'description'}>{'Description'}</span>
     ])
     \`\`\``},145:{question:"145. ## What is `TestRenderer` package in React?",answer:`

     This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or \`jsdom\`.

     \`\`\`jsx harmony
     import TestRenderer from 'react-test-renderer'

     const Link = ({page, children}) => <a href={page}>{children}</a>

     const testRenderer = TestRenderer.create(
       <Link page={'https://www.facebook.com/'}>{'Facebook'}</Link>
     )

     console.log(testRenderer.toJSON())
     // {
     //   type: 'a',
     //   props: { href: 'https://www.facebook.com/' },
     //   children: [ 'Facebook' ]
     // }
     \`\`\``},146:{question:"146. ## What is the purpose of ReactTestUtils package?",answer:"\n\n     *ReactTestUtils* are provided in the `with-addons` package and allow you to perform actions against a simulated DOM for the purpose of unit testing."},147:{question:"147. ## What is Jest?",answer:"\n\n     *Jest* is a JavaScript unit testing framework created by Facebook based on Jasmine and provides automated mock creation and a `jsdom` environment. It's often used for testing components."},148:{question:"148. ## What are the advantages of Jest over Jasmine?",answer:`

     There are couple of advantages compared to Jasmine:

     - Automatically finds tests to execute in your source code.
     - Automatically mocks dependencies when running your tests.
     - Allows you to test asynchronous code synchronously.
     - Runs your tests with a fake DOM implementation (via \`jsdom\`) so that your tests can be run on the command line.
     - Runs tests in parallel processes so that they finish sooner.`},149:{question:"149. ## Give a simple example of Jest test case",answer:`

     Let's write a test for a function that adds two numbers in \`sum.js\` file:

     \`\`\`javascript
     const sum = (a, b) => a + b

     export default sum
     \`\`\`

     Create a file named \`sum.test.js\` which contains actual test:

     \`\`\`javascript
     import sum from './sum'

     test('adds 1 + 2 to equal 3', () => {
       expect(sum(1, 2)).toBe(3)
     })
     \`\`\`

     And then add the following section to your \`package.json\`:

     \`\`\`json
     {
       "scripts": {
         "test": "jest"
       }
     }
     \`\`\`

     Finally, run \`yarn test\` or \`npm test\` and Jest will print a result:

     \`\`\`console
     $ yarn test
     PASS ./sum.test.js
     \u2713 adds 1 + 2 to equal 3 (2ms)
     \`\`\`

## React Redux`},150:{question:"150. ## What is flux?",answer:`

     *Flux* is an *application design paradigm* used as a replacement for the more traditional MVC pattern. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook uses this pattern internally when working with React.

     The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

     ![flux](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/images/flux.png)`},151:{question:"151. ## What is Redux?",answer:`

     *Redux* is a predictable state container for JavaScript apps based on the *Flux design pattern*. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.`},152:{question:"152. ## What are the core principles of Redux?",answer:`

     Redux follows three fundamental principles:

     1. **Single source of truth:** The state of your whole application is stored in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
     2. **State is read-only:** The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state.
     3. **Changes are made with pure functions:** To specify how the state tree is transformed by actions, you write reducers. Reducers are just pure functions that take the previous state and an action as parameters, and return the next state.`},153:{question:"153. ## What are the downsides of Redux compared to Flux?",answer:`

     Instead of saying downsides we can say that there are few compromises of using Redux over Flux. Those are as follows:

     1. **You will need to learn to avoid mutations:** Flux is un-opinionated about mutating data, but Redux doesn't like mutations and many packages complementary to Redux assume you never mutate the state. You can enforce this with dev-only packages like \`redux-immutable-state-invariant\`, Immutable.js, or instructing your team to write non-mutating code.
     2. **You're going to have to carefully pick your packages:** While Flux explicitly doesn't try to solve problems such as undo/redo, persistence, or forms, Redux has extension points such as middleware and store enhancers, and it has spawned a rich ecosystem.
     3. **There is no nice Flow integration yet:** Flux currently lets you do very impressive static type checks which Redux doesn't support yet.`},154:{question:"154. ## What is the difference between `mapStateToProps()` and `mapDispatchToProps()`?",answer:`

     \`mapStateToProps()\` is a utility which helps your component get updated state (which is updated by some other components):

     \`\`\`javascript
     const mapStateToProps = (state) => {
       return {
         todos: getVisibleTodos(state.todos, state.visibilityFilter)
       }
     }
     \`\`\`

     \`mapDispatchToProps()\` is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

     \`\`\`javascript
     const mapDispatchToProps = (dispatch) => {
       return {
         onTodoClick: (id) => {
           dispatch(toggleTodo(id))
         }
       }
     }
     \`\`\`
     
     It is recommended to always use the \u201Cobject shorthand\u201D form for the \`mapDispatchToProps\`.
        
     Redux wraps it in another function that looks like (\u2026args) => dispatch(onTodoClick(\u2026args)), and pass that wrapper function as a prop to your component.
      
      \`\`\`javascript
       const mapDispatchToProps = ({
         onTodoClick
       })
      \`\`\``},155:{question:"155. ## Can I dispatch an action in reducer?",answer:`

     Dispatching an action within a reducer is an **anti-pattern**. Your reducer should be *without side effects*, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.`},156:{question:"156. ## How to access Redux store outside a component?",answer:"\n\n     You just need to export the store from the module where it created with `createStore()`. Also, it shouldn't pollute the global window object.\n\n     ```javascript\n     store = createStore(myReducer)\n\n     export default store\n     ```"},157:{question:"157. ## What are the drawbacks of MVW pattern?",answer:`

     1. DOM manipulation is very expensive which causes applications to behave slow and inefficient.
     3. Due to circular dependencies, a complicated model was created around models and views.
     3. Lot of data changes happens for collaborative applications(like Google Docs).
     4. No way to do undo (travel back in time) easily without adding so much extra code.`},158:{question:"158. ## Are there any similarities between Redux and RxJS?",answer:`

     These libraries are very different for very different purposes, but there are some vague similarities.

     Redux is a tool for managing state throughout the application. It is usually used as an architecture for UIs. Think of it as an alternative to (half of) Angular. RxJS is a reactive programming library. It is usually used as a tool to accomplish asynchronous tasks in JavaScript. Think of it as an alternative to Promises. Redux uses the Reactive paradigm because the Store is reactive. The Store observes actions from a distance, and changes itself. RxJS also uses the Reactive paradigm, but instead of being an architecture, it gives you basic building blocks, Observables, to accomplish this pattern.`},159:{question:"159. ## How to dispatch an action on load?",answer:`

     You can dispatch an action in \`componentDidMount()\` method and in \`render()\` method you can verify the data.

     \`\`\`javascript
     class App extends Component {
       componentDidMount() {
         this.props.fetchData()
       }

       render() {
         return this.props.isLoaded
           ? <div>{'Loaded'}</div>
           : <div>{'Not Loaded'}</div>
       }
     }

     const mapStateToProps = (state) => ({
       isLoaded: state.isLoaded
     })

     const mapDispatchToProps = { fetchData }

     export default connect(mapStateToProps, mapDispatchToProps)(App)
     \`\`\``},160:{question:"160. ## How to use `connect()` from React Redux?",answer:`

     You need to follow two steps to use your store in your container:

     1. **Use \`mapStateToProps()\`:** It maps the state variables from your store to the props that you specify.
     2. **Connect the above props to your container:** The object returned by the \`mapStateToProps\` function is connected to the container. You can import \`connect()\` from \`react-redux\`.

         \`\`\`jsx harmony
         import React from 'react'
         import { connect } from 'react-redux'

         class App extends React.Component {
           render() {
             return <div>{this.props.containerData}</div>
           }
         }

         function mapStateToProps(state) {
           return { containerData: state.data }
         }

         export default connect(mapStateToProps)(App)
         \`\`\``},161:{question:"161. ## How to reset state in Redux?",answer:`

     You need to write a *root reducer* in your application which delegate handling the action to the reducer generated by \`combineReducers()\`.

     For example, let us take \`rootReducer()\` to return the initial state after \`USER_LOGOUT\` action. As we know, reducers are supposed to return the initial state when they are called with \`undefined\` as the first argument, no matter the action.

     \`\`\`javascript
     const appReducer = combineReducers({
       /* your app's top-level reducers */
     })

     const rootReducer = (state, action) => {
       if (action.type === 'USER_LOGOUT') {
         state = undefined
       }

       return appReducer(state, action)
     }
     \`\`\`

     In case of using \`redux-persist\`, you may also need to clean your storage. \`redux-persist\` keeps a copy of your state in a storage engine. First, you need to import the appropriate storage engine and then, to parse the state before setting it to undefined and clean each storage state key.

     \`\`\`javascript
     const appReducer = combineReducers({
       /* your app's top-level reducers */
     })

     const rootReducer = (state, action) => {
       if (action.type === 'USER_LOGOUT') {
         Object.keys(state).forEach(key => {
           storage.removeItem(\`persist:\${key}\`)
         })

         state = undefined
       }

       return appReducer(state, action)
     }
     \`\`\``},162:{question:"162. ## Whats the purpose of `at` symbol in the Redux connect decorator?",answer:`

     The **@** symbol is in fact a JavaScript expression used to signify decorators. *Decorators* make it possible to annotate and modify classes and properties at design time.

     Let's take an example setting up Redux without and with a decorator.

     * **Without decorator:**

         \`\`\`javascript
         import React from 'react'
         import * as actionCreators from './actionCreators'
         import { bindActionCreators } from 'redux'
         import { connect } from 'react-redux'

         function mapStateToProps(state) {
           return { todos: state.todos }
         }

         function mapDispatchToProps(dispatch) {
           return { actions: bindActionCreators(actionCreators, dispatch) }
         }

         class MyApp extends React.Component {
           // ...define your main app here
         }

         export default connect(mapStateToProps, mapDispatchToProps)(MyApp)
         \`\`\`

     * **With decorator:**

         \`\`\`javascript
         import React from 'react'
         import * as actionCreators from './actionCreators'
         import { bindActionCreators } from 'redux'
         import { connect } from 'react-redux'

         function mapStateToProps(state) {
           return { todos: state.todos }
         }

         function mapDispatchToProps(dispatch) {
           return { actions: bindActionCreators(actionCreators, dispatch) }
         }

         @connect(mapStateToProps, mapDispatchToProps)
         export default class MyApp extends React.Component {
           // ...define your main app here
         }
         \`\`\`

     The above examples are almost similar except the usage of decorator. The decorator syntax isn't built into any JavaScript runtimes yet, and is still experimental and subject to change. You can use babel for the decorators support.`},163:{question:"163. ## What is the difference between React context and React Redux?",answer:`

     You can use **Context** in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.

     Whereas **Redux** is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.`},164:{question:"164. ## Why are Redux state functions called reducers?",answer:`

     Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could *reduce* a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.`},165:{question:"165. ## How to make AJAX request in Redux?",answer:`

     You can use \`redux-thunk\` middleware which allows you to define async actions.

     Let's take an example of fetching specific account as an AJAX call using *fetch API*:

     \`\`\`javascript
     export function fetchAccount(id) {
       return dispatch => {
         dispatch(setLoadingAccountState()) // Show a loading spinner
         fetch(\`/account/\${id}\`, (response) => {
           dispatch(doneFetchingAccount()) // Hide loading spinner
           if (response.status === 200) {
             dispatch(setAccount(response.json)) // Use a normal function to set the received state
           } else {
             dispatch(someError)
           }
         })
       }
     }

     function setAccount(data) {
      return { type: 'SET_Account', data: data }
     }
     \`\`\``},166:{question:"166. ## Should I keep all component's state in Redux store?",answer:`

      Keep your data in the Redux store, and the UI related state internally in the component.`},167:{question:"167. ## What is the proper way to access Redux store?",answer:`

     The best way to access your store in a component is to use the \`connect()\` function, that creates a new component that wraps around your existing one. This pattern is called *Higher-Order Components*, and is generally the preferred way of extending a component's functionality in React. This allows you to map state and action creators to your component, and have them passed in automatically as your store updates.

     Let's take an example of \`<FilterLink>\` component using connect:

     \`\`\`javascript
     import { connect } from 'react-redux'
     import { setVisibilityFilter } from '../actions'
     import Link from '../components/Link'

     const mapStateToProps = (state, ownProps) => ({
       active: ownProps.filter === state.visibilityFilter
     })

     const mapDispatchToProps = (dispatch, ownProps) => ({
       onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
     })

     const FilterLink = connect(
       mapStateToProps,
       mapDispatchToProps
     )(Link)

     export default FilterLink
     \`\`\`

     Due to it having quite a few performance optimizations and generally being less likely to cause bugs, the Redux developers almost always recommend using \`connect()\` over accessing the store directly (using context API).

     \`\`\`javascript
     class MyComponent {
       someMethod() {
         doSomethingWith(this.context.store)
       }
     }
     \`\`\``},168:{question:"168. ## What is the difference between component and container in React Redux?",answer:`

     **Component** is a class or function component that describes the presentational part of your application.

     **Container** is an informal term for a component that is connected to a Redux store. Containers *subscribe* to Redux state updates and *dispatch* actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.`},169:{question:"169. ## What is the purpose of the constants in Redux?",answer:`

     Constants allows you to easily find all usages of that specific functionality across the project when you use an IDE. It also prevents you from introducing silly bugs caused by typos \u2013 in which case, you will get a \`ReferenceError\` immediately.

     Normally we will save them in a single file (\`constants.js\` or \`actionTypes.js\`).

     \`\`\`javascript
     export const ADD_TODO = 'ADD_TODO'
     export const DELETE_TODO = 'DELETE_TODO'
     export const EDIT_TODO = 'EDIT_TODO'
     export const COMPLETE_TODO = 'COMPLETE_TODO'
     export const COMPLETE_ALL = 'COMPLETE_ALL'
     export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
     \`\`\`

     In Redux, you use them in two places:

     1. **During action creation:**

         Let's take \`actions.js\`:

         \`\`\`javascript
         import { ADD_TODO } from './actionTypes';

         export function addTodo(text) {
           return { type: ADD_TODO, text }
         }
         \`\`\`

     2. **In reducers:**

         Let's create \`reducer.js\`:

         \`\`\`javascript
         import { ADD_TODO } from './actionTypes'

         export default (state = [], action) => {
           switch (action.type) {
             case ADD_TODO:
               return [
                 ...state,
                 {
                   text: action.text,
                   completed: false
                 }
               ];
             default:
               return state
           }
         }
         \`\`\``},170:{question:"170. ## What are the different ways to write `mapDispatchToProps()`?",answer:"\n\n     There are a few ways of binding *action creators* to `dispatch()` in `mapDispatchToProps()`.\n\n     Below are the possible options:\n\n     ```javascript\n     const mapDispatchToProps = (dispatch) => ({\n      action: () => dispatch(action())\n     })\n     ```\n\n     ```javascript\n     const mapDispatchToProps = (dispatch) => ({\n      action: bindActionCreators(action, dispatch)\n     })\n     ```\n\n     ```javascript\n     const mapDispatchToProps = { action }\n     ```\n\n     The third option is just a shorthand for the first one."},171:{question:"171. ## What is the use of the `ownProps` parameter in `mapStateToProps()` and `mapDispatchToProps()`?",answer:"\n\n     If the `ownProps` parameter is specified, React Redux will pass the props that were passed to the component into your *connect* functions. So, if you use a connected component:\n\n     ```jsx harmony\n     import ConnectedComponent from './containers/ConnectedComponent';\n\n     <ConnectedComponent user={'john'} />\n     ```\n\n     The `ownProps` inside your `mapStateToProps()` and `mapDispatchToProps()` functions will be an object:\n\n     ```javascript\n     { user: 'john' }\n     ```\n\n     You can use this object to decide what to return from those functions."},172:{question:"172. ## How to structure Redux top level directories?",answer:`

     Most of the applications has several top-level directories as below:

     1. **Components**: Used for *dumb* components unaware of Redux.
     2. **Containers**: Used for *smart* components connected to Redux.
     3. **Actions**: Used for all action creators, where file names correspond to part of the app.
     4. **Reducers**: Used for all reducers, where files name correspond to state key.
     5. **Store**: Used for store initialization.

     This structure works well for small and medium size apps.`},173:{question:"173. ## What is redux-saga?",answer:"\n\n     `redux-saga` is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.\n\n     It is available in NPM:\n\n     ```console\n     $ npm install --save redux-saga\n     ```"},174:{question:"174. ## What is the mental model of redux-saga?",answer:"\n\n     *Saga* is like a separate thread in your application, that's solely responsible for side effects. `redux-saga` is a redux *middleware*, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well."},175:{question:"175. ## What are the differences between `call()` and `put()` in redux-saga?",answer:"\n\n     Both `call()` and `put()` are effect creator functions. `call()` function is used to create effect description, which instructs middleware to call the promise. `put()` function creates an effect, which instructs middleware to dispatch an action to the store.\n\n     Let's take example of how these effects work for fetching particular user data.\n\n     ```javascript\n     function* fetchUserSaga(action) {\n       // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.\n       // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable\n       const userData = yield call(api.fetchUser, action.userId)\n\n       // Instructing middleware to dispatch corresponding action.\n       yield put({\n         type: 'FETCH_USER_SUCCESS',\n         userData\n       })\n     }\n     ```"},176:{question:"176. ## What is Redux Thunk?",answer:"\n\n     *Redux Thunk* middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods `dispatch()` and `getState()` as parameters."},177:{question:"177. ## What are the differences between `redux-saga` and `redux-thunk`?",answer:`

     Both *Redux Thunk* and *Redux Saga* take care of dealing with side effects. In most of the scenarios, Thunk uses *Promises* to deal with them, whereas Saga uses *Generators*. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.`},178:{question:"178. ## What is Redux DevTools?",answer:`

     *Redux DevTools* is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don't want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.`},179:{question:"179. ## What are the features of Redux DevTools?",answer:`
     Some of the main features of Redux DevTools are below,

        1. Lets you inspect every state and action payload.
        2. Lets you go back in time by *cancelling* actions.
        3. If you change the reducer code, each *staged* action will be re-evaluated.
        4. If the reducers throw, you will see during which action this happened, and what the error was.
        5. With \`persistState()\` store enhancer, you can persist debug sessions across page reloads.`},180:{question:"180. ## What are Redux selectors and why to use them?",answer:`

     *Selectors* are functions that take Redux state as an argument and return some data to pass to the component.

     For example, to get user details from the state:

     \`\`\`javascript
     const getUserData = state => state.user.data
     \`\`\`

     These selectors have two main benefits,

     1. The selector can compute derived data, allowing Redux to store the minimal possible state
     2. The selector is not recomputed unless one of its arguments changes`},181:{question:"181. ## What is Redux Form?",answer:`

     *Redux Form* works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets and React Bootstrap.`},182:{question:"182. ## What are the main features of Redux Form?",answer:`
     Some of the main features of Redux Form are:

       1. Field values persistence via Redux store.
       2. Validation (sync/async) and submission.
       3. Formatting, parsing and normalization of field values.`},183:{question:"183. ## How to add multiple middlewares to Redux?",answer:"\n\n     You can use `applyMiddleware()`.\n\n     For example, you can add `redux-thunk` and `logger` passing them as arguments to `applyMiddleware()`:\n\n     ```javascript\n     import { createStore, applyMiddleware } from 'redux'\n     const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore)\n     ```"},184:{question:"184. ## How to set initial state in Redux?",answer:`

     You need to pass initial state as second argument to createStore:

     \`\`\`javascript
     const rootReducer = combineReducers({
       todos: todos,
       visibilityFilter: visibilityFilter
     })

     const initialState = {
       todos: [{ id: 123, name: 'example', completed: false }]
     }

     const store = createStore(
       rootReducer,
       initialState
     )
     \`\`\``},185:{question:"185. ## How Relay is different from Redux?",answer:`

     Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via *GraphQL* queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.`},186:{question:"186. ## What is an action in Redux?",answer:`

     *Actions* are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.

     For example, let's take an action which represents adding a new todo item:

     \`\`\`
     {
       type: ADD_TODO,
       text: 'Add todo item'
     }
     \`\`\`


   

## React Native


   **[\u2B06 Back to Top](#table-of-contents)**`},187:{question:"187. ## What is the difference between React Native and React?",answer:`

     **React** is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.

     **React Native** is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.`},188:{question:"188. ## How to test React Native apps?",answer:`

     React Native can be tested only in mobile simulators like iOS and Android. You can run the app in your mobile using expo app (https://expo.io) Where it syncs using QR code, your mobile and computer should be in same wireless network.`},189:{question:"189. ## How to do logging in React Native?",answer:"\n\n     You can use `console.log`, `console.warn`, etc. As of React Native v0.29 you can simply run the following to see logs in the console:\n\n     ```\n     $ react-native log-ios\n     $ react-native log-android\n     ```"},190:{question:"190. ## How to debug your React Native?",answer:"\n\n     Follow the below steps to debug React Native app:\n\n     1. Run your application in the iOS simulator.\n     2. Press `Command + D` and a webpage should open up at `http://localhost:8081/debugger-ui`.\n     3. Enable *Pause On Caught Exceptions* for a better debugging experience.\n     4. Press `Command + Option + I` to open the Chrome Developer tools, or open it via `View` -> `Developer` -> `Developer Tools`.\n     5. You should now be able to debug as you normally would.\n\n## React supported libraries & Integration"},191:{question:"191. ## What is reselect and how it works?",answer:`

     *Reselect* is a **selector library** (for Redux) which uses *memoization* concept. It was originally written to compute derived data from Redux-like applications state, but it can't be tied to any architecture or library.

     Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the the same inputs are provided twice in a row, Reselect returns the cached output. It's memoization and cache are fully customizable.`},192:{question:"192. ## What is Flow?",answer:"\n\n     *Flow* is a *static type checker* designed to find type errors in JavaScript. Flow types can express much more fine-grained distinctions than traditional type systems. For example, Flow helps you catch errors involving `null`, unlike most type systems."},193:{question:"193. ## What is the difference between Flow and PropTypes?",answer:`

     Flow is a *static analysis tool* (static checker) which uses a superset of the language, allowing you to add type annotations to all of your code and catch an entire class of bugs at compile time.

     PropTypes is a *basic type checker* (runtime checker) which has been patched onto React. It can't check anything other than the types of the props being passed to a given component. If you want more flexible typechecking for your entire project Flow/TypeScript are appropriate choices.`},194:{question:"194. ## How to use Font Awesome icons in React?",answer:"\n\n     The below steps followed to include Font Awesome in React:\n\n     1. Install `font-awesome`:\n\n         ```console\n         $ npm install --save font-awesome\n         ```\n\n     2. Import `font-awesome` in your `index.js` file:\n\n         ```javascript\n         import 'font-awesome/css/font-awesome.min.css'\n         ```\n\n     3. Add Font Awesome classes in `className`:\n\n         ```javascript\n         render() {\n           return <div><i className={'fa fa-spinner'} /></div>\n         }\n         ```"},195:{question:"195. ## What is React Dev Tools?",answer:`

     *React Developer Tools* let you inspect the component hierarchy, including component props and state. It exists both as a browser extension (for Chrome and Firefox), and as a standalone app (works with other environments including Safari, IE, and React Native).

     The official extensions available for different browsers or environments.
     1. **Chrome extension**
     2. **Firefox extension**
     3. **Standalone app** (Safari, React Native, etc)`},196:{question:"196. ## Why is DevTools not loading in Chrome for local files?",answer:"\n\n     If you opened a local HTML file in your browser (`file://...`) then you must first open *Chrome Extensions* and check `Allow access to file URLs`."},197:{question:"197. ## How to use Polymer in React?",answer:`
     You need to follow below steps to use Polymer in React,

     1. Create a Polymer element:

         \`\`\`jsx harmony
         <link rel='import' href='../../bower_components/polymer/polymer.html' />
         Polymer({
           is: 'calender-element',
           ready: function() {
             this.textContent = 'I am a calender'
           }
         })
         \`\`\`

     2. Create the Polymer component HTML tag by importing it in a HTML document, e.g. import it in the \`index.html\` of your React application:

         \`\`\`html
         <link rel='import' href='./src/polymer-components/calender-element.html'>
         \`\`\`

     3. Use that element in the JSX file:

         \`\`\`javascript
         import React from 'react'

         class MyComponent extends React.Component {
           render() {
             return (
               <calender-element />
             )
           }
         }

         export default MyComponent
         \`\`\``},198:{question:"198. ## What are the advantages of React over Vue.js?",answer:`

     React has the following advantages over Vue.js:

     1. Gives more flexibility in large apps developing.
     2. Easier to test.
     3. Suitable for mobile apps creating.
     4. More information and solutions available.

   **Note:** The above list of advantages are purely opinionated and it vary based on the professional experience. But they are helpful as base parameters.`},199:{question:"199. ## What is the difference between React and Angular?",answer:`
     Let's see the difference between React and Angular in a table format.

     | React | Angular |
     | ----- | ------- |
     | React is a library and has only the View layer | Angular is a framework and has complete MVC functionality |
     | React handles rendering on the server side | AngularJS renders only on the client side but Angular 2 and above renders on the server side |
     | React uses JSX that looks like HTML in JS which can be confusing | Angular follows the template approach for HTML, which makes code shorter and easy to understand |
     | React Native, which is a React type to build mobile applications are faster and more stable | Ionic, Angular's mobile native app is relatively less stable and slower |
     | In React, data flows only in one way and hence debugging is easy | In Angular, data flows both way i.e it has two-way data binding between children and parent and hence debugging is often difficult |

   **Note:** The above list of differences are purely opinionated and it vary based on the professional experience. But they are helpful as base parameters.`},200:{question:"200. ## Why React tab is not showing up in DevTools?",answer:"\n\n     When the page loads, *React DevTools* sets a global named `__REACT_DEVTOOLS_GLOBAL_HOOK__`, then React communicates with that hook during initialization. If the website is not using React or if React fails to communicate with DevTools then it won't show up the tab."},201:{question:"201. ## What are Styled Components?",answer:"\n\n     `styled-components` is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript."},202:{question:"202. ## Give an example of Styled Components?",answer:`

     Lets create \`<Title>\` and \`<Wrapper>\` components with specific styles for each.

     \`\`\`javascript
     import React from 'react'
     import styled from 'styled-components'

     // Create a <Title> component that renders an <h1> which is centered, red and sized at 1.5em
     const Title = styled.h1\`
       font-size: 1.5em;
       text-align: center;
       color: palevioletred;
     \`

     // Create a <Wrapper> component that renders a <section> with some padding and a papayawhip background
     const Wrapper = styled.section\`
       padding: 4em;
       background: papayawhip;
     \`
     \`\`\`

     These two variables, \`Title\` and \`Wrapper\`, are now components that you can render just like any other react component.

     \`\`\`jsx harmony
     <Wrapper>
       <Title>{'Lets start first styled component!'}</Title>
     </Wrapper>
     \`\`\``},203:{question:"203. ## What is Relay?",answer:`

     Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer.`},204:{question:"204. ## How to use TypeScript in `create-react-app` application?",answer:`
     Starting from react-scripts@2.1.0 or higher, there is a built-in support for typescript. i.e, \`create-react-app\` now supports typescript natively. You can just pass \`--typescript\` option as below
     \`\`\`bash
     npx create-react-app my-app --typescript

     # or

     yarn create react-app my-app --typescript
     \`\`\`
     But for lower versions of react scripts, just supply \`--scripts-version\` option as \`react-scripts-ts\` while you create a new project. \`react-scripts-ts\` is a set of adjustments to take the standard \`create-react-app\` project pipeline and bring TypeScript into the mix.

     Now the project layout should look like the following:

     \`\`\`
     my-app/
     \u251C\u2500 .gitignore
     \u251C\u2500 images.d.ts
     \u251C\u2500 node_modules/
     \u251C\u2500 public/
     \u251C\u2500 src/
     \u2502  \u2514\u2500 ...
     \u251C\u2500 package.json
     \u251C\u2500 tsconfig.json
     \u251C\u2500 tsconfig.prod.json
     \u251C\u2500 tsconfig.test.json
     \u2514\u2500 tslint.json
     \`\`\`

## Miscellaneous`},205:{question:"205. ## What are the main features of Reselect library?",answer:`

     Let's see the main features of Reselect library,

       1. Selectors can compute derived data, allowing Redux to store the minimal possible state.
       2. Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
       3. Selectors are composable. They can be used as input to other selectors.`},206:{question:"206. ## # Give an example of Reselect usage?",answer:`

     Let's take calculations and different amounts of a shipment order with the simplified usage of Reselect:

     \`\`\`javascript
     import { createSelector } from 'reselect'

     const shopItemsSelector = state => state.shop.items
     const taxPercentSelector = state => state.shop.taxPercent

     const subtotalSelector = createSelector(
       shopItemsSelector,
       items => items.reduce((acc, item) => acc + item.value, 0)
     )

     const taxSelector = createSelector(
       subtotalSelector,
       taxPercentSelector,
       (subtotal, taxPercent) => subtotal * (taxPercent / 100)
     )

     export const totalSelector = createSelector(
       subtotalSelector,
       taxSelector,
       (subtotal, tax) => ({ total: subtotal + tax })
     )

     let exampleState = {
       shop: {
         taxPercent: 8,
         items: [
           { name: 'apple', value: 1.20 },
           { name: 'orange', value: 0.95 },
         ]
       }
     }

     console.log(subtotalSelector(exampleState)) // 2.15
     console.log(taxSelector(exampleState))      // 0.172
     console.log(totalSelector(exampleState))    // { total: 2.322 }
     \`\`\``},207:{question:"207. ## Does the statics object work with ES6 classes in React?",answer:`

     No, \`statics\` only works with \`React.createClass()\`:

     \`\`\`javascript
     someComponent= React.createClass({
       statics: {
         someMethod: function() {
           // ..
         }
       }
     })
     \`\`\`

     But you can write statics inside ES6+ classes as below,

     \`\`\`javascript
     class Component extends React.Component {
       static propTypes = {
         // ...
       }

       static someMethod() {
         // ...
       }
     }
     \`\`\`

     or writing them outside class as below,

     \`\`\`javascript
     class Component extends React.Component {
        ....
     }

     Component.propTypes = {...}
     Component.someMethod = function(){....}
     \`\`\``},208:{question:"208. ## Can Redux only be used with React?",answer:`

     Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code.`},209:{question:"209. ## Do you need to have a particular build tool to use Redux?",answer:`

     Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all.`},210:{question:"210. ## How Redux Form `initialValues` get updated from state?",answer:`

     You need to add \`enableReinitialize : true\` setting.

     \`\`\`javascript
     const InitializeFromStateForm = reduxForm({
       form: 'initializeFromState',
       enableReinitialize : true
     })(UserEdit)
     \`\`\`

     If your \`initialValues\` prop gets updated, your form will update too.`},211:{question:"211. ## How React PropTypes allow different types for one prop?",answer:"\n\n     You can use `oneOfType()` method of `PropTypes`.\n\n     For example, the height property can be defined with either `string` or `number` type as below:\n\n     ```javascript\n     Component.propTypes = {\n       size: PropTypes.oneOfType([\n         PropTypes.string,\n         PropTypes.number\n       ])\n     }\n     ```"},212:{question:"212. ## Can I import an SVG file as react component?",answer:`

     You can import SVG directly as component instead of loading it as a file. This feature is available with \`react-scripts@2.0.0\` and higher.

     \`\`\`jsx harmony
     import { ReactComponent as Logo } from './logo.svg'

     const App = () => (
       <div>
         {/* Logo is an actual react component */}
         <Logo />
       </div>
     )
     \`\`\`

     **Note**: Don't forget about the curly braces in the import.`},213:{question:"213. ## Why are inline ref callbacks or functions not recommended?",answer:`

     If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

     \`\`\`jsx
     class UserForm extends Component {
       handleSubmit = () => {
         console.log("Input Value is: ", this.input.value)
       }


       render () {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              ref={(input) => this.input = input} /> // Access DOM input in handle submit
            <button type='submit'>Submit</button>
          </form>
        )
      }
     }
     \`\`\`

     But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function

     \`\`\`jsx
     class UserForm extends Component {
      handleSubmit = () => {
        console.log("Input Value is: ", this.input.value)
      }

      setSearchInput = (input) => {
        this.input = input
      }

      render () {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              ref={this.setSearchInput} /> // Access DOM input in handle submit
            <button type='submit'>Submit</button>
          </form>
        )
      }
     }
     \`\`\`

    **Note:** In React v16.3,`},214:{question:"214. ## What is render hijacking in react?",answer:`

     The concept of render hijacking is the ability to control what a component will output from another component. It  means that you decorate your component by wrapping it into a Higher-Order component. By wrapping, you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enable hijacking, but by using HOC you make your component behave differently.`},215:{question:"215. ## What are HOC factory implementations?",answer:`
     There are two main ways of implementing HOCs in React.

     1. Props Proxy (PP) and
     2. Inheritance Inversion (II).

     But they follow different approaches for manipulating the *WrappedComponent*.

     **Props Proxy**

     In this approach, the render method of the HOC returns a React Element of the type of the WrappedComponent. We also pass through the props that the HOC receives, hence the name **Props Proxy**.

     \`\`\`jsx

     function ppHOC(WrappedComponent) {
      return class PP extends React.Component {
        render() {
          return <WrappedComponent {...this.props}/>
        }
      }
     }
     \`\`\`
     **Inheritance Inversion**

     In this approach, the returned HOC class (Enhancer) extends the WrappedComponent. It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class, it is passively extended by the Enhancer. In this way the relationship between them seems **inverse**.

     \`\`\`jsx
     function iiHOC(WrappedComponent) {
      return class Enhancer extends WrappedComponent {
        render() {
          return super.render()
        }
      }
     }
     \`\`\``},216:{question:"216. ## How to pass numbers to React component?",answer:`

     You should be passing the numbers via curly braces({}) where as strings in quotes

     \`\`\`jsx
        React.render(<User age={30} department={"IT"} />, document.getElementById('container'));
     \`\`\``},217:{question:"217. ## Do I need to keep all my state into Redux? Should I ever use react internal state?",answer:`
     It is up to the developer's decision, i.e., it is developer's job to determine what kinds of state make up your application, and where each piece of state should live. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as \u201Cis this dropdown currently open\u201D, inside a component's internal state.

     Below are the thumb rules to determine what kind of data should be put into Redux
     1. Do other parts of the application care about this data?
     2. Do you need to be able to create further derived data based on this original data?
     3. Is the same data being used to drive multiple components?
     4. Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
     5. Do you want to cache the data (i.e, use what's in state if it's already there instead of re-requesting it)?`},218:{question:"218. ## What is the purpose of registerServiceWorker in React?",answer:`

     React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on a slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker for now. It's all about adding offline capabilities to your site.

     \`\`\`jsx
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App';
        import registerServiceWorker from './registerServiceWorker';

        ReactDOM.render(<App />, document.getElementById('root'));
        registerServiceWorker();
     \`\`\``},219:{question:"219. ## What is React memo function?",answer:`

     Class components can be restricted from re-rendering when their input props are the same using **PureComponent or shouldComponentUpdate**. Now you can do the same with function components by wrapping them in **React.memo**.
     \`\`\`jsx
     const MyComponent = React.memo(function MyComponent(props) {
      /* only rerenders if props change */
     });
     \`\`\``},220:{question:"220. ## What is React lazy function?",answer:"\n     The `React.lazy` function lets you render a dynamic import as a regular component. It will automatically load the bundle containing the `OtherComponent` when the component gets rendered. This must return a Promise which resolves to a module with a default export containing a React component.\n     ```jsx\n     const OtherComponent = React.lazy(() => import('./OtherComponent'));\n\n     function MyComponent() {\n      return (\n        <div>\n          <OtherComponent />\n        </div>\n      );\n     }\n     ```\n     **Note:**\n     `React.lazy` and `Suspense` is not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we still recommend React Loadable."},221:{question:"221. ## How to prevent unnecessary updates using setState?",answer:`
     You can compare the current value of the state with an existing state value and decide whether to rerender the page or not. If the values are the same then you need to return **null** to stop re-rendering otherwise return the latest state value.

     For example, the user profile information is conditionally rendered as follows,
     \`\`\`jsx
     getUserProfile = user => {
       const latestAddress = user.address;
       this.setState(state => {
         if (state.address === latestAddress) {
           return null;
         } else {
           return { title: latestAddress };
         }
       });
     };
     \`\`\``},222:{question:"222. ## How do you render Array, Strings and Numbers in React 16 Version?",answer:`
     **Arrays**: Unlike older releases, you don't need to make sure **render** method return a single element in React16. You are able to return multiple sibling elements without a wrapping element by returning an array.

     For example, let us take the below list of developers,

     \`\`\`jsx
     const ReactJSDevs = () => {
       return [
         <li key="1">John</li>,
         <li key="2">Jackie</li>,
         <li key="3">Jordan</li>
       ];
     }
     \`\`\`
     You can also merge this array of items in another array component.
     \`\`\`jsx
     const JSDevs = () => {
       return (
         <ul>
           <li>Brad</li>
           <li>Brodge</li>
           <ReactJSDevs/>
           <li>Brandon</li>
         </ul>
       );
     }
     \`\`\`
     **Strings and Numbers:** You can also return string and number type from the render method.

     \`\`\`jsx
     render() {
      return 'Welcome to ReactJS questions';
     }
     // Number
     render() {
      return 2018;
     }
     \`\`\``},223:{question:"223. ## How to use class field declarations syntax in React classes?",answer:`
     React Class Components can be made much more concise using the class field declarations. You can initialize the local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them.

     Let's take a counter example to demonstrate class field declarations for state without using constructor and methods without binding,
     \`\`\`jsx
     class Counter extends Component {
       state = { value: 0 };

       handleIncrement = () => {
         this.setState(prevState => ({
           value: prevState.value + 1
         }));
       };

       handleDecrement = () => {
         this.setState(prevState => ({
           value: prevState.value - 1
         }));
       };

       render() {
         return (
           <div>
             {this.state.value}

             <button onClick={this.handleIncrement}>+</button>
             <button onClick={this.handleDecrement}>-</button>
           </div>
         )
       }
     }
     \`\`\``},224:{question:"224. ## What are hooks?",answer:`
     Hooks is a special function (introduced as a new feature in React 16.8) that lets you use state and other React features without writing a class.

     Let's see an example of useState hook:
     \`\`\`jsx
     import { useState } from 'react';

     function Example() {
       // Declare a new state variable, which we'll call "count"
       const [count, setCount] = useState(0);

       return (
         <div>
           <p>You clicked {count} times</p>
           <button onClick={() => setCount(count + 1)}>
             Click me
           </button>
         </div>
       );
     }
     \`\`\`
     **Note:** Hooks can be used inside an existing function component.`},225:{question:"225. ## What rules need to be followed for hooks?",answer:`

     You need to follow two rules in order to use hooks,

     1. Call Hooks only at the top level of your react functions. i.e, You shouldn\u2019t call Hooks inside loops, conditions, or nested functions. This will ensure that Hooks are called in the same order each time a component renders and it preserves the state of Hooks between multiple useState and useEffect calls.
     2. Call Hooks from React Functions only. i.e, You shouldn\u2019t call Hooks from regular JavaScript functions.`},226:{question:"226. ## How to ensure hooks followed the rules in your project?",answer:`
     React team released an ESLint plugin called **eslint-plugin-react-hooks** that enforces these two rules. You can add this plugin to your project using the below command,
     \`\`\`javascript
     npm install eslint-plugin-react-hooks@next
     \`\`\`
     And apply the below config in your ESLint config file,
     \`\`\`javascript
     // Your ESLint configuration
     {
       "plugins": [
         // ...
         "react-hooks"
       ],
       "rules": {
         // ...
         "react-hooks/rules-of-hooks": "error"
       }
     }
     \`\`\`
     **Note:** This plugin is intended to use in Create React App by default.`},227:{question:"227. ## What are the differences between Flux and Redux?",answer:`
     Below are the major differences between Flux and Redux

     | Flux | Redux |
     | ----- | ------- |
     | State is mutable | State is immutable |
     | The Store contains both state and change logic | The Store and change logic are separate |
     | There are multiple stores exist | There is only one store exist |
     | All the stores are disconnected and flat | Single store with hierarchical reducers|
     | It has a singleton dispatcher | There is no concept of dispatcher |
     | React components subscribe to the store | Container components uses connect function|`},228:{question:"228. ## What are the benefits of React Router V4?",answer:"\n     Below are the main benefits of React Router V4 module,\n\n     1. In React Router v4(version 4), the API is completely about components. A router can be visualized as a single component(`<BrowserRouter>`) which wraps specific child router components(`<Route>`).\n     2. You don't need to manually set history. The router module will take care history by wrapping routes with  `<BrowserRouter>` component.\n     3. The application size is reduced by adding only the specific router module(Web, core, or native)"},229:{question:"229. ## Can you describe about componentDidCatch lifecycle method signature?",answer:`
     The **componentDidCatch** lifecycle method is invoked after an error has been thrown by a descendant component. The method receives two parameters,
     1. error: - The error object which was thrown
     2. info: - An object with a componentStack key contains the information about which component threw the error.

     The method structure would be as follows
     \`\`\`javascript
     componentDidCatch(error, info)
     \`\`\``},230:{question:"230. ## In which scenarios error boundaries do not catch errors?",answer:`
     Below are the cases in which error boundaries doesn't work,

     1. Inside Event handlers
     2. Asynchronous code using **setTimeout or requestAnimationFrame** callbacks
     3. During Server side rendering
     4. When errors thrown in the error boundary code itself`},231:{question:"231. ## Why do you not need error boundaries for event handlers?",answer:`
     Error boundaries do not catch errors inside event handlers.
     
     React doesn\u2019t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don\u2019t happen during rendering. So if they throw, React still knows what to display on the screen.

     If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement:

     \`\`\`javascript
     class MyComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = { error: null };
         this.handleClick = this.handleClick.bind(this);
       }

       handleClick() {
         try {
           // Do something that could throw
         } catch (error) {
           this.setState({ error });
         }
       }

       render() {
         if (this.state.error) {
           return <h1>Caught an error.</h1>
         }
         return <button onClick={this.handleClick}>Click Me</button>
       }
     }
     \`\`\`
     Note that the above example is demonstrating regular JavaScript behavior and doesn\u2019t use error boundaries.`},232:{question:"232. ## What is the difference between try catch block and error boundaries?",answer:`
     Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.

     For example, the try catch block used for below imperative code
     \`\`\`javascript
     try {
       showButton();
     } catch (error) {
       // ...
     }
     \`\`\`
     Whereas error boundaries wrap declarative code as below,
     \`\`\`javascript
     <ErrorBoundary>
       <MyComponent />
     </ErrorBoundary>
     \`\`\`
     So if an error occurs in a **componentDidUpdate** method caused by a **setState** somewhere deep in the tree, it will still correctly propagate to the closest error boundary.`},233:{question:"233. ## What is the behavior of uncaught errors in react 16?",answer:`
     In React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. The reason behind this decision is that it is worse to leave corrupted UI in place than to completely remove it. For example, it is worse for a payments app to display a wrong amount than to render nothing.`},234:{question:"234. ## What is the proper placement for error boundaries?",answer:`
     The granularity of error boundaries usage is up to the developer based on project needs. You can follow either of these approaches,
     1. You can wrap top-level route components to display a generic error message for the entire application.
     2. You can also wrap individual components in an error boundary to protect them from crashing the rest of the application.`},235:{question:"235. ## What is the benefit of component stack trace from error boundary?",answer:`
     Apart from error messages and javascript stack, React16 will display the component stack trace with file names and line numbers using error boundary concept.

     For example, BuggyCounter component displays the component stack trace as below,

     ![stacktrace](https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/359af1a719f83e7f341cfbeb039147153f1f3b38/images/error_boundary.png)`},236:{question:"236. ## What is the required method to be defined for a class component?",answer:"\n     The `render()` method is the only required method in a class component. i.e, All methods other than render method are optional for a class component."},237:{question:"237. ## What are the possible return types of render method?",answer:`
     Below are the list of following types used and return from render method,

     1. **React elements:** Elements that instruct React to render a DOM node. It includes html elements such as \`<div/>\` and user defined elements.
     2. **Arrays and fragments:** Return multiple elements to render as Arrays and Fragments to wrap multiple elements
     3. **Portals:** Render children into a different DOM subtree.
     4. **String and numbers:** Render both Strings and Numbers as text nodes in the DOM
     5. **Booleans or null:** Doesn't render anything but these types are used to conditionally render content.`},238:{question:"238. ## What is the main purpose of constructor?",answer:`
     The constructor is mainly used for two purposes,

     1. To initialize local state by assigning object to this.state
     2. For binding event handler methods to the instance
     For example, the below code covers both the above cases,
     \`\`\`javascript
     constructor(props) {
       super(props);
       // Don't call this.setState() here!
       this.state = { counter: 0 };
       this.handleClick = this.handleClick.bind(this);
     }
     \`\`\``},239:{question:"239. ## Is it mandatory to define constructor for React component?",answer:`
     No, it is not mandatory. i.e, If you don\u2019t initialize state and you don\u2019t bind methods, you don\u2019t need to implement a constructor for your React component.`},240:{question:"240. ## What are default props?",answer:`
     The defaultProps are defined as a property on the component class to set the default props for the class. This is used for undefined props, but not for null props.

     For example, let us create color default prop for the button component,

     \`\`\`javascript
     class MyButton extends React.Component {
       // ...
     }

     MyButton.defaultProps = {
       color: 'red'
     };

     \`\`\`

     If \`props.color\` is not provided then it will set the default value to 'red'. i.e, Whenever you try to access the color prop it uses default value
     \`\`\`javascript
     render() {
        return <MyButton /> ; // props.color will be set to red
      }
     \`\`\`
     **Note:** If you provide null value then it remains null value.`},241:{question:"241. ## Why should not call setState in componentWillUnmount?",answer:"\n     You should not call `setState()` in `componentWillUnmount()` because once a component instance is unmounted, it will never be mounted again."},242:{question:"242. ## What is the purpose of getDerivedStateFromError?",answer:`
     This lifecycle method is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

     The signature of the lifecycle method is as follows,
     \`\`\`javascript
     static getDerivedStateFromError(error)
     \`\`\`
     Let us take error boundary use case with the above lifecycle method for demonstration purpose,
     \`\`\`javascript
     class ErrorBoundary extends React.Component {
       constructor(props) {
         super(props);
         this.state = { hasError: false };
       }

       static getDerivedStateFromError(error) {
         // Update state so the next render will show the fallback UI.
         return { hasError: true };
       }

       render() {
         if (this.state.hasError) {
           // You can render any custom fallback UI
           return <h1>Something went wrong.</h1>;
         }

         return this.props.children;
       }
     }
     \`\`\``},243:{question:"243. ## What is the methods order when component re-rendered?",answer:`
     An update can be caused by changes to props or state. The below methods are called in the following order when a component is being re-rendered.

     1. static getDerivedStateFromProps()
     2. shouldComponentUpdate()
     3. render()
     4. getSnapshotBeforeUpdate()
     5. componentDidUpdate()`},244:{question:"244. ## What are the methods invoked during error handling?",answer:`
     Below methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

     1. static getDerivedStateFromError()
     2. componentDidCatch()`},245:{question:"245. ## What is the purpose of displayName class property?",answer:`
     The displayName string is used in debugging messages. Usually, you don\u2019t need to set it explicitly because it\u2019s inferred from the name of the function or class that defines the component. You might want to set it explicitly if you want to display a different name for debugging purposes or when you create a higher-order component.

     For example, To ease debugging, choose a display name that communicates that it\u2019s the result of a withSubscription HOC.

     \`\`\`javascript
     function withSubscription(WrappedComponent) {
       class WithSubscription extends React.Component {/* ... */}
       WithSubscription.displayName = \`WithSubscription(\${getDisplayName(WrappedComponent)})\`;
       return WithSubscription;
     }
     function getDisplayName(WrappedComponent) {
       return WrappedComponent.displayName || WrappedComponent.name || 'Component';
     }
     \`\`\``},246:{question:"246. ## What is the browser support for react applications?",answer:`
     React supports all popular browsers, including Internet Explorer 9 and above, although some polyfills are required for older browsers such as IE 9 and IE 10. If you use  **es5-shim and es5-sham** polyfill then it even support old browsers that doesn't support ES5 methods.`},247:{question:"247. ## What is the purpose of unmountComponentAtNode method?",answer:"\n     This method is available from react-dom package and it removes a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns true if a component was unmounted and false if there was no component to unmount.\n\n     The method signature would be as follows,\n     ```javascript\n     ReactDOM.unmountComponentAtNode(container)\n     ```"},248:{question:"248. ## What is code-splitting?",answer:`
     Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature.

     For example, in the below code snippets, it will make moduleA.js and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button.
     **moduleA.js**
     \`\`\`javascript
     const moduleA = 'Hello';

     export { moduleA };
     \`\`\`
     **App.js**
     \`\`\`javascript
     import React, { Component } from 'react';

     class App extends Component {
       handleClick = () => {
         import('./moduleA')
           .then(({ moduleA }) => {
             // Use moduleA
           })
           .catch(err => {
             // Handle failure
           });
       };

       render() {
         return (
           <div>
             <button onClick={this.handleClick}>Load</button>
           </div>
         );
       }
     }

     export default App;

     \`\`\``},249:{question:"249. ## What is the benefit of strict mode?",answer:`
     The <StrictMode> will be  helpful in the below cases

     1. Identifying components with **unsafe lifecycle methods**.
     2. Warning about **legacy string ref** API usage.
     3. Detecting unexpected **side effects**.
     4. Detecting **legacy context** API.
     5. Warning about deprecated findDOMNode usage`},250:{question:"250. ## What are Keyed Fragments?",answer:`
     The Fragments declared with the explicit <React.Fragment> syntax may have keys. The general use case is mapping a collection to an array of fragments as below,

     \`\`\`javascript
     function Glossary(props) {
       return (
         <dl>
           {props.items.map(item => (
             // Without the \`key\`, React will fire a key warning
             <React.Fragment key={item.id}>
               <dt>{item.term}</dt>
               <dd>{item.description}</dd>
             </React.Fragment>
           ))}
         </dl>
       );
     }
     \`\`\`

     **Note:** key is the only attribute that can be passed to Fragment. In the future, there might be a support for additional attributes, such as event handlers.`},251:{question:"251. ## Does React support all HTML attributes?",answer:`
     As of React 16, both standard or custom DOM attributes are fully supported. Since React components often take both custom and DOM-related props, React uses the camelCase convention just like the DOM APIs.

     Let us take few props with respect to standard HTML attributes,

     \`\`\`javascript
     <div tabIndex="-1" />      // Just like node.tabIndex DOM API
     <div className="Button" /> // Just like node.className DOM API
     <input readOnly={true} />  // Just like node.readOnly DOM API
     \`\`\`
     These props work similarly to the corresponding HTML attributes, with the exception of the special cases. It also support all SVG attributes.`},252:{question:"252. ## What are the limitations with HOCs?",answer:`

     Higher-order components come with a few caveats apart from its benefits. Below are the few listed in an order,
     1. **Don\u2019t use HOCs inside the render method:**
        It is not recommended to apply a HOC to a component within the render method of a component.
        \`\`\`javascript
        render() {
          // A new version of EnhancedComponent is created on every render
          // EnhancedComponent1 !== EnhancedComponent2
          const EnhancedComponent = enhance(MyComponent);
          // That causes the entire subtree to unmount/remount each time!
          return <EnhancedComponent />;
        }
        \`\`\`
        The above code impacts on performance by remounting a component that causes the state of that component and all of its children to be lost. Instead, apply HOCs outside the component definition so that the resulting component is created only once.

     2. **Static methods must be copied over:**
        When you apply a HOC to a component the new component does not have any of the static methods of the original component
        \`\`\`javascript
        // Define a static method
        WrappedComponent.staticMethod = function() {/*...*/}
        // Now apply a HOC
        const EnhancedComponent = enhance(WrappedComponent);

        // The enhanced component has no static method
        typeof EnhancedComponent.staticMethod === 'undefined' // true
        \`\`\`
        You can overcome this by copying the methods onto the container before returning it,

        \`\`\`javascript
        function enhance(WrappedComponent) {
          class Enhance extends React.Component {/*...*/}
          // Must know exactly which method(s) to copy :(
          Enhance.staticMethod = WrappedComponent.staticMethod;
          return Enhance;
        }
        \`\`\`
     3. **Refs aren\u2019t passed through:**
        For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API`},253:{question:"253. ## How to debug forwardRefs in DevTools?",answer:`

     **React.forwardRef** accepts a render function as parameter and DevTools uses this function to determine what to display for the ref forwarding component.

     For example, If you don't name the render function or not using displayName property then it will appear as \u201DForwardRef\u201D in the DevTools,

     \`\`\`javascript
     const WrappedComponent = React.forwardRef((props, ref) => {
       return <LogProps {...props} forwardedRef={ref} />;
     });
     \`\`\`

     But If you name the render function then it will appear as **\u201DForwardRef(myFunction)\u201D**

     \`\`\`javascript
     const WrappedComponent = React.forwardRef(
       function myFunction(props, ref) {
         return <LogProps {...props} forwardedRef={ref} />;
       }
     );
     \`\`\`

     As an alternative, You can also set displayName property for forwardRef function,

     \`\`\`javascript
     function logProps(Component) {
       class LogProps extends React.Component {
         // ...
       }

       function forwardRef(props, ref) {
         return <LogProps {...props} forwardedRef={ref} />;
       }

       // Give this component a more helpful display name in DevTools.
       // e.g. "ForwardRef(logProps(MyComponent))"
       const name = Component.displayName || Component.name;
       forwardRef.displayName = \`logProps(\${name})\`;

       return React.forwardRef(forwardRef);
     }
     \`\`\``},254:{question:"254. ## When component props defaults to true?",answer:"\n     If you pass no value for a prop, it defaults to true. This behavior is available so that it matches the behavior of HTML.\n\n     For example, below expressions are equivalent,\n\n     ```javascript\n     <MyInput autocomplete />\n\n     <MyInput autocomplete={true} />\n     ```\n     **Note:** It is not recommended to use this approach because it can be confused with the ES6 object shorthand (example, `{name}` which is short for `{name: name}`)"},255:{question:"255. ## What is NextJS and major features of it?",answer:`
     Next.js is a popular and lightweight framework for static and server\u2011rendered applications built with React. It also provides styling and routing solutions. Below are the major features provided by NextJS,

     1. Server-rendered by default
     2. Automatic code splitting for faster page loads
     3. Simple client-side routing (page based)
     4. Webpack-based dev environment which supports (HMR)
     5. Able to implement with Express or any other Node.js HTTP server
     6. Customizable with your own Babel and Webpack configurations`},256:{question:"256. ## How do you pass an event handler to a component?",answer:"\n     You can pass event handlers and other functions as props to child components. It can be used in child component as  below,\n\n     ```html\n     <button onClick={this.handleClick}>\n     ```"},257:{question:"257. ## Is it good to use arrow functions in render methods?",answer:`
     Yes, You can use. It is often the easiest way to pass parameters to callback functions. But you need to optimize the performance while using it.

     \`\`\`javascript
     class Foo extends Component {
       handleClick() {
         console.log('Click happened');
       }
       render() {
         return <button onClick={() => this.handleClick()}>Click Me</button>;
       }
     }
     \`\`\`

     **Note:** Using an arrow function in render method creates a new function each time the component renders, which may have performance implications`},258:{question:"258. ## How to prevent a function from being called multiple times?",answer:`
     If you use an event handler such as **onClick or onScroll** and want to prevent the callback from being fired too quickly, then you can limit the rate at which callback is executed. This can be achieved in the below possible ways,

     1. **Throttling:** Changes based on a time based frequency. For example, it can be used using _.throttle lodash function
     2. **Debouncing:** Publish changes after a period of inactivity. For example, it can be used using _.debounce lodash function
     3. **RequestAnimationFrame throttling:** Changes based on requestAnimationFrame. For example, it can be used using raf-schd lodash function`},259:{question:"259. ## How JSX prevents Injection Attacks?",answer:`
     React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that\u2019s not explicitly written in your application. Everything is converted to a string before being rendered.

     For example, you can embed user input as below,

     \`\`\`javascript
     const name = response.potentiallyMaliciousInput;
     const element = <h1>{name}</h1>;
     \`\`\`
     This way you can prevent XSS(Cross-site-scripting) attacks in the application.`},260:{question:"260. ## How do you update rendered elements?",answer:`
     You can update UI(represented by rendered element) by passing the newly created element to ReactDOM's render method.

     For example, lets take a ticking clock example, where it updates the time by calling render method multiple times,

     \`\`\`javascript
     function tick() {
       const element = (
         <div>
           <h1>Hello, world!</h1>
           <h2>It is {new Date().toLocaleTimeString()}.</h2>
         </div>
       );
       ReactDOM.render(element, document.getElementById('root'));
     }

     setInterval(tick, 1000);
     \`\`\``},261:{question:"261. ## How do you say that props are readonly?",answer:`
     When you declare a component as a function or a class, it must never modify its own props.

     Let us take a below capital function,

     \`\`\`javascript
     function capital(amount, interest) {
        return amount + interest;
     }
     \`\`\`
     The above function is called \u201Cpure\u201D because it does not attempt to change their inputs, and always return the same result for the same inputs. Hence, React has a single rule saying "All React components must act like pure functions with respect to their props."`},262:{question:"262. ## How do you say that state updates are merged?",answer:`
     When you call setState() in the component, React merges the object you provide into the current state.

     For example, let us take a facebook user with posts and comments details as state variables,

     \`\`\`javascript
       constructor(props) {
         super(props);
         this.state = {
           posts: [],
           comments: []
         };
       }
     \`\`\`

     Now you can update them independently with separate \`setState()\` calls as below,

     \`\`\`javascript
      componentDidMount() {
         fetchPosts().then(response => {
           this.setState({
             posts: response.posts
           });
         });

         fetchComments().then(response => {
           this.setState({
             comments: response.comments
           });
         });
       }
     \`\`\`
     As mentioned in the above code snippets, \`this.setState({comments})\` updates only comments variable without modifying or replacing \`posts\` variable.`},263:{question:"263. ## How do you pass arguments to an event handler?",answer:"\n     During iterations or loops, it is common to pass an extra parameter to an event handler. This can be achieved through arrow functions or bind method.\n\n     Let us take an example of user details updated in a grid,\n\n     ```javascript\n     <button onClick={(e) => this.updateUser(userId, e)}>Update User details</button>\n     <button onClick={this.updateUser.bind(this, userId)}>Update User details</button>\n     ```\n     In the both approaches, the synthetic argument `e` is passed as a second argument. You need to pass it explicitly for arrow functions and it will be passed automatically for `bind` method."},264:{question:"264. ## How to prevent component from rendering?",answer:`
     You can prevent component from rendering by returning null based on specific condition. This way it can conditionally render component.

     \`\`\`javascript
     function Greeting(props) {
       if (!props.loggedIn) {
         return null;
       }

       return (
         <div className="greeting">
           welcome, {props.name}
         </div>
       );
     }
     \`\`\`
     \`\`\`javascript
     class User extends React.Component {
       constructor(props) {
         super(props);
         this.state = {loggedIn: false, name: 'John'};
       }

       render() {
        return (
            <div>
              //Prevent component render if it is not loggedIn
              <Greeting loggedIn={this.state.loggedIn} />
              <UserDetails name={this.state.name}>
            </div>
        );
       }
     \`\`\`
     In the above example, the \`greeting\` component skips its rendering section by applying condition and returning null value.`},265:{question:"265. ## What are the conditions to safely use the index as a key?",answer:`
     There are three conditions to make sure, it is safe use the index as a key.

     1. The list and items are static\u2013 they are not computed and do not change
     2. The items in the list have no ids
     3. The list is never reordered or filtered.`},266:{question:"266. ## Should keys be globally unique?",answer:`
     The keys used within arrays should be unique among their siblings but they don\u2019t need to be globally unique. i.e, You can use the same keys with two different arrays.

     For example, the below \`Book\` component uses two arrays with different arrays,

     \`\`\`javascript
     function Book(props) {
       const index = (
         <ul>
           {props.pages.map((page) =>
             <li key={page.id}>
               {page.title}
             </li>
           )}
         </ul>
       );
       const content = props.pages.map((page) =>
         <div key={page.id}>
           <h3>{page.title}</h3>
           <p>{page.content}</p>
           <p>{page.pageNumber}</p>
         </div>
       );
       return (
         <div>
           {index}
           <hr />
           {content}
         </div>
       );
     }
     \`\`\``},267:{question:"267. ## What is the popular choice for form handling?",answer:`
     \`Formik\` is a form library for react which provides solutions such as validation, keeping track of the visited fields, and handling form submission.

     In detail, You can categorize them as follows,

     1. Getting values in and out of form state
     2. Validation and error messages
     3. Handling form submission

     It is used to create a scalable, performant, form helper with a minimal API to solve annoying stuff.`},268:{question:"268. ## What are the advantages of formik over redux form library?",answer:`
     Below are the main reasons to recommend formik over redux form library,

     1. The form state is inherently short-term and local, so tracking it in Redux (or any kind of Flux library) is unnecessary.
     2. Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This way it increases input latency for large apps.
     3. Redux-Form is 22.5 kB minified gzipped whereas Formik is 12.7 kB`},269:{question:"269. ## Why are you not required to use inheritance?",answer:`
     In React, it is recommended to use composition over inheritance to reuse code between components. Both Props and composition give you all the flexibility you need to customize a component\u2019s look and behavior explicitly and safely.
     Whereas, If you want to reuse non-UI functionality between components, it is suggested to extract it into a separate JavaScript module. Later components import it and use that function, object, or class, without extending it.`},270:{question:"270. ## Can I use web components in react application?",answer:`
     Yes, you can use web components in a react application. Even though many developers won't use this combination, it may require especially if you are using third-party UI components that are written using Web Components.

     For example, let us use \`Vaadin\` date picker web component as below,

     \`\`\`javascript
     import React, { Component } from 'react';
     import './App.css';
     import '@vaadin/vaadin-date-picker';
     class App extends Component {
       render() {
         return (
           <div className="App">
             <vaadin-date-picker label="When were you born?"></vaadin-date-picker>
           </div>
         );
       }
     }
     export default App;
     \`\`\``},271:{question:"271. ## What is dynamic import?",answer:`
     You can achieve code-splitting in your app using dynamic import.

     Let's take an example of addition,

     1. **Normal Import**
     \`\`\`javascript
     import { add } from './math';
     console.log(add(10, 20));
     \`\`\`
     2. **Dynamic Import**
     \`\`\`javascript
     import("./math").then(math => {
       console.log(math.add(10, 20));
     });
     \`\`\``},272:{question:"272. ## What are loadable components?",answer:`
     If you want to do code-splitting in a server rendered app, it is recommend to use Loadable Components because React.lazy and Suspense is not yet available for server-side rendering. Loadable lets you render a dynamic import as a regular component.

     Lets take an example,

     \`\`\`javascript
     import loadable from '@loadable/component'

     const OtherComponent = loadable(() => import('./OtherComponent'))

     function MyComponent() {
       return (
         <div>
           <OtherComponent />
         </div>
       )
     }
     \`\`\`
     Now OtherComponent will be loaded in a separated bundle`},273:{question:"273. ## What is suspense component?",answer:`
     If the module containing the dynamic import is not yet loaded by the time parent component renders, you must show some fallback content while you\u2019re waiting for it to load using a loading indicator. This can be done using **Suspense** component.

     For example, the below code uses suspense component,

     \`\`\`javascript
     const OtherComponent = React.lazy(() => import('./OtherComponent'));

     function MyComponent() {
       return (
         <div>
           <Suspense fallback={<div>Loading...</div>}>
             <OtherComponent />
           </Suspense>
         </div>
       );
     }
     \`\`\`
     As mentioned in the above code, Suspense is wrapped above the lazy component.`},274:{question:"274. ## What is route based code splitting?",answer:`
     One of the best place to do code splitting is with routes. The entire page is going to re-render at once so users are unlikely to interact with other elements in the page at the same time. Due to this, the user experience won't be disturbed.

     Let us take an example of route based website using libraries like React Router with React.lazy,

     \`\`\`javascript
     import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
     import React, { Suspense, lazy } from 'react';

     const Home = lazy(() => import('./routes/Home'));
     const About = lazy(() => import('./routes/About'));

     const App = () => (
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
           </Switch>
         </Suspense>
       </Router>
     );
     \`\`\`
     In the above code, the code splitting will happen at each route level.`},275:{question:"275. ## Give an example on How to use context?",answer:`
     **Context** is designed to share data that can be considered **global** for a tree of React components.

     For example, in the code below lets manually thread through a \u201Ctheme\u201D prop in order to style the Button component.

     \`\`\`javascript
     //Lets create a context with a default theme value "luna"
     const ThemeContext = React.createContext('luna');
     // Create App component where it uses provider to pass theme value in the tree
     class App extends React.Component {
       render() {
         return (
           <ThemeContext.Provider value="nova">
             <Toolbar />
           </ThemeContext.Provider>
         );
       }
     }
     // A middle component where you don't need to pass theme prop anymore
     function Toolbar(props) {
       return (
         <div>
           <ThemedButton />
         </div>
       );
     }
     // Lets read theme value in the button component to use
     class ThemedButton extends React.Component {
       static contextType = ThemeContext;
       render() {
         return <Button theme={this.context} />;
       }
     }
     \`\`\``},276:{question:"276. ## What is the purpose of default value in context?",answer:`
     The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.

     Below code snippet provides default theme value as Luna.

     \`\`\`javascript
     const MyContext = React.createContext(defaultValue);
     \`\`\``},277:{question:"277. ## How do you use contextType?",answer:`
     ContextType is used to consume the context object. The contextType property can be used in two ways,

     1. **contextType as property of class:**
         The contextType property on a class can be assigned a Context object created by React.createContext(). After that, you can consume the nearest current value of that Context type using this.context in any of the lifecycle methods and render function.

         Lets assign contextType property on MyClass as below,

         \`\`\`javascript
         class MyClass extends React.Component {
           componentDidMount() {
             let value = this.context;
             /* perform a side-effect at mount using the value of MyContext */
           }
           componentDidUpdate() {
             let value = this.context;
             /* ... */
           }
           componentWillUnmount() {
             let value = this.context;
             /* ... */
           }
           render() {
             let value = this.context;
             /* render something based on the value of MyContext */
           }
         }
         MyClass.contextType = MyContext;
         \`\`\`

     2. **Static field**
         You can use a static class field to initialize your contextType using public class field syntax.

         \`\`\`javascript
         class MyClass extends React.Component {
           static contextType = MyContext;
           render() {
             let value = this.context;
             /* render something based on the value */
           }
         }
         \`\`\``},278:{question:"278. ## What is a consumer?",answer:`
     A Consumer is a React component that subscribes to context changes. It requires a function as a child which receives current context value as argument and returns a react node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree.

     Lets take a simple example,

     \`\`\`javascript
     <MyContext.Consumer>
       {value => /* render something based on the context value */}
     </MyContext.Consumer>
     \`\`\``},279:{question:"279. ## How do you solve performance corner cases while using context?",answer:`
     The context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider\u2019s parent re-renders.

     For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.

     \`\`\`javascript
     class App extends React.Component {
       render() {
         return (
           <Provider value={{something: 'something'}}>
             <Toolbar />
           </Provider>
         );
       }
     }
     \`\`\`

     This can be solved by lifting up the value to parent state,

     \`\`\`javascript
     class App extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           value: {something: 'something'},
         };
       }

       render() {
         return (
           <Provider value={this.state.value}>
             <Toolbar />
           </Provider>
         );
       }
     }
     \`\`\``},280:{question:"280. ## What is the purpose of forward ref in HOCs?",answer:`
     Refs will not get passed through because ref is not a prop. It is handled differently by React just like **key**. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component. In this case, you can use Forward Ref API. For example, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.

     The below HOC logs all props,
     
     \`\`\`javascript
         function logProps(Component) {
           class LogProps extends React.Component {
             componentDidUpdate(prevProps) {
               console.log('old props:', prevProps);
               console.log('new props:', this.props);
             }

             render() {
               const {forwardedRef, ...rest} = this.props;

               // Assign the custom prop "forwardedRef" as a ref
               return <Component ref={forwardedRef} {...rest} />;
             }
           }

           return React.forwardRef((props, ref) => {
             return <LogProps {...props} forwardedRef={ref} />;
           });
         }
     \`\`\`

     Let's use this HOC to log all props that get passed to our \u201Cfancy button\u201D component,

     \`\`\`javascript
         class FancyButton extends React.Component {
           focus() {
             // ...
           }

           // ...
         }
         export default logProps(FancyButton);
     \`\`\`

     Now let's create a ref and pass it to FancyButton component. In this case, you can set focus to button element.

     \`\`\`javascript
         import FancyButton from './FancyButton';

         const ref = React.createRef();
         ref.current.focus();
         <FancyButton
           label="Click Me"
           handleClick={handleClick}
           ref={ref}
         />;
     \`\`\``},281:{question:"281. ## Is ref argument available for all functions or class components?",answer:`
     Regular function or class components don\u2019t receive the ref argument, and ref is not available in props either. The second ref argument only exists when you define a component with React.forwardRef call.`},282:{question:"282. ## Why do you need additional care for component libraries while using forward refs?",answer:`
     When you start using forwardRef in a component library, you should treat it as a breaking change and release a new major version of your library. This is because your library likely has a different behavior such as what refs get assigned to, and what types are exported. These changes can break apps and other libraries that depend on the old behavior.`},283:{question:"283. ## How to create react class components without ES6?",answer:`
     If you don\u2019t use ES6 then you may need to use the create-react-class module instead. For default props, you need to define getDefaultProps() as a function on the passed object. Whereas for initial state, you have to provide a separate getInitialState method that returns the initial state.

     \`\`\`javascript
     var Greeting = createReactClass({
       getDefaultProps: function() {
           return {
             name: 'Jhohn'
           };
         },
       getInitialState: function() {
           return {message: this.props.message};
         },
       handleClick: function() {
          console.log(this.state.message);
       },
       render: function() {
         return <h1>Hello, {this.props.name}</h1>;
       }
     });
     \`\`\`
     **Note:** If you use createReactClass then auto binding is available for all methods. i.e, You don't need to use \`.bind(this)\` with in constructor for event handlers.`},284:{question:"284. ## Is it possible to use react without JSX?",answer:`
     Yes, JSX is not mandatory for using React. Actually it is convenient when you don\u2019t want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling \`React.createElement(component, props, ...children)\`.

     For example, let us take a greeting example with JSX,

     \`\`\`javascript
     class Greeting extends React.Component {
       render() {
         return <div>Hello {this.props.message}</div>;
       }
     }

     ReactDOM.render(
       <Greeting message="World" />,
       document.getElementById('root')
     );
     \`\`\`

     You can write the same code without JSX as below,

     \`\`\`javascript
     class Greeting extends React.Component {
       render() {
         return React.createElement('div', null, \`Hello \${this.props.message}\`);
       }
     }

     ReactDOM.render(
       React.createElement(Greeting, {message: 'World'}, null),
       document.getElementById('root')
     );
     \`\`\``},285:{question:"285. ## What is diffing algorithm?",answer:`
     React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

     In this case, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

     1. Two elements of different types will produce different trees.
     2. The developer can hint at which child elements may be stable across different renders with a key prop.`},286:{question:"286. ## What are the rules covered by diffing algorithm?",answer:`
     When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. It covers the below rules during reconciliation algorithm,

     1. **Elements Of Different Types:**
        Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. For example,  elements <a> to <img>, or from <Article> to <Comment> of different types lead a full rebuild.
     2. **DOM Elements Of The Same Type:**
        When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. Lets take an example with same DOM elements except className attribute,
        \`\`\`javascript
        <div className="show" title="ReactJS" />

        <div className="hide" title="ReactJS" />
        \`\`\`
     3. **Component Elements Of The Same Type:**
        When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance. After that, the render() method is called and the diff algorithm recurses on the previous result and the new result.
     4. **Recursing On Children:**
        when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there\u2019s a difference. For example, when adding an element at the end of the children, converting between these two trees works well.
        \`\`\`javascript
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>

        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>

        \`\`\`
     5. **Handling keys:**
     React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key can make the tree conversion efficient,
     \`\`\`javascript
     <ul>
       <li key="2015">Duke</li>
       <li key="2016">Villanova</li>
     </ul>

     <ul>
       <li key="2014">Connecticut</li>
       <li key="2015">Duke</li>
       <li key="2016">Villanova</li>
     </ul>
     \`\`\``},287:{question:"287. ## When do you need to use refs?",answer:`
     There are few use cases to go for refs,

     1. Managing focus, text selection, or media playback.
     2. Triggering imperative animations.
     3. Integrating with third-party DOM libraries.`},288:{question:"288. ## Must prop be named as render for render props?",answer:`
     Even though the pattern named render props, you don\u2019t have to use a prop named render to use this pattern. i.e,  Any prop that is a function that a component uses to know what to render is technically a \u201Crender prop\u201D. Lets take an example with the children prop for render props,

     \`\`\`javascript
     <Mouse children={mouse => (
       <p>The mouse position is {mouse.x}, {mouse.y}</p>
     )}/>
     \`\`\`

     Actually children prop doesn\u2019t need to be named in the list of \u201Cattributes\u201D in JSX element. Instead, you can keep it directly inside element,

     \`\`\`javascript
     <Mouse>
       {mouse => (
         <p>The mouse position is {mouse.x}, {mouse.y}</p>
       )}
     </Mouse>
     \`\`\`

     While using this above technique(without any name), explicitly state that children should be a function in your propTypes.

     \`\`\`javascript
     Mouse.propTypes = {
       children: PropTypes.func.isRequired
     };
     \`\`\``},289:{question:"289. ## What are the problems of using render props with pure components?",answer:`
     If you create a function inside a render method, it negates the purpose of pure component. Because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop. You can solve this issue by defining the render function as instance method.`},290:{question:"290. ## How do you create HOC using render props?",answer:`
     You can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a <Mouse> component, you could easily create one using a regular <Mouse> with a render prop.

     \`\`\`javascript
     function withMouse(Component) {
       return class extends React.Component {
         render() {
           return (
             <Mouse render={mouse => (
               <Component {...this.props} mouse={mouse} />
             )}/>
           );
         }
       }
     }
     \`\`\`

     This way render props gives the flexibility of using either pattern.`},291:{question:"291. ## What is windowing technique?",answer:`
     Windowing is a technique that only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created. If your application renders long lists of data then this technique is recommended. Both react-window and react-virtualized are popular windowing libraries which provides several reusable components for displaying lists, grids, and tabular data.`},292:{question:"292. ## How do you print falsy values in JSX?",answer:`
     The falsy values such as false, null, undefined, and true are valid children but they don't render anything. If you still want to display them then you need to convert it to string. Let's take an example on how to convert to a string,

     \`\`\`javascript
     <div>
       My JavaScript variable is {String(myVariable)}.
     </div>
     \`\`\``},293:{question:"293. ## What is the typical use case of portals?",answer:`
     React portals are very useful when a parent component has overflow: hidden or has properties that affect the stacking context (e.g. z-index, position, opacity) and you need to visually \u201Cbreak out\u201D of its container.

     For example, dialogs, global message notifications, hovercards, and tooltips.`},294:{question:"294. ## How do you set default value for uncontrolled component?",answer:`
     In React, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you might want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a **defaultValue** attribute instead of **value**.

     \`\`\`javascript
     render() {
       return (
         <form onSubmit={this.handleSubmit}>
           <label>
             User Name:
             <input
               defaultValue="John"
               type="text"
               ref={this.input} />
           </label>
           <input type="submit" value="Submit" />
         </form>
       );
     }
     \`\`\`
     The same applies for \`select\` and \`textArea\` inputs. But you need to use **defaultChecked** for \`checkbox\` and \`radio\` inputs.`},295:{question:"295. ## What is your favorite React stack?",answer:`
     Even though the tech stack varies from developer to developer, the most popular stack is used in react boilerplate project code. It mainly uses Redux and redux-saga for state management and asynchronous side-effects, react-router for routing purpose, styled-components for styling react components, axios for invoking REST api, and other supported stack such as webpack, reselect, ESNext, Babel.
     You can clone the project https://github.com/react-boilerplate/react-boilerplate and start working on any new react project.`},296:{question:"296. ## What is the difference between Real DOM and Virtual DOM?",answer:`
     Below are the main differences between Real DOM and Virtual DOM,

     | Real DOM | Virtual DOM |
     | ----- | ------- |
     | Updates are slow | Updates are fast |
     | DOM manipulation is very expensive. | DOM manipulation is very easy |
     | You can update HTML directly. | You Can\u2019t directly update HTML |
     | It causes too much of memory wastage | 	There is no memory wastage|
     | Creates a new DOM if element updates | It updates the JSX if element update|`},297:{question:"297. ## How to add Bootstrap to a react application?",answer:`
     Bootstrap can be added to your React app in a three possible ways,

     1. Using the Bootstrap CDN:
        This is the easiest way to add bootstrap. Add both bootstrap CSS and JS resources in a head tag.
     2. Bootstrap as Dependency:
        If you are using a build tool or a module bundler such as Webpack, then this is the preferred option for adding Bootstrap to your React application
        \`\`\`javascript
        npm install bootstrap
        \`\`\`
     3. React Bootstrap Package:
        In this case, you can add Bootstrap to our React app is by using a package that has rebuilt Bootstrap components to work particularly as React components. Below packages are popular in this category,
        1. react-bootstrap
        2. reactstrap`},298:{question:"298. ## Can you list down top websites or applications using react as front end framework?",answer:`
     Below are the \`top 10 websites\` using React as their front-end framework,

     1. Facebook
     2. Uber
     3. Instagram
     4. WhatsApp
     5. Khan Academy
     6. Airbnb
     7. Dropbox
     8. Flipboard
     9. Netflix
     10. PayPal`},299:{question:"299. ## Is it recommended to use CSS In JS technique in React?",answer:`
     React does not have any opinion about how styles are defined but if you are a beginner then good starting point is to define your styles in a separate *.css file as usual and refer to them using className. This functionality is not part of React but came from third-party libraries. But If you want to try a different approach(CSS-In-JS) then styled-components library is a good option.`},300:{question:"300. ## Do I need to rewrite all my class components with hooks?",answer:`
     No. But you can try Hooks in a few components(or new components) without rewriting any existing code. Because there are no plans to remove classes in ReactJS.`},301:{question:"301. ## How to fetch data with React Hooks?",answer:`
     The effect hook called \`useEffect\` is used to fetch the data with axios from the API and to set the data in the local state of the component with the state hook\u2019s update function.

     Let's take an example in which it fetches list of react articles from the API

     \`\`\`javascript
     import React, { useState, useEffect } from 'react';
     import axios from 'axios';

     function App() {
       const [data, setData] = useState({ hits: [] });

       useEffect(() => {
         (async () => {
           const result = await axios(
             'http://hn.algolia.com/api/v1/search?query=react',
           );

           setData(result.data);
         })()
       }, []);

       return (
         <ul>
           {data.hits.map(item => (
             <li key={item.objectID}>
               <a href={item.url}>{item.title}</a>
             </li>
           ))}
         </ul>
       );
     }

     export default App;
     \`\`\`

     Remember we provided an empty array as second argument to the effect hook to avoid activating it on component updates but only on mounting of the component. i.e, It fetches only on component mount.`},302:{question:"302. ## Is Hooks cover all use cases for classes?",answer:`
     Hooks doesn't cover all use cases of classes but there is a plan to add them soon. Currently there are no Hook equivalents to the uncommon **getSnapshotBeforeUpdate** and **componentDidCatch** lifecycles yet.`},303:{question:"303. ## What is the stable release for hooks support?",answer:`
     React includes a stable implementation of React Hooks in 16.8 release for below packages

     1. React DOM
     2. React DOM Server
     3. React Test Renderer
     4. React Shallow Renderer`},304:{question:"304. ## Why do we use array destructuring (square brackets notation) in `useState`?",answer:"\n     When we declare a state variable with `useState`, it returns a pair \u2014 an array with two items. The first item is the current value, and the second is a function that updates the value. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.\n\n     For example, the array index access would look as follows:\n\n     ```javascript\n      var userStateVariable = useState('userProfile'); // Returns an array pair\n      var user = userStateVariable[0]; // Access first item\n      var setUser = userStateVariable[1]; // Access second item\n     ```\n     Whereas with array destructuring the variables can be accessed as follows:\n     ```javascript\n     const [user, setUser] = useState('userProfile');\n     ```"},305:{question:"305. ## What are the sources used for introducing hooks?",answer:`
     Hooks got the ideas from several different sources. Below are some of them,

     1. Previous experiments with functional APIs in the react-future repository
     2. Community experiments with render prop APIs such as Reactions Component
     3. State variables and state cells in DisplayScript.
     4. Subscriptions in Rx.
     5. Reducer components in ReasonReact.`},306:{question:"306. ## How do you access imperative API of web components?",answer:`
     Web Components often expose an imperative API to implement its functions. You will need to use a **ref** to interact with the DOM node directly if you want to access imperative API of a web component. But if you are using third-party Web Components, the best solution is to write a React component that behaves as a **wrapper** for your Web Component.`},307:{question:"307. ## What is formik?",answer:`
     Formik is a small react form library that helps you with the three major problems,

     1. Getting values in and out of form state
     2. Validation and error messages
     3. Handling form submission`},308:{question:"308. ## What are typical middleware choices for handling asynchronous calls in Redux?",answer:"\n     Some of the popular middleware choices for handling asynchronous calls in Redux eco system are `Redux Thunk, Redux Promise, Redux Saga`."},309:{question:"309. ## Do browsers understand JSX code?",answer:`
     No, browsers can't understand JSX code. You need a transpiler to convert your JSX to regular Javascript that browsers can understand. The most widely used transpiler right now is Babel.`},310:{question:"310. ## Describe about data flow in react?",answer:`
     React implements one-way reactive data flow using props which reduce boilerplate and is easier to understand than traditional two-way data binding.`},311:{question:"311. ## What is react scripts?",answer:"\n     The `react-scripts` package is a set of scripts from the create-react-app starter pack which helps you kick off projects without configuring. The `react-scripts start` command sets up the development environment and starts a server, as well as hot module reloading."},312:{question:"312. ## What are the features of create react app?",answer:`
     Below are the list of some of the features provided by create react app.

     1. React, JSX, ES6, Typescript and Flow syntax support.
     2. Autoprefixed CSS
     3. CSS Reset/Normalize  
     4. A live development server
     5. A fast interactive unit test runner with built-in support for coverage reporting
     6. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps
     7. An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.`},313:{question:"313. ## What is the purpose of renderToNodeStream method?",answer:"\n     The `ReactDOMServer#renderToNodeStream` method is used to generate HTML on the server and send the markup down on the initial request for faster page loads. It also helps search engines to crawl your pages easily for SEO purposes.\n     **Note:** Remember this method is not available in the browser but only server."},314:{question:"314. ## What is MobX?",answer:"\n     MobX is a simple, scalable and battle tested state management solution for applying functional reactive programming (TFRP). For reactJs application, you need to install below packages,\n     ```bash\n     npm install mobx --save\n     npm install mobx-react --save\n     ```"},315:{question:"315. ## What are the differences between Redux and MobX?",answer:`
     Below are the main differences between Redux and MobX,

     | Topic | Redux | MobX |
     | ----- | ------- | ------- 
     | Definition| It is a javascript library for managing the application state | It is a library for reactively managing the state of your applications |
     | Programming | It is mainly written in ES6 | It is written in JavaScript(ES5) |
     | Data Store | There is only one large store exist for data storage | There is more than one store for storage |
     | Usage | Mainly used for large and complex applications | Used for simple applications |
     | Performance | Need to be improved | Provides better performance |
     | How it stores | Uses JS Object to store | Uses observable to store the data |`},316:{question:"316. ## Should I learn ES6 before learning ReactJS?",answer:`
     No, you don\u2019t have to learn es2015/es6 to learn react. But you may find many resources or React ecosystem uses ES6 extensively. Let's see some of the frequently used ES6 features,

     1. **Destructuring:** To get props and use them in a component
         \`\`\`javascript
         // in es 5
          var someData = this.props.someData
          var dispatch = this.props.dispatch

         // in es6
         const { someData, dispatch } = this.props
         \`\`\`
     2. Spread operator: Helps in passing props down into a component
         \`\`\`javascript
         // in es 5
         <SomeComponent someData={this.props.someData} dispatch={this.props.dispatch} />

         // in es6
         <SomeComponent {...this.props} />
         \`\`\`
     3. Arrow functions: Makes compact syntax
         \`\`\`javascript
         // es 5
         var users = usersList.map(function (user) {
          return <li>{user.name}</li>
         })
         // es 6
         const users = usersList.map(user => <li>{user.name}</li>);
         \`\`\``},317:{question:"317. ## What is Concurrent Rendering?",answer:`
     The Concurrent rendering makes React apps to be more responsive by rendering component trees without blocking the main UI thread. It allows React to interrupt a long-running render to handle a high-priority event. i.e, When you enabled concurrent Mode, React will keep an eye on other tasks that need to be done, and if there's something with a higher priority it will pause what it is currently rendering and let the other task finish first. You can enable this in two ways,

     \`\`\`javascript
     // 1. Part of an app by wrapping with ConcurrentMode
     <React.unstable_ConcurrentMode>
       <Something />
     </React.unstable_ConcurrentMode>

     // 2. Whole app using createRoot
     ReactDOM.unstable_createRoot(domNode).render(<App />);
     \`\`\``},318:{question:"318. ## What is the difference between async mode and concurrent mode?",answer:`
     Both refers the same thing. Previously concurrent Mode being referred to as "Async Mode" by React team. The name has been changed to highlight React\u2019s ability to perform work on different priority levels. So it avoids the confusion from other approaches to Async Rendering.`},319:{question:"319. ## Can I use javascript urls in react16.9?",answer:"\n     Yes, you can use javascript: URLs but it will log a warning in the console. Because URLs starting with javascript: are dangerous by including unsanitized output in a tag like ```<a href>``` and create a security hole.\n\n     ```javascript\n     const companyProfile = {\n       website: \"javascript: alert('Your website is hacked')\",\n     };\n     // It will log a warning\n     <a href={companyProfile.website}>More details</a>\n     ```\n     Remember that the future versions will throw an error for javascript URLs."},320:{question:"320. ## What is the purpose of eslint plugin for hooks?",answer:`
     The ESLint plugin enforces rules of Hooks to avoid bugs. It assumes that any function starting with \u201Duse\u201D and a capital letter right after it is a Hook. In particular, the rule enforces that,

     1. Calls to Hooks are either inside a PascalCase function (assumed to be a component) or another useSomething function (assumed to be a custom Hook).
     2. Hooks are called in the same order on every render.`},321:{question:"321. ## What is the difference between Imperative and Declarative in React?",answer:`
     Imagine a simple UI component, such as a "Like" button. When you tap it, it turns blue if it was previously grey, and grey if it was previously blue.

     The imperative way of doing this would be:

     \`\`\`javascript
     if( user.likes() ) {
         if( hasBlue() ) {
             removeBlue();
             addGrey();
         } else {
             removeGrey();
             addBlue();
         }
     }
     \`\`\`

     Basically, you have to check what is currently on the screen and handle all the changes necessary to redraw it with the current state, including undoing the changes from the previous state. You can imagine how complex this could be in a real-world scenario.

     In contrast, the declarative approach would be:

     \`\`\`javascript
     if( this.state.liked ) {
         return <blueLike />;
     } else {
         return <greyLike />;
     }
     \`\`\`

     Because the declarative approach separates concerns, this part of it only needs to handle how the UI should look in a sepecific state, and is therefore much simpler to understand.`},322:{question:"322. ## What are the benefits of using typescript with reactjs?",answer:`
     Below are some of the benefits of using typescript with Reactjs,

     1. It is possible to use latest JavaScript features
     2. Use of interfaces for complex type definitions
     3. IDEs such as VS Code was made for TypeScript
     4. Avoid bugs with the ease of readability and Validation`},323:{question:"323. ## How do you make sure that user remains authenticated on page refresh while using Context API State Management?",answer:`
When a user logs in and reload, to persist the state generally we add the load user action in the useEffect hooks in the main App.js. While using Redux, loadUser action can be easily accessed.

**App.js**

\`\`\`js
import {loadUser}  from '../actions/auth';
store.dispatch(loadUser());
\`\`\`

* But while using **Context API**, to access context in App.js, wrap the AuthState in index.js so that App.js can access the auth context. Now whenever the page reloads, no matter what route you are on, the user will be authenticated as **loadUser** action will be triggered on each re-render.

**index.js**

\`\`\`js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthState from './context/auth/AuthState'

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);
\`\`\`
**App.js**

\`\`\`js
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
  },[])
\`\`\`

**loadUser**

\`\`\`js
    const loadUser = async () => {
        const token = sessionStorage.getItem('token');

        if(!token){
            dispatch({
                type: ERROR
            })
        }
        setAuthToken(token);

        try {
            const res = await axios('/api/auth'); 

            dispatch({
                type: USER_LOADED,
                payload: res.data.data
            })
            
        } catch (err) {
           console.error(err); 
        }
    }
\`\`\``},324:{question:"324. ## What are the benefits of new JSX transform?",answer:`
     There are three major benefits of new JSX transform,

     1. It is possible to use JSX without importing React packages
     2. The compiled output might improve the bundle size in a small amount
     3. The future improvements provides the flexibility to reduce the number of concepts to learn React.`},325:{question:"325. ## How is the new JSX transform different from old transform??",answer:`
     The new JSX transform doesn\u2019t require React to be in scope. i.e, You don't need to import React package for simple scenarios.

     Let's take an example to look at the main differences between the old and the new transform,

     **Old Transform:**

     \`\`\`js
     import React from 'react';

     function App() {
       return <h1>Good morning!!</h1>;
     }
     \`\`\`

     Now JSX transform convert the above code into regular JavaScript as below,

     \`\`\`js
     import React from 'react';

     function App() {
       return React.createElement('h1', null, 'Good morning!!');
     }
     \`\`\`

     **New Transform:**

     The new JSX transform doesn't require any React imports

     \`\`\`js
     function App() {
       return <h1>Good morning!!</h1>;
     }
     \`\`\`

     Under the hood JSX transform compiles to below code

     \`\`\`js
     import {jsx as _jsx} from 'react/jsx-runtime';

     function App() {
       return _jsx('h1', { children: 'Good morning!!' });
     }
     \`\`\`

     **Note:** You still need to import React to use Hooks.`},326:{question:"326. ## How do you get redux scaffolding using create-react-app?",answer:`
     Redux team has provided official redux+js or redux+typescript templates for create-react-app project. The generated project setup includes,
     
     1. Redux Toolkit and React-Redux dependencies
     2. Create and configure Redux store
     3. React-Redux \`<Provider>\` passing the store to React components
     4. Small "counter" example to demo how to add redux logic and React-Redux hooks API to interact with the store from components
     
     The below commands need to be executed along with template option as below,
     
     1. **Javascript template:**
     \`\`\`js
     npx create-react-app my-app --template redux
     \`\`\`
     2. **Typescript template:**
     \`\`\`js
     npx create-react-app my-app --template redux-typescript
     \`\`\`\``},327:{question:"327. ## What are React Server components?",answer:`
     React Server Component is a way to write React component that gets rendered in the server-side with the purpose of improving React app performance. These components allow us to load components from the backend. 
    
     **Note:** React Server Components is still under development and not recommended for production yet.`},328:{question:"328. ## What is prop drilling?",answer:`
     Prop Drilling is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.`},329:{question:"329. ## What is state mutation and how to prevent it?",answer:`
                     
        \`State mutation\` happens when you try to update the state of a component without actually using \`setState\` function. This can happen when you are trying to do some computations using a state variable and unknowingly save the result in the same state variable. This is the main reason why it is advised to return new instances of state variables from the reducers by using Object.assign({}, ...) or spread syntax.

        This can cause unknown issues in the UI as the value of the state variable got updated without telling React to check what all components were being affected from this update and it can cause UI bugs.

        Ex:
        \`\`\`javascript
        class A extends React.component {
          constructor(props) {
            super(props);
            this.state = {
              loading: false
            }
         }

        componentDidMount() {
          let { loading } = this.state;
          loading = (() => true)(); // Trying to perform an operation and directly saving in a state variable
        }

        \`\`\`

        **How to prevent it:** Make sure your state variables are immutable by either enforcing immutability by using plugins like Immutable.js, always using \`setState\` to make updates, and returning new instances in reducers when sending updated state values.`},330:{question:"330. ## What is the difference between useState and useRef hook?",answer:`
     1. useState causes components to re-render after state updates whereas useRef doesn\u2019t cause a component to re-render when the value or state changes.
        Essentially, useRef is like a \u201Cbox\u201D that can hold a mutable value in its (.current) property.
     2. useState allows us to update the state inside components. While useRef allows refrencing DOM elements.`},331:{question:"331. ## What are the Differences Between Functional and Class Component",answer:`
  ## Class Component syntax


 \`\`\`
class Example extends Reacts.Component {
render(){
return <h1>This is a class component</h1>}
}

\`\`\`

> I guess we all know that **Pascal Case** is the accepted way of naming a component in react\`Example\`. 

# Functional Component syntax
Functional component has been improved over the years with some added features like Hooks
Here is a syntax for functional component

\`\`\`
function App(){
   return <div className="App">
     <h1>Hello, I'm a Nigerian</h1>
    </div>
}

\`\`\`
### States in Class Component 
states holds information or data about a component in react which may change over time.  in class component we can update the state, when a user interacts with it or maybe a server response using the \`setState()\` method and the initial state is been assigned in the \`Constructor( ) \`method using the the  \` this.state\` object. different data type can be passed in the this.state object, which can be string, boolean, numbers, etc. 
<strong> A simple example showing how we use the setState() and constructor() <strong>

\`\`\`
class Example extends Component {
  constructor() {
    super();
    this.state = {
      example: "This is a class component",
    };
  }
  changeText() {
    this.setState({
      example: "implementing the setState() in class component",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.example}</h1>
        <button
          onClick={() => {
            this.changeText();
          }}>
          Click!!
        </button>
      </>
    );
  }
}

\`\`\`
## Using Sates in Functional Components
Initially, we could not use state in functional components because it was only supported in class components. over the years hooks were implemented in functional component. The hooks that enable us to use state in functional component is called <strong>useState</strong>
 The useState( ) hook returns an array of the current state and a function ( setState) that we can use to update the value of the current state. The array is being destructured so we can can see the variables the array holds that is, the initial state and the updated state lets see an example

 

\`\`\`
function App() {
  const [country, setCountry] = useState("i'm a Nigerian");
  const change = () => {
    setCountry("i am a Canadian");
  };
  return (
    <div className="App">
      <h1>Hello, {country} </h1>
      <button onClick={change}>Change</button>
    </div>
  );
}
\`\`\`

<h4> Props in Class Component</h4>
 Props are referred to as "properties".  props are passed into react component just like arguments are passed into functions . Props are being specified as attribute just like your html. for example if the name attribute is "name " we assign a value to name. so basically, props are object that contains an attribute and its corresponding value. Data can be passed from parent component to the children component, but this data is immutable, which means that we cannot modify the props across another  component. here is an example 
\`\`\`
class Introduction extends React.Component {
  render() {
    return <h1> Hello, my name is {this.props.name} </h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Introduction name=" Queen Elizabeth" />
        <Introduction name=" Margret  Edeh" />
      </div>
    );
  }
}
\`\`\`

## Props in Functional Components

Props in functional components are similar to that of the class components, the difference is the absence of the 'this' keyword. We also destructure in a similar way without the 'this' keyword. they are also immutable in the functional component
\`\`\`
function Food(props) {
  return <h1>I love {props.fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <Food fav="Beans" />
      <Food fav="Yam and Egg sauce"/>
    </div>
  );
}
\`\`\` 
> As you can see in the example above there wasn't a need for the 'this' keyword.

\`\`\`

function Food(props) {
  const { fav } = props;
  return <h1>I love {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <Food fav="Beans" />
      <Food fav="Yam and Egg sauce" />
    </div>
  );
}
\`\`\`
summary:

*The functional components doesn't require the render method          
*Class component require the render() method that returns JSX.                                                  

To use states in functional component we use the **useState** hook.          
To use State in class components we use the constructor method and the setState function.
                                     
Functional components use the useEffect hook instead of lifecycle method [useEffect](https://www.w3schools.com/react/react_useeffect.asp )    
 Class components uses Lifecycle method    **componentWillUnmount** etc. [ Lifecycle methods](https://www.w3schools.com/react/react_lifecycle.asp )

  





## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask \u2014 do not get discouraged if you don't know the answer to all of them \u2060\u2014 that is ok!

Good luck with your interview \u{1F60A}

---`}},yy={v1:{id:"359af1a719f83e7f341cfbeb039147153f1f3b38",value:$u,initState(){const e={};return Object.keys($u).forEach(n=>e[n]={isDone:!1}),e}}},kl={ReactJS:yy};class $d{constructor(n){Ll(this,"storage");this.storage=window[n]}get(n){try{const t=this.storage.getItem(String(n));return this.checkJSON(t!=null?t:"")?JSON.parse(t):t}catch(t){return console.error("err in ls get",t),null}}getMultiple(n){try{let t={},r=n.length;for(;r--;)t[n[r]]=this.get(n[r]);return t}catch(t){console.error("err in ls get multi",t)}}get allItems(){try{let n={},t=Object.keys(this.storage),r=t.length;for(;r--;)n[t[r]]=this.get(t[r]);return n}catch(n){console.error("err in ls get all",n)}}set(n,t){try{const o=this.checkPrimitive(t)?t:JSON.stringify(t);this.storage.setItem(String(String(n)),o)}catch(r){console.error("err in ls set",r)}}setMultiple(n){try{Object.entries(n).forEach(([t,r])=>{this.set(t,r)})}catch(t){console.error("err in ls set multi",t)}}remove(n){try{return this.storage.removeItem(String(n))}catch(t){console.error("err in ls remove",t)}}removeMultiple(n){try{return n.forEach(t=>this.remove(t))}catch(t){console.error("err in ls remove multi",t)}}clear(){try{return this.storage.clear()}catch(n){console.error("err in ls remove all",n)}}checkJSON(n){try{JSON.parse(n)}catch{return!1}return!0}checkPrimitive(n){return n===null?!0:!(typeof n=="object"||typeof n=="function")}}const $t=new $d("localStorage");new $d("sessionStorage");function gy(){const{setPage:e,reactJS:n,setReactJS:t}=xl();function r(){const i=Object.keys(n!=null?n:{}).length;return`${Object.values(n!=null?n:{}).reduce((s,l)=>l.isDone?s+1:s,0)}/${i}`}function o(){$t.clear();const i=kl.ReactJS.v1.initState();$t.set("ReactJS",i),t(i)}return ge("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Dr("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[ge("button",{onClick:()=>e("InGame"),children:"START"}),ge("button",{onClick:o,children:"RESET"}),Dr("div",{children:["ReactJS: ",r()]})]})})}const Ju=["http","https","mailto","tel"];function wy(e){const n=(e||"").trim(),t=n.charAt(0);if(t==="#"||t==="/")return n;const r=n.indexOf(":");if(r===-1)return n;let o=-1;for(;++o<Ju.length;){const i=Ju[o];if(r===i.length&&n.slice(0,i.length).toLowerCase()===i)return n}return o=n.indexOf("?"),o!==-1&&r>o||(o=n.indexOf("#"),o!==-1&&r>o)?n:"javascript:void(0)"}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Jd=function(n){return n!=null&&n.constructor!=null&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)};function Ar(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Yu(e.position):"start"in e||"end"in e?Yu(e):"line"in e||"column"in e?ys(e):""}function ys(e){return Xu(e&&e.line)+":"+Xu(e&&e.column)}function Yu(e){return ys(e&&e.start)+"-"+ys(e&&e.end)}function Xu(e){return e&&typeof e=="number"?e:1}class ln extends Error{constructor(n,t,r){const o=[null,null];let i={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof t=="string"&&(r=t,t=void 0),typeof r=="string"){const a=r.indexOf(":");a===-1?o[1]=r:(o[0]=r.slice(0,a),o[1]=r.slice(a+1))}t&&("type"in t||"position"in t?t.position&&(i=t.position):"start"in t||"end"in t?i=t:("line"in t||"column"in t)&&(i.start=t)),this.name=Ar(t)||"1:1",this.message=typeof n=="object"?n.message:n,this.stack=typeof n=="object"?n.stack:"",this.reason=this.message,this.fatal,this.line=i.start.line,this.column=i.start.column,this.source=o[0],this.ruleId=o[1],this.position=i,this.actual,this.expected,this.file,this.url,this.note}}ln.prototype.file="";ln.prototype.name="";ln.prototype.reason="";ln.prototype.message="";ln.prototype.stack="";ln.prototype.fatal=null;ln.prototype.column=null;ln.prototype.line=null;ln.prototype.source=null;ln.prototype.ruleId=null;ln.prototype.position=null;const Sn={basename:vy,dirname:xy,extname:ky,join:Sy,sep:"/"};function vy(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');to(e);let t=0,r=-1,o=e.length,i;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.charCodeAt(o)===47){if(i){t=o+1;break}}else r<0&&(i=!0,r=o+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,s=n.length-1;for(;o--;)if(e.charCodeAt(o)===47){if(i){t=o+1;break}}else a<0&&(i=!0,a=o+1),s>-1&&(e.charCodeAt(o)===n.charCodeAt(s--)?s<0&&(r=o):(s=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function xy(e){if(to(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.charCodeAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.charCodeAt(0)===47?"/":".":n===1&&e.charCodeAt(0)===47?"//":e.slice(0,n)}function ky(e){to(e);let n=e.length,t=-1,r=0,o=-1,i=0,a;for(;n--;){const s=e.charCodeAt(n);if(s===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),s===46?o<0?o=n:i!==1&&(i=1):o>-1&&(i=-1)}return o<0||t<0||i===0||i===1&&o===t-1&&o===r+1?"":e.slice(o,t)}function Sy(...e){let n=-1,t;for(;++n<e.length;)to(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":by(t)}function by(e){to(e);const n=e.charCodeAt(0)===47;let t=Ry(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.charCodeAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function Ry(e,n){let t="",r=0,o=-1,i=0,a=-1,s,l;for(;++a<=e.length;){if(a<e.length)s=e.charCodeAt(a);else{if(s===47)break;s=47}if(s===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(t.length<2||r!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),o=a,i=0;continue}}else if(t.length>0){t="",r=0,o=a,i=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),r=a-o-1;o=a,i=0}else s===46&&i>-1?i++:i=-1}return t}function to(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Cy={cwd:Ty};function Ty(){return"/"}function gs(e){return e!==null&&typeof e=="object"&&e.href&&e.origin}function Ey(e){if(typeof e=="string")e=new URL(e);else if(!gs(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Py(e)}function Py(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.charCodeAt(t)===37&&n.charCodeAt(t+1)===50){const r=n.charCodeAt(t+2);if(r===70||r===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const ha=["history","path","basename","stem","extname","dirname"];class Yd{constructor(n){let t;n?typeof n=="string"||Jd(n)?t={value:n}:gs(n)?t={path:n}:t=n:t={},this.data={},this.messages=[],this.history=[],this.cwd=Cy.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<ha.length;){const i=ha[r];i in t&&t[i]!==void 0&&(this[i]=i==="history"?[...t[i]]:t[i])}let o;for(o in t)ha.includes(o)||(this[o]=t[o])}get path(){return this.history[this.history.length-1]}set path(n){gs(n)&&(n=Ey(n)),ma(n,"path"),this.path!==n&&this.history.push(n)}get dirname(){return typeof this.path=="string"?Sn.dirname(this.path):void 0}set dirname(n){Qu(this.basename,"dirname"),this.path=Sn.join(n||"",this.basename)}get basename(){return typeof this.path=="string"?Sn.basename(this.path):void 0}set basename(n){ma(n,"basename"),fa(n,"basename"),this.path=Sn.join(this.dirname||"",n)}get extname(){return typeof this.path=="string"?Sn.extname(this.path):void 0}set extname(n){if(fa(n,"extname"),Qu(this.dirname,"extname"),n){if(n.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Sn.join(this.dirname,this.stem+(n||""))}get stem(){return typeof this.path=="string"?Sn.basename(this.path,this.extname):void 0}set stem(n){ma(n,"stem"),fa(n,"stem"),this.path=Sn.join(this.dirname||"",n+(this.extname||""))}toString(n){return(this.value||"").toString(n)}message(n,t,r){const o=new ln(n,t,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}info(n,t,r){const o=this.message(n,t,r);return o.fatal=null,o}fail(n,t,r){const o=this.message(n,t,r);throw o.fatal=!0,o}}function fa(e,n){if(e&&e.includes(Sn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Sn.sep+"`")}function ma(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Qu(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Gu(e){if(e)throw e}var No=Object.prototype.hasOwnProperty,Xd=Object.prototype.toString,Ku=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,ec=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Xd.call(n)==="[object Array]"},nc=function(n){if(!n||Xd.call(n)!=="[object Object]")return!1;var t=No.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&No.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var o;for(o in n);return typeof o>"u"||No.call(n,o)},tc=function(n,t){Ku&&t.name==="__proto__"?Ku(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},rc=function(n,t){if(t==="__proto__")if(No.call(n,t)){if(Zu)return Zu(n,t).value}else return;return n[t]},oc=function e(){var n,t,r,o,i,a,s=arguments[0],l=1,u=arguments.length,p=!1;for(typeof s=="boolean"&&(p=s,s=arguments[1]||{},l=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});l<u;++l)if(n=arguments[l],n!=null)for(t in n)r=rc(s,t),o=rc(n,t),s!==o&&(p&&o&&(nc(o)||(i=ec(o)))?(i?(i=!1,a=r&&ec(r)?r:[]):a=r&&nc(r)?r:{},tc(s,{name:t,newValue:e(p,a,o)})):typeof o<"u"&&tc(s,{name:t,newValue:o}));return s};function ws(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Iy(){const e=[],n={run:t,use:r};return n;function t(...o){let i=-1;const a=o.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...o);function s(l,...u){const p=e[++i];let d=-1;if(l){a(l);return}for(;++d<o.length;)(u[d]===null||u[d]===void 0)&&(u[d]=o[d]);o=u,p?jy(p,s)(...u):a(null,...u)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function jy(e,n){let t;return r;function r(...a){const s=e.length>a.length;let l;s&&a.push(o);try{l=e.apply(this,a)}catch(u){const p=u;if(s&&t)throw p;return o(p)}s||(l instanceof Promise?l.then(i,o):l instanceof Error?o(l):i(l))}function o(a,...s){t||(t=!0,n(a,...s))}function i(a){o(null,a)}}const Dy=Gd().freeze(),Qd={}.hasOwnProperty;function Gd(){const e=Iy(),n=[];let t={},r,o=-1;return i.data=a,i.Parser=void 0,i.Compiler=void 0,i.freeze=s,i.attachers=n,i.use=l,i.parse=u,i.stringify=p,i.run=d,i.runSync=f,i.process=w,i.processSync=v,i;function i(){const x=Gd();let T=-1;for(;++T<n.length;)x.use(...n[T]);return x.data(oc(!0,{},t)),x}function a(x,T){return typeof x=="string"?arguments.length===2?(wa("data",r),t[x]=T,i):Qd.call(t,x)&&t[x]||null:x?(wa("data",r),t=x,i):t}function s(){if(r)return i;for(;++o<n.length;){const[x,...T]=n[o];if(T[0]===!1)continue;T[0]===!0&&(T[0]=void 0);const c=x.call(i,...T);typeof c=="function"&&e.use(c)}return r=!0,o=Number.POSITIVE_INFINITY,i}function l(x,...T){let c;if(wa("use",r),x!=null)if(typeof x=="function")C(x,...T);else if(typeof x=="object")Array.isArray(x)?S(x):m(x);else throw new TypeError("Expected usable value, not `"+x+"`");return c&&(t.settings=Object.assign(t.settings||{},c)),i;function h(k){if(typeof k=="function")C(k);else if(typeof k=="object")if(Array.isArray(k)){const[R,...I]=k;C(R,...I)}else m(k);else throw new TypeError("Expected usable value, not `"+k+"`")}function m(k){S(k.plugins),k.settings&&(c=Object.assign(c||{},k.settings))}function S(k){let R=-1;if(k!=null)if(Array.isArray(k))for(;++R<k.length;){const I=k[R];h(I)}else throw new TypeError("Expected a list of plugins, not `"+k+"`")}function C(k,R){let I=-1,N;for(;++I<n.length;)if(n[I][0]===k){N=n[I];break}N?(ws(N[1])&&ws(R)&&(R=oc(!0,N[1],R)),N[1]=R):n.push([...arguments])}}function u(x){i.freeze();const T=gr(x),c=i.Parser;return ya("parse",c),ic(c,"parse")?new c(String(T),T).parse():c(String(T),T)}function p(x,T){i.freeze();const c=gr(T),h=i.Compiler;return ga("stringify",h),ac(x),ic(h,"compile")?new h(x,c).compile():h(x,c)}function d(x,T,c){if(ac(x),i.freeze(),!c&&typeof T=="function"&&(c=T,T=void 0),!c)return new Promise(h);h(null,c);function h(m,S){e.run(x,gr(T),C);function C(k,R,I){R=R||x,k?S(k):m?m(R):c(null,R,I)}}}function f(x,T){let c,h;return i.run(x,T,m),sc("runSync","run",h),c;function m(S,C){Gu(S),c=C,h=!0}}function w(x,T){if(i.freeze(),ya("process",i.Parser),ga("process",i.Compiler),!T)return new Promise(c);c(null,T);function c(h,m){const S=gr(x);i.run(i.parse(S),S,(k,R,I)=>{if(k||!R||!I)C(k);else{const N=i.stringify(R,I);N==null||(Oy(N)?I.value=N:I.result=N),C(k,I)}});function C(k,R){k||!R?m(k):h?h(R):T(null,R)}}}function v(x){let T;i.freeze(),ya("processSync",i.Parser),ga("processSync",i.Compiler);const c=gr(x);return i.process(c,h),sc("processSync","process",T),c;function h(m){T=!0,Gu(m)}}}function ic(e,n){return typeof e=="function"&&e.prototype&&(Ay(e.prototype)||n in e.prototype)}function Ay(e){let n;for(n in e)if(Qd.call(e,n))return!0;return!1}function ya(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `Parser`")}function ga(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `Compiler`")}function wa(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ac(e){if(!ws(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function sc(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function gr(e){return My(e)?e:new Yd(e)}function My(e){return Boolean(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Oy(e){return typeof e=="string"||Jd(e)}function Fy(e,n){var{includeImageAlt:t=!0}=n||{};return Kd(e,t)}function Kd(e,n){return e&&typeof e=="object"&&(e.value||(n?e.alt:"")||"children"in e&&lc(e.children,n)||Array.isArray(e)&&lc(e,n))||""}function lc(e,n){for(var t=[],r=-1;++r<e.length;)t[r]=Kd(e[r],n);return t.join("")}function En(e,n,t,r){const o=e.length;let i=0,a;if(n<0?n=-n>o?0:o+n:n=n>o?o:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),[].splice.apply(e,a);else for(t&&[].splice.apply(e,[n,t]);i<r.length;)a=r.slice(i,i+1e4),a.unshift(n,0),[].splice.apply(e,a),i+=1e4,n+=1e4}function en(e,n){return e.length>0?(En(e,e.length,0,n),e):n}const uc={}.hasOwnProperty;function Ly(e){const n={};let t=-1;for(;++t<e.length;)Ny(n,e[t]);return n}function Ny(e,n){let t;for(t in n){const o=(uc.call(e,t)?e[t]:void 0)||(e[t]={}),i=n[t];let a;for(a in i){uc.call(o,a)||(o[a]=[]);const s=i[a];zy(o[a],Array.isArray(s)?s:s?[s]:[])}}}function zy(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);En(e,0,0,r)}const Wy=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,Rn=st(/[A-Za-z]/),vs=st(/\d/),_y=st(/[\dA-Fa-f]/),$e=st(/[\dA-Za-z]/),qy=st(/[!-/:-@[-`{-~]/),cc=st(/[#-'*+\--9=?A-Z^-~]/);function xs(e){return e!==null&&(e<32||e===127)}function on(e){return e!==null&&(e<0||e===32)}function _(e){return e!==null&&e<-2}function ce(e){return e===-2||e===-1||e===32}const Uy=st(/\s/),By=st(Wy);function st(e){return n;function n(t){return t!==null&&e.test(String.fromCharCode(t))}}function Q(e,n,t,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return a;function a(l){return ce(l)?(e.enter(t),s(l)):n(l)}function s(l){return ce(l)&&i++<o?(e.consume(l),s):(e.exit(t),n(l))}}const Hy={tokenize:Vy};function Vy(e){const n=e.attempt(this.parser.constructs.contentInitial,r,o);let t;return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),Q(e,n,"linePrefix")}function o(s){return e.enter("paragraph"),i(s)}function i(s){const l=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return _(s)?(e.consume(s),e.exit("chunkText"),i):(e.consume(s),a)}}const $y={tokenize:Jy},pc={tokenize:Yy};function Jy(e){const n=this,t=[];let r=0,o,i,a;return s;function s(m){if(r<t.length){const S=t[r];return n.containerState=S[1],e.attempt(S[0].continuation,l,u)(m)}return u(m)}function l(m){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&h();const S=n.events.length;let C=S,k;for(;C--;)if(n.events[C][0]==="exit"&&n.events[C][1].type==="chunkFlow"){k=n.events[C][1].end;break}c(r);let R=S;for(;R<n.events.length;)n.events[R][1].end=Object.assign({},k),R++;return En(n.events,C+1,0,n.events.slice(S)),n.events.length=R,u(m)}return s(m)}function u(m){if(r===t.length){if(!o)return f(m);if(o.currentConstruct&&o.currentConstruct.concrete)return v(m);n.interrupt=Boolean(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(pc,p,d)(m)}function p(m){return o&&h(),c(r),f(m)}function d(m){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,v(m)}function f(m){return n.containerState={},e.attempt(pc,w,v)(m)}function w(m){return r++,t.push([n.currentConstruct,n.containerState]),f(m)}function v(m){if(m===null){o&&h(),c(0),e.consume(m);return}return o=o||n.parser.flow(n.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:o}),x(m)}function x(m){if(m===null){T(e.exit("chunkFlow"),!0),c(0),e.consume(m);return}return _(m)?(e.consume(m),T(e.exit("chunkFlow")),r=0,n.interrupt=void 0,s):(e.consume(m),x)}function T(m,S){const C=n.sliceStream(m);if(S&&C.push(null),m.previous=i,i&&(i.next=m),i=m,o.defineSkip(m.start),o.write(C),n.parser.lazy[m.start.line]){let k=o.events.length;for(;k--;)if(o.events[k][1].start.offset<a&&(!o.events[k][1].end||o.events[k][1].end.offset>a))return;const R=n.events.length;let I=R,N,z;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){if(N){z=n.events[I][1].end;break}N=!0}for(c(r),k=R;k<n.events.length;)n.events[k][1].end=Object.assign({},z),k++;En(n.events,I+1,0,n.events.slice(R)),n.events.length=k}}function c(m){let S=t.length;for(;S-- >m;){const C=t[S];n.containerState=C[1],C[0].exit.call(n,e)}t.length=m}function h(){o.write([null]),i=void 0,o=void 0,n.containerState._closeFlow=void 0}}function Yy(e,n,t){return Q(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function dc(e){if(e===null||on(e)||Uy(e))return 1;if(By(e))return 2}function Sl(e,n,t){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(n=i(n,t),r.push(i))}return n}const ks={name:"attention",tokenize:Qy,resolveAll:Xy};function Xy(e,n){let t=-1,r,o,i,a,s,l,u,p;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),f=Object.assign({},e[t][1].start);hc(d,-l),hc(f,l),a={type:l>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},s={type:l>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[t][1].start),end:f},i={type:l>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[t][1].start)},o={type:l>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},s.end)},e[r][1].end=Object.assign({},a.start),e[t][1].start=Object.assign({},s.end),u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=en(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=en(u,[["enter",o,n],["enter",a,n],["exit",a,n],["enter",i,n]]),u=en(u,Sl(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=en(u,[["exit",i,n],["enter",s,n],["exit",s,n],["exit",o,n]]),e[t][1].end.offset-e[t][1].start.offset?(p=2,u=en(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):p=0,En(e,r-1,t-r+3,u),t=r+u.length-p-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function Qy(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,o=dc(r);let i;return a;function a(l){return e.enter("attentionSequence"),i=l,s(l)}function s(l){if(l===i)return e.consume(l),s;const u=e.exit("attentionSequence"),p=dc(l),d=!p||p===2&&o||t.includes(l),f=!o||o===2&&p||t.includes(r);return u._open=Boolean(i===42?d:d&&(o||!f)),u._close=Boolean(i===42?f:f&&(p||!d)),n(l)}}function hc(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Gy={name:"autolink",tokenize:Ky};function Ky(e,n,t){let r=1;return o;function o(v){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(v){return Rn(v)?(e.consume(v),a):cc(v)?u(v):t(v)}function a(v){return v===43||v===45||v===46||$e(v)?s(v):u(v)}function s(v){return v===58?(e.consume(v),l):(v===43||v===45||v===46||$e(v))&&r++<32?(e.consume(v),s):u(v)}function l(v){return v===62?(e.exit("autolinkProtocol"),w(v)):v===null||v===32||v===60||xs(v)?t(v):(e.consume(v),l)}function u(v){return v===64?(e.consume(v),r=0,p):cc(v)?(e.consume(v),u):t(v)}function p(v){return $e(v)?d(v):t(v)}function d(v){return v===46?(e.consume(v),r=0,p):v===62?(e.exit("autolinkProtocol").type="autolinkEmail",w(v)):f(v)}function f(v){return(v===45||$e(v))&&r++<63?(e.consume(v),v===45?f:d):t(v)}function w(v){return e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n}}const Ei={tokenize:Zy,partial:!0};function Zy(e,n,t){return Q(e,r,"linePrefix");function r(o){return o===null||_(o)?n(o):t(o)}}const Zd={name:"blockQuote",tokenize:eg,continuation:{tokenize:ng},exit:tg};function eg(e,n,t){const r=this;return o;function o(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),i}return t(a)}function i(a){return ce(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function ng(e,n,t){return Q(e,e.attempt(Zd,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function tg(e){e.exit("blockQuote")}const eh={name:"characterEscape",tokenize:rg};function rg(e,n,t){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),o}function o(i){return qy(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(i)}}const fc=document.createElement("i");function bl(e){const n="&"+e+";";fc.innerHTML=n;const t=fc.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}const nh={name:"characterReference",tokenize:og};function og(e,n,t){const r=this;let o=0,i,a;return s;function s(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),l}function l(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),i=31,a=$e,p(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,a=_y,p):(e.enter("characterReferenceValue"),i=7,a=vs,p(d))}function p(d){let f;return d===59&&o?(f=e.exit("characterReferenceValue"),a===$e&&!bl(r.sliceSerialize(f))?t(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)):a(d)&&o++<i?(e.consume(d),p):t(d)}}const mc={name:"codeFenced",tokenize:ig,concrete:!0};function ig(e,n,t){const r=this,o={tokenize:C,partial:!0},i={tokenize:S,partial:!0},a=this.events[this.events.length-1],s=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0;let l=0,u;return p;function p(k){return e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u=k,d(k)}function d(k){return k===u?(e.consume(k),l++,d):(e.exit("codeFencedFenceSequence"),l<3?t(k):Q(e,f,"whitespace")(k))}function f(k){return k===null||_(k)?T(k):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),w(k))}function w(k){return k===null||on(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Q(e,v,"whitespace")(k)):k===96&&k===u?t(k):(e.consume(k),w)}function v(k){return k===null||_(k)?T(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(k))}function x(k){return k===null||_(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),T(k)):k===96&&k===u?t(k):(e.consume(k),x)}function T(k){return e.exit("codeFencedFence"),r.interrupt?n(k):c(k)}function c(k){return k===null?m(k):_(k)?e.attempt(i,e.attempt(o,m,s?Q(e,c,"linePrefix",s+1):c),m)(k):(e.enter("codeFlowValue"),h(k))}function h(k){return k===null||_(k)?(e.exit("codeFlowValue"),c(k)):(e.consume(k),h)}function m(k){return e.exit("codeFenced"),n(k)}function S(k,R,I){const N=this;return z;function z(L){return k.enter("lineEnding"),k.consume(L),k.exit("lineEnding"),A}function A(L){return N.parser.lazy[N.now().line]?I(L):R(L)}}function C(k,R,I){let N=0;return Q(k,z,"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function z(q){return k.enter("codeFencedFence"),k.enter("codeFencedFenceSequence"),A(q)}function A(q){return q===u?(k.consume(q),N++,A):N<l?I(q):(k.exit("codeFencedFenceSequence"),Q(k,L,"whitespace")(q))}function L(q){return q===null||_(q)?(k.exit("codeFencedFence"),R(q)):I(q)}}}const va={name:"codeIndented",tokenize:sg},ag={tokenize:lg,partial:!0};function sg(e,n,t){const r=this;return o;function o(u){return e.enter("codeIndented"),Q(e,i,"linePrefix",4+1)(u)}function i(u){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?a(u):t(u)}function a(u){return u===null?l(u):_(u)?e.attempt(ag,a,l)(u):(e.enter("codeFlowValue"),s(u))}function s(u){return u===null||_(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),s)}function l(u){return e.exit("codeIndented"),n(u)}}function lg(e,n,t){const r=this;return o;function o(a){return r.parser.lazy[r.now().line]?t(a):_(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):Q(e,i,"linePrefix",4+1)(a)}function i(a){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?n(a):_(a)?o(a):t(a)}}const ug={name:"codeText",tokenize:dg,resolve:cg,previous:pg};function cg(e){let n=e.length-4,t=3,r,o;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)o===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(o=r):(r===n||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),n-=r-o-2,r=o+2),o=void 0);return e}function pg(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function dg(e,n,t){let r=0,o,i;return a;function a(d){return e.enter("codeText"),e.enter("codeTextSequence"),s(d)}function s(d){return d===96?(e.consume(d),r++,s):(e.exit("codeTextSequence"),l(d))}function l(d){return d===null?t(d):d===96?(i=e.enter("codeTextSequence"),o=0,p(d)):d===32?(e.enter("space"),e.consume(d),e.exit("space"),l):_(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||_(d)?(e.exit("codeTextData"),l(d)):(e.consume(d),u)}function p(d){return d===96?(e.consume(d),o++,p):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(d)):(i.type="codeTextData",u(d))}}function th(e){const n={};let t=-1,r,o,i,a,s,l,u;for(;++t<e.length;){for(;t in n;)t=n[t];if(r=e[t],t&&r[1].type==="chunkFlow"&&e[t-1][1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,i=0,i<l.length&&l[i][1].type==="lineEndingBlank"&&(i+=2),i<l.length&&l[i][1].type==="content"))for(;++i<l.length&&l[i][1].type!=="content";)l[i][1].type==="chunkText"&&(l[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,hg(e,t)),t=n[t],u=!0);else if(r[1]._container){for(i=t,o=void 0;i--&&(a=e[i],a[1].type==="lineEnding"||a[1].type==="lineEndingBlank");)a[0]==="enter"&&(o&&(e[o][1].type="lineEndingBlank"),a[1].type="lineEnding",o=i);o&&(r[1].end=Object.assign({},e[o][1].start),s=e.slice(o,t),s.unshift(r),En(e,o,t-o+1,s))}}return!u}function hg(e,n){const t=e[n][1],r=e[n][2];let o=n-1;const i=[],a=t._tokenizer||r.parser[t.contentType](t.start),s=a.events,l=[],u={};let p,d,f=-1,w=t,v=0,x=0;const T=[x];for(;w;){for(;e[++o][1]!==w;);i.push(o),w._tokenizer||(p=r.sliceStream(w),w.next||p.push(null),d&&a.defineSkip(w.start),w._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(p),w._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),d=w,w=w.next}for(w=t;++f<s.length;)s[f][0]==="exit"&&s[f-1][0]==="enter"&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(x=f+1,T.push(x),w._tokenizer=void 0,w.previous=void 0,w=w.next);for(a.events=[],w?(w._tokenizer=void 0,w.previous=void 0):T.pop(),f=T.length;f--;){const c=s.slice(T[f],T[f+1]),h=i.pop();l.unshift([h,h+c.length-1]),En(e,h,2,c)}for(f=-1;++f<l.length;)u[v+l[f][0]]=v+l[f][1],v+=l[f][1]-l[f][0]-1;return u}const fg={tokenize:gg,resolve:yg},mg={tokenize:wg,partial:!0};function yg(e){return th(e),e}function gg(e,n){let t;return r;function r(s){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),o(s)}function o(s){return s===null?i(s):_(s)?e.check(mg,a,i)(s):(e.consume(s),o)}function i(s){return e.exit("chunkContent"),e.exit("content"),n(s)}function a(s){return e.consume(s),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,o}}function wg(e,n,t){const r=this;return o;function o(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Q(e,i,"linePrefix")}function i(a){if(a===null||_(a))return t(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function rh(e,n,t,r,o,i,a,s,l){const u=l||Number.POSITIVE_INFINITY;let p=0;return d;function d(c){return c===60?(e.enter(r),e.enter(o),e.enter(i),e.consume(c),e.exit(i),f):c===null||c===41||xs(c)?t(c):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),x(c))}function f(c){return c===62?(e.enter(i),e.consume(c),e.exit(i),e.exit(o),e.exit(r),n):(e.enter(s),e.enter("chunkString",{contentType:"string"}),w(c))}function w(c){return c===62?(e.exit("chunkString"),e.exit(s),f(c)):c===null||c===60||_(c)?t(c):(e.consume(c),c===92?v:w)}function v(c){return c===60||c===62||c===92?(e.consume(c),w):w(c)}function x(c){return c===40?++p>u?t(c):(e.consume(c),x):c===41?p--?(e.consume(c),x):(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),n(c)):c===null||on(c)?p?t(c):(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),n(c)):xs(c)?t(c):(e.consume(c),c===92?T:x)}function T(c){return c===40||c===41||c===92?(e.consume(c),x):x(c)}}function oh(e,n,t,r,o,i){const a=this;let s=0,l;return u;function u(w){return e.enter(r),e.enter(o),e.consume(w),e.exit(o),e.enter(i),p}function p(w){return w===null||w===91||w===93&&!l||w===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs||s>999?t(w):w===93?(e.exit(i),e.enter(o),e.consume(w),e.exit(o),e.exit(r),n):_(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),d(w))}function d(w){return w===null||w===91||w===93||_(w)||s++>999?(e.exit("chunkString"),p(w)):(e.consume(w),l=l||!ce(w),w===92?f:d)}function f(w){return w===91||w===92||w===93?(e.consume(w),s++,d):d(w)}}function ih(e,n,t,r,o,i){let a;return s;function s(f){return e.enter(r),e.enter(o),e.consume(f),e.exit(o),a=f===40?41:f,l}function l(f){return f===a?(e.enter(o),e.consume(f),e.exit(o),e.exit(r),n):(e.enter(i),u(f))}function u(f){return f===a?(e.exit(i),l(a)):f===null?t(f):_(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Q(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===a||f===null||_(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?d:p)}function d(f){return f===a||f===92?(e.consume(f),p):p(f)}}function Mr(e,n){let t;return r;function r(o){return _(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t=!0,r):ce(o)?Q(e,r,t?"linePrefix":"lineSuffix")(o):n(o)}}function Jt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const vg={name:"definition",tokenize:kg},xg={tokenize:Sg,partial:!0};function kg(e,n,t){const r=this;let o;return i;function i(l){return e.enter("definition"),oh.call(r,e,a,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(l)}function a(l){return o=Jt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),l===58?(e.enter("definitionMarker"),e.consume(l),e.exit("definitionMarker"),Mr(e,rh(e,e.attempt(xg,Q(e,s,"whitespace"),Q(e,s,"whitespace")),t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString"))):t(l)}function s(l){return l===null||_(l)?(e.exit("definition"),r.parser.defined.includes(o)||r.parser.defined.push(o),n(l)):t(l)}}function Sg(e,n,t){return r;function r(a){return on(a)?Mr(e,o)(a):t(a)}function o(a){return a===34||a===39||a===40?ih(e,Q(e,i,"whitespace"),t,"definitionTitle","definitionTitleMarker","definitionTitleString")(a):t(a)}function i(a){return a===null||_(a)?n(a):t(a)}}const bg={name:"hardBreakEscape",tokenize:Rg};function Rg(e,n,t){return r;function r(i){return e.enter("hardBreakEscape"),e.enter("escapeMarker"),e.consume(i),o}function o(i){return _(i)?(e.exit("escapeMarker"),e.exit("hardBreakEscape"),n(i)):t(i)}}const Cg={name:"headingAtx",tokenize:Eg,resolve:Tg};function Tg(e,n){let t=e.length-2,r=3,o,i;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},i={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},En(e,r,t-r+1,[["enter",o,n],["enter",i,n],["exit",i,n],["exit",o,n]])),e}function Eg(e,n,t){const r=this;let o=0;return i;function i(p){return e.enter("atxHeading"),e.enter("atxHeadingSequence"),a(p)}function a(p){return p===35&&o++<6?(e.consume(p),a):p===null||on(p)?(e.exit("atxHeadingSequence"),r.interrupt?n(p):s(p)):t(p)}function s(p){return p===35?(e.enter("atxHeadingSequence"),l(p)):p===null||_(p)?(e.exit("atxHeading"),n(p)):ce(p)?Q(e,s,"whitespace")(p):(e.enter("atxHeadingText"),u(p))}function l(p){return p===35?(e.consume(p),l):(e.exit("atxHeadingSequence"),s(p))}function u(p){return p===null||p===35||on(p)?(e.exit("atxHeadingText"),s(p)):(e.consume(p),u)}}const Pg=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],yc=["pre","script","style","textarea"],Ig={name:"htmlFlow",tokenize:Ag,resolveTo:Dg,concrete:!0},jg={tokenize:Mg,partial:!0};function Dg(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function Ag(e,n,t){const r=this;let o,i,a,s,l;return u;function u(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),p}function p(g){return g===33?(e.consume(g),d):g===47?(e.consume(g),v):g===63?(e.consume(g),o=3,r.interrupt?n:F):Rn(g)?(e.consume(g),a=String.fromCharCode(g),i=!0,x):t(g)}function d(g){return g===45?(e.consume(g),o=2,f):g===91?(e.consume(g),o=5,a="CDATA[",s=0,w):Rn(g)?(e.consume(g),o=4,r.interrupt?n:F):t(g)}function f(g){return g===45?(e.consume(g),r.interrupt?n:F):t(g)}function w(g){return g===a.charCodeAt(s++)?(e.consume(g),s===a.length?r.interrupt?n:A:w):t(g)}function v(g){return Rn(g)?(e.consume(g),a=String.fromCharCode(g),x):t(g)}function x(g){return g===null||g===47||g===62||on(g)?g!==47&&i&&yc.includes(a.toLowerCase())?(o=1,r.interrupt?n(g):A(g)):Pg.includes(a.toLowerCase())?(o=6,g===47?(e.consume(g),T):r.interrupt?n(g):A(g)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(g):i?h(g):c(g)):g===45||$e(g)?(e.consume(g),a+=String.fromCharCode(g),x):t(g)}function T(g){return g===62?(e.consume(g),r.interrupt?n:A):t(g)}function c(g){return ce(g)?(e.consume(g),c):N(g)}function h(g){return g===47?(e.consume(g),N):g===58||g===95||Rn(g)?(e.consume(g),m):ce(g)?(e.consume(g),h):N(g)}function m(g){return g===45||g===46||g===58||g===95||$e(g)?(e.consume(g),m):S(g)}function S(g){return g===61?(e.consume(g),C):ce(g)?(e.consume(g),S):h(g)}function C(g){return g===null||g===60||g===61||g===62||g===96?t(g):g===34||g===39?(e.consume(g),l=g,k):ce(g)?(e.consume(g),C):(l=null,R(g))}function k(g){return g===null||_(g)?t(g):g===l?(e.consume(g),I):(e.consume(g),k)}function R(g){return g===null||g===34||g===39||g===60||g===61||g===62||g===96||on(g)?S(g):(e.consume(g),R)}function I(g){return g===47||g===62||ce(g)?h(g):t(g)}function N(g){return g===62?(e.consume(g),z):t(g)}function z(g){return ce(g)?(e.consume(g),z):g===null||_(g)?A(g):t(g)}function A(g){return g===45&&o===2?(e.consume(g),Oe):g===60&&o===1?(e.consume(g),Fe):g===62&&o===4?(e.consume(g),O):g===63&&o===3?(e.consume(g),F):g===93&&o===5?(e.consume(g),j):_(g)&&(o===6||o===7)?e.check(jg,O,L)(g):g===null||_(g)?L(g):(e.consume(g),A)}function L(g){return e.exit("htmlFlowData"),q(g)}function q(g){return g===null?y(g):_(g)?e.attempt({tokenize:de,partial:!0},q,y)(g):(e.enter("htmlFlowData"),A(g))}function de(g,pn,Ue){return vn;function vn(Ie){return g.enter("lineEnding"),g.consume(Ie),g.exit("lineEnding"),X}function X(Ie){return r.parser.lazy[r.now().line]?Ue(Ie):pn(Ie)}}function Oe(g){return g===45?(e.consume(g),F):A(g)}function Fe(g){return g===47?(e.consume(g),a="",Pe):A(g)}function Pe(g){return g===62&&yc.includes(a.toLowerCase())?(e.consume(g),O):Rn(g)&&a.length<8?(e.consume(g),a+=String.fromCharCode(g),Pe):A(g)}function j(g){return g===93?(e.consume(g),F):A(g)}function F(g){return g===62?(e.consume(g),O):g===45&&o===2?(e.consume(g),F):A(g)}function O(g){return g===null||_(g)?(e.exit("htmlFlowData"),y(g)):(e.consume(g),O)}function y(g){return e.exit("htmlFlow"),n(g)}}function Mg(e,n,t){return r;function r(o){return e.exit("htmlFlowData"),e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),e.attempt(Ei,n,t)}}const Og={name:"htmlText",tokenize:Fg};function Fg(e,n,t){const r=this;let o,i,a,s;return l;function l(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),u}function u(y){return y===33?(e.consume(y),p):y===47?(e.consume(y),R):y===63?(e.consume(y),C):Rn(y)?(e.consume(y),z):t(y)}function p(y){return y===45?(e.consume(y),d):y===91?(e.consume(y),i="CDATA[",a=0,T):Rn(y)?(e.consume(y),S):t(y)}function d(y){return y===45?(e.consume(y),f):t(y)}function f(y){return y===null||y===62?t(y):y===45?(e.consume(y),w):v(y)}function w(y){return y===null||y===62?t(y):v(y)}function v(y){return y===null?t(y):y===45?(e.consume(y),x):_(y)?(s=v,j(y)):(e.consume(y),v)}function x(y){return y===45?(e.consume(y),O):v(y)}function T(y){return y===i.charCodeAt(a++)?(e.consume(y),a===i.length?c:T):t(y)}function c(y){return y===null?t(y):y===93?(e.consume(y),h):_(y)?(s=c,j(y)):(e.consume(y),c)}function h(y){return y===93?(e.consume(y),m):c(y)}function m(y){return y===62?O(y):y===93?(e.consume(y),m):c(y)}function S(y){return y===null||y===62?O(y):_(y)?(s=S,j(y)):(e.consume(y),S)}function C(y){return y===null?t(y):y===63?(e.consume(y),k):_(y)?(s=C,j(y)):(e.consume(y),C)}function k(y){return y===62?O(y):C(y)}function R(y){return Rn(y)?(e.consume(y),I):t(y)}function I(y){return y===45||$e(y)?(e.consume(y),I):N(y)}function N(y){return _(y)?(s=N,j(y)):ce(y)?(e.consume(y),N):O(y)}function z(y){return y===45||$e(y)?(e.consume(y),z):y===47||y===62||on(y)?A(y):t(y)}function A(y){return y===47?(e.consume(y),O):y===58||y===95||Rn(y)?(e.consume(y),L):_(y)?(s=A,j(y)):ce(y)?(e.consume(y),A):O(y)}function L(y){return y===45||y===46||y===58||y===95||$e(y)?(e.consume(y),L):q(y)}function q(y){return y===61?(e.consume(y),de):_(y)?(s=q,j(y)):ce(y)?(e.consume(y),q):A(y)}function de(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),o=y,Oe):_(y)?(s=de,j(y)):ce(y)?(e.consume(y),de):(e.consume(y),o=void 0,Pe)}function Oe(y){return y===o?(e.consume(y),Fe):y===null?t(y):_(y)?(s=Oe,j(y)):(e.consume(y),Oe)}function Fe(y){return y===62||y===47||on(y)?A(y):t(y)}function Pe(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===62||on(y)?A(y):(e.consume(y),Pe)}function j(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),Q(e,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function F(y){return e.enter("htmlTextData"),s(y)}function O(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}}const Rl={name:"labelEnd",tokenize:qg,resolveTo:_g,resolveAll:Wg},Lg={tokenize:Ug},Ng={tokenize:Bg},zg={tokenize:Hg};function Wg(e){let n=-1,t;for(;++n<e.length;)t=e[n][1],(t.type==="labelImage"||t.type==="labelLink"||t.type==="labelEnd")&&(e.splice(n+1,t.type==="labelImage"?4:2),t.type="data",n++);return e}function _g(e,n){let t=e.length,r=0,o,i,a,s;for(;t--;)if(o=e[t][1],i){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[t][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(i=t,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(a=t);const l={type:e[i][1].type==="labelLink"?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},u={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[a][1].end)},p={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[a-2][1].start)};return s=[["enter",l,n],["enter",u,n]],s=en(s,e.slice(i+1,i+r+3)),s=en(s,[["enter",p,n]]),s=en(s,Sl(n.parser.constructs.insideSpan.null,e.slice(i+r+4,a-3),n)),s=en(s,[["exit",p,n],e[a-2],e[a-1],["exit",u,n]]),s=en(s,e.slice(a+1)),s=en(s,[["exit",l,n]]),En(e,i,e.length,s),e}function qg(e,n,t){const r=this;let o=r.events.length,i,a;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){i=r.events[o][1];break}return s;function s(p){return i?i._inactive?u(p):(a=r.parser.defined.includes(Jt(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),l):t(p)}function l(p){return p===40?e.attempt(Lg,n,a?n:u)(p):p===91?e.attempt(Ng,n,a?e.attempt(zg,n,u):u)(p):a?n(p):u(p)}function u(p){return i._balanced=!0,t(p)}}function Ug(e,n,t){return r;function r(l){return e.enter("resource"),e.enter("resourceMarker"),e.consume(l),e.exit("resourceMarker"),Mr(e,o)}function o(l){return l===41?s(l):rh(e,i,t,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(l)}function i(l){return on(l)?Mr(e,a)(l):s(l)}function a(l){return l===34||l===39||l===40?ih(e,Mr(e,s),t,"resourceTitle","resourceTitleMarker","resourceTitleString")(l):s(l)}function s(l){return l===41?(e.enter("resourceMarker"),e.consume(l),e.exit("resourceMarker"),e.exit("resource"),n):t(l)}}function Bg(e,n,t){const r=this;return o;function o(a){return oh.call(r,e,i,t,"reference","referenceMarker","referenceString")(a)}function i(a){return r.parser.defined.includes(Jt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(a):t(a)}}function Hg(e,n,t){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),o}function o(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),n):t(i)}}const Vg={name:"labelStartImage",tokenize:$g,resolveAll:Rl.resolveAll};function $g(e,n,t){const r=this;return o;function o(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),i}function i(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):t(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(s):n(s)}}const Jg={name:"labelStartLink",tokenize:Yg,resolveAll:Rl.resolveAll};function Yg(e,n,t){const r=this;return o;function o(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),i}function i(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const xa={name:"lineEnding",tokenize:Xg};function Xg(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Q(e,n,"linePrefix")}}const zo={name:"thematicBreak",tokenize:Qg};function Qg(e,n,t){let r=0,o;return i;function i(l){return e.enter("thematicBreak"),o=l,a(l)}function a(l){return l===o?(e.enter("thematicBreakSequence"),s(l)):ce(l)?Q(e,a,"whitespace")(l):r<3||l!==null&&!_(l)?t(l):(e.exit("thematicBreak"),n(l))}function s(l){return l===o?(e.consume(l),r++,s):(e.exit("thematicBreakSequence"),a(l))}}const Le={name:"list",tokenize:Zg,continuation:{tokenize:ew},exit:tw},Gg={tokenize:rw,partial:!0},Kg={tokenize:nw,partial:!0};function Zg(e,n,t){const r=this,o=r.events[r.events.length-1];let i=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,a=0;return s;function s(w){const v=r.containerState.type||(w===42||w===43||w===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||w===r.containerState.marker:vs(w)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),w===42||w===45?e.check(zo,t,u)(w):u(w);if(!r.interrupt||w===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(w)}return t(w)}function l(w){return vs(w)&&++a<10?(e.consume(w),l):(!r.interrupt||a<2)&&(r.containerState.marker?w===r.containerState.marker:w===41||w===46)?(e.exit("listItemValue"),u(w)):t(w)}function u(w){return e.enter("listItemMarker"),e.consume(w),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||w,e.check(Ei,r.interrupt?t:p,e.attempt(Gg,f,d))}function p(w){return r.containerState.initialBlankLine=!0,i++,f(w)}function d(w){return ce(w)?(e.enter("listItemPrefixWhitespace"),e.consume(w),e.exit("listItemPrefixWhitespace"),f):t(w)}function f(w){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(w)}}function ew(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Ei,o,i);function o(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Q(e,n,"listItemIndent",r.containerState.size+1)(s)}function i(s){return r.containerState.furtherBlankLines||!ce(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Kg,n,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,Q(e,e.attempt(Le,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function nw(e,n,t){const r=this;return Q(e,o,"listItemIndent",r.containerState.size+1);function o(i){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(i):t(i)}}function tw(e){e.exit(this.containerState.type)}function rw(e,n,t){const r=this;return Q(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function o(i){const a=r.events[r.events.length-1];return!ce(i)&&a&&a[1].type==="listItemPrefixWhitespace"?n(i):t(i)}}const gc={name:"setextUnderline",tokenize:iw,resolveTo:ow};function ow(e,n){let t=e.length,r,o,i;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(o=t)}else e[t][1].type==="content"&&e.splice(t,1),!i&&e[t][1].type==="definition"&&(i=t);const a={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",i?(e.splice(o,0,["enter",a,n]),e.splice(i+1,0,["exit",e[r][1],n]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=a,e.push(["exit",a,n]),e}function iw(e,n,t){const r=this;let o=r.events.length,i,a;for(;o--;)if(r.events[o][1].type!=="lineEnding"&&r.events[o][1].type!=="linePrefix"&&r.events[o][1].type!=="content"){a=r.events[o][1].type==="paragraph";break}return s;function s(p){return!r.parser.lazy[r.now().line]&&(r.interrupt||a)?(e.enter("setextHeadingLine"),e.enter("setextHeadingLineSequence"),i=p,l(p)):t(p)}function l(p){return p===i?(e.consume(p),l):(e.exit("setextHeadingLineSequence"),Q(e,u,"lineSuffix")(p))}function u(p){return p===null||_(p)?(e.exit("setextHeadingLine"),n(p)):t(p)}}const aw={tokenize:sw};function sw(e){const n=this,t=e.attempt(Ei,r,e.attempt(this.parser.constructs.flowInitial,o,Q(e,e.attempt(this.parser.constructs.flow,o,e.attempt(fg,o)),"linePrefix")));return t;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function o(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const lw={resolveAll:sh()},uw=ah("string"),cw=ah("text");function ah(e){return{tokenize:n,resolveAll:sh(e==="text"?pw:void 0)};function n(t){const r=this,o=this.parser.constructs[e],i=t.attempt(o,a,s);return a;function a(p){return u(p)?i(p):s(p)}function s(p){if(p===null){t.consume(p);return}return t.enter("data"),t.consume(p),l}function l(p){return u(p)?(t.exit("data"),i(p)):(t.consume(p),l)}function u(p){if(p===null)return!0;const d=o[p];let f=-1;if(d)for(;++f<d.length;){const w=d[f];if(!w.previous||w.previous.call(r,r.previous))return!0}return!1}}}function sh(e){return n;function n(t,r){let o=-1,i;for(;++o<=t.length;)i===void 0?t[o]&&t[o][1].type==="data"&&(i=o,o++):(!t[o]||t[o][1].type!=="data")&&(o!==i+2&&(t[i][1].end=t[o-1][1].end,t.splice(i+2,o-i-2),o=i+2),i=void 0);return e?e(t,r):t}}function pw(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],o=n.sliceStream(r);let i=o.length,a=-1,s=0,l;for(;i--;){const u=o[i];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(u===-2)l=!0,s++;else if(u!==-1){i++;break}}if(s){const u={type:t===e.length||l||s<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-s,offset:r.end.offset-s,_index:r.start._index+i,_bufferIndex:i?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}function dw(e,n,t){let r=Object.assign(t?Object.assign({},t):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const o={},i=[];let a=[],s=[];const l={consume:h,enter:m,exit:S,attempt:R(C),check:R(k),interrupt:R(k,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:w,sliceSerialize:f,now:v,defineSkip:x,write:d};let p=n.tokenize.call(u,l);return n.resolveAll&&i.push(n),u;function d(A){return a=en(a,A),T(),a[a.length-1]!==null?[]:(I(n,0),u.events=Sl(i,u.events,u),u.events)}function f(A,L){return fw(w(A),L)}function w(A){return hw(a,A)}function v(){return Object.assign({},r)}function x(A){o[A.line]=A.column,z()}function T(){let A;for(;r._index<a.length;){const L=a[r._index];if(typeof L=="string")for(A=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===A&&r._bufferIndex<L.length;)c(L.charCodeAt(r._bufferIndex));else c(L)}}function c(A){p=p(A)}function h(A){_(A)?(r.line++,r.column=1,r.offset+=A===-3?2:1,z()):A!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=A}function m(A,L){const q=L||{};return q.type=A,q.start=v(),u.events.push(["enter",q,u]),s.push(q),q}function S(A){const L=s.pop();return L.end=v(),u.events.push(["exit",L,u]),L}function C(A,L){I(A,L.from)}function k(A,L){L.restore()}function R(A,L){return q;function q(de,Oe,Fe){let Pe,j,F,O;return Array.isArray(de)?g(de):"tokenize"in de?g([de]):y(de);function y(X){return Ie;function Ie(Pn){const Rt=Pn!==null&&X[Pn],Ct=Pn!==null&&X.null,Wi=[...Array.isArray(Rt)?Rt:Rt?[Rt]:[],...Array.isArray(Ct)?Ct:Ct?[Ct]:[]];return g(Wi)(Pn)}}function g(X){return Pe=X,j=0,X.length===0?Fe:pn(X[j])}function pn(X){return Ie;function Ie(Pn){return O=N(),F=X,X.partial||(u.currentConstruct=X),X.name&&u.parser.constructs.disable.null.includes(X.name)?vn():X.tokenize.call(L?Object.assign(Object.create(u),L):u,l,Ue,vn)(Pn)}}function Ue(X){return A(F,O),Oe}function vn(X){return O.restore(),++j<Pe.length?pn(Pe[j]):Fe}}}function I(A,L){A.resolveAll&&!i.includes(A)&&i.push(A),A.resolve&&En(u.events,L,u.events.length-L,A.resolve(u.events.slice(L),u)),A.resolveTo&&(u.events=A.resolveTo(u.events,u))}function N(){const A=v(),L=u.previous,q=u.currentConstruct,de=u.events.length,Oe=Array.from(s);return{restore:Fe,from:de};function Fe(){r=A,u.previous=L,u.currentConstruct=q,u.events.length=de,s=Oe,z()}}function z(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function hw(e,n){const t=n.start._index,r=n.start._bufferIndex,o=n.end._index,i=n.end._bufferIndex;let a;return t===o?a=[e[t].slice(r,i)]:(a=e.slice(t,o),r>-1&&(a[0]=a[0].slice(r)),i>0&&a.push(e[o].slice(0,i))),a}function fw(e,n){let t=-1;const r=[];let o;for(;++t<e.length;){const i=e[t];let a;if(typeof i=="string")a=i;else switch(i){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&o)continue;a=" ";break}default:a=String.fromCharCode(i)}o=i===-2,r.push(a)}return r.join("")}const mw={[42]:Le,[43]:Le,[45]:Le,[48]:Le,[49]:Le,[50]:Le,[51]:Le,[52]:Le,[53]:Le,[54]:Le,[55]:Le,[56]:Le,[57]:Le,[62]:Zd},yw={[91]:vg},gw={[-2]:va,[-1]:va,[32]:va},ww={[35]:Cg,[42]:zo,[45]:[gc,zo],[60]:Ig,[61]:gc,[95]:zo,[96]:mc,[126]:mc},vw={[38]:nh,[92]:eh},xw={[-5]:xa,[-4]:xa,[-3]:xa,[33]:Vg,[38]:nh,[42]:ks,[60]:[Gy,Og],[91]:Jg,[92]:[bg,eh],[93]:Rl,[95]:ks,[96]:ug},kw={null:[ks,lw]},Sw={null:[42,95]},bw={null:[]},Rw=Object.freeze(Object.defineProperty({__proto__:null,document:mw,contentInitial:yw,flowInitial:gw,flow:ww,string:vw,text:xw,insideSpan:kw,attentionMarkers:Sw,disable:bw},Symbol.toStringTag,{value:"Module"}));function Cw(e={}){const n=Ly([Rw].concat(e.extensions||[])),t={defined:[],lazy:{},constructs:n,content:r(Hy),document:r($y),flow:r(aw),string:r(uw),text:r(cw)};return t;function r(o){return i;function i(a){return dw(t,o,a)}}}const wc=/[\0\t\n\r]/g;function Tw(){let e=1,n="",t=!0,r;return o;function o(i,a,s){const l=[];let u,p,d,f,w;for(i=n+i.toString(a),d=0,n="",t&&(i.charCodeAt(0)===65279&&d++,t=void 0);d<i.length;){if(wc.lastIndex=d,u=wc.exec(i),f=u&&u.index!==void 0?u.index:i.length,w=i.charCodeAt(f),!u){n=i.slice(d);break}if(w===10&&d===f&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),d<f&&(l.push(i.slice(d,f)),e+=f-d),w){case 0:{l.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,l.push(-2);e++<p;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}d=f+1}return s&&(r&&l.push(-5),n&&l.push(n),l.push(null)),l}}function Ew(e){for(;!th(e););return e}function lh(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"\uFFFD":String.fromCharCode(t)}const Pw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Iw(e){return e.replace(Pw,jw)}function jw(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const o=t.charCodeAt(1),i=o===120||o===88;return lh(t.slice(i?2:1),i?16:10)}return bl(t)||e}const Ss={}.hasOwnProperty,Dw=function(e,n,t){return typeof n!="string"&&(t=n,n=void 0),Aw(t)(Ew(Cw(t).document().write(Tw()(e,n,!0))))};function Aw(e={}){const n=uh({transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Ol),autolinkProtocol:L,autolinkEmail:L,atxHeading:l(Dl),blockQuote:l(Ah),characterEscape:L,characterReference:L,codeFenced:l(jl),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:l(jl,u),codeText:l(Mh,u),codeTextData:L,data:L,codeFlowValue:L,definition:l(Oh),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:l(Fh),hardBreakEscape:l(Al),hardBreakTrailing:l(Al),htmlFlow:l(Ml,u),htmlFlowData:L,htmlText:l(Ml,u),htmlTextData:L,image:l(Lh),label:u,link:l(Ol),listItem:l(Nh),listItemValue:x,listOrdered:l(Fl,v),listUnordered:l(Fl),paragraph:l(zh),reference:X,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:l(Dl),strong:l(Wh),thematicBreak:l(qh)},exit:{atxHeading:d(),atxHeadingSequence:I,autolink:d(),autolinkEmail:Wi,autolinkProtocol:Ct,blockQuote:d(),characterEscapeValue:q,characterReferenceMarkerHexadecimal:Pn,characterReferenceMarkerNumeric:Pn,characterReferenceValue:Rt,codeFenced:d(m),codeFencedFence:h,codeFencedFenceInfo:T,codeFencedFenceMeta:c,codeFlowValue:q,codeIndented:d(S),codeText:d(j),codeTextData:q,data:q,definition:d(),definitionDestinationString:R,definitionLabelString:C,definitionTitleString:k,emphasis:d(),hardBreakEscape:d(Oe),hardBreakTrailing:d(Oe),htmlFlow:d(Fe),htmlFlowData:q,htmlText:d(Pe),htmlTextData:q,image:d(O),label:g,labelText:y,lineEnding:de,link:d(F),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:Ie,resourceDestinationString:pn,resourceTitleString:Ue,resource:vn,setextHeading:d(A),setextHeadingLineSequence:z,setextHeadingText:N,strong:d(),thematicBreak:d()}},e.mdastExtensions||[]),t={};return r;function r(b){let D={type:"root",children:[]};const U=[D],Y=[],Ge=[],sr={stack:U,tokenStack:Y,config:n,enter:p,exit:f,buffer:u,resume:w,setData:i,getData:a};let K=-1;for(;++K<b.length;)if(b[K][1].type==="listOrdered"||b[K][1].type==="listUnordered")if(b[K][0]==="enter")Ge.push(K);else{const ve=Ge.pop();K=o(b,ve,K)}for(K=-1;++K<b.length;){const ve=n[b[K][0]];Ss.call(ve,b[K][1].type)&&ve[b[K][1].type].call(Object.assign({sliceSerialize:b[K][2].sliceSerialize},sr),b[K][1])}if(Y.length>0){const ve=Y[Y.length-1];(ve[1]||vc).call(sr,void 0,ve[0])}for(D.position={start:s(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:s(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},K=-1;++K<n.transforms.length;)D=n.transforms[K](D)||D;return D}function o(b,D,U){let Y=D-1,Ge=-1,sr=!1,K,ve,Tt,lr;for(;++Y<=U;){const se=b[Y];if(se[1].type==="listUnordered"||se[1].type==="listOrdered"||se[1].type==="blockQuote"?(se[0]==="enter"?Ge++:Ge--,lr=void 0):se[1].type==="lineEndingBlank"?se[0]==="enter"&&(K&&!lr&&!Ge&&!Tt&&(Tt=Y),lr=void 0):se[1].type==="linePrefix"||se[1].type==="listItemValue"||se[1].type==="listItemMarker"||se[1].type==="listItemPrefix"||se[1].type==="listItemPrefixWhitespace"||(lr=void 0),!Ge&&se[0]==="enter"&&se[1].type==="listItemPrefix"||Ge===-1&&se[0]==="exit"&&(se[1].type==="listUnordered"||se[1].type==="listOrdered")){if(K){let _i=Y;for(ve=void 0;_i--;){const In=b[_i];if(In[1].type==="lineEnding"||In[1].type==="lineEndingBlank"){if(In[0]==="exit")continue;ve&&(b[ve][1].type="lineEndingBlank",sr=!0),In[1].type="lineEnding",ve=_i}else if(!(In[1].type==="linePrefix"||In[1].type==="blockQuotePrefix"||In[1].type==="blockQuotePrefixWhitespace"||In[1].type==="blockQuoteMarker"||In[1].type==="listItemIndent"))break}Tt&&(!ve||Tt<ve)&&(K._spread=!0),K.end=Object.assign({},ve?b[ve][1].start:se[1].end),b.splice(ve||Y,0,["exit",K,se[2]]),Y++,U++}se[1].type==="listItemPrefix"&&(K={type:"listItem",_spread:!1,start:Object.assign({},se[1].start)},b.splice(Y,0,["enter",K,se[2]]),Y++,U++,Tt=void 0,lr=!0)}}return b[D][1]._spread=sr,U}function i(b,D){t[b]=D}function a(b){return t[b]}function s(b){return{line:b.line,column:b.column,offset:b.offset}}function l(b,D){return U;function U(Y){p.call(this,b(Y),Y),D&&D.call(this,Y)}}function u(){this.stack.push({type:"fragment",children:[]})}function p(b,D,U){return this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([D,U]),b.position={start:s(D.start)},b}function d(b){return D;function D(U){b&&b.call(this,U),f.call(this,U)}}function f(b,D){const U=this.stack.pop(),Y=this.tokenStack.pop();if(Y)Y[0].type!==b.type&&(D?D.call(this,b,Y[0]):(Y[1]||vc).call(this,b,Y[0]));else throw new Error("Cannot close `"+b.type+"` ("+Ar({start:b.start,end:b.end})+"): it\u2019s not open");return U.position.end=s(b.end),U}function w(){return Fy(this.stack.pop())}function v(){i("expectingFirstListItemValue",!0)}function x(b){if(a("expectingFirstListItemValue")){const D=this.stack[this.stack.length-2];D.start=Number.parseInt(this.sliceSerialize(b),10),i("expectingFirstListItemValue")}}function T(){const b=this.resume(),D=this.stack[this.stack.length-1];D.lang=b}function c(){const b=this.resume(),D=this.stack[this.stack.length-1];D.meta=b}function h(){a("flowCodeInside")||(this.buffer(),i("flowCodeInside",!0))}function m(){const b=this.resume(),D=this.stack[this.stack.length-1];D.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),i("flowCodeInside")}function S(){const b=this.resume(),D=this.stack[this.stack.length-1];D.value=b.replace(/(\r?\n|\r)$/g,"")}function C(b){const D=this.resume(),U=this.stack[this.stack.length-1];U.label=D,U.identifier=Jt(this.sliceSerialize(b)).toLowerCase()}function k(){const b=this.resume(),D=this.stack[this.stack.length-1];D.title=b}function R(){const b=this.resume(),D=this.stack[this.stack.length-1];D.url=b}function I(b){const D=this.stack[this.stack.length-1];if(!D.depth){const U=this.sliceSerialize(b).length;D.depth=U}}function N(){i("setextHeadingSlurpLineEnding",!0)}function z(b){const D=this.stack[this.stack.length-1];D.depth=this.sliceSerialize(b).charCodeAt(0)===61?1:2}function A(){i("setextHeadingSlurpLineEnding")}function L(b){const D=this.stack[this.stack.length-1];let U=D.children[D.children.length-1];(!U||U.type!=="text")&&(U=_h(),U.position={start:s(b.start)},D.children.push(U)),this.stack.push(U)}function q(b){const D=this.stack.pop();D.value+=this.sliceSerialize(b),D.position.end=s(b.end)}function de(b){const D=this.stack[this.stack.length-1];if(a("atHardBreak")){const U=D.children[D.children.length-1];U.position.end=s(b.end),i("atHardBreak");return}!a("setextHeadingSlurpLineEnding")&&n.canContainEols.includes(D.type)&&(L.call(this,b),q.call(this,b))}function Oe(){i("atHardBreak",!0)}function Fe(){const b=this.resume(),D=this.stack[this.stack.length-1];D.value=b}function Pe(){const b=this.resume(),D=this.stack[this.stack.length-1];D.value=b}function j(){const b=this.resume(),D=this.stack[this.stack.length-1];D.value=b}function F(){const b=this.stack[this.stack.length-1];a("inReference")?(b.type+="Reference",b.referenceType=a("referenceType")||"shortcut",delete b.url,delete b.title):(delete b.identifier,delete b.label),i("referenceType")}function O(){const b=this.stack[this.stack.length-1];a("inReference")?(b.type+="Reference",b.referenceType=a("referenceType")||"shortcut",delete b.url,delete b.title):(delete b.identifier,delete b.label),i("referenceType")}function y(b){const D=this.stack[this.stack.length-2],U=this.sliceSerialize(b);D.label=Iw(U),D.identifier=Jt(U).toLowerCase()}function g(){const b=this.stack[this.stack.length-1],D=this.resume(),U=this.stack[this.stack.length-1];i("inReference",!0),U.type==="link"?U.children=b.children:U.alt=D}function pn(){const b=this.resume(),D=this.stack[this.stack.length-1];D.url=b}function Ue(){const b=this.resume(),D=this.stack[this.stack.length-1];D.title=b}function vn(){i("inReference")}function X(){i("referenceType","collapsed")}function Ie(b){const D=this.resume(),U=this.stack[this.stack.length-1];U.label=D,U.identifier=Jt(this.sliceSerialize(b)).toLowerCase(),i("referenceType","full")}function Pn(b){i("characterReferenceType",b.type)}function Rt(b){const D=this.sliceSerialize(b),U=a("characterReferenceType");let Y;U?(Y=lh(D,U==="characterReferenceMarkerNumeric"?10:16),i("characterReferenceType")):Y=bl(D);const Ge=this.stack.pop();Ge.value+=Y,Ge.position.end=s(b.end)}function Ct(b){q.call(this,b);const D=this.stack[this.stack.length-1];D.url=this.sliceSerialize(b)}function Wi(b){q.call(this,b);const D=this.stack[this.stack.length-1];D.url="mailto:"+this.sliceSerialize(b)}function Ah(){return{type:"blockquote",children:[]}}function jl(){return{type:"code",lang:null,meta:null,value:""}}function Mh(){return{type:"inlineCode",value:""}}function Oh(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Fh(){return{type:"emphasis",children:[]}}function Dl(){return{type:"heading",depth:void 0,children:[]}}function Al(){return{type:"break"}}function Ml(){return{type:"html",value:""}}function Lh(){return{type:"image",title:null,url:"",alt:null}}function Ol(){return{type:"link",title:null,url:"",children:[]}}function Fl(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function Nh(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function zh(){return{type:"paragraph",children:[]}}function Wh(){return{type:"strong",children:[]}}function _h(){return{type:"text",value:""}}function qh(){return{type:"thematicBreak"}}}function uh(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?uh(e,r):Mw(e,r)}return e}function Mw(e,n){let t;for(t in n)if(Ss.call(n,t)){const r=t==="canContainEols"||t==="transforms",i=(Ss.call(e,t)?e[t]:void 0)||(e[t]=r?[]:{}),a=n[t];a&&(r?e[t]=[...i,...a]:Object.assign(i,a))}}function vc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Ar({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Ar({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Ar({start:n.start,end:n.end})+") is still open")}function Ow(e){Object.assign(this,{Parser:t=>{const r=this.data("settings");return Dw(t,Object.assign({},r,e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}var me=function(e,n,t){var r={type:String(e)};return t==null&&(typeof n=="string"||Array.isArray(n))?t=n:Object.assign(r,n),Array.isArray(t)?r.children=t:t!=null&&(r.value=String(t)),r};const Wo={}.hasOwnProperty;function Fw(e,n){const t=n.data||{};return"value"in n&&!(Wo.call(t,"hName")||Wo.call(t,"hProperties")||Wo.call(t,"hChildren"))?e.augment(n,me("text",n.value)):e(n,"div",Ee(e,n))}function ch(e,n,t){const r=n&&n.type;let o;if(!r)throw new Error("Expected node, got `"+n+"`");return Wo.call(e.handlers,r)?o=e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?o=Lw:o=e.unknownHandler,(typeof o=="function"?o:Fw)(e,n,t)}function Lw(e,n){return"children"in n?{...n,children:Ee(e,n)}:n}function Ee(e,n){const t=[];if("children"in n){const r=n.children;let o=-1;for(;++o<r.length;){const i=ch(e,r[o],n);if(i){if(o&&r[o-1].type==="break"&&(!Array.isArray(i)&&i.type==="text"&&(i.value=i.value.replace(/^\s+/,"")),!Array.isArray(i)&&i.type==="element")){const a=i.children[0];a&&a.type==="text"&&(a.value=a.value.replace(/^\s+/,""))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}const ph=function(e){if(e==null)return _w;if(typeof e=="string")return Ww(e);if(typeof e=="object")return Array.isArray(e)?Nw(e):zw(e);if(typeof e=="function")return Pi(e);throw new Error("Expected function, string, or object as test")};function Nw(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=ph(e[t]);return Pi(r);function r(...o){let i=-1;for(;++i<n.length;)if(n[i].call(this,...o))return!0;return!1}}function zw(e){return Pi(n);function n(t){let r;for(r in e)if(t[r]!==e[r])return!1;return!0}}function Ww(e){return Pi(n);function n(t){return t&&t.type===e}}function Pi(e){return n;function n(...t){return Boolean(e.call(this,...t))}}function _w(){return!0}const qw=!0,Uw="skip",xc=!1,Bw=function(e,n,t,r){typeof n=="function"&&typeof t!="function"&&(r=t,t=n,n=null);const o=ph(n),i=r?-1:1;a(e,null,[])();function a(s,l,u){const p=typeof s=="object"&&s!==null?s:{};let d;return typeof p.type=="string"&&(d=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0,Object.defineProperty(f,"name",{value:"node ("+(p.type+(d?"<"+d+">":""))+")"})),f;function f(){let w=[],v,x,T;if((!n||o(s,l,u[u.length-1]||null))&&(w=Hw(t(s,u)),w[0]===xc))return w;if(s.children&&w[0]!==Uw)for(x=(r?s.children.length:-1)+i,T=u.concat(s);x>-1&&x<s.children.length;){if(v=a(s.children[x],x,T)(),v[0]===xc)return v;x=typeof v[1]=="number"?v[1]:x+i}return w}}};function Hw(e){return Array.isArray(e)?e:typeof e=="number"?[qw,e]:[e]}const Cl=function(e,n,t,r){typeof n=="function"&&typeof t!="function"&&(r=t,t=n,n=null),Bw(e,n,o,r);function o(i,a){const s=a[a.length-1];return t(i,s?s.children.indexOf(i):null,s)}},dh=fh("start"),hh=fh("end");function fh(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function Vw(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}const kc={}.hasOwnProperty;function $w(e){const n=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return Cl(e,"definition",r=>{const o=Sc(r.identifier);o&&!kc.call(n,o)&&(n[o]=r)}),t;function t(r){const o=Sc(r);return o&&kc.call(n,o)?n[o]:null}}function Sc(e){return String(e||"").toUpperCase()}function ir(e){const n=[];let t=-1,r=0,o=0;for(;++t<e.length;){const i=e.charCodeAt(t);let a="";if(i===37&&$e(e.charCodeAt(t+1))&&$e(e.charCodeAt(t+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const s=e.charCodeAt(t+1);i<56320&&s>56319&&s<57344?(a=String.fromCharCode(i,s),o=1):a="\uFFFD"}else a=String.fromCharCode(i);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+o+1,a=""),o&&(t+=o,o=0)}return n.join("")+e.slice(r)}function On(e,n){const t=[];let r=-1;for(n&&t.push(me("text",`
`));++r<e.length;)r&&t.push(me("text",`
`)),t.push(e[r]);return n&&e.length>0&&t.push(me("text",`
`)),t}function Jw(e){let n=-1;const t=[];for(;++n<e.footnoteOrder.length;){const r=e.footnoteById[e.footnoteOrder[n].toUpperCase()];if(!r)continue;const o=Ee(e,r),i=String(r.identifier),a=ir(i.toLowerCase());let s=0;const l=[];for(;++s<=e.footnoteCounts[i];){const d={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+a+(s>1?"-"+s:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"\u21A9"}]};s>1&&d.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(s)}]}),l.length>0&&l.push({type:"text",value:" "}),l.push(d)}const u=o[o.length-1];if(u&&u.type==="element"&&u.tagName==="p"){const d=u.children[u.children.length-1];d&&d.type==="text"?d.value+=" ":u.children.push({type:"text",value:" "}),u.children.push(...l)}else o.push(...l);const p={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+a},children:On(o,!0)};r.position&&(p.position=r.position),t.push(p)}return t.length===0?null:{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[me("text",e.footnoteLabel)]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:On(t,!0)},{type:"text",value:`
`}]}}function Yw(e,n){return e(n,"blockquote",On(Ee(e,n),!0))}function Xw(e,n){return[e(n,"br"),me("text",`
`)]}function Qw(e,n){const t=n.value?n.value+`
`:"",r=n.lang&&n.lang.match(/^[^ \t]+(?=[ \t]|$)/),o={};r&&(o.className=["language-"+r]);const i=e(n,"code",o,[me("text",t)]);return n.meta&&(i.data={meta:n.meta}),e(n.position,"pre",[i])}function Gw(e,n){return e(n,"del",Ee(e,n))}function Kw(e,n){return e(n,"em",Ee(e,n))}function mh(e,n){const t=String(n.identifier),r=ir(t.toLowerCase()),o=e.footnoteOrder.indexOf(t);let i;o===-1?(e.footnoteOrder.push(t),e.footnoteCounts[t]=1,i=e.footnoteOrder.length):(e.footnoteCounts[t]++,i=o+1);const a=e.footnoteCounts[t];return e(n,"sup",[e(n.position,"a",{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:"footnote-label"},[me("text",String(i))])])}function Zw(e,n){const t=e.footnoteById;let r=1;for(;r in t;)r++;const o=String(r);return t[o]={type:"footnoteDefinition",identifier:o,children:[{type:"paragraph",children:n.children}],position:n.position},mh(e,{type:"footnoteReference",identifier:o,position:n.position})}function ev(e,n){return e(n,"h"+n.depth,Ee(e,n))}function nv(e,n){return e.dangerous?e.augment(n,me("raw",n.value)):null}function yh(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return me("text","!["+n.alt+r);const o=Ee(e,n),i=o[0];i&&i.type==="text"?i.value="["+i.value:o.unshift(me("text","["));const a=o[o.length-1];return a&&a.type==="text"?a.value+=r:o.push(me("text",r)),o}function tv(e,n){const t=e.definition(n.identifier);if(!t)return yh(e,n);const r={src:ir(t.url||""),alt:n.alt};return t.title!==null&&t.title!==void 0&&(r.title=t.title),e(n,"img",r)}function rv(e,n){const t={src:ir(n.url),alt:n.alt};return n.title!==null&&n.title!==void 0&&(t.title=n.title),e(n,"img",t)}function ov(e,n){return e(n,"code",[me("text",n.value.replace(/\r?\n|\r/g," "))])}function iv(e,n){const t=e.definition(n.identifier);if(!t)return yh(e,n);const r={href:ir(t.url||"")};return t.title!==null&&t.title!==void 0&&(r.title=t.title),e(n,"a",r,Ee(e,n))}function av(e,n){const t={href:ir(n.url)};return n.title!==null&&n.title!==void 0&&(t.title=n.title),e(n,"a",t,Ee(e,n))}function sv(e,n,t){const r=Ee(e,n),o=t?lv(t):gh(n),i={},a=[];if(typeof n.checked=="boolean"){let u;r[0]&&r[0].type==="element"&&r[0].tagName==="p"?u=r[0]:(u=e(null,"p",[]),r.unshift(u)),u.children.length>0&&u.children.unshift(me("text"," ")),u.children.unshift(e(null,"input",{type:"checkbox",checked:n.checked,disabled:!0})),i.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const u=r[s];(o||s!==0||u.type!=="element"||u.tagName!=="p")&&a.push(me("text",`
`)),u.type==="element"&&u.tagName==="p"&&!o?a.push(...u.children):a.push(u)}const l=r[r.length-1];return l&&(o||!("tagName"in l)||l.tagName!=="p")&&a.push(me("text",`
`)),e(n,"li",i,a)}function lv(e){let n=e.spread;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=gh(t[r]);return Boolean(n)}function gh(e){const n=e.spread;return n==null?e.children.length>1:n}function uv(e,n){const t={},r=n.ordered?"ol":"ul",o=Ee(e,n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<o.length;){const a=o[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}return e(n,r,t,On(o,!0))}function cv(e,n){return e(n,"p",Ee(e,n))}function pv(e,n){return e.augment(n,me("root",On(Ee(e,n))))}function dv(e,n){return e(n,"strong",Ee(e,n))}function hv(e,n){const t=n.children;let r=-1;const o=n.align||[],i=[];for(;++r<t.length;){const a=t[r].children,s=r===0?"th":"td",l=[];let u=-1;const p=n.align?o.length:a.length;for(;++u<p;){const d=a[u];l.push(e(d,s,{align:o[u]},d?Ee(e,d):[]))}i[r]=e(t[r],"tr",On(l,!0))}return e(n,"table",On([e(i[0].position,"thead",On([i[0]],!0))].concat(i[1]?e({start:dh(i[1]),end:hh(i[i.length-1])},"tbody",On(i.slice(1),!0)):[]),!0))}const bc=9,Rc=32;function fv(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),o=0;const i=[];for(;r;)i.push(Cc(n.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=t.exec(n);return i.push(Cc(n.slice(o),o>0,!1)),i.join("")}function Cc(e,n,t){let r=0,o=e.length;if(n){let i=e.codePointAt(r);for(;i===bc||i===Rc;)r++,i=e.codePointAt(r)}if(t){let i=e.codePointAt(o-1);for(;i===bc||i===Rc;)o--,i=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function mv(e,n){return e.augment(n,me("text",fv(String(n.value))))}function yv(e,n){return e(n,"hr")}const gv={blockquote:Yw,break:Xw,code:Qw,delete:Gw,emphasis:Kw,footnoteReference:mh,footnote:Zw,heading:ev,html:nv,imageReference:tv,image:rv,inlineCode:ov,linkReference:iv,link:av,listItem:sv,list:uv,paragraph:cv,root:pv,strong:dv,table:hv,text:mv,thematicBreak:yv,toml:So,yaml:So,definition:So,footnoteDefinition:So};function So(){return null}const wv={}.hasOwnProperty;function vv(e,n){const t=n||{},r=t.allowDangerousHtml||!1,o={};return a.dangerous=r,a.clobberPrefix=t.clobberPrefix===void 0||t.clobberPrefix===null?"user-content-":t.clobberPrefix,a.footnoteLabel=t.footnoteLabel||"Footnotes",a.footnoteLabelTagName=t.footnoteLabelTagName||"h2",a.footnoteLabelProperties=t.footnoteLabelProperties||{className:["sr-only"]},a.footnoteBackLabel=t.footnoteBackLabel||"Back to content",a.definition=$w(e),a.footnoteById=o,a.footnoteOrder=[],a.footnoteCounts={},a.augment=i,a.handlers={...gv,...t.handlers},a.unknownHandler=t.unknownHandler,a.passThrough=t.passThrough,Cl(e,"footnoteDefinition",s=>{const l=String(s.identifier).toUpperCase();wv.call(o,l)||(o[l]=s)}),a;function i(s,l){if(s&&"data"in s&&s.data){const u=s.data;u.hName&&(l.type!=="element"&&(l={type:"element",tagName:"",properties:{},children:[]}),l.tagName=u.hName),l.type==="element"&&u.hProperties&&(l.properties={...l.properties,...u.hProperties}),"children"in l&&l.children&&u.hChildren&&(l.children=u.hChildren)}if(s){const u="type"in s?s:{position:s};Vw(u)||(l.position={start:dh(u),end:hh(u)})}return l}function a(s,l,u,p){return Array.isArray(u)&&(p=u,u={}),i(s,{type:"element",tagName:l,properties:u||{},children:p||[]})}}function wh(e,n){const t=vv(e,n),r=ch(t,e,null),o=Jw(t);return o&&r.children.push(me("text",`
`),o),Array.isArray(r)?{type:"root",children:r}:r}const xv=function(e,n){return e&&"run"in e?Sv(e,n):bv(e||n)},kv=xv;function Sv(e,n){return(t,r,o)=>{e.run(wh(t,n),r,i=>{o(i)})}}function bv(e){return n=>wh(n,e)}var W={exports:{}},Rv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Cv=Rv,Tv=Cv;function vh(){}function xh(){}xh.resetWarningCache=vh;var Ev=function(){function e(r,o,i,a,s,l){if(l!==Tv){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:xh,resetWarningCache:vh};return t.PropTypes=t,t};W.exports=Ev();class ro{constructor(n,t,r){this.property=n,this.normal=t,r&&(this.space=r)}}ro.prototype.property={};ro.prototype.normal={};ro.prototype.space=null;function kh(e,n){const t={},r={};let o=-1;for(;++o<e.length;)Object.assign(t,e[o].property),Object.assign(r,e[o].normal);return new ro(t,r,n)}function bs(e){return e.toLowerCase()}class un{constructor(n,t){this.property=n,this.attribute=t}}un.prototype.space=null;un.prototype.boolean=!1;un.prototype.booleanish=!1;un.prototype.overloadedBoolean=!1;un.prototype.number=!1;un.prototype.commaSeparated=!1;un.prototype.spaceSeparated=!1;un.prototype.commaOrSpaceSeparated=!1;un.prototype.mustUseProperty=!1;un.prototype.defined=!1;let Pv=0;const B=bt(),ue=bt(),Sh=bt(),P=bt(),ee=bt(),Yt=bt(),Be=bt();function bt(){return 2**++Pv}const Rs=Object.freeze(Object.defineProperty({__proto__:null,boolean:B,booleanish:ue,overloadedBoolean:Sh,number:P,spaceSeparated:ee,commaSeparated:Yt,commaOrSpaceSeparated:Be},Symbol.toStringTag,{value:"Module"})),ka=Object.keys(Rs);class Tl extends un{constructor(n,t,r,o){let i=-1;if(super(n,t),Tc(this,"space",o),typeof r=="number")for(;++i<ka.length;){const a=ka[i];Tc(this,ka[i],(r&Rs[a])===Rs[a])}}}Tl.prototype.defined=!0;function Tc(e,n,t){t&&(e[n]=t)}const Iv={}.hasOwnProperty;function ar(e){const n={},t={};let r;for(r in e.properties)if(Iv.call(e.properties,r)){const o=e.properties[r],i=new Tl(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),n[r]=i,t[bs(r)]=r,t[bs(i.attribute)]=r}return new ro(n,t,e.space)}const bh=ar({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Rh=ar({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Ch(e,n){return n in e?e[n]:n}function Th(e,n){return Ch(e,n.toLowerCase())}const Eh=ar({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Th,properties:{xmlns:null,xmlnsXLink:null}}),Ph=ar({transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:ue,ariaAutoComplete:null,ariaBusy:ue,ariaChecked:ue,ariaColCount:P,ariaColIndex:P,ariaColSpan:P,ariaControls:ee,ariaCurrent:null,ariaDescribedBy:ee,ariaDetails:null,ariaDisabled:ue,ariaDropEffect:ee,ariaErrorMessage:null,ariaExpanded:ue,ariaFlowTo:ee,ariaGrabbed:ue,ariaHasPopup:null,ariaHidden:ue,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ee,ariaLevel:P,ariaLive:null,ariaModal:ue,ariaMultiLine:ue,ariaMultiSelectable:ue,ariaOrientation:null,ariaOwns:ee,ariaPlaceholder:null,ariaPosInSet:P,ariaPressed:ue,ariaReadOnly:ue,ariaRelevant:null,ariaRequired:ue,ariaRoleDescription:ee,ariaRowCount:P,ariaRowIndex:P,ariaRowSpan:P,ariaSelected:ue,ariaSetSize:P,ariaSort:null,ariaValueMax:P,ariaValueMin:P,ariaValueNow:P,ariaValueText:null,role:null}}),jv=ar({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Th,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Yt,acceptCharset:ee,accessKey:ee,action:null,allow:null,allowFullScreen:B,allowPaymentRequest:B,allowUserMedia:B,alt:null,as:null,async:B,autoCapitalize:null,autoComplete:ee,autoFocus:B,autoPlay:B,capture:B,charSet:null,checked:B,cite:null,className:ee,cols:P,colSpan:null,content:null,contentEditable:ue,controls:B,controlsList:ee,coords:P|Yt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:B,defer:B,dir:null,dirName:null,disabled:B,download:Sh,draggable:ue,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:B,formTarget:null,headers:ee,height:P,hidden:B,high:P,href:null,hrefLang:null,htmlFor:ee,httpEquiv:ee,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:B,itemId:null,itemProp:ee,itemRef:ee,itemScope:B,itemType:ee,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:B,low:P,manifest:null,max:null,maxLength:P,media:null,method:null,min:null,minLength:P,multiple:B,muted:B,name:null,nonce:null,noModule:B,noValidate:B,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:B,optimum:P,pattern:null,ping:ee,placeholder:null,playsInline:B,poster:null,preload:null,readOnly:B,referrerPolicy:null,rel:ee,required:B,reversed:B,rows:P,rowSpan:P,sandbox:ee,scope:null,scoped:B,seamless:B,selected:B,shape:null,size:P,sizes:null,slot:null,span:P,spellCheck:ue,src:null,srcDoc:null,srcLang:null,srcSet:null,start:P,step:null,style:null,tabIndex:P,target:null,title:null,translate:null,type:null,typeMustMatch:B,useMap:null,value:ue,width:P,wrap:null,align:null,aLink:null,archive:ee,axis:null,background:null,bgColor:null,border:P,borderColor:null,bottomMargin:P,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:B,declare:B,event:null,face:null,frame:null,frameBorder:null,hSpace:P,leftMargin:P,link:null,longDesc:null,lowSrc:null,marginHeight:P,marginWidth:P,noResize:B,noHref:B,noShade:B,noWrap:B,object:null,profile:null,prompt:null,rev:null,rightMargin:P,rules:null,scheme:null,scrolling:ue,standby:null,summary:null,text:null,topMargin:P,valueType:null,version:null,vAlign:null,vLink:null,vSpace:P,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:B,disableRemotePlayback:B,prefix:null,property:null,results:P,security:null,unselectable:null}}),Dv=ar({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Ch,properties:{about:Be,accentHeight:P,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:P,amplitude:P,arabicForm:null,ascent:P,attributeName:null,attributeType:null,azimuth:P,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:P,by:null,calcMode:null,capHeight:P,className:ee,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:P,diffuseConstant:P,direction:null,display:null,dur:null,divisor:P,dominantBaseline:null,download:B,dx:null,dy:null,edgeMode:null,editable:null,elevation:P,enableBackground:null,end:null,event:null,exponent:P,externalResourcesRequired:null,fill:null,fillOpacity:P,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Yt,g2:Yt,glyphName:Yt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:P,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:P,horizOriginX:P,horizOriginY:P,id:null,ideographic:P,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:P,k:P,k1:P,k2:P,k3:P,k4:P,kernelMatrix:Be,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:P,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:P,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:P,overlineThickness:P,paintOrder:null,panose1:null,path:null,pathLength:P,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ee,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:P,pointsAtY:P,pointsAtZ:P,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Be,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Be,rev:Be,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Be,requiredFeatures:Be,requiredFonts:Be,requiredFormats:Be,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:P,specularExponent:P,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:P,strikethroughThickness:P,string:null,stroke:null,strokeDashArray:Be,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:P,strokeOpacity:P,strokeWidth:null,style:null,surfaceScale:P,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Be,tabIndex:P,tableValues:null,target:null,targetX:P,targetY:P,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Be,to:null,transform:null,u1:null,u2:null,underlinePosition:P,underlineThickness:P,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:P,values:null,vAlphabetic:P,vMathematical:P,vectorEffect:null,vHanging:P,vIdeographic:P,version:null,vertAdvY:P,vertOriginX:P,vertOriginY:P,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:P,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Av=/^data[-\w.:]+$/i,Ec=/-[a-z]/g,Mv=/[A-Z]/g;function Ov(e,n){const t=bs(n);let r=n,o=un;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Av.test(n)){if(n.charAt(4)==="-"){const i=n.slice(5).replace(Ec,Lv);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=n.slice(4);if(!Ec.test(i)){let a=i.replace(Mv,Fv);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}o=Tl}return new o(r,n)}function Fv(e){return"-"+e.toLowerCase()}function Lv(e){return e.charAt(1).toUpperCase()}const Pc={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Nv=kh([Rh,bh,Eh,Ph,jv],"html"),zv=kh([Rh,bh,Eh,Ph,Dv],"svg");function Wv(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return n=>{Cl(n,"element",(t,r,o)=>{const i=o;let a;if(e.allowedElements?a=!e.allowedElements.includes(t.tagName):e.disallowedElements&&(a=e.disallowedElements.includes(t.tagName)),!a&&e.allowElement&&typeof r=="number"&&(a=!e.allowElement(t,r,i)),a&&typeof r=="number")return e.unwrapDisallowed&&t.children?i.children.splice(r,1,...t.children):i.children.splice(r,1),r})}}var Ih={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=Symbol.for("react.element"),Pl=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),ji=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),Ai=Symbol.for("react.provider"),Mi=Symbol.for("react.context"),_v=Symbol.for("react.server_context"),Oi=Symbol.for("react.forward_ref"),Fi=Symbol.for("react.suspense"),Li=Symbol.for("react.suspense_list"),Ni=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),qv=Symbol.for("react.offscreen"),jh;jh=Symbol.for("react.module.reference");function cn(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case El:switch(e=e.type,e){case Ii:case Di:case ji:case Fi:case Li:return e;default:switch(e=e&&e.$$typeof,e){case _v:case Mi:case Oi:case zi:case Ni:case Ai:return e;default:return n}}case Pl:return n}}}J.ContextConsumer=Mi;J.ContextProvider=Ai;J.Element=El;J.ForwardRef=Oi;J.Fragment=Ii;J.Lazy=zi;J.Memo=Ni;J.Portal=Pl;J.Profiler=Di;J.StrictMode=ji;J.Suspense=Fi;J.SuspenseList=Li;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return cn(e)===Mi};J.isContextProvider=function(e){return cn(e)===Ai};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===El};J.isForwardRef=function(e){return cn(e)===Oi};J.isFragment=function(e){return cn(e)===Ii};J.isLazy=function(e){return cn(e)===zi};J.isMemo=function(e){return cn(e)===Ni};J.isPortal=function(e){return cn(e)===Pl};J.isProfiler=function(e){return cn(e)===Di};J.isStrictMode=function(e){return cn(e)===ji};J.isSuspense=function(e){return cn(e)===Fi};J.isSuspenseList=function(e){return cn(e)===Li};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ii||e===Di||e===ji||e===Fi||e===Li||e===qv||typeof e=="object"&&e!==null&&(e.$$typeof===zi||e.$$typeof===Ni||e.$$typeof===Ai||e.$$typeof===Mi||e.$$typeof===Oi||e.$$typeof===jh||e.getModuleId!==void 0)};J.typeOf=cn;(function(e){e.exports=J})(Ih);const Uv=Oc(Ih.exports);function Bv(e){var n=e&&typeof e=="object"&&e.type==="text"?e.value||"":e;return typeof n=="string"&&n.replace(/[ \t\n\f\r]/g,"")===""}function Hv(e){return e.join(" ").trim()}function Vv(e,n){var t=n||{};return e[e.length-1]===""&&(e=e.concat("")),e.join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}var Ic=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,$v=/\n/g,Jv=/^\s*/,Yv=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Xv=/^:\s*/,Qv=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Gv=/^[;\s]*/,Kv=/^\s+|\s+$/g,Zv=`
`,jc="/",Dc="*",ct="",e1="comment",n1="declaration",t1=function(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function o(v){var x=v.match($v);x&&(t+=x.length);var T=v.lastIndexOf(Zv);r=~T?v.length-T:r+v.length}function i(){var v={line:t,column:r};return function(x){return x.position=new a(v),u(),x}}function a(v){this.start=v,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function s(v){var x=new Error(n.source+":"+t+":"+r+": "+v);if(x.reason=v,x.filename=n.source,x.line=t,x.column=r,x.source=e,!n.silent)throw x}function l(v){var x=v.exec(e);if(!!x){var T=x[0];return o(T),e=e.slice(T.length),x}}function u(){l(Jv)}function p(v){var x;for(v=v||[];x=d();)x!==!1&&v.push(x);return v}function d(){var v=i();if(!(jc!=e.charAt(0)||Dc!=e.charAt(1))){for(var x=2;ct!=e.charAt(x)&&(Dc!=e.charAt(x)||jc!=e.charAt(x+1));)++x;if(x+=2,ct===e.charAt(x-1))return s("End of comment missing");var T=e.slice(2,x-2);return r+=2,o(T),e=e.slice(x),r+=2,v({type:e1,comment:T})}}function f(){var v=i(),x=l(Yv);if(!!x){if(d(),!l(Xv))return s("property missing ':'");var T=l(Qv),c=v({type:n1,property:Ac(x[0].replace(Ic,ct)),value:T?Ac(T[0].replace(Ic,ct)):ct});return l(Gv),c}}function w(){var v=[];p(v);for(var x;x=f();)x!==!1&&(v.push(x),p(v));return v}return u(),w()};function Ac(e){return e?e.replace(Kv,ct):ct}var r1=t1;function o1(e,n){var t=null;if(!e||typeof e!="string")return t;for(var r,o=r1(e),i=typeof n=="function",a,s,l=0,u=o.length;l<u;l++)r=o[l],a=r.property,s=r.value,i?n(a,s,r):s&&(t||(t={}),t[a]=s);return t}var i1=o1;const Cs={}.hasOwnProperty,a1=new Set(["table","thead","tbody","tfoot","tr"]);function Dh(e,n){const t=[];let r=-1,o;for(;++r<n.children.length;)o=n.children[r],o.type==="element"?t.push(s1(e,o,r,n)):o.type==="text"?(n.type!=="element"||!a1.has(n.tagName)||!Bv(o))&&t.push(o.value):o.type==="raw"&&!e.options.skipHtml&&t.push(o.value);return t}function s1(e,n,t,r){const o=e.options,i=e.schema,a=n.tagName,s={};let l=i,u;if(i.space==="html"&&a==="svg"&&(l=zv,e.schema=l),n.properties)for(u in n.properties)Cs.call(n.properties,u)&&u1(s,u,n.properties[u],e);(a==="ol"||a==="ul")&&e.listDepth++;const p=Dh(e,n);(a==="ol"||a==="ul")&&e.listDepth--,e.schema=i;const d=n.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},f=o.components&&Cs.call(o.components,a)?o.components[a]:a,w=typeof f=="string"||f===To.Fragment;if(!Uv.isValidElementType(f))throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);if(s.key=[a,d.start.line,d.start.column,t].join("-"),a==="a"&&o.linkTarget&&(s.target=typeof o.linkTarget=="function"?o.linkTarget(String(s.href||""),n.children,typeof s.title=="string"?s.title:null):o.linkTarget),a==="a"&&o.transformLinkUri&&(s.href=o.transformLinkUri(String(s.href||""),n.children,typeof s.title=="string"?s.title:null)),!w&&a==="code"&&r.type==="element"&&r.tagName!=="pre"&&(s.inline=!0),!w&&(a==="h1"||a==="h2"||a==="h3"||a==="h4"||a==="h5"||a==="h6")&&(s.level=Number.parseInt(a.charAt(1),10)),a==="img"&&o.transformImageUri&&(s.src=o.transformImageUri(String(s.src||""),String(s.alt||""),typeof s.title=="string"?s.title:null)),!w&&a==="li"&&r.type==="element"){const v=l1(n);s.checked=v&&v.properties?Boolean(v.properties.checked):null,s.index=Sa(r,n),s.ordered=r.tagName==="ol"}return!w&&(a==="ol"||a==="ul")&&(s.ordered=a==="ol",s.depth=e.listDepth),(a==="td"||a==="th")&&(s.align&&(s.style||(s.style={}),s.style.textAlign=s.align,delete s.align),w||(s.isHeader=a==="th")),!w&&a==="tr"&&r.type==="element"&&(s.isHeader=Boolean(r.tagName==="thead")),o.sourcePos&&(s["data-sourcepos"]=d1(d)),!w&&o.rawSourcePos&&(s.sourcePosition=n.position),!w&&o.includeElementIndex&&(s.index=Sa(r,n),s.siblingCount=Sa(r)),w||(s.node=n),p.length>0?To.createElement(f,s,p):To.createElement(f,s)}function l1(e){let n=-1;for(;++n<e.children.length;){const t=e.children[n];if(t.type==="element"&&t.tagName==="input")return t}return null}function Sa(e,n){let t=-1,r=0;for(;++t<e.children.length&&e.children[t]!==n;)e.children[t].type==="element"&&r++;return r}function u1(e,n,t,r){const o=Ov(r.schema,n);let i=t;i==null||i!==i||(Array.isArray(i)&&(i=o.commaSeparated?Vv(i):Hv(i)),o.property==="style"&&typeof i=="string"&&(i=c1(i)),o.space&&o.property?e[Cs.call(Pc,o.property)?Pc[o.property]:o.property]=i:o.attribute&&(e[o.attribute]=i))}function c1(e){const n={};try{i1(e,t)}catch{}return n;function t(r,o){const i=r.slice(0,4)==="-ms-"?`ms-${r.slice(4)}`:r;n[i.replace(/-([a-z])/g,p1)]=o}}function p1(e,n){return n.toUpperCase()}function d1(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(n=>String(n)).join("")}const Mc={}.hasOwnProperty,h1="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",bo={plugins:{to:"plugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function Il(e){for(const i in bo)if(Mc.call(bo,i)&&Mc.call(e,i)){const a=bo[i];console.warn(`[react-markdown] Warning: please ${a.to?`use \`${a.to}\` instead of`:"remove"} \`${i}\` (see <${h1}#${a.id}> for more info)`),delete bo[i]}const n=Dy().use(Ow).use(e.remarkPlugins||[]).use(kv,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(Wv,e),t=new Yd;typeof e.children=="string"?t.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);const r=n.runSync(n.parse(t),t);if(r.type!=="root")throw new TypeError("Expected a `root` node");let o=ge(fy,{children:Dh({options:e,schema:Nv,listDepth:0},r)});return e.className&&(o=ge("div",{className:e.className,children:o})),o}Il.defaultProps={transformLinkUri:wy};Il.propTypes={children:W.exports.string,className:W.exports.string,allowElement:W.exports.func,allowedElements:W.exports.arrayOf(W.exports.string),disallowedElements:W.exports.arrayOf(W.exports.string),unwrapDisallowed:W.exports.bool,remarkPlugins:W.exports.arrayOf(W.exports.oneOfType([W.exports.object,W.exports.func,W.exports.arrayOf(W.exports.oneOfType([W.exports.bool,W.exports.string,W.exports.object,W.exports.func,W.exports.arrayOf(W.exports.any)]))])),rehypePlugins:W.exports.arrayOf(W.exports.oneOfType([W.exports.object,W.exports.func,W.exports.arrayOf(W.exports.oneOfType([W.exports.bool,W.exports.string,W.exports.object,W.exports.func,W.exports.arrayOf(W.exports.any)]))])),sourcePos:W.exports.bool,rawSourcePos:W.exports.bool,skipHtml:W.exports.bool,includeElementIndex:W.exports.bool,transformLinkUri:W.exports.oneOfType([W.exports.func,W.exports.bool]),linkTarget:W.exports.oneOfType([W.exports.func,W.exports.string]),transformImageUri:W.exports.func,components:W.exports.object};function f1(){const{setPage:e,reactJS:n,setReactJS:t}=xl(),r=kl.ReactJS.v1.value,[o,i]=nn.exports.useState(null),[a,s]=nn.exports.useState(!1);nn.exports.useEffect(()=>{u()},[]),nn.exports.useEffect(()=>(document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}),[o]);const l=()=>{const d=Object.entries(n!=null?n:{}).filter(([,w])=>!w.isDone),f=Math.floor(Math.random()*d.length);return d[f][0]};function u(d=!1){if(d&&o){const w={...n};w[o]={isDone:!0},t(w),$t.set("ReactJS",w)}const f=l();i(f),s(!1)}function p(d){d.key===" "?s(f=>!f):d.key==="ArrowRight"?u():d.key==="Enter"&&u(!0)}return ge("div",{style:{height:"100vh"},children:Dr("div",{style:{maxWidth:"800px",padding:"50px",margin:"0 auto"},children:[ge("div",{style:{height:"calc(100vh - 150px)"},onClick:()=>s(d=>!d),children:o&&ge(Il,{children:r[o.toString()].question+(a?r[o.toString()].answer:"")})}),Dr("div",{style:{display:"flex",gap:"10px",justifyContent:"center",alignItems:"center",height:"50px"},children:[ge("button",{onClick:()=>e("Home"),children:"Go Back"}),Dr("button",{style:{width:"100px"},onClick:()=>s(d=>!d),children:[a?"Hide":"Show"," Answer"]}),ge("button",{onClick:()=>u(!0),children:"Done"}),ge("button",{onClick:()=>u(),children:"Again"})]})]})})}function m1(){return ge(my,{children:ge(y1,{})})}function y1(){const{page:e,setReactJS:n}=xl();return nn.exports.useEffect(()=>{let t=$t.get("ReactJS");if($t.get("JavaScript"),t==null){const r=kl.ReactJS.v1.initState();$t.set("ReactJS",r),n(r)}else n(t)},[]),e==="InGame"?ge(f1,{}):ge(gy,{})}ba.createRoot(document.getElementById("root")).render(ge(To.StrictMode,{children:ge(m1,{})}));
