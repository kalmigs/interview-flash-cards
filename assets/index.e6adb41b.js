var iA=Object.defineProperty;var sA=(e,t,n)=>t in e?iA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Km=(e,t,n)=>(sA(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pt={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),lA=Symbol.for("react.portal"),uA=Symbol.for("react.fragment"),cA=Symbol.for("react.strict_mode"),dA=Symbol.for("react.profiler"),pA=Symbol.for("react.provider"),fA=Symbol.for("react.context"),mA=Symbol.for("react.forward_ref"),hA=Symbol.for("react.suspense"),gA=Symbol.for("react.memo"),bA=Symbol.for("react.lazy"),Xm=Symbol.iterator;function yA(e){return e===null||typeof e!="object"?null:(e=Xm&&e[Xm]||e["@@iterator"],typeof e=="function"?e:null)}var gS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bS=Object.assign,yS={};function Rr(e,t,n){this.props=e,this.context=t,this.refs=yS,this.updater=n||gS}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vS(){}vS.prototype=Rr.prototype;function bf(e,t,n){this.props=e,this.context=t,this.refs=yS,this.updater=n||gS}var yf=bf.prototype=new vS;yf.constructor=bf;bS(yf,Rr.prototype);yf.isPureReactComponent=!0;var Zm=Array.isArray,ES=Object.prototype.hasOwnProperty,vf={current:null},wS={key:!0,ref:!0,__self:!0,__source:!0};function SS(e,t,n){var r,a={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ES.call(t,r)&&!wS.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Sa,type:e,key:o,ref:i,props:a,_owner:vf.current}}function vA(e,t){return{$$typeof:Sa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ef(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sa}function EA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jm=/\/+/g;function Ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?EA(""+e.key):t.toString(36)}function Qa(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Sa:case lA:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+Ti(i,0):r,Zm(a)?(n="",e!=null&&(n=e.replace(Jm,"$&/")+"/"),Qa(a,t,n,"",function(u){return u})):a!=null&&(Ef(a)&&(a=vA(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Jm,"$&/")+"/")+e)),t.push(a)),1;if(i=0,r=r===""?".":r+":",Zm(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Ti(o,s);i+=Qa(o,t,n,l,a)}else if(l=yA(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Ti(o,s++),i+=Qa(o,t,n,l,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Na(e,t,n){if(e==null)return e;var r=[],a=0;return Qa(e,r,"","",function(o){return t.call(n,o,a++)}),r}function wA(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},eo={transition:null},SA={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:eo,ReactCurrentOwner:vf};Z.Children={map:Na,forEach:function(e,t,n){Na(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Na(e,function(){t++}),t},toArray:function(e){return Na(e,function(t){return t})||[]},only:function(e){if(!Ef(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Rr;Z.Fragment=uA;Z.Profiler=dA;Z.PureComponent=bf;Z.StrictMode=cA;Z.Suspense=hA;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SA;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bS({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=vf.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ES.call(t,l)&&!wS.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Sa,type:e.type,key:a,ref:o,props:r,_owner:i}};Z.createContext=function(e){return e={$$typeof:fA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pA,_context:e},e.Consumer=e};Z.createElement=SS;Z.createFactory=function(e){var t=SS.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:mA,render:e}};Z.isValidElement=Ef;Z.lazy=function(e){return{$$typeof:bA,_payload:{_status:-1,_result:e},_init:wA}};Z.memo=function(e,t){return{$$typeof:gA,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return ze.current.useCallback(e,t)};Z.useContext=function(e){return ze.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};Z.useEffect=function(e,t){return ze.current.useEffect(e,t)};Z.useId=function(){return ze.current.useId()};Z.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return ze.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};Z.useRef=function(e){return ze.current.useRef(e)};Z.useState=function(e){return ze.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return ze.current.useTransition()};Z.version="18.2.0";(function(e){e.exports=Z})(pt);const to=hS(pt.exports);var cp={},RS={exports:{}},ot={},TS={exports:{}},kS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,F){var M=x.length;x.push(F);e:for(;0<M;){var w=M-1>>>1,R=x[w];if(0<a(R,F))x[w]=F,x[M]=R,M=w;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var F=x[0],M=x.pop();if(M!==F){x[0]=M;e:for(var w=0,R=x.length,pe=R>>>1;w<pe;){var ee=2*(w+1)-1,be=x[ee],G=ee+1,oe=x[G];if(0>a(be,M))G<R&&0>a(oe,be)?(x[w]=oe,x[G]=M,w=G):(x[w]=be,x[ee]=M,w=ee);else if(G<R&&0>a(oe,M))x[w]=oe,x[G]=M,w=G;else break e}}return F}function a(x,F){var M=x.sortIndex-F.sortIndex;return M!==0?M:x.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,m=3,g=!1,E=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(x){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=x)r(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(u)}}function S(x){if(y=!1,p(x),!E)if(n(l)!==null)E=!0,X(T);else{var F=n(u);F!==null&&J(S,F.startTime-x)}}function T(x,F){E=!1,y&&(y=!1,h(I),I=-1),g=!0;var M=m;try{for(p(F),d=n(l);d!==null&&(!(d.expirationTime>F)||x&&!N());){var w=d.callback;if(typeof w=="function"){d.callback=null,m=d.priorityLevel;var R=w(d.expirationTime<=F);F=e.unstable_now(),typeof R=="function"?d.callback=R:d===n(l)&&r(l),p(F)}else r(l);d=n(l)}if(d!==null)var pe=!0;else{var ee=n(u);ee!==null&&J(S,ee.startTime-F),pe=!1}return pe}finally{d=null,m=M,g=!1}}var b=!1,k=null,I=-1,C=5,O=-1;function N(){return!(e.unstable_now()-O<C)}function P(){if(k!==null){var x=e.unstable_now();O=x;var F=!0;try{F=k(!0,x)}finally{F?B():(b=!1,k=null)}}else b=!1}var B;if(typeof f=="function")B=function(){f(P)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=P,B=function(){K.postMessage(null)}}else B=function(){A(P,0)};function X(x){k=x,b||(b=!0,B())}function J(x,F){I=A(function(){x(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){E||g||(E=!0,X(T))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var M=m;m=F;try{return x()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,F){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var M=m;m=x;try{return F()}finally{m=M}},e.unstable_scheduleCallback=function(x,F,M){var w=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?w+M:w):M=w,x){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=M+R,x={id:c++,callback:F,priorityLevel:x,startTime:M,expirationTime:R,sortIndex:-1},M>w?(x.sortIndex=M,t(u,x),n(l)===null&&x===n(u)&&(y?(h(I),I=-1):y=!0,J(S,M-w))):(x.sortIndex=R,t(l,x),E||g||(E=!0,X(T))),x},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(x){var F=m;return function(){var M=m;m=F;try{return x.apply(this,arguments)}finally{m=M}}}})(kS);(function(e){e.exports=kS})(TS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AS=pt.exports,at=TS.exports;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var IS=new Set,oa={};function Un(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(oa[e]=t,e=0;e<t.length;e++)IS.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dp=Object.prototype.hasOwnProperty,RA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qm={},eh={};function TA(e){return dp.call(eh,e)?!0:dp.call(Qm,e)?!1:RA.test(e)?eh[e]=!0:(Qm[e]=!0,!1)}function kA(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function AA(e,t,n,r){if(t===null||typeof t>"u"||kA(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var wf=/[\-:]([a-z])/g;function Sf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wf,Sf);Le[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wf,Sf);Le[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wf,Sf);Le[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rf(e,t,n,r){var a=Le.hasOwnProperty(t)?Le[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(AA(t,n,a,r)&&(n=null),r||a===null?TA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=AS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),pp=Symbol.for("react.profiler"),CS=Symbol.for("react.provider"),_S=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),fp=Symbol.for("react.suspense"),mp=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),xS=Symbol.for("react.offscreen"),th=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,ki;function jr(e){if(ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ki=t&&t[1]||""}return`
`+ki+e}var Ai=!1;function Ii(e,t){if(!e||Ai)return"";Ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,s=o.length-1;1<=i&&0<=s&&a[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==o[s]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{Ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function IA(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=Ii(e.type,!1),e;case 11:return e=Ii(e.type.render,!1),e;case 1:return e=Ii(e.type,!0),e;default:return""}}function hp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Yn:return"Portal";case pp:return"Profiler";case Tf:return"StrictMode";case fp:return"Suspense";case mp:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _S:return(e.displayName||"Context")+".Consumer";case CS:return(e._context.displayName||"Context")+".Provider";case kf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Af:return t=e.displayName||null,t!==null?t:hp(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return hp(e(t))}catch{}}return null}function CA(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hp(t);case 8:return t===Tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function NS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _A(e){var t=NS(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function La(e){e._valueTracker||(e._valueTracker=_A(e))}function OS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=NS(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gp(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function nh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function LS(e,t){t=t.checked,t!=null&&Rf(e,"checked",t,!1)}function bp(e,t){LS(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yp(e,t.type,n):t.hasOwnProperty("defaultValue")&&yp(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yp(e,t,n){(t!=="number"||yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function vp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ah(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if($r(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function DS(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function oh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function MS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ep(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?MS(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Da,FS=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ia(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xA=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){xA.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function PS(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function US(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=PS(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var NA=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wp(e,t){if(t){if(NA[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Sp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rp=null;function If(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tp=null,lr=null,ur=null;function ih(e){if(e=ka(e)){if(typeof Tp!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Wo(t),Tp(e.stateNode,e.type,t))}}function BS(e){lr?ur?ur.push(e):ur=[e]:lr=e}function qS(){if(lr){var e=lr,t=ur;if(ur=lr=null,ih(e),t)for(e=0;e<t.length;e++)ih(t[e])}}function jS(e,t){return e(t)}function $S(){}var Ci=!1;function zS(e,t,n){if(Ci)return e(t,n);Ci=!0;try{return jS(e,t,n)}finally{Ci=!1,(lr!==null||ur!==null)&&($S(),qS())}}function sa(e,t){var n=e.stateNode;if(n===null)return null;var r=Wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var kp=!1;if(Yt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){kp=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{kp=!1}function OA(e,t,n,r,a,o,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Yr=!1,vo=null,Eo=!1,Ap=null,LA={onError:function(e){Yr=!0,vo=e}};function DA(e,t,n,r,a,o,i,s,l){Yr=!1,vo=null,OA.apply(LA,arguments)}function MA(e,t,n,r,a,o,i,s,l){if(DA.apply(this,arguments),Yr){if(Yr){var u=vo;Yr=!1,vo=null}else throw Error(L(198));Eo||(Eo=!0,Ap=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function HS(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sh(e){if(Bn(e)!==e)throw Error(L(188))}function FA(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return sh(a),e;if(o===r)return sh(a),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=a,r=o;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function GS(e){return e=FA(e),e!==null?WS(e):null}function WS(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=WS(e);if(t!==null)return t;e=e.sibling}return null}var VS=at.unstable_scheduleCallback,lh=at.unstable_cancelCallback,PA=at.unstable_shouldYield,UA=at.unstable_requestPaint,Ee=at.unstable_now,BA=at.unstable_getCurrentPriorityLevel,Cf=at.unstable_ImmediatePriority,YS=at.unstable_UserBlockingPriority,wo=at.unstable_NormalPriority,qA=at.unstable_LowPriority,KS=at.unstable_IdlePriority,$o=null,Ft=null;function jA(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot($o,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:HA,$A=Math.log,zA=Math.LN2;function HA(e){return e>>>=0,e===0?32:31-($A(e)/zA|0)|0}var Ma=64,Fa=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~a;s!==0?r=zr(s):(o&=i,o!==0&&(r=zr(o)))}else i=n&~a,i!==0?r=zr(i):o!==0&&(r=zr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),a=1<<n,r|=e[n],t&=~a;return r}function GA(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WA(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-At(o),s=1<<i,l=a[i];l===-1?((s&n)===0||(s&r)!==0)&&(a[i]=GA(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Ip(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function XS(){var e=Ma;return Ma<<=1,(Ma&4194240)===0&&(Ma=64),e}function _i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ra(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function VA(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-At(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function _f(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var te=0;function ZS(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var JS,xf,QS,eR,tR,Cp=!1,Pa=[],ln=null,un=null,cn=null,la=new Map,ua=new Map,rn=[],YA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":la.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(t.pointerId)}}function Lr(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=ka(t),t!==null&&xf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function KA(e,t,n,r,a){switch(t){case"focusin":return ln=Lr(ln,e,t,n,r,a),!0;case"dragenter":return un=Lr(un,e,t,n,r,a),!0;case"mouseover":return cn=Lr(cn,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return la.set(o,Lr(la.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,ua.set(o,Lr(ua.get(o)||null,e,t,n,r,a)),!0}return!1}function nR(e){var t=In(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=HS(n),t!==null){e.blockedOn=t,tR(e.priority,function(){QS(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_p(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rp=r,n.target.dispatchEvent(r),Rp=null}else return t=ka(n),t!==null&&xf(t),e.blockedOn=n,!1;t.shift()}return!0}function ch(e,t,n){no(e)&&n.delete(t)}function XA(){Cp=!1,ln!==null&&no(ln)&&(ln=null),un!==null&&no(un)&&(un=null),cn!==null&&no(cn)&&(cn=null),la.forEach(ch),ua.forEach(ch)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cp||(Cp=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,XA)))}function ca(e){function t(a){return Dr(a,e)}if(0<Pa.length){Dr(Pa[0],e);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Dr(ln,e),un!==null&&Dr(un,e),cn!==null&&Dr(cn,e),la.forEach(t),ua.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)nR(n),n.blockedOn===null&&rn.shift()}var cr=Jt.ReactCurrentBatchConfig,Ro=!0;function ZA(e,t,n,r){var a=te,o=cr.transition;cr.transition=null;try{te=1,Nf(e,t,n,r)}finally{te=a,cr.transition=o}}function JA(e,t,n,r){var a=te,o=cr.transition;cr.transition=null;try{te=4,Nf(e,t,n,r)}finally{te=a,cr.transition=o}}function Nf(e,t,n,r){if(Ro){var a=_p(e,t,n,r);if(a===null)Bi(e,t,r,To,n),uh(e,r);else if(KA(a,e,t,n,r))r.stopPropagation();else if(uh(e,r),t&4&&-1<YA.indexOf(e)){for(;a!==null;){var o=ka(a);if(o!==null&&JS(o),o=_p(e,t,n,r),o===null&&Bi(e,t,r,To,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var To=null;function _p(e,t,n,r){if(To=null,e=If(r),e=In(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=HS(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return To=e,null}function rR(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BA()){case Cf:return 1;case YS:return 4;case wo:case qA:return 16;case KS:return 536870912;default:return 16}default:return 16}}var on=null,Of=null,ro=null;function aR(){if(ro)return ro;var e,t=Of,n=t.length,r,a="value"in on?on.value:on.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===a[o-r];r++);return ro=a.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ua(){return!0}function dh(){return!1}function it(e){function t(n,r,a,o,i){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ua:dh,this.isPropagationStopped=dh,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=it(Tr),Ta=ge({},Tr,{view:0,detail:0}),QA=it(Ta),xi,Ni,Mr,zo=ge({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(xi=e.screenX-Mr.screenX,Ni=e.screenY-Mr.screenY):Ni=xi=0,Mr=e),xi)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),ph=it(zo),eI=ge({},zo,{dataTransfer:0}),tI=it(eI),nI=ge({},Ta,{relatedTarget:0}),Oi=it(nI),rI=ge({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),aI=it(rI),oI=ge({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iI=it(oI),sI=ge({},Tr,{data:0}),fh=it(sI),lI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dI(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cI[e])?!!t[e]:!1}function Df(){return dI}var pI=ge({},Ta,{key:function(e){if(e.key){var t=lI[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uI[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fI=it(pI),mI=ge({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=it(mI),hI=ge({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),gI=it(hI),bI=ge({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yI=it(bI),vI=ge({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),EI=it(vI),wI=[9,13,27,32],Mf=Yt&&"CompositionEvent"in window,Kr=null;Yt&&"documentMode"in document&&(Kr=document.documentMode);var SI=Yt&&"TextEvent"in window&&!Kr,oR=Yt&&(!Mf||Kr&&8<Kr&&11>=Kr),hh=String.fromCharCode(32),gh=!1;function iR(e,t){switch(e){case"keyup":return wI.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sR(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function RI(e,t){switch(e){case"compositionend":return sR(t);case"keypress":return t.which!==32?null:(gh=!0,hh);case"textInput":return e=t.data,e===hh&&gh?null:e;default:return null}}function TI(e,t){if(Xn)return e==="compositionend"||!Mf&&iR(e,t)?(e=aR(),ro=Of=on=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oR&&t.locale!=="ko"?null:t.data;default:return null}}var kI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kI[e.type]:t==="textarea"}function lR(e,t,n,r){BS(r),t=ko(t,"onChange"),0<t.length&&(n=new Lf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,da=null;function AI(e){vR(e,0)}function Ho(e){var t=Qn(e);if(OS(t))return e}function II(e,t){if(e==="change")return t}var uR=!1;if(Yt){var Li;if(Yt){var Di="oninput"in document;if(!Di){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),Di=typeof yh.oninput=="function"}Li=Di}else Li=!1;uR=Li&&(!document.documentMode||9<document.documentMode)}function vh(){Xr&&(Xr.detachEvent("onpropertychange",cR),da=Xr=null)}function cR(e){if(e.propertyName==="value"&&Ho(da)){var t=[];lR(t,da,e,If(e)),zS(AI,t)}}function CI(e,t,n){e==="focusin"?(vh(),Xr=t,da=n,Xr.attachEvent("onpropertychange",cR)):e==="focusout"&&vh()}function _I(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ho(da)}function xI(e,t){if(e==="click")return Ho(t)}function NI(e,t){if(e==="input"||e==="change")return Ho(t)}function OI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:OI;function pa(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!dp.call(t,a)||!Ct(e[a],t[a]))return!1}return!0}function Eh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wh(e,t){var n=Eh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eh(n)}}function dR(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dR(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pR(){for(var e=window,t=yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yo(e.document)}return t}function Ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function LI(e){var t=pR(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dR(n.ownerDocument.documentElement,n)){if(r!==null&&Ff(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=wh(n,o);var i=wh(n,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var DI=Yt&&"documentMode"in document&&11>=document.documentMode,Zn=null,xp=null,Zr=null,Np=!1;function Sh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Np||Zn==null||Zn!==yo(r)||(r=Zn,"selectionStart"in r&&Ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&pa(Zr,r)||(Zr=r,r=ko(xp,"onSelect"),0<r.length&&(t=new Lf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function Ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},Mi={},fR={};Yt&&(fR=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Go(e){if(Mi[e])return Mi[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fR)return Mi[e]=t[n];return e}var mR=Go("animationend"),hR=Go("animationiteration"),gR=Go("animationstart"),bR=Go("transitionend"),yR=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){yR.set(e,t),Un(t,[e])}for(var Fi=0;Fi<Rh.length;Fi++){var Pi=Rh[Fi],MI=Pi.toLowerCase(),FI=Pi[0].toUpperCase()+Pi.slice(1);yn(MI,"on"+FI)}yn(mR,"onAnimationEnd");yn(hR,"onAnimationIteration");yn(gR,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(bR,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function Th(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,MA(r,t,void 0,e),e.currentTarget=null}function vR(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&a.isPropagationStopped())break e;Th(a,s,u),o=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&a.isPropagationStopped())break e;Th(a,s,u),o=l}}}if(Eo)throw e=Ap,Eo=!1,Ap=null,e}function ue(e,t){var n=t[Fp];n===void 0&&(n=t[Fp]=new Set);var r=e+"__bubble";n.has(r)||(ER(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),ER(n,e,r,t)}var qa="_reactListening"+Math.random().toString(36).slice(2);function fa(e){if(!e[qa]){e[qa]=!0,IS.forEach(function(n){n!=="selectionchange"&&(PI.has(n)||Ui(n,!1,e),Ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qa]||(t[qa]=!0,Ui("selectionchange",!1,t))}}function ER(e,t,n,r){switch(rR(t)){case 1:var a=ZA;break;case 4:a=JA;break;default:a=Nf}n=a.bind(null,t,n,e),a=void 0,!kp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,a){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;s!==null;){if(i=In(s),i===null)return;if(l=i.tag,l===5||l===6){r=o=i;continue e}s=s.parentNode}}r=r.return}zS(function(){var u=o,c=If(n),d=[];e:{var m=yR.get(e);if(m!==void 0){var g=Lf,E=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":g=fI;break;case"focusin":E="focus",g=Oi;break;case"focusout":E="blur",g=Oi;break;case"beforeblur":case"afterblur":g=Oi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gI;break;case mR:case hR:case gR:g=aI;break;case bR:g=yI;break;case"scroll":g=QA;break;case"wheel":g=EI;break;case"copy":case"cut":case"paste":g=iI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mh}var y=(t&4)!==0,A=!y&&e==="scroll",h=y?m!==null?m+"Capture":null:m;y=[];for(var f=u,p;f!==null;){p=f;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,h!==null&&(S=sa(f,h),S!=null&&y.push(ma(f,S,p)))),A)break;f=f.return}0<y.length&&(m=new g(m,E,null,n,c),d.push({event:m,listeners:y}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Rp&&(E=n.relatedTarget||n.fromElement)&&(In(E)||E[Kt]))break e;if((g||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,g?(E=n.relatedTarget||n.toElement,g=u,E=E?In(E):null,E!==null&&(A=Bn(E),E!==A||E.tag!==5&&E.tag!==6)&&(E=null)):(g=null,E=u),g!==E)){if(y=ph,S="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=mh,S="onPointerLeave",h="onPointerEnter",f="pointer"),A=g==null?m:Qn(g),p=E==null?m:Qn(E),m=new y(S,f+"leave",g,n,c),m.target=A,m.relatedTarget=p,S=null,In(c)===u&&(y=new y(h,f+"enter",E,n,c),y.target=p,y.relatedTarget=A,S=y),A=S,g&&E)t:{for(y=g,h=E,f=0,p=y;p;p=Gn(p))f++;for(p=0,S=h;S;S=Gn(S))p++;for(;0<f-p;)y=Gn(y),f--;for(;0<p-f;)h=Gn(h),p--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=Gn(y),h=Gn(h)}y=null}else y=null;g!==null&&kh(d,m,g,y,!1),E!==null&&A!==null&&kh(d,A,E,y,!0)}}e:{if(m=u?Qn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var T=II;else if(bh(m))if(uR)T=NI;else{T=_I;var b=CI}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=xI);if(T&&(T=T(e,u))){lR(d,T,n,c);break e}b&&b(e,m,u),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&yp(m,"number",m.value)}switch(b=u?Qn(u):window,e){case"focusin":(bh(b)||b.contentEditable==="true")&&(Zn=b,xp=u,Zr=null);break;case"focusout":Zr=xp=Zn=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,Sh(d,n,c);break;case"selectionchange":if(DI)break;case"keydown":case"keyup":Sh(d,n,c)}var k;if(Mf)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Xn?iR(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(oR&&n.locale!=="ko"&&(Xn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Xn&&(k=aR()):(on=c,Of="value"in on?on.value:on.textContent,Xn=!0)),b=ko(u,I),0<b.length&&(I=new fh(I,e,null,n,c),d.push({event:I,listeners:b}),k?I.data=k:(k=sR(n),k!==null&&(I.data=k)))),(k=SI?RI(e,n):TI(e,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(c=new fh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}vR(d,t)})}function ma(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=sa(e,n),o!=null&&r.unshift(ma(e,o,a)),o=sa(e,t),o!=null&&r.push(ma(e,o,a))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kh(e,t,n,r,a){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,a?(l=sa(n,o),l!=null&&i.unshift(ma(n,l,s))):a||(l=sa(n,o),l!=null&&i.push(ma(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var UI=/\r\n?/g,BI=/\u0000|\uFFFD/g;function Ah(e){return(typeof e=="string"?e:""+e).replace(UI,`
`).replace(BI,"")}function ja(e,t,n){if(t=Ah(t),Ah(e)!==t&&n)throw Error(L(425))}function Ao(){}var Op=null,Lp=null;function Dp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mp=typeof setTimeout=="function"?setTimeout:void 0,qI=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,jI=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(e){return Ih.resolve(null).then(e).catch($I)}:Mp;function $I(e){setTimeout(function(){throw e})}function qi(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),ca(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);ca(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+kr,ha="__reactProps$"+kr,Kt="__reactContainer$"+kr,Fp="__reactEvents$"+kr,zI="__reactListeners$"+kr,HI="__reactHandles$"+kr;function In(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ch(e);e!==null;){if(n=e[Dt])return n;e=Ch(e)}return t}e=n,n=e.parentNode}return null}function ka(e){return e=e[Dt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Wo(e){return e[ha]||null}var Pp=[],er=-1;function vn(e){return{current:e}}function de(e){0>er||(e.current=Pp[er],Pp[er]=null,er--)}function ie(e,t){er++,Pp[er]=e.current,e.current=t}var bn={},Pe=vn(bn),Ke=vn(!1),On=bn;function br(e,t){var n=e.type.contextTypes;if(!n)return bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Xe(e){return e=e.childContextTypes,e!=null}function Io(){de(Ke),de(Pe)}function _h(e,t,n){if(Pe.current!==bn)throw Error(L(168));ie(Pe,t),ie(Ke,n)}function wR(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(L(108,CA(e)||"Unknown",a));return ge({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,On=Pe.current,ie(Pe,e),ie(Ke,Ke.current),!0}function xh(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=wR(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,de(Ke),de(Pe),ie(Pe,e)):de(Ke),ie(Ke,n)}var zt=null,Vo=!1,ji=!1;function SR(e){zt===null?zt=[e]:zt.push(e)}function GI(e){Vo=!0,SR(e)}function En(){if(!ji&&zt!==null){ji=!0;var e=0,t=te;try{var n=zt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Vo=!1}catch(a){throw zt!==null&&(zt=zt.slice(e+1)),VS(Cf,En),a}finally{te=t,ji=!1}}return null}var tr=[],nr=0,_o=null,xo=0,ut=[],ct=0,Ln=null,Ht=1,Gt="";function Tn(e,t){tr[nr++]=xo,tr[nr++]=_o,_o=e,xo=t}function RR(e,t,n){ut[ct++]=Ht,ut[ct++]=Gt,ut[ct++]=Ln,Ln=e;var r=Ht;e=Gt;var a=32-At(r)-1;r&=~(1<<a),n+=1;var o=32-At(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ht=1<<32-At(t)+a|n<<a|r,Gt=o+e}else Ht=1<<o|n<<a|r,Gt=e}function Pf(e){e.return!==null&&(Tn(e,1),RR(e,1,0))}function Uf(e){for(;e===_o;)_o=tr[--nr],tr[nr]=null,xo=tr[--nr],tr[nr]=null;for(;e===Ln;)Ln=ut[--ct],ut[ct]=null,Gt=ut[--ct],ut[ct]=null,Ht=ut[--ct],ut[ct]=null}var rt=null,tt=null,fe=!1,kt=null;function TR(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,tt=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Ht,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,tt=null,!0):!1;default:return!1}}function Up(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bp(e){if(fe){var t=tt;if(t){var n=t;if(!Nh(e,t)){if(Up(e))throw Error(L(418));t=dn(n.nextSibling);var r=rt;t&&Nh(e,t)?TR(r,n):(e.flags=e.flags&-4097|2,fe=!1,rt=e)}}else{if(Up(e))throw Error(L(418));e.flags=e.flags&-4097|2,fe=!1,rt=e}}}function Oh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function $a(e){if(e!==rt)return!1;if(!fe)return Oh(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dp(e.type,e.memoizedProps)),t&&(t=tt)){if(Up(e))throw kR(),Error(L(418));for(;t;)TR(e,t),t=dn(t.nextSibling)}if(Oh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=rt?dn(e.stateNode.nextSibling):null;return!0}function kR(){for(var e=tt;e;)e=dn(e.nextSibling)}function yr(){tt=rt=null,fe=!1}function Bf(e){kt===null?kt=[e]:kt.push(e)}var WI=Jt.ReactCurrentBatchConfig;function Rt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var No=vn(null),Oo=null,rr=null,qf=null;function jf(){qf=rr=Oo=null}function $f(e){var t=No.current;de(No),e._currentValue=t}function qp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){Oo=e,qf=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ye=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(qf!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(Oo===null)throw Error(L(308));rr=e,Oo.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var Cn=null;function zf(e){Cn===null?Cn=[e]:Cn.push(e)}function AR(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,zf(t)):(n.next=a.next,a.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function Hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function IR(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Xt(e,n)}return a=r.interleaved,a===null?(t.next=t,zf(r)):(t.next=a.next,a.next=t),r.interleaved=t,Xt(e,n)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_f(e,n)}}function Lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lo(e,t,n,r){var a=e.updateQueue;nn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=a.baseState;i=0,c=u=l=null,s=o;do{var m=s.lane,g=s.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,y=s;switch(m=t,g=n,y.tag){case 1:if(E=y.payload,typeof E=="function"){d=E.call(g,d,m);break e}d=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=y.payload,m=typeof E=="function"?E.call(g,d,m):E,m==null)break e;d=ge({},d,m);break e;case 2:nn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,i|=m;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(c===null&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Mn|=i,e.lanes=i,e.memoizedState=d}}function Dh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(L(191,a));a.call(r)}}}var CR=new AS.Component().refs;function jp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),a=mn(e),o=Vt(r,a);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,a),t!==null&&(It(t,e,a,r),oo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),a=mn(e),o=Vt(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,a),t!==null&&(It(t,e,a,r),oo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=mn(e),a=Vt(n,r);a.tag=2,t!=null&&(a.callback=t),t=pn(e,a,r),t!==null&&(It(t,e,r,n),oo(t,e,r))}};function Mh(e,t,n,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!pa(n,r)||!pa(a,o):!0}function _R(e,t,n){var r=!1,a=bn,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(a=Xe(t)?On:Pe.current,r=t.contextTypes,o=(r=r!=null)?br(e,a):bn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function $p(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=CR,Hf(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=gt(o):(o=Xe(t)?On:Pe.current,a.context=br(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(jp(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Yo.enqueueReplaceState(a,a.state,null),Lo(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=a.refs;s===CR&&(s=a.refs={}),i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function za(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ph(e){var t=e._init;return t(e._payload)}function xR(e){function t(h,f){if(e){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function a(h,f){return h=hn(h,f),h.index=0,h.sibling=null,h}function o(h,f,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=2,f):p):(h.flags|=2,f)):(h.flags|=1048576,f)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,p,S){return f===null||f.tag!==6?(f=Yi(p,h.mode,S),f.return=h,f):(f=a(f,p),f.return=h,f)}function l(h,f,p,S){var T=p.type;return T===Kn?c(h,f,p.props.children,S,p.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tn&&Ph(T)===f.type)?(S=a(f,p.props),S.ref=Fr(h,f,p),S.return=h,S):(S=po(p.type,p.key,p.props,null,h.mode,S),S.ref=Fr(h,f,p),S.return=h,S)}function u(h,f,p,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Ki(p,h.mode,S),f.return=h,f):(f=a(f,p.children||[]),f.return=h,f)}function c(h,f,p,S,T){return f===null||f.tag!==7?(f=Nn(p,h.mode,S,T),f.return=h,f):(f=a(f,p),f.return=h,f)}function d(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Yi(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Oa:return p=po(f.type,f.key,f.props,null,h.mode,p),p.ref=Fr(h,null,f),p.return=h,p;case Yn:return f=Ki(f,h.mode,p),f.return=h,f;case tn:var S=f._init;return d(h,S(f._payload),p)}if($r(f)||Nr(f))return f=Nn(f,h.mode,p,null),f.return=h,f;za(h,f)}return null}function m(h,f,p,S){var T=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return T!==null?null:s(h,f,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oa:return p.key===T?l(h,f,p,S):null;case Yn:return p.key===T?u(h,f,p,S):null;case tn:return T=p._init,m(h,f,T(p._payload),S)}if($r(p)||Nr(p))return T!==null?null:c(h,f,p,S,null);za(h,p)}return null}function g(h,f,p,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(p)||null,s(f,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Oa:return h=h.get(S.key===null?p:S.key)||null,l(f,h,S,T);case Yn:return h=h.get(S.key===null?p:S.key)||null,u(f,h,S,T);case tn:var b=S._init;return g(h,f,p,b(S._payload),T)}if($r(S)||Nr(S))return h=h.get(p)||null,c(f,h,S,T,null);za(f,S)}return null}function E(h,f,p,S){for(var T=null,b=null,k=f,I=f=0,C=null;k!==null&&I<p.length;I++){k.index>I?(C=k,k=null):C=k.sibling;var O=m(h,k,p[I],S);if(O===null){k===null&&(k=C);break}e&&k&&O.alternate===null&&t(h,k),f=o(O,f,I),b===null?T=O:b.sibling=O,b=O,k=C}if(I===p.length)return n(h,k),fe&&Tn(h,I),T;if(k===null){for(;I<p.length;I++)k=d(h,p[I],S),k!==null&&(f=o(k,f,I),b===null?T=k:b.sibling=k,b=k);return fe&&Tn(h,I),T}for(k=r(h,k);I<p.length;I++)C=g(k,h,I,p[I],S),C!==null&&(e&&C.alternate!==null&&k.delete(C.key===null?I:C.key),f=o(C,f,I),b===null?T=C:b.sibling=C,b=C);return e&&k.forEach(function(N){return t(h,N)}),fe&&Tn(h,I),T}function y(h,f,p,S){var T=Nr(p);if(typeof T!="function")throw Error(L(150));if(p=T.call(p),p==null)throw Error(L(151));for(var b=T=null,k=f,I=f=0,C=null,O=p.next();k!==null&&!O.done;I++,O=p.next()){k.index>I?(C=k,k=null):C=k.sibling;var N=m(h,k,O.value,S);if(N===null){k===null&&(k=C);break}e&&k&&N.alternate===null&&t(h,k),f=o(N,f,I),b===null?T=N:b.sibling=N,b=N,k=C}if(O.done)return n(h,k),fe&&Tn(h,I),T;if(k===null){for(;!O.done;I++,O=p.next())O=d(h,O.value,S),O!==null&&(f=o(O,f,I),b===null?T=O:b.sibling=O,b=O);return fe&&Tn(h,I),T}for(k=r(h,k);!O.done;I++,O=p.next())O=g(k,h,I,O.value,S),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?I:O.key),f=o(O,f,I),b===null?T=O:b.sibling=O,b=O);return e&&k.forEach(function(P){return t(h,P)}),fe&&Tn(h,I),T}function A(h,f,p,S){if(typeof p=="object"&&p!==null&&p.type===Kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Oa:e:{for(var T=p.key,b=f;b!==null;){if(b.key===T){if(T=p.type,T===Kn){if(b.tag===7){n(h,b.sibling),f=a(b,p.props.children),f.return=h,h=f;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tn&&Ph(T)===b.type){n(h,b.sibling),f=a(b,p.props),f.ref=Fr(h,b,p),f.return=h,h=f;break e}n(h,b);break}else t(h,b);b=b.sibling}p.type===Kn?(f=Nn(p.props.children,h.mode,S,p.key),f.return=h,h=f):(S=po(p.type,p.key,p.props,null,h.mode,S),S.ref=Fr(h,f,p),S.return=h,h=S)}return i(h);case Yn:e:{for(b=p.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(h,f.sibling),f=a(f,p.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Ki(p,h.mode,S),f.return=h,h=f}return i(h);case tn:return b=p._init,A(h,f,b(p._payload),S)}if($r(p))return E(h,f,p,S);if(Nr(p))return y(h,f,p,S);za(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(h,f.sibling),f=a(f,p),f.return=h,h=f):(n(h,f),f=Yi(p,h.mode,S),f.return=h,h=f),i(h)):n(h,f)}return A}var vr=xR(!0),NR=xR(!1),Aa={},Pt=vn(Aa),ga=vn(Aa),ba=vn(Aa);function _n(e){if(e===Aa)throw Error(L(174));return e}function Gf(e,t){switch(ie(ba,t),ie(ga,e),ie(Pt,Aa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ep(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ep(t,e)}de(Pt),ie(Pt,t)}function Er(){de(Pt),de(ga),de(ba)}function OR(e){_n(ba.current);var t=_n(Pt.current),n=Ep(t,e.type);t!==n&&(ie(ga,e),ie(Pt,n))}function Wf(e){ga.current===e&&(de(Pt),de(ga))}var me=vn(0);function Do(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function Vf(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var io=Jt.ReactCurrentDispatcher,zi=Jt.ReactCurrentBatchConfig,Dn=0,he=null,ke=null,Ce=null,Mo=!1,Jr=!1,ya=0,VI=0;function De(){throw Error(L(321))}function Yf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Kf(e,t,n,r,a,o){if(Dn=o,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=e===null||e.memoizedState===null?ZI:JI,e=n(r,a),Jr){o=0;do{if(Jr=!1,ya=0,25<=o)throw Error(L(301));o+=1,Ce=ke=null,t.updateQueue=null,io.current=QI,e=n(r,a)}while(Jr)}if(io.current=Fo,t=ke!==null&&ke.next!==null,Dn=0,Ce=ke=he=null,Mo=!1,t)throw Error(L(300));return e}function Xf(){var e=ya!==0;return ya=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?he.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function bt(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ce===null?he.memoizedState:Ce.next;if(t!==null)Ce=t,ke=e;else{if(e===null)throw Error(L(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ce===null?he.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function va(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=bt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=ke,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var s=i=null,l=null,u=o;do{var c=u.lane;if((Dn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,he.lanes|=c,Mn|=c}u=u.next}while(u!==null&&u!==o);l===null?i=r:l.next=s,Ct(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,he.lanes|=o,Mn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gi(e){var t=bt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Ct(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function LR(){}function DR(e,t){var n=he,r=bt(),a=t(),o=!Ct(r.memoizedState,a);if(o&&(r.memoizedState=a,Ye=!0),r=r.queue,Zf(PR.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Ea(9,FR.bind(null,n,r,a,t),void 0,null),_e===null)throw Error(L(349));(Dn&30)!==0||MR(n,t,a)}return a}function MR(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function FR(e,t,n,r){t.value=n,t.getSnapshot=r,UR(t)&&BR(e)}function PR(e,t,n){return n(function(){UR(t)&&BR(e)})}function UR(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function BR(e){var t=Xt(e,1);t!==null&&It(t,e,1,-1)}function Uh(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},t.queue=e,e=e.dispatch=XI.bind(null,he,e),[t.memoizedState,e]}function Ea(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qR(){return bt().memoizedState}function so(e,t,n,r){var a=Nt();he.flags|=e,a.memoizedState=Ea(1|t,n,void 0,r===void 0?null:r)}function Ko(e,t,n,r){var a=bt();r=r===void 0?null:r;var o=void 0;if(ke!==null){var i=ke.memoizedState;if(o=i.destroy,r!==null&&Yf(r,i.deps)){a.memoizedState=Ea(t,n,o,r);return}}he.flags|=e,a.memoizedState=Ea(1|t,n,o,r)}function Bh(e,t){return so(8390656,8,e,t)}function Zf(e,t){return Ko(2048,8,e,t)}function jR(e,t){return Ko(4,2,e,t)}function $R(e,t){return Ko(4,4,e,t)}function zR(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function HR(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4,4,zR.bind(null,t,e),n)}function Jf(){}function GR(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function WR(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function VR(e,t,n){return(Dn&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n):(Ct(n,t)||(n=XS(),he.lanes|=n,Mn|=n,e.baseState=!0),t)}function YI(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=zi.transition;zi.transition={};try{e(!1),t()}finally{te=n,zi.transition=r}}function YR(){return bt().memoizedState}function KI(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},KR(e))XR(t,n);else if(n=AR(e,t,n,r),n!==null){var a=$e();It(n,e,r,a),ZR(n,t,r)}}function XI(e,t,n){var r=mn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(KR(e))XR(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(a.hasEagerState=!0,a.eagerState=s,Ct(s,i)){var l=t.interleaved;l===null?(a.next=a,zf(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=AR(e,t,a,r),n!==null&&(a=$e(),It(n,e,r,a),ZR(n,t,r))}}function KR(e){var t=e.alternate;return e===he||t!==null&&t===he}function XR(e,t){Jr=Mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ZR(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_f(e,n)}}var Fo={readContext:gt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},ZI={readContext:gt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Bh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,so(4194308,4,zR.bind(null,t,e),n)},useLayoutEffect:function(e,t){return so(4194308,4,e,t)},useInsertionEffect:function(e,t){return so(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=KI.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Uh,useDebugValue:Jf,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Uh(!1),t=e[0];return e=YI.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,a=Nt();if(fe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),_e===null)throw Error(L(349));(Dn&30)!==0||MR(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Bh(PR.bind(null,r,o,e),[e]),r.flags|=2048,Ea(9,FR.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Nt(),t=_e.identifierPrefix;if(fe){var n=Gt,r=Ht;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ya++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=VI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},JI={readContext:gt,useCallback:GR,useContext:gt,useEffect:Zf,useImperativeHandle:HR,useInsertionEffect:jR,useLayoutEffect:$R,useMemo:WR,useReducer:Hi,useRef:qR,useState:function(){return Hi(va)},useDebugValue:Jf,useDeferredValue:function(e){var t=bt();return VR(t,ke.memoizedState,e)},useTransition:function(){var e=Hi(va)[0],t=bt().memoizedState;return[e,t]},useMutableSource:LR,useSyncExternalStore:DR,useId:YR,unstable_isNewReconciler:!1},QI={readContext:gt,useCallback:GR,useContext:gt,useEffect:Zf,useImperativeHandle:HR,useInsertionEffect:jR,useLayoutEffect:$R,useMemo:WR,useReducer:Gi,useRef:qR,useState:function(){return Gi(va)},useDebugValue:Jf,useDeferredValue:function(e){var t=bt();return ke===null?t.memoizedState=e:VR(t,ke.memoizedState,e)},useTransition:function(){var e=Gi(va)[0],t=bt().memoizedState;return[e,t]},useMutableSource:LR,useSyncExternalStore:DR,useId:YR,unstable_isNewReconciler:!1};function wr(e,t){try{var n="",r=t;do n+=IA(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Wi(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function zp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var eC=typeof WeakMap=="function"?WeakMap:Map;function JR(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Uo||(Uo=!0,Qp=r),zp(e,t)},n}function QR(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){zp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zp(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function qh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new eC;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=mC.bind(null,e,t,n),t.then(e,e))}function jh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $h(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var tC=Jt.ReactCurrentOwner,Ye=!1;function je(e,t,n,r){t.child=e===null?NR(t,null,n,r):vr(t,e.child,n,r)}function zh(e,t,n,r,a){n=n.render;var o=t.ref;return dr(t,a),r=Kf(e,t,n,r,o,a),n=Xf(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Zt(e,t,a)):(fe&&n&&Pf(t),t.flags|=1,je(e,t,r,a),t.child)}function Hh(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!im(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,eT(e,t,o,r,a)):(e=po(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(i,r)&&e.ref===t.ref)return Zt(e,t,a)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function eT(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(pa(o,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Zt(e,t,a)}return Hp(e,t,n,r,a)}function tT(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(or,et),et|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(or,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ie(or,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ie(or,et),et|=r;return je(e,t,a,n),t.child}function nT(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hp(e,t,n,r,a){var o=Xe(n)?On:Pe.current;return o=br(t,o),dr(t,a),n=Kf(e,t,n,r,o,a),r=Xf(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Zt(e,t,a)):(fe&&r&&Pf(t),t.flags|=1,je(e,t,n,a),t.child)}function Gh(e,t,n,r,a){if(Xe(n)){var o=!0;Co(t)}else o=!1;if(dr(t,a),t.stateNode===null)lo(e,t),_R(t,n,r),$p(t,n,r,a),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=Xe(n)?On:Pe.current,u=br(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Fh(t,i,r,u),nn=!1;var m=t.memoizedState;i.state=m,Lo(t,r,i,a),l=t.memoizedState,s!==r||m!==l||Ke.current||nn?(typeof c=="function"&&(jp(t,n,c,r),l=t.memoizedState),(s=nn||Mh(t,n,s,r,m,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,IR(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Rt(t.type,s),i.props=u,d=t.pendingProps,m=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=gt(l):(l=Xe(n)?On:Pe.current,l=br(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||m!==l)&&Fh(t,i,r,l),nn=!1,m=t.memoizedState,i.state=m,Lo(t,r,i,a);var E=t.memoizedState;s!==d||m!==E||Ke.current||nn?(typeof g=="function"&&(jp(t,n,g,r),E=t.memoizedState),(u=nn||Mh(t,n,u,r,m,E,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,E,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,E,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),i.props=r,i.state=E,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Gp(e,t,n,r,o,a)}function Gp(e,t,n,r,a,o){nT(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return a&&xh(t,n,!1),Zt(e,t,o);r=t.stateNode,tC.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=vr(t,e.child,null,o),t.child=vr(t,null,s,o)):je(e,t,s,o),t.memoizedState=r.state,a&&xh(t,n,!0),t.child}function rT(e){var t=e.stateNode;t.pendingContext?_h(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_h(e,t.context,!1),Gf(e,t.containerInfo)}function Wh(e,t,n,r,a){return yr(),Bf(a),t.flags|=256,je(e,t,n,r),t.child}var Wp={dehydrated:null,treeContext:null,retryLane:0};function Vp(e){return{baseLanes:e,cachePool:null,transitions:null}}function aT(e,t,n){var r=t.pendingProps,a=me.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ie(me,a&1),e===null)return Bp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Jo(i,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vp(n),t.memoizedState=Wp,e):Qf(t,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return nC(e,t,i,r,s,a,n);if(o){o=r.fallback,i=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hn(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?o=hn(s,o):(o=Nn(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Vp(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Wp,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qf(e,t){return t=Jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ha(e,t,n,r){return r!==null&&Bf(r),vr(t,e.child,null,n),e=Qf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nC(e,t,n,r,a,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Wi(Error(L(422))),Ha(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Jo({mode:"visible",children:r.children},a,0,null),o=Nn(o,a,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&vr(t,e.child,null,i),t.child.memoizedState=Vp(i),t.memoizedState=Wp,o);if((t.mode&1)===0)return Ha(e,t,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(L(419)),r=Wi(o,r,void 0),Ha(e,t,i,r)}if(s=(i&e.childLanes)!==0,Ye||s){if(r=_e,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|i))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Xt(e,a),It(r,e,a,-1))}return om(),r=Wi(Error(L(421))),Ha(e,t,i,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=hC.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,tt=dn(a.nextSibling),rt=t,fe=!0,kt=null,e!==null&&(ut[ct++]=Ht,ut[ct++]=Gt,ut[ct++]=Ln,Ht=e.id,Gt=e.overflow,Ln=t),t=Qf(t,r.children),t.flags|=4096,t)}function Vh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qp(e.return,t,n)}function Vi(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function oT(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(je(e,t,r.children,n),r=me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vh(e,n,t);else if(e.tag===19)Vh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(me,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Do(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Vi(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Do(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Vi(t,!0,n,null,o);break;case"together":Vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function lo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rC(e,t,n){switch(t.tag){case 3:rT(t),yr();break;case 5:OR(t);break;case 1:Xe(t.type)&&Co(t);break;case 4:Gf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ie(No,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(me,me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?aT(e,t,n):(ie(me,me.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ie(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return oT(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ie(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,tT(e,t,n)}return Zt(e,t,n)}var iT,Yp,sT,lT;iT=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yp=function(){};sT=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,_n(Pt.current);var o=null;switch(n){case"input":a=gp(e,a),r=gp(e,r),o=[];break;case"select":a=ge({},a,{value:void 0}),r=ge({},r,{value:void 0}),o=[];break;case"textarea":a=vp(e,a),r=vp(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}wp(n,r);var i;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};lT=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function aC(e,t,n){var r=t.pendingProps;switch(Uf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Xe(t.type)&&Io(),Me(t),null;case 3:return r=t.stateNode,Er(),de(Ke),de(Pe),Vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(nf(kt),kt=null))),Yp(e,t),Me(t),null;case 5:Wf(t);var a=_n(ba.current);if(n=t.type,e!==null&&t.stateNode!=null)sT(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Me(t),null}if(e=_n(Pt.current),$a(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dt]=t,r[ha]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(a=0;a<Hr.length;a++)ue(Hr[a],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":nh(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":ah(r,o),ue("invalid",r)}wp(n,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ja(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ja(r.textContent,s,e),a=["children",""+s]):oa.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&ue("scroll",r)}switch(n){case"input":La(r),rh(r,o,!0);break;case"textarea":La(r),oh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ao)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=MS(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Dt]=t,e[ha]=r,iT(e,t,!1,!1),t.stateNode=e;e:{switch(i=Sp(n,r),n){case"dialog":ue("cancel",e),ue("close",e),a=r;break;case"iframe":case"object":case"embed":ue("load",e),a=r;break;case"video":case"audio":for(a=0;a<Hr.length;a++)ue(Hr[a],e);a=r;break;case"source":ue("error",e),a=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),a=r;break;case"details":ue("toggle",e),a=r;break;case"input":nh(e,r),a=gp(e,r),ue("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ge({},r,{value:void 0}),ue("invalid",e);break;case"textarea":ah(e,r),a=vp(e,r),ue("invalid",e);break;default:a=r}wp(n,a),s=a;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?US(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&FS(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(e,l):typeof l=="number"&&ia(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(oa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ue("scroll",e):l!=null&&Rf(e,o,l,i))}switch(n){case"input":La(e),rh(e,r,!1);break;case"textarea":La(e),oh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sr(e,!!r.multiple,o,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)lT(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=_n(ba.current),_n(Pt.current),$a(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(o=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:ja(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ja(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Me(t),null;case 13:if(de(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)kR(),yr(),t.flags|=98560,o=!1;else if(o=$a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[Dt]=t}else yr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),o=!1}else kt!==null&&(nf(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(me.current&1)!==0?Ae===0&&(Ae=3):om())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return Er(),Yp(e,t),e===null&&fa(t.stateNode.containerInfo),Me(t),null;case 10:return $f(t.type._context),Me(t),null;case 17:return Xe(t.type)&&Io(),Me(t),null;case 19:if(de(me),o=t.memoizedState,o===null)return Me(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Pr(o,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Do(e),i!==null){for(t.flags|=128,Pr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ee()>Sr&&(t.flags|=128,r=!0,Pr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Do(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!fe)return Me(t),null}else 2*Ee()-o.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ee(),t.sibling=null,n=me.current,ie(me,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return am(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(et&1073741824)!==0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function oC(e,t){switch(Uf(t),t.tag){case 1:return Xe(t.type)&&Io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),de(Ke),de(Pe),Vf(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wf(t),null;case 13:if(de(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(me),null;case 4:return Er(),null;case 10:return $f(t.type._context),null;case 22:case 23:return am(),null;case 24:return null;default:return null}}var Ga=!1,Fe=!1,iC=typeof WeakSet=="function"?WeakSet:Set,q=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Kp(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Yh=!1;function sC(e,t){if(Op=Ro,e=pR(),Ff(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,m=null;t:for(;;){for(var g;d!==n||a!==0&&d.nodeType!==3||(s=i+a),d!==o||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===e)break t;if(m===n&&++u===a&&(s=i),m===o&&++c===r&&(l=i),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lp={focusedElem:e,selectionRange:n},Ro=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var y=E.memoizedProps,A=E.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Rt(t.type,y),A);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(S){ye(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return E=Yh,Yh=!1,E}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Kp(t,n,o)}a=a.next}while(a!==r)}}function Xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uT(e){var t=e.alternate;t!==null&&(e.alternate=null,uT(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[ha],delete t[Fp],delete t[zI],delete t[HI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cT(e){return e.tag===5||e.tag===3||e.tag===4}function Kh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cT(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(Zp(e,t,n),e=e.sibling;e!==null;)Zp(e,t,n),e=e.sibling}function Jp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jp(e,t,n),e=e.sibling;e!==null;)Jp(e,t,n),e=e.sibling}var Ne=null,Tt=!1;function en(e,t,n){for(n=n.child;n!==null;)dT(e,t,n),n=n.sibling}function dT(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount($o,n)}catch{}switch(n.tag){case 5:Fe||ar(n,t);case 6:var r=Ne,a=Tt;Ne=null,en(e,t,n),Ne=r,Tt=a,Ne!==null&&(Tt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Tt?(e=Ne,n=n.stateNode,e.nodeType===8?qi(e.parentNode,n):e.nodeType===1&&qi(e,n),ca(e)):qi(Ne,n.stateNode));break;case 4:r=Ne,a=Tt,Ne=n.stateNode.containerInfo,Tt=!0,en(e,t,n),Ne=r,Tt=a;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&Kp(n,t,i),a=a.next}while(a!==r)}en(e,t,n);break;case 1:if(!Fe&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,en(e,t,n),Fe=r):en(e,t,n);break;default:en(e,t,n)}}function Xh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iC),t.forEach(function(r){var a=gC.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,Tt=!1;break e;case 3:Ne=s.stateNode.containerInfo,Tt=!0;break e;case 4:Ne=s.stateNode.containerInfo,Tt=!0;break e}s=s.return}if(Ne===null)throw Error(L(160));dT(o,i,a),Ne=null,Tt=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){ye(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pT(t,e),t=t.sibling}function pT(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),xt(e),r&4){try{Qr(3,e,e.return),Xo(3,e)}catch(y){ye(e,e.return,y)}try{Qr(5,e,e.return)}catch(y){ye(e,e.return,y)}}break;case 1:St(t,e),xt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(St(t,e),xt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var a=e.stateNode;try{ia(a,"")}catch(y){ye(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&LS(a,o),Sp(s,i);var u=Sp(s,o);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?US(a,d):c==="dangerouslySetInnerHTML"?FS(a,d):c==="children"?ia(a,d):Rf(a,c,d,u)}switch(s){case"input":bp(a,o);break;case"textarea":DS(a,o);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?sr(a,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?sr(a,!!o.multiple,o.defaultValue,!0):sr(a,!!o.multiple,o.multiple?[]:"",!1))}a[ha]=o}catch(y){ye(e,e.return,y)}}break;case 6:if(St(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(L(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(y){ye(e,e.return,y)}}break;case 3:if(St(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(t.containerInfo)}catch(y){ye(e,e.return,y)}break;case 4:St(t,e),xt(e);break;case 13:St(t,e),xt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(nm=Ee())),r&4&&Xh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||c,St(t,e),Fe=u):St(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(q=e,c=e.child;c!==null;){for(d=q=c;q!==null;){switch(m=q,g=m.child,m.tag){case 0:case 11:case 14:case 15:Qr(4,m,m.return);break;case 1:ar(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(y){ye(r,n,y)}}break;case 5:ar(m,m.return);break;case 22:if(m.memoizedState!==null){Jh(d);continue}}g!==null?(g.return=m,q=g):Jh(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{a=d.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=PS("display",i))}catch(y){ye(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ye(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:St(t,e),xt(e),r&4&&Xh(e);break;case 21:break;default:St(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cT(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(ia(a,""),r.flags&=-33);var o=Kh(e);Jp(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Kh(e);Zp(e,s,i);break;default:throw Error(L(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lC(e,t,n){q=e,fT(e)}function fT(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var a=q,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Ga;if(!i){var s=a.alternate,l=s!==null&&s.memoizedState!==null||Fe;s=Ga;var u=Fe;if(Ga=i,(Fe=l)&&!u)for(q=a;q!==null;)i=q,l=i.child,i.tag===22&&i.memoizedState!==null?Qh(a):l!==null?(l.return=i,q=l):Qh(a);for(;o!==null;)q=o,fT(o),o=o.sibling;q=a,Ga=s,Fe=u}Zh(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,q=o):Zh(e)}}function Zh(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||Xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dh(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dh(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Fe||t.flags&512&&Xp(t)}catch(m){ye(t,t.return,m)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Jh(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Qh(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xo(4,t)}catch(l){ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(l){ye(t,a,l)}}var o=t.return;try{Xp(t)}catch(l){ye(t,o,l)}break;case 5:var i=t.return;try{Xp(t)}catch(l){ye(t,i,l)}}}catch(l){ye(t,t.return,l)}if(t===e){q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,q=s;break}q=t.return}}var uC=Math.ceil,Po=Jt.ReactCurrentDispatcher,em=Jt.ReactCurrentOwner,mt=Jt.ReactCurrentBatchConfig,Q=0,_e=null,Re=null,Oe=0,et=0,or=vn(0),Ae=0,wa=null,Mn=0,Zo=0,tm=0,ea=null,Ve=null,nm=0,Sr=1/0,$t=null,Uo=!1,Qp=null,fn=null,Wa=!1,sn=null,Bo=0,ta=0,ef=null,uo=-1,co=0;function $e(){return(Q&6)!==0?Ee():uo!==-1?uo:uo=Ee()}function mn(e){return(e.mode&1)===0?1:(Q&2)!==0&&Oe!==0?Oe&-Oe:WI.transition!==null?(co===0&&(co=XS()),co):(e=te,e!==0||(e=window.event,e=e===void 0?16:rR(e.type)),e)}function It(e,t,n,r){if(50<ta)throw ta=0,ef=null,Error(L(185));Ra(e,n,r),((Q&2)===0||e!==_e)&&(e===_e&&((Q&2)===0&&(Zo|=n),Ae===4&&an(e,Oe)),Ze(e,r),n===1&&Q===0&&(t.mode&1)===0&&(Sr=Ee()+500,Vo&&En()))}function Ze(e,t){var n=e.callbackNode;WA(e,t);var r=So(e,e===_e?Oe:0);if(r===0)n!==null&&lh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lh(n),t===1)e.tag===0?GI(eg.bind(null,e)):SR(eg.bind(null,e)),jI(function(){(Q&6)===0&&En()}),n=null;else{switch(ZS(r)){case 1:n=Cf;break;case 4:n=YS;break;case 16:n=wo;break;case 536870912:n=KS;break;default:n=wo}n=wT(n,mT.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mT(e,t){if(uo=-1,co=0,(Q&6)!==0)throw Error(L(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=So(e,e===_e?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=qo(e,r);else{t=r;var a=Q;Q|=2;var o=gT();(_e!==e||Oe!==t)&&($t=null,Sr=Ee()+500,xn(e,t));do try{pC();break}catch(s){hT(e,s)}while(1);jf(),Po.current=o,Q=a,Re!==null?t=0:(_e=null,Oe=0,t=Ae)}if(t!==0){if(t===2&&(a=Ip(e),a!==0&&(r=a,t=tf(e,a))),t===1)throw n=wa,xn(e,0),an(e,r),Ze(e,Ee()),n;if(t===6)an(e,r);else{if(a=e.current.alternate,(r&30)===0&&!cC(a)&&(t=qo(e,r),t===2&&(o=Ip(e),o!==0&&(r=o,t=tf(e,o))),t===1))throw n=wa,xn(e,0),an(e,r),Ze(e,Ee()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:kn(e,Ve,$t);break;case 3:if(an(e,r),(r&130023424)===r&&(t=nm+500-Ee(),10<t)){if(So(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Mp(kn.bind(null,e,Ve,$t),t);break}kn(e,Ve,$t);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-At(r);o=1<<i,i=t[i],i>a&&(a=i),r&=~o}if(r=a,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uC(r/1960))-r,10<r){e.timeoutHandle=Mp(kn.bind(null,e,Ve,$t),r);break}kn(e,Ve,$t);break;case 5:kn(e,Ve,$t);break;default:throw Error(L(329))}}}return Ze(e,Ee()),e.callbackNode===n?mT.bind(null,e):null}function tf(e,t){var n=ea;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=qo(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&nf(t)),e}function nf(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function cC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Ct(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~tm,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function eg(e){if((Q&6)!==0)throw Error(L(327));pr();var t=So(e,0);if((t&1)===0)return Ze(e,Ee()),null;var n=qo(e,t);if(e.tag!==0&&n===2){var r=Ip(e);r!==0&&(t=r,n=tf(e,r))}if(n===1)throw n=wa,xn(e,0),an(e,t),Ze(e,Ee()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ve,$t),Ze(e,Ee()),null}function rm(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Sr=Ee()+500,Vo&&En())}}function Fn(e){sn!==null&&sn.tag===0&&(Q&6)===0&&pr();var t=Q;Q|=1;var n=mt.transition,r=te;try{if(mt.transition=null,te=1,e)return e()}finally{te=r,mt.transition=n,Q=t,(Q&6)===0&&En()}}function am(){et=or.current,de(or)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qI(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Io();break;case 3:Er(),de(Ke),de(Pe),Vf();break;case 5:Wf(r);break;case 4:Er();break;case 13:de(me);break;case 19:de(me);break;case 10:$f(r.type._context);break;case 22:case 23:am()}n=n.return}if(_e=e,Re=e=hn(e.current,null),Oe=et=t,Ae=0,wa=null,tm=Zo=Mn=0,Ve=ea=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}n.pending=r}Cn=null}return e}function hT(e,t){do{var n=Re;try{if(jf(),io.current=Fo,Mo){for(var r=he.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Mo=!1}if(Dn=0,Ce=ke=he=null,Jr=!1,ya=0,em.current=null,n===null||n.return===null){Ae=1,wa=t,Re=null;break}e:{var o=e,i=n.return,s=n,l=t;if(t=Oe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=jh(i);if(g!==null){g.flags&=-257,$h(g,i,s,o,t),g.mode&1&&qh(o,u,t),t=g,l=u;var E=t.updateQueue;if(E===null){var y=new Set;y.add(l),t.updateQueue=y}else E.add(l);break e}else{if((t&1)===0){qh(o,u,t),om();break e}l=Error(L(426))}}else if(fe&&s.mode&1){var A=jh(i);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),$h(A,i,s,o,t),Bf(wr(l,s));break e}}o=l=wr(l,s),Ae!==4&&(Ae=2),ea===null?ea=[o]:ea.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=JR(o,l,t);Lh(o,h);break e;case 1:s=l;var f=o.type,p=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(fn===null||!fn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=QR(o,s,t);Lh(o,S);break e}}o=o.return}while(o!==null)}yT(n)}catch(T){t=T,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function gT(){var e=Po.current;return Po.current=Fo,e===null?Fo:e}function om(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),_e===null||(Mn&268435455)===0&&(Zo&268435455)===0||an(_e,Oe)}function qo(e,t){var n=Q;Q|=2;var r=gT();(_e!==e||Oe!==t)&&($t=null,xn(e,t));do try{dC();break}catch(a){hT(e,a)}while(1);if(jf(),Q=n,Po.current=r,Re!==null)throw Error(L(261));return _e=null,Oe=0,Ae}function dC(){for(;Re!==null;)bT(Re)}function pC(){for(;Re!==null&&!PA();)bT(Re)}function bT(e){var t=ET(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?yT(e):Re=t,em.current=null}function yT(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=aC(n,t,et),n!==null){Re=n;return}}else{if(n=oC(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Ae===0&&(Ae=5)}function kn(e,t,n){var r=te,a=mt.transition;try{mt.transition=null,te=1,fC(e,t,n,r)}finally{mt.transition=a,te=r}return null}function fC(e,t,n,r){do pr();while(sn!==null);if((Q&6)!==0)throw Error(L(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(VA(e,o),e===_e&&(Re=_e=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Wa||(Wa=!0,wT(wo,function(){return pr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=mt.transition,mt.transition=null;var i=te;te=1;var s=Q;Q|=4,em.current=null,sC(e,n),pT(n,e),LI(Lp),Ro=!!Op,Lp=Op=null,e.current=n,lC(n),UA(),Q=s,te=i,mt.transition=o}else e.current=n;if(Wa&&(Wa=!1,sn=e,Bo=a),o=e.pendingLanes,o===0&&(fn=null),jA(n.stateNode),Ze(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Uo)throw Uo=!1,e=Qp,Qp=null,e;return(Bo&1)!==0&&e.tag!==0&&pr(),o=e.pendingLanes,(o&1)!==0?e===ef?ta++:(ta=0,ef=e):ta=0,En(),null}function pr(){if(sn!==null){var e=ZS(Bo),t=mt.transition,n=te;try{if(mt.transition=null,te=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,Bo=0,(Q&6)!==0)throw Error(L(331));var a=Q;for(Q|=4,q=e.current;q!==null;){var o=q,i=o.child;if((q.flags&16)!==0){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(q=u;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:Qr(8,c,o)}var d=c.child;if(d!==null)d.return=c,q=d;else for(;q!==null;){c=q;var m=c.sibling,g=c.return;if(uT(c),c===u){q=null;break}if(m!==null){m.return=g,q=m;break}q=g}}}var E=o.alternate;if(E!==null){var y=E.child;if(y!==null){E.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}q=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,q=i;else e:for(;q!==null;){if(o=q,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Qr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,q=h;break e}q=o.return}}var f=e.current;for(q=f;q!==null;){i=q;var p=i.child;if((i.subtreeFlags&2064)!==0&&p!==null)p.return=i,q=p;else e:for(i=f;q!==null;){if(s=q,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Xo(9,s)}}catch(T){ye(s,s.return,T)}if(s===i){q=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}if(Q=a,En(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot($o,e)}catch{}r=!0}return r}finally{te=n,mt.transition=t}}return!1}function tg(e,t,n){t=wr(n,t),t=JR(e,t,1),e=pn(e,t,1),t=$e(),e!==null&&(Ra(e,1,t),Ze(e,t))}function ye(e,t,n){if(e.tag===3)tg(e,e,n);else for(;t!==null;){if(t.tag===3){tg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=wr(n,e),e=QR(t,e,1),t=pn(t,e,1),e=$e(),t!==null&&(Ra(t,1,e),Ze(t,e));break}}t=t.return}}function mC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Oe&n)===n&&(Ae===4||Ae===3&&(Oe&130023424)===Oe&&500>Ee()-nm?xn(e,0):tm|=n),Ze(e,t)}function vT(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fa,Fa<<=1,(Fa&130023424)===0&&(Fa=4194304)));var n=$e();e=Xt(e,t),e!==null&&(Ra(e,t,n),Ze(e,n))}function hC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vT(e,n)}function gC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),vT(e,n)}var ET;ET=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ye=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ye=!1,rC(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,fe&&(t.flags&1048576)!==0&&RR(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;lo(e,t),e=t.pendingProps;var a=br(t,Pe.current);dr(t,n),a=Kf(null,t,r,e,a,n);var o=Xf();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,Co(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Hf(t),a.updater=Yo,t.stateNode=a,a._reactInternals=t,$p(t,r,e,n),t=Gp(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&Pf(t),je(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(lo(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=yC(r),e=Rt(r,e),a){case 0:t=Hp(null,t,r,e,n);break e;case 1:t=Gh(null,t,r,e,n);break e;case 11:t=zh(null,t,r,e,n);break e;case 14:t=Hh(null,t,r,Rt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Rt(r,a),Hp(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Rt(r,a),Gh(e,t,r,a,n);case 3:e:{if(rT(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,a=o.element,IR(e,t),Lo(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=wr(Error(L(423)),t),t=Wh(e,t,r,n,a);break e}else if(r!==a){a=wr(Error(L(424)),t),t=Wh(e,t,r,n,a);break e}else for(tt=dn(t.stateNode.containerInfo.firstChild),rt=t,fe=!0,kt=null,n=NR(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===a){t=Zt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return OR(t),e===null&&Bp(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Dp(r,a)?i=null:o!==null&&Dp(r,o)&&(t.flags|=32),nT(e,t),je(e,t,i,n),t.child;case 6:return e===null&&Bp(t),null;case 13:return aT(e,t,n);case 4:return Gf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Rt(r,a),zh(e,t,r,a,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,ie(No,r._currentValue),r._currentValue=i,o!==null)if(Ct(o.value,i)){if(o.children===a.children&&!Ke.current){t=Zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Vt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qp(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(L(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),qp(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}je(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,dr(t,n),a=gt(a),r=r(a),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,a=Rt(r,t.pendingProps),a=Rt(r.type,a),Hh(e,t,r,a,n);case 15:return eT(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Rt(r,a),lo(e,t),t.tag=1,Xe(r)?(e=!0,Co(t)):e=!1,dr(t,n),_R(t,r,a),$p(t,r,a,n),Gp(null,t,r,!0,e,n);case 19:return oT(e,t,n);case 22:return tT(e,t,n)}throw Error(L(156,t.tag))};function wT(e,t){return VS(e,t)}function bC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new bC(e,t,n,r)}function im(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yC(e){if(typeof e=="function")return im(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kf)return 11;if(e===Af)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function po(e,t,n,r,a,o){var i=2;if(r=e,typeof e=="function")im(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kn:return Nn(n.children,a,o,t);case Tf:i=8,a|=8;break;case pp:return e=ft(12,n,t,a|2),e.elementType=pp,e.lanes=o,e;case fp:return e=ft(13,n,t,a),e.elementType=fp,e.lanes=o,e;case mp:return e=ft(19,n,t,a),e.elementType=mp,e.lanes=o,e;case xS:return Jo(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case CS:i=10;break e;case _S:i=9;break e;case kf:i=11;break e;case Af:i=14;break e;case tn:i=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=ft(i,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function Jo(e,t,n,r){return e=ft(22,e,r,t),e.elementType=xS,e.lanes=n,e.stateNode={isHidden:!1},e}function Yi(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Ki(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vC(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function sm(e,t,n,r,a,o,i,s,l){return e=new vC(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(o),e}function EC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ST(e){if(!e)return bn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Xe(n))return wR(e,n,t)}return t}function RT(e,t,n,r,a,o,i,s,l){return e=sm(n,r,!0,e,a,o,i,s,l),e.context=ST(null),n=e.current,r=$e(),a=mn(n),o=Vt(r,a),o.callback=t!=null?t:null,pn(n,o,a),e.current.lanes=a,Ra(e,a,r),Ze(e,r),e}function Qo(e,t,n,r){var a=t.current,o=$e(),i=mn(a);return n=ST(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(a,t,i),e!==null&&(It(e,a,i,o),oo(e,a,i)),i}function jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ng(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lm(e,t){ng(e,t),(e=e.alternate)&&ng(e,t)}function wC(){return null}var TT=typeof reportError=="function"?reportError:function(e){console.error(e)};function um(e){this._internalRoot=e}ei.prototype.render=um.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Qo(e,t,null,null)};ei.prototype.unmount=um.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Qo(null,e,null,null)}),t[Kt]=null}};function ei(e){this._internalRoot=e}ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=eR();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&nR(e)}};function cm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rg(){}function SC(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var u=jo(i);o.call(u)}}var i=RT(t,r,e,0,null,!1,!1,"",rg);return e._reactRootContainer=i,e[Kt]=i.current,fa(e.nodeType===8?e.parentNode:e),Fn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var u=jo(l);s.call(u)}}var l=sm(e,0,!1,null,null,!1,!1,"",rg);return e._reactRootContainer=l,e[Kt]=l.current,fa(e.nodeType===8?e.parentNode:e),Fn(function(){Qo(t,l,n,r)}),l}function ni(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var s=a;a=function(){var l=jo(i);s.call(l)}}Qo(t,i,e,a)}else i=SC(n,t,e,a,r);return jo(i)}JS=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(_f(t,n|1),Ze(t,Ee()),(Q&6)===0&&(Sr=Ee()+500,En()))}break;case 13:Fn(function(){var r=Xt(e,1);if(r!==null){var a=$e();It(r,e,1,a)}}),lm(e,1)}};xf=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=$e();It(t,e,134217728,n)}lm(e,134217728)}};QS=function(e){if(e.tag===13){var t=mn(e),n=Xt(e,t);if(n!==null){var r=$e();It(n,e,t,r)}lm(e,t)}};eR=function(){return te};tR=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Tp=function(e,t,n){switch(t){case"input":if(bp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Wo(r);if(!a)throw Error(L(90));OS(r),bp(r,a)}}}break;case"textarea":DS(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};jS=rm;$S=Fn;var RC={usingClientEntryPoint:!1,Events:[ka,Qn,Wo,BS,qS,rm]},Ur={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},TC={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=GS(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||wC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{$o=Va.inject(TC),Ft=Va}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RC;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cm(t))throw Error(L(200));return EC(e,t,null,n)};ot.createRoot=function(e,t){if(!cm(e))throw Error(L(299));var n=!1,r="",a=TT;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=sm(e,1,!1,null,null,n,!1,r,a),e[Kt]=t.current,fa(e.nodeType===8?e.parentNode:e),new um(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=GS(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Fn(e)};ot.hydrate=function(e,t,n){if(!ti(t))throw Error(L(200));return ni(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!cm(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",i=TT;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=RT(t,null,e,1,n!=null?n:null,a,!1,o,i),e[Kt]=t.current,fa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ei(t)};ot.render=function(e,t,n){if(!ti(t))throw Error(L(200));return ni(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!ti(e))throw Error(L(40));return e._reactRootContainer?(Fn(function(){ni(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};ot.unstable_batchedUpdates=rm;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ti(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return ni(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ot})(RS);var ag=RS.exports;cp.createRoot=ag.createRoot,cp.hydrateRoot=ag.hydrateRoot;var ri={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kC=pt.exports,AC=Symbol.for("react.element"),IC=Symbol.for("react.fragment"),CC=Object.prototype.hasOwnProperty,_C=kC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xC={key:!0,ref:!0,__self:!0,__source:!0};function kT(e,t,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)CC.call(t,r)&&!xC.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:AC,type:e,key:o,ref:i,props:a,_owner:_C.current}}ai.Fragment=IC;ai.jsx=kT;ai.jsxs=kT;(function(e){e.exports=ai})(ri);const NC=ri.exports.Fragment,H=ri.exports.jsx,Pn=ri.exports.jsxs,AT=pt.exports.createContext({page:"Home",setPage:()=>{},setReactJS:()=>{}});function OC({children:e}){const t=o=>a(i=>({...i,page:o})),n=o=>a(i=>({...i,reactJS:o})),[r,a]=pt.exports.useState({page:"Home",setPage:t,setReactJS:n});return H(AT.Provider,{value:r,children:e})}function dm(){return pt.exports.useContext(AT)}const og={1:{question:"1. ## What is React?",answer:`

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

---`}},LC={v1:{id:"359af1a719f83e7f341cfbeb039147153f1f3b38",value:og,initState(){const e={};return Object.keys(og).forEach(t=>e[t]={isDone:!1}),e}}},pm={ReactJS:LC};var IT={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],a=0;a<arguments.length;a++){var o=arguments[a];if(!!o){var i=typeof o;if(i==="string"||i==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(i==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(IT);const DC=IT.exports,MC="_button_1hcex_1",FC="_medium_1hcex_24",PC="_large_1hcex_28",UC="_outline_1hcex_32",BC="_basic_1hcex_44",qC="_link_1hcex_56",jC="_secondary_1hcex_67",$C="_primary_1hcex_78",zC="_danger_1hcex_89",HC="_disabled_1hcex_100",Ya={button:MC,medium:FC,large:PC,outline:UC,basic:BC,link:qC,secondary:jC,primary:$C,danger:zC,disabled:HC},GC=e=>{const{label:t,children:n}=e;return t||n||"Button"},na=e=>{let{className:t,style:n,size:r,variant:a,disabled:o,disabledClassName:i}=e;t=t!=null?t:"",a=a!=null?a:"basic",r=r!=null?r:"medium",o=o!=null?o:!1,i=i!=null?i:"";const s=DC(t,Ya[r],Ya.button,Ya[a],{[Ya.disabled]:o,[i]:o});return H("div",{onClick:u=>{const{onClick:c,disabled:d}=e;d||c&&c({event:u})},className:s,style:n!=null?n:{},children:GC(e)})};class CT{constructor(t){Km(this,"storage");this.storage=window[t]}get(t){try{const n=this.storage.getItem(String(t));return this.checkJSON(n!=null?n:"")?JSON.parse(n):n}catch(n){return console.error("err in ls get",n),null}}getMultiple(t){try{let n={},r=t.length;for(;r--;)n[t[r]]=this.get(t[r]);return n}catch(n){console.error("err in ls get multi",n)}}get allItems(){try{let t={},n=Object.keys(this.storage),r=n.length;for(;r--;)t[n[r]]=this.get(n[r]);return t}catch(t){console.error("err in ls get all",t)}}set(t,n){try{const a=this.checkPrimitive(n)?n:JSON.stringify(n);this.storage.setItem(String(String(t)),a)}catch(r){console.error("err in ls set",r)}}setMultiple(t){try{Object.entries(t).forEach(([n,r])=>{this.set(n,r)})}catch(n){console.error("err in ls set multi",n)}}remove(t){try{return this.storage.removeItem(String(t))}catch(n){console.error("err in ls remove",n)}}removeMultiple(t){try{return t.forEach(n=>this.remove(n))}catch(n){console.error("err in ls remove multi",n)}}clear(){try{return this.storage.clear()}catch(t){console.error("err in ls remove all",t)}}checkJSON(t){try{JSON.parse(t)}catch{return!1}return!0}checkPrimitive(t){return t===null?!0:!(typeof t=="object"||typeof t=="function")}}const fr=new CT("localStorage");new CT("sessionStorage");function WC(){const{setPage:e,reactJS:t,setReactJS:n}=dm();function r(){const o=Object.keys(t!=null?t:{}).length;return`${Object.values(t!=null?t:{}).reduce((s,l)=>l.isDone?s+1:s,0)}/${o}`}function a(){fr.clear();const o=pm.ReactJS.v1.initState();fr.set("ReactJS",o),n(o)}return H("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Pn("div",{style:{display:"flex",flexDirection:"column"},children:[H(na,{style:{marginBottom:"10px"},onClick:()=>e("InGame"),variant:"primary",children:"START"}),H(na,{style:{marginBottom:"10px"},onClick:a,variant:"secondary",children:"RESET"}),Pn("div",{children:["ReactJS: ",r()]})]})})}const ig=["http","https","mailto","tel"];function VC(e){const t=(e||"").trim(),n=t.charAt(0);if(n==="#"||n==="/")return t;const r=t.indexOf(":");if(r===-1)return t;let a=-1;for(;++a<ig.length;){const o=ig[a];if(r===o.length&&t.slice(0,o.length).toLowerCase()===o)return t}return a=t.indexOf("?"),a!==-1&&r>a||(a=t.indexOf("#"),a!==-1&&r>a)?t:"javascript:void(0)"}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var _T=function(t){return t!=null&&t.constructor!=null&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)};function ra(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?sg(e.position):"start"in e||"end"in e?sg(e):"line"in e||"column"in e?rf(e):""}function rf(e){return lg(e&&e.line)+":"+lg(e&&e.column)}function sg(e){return rf(e&&e.start)+"-"+rf(e&&e.end)}function lg(e){return e&&typeof e=="number"?e:1}class yt extends Error{constructor(t,n,r){const a=[null,null];let o={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof n=="string"&&(r=n,n=void 0),typeof r=="string"){const i=r.indexOf(":");i===-1?a[1]=r:(a[0]=r.slice(0,i),a[1]=r.slice(i+1))}n&&("type"in n||"position"in n?n.position&&(o=n.position):"start"in n||"end"in n?o=n:("line"in n||"column"in n)&&(o.start=n)),this.name=ra(n)||"1:1",this.message=typeof t=="object"?t.message:t,this.stack=typeof t=="object"?t.stack:"",this.reason=this.message,this.fatal,this.line=o.start.line,this.column=o.start.column,this.source=a[0],this.ruleId=a[1],this.position=o,this.actual,this.expected,this.file,this.url,this.note}}yt.prototype.file="";yt.prototype.name="";yt.prototype.reason="";yt.prototype.message="";yt.prototype.stack="";yt.prototype.fatal=null;yt.prototype.column=null;yt.prototype.line=null;yt.prototype.source=null;yt.prototype.ruleId=null;yt.prototype.position=null;const Ot={basename:YC,dirname:KC,extname:XC,join:ZC,sep:"/"};function YC(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ia(e);let n=0,r=-1,a=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;a--;)if(e.charCodeAt(a)===47){if(o){n=a+1;break}}else r<0&&(o=!0,r=a+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let i=-1,s=t.length-1;for(;a--;)if(e.charCodeAt(a)===47){if(o){n=a+1;break}}else i<0&&(o=!0,i=a+1),s>-1&&(e.charCodeAt(a)===t.charCodeAt(s--)?s<0&&(r=a):(s=-1,r=i));return n===r?r=i:r<0&&(r=e.length),e.slice(n,r)}function KC(e){if(Ia(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.charCodeAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.charCodeAt(0)===47?"/":".":t===1&&e.charCodeAt(0)===47?"//":e.slice(0,t)}function XC(e){Ia(e);let t=e.length,n=-1,r=0,a=-1,o=0,i;for(;t--;){const s=e.charCodeAt(t);if(s===47){if(i){r=t+1;break}continue}n<0&&(i=!0,n=t+1),s===46?a<0?a=t:o!==1&&(o=1):a>-1&&(o=-1)}return a<0||n<0||o===0||o===1&&a===n-1&&a===r+1?"":e.slice(a,n)}function ZC(...e){let t=-1,n;for(;++t<e.length;)Ia(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":JC(n)}function JC(e){Ia(e);const t=e.charCodeAt(0)===47;let n=QC(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.charCodeAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function QC(e,t){let n="",r=0,a=-1,o=0,i=-1,s,l;for(;++i<=e.length;){if(i<e.length)s=e.charCodeAt(i);else{if(s===47)break;s=47}if(s===47){if(!(a===i-1||o===1))if(a!==i-1&&o===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),a=i,o=0;continue}}else if(n.length>0){n="",r=0,a=i,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(a+1,i):n=e.slice(a+1,i),r=i-a-1;a=i,o=0}else s===46&&o>-1?o++:o=-1}return n}function Ia(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const e_={cwd:t_};function t_(){return"/"}function af(e){return e!==null&&typeof e=="object"&&e.href&&e.origin}function n_(e){if(typeof e=="string")e=new URL(e);else if(!af(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return r_(e)}function r_(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.charCodeAt(n)===37&&t.charCodeAt(n+1)===50){const r=t.charCodeAt(n+2);if(r===70||r===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(t)}const Xi=["history","path","basename","stem","extname","dirname"];class xT{constructor(t){let n;t?typeof t=="string"||_T(t)?n={value:t}:af(t)?n={path:t}:n=t:n={},this.data={},this.messages=[],this.history=[],this.cwd=e_.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<Xi.length;){const o=Xi[r];o in n&&n[o]!==void 0&&(this[o]=o==="history"?[...n[o]]:n[o])}let a;for(a in n)Xi.includes(a)||(this[a]=n[a])}get path(){return this.history[this.history.length-1]}set path(t){af(t)&&(t=n_(t)),Ji(t,"path"),this.path!==t&&this.history.push(t)}get dirname(){return typeof this.path=="string"?Ot.dirname(this.path):void 0}set dirname(t){ug(this.basename,"dirname"),this.path=Ot.join(t||"",this.basename)}get basename(){return typeof this.path=="string"?Ot.basename(this.path):void 0}set basename(t){Ji(t,"basename"),Zi(t,"basename"),this.path=Ot.join(this.dirname||"",t)}get extname(){return typeof this.path=="string"?Ot.extname(this.path):void 0}set extname(t){if(Zi(t,"extname"),ug(this.dirname,"extname"),t){if(t.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ot.join(this.dirname,this.stem+(t||""))}get stem(){return typeof this.path=="string"?Ot.basename(this.path,this.extname):void 0}set stem(t){Ji(t,"stem"),Zi(t,"stem"),this.path=Ot.join(this.dirname||"",t+(this.extname||""))}toString(t){return(this.value||"").toString(t)}message(t,n,r){const a=new yt(t,n,r);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}info(t,n,r){const a=this.message(t,n,r);return a.fatal=null,a}fail(t,n,r){const a=this.message(t,n,r);throw a.fatal=!0,a}}function Zi(e,t){if(e&&e.includes(Ot.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ot.sep+"`")}function Ji(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function ug(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function cg(e){if(e)throw e}var fo=Object.prototype.hasOwnProperty,NT=Object.prototype.toString,dg=Object.defineProperty,pg=Object.getOwnPropertyDescriptor,fg=function(t){return typeof Array.isArray=="function"?Array.isArray(t):NT.call(t)==="[object Array]"},mg=function(t){if(!t||NT.call(t)!=="[object Object]")return!1;var n=fo.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&fo.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var a;for(a in t);return typeof a>"u"||fo.call(t,a)},hg=function(t,n){dg&&n.name==="__proto__"?dg(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},gg=function(t,n){if(n==="__proto__")if(fo.call(t,n)){if(pg)return pg(t,n).value}else return;return t[n]},bg=function e(){var t,n,r,a,o,i,s=arguments[0],l=1,u=arguments.length,c=!1;for(typeof s=="boolean"&&(c=s,s=arguments[1]||{},l=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});l<u;++l)if(t=arguments[l],t!=null)for(n in t)r=gg(s,n),a=gg(t,n),s!==a&&(c&&a&&(mg(a)||(o=fg(a)))?(o?(o=!1,i=r&&fg(r)?r:[]):i=r&&mg(r)?r:{},hg(s,{name:n,newValue:e(c,i,a)})):typeof a<"u"&&hg(s,{name:n,newValue:a}));return s};function of(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function a_(){const e=[],t={run:n,use:r};return t;function n(...a){let o=-1;const i=a.pop();if(typeof i!="function")throw new TypeError("Expected function as last argument, not "+i);s(null,...a);function s(l,...u){const c=e[++o];let d=-1;if(l){i(l);return}for(;++d<a.length;)(u[d]===null||u[d]===void 0)&&(u[d]=a[d]);a=u,c?o_(c,s)(...u):i(null,...u)}}function r(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return e.push(a),t}}function o_(e,t){let n;return r;function r(...i){const s=e.length>i.length;let l;s&&i.push(a);try{l=e.apply(this,i)}catch(u){const c=u;if(s&&n)throw c;return a(c)}s||(l instanceof Promise?l.then(o,a):l instanceof Error?a(l):o(l))}function a(i,...s){n||(n=!0,t(i,...s))}function o(i){a(null,i)}}const i_=LT().freeze(),OT={}.hasOwnProperty;function LT(){const e=a_(),t=[];let n={},r,a=-1;return o.data=i,o.Parser=void 0,o.Compiler=void 0,o.freeze=s,o.attachers=t,o.use=l,o.parse=u,o.stringify=c,o.run=d,o.runSync=m,o.process=g,o.processSync=E,o;function o(){const y=LT();let A=-1;for(;++A<t.length;)y.use(...t[A]);return y.data(bg(!0,{},n)),y}function i(y,A){return typeof y=="string"?arguments.length===2?(ts("data",r),n[y]=A,o):OT.call(n,y)&&n[y]||null:y?(ts("data",r),n=y,o):n}function s(){if(r)return o;for(;++a<t.length;){const[y,...A]=t[a];if(A[0]===!1)continue;A[0]===!0&&(A[0]=void 0);const h=y.call(o,...A);typeof h=="function"&&e.use(h)}return r=!0,a=Number.POSITIVE_INFINITY,o}function l(y,...A){let h;if(ts("use",r),y!=null)if(typeof y=="function")T(y,...A);else if(typeof y=="object")Array.isArray(y)?S(y):p(y);else throw new TypeError("Expected usable value, not `"+y+"`");return h&&(n.settings=Object.assign(n.settings||{},h)),o;function f(b){if(typeof b=="function")T(b);else if(typeof b=="object")if(Array.isArray(b)){const[k,...I]=b;T(k,...I)}else p(b);else throw new TypeError("Expected usable value, not `"+b+"`")}function p(b){S(b.plugins),b.settings&&(h=Object.assign(h||{},b.settings))}function S(b){let k=-1;if(b!=null)if(Array.isArray(b))for(;++k<b.length;){const I=b[k];f(I)}else throw new TypeError("Expected a list of plugins, not `"+b+"`")}function T(b,k){let I=-1,C;for(;++I<t.length;)if(t[I][0]===b){C=t[I];break}C?(of(C[1])&&of(k)&&(k=bg(!0,C[1],k)),C[1]=k):t.push([...arguments])}}function u(y){o.freeze();const A=Br(y),h=o.Parser;return Qi("parse",h),yg(h,"parse")?new h(String(A),A).parse():h(String(A),A)}function c(y,A){o.freeze();const h=Br(A),f=o.Compiler;return es("stringify",f),vg(y),yg(f,"compile")?new f(y,h).compile():f(y,h)}function d(y,A,h){if(vg(y),o.freeze(),!h&&typeof A=="function"&&(h=A,A=void 0),!h)return new Promise(f);f(null,h);function f(p,S){e.run(y,Br(A),T);function T(b,k,I){k=k||y,b?S(b):p?p(k):h(null,k,I)}}}function m(y,A){let h,f;return o.run(y,A,p),Eg("runSync","run",f),h;function p(S,T){cg(S),h=T,f=!0}}function g(y,A){if(o.freeze(),Qi("process",o.Parser),es("process",o.Compiler),!A)return new Promise(h);h(null,A);function h(f,p){const S=Br(y);o.run(o.parse(S),S,(b,k,I)=>{if(b||!k||!I)T(b);else{const C=o.stringify(k,I);C==null||(u_(C)?I.value=C:I.result=C),T(b,I)}});function T(b,k){b||!k?p(b):f?f(k):A(null,k)}}}function E(y){let A;o.freeze(),Qi("processSync",o.Parser),es("processSync",o.Compiler);const h=Br(y);return o.process(h,f),Eg("processSync","process",A),h;function f(p){A=!0,cg(p)}}}function yg(e,t){return typeof e=="function"&&e.prototype&&(s_(e.prototype)||t in e.prototype)}function s_(e){let t;for(t in e)if(OT.call(e,t))return!0;return!1}function Qi(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `Parser`")}function es(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `Compiler`")}function ts(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function vg(e){if(!of(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Eg(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Br(e){return l_(e)?e:new xT(e)}function l_(e){return Boolean(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function u_(e){return typeof e=="string"||_T(e)}function c_(e,t){var{includeImageAlt:n=!0}=t||{};return DT(e,n)}function DT(e,t){return e&&typeof e=="object"&&(e.value||(t?e.alt:"")||"children"in e&&wg(e.children,t)||Array.isArray(e)&&wg(e,t))||""}function wg(e,t){for(var n=[],r=-1;++r<e.length;)n[r]=DT(e[r],t);return n.join("")}function Ut(e,t,n,r){const a=e.length;let o=0,i;if(t<0?t=-t>a?0:a+t:t=t>a?a:t,n=n>0?n:0,r.length<1e4)i=Array.from(r),i.unshift(t,n),[].splice.apply(e,i);else for(n&&[].splice.apply(e,[t,n]);o<r.length;)i=r.slice(o,o+1e4),i.unshift(t,0),[].splice.apply(e,i),o+=1e4,t+=1e4}function dt(e,t){return e.length>0?(Ut(e,e.length,0,t),e):t}const Sg={}.hasOwnProperty;function d_(e){const t={};let n=-1;for(;++n<e.length;)p_(t,e[n]);return t}function p_(e,t){let n;for(n in t){const a=(Sg.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let i;for(i in o){Sg.call(a,i)||(a[i]=[]);const s=o[i];f_(a[i],Array.isArray(s)?s:s?[s]:[])}}}function f_(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Ut(e,0,0,r)}const m_=/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,Mt=wn(/[A-Za-z]/),sf=wn(/\d/),h_=wn(/[\dA-Fa-f]/),nt=wn(/[\dA-Za-z]/),g_=wn(/[!-/:-@[-`{-~]/),Rg=wn(/[#-'*+\--9=?A-Z^-~]/);function lf(e){return e!==null&&(e<32||e===127)}function ht(e){return e!==null&&(e<0||e===32)}function $(e){return e!==null&&e<-2}function Se(e){return e===-2||e===-1||e===32}const b_=wn(/\s/),y_=wn(m_);function wn(e){return t;function t(n){return n!==null&&e.test(String.fromCharCode(n))}}function ae(e,t,n,r){const a=r?r-1:Number.POSITIVE_INFINITY;let o=0;return i;function i(l){return Se(l)?(e.enter(n),s(l)):t(l)}function s(l){return Se(l)&&o++<a?(e.consume(l),s):(e.exit(n),t(l))}}const v_={tokenize:E_};function E_(e){const t=e.attempt(this.parser.constructs.contentInitial,r,a);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ae(e,t,"linePrefix")}function a(s){return e.enter("paragraph"),o(s)}function o(s){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,i(s)}function i(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return $(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),i)}}const w_={tokenize:S_},Tg={tokenize:R_};function S_(e){const t=this,n=[];let r=0,a,o,i;return s;function s(p){if(r<n.length){const S=n[r];return t.containerState=S[1],e.attempt(S[0].continuation,l,u)(p)}return u(p)}function l(p){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,a&&f();const S=t.events.length;let T=S,b;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){b=t.events[T][1].end;break}h(r);let k=S;for(;k<t.events.length;)t.events[k][1].end=Object.assign({},b),k++;return Ut(t.events,T+1,0,t.events.slice(S)),t.events.length=k,u(p)}return s(p)}function u(p){if(r===n.length){if(!a)return m(p);if(a.currentConstruct&&a.currentConstruct.concrete)return E(p);t.interrupt=Boolean(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Tg,c,d)(p)}function c(p){return a&&f(),h(r),m(p)}function d(p){return t.parser.lazy[t.now().line]=r!==n.length,i=t.now().offset,E(p)}function m(p){return t.containerState={},e.attempt(Tg,g,E)(p)}function g(p){return r++,n.push([t.currentConstruct,t.containerState]),m(p)}function E(p){if(p===null){a&&f(),h(0),e.consume(p);return}return a=a||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:a}),y(p)}function y(p){if(p===null){A(e.exit("chunkFlow"),!0),h(0),e.consume(p);return}return $(p)?(e.consume(p),A(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(p),y)}function A(p,S){const T=t.sliceStream(p);if(S&&T.push(null),p.previous=o,o&&(o.next=p),o=p,a.defineSkip(p.start),a.write(T),t.parser.lazy[p.start.line]){let b=a.events.length;for(;b--;)if(a.events[b][1].start.offset<i&&(!a.events[b][1].end||a.events[b][1].end.offset>i))return;const k=t.events.length;let I=k,C,O;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){if(C){O=t.events[I][1].end;break}C=!0}for(h(r),b=k;b<t.events.length;)t.events[b][1].end=Object.assign({},O),b++;Ut(t.events,I+1,0,t.events.slice(k)),t.events.length=b}}function h(p){let S=n.length;for(;S-- >p;){const T=n[S];t.containerState=T[1],T[0].exit.call(t,e)}n.length=p}function f(){a.write([null]),o=void 0,a=void 0,t.containerState._closeFlow=void 0}}function R_(e,t,n){return ae(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function kg(e){if(e===null||ht(e)||b_(e))return 1;if(y_(e))return 2}function fm(e,t,n){const r=[];let a=-1;for(;++a<e.length;){const o=e[a].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const uf={name:"attention",tokenize:k_,resolveAll:T_};function T_(e,t){let n=-1,r,a,o,i,s,l,u,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),m=Object.assign({},e[n][1].start);Ag(d,-l),Ag(m,l),i={type:l>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},s={type:l>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:m},o={type:l>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},a={type:l>1?"strong":"emphasis",start:Object.assign({},i.start),end:Object.assign({},s.end)},e[r][1].end=Object.assign({},i.start),e[n][1].start=Object.assign({},s.end),u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=dt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=dt(u,[["enter",a,t],["enter",i,t],["exit",i,t],["enter",o,t]]),u=dt(u,fm(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=dt(u,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",a,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,u=dt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,Ut(e,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function k_(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,a=kg(r);let o;return i;function i(l){return e.enter("attentionSequence"),o=l,s(l)}function s(l){if(l===o)return e.consume(l),s;const u=e.exit("attentionSequence"),c=kg(l),d=!c||c===2&&a||n.includes(l),m=!a||a===2&&c||n.includes(r);return u._open=Boolean(o===42?d:d&&(a||!m)),u._close=Boolean(o===42?m:m&&(c||!d)),t(l)}}function Ag(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const A_={name:"autolink",tokenize:I_};function I_(e,t,n){let r=1;return a;function a(E){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(E),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(E){return Mt(E)?(e.consume(E),i):Rg(E)?u(E):n(E)}function i(E){return E===43||E===45||E===46||nt(E)?s(E):u(E)}function s(E){return E===58?(e.consume(E),l):(E===43||E===45||E===46||nt(E))&&r++<32?(e.consume(E),s):u(E)}function l(E){return E===62?(e.exit("autolinkProtocol"),g(E)):E===null||E===32||E===60||lf(E)?n(E):(e.consume(E),l)}function u(E){return E===64?(e.consume(E),r=0,c):Rg(E)?(e.consume(E),u):n(E)}function c(E){return nt(E)?d(E):n(E)}function d(E){return E===46?(e.consume(E),r=0,c):E===62?(e.exit("autolinkProtocol").type="autolinkEmail",g(E)):m(E)}function m(E){return(E===45||nt(E))&&r++<63?(e.consume(E),E===45?m:d):n(E)}function g(E){return e.enter("autolinkMarker"),e.consume(E),e.exit("autolinkMarker"),e.exit("autolink"),t}}const oi={tokenize:C_,partial:!0};function C_(e,t,n){return ae(e,r,"linePrefix");function r(a){return a===null||$(a)?t(a):n(a)}}const MT={name:"blockQuote",tokenize:__,continuation:{tokenize:x_},exit:N_};function __(e,t,n){const r=this;return a;function a(i){if(i===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),o}return n(i)}function o(i){return Se(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function x_(e,t,n){return ae(e,e.attempt(MT,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function N_(e){e.exit("blockQuote")}const FT={name:"characterEscape",tokenize:O_};function O_(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),a}function a(o){return g_(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Ig=document.createElement("i");function mm(e){const t="&"+e+";";Ig.innerHTML=t;const n=Ig.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}const PT={name:"characterReference",tokenize:L_};function L_(e,t,n){const r=this;let a=0,o,i;return s;function s(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),l}function l(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,i=nt,c(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,i=h_,c):(e.enter("characterReferenceValue"),o=7,i=sf,c(d))}function c(d){let m;return d===59&&a?(m=e.exit("characterReferenceValue"),i===nt&&!mm(r.sliceSerialize(m))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)):i(d)&&a++<o?(e.consume(d),c):n(d)}}const Cg={name:"codeFenced",tokenize:D_,concrete:!0};function D_(e,t,n){const r=this,a={tokenize:T,partial:!0},o={tokenize:S,partial:!0},i=this.events[this.events.length-1],s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0;let l=0,u;return c;function c(b){return e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u=b,d(b)}function d(b){return b===u?(e.consume(b),l++,d):(e.exit("codeFencedFenceSequence"),l<3?n(b):ae(e,m,"whitespace")(b))}function m(b){return b===null||$(b)?A(b):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||ht(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ae(e,E,"whitespace")(b)):b===96&&b===u?n(b):(e.consume(b),g)}function E(b){return b===null||$(b)?A(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===null||$(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),A(b)):b===96&&b===u?n(b):(e.consume(b),y)}function A(b){return e.exit("codeFencedFence"),r.interrupt?t(b):h(b)}function h(b){return b===null?p(b):$(b)?e.attempt(o,e.attempt(a,p,s?ae(e,h,"linePrefix",s+1):h),p)(b):(e.enter("codeFlowValue"),f(b))}function f(b){return b===null||$(b)?(e.exit("codeFlowValue"),h(b)):(e.consume(b),f)}function p(b){return e.exit("codeFenced"),t(b)}function S(b,k,I){const C=this;return O;function O(P){return b.enter("lineEnding"),b.consume(P),b.exit("lineEnding"),N}function N(P){return C.parser.lazy[C.now().line]?I(P):k(P)}}function T(b,k,I){let C=0;return ae(b,O,"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function O(B){return b.enter("codeFencedFence"),b.enter("codeFencedFenceSequence"),N(B)}function N(B){return B===u?(b.consume(B),C++,N):C<l?I(B):(b.exit("codeFencedFenceSequence"),ae(b,P,"whitespace")(B))}function P(B){return B===null||$(B)?(b.exit("codeFencedFence"),k(B)):I(B)}}}const ns={name:"codeIndented",tokenize:F_},M_={tokenize:P_,partial:!0};function F_(e,t,n){const r=this;return a;function a(u){return e.enter("codeIndented"),ae(e,o,"linePrefix",4+1)(u)}function o(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?i(u):n(u)}function i(u){return u===null?l(u):$(u)?e.attempt(M_,i,l)(u):(e.enter("codeFlowValue"),s(u))}function s(u){return u===null||$(u)?(e.exit("codeFlowValue"),i(u)):(e.consume(u),s)}function l(u){return e.exit("codeIndented"),t(u)}}function P_(e,t,n){const r=this;return a;function a(i){return r.parser.lazy[r.now().line]?n(i):$(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a):ae(e,o,"linePrefix",4+1)(i)}function o(i){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(i):$(i)?a(i):n(i)}}const U_={name:"codeText",tokenize:j_,resolve:B_,previous:q_};function B_(e){let t=e.length-4,n=3,r,a;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)a===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(a=r):(r===t||e[r][1].type==="lineEnding")&&(e[a][1].type="codeTextData",r!==a+2&&(e[a][1].end=e[r-1][1].end,e.splice(a+2,r-a-2),t-=r-a-2,r=a+2),a=void 0);return e}function q_(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function j_(e,t,n){let r=0,a,o;return i;function i(d){return e.enter("codeText"),e.enter("codeTextSequence"),s(d)}function s(d){return d===96?(e.consume(d),r++,s):(e.exit("codeTextSequence"),l(d))}function l(d){return d===null?n(d):d===96?(o=e.enter("codeTextSequence"),a=0,c(d)):d===32?(e.enter("space"),e.consume(d),e.exit("space"),l):$(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),l):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||$(d)?(e.exit("codeTextData"),l(d)):(e.consume(d),u)}function c(d){return d===96?(e.consume(d),a++,c):a===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(o.type="codeTextData",u(d))}}function UT(e){const t={};let n=-1,r,a,o,i,s,l,u;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,$_(e,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,a=void 0;o--&&(i=e[o],i[1].type==="lineEnding"||i[1].type==="lineEndingBlank");)i[0]==="enter"&&(a&&(e[a][1].type="lineEndingBlank"),i[1].type="lineEnding",a=o);a&&(r[1].end=Object.assign({},e[a][1].start),s=e.slice(a,n),s.unshift(r),Ut(e,a,n-a+1,s))}}return!u}function $_(e,t){const n=e[t][1],r=e[t][2];let a=t-1;const o=[],i=n._tokenizer||r.parser[n.contentType](n.start),s=i.events,l=[],u={};let c,d,m=-1,g=n,E=0,y=0;const A=[y];for(;g;){for(;e[++a][1]!==g;);o.push(a),g._tokenizer||(c=r.sliceStream(g),g.next||c.push(null),d&&i.defineSkip(g.start),g._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(c),g._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),d=g,g=g.next}for(g=n;++m<s.length;)s[m][0]==="exit"&&s[m-1][0]==="enter"&&s[m][1].type===s[m-1][1].type&&s[m][1].start.line!==s[m][1].end.line&&(y=m+1,A.push(y),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(i.events=[],g?(g._tokenizer=void 0,g.previous=void 0):A.pop(),m=A.length;m--;){const h=s.slice(A[m],A[m+1]),f=o.pop();l.unshift([f,f+h.length-1]),Ut(e,f,2,h)}for(m=-1;++m<l.length;)u[E+l[m][0]]=E+l[m][1],E+=l[m][1]-l[m][0]-1;return u}const z_={tokenize:W_,resolve:G_},H_={tokenize:V_,partial:!0};function G_(e){return UT(e),e}function W_(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),a(s)}function a(s){return s===null?o(s):$(s)?e.check(H_,i,o)(s):(e.consume(s),a)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function i(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,a}}function V_(e,t,n){const r=this;return a;function a(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),ae(e,o,"linePrefix")}function o(i){if(i===null||$(i))return n(i);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function BT(e,t,n,r,a,o,i,s,l){const u=l||Number.POSITIVE_INFINITY;let c=0;return d;function d(h){return h===60?(e.enter(r),e.enter(a),e.enter(o),e.consume(h),e.exit(o),m):h===null||h===41||lf(h)?n(h):(e.enter(r),e.enter(i),e.enter(s),e.enter("chunkString",{contentType:"string"}),y(h))}function m(h){return h===62?(e.enter(o),e.consume(h),e.exit(o),e.exit(a),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),g(h))}function g(h){return h===62?(e.exit("chunkString"),e.exit(s),m(h)):h===null||h===60||$(h)?n(h):(e.consume(h),h===92?E:g)}function E(h){return h===60||h===62||h===92?(e.consume(h),g):g(h)}function y(h){return h===40?++c>u?n(h):(e.consume(h),y):h===41?c--?(e.consume(h),y):(e.exit("chunkString"),e.exit(s),e.exit(i),e.exit(r),t(h)):h===null||ht(h)?c?n(h):(e.exit("chunkString"),e.exit(s),e.exit(i),e.exit(r),t(h)):lf(h)?n(h):(e.consume(h),h===92?A:y)}function A(h){return h===40||h===41||h===92?(e.consume(h),y):y(h)}}function qT(e,t,n,r,a,o){const i=this;let s=0,l;return u;function u(g){return e.enter(r),e.enter(a),e.consume(g),e.exit(a),e.enter(o),c}function c(g){return g===null||g===91||g===93&&!l||g===94&&!s&&"_hiddenFootnoteSupport"in i.parser.constructs||s>999?n(g):g===93?(e.exit(o),e.enter(a),e.consume(g),e.exit(a),e.exit(r),t):$(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(g))}function d(g){return g===null||g===91||g===93||$(g)||s++>999?(e.exit("chunkString"),c(g)):(e.consume(g),l=l||!Se(g),g===92?m:d)}function m(g){return g===91||g===92||g===93?(e.consume(g),s++,d):d(g)}}function jT(e,t,n,r,a,o){let i;return s;function s(m){return e.enter(r),e.enter(a),e.consume(m),e.exit(a),i=m===40?41:m,l}function l(m){return m===i?(e.enter(a),e.consume(m),e.exit(a),e.exit(r),t):(e.enter(o),u(m))}function u(m){return m===i?(e.exit(o),l(i)):m===null?n(m):$(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),ae(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(m))}function c(m){return m===i||m===null||$(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?d:c)}function d(m){return m===i||m===92?(e.consume(m),c):c(m)}}function aa(e,t){let n;return r;function r(a){return $(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n=!0,r):Se(a)?ae(e,r,n?"linePrefix":"lineSuffix")(a):t(a)}}function mr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Y_={name:"definition",tokenize:X_},K_={tokenize:Z_,partial:!0};function X_(e,t,n){const r=this;let a;return o;function o(l){return e.enter("definition"),qT.call(r,e,i,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(l)}function i(l){return a=mr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),l===58?(e.enter("definitionMarker"),e.consume(l),e.exit("definitionMarker"),aa(e,BT(e,e.attempt(K_,ae(e,s,"whitespace"),ae(e,s,"whitespace")),n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString"))):n(l)}function s(l){return l===null||$(l)?(e.exit("definition"),r.parser.defined.includes(a)||r.parser.defined.push(a),t(l)):n(l)}}function Z_(e,t,n){return r;function r(i){return ht(i)?aa(e,a)(i):n(i)}function a(i){return i===34||i===39||i===40?jT(e,ae(e,o,"whitespace"),n,"definitionTitle","definitionTitleMarker","definitionTitleString")(i):n(i)}function o(i){return i===null||$(i)?t(i):n(i)}}const J_={name:"hardBreakEscape",tokenize:Q_};function Q_(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.enter("escapeMarker"),e.consume(o),a}function a(o){return $(o)?(e.exit("escapeMarker"),e.exit("hardBreakEscape"),t(o)):n(o)}}const ex={name:"headingAtx",tokenize:nx,resolve:tx};function tx(e,t){let n=e.length-2,r=3,a,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(a={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Ut(e,r,n-r+1,[["enter",a,t],["enter",o,t],["exit",o,t],["exit",a,t]])),e}function nx(e,t,n){const r=this;let a=0;return o;function o(c){return e.enter("atxHeading"),e.enter("atxHeadingSequence"),i(c)}function i(c){return c===35&&a++<6?(e.consume(c),i):c===null||ht(c)?(e.exit("atxHeadingSequence"),r.interrupt?t(c):s(c)):n(c)}function s(c){return c===35?(e.enter("atxHeadingSequence"),l(c)):c===null||$(c)?(e.exit("atxHeading"),t(c)):Se(c)?ae(e,s,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function l(c){return c===35?(e.consume(c),l):(e.exit("atxHeadingSequence"),s(c))}function u(c){return c===null||c===35||ht(c)?(e.exit("atxHeadingText"),s(c)):(e.consume(c),u)}}const rx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],_g=["pre","script","style","textarea"],ax={name:"htmlFlow",tokenize:sx,resolveTo:ix,concrete:!0},ox={tokenize:lx,partial:!0};function ix(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function sx(e,t,n){const r=this;let a,o,i,s,l;return u;function u(R){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(R),c}function c(R){return R===33?(e.consume(R),d):R===47?(e.consume(R),E):R===63?(e.consume(R),a=3,r.interrupt?t:F):Mt(R)?(e.consume(R),i=String.fromCharCode(R),o=!0,y):n(R)}function d(R){return R===45?(e.consume(R),a=2,m):R===91?(e.consume(R),a=5,i="CDATA[",s=0,g):Mt(R)?(e.consume(R),a=4,r.interrupt?t:F):n(R)}function m(R){return R===45?(e.consume(R),r.interrupt?t:F):n(R)}function g(R){return R===i.charCodeAt(s++)?(e.consume(R),s===i.length?r.interrupt?t:N:g):n(R)}function E(R){return Mt(R)?(e.consume(R),i=String.fromCharCode(R),y):n(R)}function y(R){return R===null||R===47||R===62||ht(R)?R!==47&&o&&_g.includes(i.toLowerCase())?(a=1,r.interrupt?t(R):N(R)):rx.includes(i.toLowerCase())?(a=6,R===47?(e.consume(R),A):r.interrupt?t(R):N(R)):(a=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(R):o?f(R):h(R)):R===45||nt(R)?(e.consume(R),i+=String.fromCharCode(R),y):n(R)}function A(R){return R===62?(e.consume(R),r.interrupt?t:N):n(R)}function h(R){return Se(R)?(e.consume(R),h):C(R)}function f(R){return R===47?(e.consume(R),C):R===58||R===95||Mt(R)?(e.consume(R),p):Se(R)?(e.consume(R),f):C(R)}function p(R){return R===45||R===46||R===58||R===95||nt(R)?(e.consume(R),p):S(R)}function S(R){return R===61?(e.consume(R),T):Se(R)?(e.consume(R),S):f(R)}function T(R){return R===null||R===60||R===61||R===62||R===96?n(R):R===34||R===39?(e.consume(R),l=R,b):Se(R)?(e.consume(R),T):(l=null,k(R))}function b(R){return R===null||$(R)?n(R):R===l?(e.consume(R),I):(e.consume(R),b)}function k(R){return R===null||R===34||R===39||R===60||R===61||R===62||R===96||ht(R)?S(R):(e.consume(R),k)}function I(R){return R===47||R===62||Se(R)?f(R):n(R)}function C(R){return R===62?(e.consume(R),O):n(R)}function O(R){return Se(R)?(e.consume(R),O):R===null||$(R)?N(R):n(R)}function N(R){return R===45&&a===2?(e.consume(R),K):R===60&&a===1?(e.consume(R),X):R===62&&a===4?(e.consume(R),M):R===63&&a===3?(e.consume(R),F):R===93&&a===5?(e.consume(R),x):$(R)&&(a===6||a===7)?e.check(ox,M,P)(R):R===null||$(R)?P(R):(e.consume(R),N)}function P(R){return e.exit("htmlFlowData"),B(R)}function B(R){return R===null?w(R):$(R)?e.attempt({tokenize:V,partial:!0},B,w)(R):(e.enter("htmlFlowData"),N(R))}function V(R,pe,ee){return be;function be(oe){return R.enter("lineEnding"),R.consume(oe),R.exit("lineEnding"),G}function G(oe){return r.parser.lazy[r.now().line]?ee(oe):pe(oe)}}function K(R){return R===45?(e.consume(R),F):N(R)}function X(R){return R===47?(e.consume(R),i="",J):N(R)}function J(R){return R===62&&_g.includes(i.toLowerCase())?(e.consume(R),M):Mt(R)&&i.length<8?(e.consume(R),i+=String.fromCharCode(R),J):N(R)}function x(R){return R===93?(e.consume(R),F):N(R)}function F(R){return R===62?(e.consume(R),M):R===45&&a===2?(e.consume(R),F):N(R)}function M(R){return R===null||$(R)?(e.exit("htmlFlowData"),w(R)):(e.consume(R),M)}function w(R){return e.exit("htmlFlow"),t(R)}}function lx(e,t,n){return r;function r(a){return e.exit("htmlFlowData"),e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),e.attempt(oi,t,n)}}const ux={name:"htmlText",tokenize:cx};function cx(e,t,n){const r=this;let a,o,i,s;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),u}function u(w){return w===33?(e.consume(w),c):w===47?(e.consume(w),k):w===63?(e.consume(w),T):Mt(w)?(e.consume(w),O):n(w)}function c(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),o="CDATA[",i=0,A):Mt(w)?(e.consume(w),S):n(w)}function d(w){return w===45?(e.consume(w),m):n(w)}function m(w){return w===null||w===62?n(w):w===45?(e.consume(w),g):E(w)}function g(w){return w===null||w===62?n(w):E(w)}function E(w){return w===null?n(w):w===45?(e.consume(w),y):$(w)?(s=E,x(w)):(e.consume(w),E)}function y(w){return w===45?(e.consume(w),M):E(w)}function A(w){return w===o.charCodeAt(i++)?(e.consume(w),i===o.length?h:A):n(w)}function h(w){return w===null?n(w):w===93?(e.consume(w),f):$(w)?(s=h,x(w)):(e.consume(w),h)}function f(w){return w===93?(e.consume(w),p):h(w)}function p(w){return w===62?M(w):w===93?(e.consume(w),p):h(w)}function S(w){return w===null||w===62?M(w):$(w)?(s=S,x(w)):(e.consume(w),S)}function T(w){return w===null?n(w):w===63?(e.consume(w),b):$(w)?(s=T,x(w)):(e.consume(w),T)}function b(w){return w===62?M(w):T(w)}function k(w){return Mt(w)?(e.consume(w),I):n(w)}function I(w){return w===45||nt(w)?(e.consume(w),I):C(w)}function C(w){return $(w)?(s=C,x(w)):Se(w)?(e.consume(w),C):M(w)}function O(w){return w===45||nt(w)?(e.consume(w),O):w===47||w===62||ht(w)?N(w):n(w)}function N(w){return w===47?(e.consume(w),M):w===58||w===95||Mt(w)?(e.consume(w),P):$(w)?(s=N,x(w)):Se(w)?(e.consume(w),N):M(w)}function P(w){return w===45||w===46||w===58||w===95||nt(w)?(e.consume(w),P):B(w)}function B(w){return w===61?(e.consume(w),V):$(w)?(s=B,x(w)):Se(w)?(e.consume(w),B):N(w)}function V(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),a=w,K):$(w)?(s=V,x(w)):Se(w)?(e.consume(w),V):(e.consume(w),a=void 0,J)}function K(w){return w===a?(e.consume(w),X):w===null?n(w):$(w)?(s=K,x(w)):(e.consume(w),K)}function X(w){return w===62||w===47||ht(w)?N(w):n(w)}function J(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===62||ht(w)?N(w):(e.consume(w),J)}function x(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),ae(e,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function F(w){return e.enter("htmlTextData"),s(w)}function M(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}}const hm={name:"labelEnd",tokenize:gx,resolveTo:hx,resolveAll:mx},dx={tokenize:bx},px={tokenize:yx},fx={tokenize:vx};function mx(e){let t=-1,n;for(;++t<e.length;)n=e[t][1],(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++);return e}function hx(e,t){let n=e.length,r=0,a,o,i,s;for(;n--;)if(a=e[n][1],o){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;e[n][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(o=n,a.type!=="labelLink")){r=2;break}}else a.type==="labelEnd"&&(i=n);const l={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},u={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[i][1].end)},c={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[i-2][1].start)};return s=[["enter",l,t],["enter",u,t]],s=dt(s,e.slice(o+1,o+r+3)),s=dt(s,[["enter",c,t]]),s=dt(s,fm(t.parser.constructs.insideSpan.null,e.slice(o+r+4,i-3),t)),s=dt(s,[["exit",c,t],e[i-2],e[i-1],["exit",u,t]]),s=dt(s,e.slice(i+1)),s=dt(s,[["exit",l,t]]),Ut(e,o,e.length,s),e}function gx(e,t,n){const r=this;let a=r.events.length,o,i;for(;a--;)if((r.events[a][1].type==="labelImage"||r.events[a][1].type==="labelLink")&&!r.events[a][1]._balanced){o=r.events[a][1];break}return s;function s(c){return o?o._inactive?u(c):(i=r.parser.defined.includes(mr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelEnd"),l):n(c)}function l(c){return c===40?e.attempt(dx,t,i?t:u)(c):c===91?e.attempt(px,t,i?e.attempt(fx,t,u):u)(c):i?t(c):u(c)}function u(c){return o._balanced=!0,n(c)}}function bx(e,t,n){return r;function r(l){return e.enter("resource"),e.enter("resourceMarker"),e.consume(l),e.exit("resourceMarker"),aa(e,a)}function a(l){return l===41?s(l):BT(e,o,n,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(l)}function o(l){return ht(l)?aa(e,i)(l):s(l)}function i(l){return l===34||l===39||l===40?jT(e,aa(e,s),n,"resourceTitle","resourceTitleMarker","resourceTitleString")(l):s(l)}function s(l){return l===41?(e.enter("resourceMarker"),e.consume(l),e.exit("resourceMarker"),e.exit("resource"),t):n(l)}}function yx(e,t,n){const r=this;return a;function a(i){return qT.call(r,e,o,n,"reference","referenceMarker","referenceString")(i)}function o(i){return r.parser.defined.includes(mr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(i):n(i)}}function vx(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),a}function a(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Ex={name:"labelStartImage",tokenize:wx,resolveAll:hm.resolveAll};function wx(e,t,n){const r=this;return a;function a(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),i):n(s)}function i(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Sx={name:"labelStartLink",tokenize:Rx,resolveAll:hm.resolveAll};function Rx(e,t,n){const r=this;return a;function a(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),o}function o(i){return i===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(i):t(i)}}const rs={name:"lineEnding",tokenize:Tx};function Tx(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ae(e,t,"linePrefix")}}const mo={name:"thematicBreak",tokenize:kx};function kx(e,t,n){let r=0,a;return o;function o(l){return e.enter("thematicBreak"),a=l,i(l)}function i(l){return l===a?(e.enter("thematicBreakSequence"),s(l)):Se(l)?ae(e,i,"whitespace")(l):r<3||l!==null&&!$(l)?n(l):(e.exit("thematicBreak"),t(l))}function s(l){return l===a?(e.consume(l),r++,s):(e.exit("thematicBreakSequence"),i(l))}}const We={name:"list",tokenize:Cx,continuation:{tokenize:_x},exit:Nx},Ax={tokenize:Ox,partial:!0},Ix={tokenize:xx,partial:!0};function Cx(e,t,n){const r=this,a=r.events[r.events.length-1];let o=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,i=0;return s;function s(g){const E=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(E==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:sf(g)){if(r.containerState.type||(r.containerState.type=E,e.enter(E,{_container:!0})),E==="listUnordered")return e.enter("listItemPrefix"),g===42||g===45?e.check(mo,n,u)(g):u(g);if(!r.interrupt||g===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(g)}return n(g)}function l(g){return sf(g)&&++i<10?(e.consume(g),l):(!r.interrupt||i<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(e.exit("listItemValue"),u(g)):n(g)}function u(g){return e.enter("listItemMarker"),e.consume(g),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,e.check(oi,r.interrupt?n:c,e.attempt(Ax,m,d))}function c(g){return r.containerState.initialBlankLine=!0,o++,m(g)}function d(g){return Se(g)?(e.enter("listItemPrefixWhitespace"),e.consume(g),e.exit("listItemPrefixWhitespace"),m):n(g)}function m(g){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(g)}}function _x(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(oi,a,o);function a(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ae(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!Se(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,i(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Ix,t,i)(s))}function i(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,ae(e,e.attempt(We,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function xx(e,t,n){const r=this;return ae(e,a,"listItemIndent",r.containerState.size+1);function a(o){const i=r.events[r.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(o):n(o)}}function Nx(e){e.exit(this.containerState.type)}function Ox(e,t,n){const r=this;return ae(e,a,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function a(o){const i=r.events[r.events.length-1];return!Se(o)&&i&&i[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const xg={name:"setextUnderline",tokenize:Dx,resolveTo:Lx};function Lx(e,t){let n=e.length,r,a,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(a=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const i={type:"setextHeading",start:Object.assign({},e[a][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[a][1].type="setextHeadingText",o?(e.splice(a,0,["enter",i,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=i,e.push(["exit",i,t]),e}function Dx(e,t,n){const r=this;let a=r.events.length,o,i;for(;a--;)if(r.events[a][1].type!=="lineEnding"&&r.events[a][1].type!=="linePrefix"&&r.events[a][1].type!=="content"){i=r.events[a][1].type==="paragraph";break}return s;function s(c){return!r.parser.lazy[r.now().line]&&(r.interrupt||i)?(e.enter("setextHeadingLine"),e.enter("setextHeadingLineSequence"),o=c,l(c)):n(c)}function l(c){return c===o?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),ae(e,u,"lineSuffix")(c))}function u(c){return c===null||$(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Mx={tokenize:Fx};function Fx(e){const t=this,n=e.attempt(oi,r,e.attempt(this.parser.constructs.flowInitial,a,ae(e,e.attempt(this.parser.constructs.flow,a,e.attempt(z_,a)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function a(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Px={resolveAll:zT()},Ux=$T("string"),Bx=$T("text");function $T(e){return{tokenize:t,resolveAll:zT(e==="text"?qx:void 0)};function t(n){const r=this,a=this.parser.constructs[e],o=n.attempt(a,i,s);return i;function i(c){return u(c)?o(c):s(c)}function s(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),l}function l(c){return u(c)?(n.exit("data"),o(c)):(n.consume(c),l)}function u(c){if(c===null)return!0;const d=a[c];let m=-1;if(d)for(;++m<d.length;){const g=d[m];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function zT(e){return t;function t(n,r){let a=-1,o;for(;++a<=n.length;)o===void 0?n[a]&&n[a][1].type==="data"&&(o=a,a++):(!n[a]||n[a][1].type!=="data")&&(a!==o+2&&(n[o][1].end=n[a-1][1].end,n.splice(o+2,a-o-2),a=o+2),o=void 0);return e?e(n,r):n}}function qx(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],a=t.sliceStream(r);let o=a.length,i=-1,s=0,l;for(;o--;){const u=a[o];if(typeof u=="string"){for(i=u.length;u.charCodeAt(i-1)===32;)s++,i--;if(i)break;i=-1}else if(u===-2)l=!0,s++;else if(u!==-1){o++;break}}if(s){const u={type:n===e.length||l||s<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-s,offset:r.end.offset-s,_index:r.start._index+o,_bufferIndex:o?i:r.start._bufferIndex+i},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}function jx(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const a={},o=[];let i=[],s=[];const l={consume:f,enter:p,exit:S,attempt:k(T),check:k(b),interrupt:k(b,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:g,sliceSerialize:m,now:E,defineSkip:y,write:d};let c=t.tokenize.call(u,l);return t.resolveAll&&o.push(t),u;function d(N){return i=dt(i,N),A(),i[i.length-1]!==null?[]:(I(t,0),u.events=fm(o,u.events,u),u.events)}function m(N,P){return zx(g(N),P)}function g(N){return $x(i,N)}function E(){return Object.assign({},r)}function y(N){a[N.line]=N.column,O()}function A(){let N;for(;r._index<i.length;){const P=i[r._index];if(typeof P=="string")for(N=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===N&&r._bufferIndex<P.length;)h(P.charCodeAt(r._bufferIndex));else h(P)}}function h(N){c=c(N)}function f(N){$(N)?(r.line++,r.column=1,r.offset+=N===-3?2:1,O()):N!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===i[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=N}function p(N,P){const B=P||{};return B.type=N,B.start=E(),u.events.push(["enter",B,u]),s.push(B),B}function S(N){const P=s.pop();return P.end=E(),u.events.push(["exit",P,u]),P}function T(N,P){I(N,P.from)}function b(N,P){P.restore()}function k(N,P){return B;function B(V,K,X){let J,x,F,M;return Array.isArray(V)?R(V):"tokenize"in V?R([V]):w(V);function w(G){return oe;function oe(Be){const qt=Be!==null&&G[Be],_t=Be!==null&&G.null,Qt=[...Array.isArray(qt)?qt:qt?[qt]:[],...Array.isArray(_t)?_t:_t?[_t]:[]];return R(Qt)(Be)}}function R(G){return J=G,x=0,G.length===0?X:pe(G[x])}function pe(G){return oe;function oe(Be){return M=C(),F=G,G.partial||(u.currentConstruct=G),G.name&&u.parser.constructs.disable.null.includes(G.name)?be():G.tokenize.call(P?Object.assign(Object.create(u),P):u,l,ee,be)(Be)}}function ee(G){return N(F,M),K}function be(G){return M.restore(),++x<J.length?pe(J[x]):X}}}function I(N,P){N.resolveAll&&!o.includes(N)&&o.push(N),N.resolve&&Ut(u.events,P,u.events.length-P,N.resolve(u.events.slice(P),u)),N.resolveTo&&(u.events=N.resolveTo(u.events,u))}function C(){const N=E(),P=u.previous,B=u.currentConstruct,V=u.events.length,K=Array.from(s);return{restore:X,from:V};function X(){r=N,u.previous=P,u.currentConstruct=B,u.events.length=V,s=K,O()}}function O(){r.line in a&&r.column<2&&(r.column=a[r.line],r.offset+=a[r.line]-1)}}function $x(e,t){const n=t.start._index,r=t.start._bufferIndex,a=t.end._index,o=t.end._bufferIndex;let i;return n===a?i=[e[n].slice(r,o)]:(i=e.slice(n,a),r>-1&&(i[0]=i[0].slice(r)),o>0&&i.push(e[a].slice(0,o))),i}function zx(e,t){let n=-1;const r=[];let a;for(;++n<e.length;){const o=e[n];let i;if(typeof o=="string")i=o;else switch(o){case-5:{i="\r";break}case-4:{i=`
`;break}case-3:{i=`\r
`;break}case-2:{i=t?" ":"	";break}case-1:{if(!t&&a)continue;i=" ";break}default:i=String.fromCharCode(o)}a=o===-2,r.push(i)}return r.join("")}const Hx={[42]:We,[43]:We,[45]:We,[48]:We,[49]:We,[50]:We,[51]:We,[52]:We,[53]:We,[54]:We,[55]:We,[56]:We,[57]:We,[62]:MT},Gx={[91]:Y_},Wx={[-2]:ns,[-1]:ns,[32]:ns},Vx={[35]:ex,[42]:mo,[45]:[xg,mo],[60]:ax,[61]:xg,[95]:mo,[96]:Cg,[126]:Cg},Yx={[38]:PT,[92]:FT},Kx={[-5]:rs,[-4]:rs,[-3]:rs,[33]:Ex,[38]:PT,[42]:uf,[60]:[A_,ux],[91]:Sx,[92]:[J_,FT],[93]:hm,[95]:uf,[96]:U_},Xx={null:[uf,Px]},Zx={null:[42,95]},Jx={null:[]},Qx=Object.freeze(Object.defineProperty({__proto__:null,document:Hx,contentInitial:Gx,flowInitial:Wx,flow:Vx,string:Yx,text:Kx,insideSpan:Xx,attentionMarkers:Zx,disable:Jx},Symbol.toStringTag,{value:"Module"}));function eN(e={}){const t=d_([Qx].concat(e.extensions||[])),n={defined:[],lazy:{},constructs:t,content:r(v_),document:r(w_),flow:r(Mx),string:r(Ux),text:r(Bx)};return n;function r(a){return o;function o(i){return jx(n,a,i)}}}const Ng=/[\0\t\n\r]/g;function tN(){let e=1,t="",n=!0,r;return a;function a(o,i,s){const l=[];let u,c,d,m,g;for(o=t+o.toString(i),d=0,t="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(Ng.lastIndex=d,u=Ng.exec(o),m=u&&u.index!==void 0?u.index:o.length,g=o.charCodeAt(m),!u){t=o.slice(d);break}if(g===10&&d===m&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),d<m&&(l.push(o.slice(d,m)),e+=m-d),g){case 0:{l.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,l.push(-2);e++<c;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}d=m+1}return s&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}function nN(e){for(;!UT(e););return e}function HT(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCharCode(n)}const rN=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function aN(e){return e.replace(rN,oN)}function oN(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),o=a===120||a===88;return HT(n.slice(o?2:1),o?16:10)}return mm(n)||e}const cf={}.hasOwnProperty,iN=function(e,t,n){return typeof t!="string"&&(n=t,t=void 0),sN(n)(nN(eN(n).document().write(tN()(e,t,!0))))};function sN(e={}){const t=GT({transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(Vm),autolinkProtocol:P,autolinkEmail:P,atxHeading:l(Hm),blockQuote:l(Si),characterEscape:P,characterReference:P,codeFenced:l(zn),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:l(zn,u),codeText:l(Zk,u),codeTextData:P,data:P,codeFlowValue:P,definition:l(Jk),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:l(Qk),hardBreakEscape:l(Gm),hardBreakTrailing:l(Gm),htmlFlow:l(Wm,u),htmlFlowData:P,htmlText:l(Wm,u),htmlTextData:P,image:l(eA),label:u,link:l(Vm),listItem:l(tA),listItemValue:y,listOrdered:l(Ym,E),listUnordered:l(Ym),paragraph:l(nA),reference:G,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:l(Hm),strong:l(rA),thematicBreak:l(oA)},exit:{atxHeading:d(),atxHeadingSequence:I,autolink:d(),autolinkEmail:Qt,autolinkProtocol:_t,blockQuote:d(),characterEscapeValue:B,characterReferenceMarkerHexadecimal:Be,characterReferenceMarkerNumeric:Be,characterReferenceValue:qt,codeFenced:d(p),codeFencedFence:f,codeFencedFenceInfo:A,codeFencedFenceMeta:h,codeFlowValue:B,codeIndented:d(S),codeText:d(x),codeTextData:B,data:B,definition:d(),definitionDestinationString:k,definitionLabelString:T,definitionTitleString:b,emphasis:d(),hardBreakEscape:d(K),hardBreakTrailing:d(K),htmlFlow:d(X),htmlFlowData:B,htmlText:d(J),htmlTextData:B,image:d(M),label:R,labelText:w,lineEnding:V,link:d(F),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:oe,resourceDestinationString:pe,resourceTitleString:ee,resource:be,setextHeading:d(N),setextHeadingLineSequence:O,setextHeadingText:C,strong:d(),thematicBreak:d()}},e.mdastExtensions||[]),n={};return r;function r(_){let U={type:"root",children:[]};const z=[U],re=[],st=[],_r={stack:z,tokenStack:re,config:t,enter:c,exit:m,buffer:u,resume:g,setData:o,getData:i};let se=-1;for(;++se<_.length;)if(_[se][1].type==="listOrdered"||_[se][1].type==="listUnordered")if(_[se][0]==="enter")st.push(se);else{const xe=st.pop();se=a(_,xe,se)}for(se=-1;++se<_.length;){const xe=t[_[se][0]];cf.call(xe,_[se][1].type)&&xe[_[se][1].type].call(Object.assign({sliceSerialize:_[se][2].sliceSerialize},_r),_[se][1])}if(re.length>0){const xe=re[re.length-1];(xe[1]||Og).call(_r,void 0,xe[0])}for(U.position={start:s(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:s(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},se=-1;++se<t.transforms.length;)U=t.transforms[se](U)||U;return U}function a(_,U,z){let re=U-1,st=-1,_r=!1,se,xe,Hn,xr;for(;++re<=z;){const ve=_[re];if(ve[1].type==="listUnordered"||ve[1].type==="listOrdered"||ve[1].type==="blockQuote"?(ve[0]==="enter"?st++:st--,xr=void 0):ve[1].type==="lineEndingBlank"?ve[0]==="enter"&&(se&&!xr&&!st&&!Hn&&(Hn=re),xr=void 0):ve[1].type==="linePrefix"||ve[1].type==="listItemValue"||ve[1].type==="listItemMarker"||ve[1].type==="listItemPrefix"||ve[1].type==="listItemPrefixWhitespace"||(xr=void 0),!st&&ve[0]==="enter"&&ve[1].type==="listItemPrefix"||st===-1&&ve[0]==="exit"&&(ve[1].type==="listUnordered"||ve[1].type==="listOrdered")){if(se){let Ri=re;for(xe=void 0;Ri--;){const jt=_[Ri];if(jt[1].type==="lineEnding"||jt[1].type==="lineEndingBlank"){if(jt[0]==="exit")continue;xe&&(_[xe][1].type="lineEndingBlank",_r=!0),jt[1].type="lineEnding",xe=Ri}else if(!(jt[1].type==="linePrefix"||jt[1].type==="blockQuotePrefix"||jt[1].type==="blockQuotePrefixWhitespace"||jt[1].type==="blockQuoteMarker"||jt[1].type==="listItemIndent"))break}Hn&&(!xe||Hn<xe)&&(se._spread=!0),se.end=Object.assign({},xe?_[xe][1].start:ve[1].end),_.splice(xe||re,0,["exit",se,ve[2]]),re++,z++}ve[1].type==="listItemPrefix"&&(se={type:"listItem",_spread:!1,start:Object.assign({},ve[1].start)},_.splice(re,0,["enter",se,ve[2]]),re++,z++,Hn=void 0,xr=!0)}}return _[U][1]._spread=_r,z}function o(_,U){n[_]=U}function i(_){return n[_]}function s(_){return{line:_.line,column:_.column,offset:_.offset}}function l(_,U){return z;function z(re){c.call(this,_(re),re),U&&U.call(this,re)}}function u(){this.stack.push({type:"fragment",children:[]})}function c(_,U,z){return this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([U,z]),_.position={start:s(U.start)},_}function d(_){return U;function U(z){_&&_.call(this,z),m.call(this,z)}}function m(_,U){const z=this.stack.pop(),re=this.tokenStack.pop();if(re)re[0].type!==_.type&&(U?U.call(this,_,re[0]):(re[1]||Og).call(this,_,re[0]));else throw new Error("Cannot close `"+_.type+"` ("+ra({start:_.start,end:_.end})+"): it\u2019s not open");return z.position.end=s(_.end),z}function g(){return c_(this.stack.pop())}function E(){o("expectingFirstListItemValue",!0)}function y(_){if(i("expectingFirstListItemValue")){const U=this.stack[this.stack.length-2];U.start=Number.parseInt(this.sliceSerialize(_),10),o("expectingFirstListItemValue")}}function A(){const _=this.resume(),U=this.stack[this.stack.length-1];U.lang=_}function h(){const _=this.resume(),U=this.stack[this.stack.length-1];U.meta=_}function f(){i("flowCodeInside")||(this.buffer(),o("flowCodeInside",!0))}function p(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),o("flowCodeInside")}function S(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_.replace(/(\r?\n|\r)$/g,"")}function T(_){const U=this.resume(),z=this.stack[this.stack.length-1];z.label=U,z.identifier=mr(this.sliceSerialize(_)).toLowerCase()}function b(){const _=this.resume(),U=this.stack[this.stack.length-1];U.title=_}function k(){const _=this.resume(),U=this.stack[this.stack.length-1];U.url=_}function I(_){const U=this.stack[this.stack.length-1];if(!U.depth){const z=this.sliceSerialize(_).length;U.depth=z}}function C(){o("setextHeadingSlurpLineEnding",!0)}function O(_){const U=this.stack[this.stack.length-1];U.depth=this.sliceSerialize(_).charCodeAt(0)===61?1:2}function N(){o("setextHeadingSlurpLineEnding")}function P(_){const U=this.stack[this.stack.length-1];let z=U.children[U.children.length-1];(!z||z.type!=="text")&&(z=aA(),z.position={start:s(_.start)},U.children.push(z)),this.stack.push(z)}function B(_){const U=this.stack.pop();U.value+=this.sliceSerialize(_),U.position.end=s(_.end)}function V(_){const U=this.stack[this.stack.length-1];if(i("atHardBreak")){const z=U.children[U.children.length-1];z.position.end=s(_.end),o("atHardBreak");return}!i("setextHeadingSlurpLineEnding")&&t.canContainEols.includes(U.type)&&(P.call(this,_),B.call(this,_))}function K(){o("atHardBreak",!0)}function X(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_}function J(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_}function x(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_}function F(){const _=this.stack[this.stack.length-1];i("inReference")?(_.type+="Reference",_.referenceType=i("referenceType")||"shortcut",delete _.url,delete _.title):(delete _.identifier,delete _.label),o("referenceType")}function M(){const _=this.stack[this.stack.length-1];i("inReference")?(_.type+="Reference",_.referenceType=i("referenceType")||"shortcut",delete _.url,delete _.title):(delete _.identifier,delete _.label),o("referenceType")}function w(_){const U=this.stack[this.stack.length-2],z=this.sliceSerialize(_);U.label=aN(z),U.identifier=mr(z).toLowerCase()}function R(){const _=this.stack[this.stack.length-1],U=this.resume(),z=this.stack[this.stack.length-1];o("inReference",!0),z.type==="link"?z.children=_.children:z.alt=U}function pe(){const _=this.resume(),U=this.stack[this.stack.length-1];U.url=_}function ee(){const _=this.resume(),U=this.stack[this.stack.length-1];U.title=_}function be(){o("inReference")}function G(){o("referenceType","collapsed")}function oe(_){const U=this.resume(),z=this.stack[this.stack.length-1];z.label=U,z.identifier=mr(this.sliceSerialize(_)).toLowerCase(),o("referenceType","full")}function Be(_){o("characterReferenceType",_.type)}function qt(_){const U=this.sliceSerialize(_),z=i("characterReferenceType");let re;z?(re=HT(U,z==="characterReferenceMarkerNumeric"?10:16),o("characterReferenceType")):re=mm(U);const st=this.stack.pop();st.value+=re,st.position.end=s(_.end)}function _t(_){B.call(this,_);const U=this.stack[this.stack.length-1];U.url=this.sliceSerialize(_)}function Qt(_){B.call(this,_);const U=this.stack[this.stack.length-1];U.url="mailto:"+this.sliceSerialize(_)}function Si(){return{type:"blockquote",children:[]}}function zn(){return{type:"code",lang:null,meta:null,value:""}}function Zk(){return{type:"inlineCode",value:""}}function Jk(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Qk(){return{type:"emphasis",children:[]}}function Hm(){return{type:"heading",depth:void 0,children:[]}}function Gm(){return{type:"break"}}function Wm(){return{type:"html",value:""}}function eA(){return{type:"image",title:null,url:"",alt:null}}function Vm(){return{type:"link",title:null,url:"",children:[]}}function Ym(_){return{type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function tA(_){return{type:"listItem",spread:_._spread,checked:null,children:[]}}function nA(){return{type:"paragraph",children:[]}}function rA(){return{type:"strong",children:[]}}function aA(){return{type:"text",value:""}}function oA(){return{type:"thematicBreak"}}}function GT(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?GT(e,r):lN(e,r)}return e}function lN(e,t){let n;for(n in t)if(cf.call(t,n)){const r=n==="canContainEols"||n==="transforms",o=(cf.call(e,n)?e[n]:void 0)||(e[n]=r?[]:{}),i=t[n];i&&(r?e[n]=[...o,...i]:Object.assign(o,i))}}function Og(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ra({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ra({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ra({start:t.start,end:t.end})+") is still open")}function uN(e){Object.assign(this,{Parser:n=>{const r=this.data("settings");return iN(n,Object.assign({},r,e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}var Ie=function(e,t,n){var r={type:String(e)};return n==null&&(typeof t=="string"||Array.isArray(t))?n=t:Object.assign(r,t),Array.isArray(n)?r.children=n:n!=null&&(r.value=String(n)),r};const ho={}.hasOwnProperty;function cN(e,t){const n=t.data||{};return"value"in t&&!(ho.call(n,"hName")||ho.call(n,"hProperties")||ho.call(n,"hChildren"))?e.augment(t,Ie("text",t.value)):e(t,"div",Ue(e,t))}function WT(e,t,n){const r=t&&t.type;let a;if(!r)throw new Error("Expected node, got `"+t+"`");return ho.call(e.handlers,r)?a=e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?a=dN:a=e.unknownHandler,(typeof a=="function"?a:cN)(e,t,n)}function dN(e,t){return"children"in t?{...t,children:Ue(e,t)}:t}function Ue(e,t){const n=[];if("children"in t){const r=t.children;let a=-1;for(;++a<r.length;){const o=WT(e,r[a],t);if(o){if(a&&r[a-1].type==="break"&&(!Array.isArray(o)&&o.type==="text"&&(o.value=o.value.replace(/^\s+/,"")),!Array.isArray(o)&&o.type==="element")){const i=o.children[0];i&&i.type==="text"&&(i.value=i.value.replace(/^\s+/,""))}Array.isArray(o)?n.push(...o):n.push(o)}}}return n}const VT=function(e){if(e==null)return hN;if(typeof e=="string")return mN(e);if(typeof e=="object")return Array.isArray(e)?pN(e):fN(e);if(typeof e=="function")return ii(e);throw new Error("Expected function, string, or object as test")};function pN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=VT(e[n]);return ii(r);function r(...a){let o=-1;for(;++o<t.length;)if(t[o].call(this,...a))return!0;return!1}}function fN(e){return ii(t);function t(n){let r;for(r in e)if(n[r]!==e[r])return!1;return!0}}function mN(e){return ii(t);function t(n){return n&&n.type===e}}function ii(e){return t;function t(...n){return Boolean(e.call(this,...n))}}function hN(){return!0}const gN=!0,bN="skip",Lg=!1,yN=function(e,t,n,r){typeof t=="function"&&typeof n!="function"&&(r=n,n=t,t=null);const a=VT(t),o=r?-1:1;i(e,null,[])();function i(s,l,u){const c=typeof s=="object"&&s!==null?s:{};let d;return typeof c.type=="string"&&(d=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0,Object.defineProperty(m,"name",{value:"node ("+(c.type+(d?"<"+d+">":""))+")"})),m;function m(){let g=[],E,y,A;if((!t||a(s,l,u[u.length-1]||null))&&(g=vN(n(s,u)),g[0]===Lg))return g;if(s.children&&g[0]!==bN)for(y=(r?s.children.length:-1)+o,A=u.concat(s);y>-1&&y<s.children.length;){if(E=i(s.children[y],y,A)(),E[0]===Lg)return E;y=typeof E[1]=="number"?E[1]:y+o}return g}}};function vN(e){return Array.isArray(e)?e:typeof e=="number"?[gN,e]:[e]}const gm=function(e,t,n,r){typeof t=="function"&&typeof n!="function"&&(r=n,n=t,t=null),yN(e,t,a,r);function a(o,i){const s=i[i.length-1];return n(o,s?s.children.indexOf(o):null,s)}},YT=XT("start"),KT=XT("end");function XT(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function EN(e){return!e||!e.position||!e.position.start||!e.position.start.line||!e.position.start.column||!e.position.end||!e.position.end.line||!e.position.end.column}const Dg={}.hasOwnProperty;function wN(e){const t=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return gm(e,"definition",r=>{const a=Mg(r.identifier);a&&!Dg.call(t,a)&&(t[a]=r)}),n;function n(r){const a=Mg(r);return a&&Dg.call(t,a)?t[a]:null}}function Mg(e){return String(e||"").toUpperCase()}function Ar(e){const t=[];let n=-1,r=0,a=0;for(;++n<e.length;){const o=e.charCodeAt(n);let i="";if(o===37&&nt(e.charCodeAt(n+1))&&nt(e.charCodeAt(n+2)))a=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(i=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(i=String.fromCharCode(o,s),a=1):i="\uFFFD"}else i=String.fromCharCode(o);i&&(t.push(e.slice(r,n),encodeURIComponent(i)),r=n+a+1,i=""),a&&(n+=a,a=0)}return t.join("")+e.slice(r)}function Wt(e,t){const n=[];let r=-1;for(t&&n.push(Ie("text",`
`));++r<e.length;)r&&n.push(Ie("text",`
`)),n.push(e[r]);return t&&e.length>0&&n.push(Ie("text",`
`)),n}function SN(e){let t=-1;const n=[];for(;++t<e.footnoteOrder.length;){const r=e.footnoteById[e.footnoteOrder[t].toUpperCase()];if(!r)continue;const a=Ue(e,r),o=String(r.identifier),i=Ar(o.toLowerCase());let s=0;const l=[];for(;++s<=e.footnoteCounts[o];){const d={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"\u21A9"}]};s>1&&d.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(s)}]}),l.length>0&&l.push({type:"text",value:" "}),l.push(d)}const u=a[a.length-1];if(u&&u.type==="element"&&u.tagName==="p"){const d=u.children[u.children.length-1];d&&d.type==="text"?d.value+=" ":u.children.push({type:"text",value:" "}),u.children.push(...l)}else a.push(...l);const c={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+i},children:Wt(a,!0)};r.position&&(c.position=r.position),n.push(c)}return n.length===0?null:{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[Ie("text",e.footnoteLabel)]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:Wt(n,!0)},{type:"text",value:`
`}]}}function RN(e,t){return e(t,"blockquote",Wt(Ue(e,t),!0))}function TN(e,t){return[e(t,"br"),Ie("text",`
`)]}function kN(e,t){const n=t.value?t.value+`
`:"",r=t.lang&&t.lang.match(/^[^ \t]+(?=[ \t]|$)/),a={};r&&(a.className=["language-"+r]);const o=e(t,"code",a,[Ie("text",n)]);return t.meta&&(o.data={meta:t.meta}),e(t.position,"pre",[o])}function AN(e,t){return e(t,"del",Ue(e,t))}function IN(e,t){return e(t,"em",Ue(e,t))}function ZT(e,t){const n=String(t.identifier),r=Ar(n.toLowerCase()),a=e.footnoteOrder.indexOf(n);let o;a===-1?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,o=e.footnoteOrder.length):(e.footnoteCounts[n]++,o=a+1);const i=e.footnoteCounts[n];return e(t,"sup",[e(t.position,"a",{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(i>1?"-"+i:""),dataFootnoteRef:!0,ariaDescribedBy:"footnote-label"},[Ie("text",String(o))])])}function CN(e,t){const n=e.footnoteById;let r=1;for(;r in n;)r++;const a=String(r);return n[a]={type:"footnoteDefinition",identifier:a,children:[{type:"paragraph",children:t.children}],position:t.position},ZT(e,{type:"footnoteReference",identifier:a,position:t.position})}function _N(e,t){return e(t,"h"+t.depth,Ue(e,t))}function xN(e,t){return e.dangerous?e.augment(t,Ie("raw",t.value)):null}function JT(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return Ie("text","!["+t.alt+r);const a=Ue(e,t),o=a[0];o&&o.type==="text"?o.value="["+o.value:a.unshift(Ie("text","["));const i=a[a.length-1];return i&&i.type==="text"?i.value+=r:a.push(Ie("text",r)),a}function NN(e,t){const n=e.definition(t.identifier);if(!n)return JT(e,t);const r={src:Ar(n.url||""),alt:t.alt};return n.title!==null&&n.title!==void 0&&(r.title=n.title),e(t,"img",r)}function ON(e,t){const n={src:Ar(t.url),alt:t.alt};return t.title!==null&&t.title!==void 0&&(n.title=t.title),e(t,"img",n)}function LN(e,t){return e(t,"code",[Ie("text",t.value.replace(/\r?\n|\r/g," "))])}function DN(e,t){const n=e.definition(t.identifier);if(!n)return JT(e,t);const r={href:Ar(n.url||"")};return n.title!==null&&n.title!==void 0&&(r.title=n.title),e(t,"a",r,Ue(e,t))}function MN(e,t){const n={href:Ar(t.url)};return t.title!==null&&t.title!==void 0&&(n.title=t.title),e(t,"a",n,Ue(e,t))}function FN(e,t,n){const r=Ue(e,t),a=n?PN(n):QT(t),o={},i=[];if(typeof t.checked=="boolean"){let u;r[0]&&r[0].type==="element"&&r[0].tagName==="p"?u=r[0]:(u=e(null,"p",[]),r.unshift(u)),u.children.length>0&&u.children.unshift(Ie("text"," ")),u.children.unshift(e(null,"input",{type:"checkbox",checked:t.checked,disabled:!0})),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const u=r[s];(a||s!==0||u.type!=="element"||u.tagName!=="p")&&i.push(Ie("text",`
`)),u.type==="element"&&u.tagName==="p"&&!a?i.push(...u.children):i.push(u)}const l=r[r.length-1];return l&&(a||!("tagName"in l)||l.tagName!=="p")&&i.push(Ie("text",`
`)),e(t,"li",o,i)}function PN(e){let t=e.spread;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=QT(n[r]);return Boolean(t)}function QT(e){const t=e.spread;return t==null?e.children.length>1:t}function UN(e,t){const n={},r=t.ordered?"ol":"ul",a=Ue(e,t);let o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<a.length;){const i=a[o];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}return e(t,r,n,Wt(a,!0))}function BN(e,t){return e(t,"p",Ue(e,t))}function qN(e,t){return e.augment(t,Ie("root",Wt(Ue(e,t))))}function jN(e,t){return e(t,"strong",Ue(e,t))}function $N(e,t){const n=t.children;let r=-1;const a=t.align||[],o=[];for(;++r<n.length;){const i=n[r].children,s=r===0?"th":"td",l=[];let u=-1;const c=t.align?a.length:i.length;for(;++u<c;){const d=i[u];l.push(e(d,s,{align:a[u]},d?Ue(e,d):[]))}o[r]=e(n[r],"tr",Wt(l,!0))}return e(t,"table",Wt([e(o[0].position,"thead",Wt([o[0]],!0))].concat(o[1]?e({start:YT(o[1]),end:KT(o[o.length-1])},"tbody",Wt(o.slice(1),!0)):[]),!0))}const Fg=9,Pg=32;function zN(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),a=0;const o=[];for(;r;)o.push(Ug(t.slice(a,r.index),a>0,!0),r[0]),a=r.index+r[0].length,r=n.exec(t);return o.push(Ug(t.slice(a),a>0,!1)),o.join("")}function Ug(e,t,n){let r=0,a=e.length;if(t){let o=e.codePointAt(r);for(;o===Fg||o===Pg;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(a-1);for(;o===Fg||o===Pg;)a--,o=e.codePointAt(a-1)}return a>r?e.slice(r,a):""}function HN(e,t){return e.augment(t,Ie("text",zN(String(t.value))))}function GN(e,t){return e(t,"hr")}const WN={blockquote:RN,break:TN,code:kN,delete:AN,emphasis:IN,footnoteReference:ZT,footnote:CN,heading:_N,html:xN,imageReference:NN,image:ON,inlineCode:LN,linkReference:DN,link:MN,listItem:FN,list:UN,paragraph:BN,root:qN,strong:jN,table:$N,text:HN,thematicBreak:GN,toml:Ka,yaml:Ka,definition:Ka,footnoteDefinition:Ka};function Ka(){return null}const VN={}.hasOwnProperty;function YN(e,t){const n=t||{},r=n.allowDangerousHtml||!1,a={};return i.dangerous=r,i.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?"user-content-":n.clobberPrefix,i.footnoteLabel=n.footnoteLabel||"Footnotes",i.footnoteLabelTagName=n.footnoteLabelTagName||"h2",i.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},i.footnoteBackLabel=n.footnoteBackLabel||"Back to content",i.definition=wN(e),i.footnoteById=a,i.footnoteOrder=[],i.footnoteCounts={},i.augment=o,i.handlers={...WN,...n.handlers},i.unknownHandler=n.unknownHandler,i.passThrough=n.passThrough,gm(e,"footnoteDefinition",s=>{const l=String(s.identifier).toUpperCase();VN.call(a,l)||(a[l]=s)}),i;function o(s,l){if(s&&"data"in s&&s.data){const u=s.data;u.hName&&(l.type!=="element"&&(l={type:"element",tagName:"",properties:{},children:[]}),l.tagName=u.hName),l.type==="element"&&u.hProperties&&(l.properties={...l.properties,...u.hProperties}),"children"in l&&l.children&&u.hChildren&&(l.children=u.hChildren)}if(s){const u="type"in s?s:{position:s};EN(u)||(l.position={start:YT(u),end:KT(u)})}return l}function i(s,l,u,c){return Array.isArray(u)&&(c=u,u={}),o(s,{type:"element",tagName:l,properties:u||{},children:c||[]})}}function ek(e,t){const n=YN(e,t),r=WT(n,e,null),a=SN(n);return a&&r.children.push(Ie("text",`
`),a),Array.isArray(r)?{type:"root",children:r}:r}const KN=function(e,t){return e&&"run"in e?ZN(e,t):JN(e||t)},XN=KN;function ZN(e,t){return(n,r,a)=>{e.run(ek(n,t),r,o=>{a(o)})}}function JN(e){return t=>ek(t,e)}var j={exports:{}},QN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",e1=QN,t1=e1;function tk(){}function nk(){}nk.resetWarningCache=tk;var n1=function(){function e(r,a,o,i,s,l){if(l!==t1){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:nk,resetWarningCache:tk};return n.PropTypes=n,n};j.exports=n1();class Ca{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}Ca.prototype.property={};Ca.prototype.normal={};Ca.prototype.space=null;function rk(e,t){const n={},r={};let a=-1;for(;++a<e.length;)Object.assign(n,e[a].property),Object.assign(r,e[a].normal);return new Ca(n,r,t)}function df(e){return e.toLowerCase()}class vt{constructor(t,n){this.property=t,this.attribute=n}}vt.prototype.space=null;vt.prototype.boolean=!1;vt.prototype.booleanish=!1;vt.prototype.overloadedBoolean=!1;vt.prototype.number=!1;vt.prototype.commaSeparated=!1;vt.prototype.spaceSeparated=!1;vt.prototype.commaOrSpaceSeparated=!1;vt.prototype.mustUseProperty=!1;vt.prototype.defined=!1;let r1=0;const W=qn(),we=qn(),ak=qn(),D=qn(),ce=qn(),hr=qn(),Qe=qn();function qn(){return 2**++r1}const pf=Object.freeze(Object.defineProperty({__proto__:null,boolean:W,booleanish:we,overloadedBoolean:ak,number:D,spaceSeparated:ce,commaSeparated:hr,commaOrSpaceSeparated:Qe},Symbol.toStringTag,{value:"Module"})),as=Object.keys(pf);class bm extends vt{constructor(t,n,r,a){let o=-1;if(super(t,n),Bg(this,"space",a),typeof r=="number")for(;++o<as.length;){const i=as[o];Bg(this,as[o],(r&pf[i])===pf[i])}}}bm.prototype.defined=!0;function Bg(e,t,n){n&&(e[t]=n)}const a1={}.hasOwnProperty;function Ir(e){const t={},n={};let r;for(r in e.properties)if(a1.call(e.properties,r)){const a=e.properties[r],o=new bm(r,e.transform(e.attributes||{},r),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[df(r)]=r,n[df(o.attribute)]=r}return new Ca(t,n,e.space)}const ok=Ir({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),ik=Ir({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function sk(e,t){return t in e?e[t]:t}function lk(e,t){return sk(e,t.toLowerCase())}const uk=Ir({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:lk,properties:{xmlns:null,xmlnsXLink:null}}),ck=Ir({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:we,ariaAutoComplete:null,ariaBusy:we,ariaChecked:we,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:ce,ariaCurrent:null,ariaDescribedBy:ce,ariaDetails:null,ariaDisabled:we,ariaDropEffect:ce,ariaErrorMessage:null,ariaExpanded:we,ariaFlowTo:ce,ariaGrabbed:we,ariaHasPopup:null,ariaHidden:we,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ce,ariaLevel:D,ariaLive:null,ariaModal:we,ariaMultiLine:we,ariaMultiSelectable:we,ariaOrientation:null,ariaOwns:ce,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:we,ariaReadOnly:we,ariaRelevant:null,ariaRequired:we,ariaRoleDescription:ce,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:we,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null}}),o1=Ir({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:lk,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:hr,acceptCharset:ce,accessKey:ce,action:null,allow:null,allowFullScreen:W,allowPaymentRequest:W,allowUserMedia:W,alt:null,as:null,async:W,autoCapitalize:null,autoComplete:ce,autoFocus:W,autoPlay:W,capture:W,charSet:null,checked:W,cite:null,className:ce,cols:D,colSpan:null,content:null,contentEditable:we,controls:W,controlsList:ce,coords:D|hr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:W,defer:W,dir:null,dirName:null,disabled:W,download:ak,draggable:we,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:W,formTarget:null,headers:ce,height:D,hidden:W,high:D,href:null,hrefLang:null,htmlFor:ce,httpEquiv:ce,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:W,itemId:null,itemProp:ce,itemRef:ce,itemScope:W,itemType:ce,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:W,low:D,manifest:null,max:null,maxLength:D,media:null,method:null,min:null,minLength:D,multiple:W,muted:W,name:null,nonce:null,noModule:W,noValidate:W,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:W,optimum:D,pattern:null,ping:ce,placeholder:null,playsInline:W,poster:null,preload:null,readOnly:W,referrerPolicy:null,rel:ce,required:W,reversed:W,rows:D,rowSpan:D,sandbox:ce,scope:null,scoped:W,seamless:W,selected:W,shape:null,size:D,sizes:null,slot:null,span:D,spellCheck:we,src:null,srcDoc:null,srcLang:null,srcSet:null,start:D,step:null,style:null,tabIndex:D,target:null,title:null,translate:null,type:null,typeMustMatch:W,useMap:null,value:we,width:D,wrap:null,align:null,aLink:null,archive:ce,axis:null,background:null,bgColor:null,border:D,borderColor:null,bottomMargin:D,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:W,declare:W,event:null,face:null,frame:null,frameBorder:null,hSpace:D,leftMargin:D,link:null,longDesc:null,lowSrc:null,marginHeight:D,marginWidth:D,noResize:W,noHref:W,noShade:W,noWrap:W,object:null,profile:null,prompt:null,rev:null,rightMargin:D,rules:null,scheme:null,scrolling:we,standby:null,summary:null,text:null,topMargin:D,valueType:null,version:null,vAlign:null,vLink:null,vSpace:D,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:W,disableRemotePlayback:W,prefix:null,property:null,results:D,security:null,unselectable:null}}),i1=Ir({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:sk,properties:{about:Qe,accentHeight:D,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:D,amplitude:D,arabicForm:null,ascent:D,attributeName:null,attributeType:null,azimuth:D,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:D,by:null,calcMode:null,capHeight:D,className:ce,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:D,diffuseConstant:D,direction:null,display:null,dur:null,divisor:D,dominantBaseline:null,download:W,dx:null,dy:null,edgeMode:null,editable:null,elevation:D,enableBackground:null,end:null,event:null,exponent:D,externalResourcesRequired:null,fill:null,fillOpacity:D,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:hr,g2:hr,glyphName:hr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:D,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:D,horizOriginX:D,horizOriginY:D,id:null,ideographic:D,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:D,k:D,k1:D,k2:D,k3:D,k4:D,kernelMatrix:Qe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:D,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:D,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:D,overlineThickness:D,paintOrder:null,panose1:null,path:null,pathLength:D,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ce,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:D,pointsAtY:D,pointsAtZ:D,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Qe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Qe,rev:Qe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Qe,requiredFeatures:Qe,requiredFonts:Qe,requiredFormats:Qe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:D,specularExponent:D,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:D,strikethroughThickness:D,string:null,stroke:null,strokeDashArray:Qe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:D,strokeOpacity:D,strokeWidth:null,style:null,surfaceScale:D,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Qe,tabIndex:D,tableValues:null,target:null,targetX:D,targetY:D,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Qe,to:null,transform:null,u1:null,u2:null,underlinePosition:D,underlineThickness:D,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:D,values:null,vAlphabetic:D,vMathematical:D,vectorEffect:null,vHanging:D,vIdeographic:D,version:null,vertAdvY:D,vertOriginX:D,vertOriginY:D,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:D,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),s1=/^data[-\w.:]+$/i,qg=/-[a-z]/g,l1=/[A-Z]/g;function u1(e,t){const n=df(t);let r=t,a=vt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&s1.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(qg,d1);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!qg.test(o)){let i=o.replace(l1,c1);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}a=bm}return new a(r,t)}function c1(e){return"-"+e.toLowerCase()}function d1(e){return e.charAt(1).toUpperCase()}const jg={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},p1=rk([ik,ok,uk,ck,o1],"html"),f1=rk([ik,ok,uk,ck,i1],"svg");function m1(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{gm(t,"element",(n,r,a)=>{const o=a;let i;if(e.allowedElements?i=!e.allowedElements.includes(n.tagName):e.disallowedElements&&(i=e.disallowedElements.includes(n.tagName)),!i&&e.allowElement&&typeof r=="number"&&(i=!e.allowElement(n,r,o)),i&&typeof r=="number")return e.unwrapDisallowed&&n.children?o.children.splice(r,1,...n.children):o.children.splice(r,1),r})}}var dk={exports:{}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=Symbol.for("react.element"),vm=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),li=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),ci=Symbol.for("react.provider"),di=Symbol.for("react.context"),h1=Symbol.for("react.server_context"),pi=Symbol.for("react.forward_ref"),fi=Symbol.for("react.suspense"),mi=Symbol.for("react.suspense_list"),hi=Symbol.for("react.memo"),gi=Symbol.for("react.lazy"),g1=Symbol.for("react.offscreen"),pk;pk=Symbol.for("react.module.reference");function Et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ym:switch(e=e.type,e){case si:case ui:case li:case fi:case mi:return e;default:switch(e=e&&e.$$typeof,e){case h1:case di:case pi:case gi:case hi:case ci:return e;default:return t}}case vm:return t}}}ne.ContextConsumer=di;ne.ContextProvider=ci;ne.Element=ym;ne.ForwardRef=pi;ne.Fragment=si;ne.Lazy=gi;ne.Memo=hi;ne.Portal=vm;ne.Profiler=ui;ne.StrictMode=li;ne.Suspense=fi;ne.SuspenseList=mi;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return Et(e)===di};ne.isContextProvider=function(e){return Et(e)===ci};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ym};ne.isForwardRef=function(e){return Et(e)===pi};ne.isFragment=function(e){return Et(e)===si};ne.isLazy=function(e){return Et(e)===gi};ne.isMemo=function(e){return Et(e)===hi};ne.isPortal=function(e){return Et(e)===vm};ne.isProfiler=function(e){return Et(e)===ui};ne.isStrictMode=function(e){return Et(e)===li};ne.isSuspense=function(e){return Et(e)===fi};ne.isSuspenseList=function(e){return Et(e)===mi};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===si||e===ui||e===li||e===fi||e===mi||e===g1||typeof e=="object"&&e!==null&&(e.$$typeof===gi||e.$$typeof===hi||e.$$typeof===ci||e.$$typeof===di||e.$$typeof===pi||e.$$typeof===pk||e.getModuleId!==void 0)};ne.typeOf=Et;(function(e){e.exports=ne})(dk);const b1=hS(dk.exports);function y1(e){var t=e&&typeof e=="object"&&e.type==="text"?e.value||"":e;return typeof t=="string"&&t.replace(/[ \t\n\f\r]/g,"")===""}function v1(e){return e.join(" ").trim()}function E1(e,t){var n=t||{};return e[e.length-1]===""&&(e=e.concat("")),e.join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var $g=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,w1=/\n/g,S1=/^\s*/,R1=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,T1=/^:\s*/,k1=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,A1=/^[;\s]*/,I1=/^\s+|\s+$/g,C1=`
`,zg="/",Hg="*",An="",_1="comment",x1="declaration",N1=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function a(E){var y=E.match(w1);y&&(n+=y.length);var A=E.lastIndexOf(C1);r=~A?E.length-A:r+E.length}function o(){var E={line:n,column:r};return function(y){return y.position=new i(E),u(),y}}function i(E){this.start=E,this.end={line:n,column:r},this.source=t.source}i.prototype.content=e;function s(E){var y=new Error(t.source+":"+n+":"+r+": "+E);if(y.reason=E,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function l(E){var y=E.exec(e);if(!!y){var A=y[0];return a(A),e=e.slice(A.length),y}}function u(){l(S1)}function c(E){var y;for(E=E||[];y=d();)y!==!1&&E.push(y);return E}function d(){var E=o();if(!(zg!=e.charAt(0)||Hg!=e.charAt(1))){for(var y=2;An!=e.charAt(y)&&(Hg!=e.charAt(y)||zg!=e.charAt(y+1));)++y;if(y+=2,An===e.charAt(y-1))return s("End of comment missing");var A=e.slice(2,y-2);return r+=2,a(A),e=e.slice(y),r+=2,E({type:_1,comment:A})}}function m(){var E=o(),y=l(R1);if(!!y){if(d(),!l(T1))return s("property missing ':'");var A=l(k1),h=E({type:x1,property:Gg(y[0].replace($g,An)),value:A?Gg(A[0].replace($g,An)):An});return l(A1),h}}function g(){var E=[];c(E);for(var y;y=m();)y!==!1&&(E.push(y),c(E));return E}return u(),g()};function Gg(e){return e?e.replace(I1,An):An}var O1=N1;function L1(e,t){var n=null;if(!e||typeof e!="string")return n;for(var r,a=O1(e),o=typeof t=="function",i,s,l=0,u=a.length;l<u;l++)r=a[l],i=r.property,s=r.value,o?t(i,s,r):s&&(n||(n={}),n[i]=s);return n}var D1=L1;const ff={}.hasOwnProperty,M1=new Set(["table","thead","tbody","tfoot","tr"]);function fk(e,t){const n=[];let r=-1,a;for(;++r<t.children.length;)a=t.children[r],a.type==="element"?n.push(F1(e,a,r,t)):a.type==="text"?(t.type!=="element"||!M1.has(t.tagName)||!y1(a))&&n.push(a.value):a.type==="raw"&&!e.options.skipHtml&&n.push(a.value);return n}function F1(e,t,n,r){const a=e.options,o=e.schema,i=t.tagName,s={};let l=o,u;if(o.space==="html"&&i==="svg"&&(l=f1,e.schema=l),t.properties)for(u in t.properties)ff.call(t.properties,u)&&U1(s,u,t.properties[u],e);(i==="ol"||i==="ul")&&e.listDepth++;const c=fk(e,t);(i==="ol"||i==="ul")&&e.listDepth--,e.schema=o;const d=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},m=a.components&&ff.call(a.components,i)?a.components[i]:i,g=typeof m=="string"||m===to.Fragment;if(!b1.isValidElementType(m))throw new TypeError(`Component for name \`${i}\` not defined or is not renderable`);if(s.key=[i,d.start.line,d.start.column,n].join("-"),i==="a"&&a.linkTarget&&(s.target=typeof a.linkTarget=="function"?a.linkTarget(String(s.href||""),t.children,typeof s.title=="string"?s.title:null):a.linkTarget),i==="a"&&a.transformLinkUri&&(s.href=a.transformLinkUri(String(s.href||""),t.children,typeof s.title=="string"?s.title:null)),!g&&i==="code"&&r.type==="element"&&r.tagName!=="pre"&&(s.inline=!0),!g&&(i==="h1"||i==="h2"||i==="h3"||i==="h4"||i==="h5"||i==="h6")&&(s.level=Number.parseInt(i.charAt(1),10)),i==="img"&&a.transformImageUri&&(s.src=a.transformImageUri(String(s.src||""),String(s.alt||""),typeof s.title=="string"?s.title:null)),!g&&i==="li"&&r.type==="element"){const E=P1(t);s.checked=E&&E.properties?Boolean(E.properties.checked):null,s.index=os(r,t),s.ordered=r.tagName==="ol"}return!g&&(i==="ol"||i==="ul")&&(s.ordered=i==="ol",s.depth=e.listDepth),(i==="td"||i==="th")&&(s.align&&(s.style||(s.style={}),s.style.textAlign=s.align,delete s.align),g||(s.isHeader=i==="th")),!g&&i==="tr"&&r.type==="element"&&(s.isHeader=Boolean(r.tagName==="thead")),a.sourcePos&&(s["data-sourcepos"]=j1(d)),!g&&a.rawSourcePos&&(s.sourcePosition=t.position),!g&&a.includeElementIndex&&(s.index=os(r,t),s.siblingCount=os(r)),g||(s.node=t),c.length>0?to.createElement(m,s,c):to.createElement(m,s)}function P1(e){let t=-1;for(;++t<e.children.length;){const n=e.children[t];if(n.type==="element"&&n.tagName==="input")return n}return null}function os(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)e.children[n].type==="element"&&r++;return r}function U1(e,t,n,r){const a=u1(r.schema,t);let o=n;o==null||o!==o||(Array.isArray(o)&&(o=a.commaSeparated?E1(o):v1(o)),a.property==="style"&&typeof o=="string"&&(o=B1(o)),a.space&&a.property?e[ff.call(jg,a.property)?jg[a.property]:a.property]=o:a.attribute&&(e[a.attribute]=o))}function B1(e){const t={};try{D1(e,n)}catch{}return t;function n(r,a){const o=r.slice(0,4)==="-ms-"?`ms-${r.slice(4)}`:r;t[o.replace(/-([a-z])/g,q1)]=a}}function q1(e,t){return t.toUpperCase()}function j1(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(t=>String(t)).join("")}const Wg={}.hasOwnProperty,$1="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Xa={plugins:{to:"plugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function Em(e){for(const o in Xa)if(Wg.call(Xa,o)&&Wg.call(e,o)){const i=Xa[o];console.warn(`[react-markdown] Warning: please ${i.to?`use \`${i.to}\` instead of`:"remove"} \`${o}\` (see <${$1}#${i.id}> for more info)`),delete Xa[o]}const t=i_().use(uN).use(e.remarkPlugins||[]).use(XN,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(m1,e),n=new xT;typeof e.children=="string"?n.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);const r=t.runSync(t.parse(n),n);if(r.type!=="root")throw new TypeError("Expected a `root` node");let a=H(NC,{children:fk({options:e,schema:p1,listDepth:0},r)});return e.className&&(a=H("div",{className:e.className,children:a})),a}Em.defaultProps={transformLinkUri:VC};Em.propTypes={children:j.exports.string,className:j.exports.string,allowElement:j.exports.func,allowedElements:j.exports.arrayOf(j.exports.string),disallowedElements:j.exports.arrayOf(j.exports.string),unwrapDisallowed:j.exports.bool,remarkPlugins:j.exports.arrayOf(j.exports.oneOfType([j.exports.object,j.exports.func,j.exports.arrayOf(j.exports.oneOfType([j.exports.bool,j.exports.string,j.exports.object,j.exports.func,j.exports.arrayOf(j.exports.any)]))])),rehypePlugins:j.exports.arrayOf(j.exports.oneOfType([j.exports.object,j.exports.func,j.exports.arrayOf(j.exports.oneOfType([j.exports.bool,j.exports.string,j.exports.object,j.exports.func,j.exports.arrayOf(j.exports.any)]))])),sourcePos:j.exports.bool,rawSourcePos:j.exports.bool,skipHtml:j.exports.bool,includeElementIndex:j.exports.bool,transformLinkUri:j.exports.oneOfType([j.exports.func,j.exports.bool]),linkTarget:j.exports.oneOfType([j.exports.func,j.exports.string]),transformImageUri:j.exports.func,components:j.exports.object};function z1(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function H1(e,t){if(e==null)return{};var n=z1(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function mf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G1(e){if(Array.isArray(e))return mf(e)}function W1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function V1(e,t){if(!!e){if(typeof e=="string")return mf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mf(e,t)}}function Y1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K1(e){return G1(e)||W1(e)||V1(e)||Y1()}function mk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ir(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vg(Object(n),!0).forEach(function(r){mk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function X1(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var is={};function Z1(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return is[t]||(is[t]=X1(e)),is[t]}function J1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(o){return o!=="token"}),a=Z1(r);return a.reduce(function(o,i){return ir(ir({},o),n[i])},t)}function Yg(e){return e.join(" ")}function Q1(e,t){var n=0;return function(r){return n+=1,r.map(function(a,o){return hk({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(o)})})}}function hk(e){var t=e.node,n=e.stylesheet,r=e.style,a=r===void 0?{}:r,o=e.useInlineStyles,i=e.key,s=t.properties,l=t.type,u=t.tagName,c=t.value;if(l==="text")return c;if(u){var d=Q1(n,o),m;if(!o)m=ir(ir({},s),{},{className:Yg(s.className)});else{var g=Object.keys(n).reduce(function(h,f){return f.split(".").forEach(function(p){h.includes(p)||h.push(p)}),h},[]),E=s.className&&s.className.includes("token")?["token"]:[],y=s.className&&E.concat(s.className.filter(function(h){return!g.includes(h)}));m=ir(ir({},s),{},{className:Yg(y)||void 0,style:J1(s.className,Object.assign({},s.style,a),n)})}var A=d(t.children);return H(u,{...m,children:A},i)}}const eO=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var tO=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Kg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kg(Object(n),!0).forEach(function(r){mk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var nO=/\n/g;function rO(e){return e.match(nO)}function aO(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(a,o){var i=o+n;return H("span",{className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r,children:"".concat(i,`
`)},"line-".concat(o))})}function oO(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,o=e.numberStyle,i=o===void 0?{}:o,s=e.startingLineNumber;return H("code",{style:Object.assign({},n,a),children:aO({lines:t.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s})})}function iO(e){return"".concat(e.toString().length,".25em")}function gk(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function bk(e,t,n){var r={display:"inline-block",minWidth:iO(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,o=Lt(Lt({},r),a);return o}function go(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,o=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,l=e.className,u=l===void 0?[]:l,c=e.showLineNumbers,d=e.wrapLongLines,m=typeof s=="function"?s(n):s;if(m.className=u,n&&o){var g=bk(r,n,a);t.unshift(gk(n,g))}return d&c&&(m.style=Lt(Lt({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function yk(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")n.push(go({children:[a],className:K1(new Set(t))}));else if(a.children){var o=t.concat(a.properties.className);yk(a.children,o).forEach(function(i){return n.push(i)})}}return n}function sO(e,t,n,r,a,o,i,s,l){var u,c=yk(e.value),d=[],m=-1,g=0;function E(T,b){var k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return go({children:T,lineNumber:b,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:a,lineProps:n,className:k,showLineNumbers:r,wrapLongLines:l})}function y(T,b){if(r&&b&&a){var k=bk(s,b,i);T.unshift(gk(b,k))}return T}function A(T,b){var k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||k.length>0?E(T,b,k):y(T,b)}for(var h=function(){var b=c[g],k=b.children[0].value,I=rO(k);if(I){var C=k.split(`
`);C.forEach(function(O,N){var P=r&&d.length+o,B={type:"text",value:"".concat(O,`
`)};if(N===0){var V=c.slice(m+1,g).concat(go({children:[B],className:b.properties.className})),K=A(V,P);d.push(K)}else if(N===C.length-1){var X=c[g+1]&&c[g+1].children&&c[g+1].children[0],J={type:"text",value:"".concat(O)};if(X){var x=go({children:[J],className:b.properties.className});c.splice(g+1,0,x)}else{var F=[J],M=A(F,P,b.properties.className);d.push(M)}}else{var w=[B],R=A(w,P,b.properties.className);d.push(R)}}),m=g}g++};g<c.length;)h();if(m!==c.length-1){var f=c.slice(m+1,c.length);if(f&&f.length){var p=r&&d.length+o,S=A(f,p);d.push(S)}}return t?d:(u=[]).concat.apply(u,d)}function lO(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(a,o){return hk({node:a,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(o)})})}function vk(e){return e&&typeof e.highlightAuto<"u"}function uO(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(vk(t)){var o=eO(t,n);return n==="text"?{value:a,language:"text"}:o?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:a}}catch{return{value:a}}}function cO(e,t){return function(r){var a=r.language,o=r.children,i=r.style,s=i===void 0?t:i,l=r.customStyle,u=l===void 0?{}:l,c=r.codeTagProps,d=c===void 0?{className:a?"language-".concat(a):void 0,style:Lt(Lt({},s['code[class*="language-"]']),s['code[class*="language-'.concat(a,'"]')])}:c,m=r.useInlineStyles,g=m===void 0?!0:m,E=r.showLineNumbers,y=E===void 0?!1:E,A=r.showInlineLineNumbers,h=A===void 0?!0:A,f=r.startingLineNumber,p=f===void 0?1:f,S=r.lineNumberContainerStyle,T=r.lineNumberStyle,b=T===void 0?{}:T,k=r.wrapLines,I=r.wrapLongLines,C=I===void 0?!1:I,O=r.lineProps,N=O===void 0?{}:O,P=r.renderer,B=r.PreTag,V=B===void 0?"pre":B,K=r.CodeTag,X=K===void 0?"code":K,J=r.code,x=J===void 0?(Array.isArray(o)?o[0]:o)||"":J,F=r.astGenerator,M=H1(r,tO);F=F||e;var w=y?H(oO,{containerStyle:S,codeStyle:d.style||{},numberStyle:b,startingLineNumber:p,codeString:x}):null,R=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},pe=vk(F)?"hljs":"prismjs",ee=g?Object.assign({},M,{style:Object.assign({},R,u)}):Object.assign({},M,{className:M.className?"".concat(pe," ").concat(M.className):pe,style:Object.assign({},u)});if(C?d.style=Lt(Lt({},d.style),{},{whiteSpace:"pre-wrap"}):d.style=Lt(Lt({},d.style),{},{whiteSpace:"pre"}),!F)return Pn(V,{...ee,children:[w,H(X,{...d,children:x})]});(k===void 0&&P||C)&&(k=!0),P=P||lO;var be=[{type:"text",value:x}],G=uO({astGenerator:F,language:a,code:x,defaultCodeValue:be});G.language===null&&(G.value=be);var oe=G.value.length+p,Be=sO(G,k,N,y,h,p,oe,b,C);return H(V,{...ee,children:Pn(X,{...d,children:[!h&&w,P({rows:Be,stylesheet:s,useInlineStyles:g})]})})}}const dO=["abap","abnf","actionscript","ada","agda","al","antlr4","apacheconf","apex","apl","applescript","aql","arduino","arff","asciidoc","asm6502","asmatmel","aspnet","autohotkey","autoit","avisynth","avro-idl","bash","basic","batch","bbcode","bicep","birb","bison","bnf","brainfuck","brightscript","bro","bsl","c","cfscript","chaiscript","cil","clike","clojure","cmake","cobol","coffeescript","concurnas","coq","cpp","crystal","csharp","cshtml","csp","css-extras","css","csv","cypher","d","dart","dataweave","dax","dhall","diff","django","dns-zone-file","docker","dot","ebnf","editorconfig","eiffel","ejs","elixir","elm","erb","erlang","etlua","excel-formula","factor","false","firestore-security-rules","flow","fortran","fsharp","ftl","gap","gcode","gdscript","gedcom","gherkin","git","glsl","gml","gn","go-module","go","graphql","groovy","haml","handlebars","haskell","haxe","hcl","hlsl","hoon","hpkp","hsts","http","ichigojam","icon","icu-message-format","idris","iecst","ignore","inform7","ini","io","j","java","javadoc","javadoclike","javascript","javastacktrace","jexl","jolie","jq","js-extras","js-templates","jsdoc","json","json5","jsonp","jsstacktrace","jsx","julia","keepalived","keyman","kotlin","kumir","kusto","latex","latte","less","lilypond","liquid","lisp","livescript","llvm","log","lolcode","lua","magma","makefile","markdown","markup-templating","markup","matlab","maxscript","mel","mermaid","mizar","mongodb","monkey","moonscript","n1ql","n4js","nand2tetris-hdl","naniscript","nasm","neon","nevod","nginx","nim","nix","nsis","objectivec","ocaml","opencl","openqasm","oz","parigp","parser","pascal","pascaligo","pcaxis","peoplecode","perl","php-extras","php","phpdoc","plsql","powerquery","powershell","processing","prolog","promql","properties","protobuf","psl","pug","puppet","pure","purebasic","purescript","python","q","qml","qore","qsharp","r","racket","reason","regex","rego","renpy","rest","rip","roboconf","robotframework","ruby","rust","sas","sass","scala","scheme","scss","shell-session","smali","smalltalk","smarty","sml","solidity","solution-file","soy","sparql","splunk-spl","sqf","sql","squirrel","stan","stylus","swift","systemd","t4-cs","t4-templating","t4-vb","tap","tcl","textile","toml","tremor","tsx","tt2","turtle","twig","typescript","typoscript","unrealscript","uorazor","uri","v","vala","vbnet","velocity","verilog","vhdl","vim","visual-basic","warpscript","wasm","web-idl","wiki","wolfram","wren","xeora","xml-doc","xojo","xquery","yaml","yang","zig"];var Ek={exports:{}},pO=mO,fO=Object.prototype.hasOwnProperty;function mO(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)fO.call(n,r)&&(e[r]=n[r])}return e}var wk=Sk,wm=Sk.prototype;wm.space=null;wm.normal={};wm.property={};function Sk(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var Xg=pO,hO=wk,gO=bO;function bO(e){for(var t=e.length,n=[],r=[],a=-1,o,i;++a<t;)o=e[a],n.push(o.property),r.push(o.normal),i=o.space;return new hO(Xg.apply(null,n),Xg.apply(null,r),i)}var Sm=yO;function yO(e){return e.toLowerCase()}var Rk=Tk,wt=Tk.prototype;wt.space=null;wt.attribute=null;wt.property=null;wt.boolean=!1;wt.booleanish=!1;wt.overloadedBoolean=!1;wt.number=!1;wt.commaSeparated=!1;wt.spaceSeparated=!1;wt.commaOrSpaceSeparated=!1;wt.mustUseProperty=!1;wt.defined=!1;function Tk(e,t){this.property=e,this.attribute=t}var Bt={},vO=0;Bt.boolean=jn();Bt.booleanish=jn();Bt.overloadedBoolean=jn();Bt.number=jn();Bt.spaceSeparated=jn();Bt.commaSeparated=jn();Bt.commaOrSpaceSeparated=jn();function jn(){return Math.pow(2,++vO)}var kk=Rk,Zg=Bt,Ak=Rm;Rm.prototype=new kk;Rm.prototype.defined=!0;var Ik=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],EO=Ik.length;function Rm(e,t,n,r){var a=-1,o;for(Jg(this,"space",r),kk.call(this,e,t);++a<EO;)o=Ik[a],Jg(this,o,(n&Zg[o])===Zg[o])}function Jg(e,t,n){n&&(e[t]=n)}var Qg=Sm,wO=wk,SO=Ak,_a=RO;function RO(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,o=e.transform,i={},s={},l,u;for(l in a)u=new SO(l,o(r,l),a[l],t),n.indexOf(l)!==-1&&(u.mustUseProperty=!0),i[l]=u,s[Qg(l)]=l,s[Qg(u.attribute)]=l;return new wO(i,s,t)}var TO=_a,kO=TO({space:"xlink",transform:AO,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function AO(e,t){return"xlink:"+t.slice(5).toLowerCase()}var IO=_a,CO=IO({space:"xml",transform:_O,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function _O(e,t){return"xml:"+t.slice(3).toLowerCase()}var xO=NO;function NO(e,t){return t in e?e[t]:t}var OO=xO,Ck=LO;function LO(e,t){return OO(e,t.toLowerCase())}var DO=_a,MO=Ck,FO=DO({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:MO,properties:{xmlns:null,xmlnsXLink:null}}),Tm=Bt,PO=_a,Ge=Tm.booleanish,lt=Tm.number,Rn=Tm.spaceSeparated,UO=PO({transform:BO,properties:{ariaActiveDescendant:null,ariaAtomic:Ge,ariaAutoComplete:null,ariaBusy:Ge,ariaChecked:Ge,ariaColCount:lt,ariaColIndex:lt,ariaColSpan:lt,ariaControls:Rn,ariaCurrent:null,ariaDescribedBy:Rn,ariaDetails:null,ariaDisabled:Ge,ariaDropEffect:Rn,ariaErrorMessage:null,ariaExpanded:Ge,ariaFlowTo:Rn,ariaGrabbed:Ge,ariaHasPopup:null,ariaHidden:Ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Rn,ariaLevel:lt,ariaLive:null,ariaModal:Ge,ariaMultiLine:Ge,ariaMultiSelectable:Ge,ariaOrientation:null,ariaOwns:Rn,ariaPlaceholder:null,ariaPosInSet:lt,ariaPressed:Ge,ariaReadOnly:Ge,ariaRelevant:null,ariaRequired:Ge,ariaRoleDescription:Rn,ariaRowCount:lt,ariaRowIndex:lt,ariaRowSpan:lt,ariaSelected:Ge,ariaSetSize:lt,ariaSort:null,ariaValueMax:lt,ariaValueMin:lt,ariaValueNow:lt,ariaValueText:null,role:null}});function BO(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Cr=Bt,qO=_a,jO=Ck,Y=Cr.boolean,$O=Cr.overloadedBoolean,qr=Cr.booleanish,le=Cr.number,qe=Cr.spaceSeparated,Za=Cr.commaSeparated,zO=qO({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:jO,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Za,acceptCharset:qe,accessKey:qe,action:null,allow:null,allowFullScreen:Y,allowPaymentRequest:Y,allowUserMedia:Y,alt:null,as:null,async:Y,autoCapitalize:null,autoComplete:qe,autoFocus:Y,autoPlay:Y,capture:Y,charSet:null,checked:Y,cite:null,className:qe,cols:le,colSpan:null,content:null,contentEditable:qr,controls:Y,controlsList:qe,coords:le|Za,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Y,defer:Y,dir:null,dirName:null,disabled:Y,download:$O,draggable:qr,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Y,formTarget:null,headers:qe,height:le,hidden:Y,high:le,href:null,hrefLang:null,htmlFor:qe,httpEquiv:qe,id:null,imageSizes:null,imageSrcSet:Za,inputMode:null,integrity:null,is:null,isMap:Y,itemId:null,itemProp:qe,itemRef:qe,itemScope:Y,itemType:qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Y,low:le,manifest:null,max:null,maxLength:le,media:null,method:null,min:null,minLength:le,multiple:Y,muted:Y,name:null,nonce:null,noModule:Y,noValidate:Y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Y,optimum:le,pattern:null,ping:qe,placeholder:null,playsInline:Y,poster:null,preload:null,readOnly:Y,referrerPolicy:null,rel:qe,required:Y,reversed:Y,rows:le,rowSpan:le,sandbox:qe,scope:null,scoped:Y,seamless:Y,selected:Y,shape:null,size:le,sizes:null,slot:null,span:le,spellCheck:qr,src:null,srcDoc:null,srcLang:null,srcSet:Za,start:le,step:null,style:null,tabIndex:le,target:null,title:null,translate:null,type:null,typeMustMatch:Y,useMap:null,value:qr,width:le,wrap:null,align:null,aLink:null,archive:qe,axis:null,background:null,bgColor:null,border:le,borderColor:null,bottomMargin:le,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Y,declare:Y,event:null,face:null,frame:null,frameBorder:null,hSpace:le,leftMargin:le,link:null,longDesc:null,lowSrc:null,marginHeight:le,marginWidth:le,noResize:Y,noHref:Y,noShade:Y,noWrap:Y,object:null,profile:null,prompt:null,rev:null,rightMargin:le,rules:null,scheme:null,scrolling:qr,standby:null,summary:null,text:null,topMargin:le,valueType:null,version:null,vAlign:null,vLink:null,vSpace:le,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Y,disableRemotePlayback:Y,prefix:null,property:null,results:le,security:null,unselectable:null}}),HO=gO,GO=kO,WO=CO,VO=FO,YO=UO,KO=zO,XO=HO([WO,GO,VO,YO,KO]),ZO=Sm,JO=Ak,QO=Rk,km="data",eL=rL,tL=/^data[-\w.:]+$/i,_k=/-[a-z]/g,nL=/[A-Z]/g;function rL(e,t){var n=ZO(t),r=t,a=QO;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===km&&tL.test(t)&&(t.charAt(4)==="-"?r=aL(t):t=oL(t),a=JO),new a(r,t))}function aL(e){var t=e.slice(5).replace(_k,sL);return km+t.charAt(0).toUpperCase()+t.slice(1)}function oL(e){var t=e.slice(4);return _k.test(t)?e:(t=t.replace(nL,iL),t.charAt(0)!=="-"&&(t="-"+t),km+t)}function iL(e){return"-"+e.toLowerCase()}function sL(e){return e.charAt(1).toUpperCase()}var lL=uL,eb=/[#.]/g;function uL(e,t){for(var n=e||"",r=t||"div",a={},o=0,i,s,l;o<n.length;)eb.lastIndex=o,l=eb.exec(n),i=n.slice(o,l?l.index:n.length),i&&(s?s==="#"?a.id=i:a.className?a.className.push(i):a.className=[i]:r=i,o+=i.length),l&&(s=l[0],o++);return{type:"element",tagName:r,properties:a,children:[]}}var Am={};Am.parse=pL;Am.stringify=fL;var tb="",cL=" ",dL=/[ \t\n\r\f]+/g;function pL(e){var t=String(e||tb).trim();return t===tb?[]:t.split(dL)}function fL(e){return e.join(cL).trim()}var Im={};Im.parse=mL;Im.stringify=hL;var hf=",",nb=" ",Gr="";function mL(e){for(var t=[],n=String(e||Gr),r=n.indexOf(hf),a=0,o=!1,i;!o;)r===-1&&(r=n.length,o=!0),i=n.slice(a,r).trim(),(i||!o)&&t.push(i),a=r+1,r=n.indexOf(hf,a);return t}function hL(e,t){var n=t||{},r=n.padLeft===!1?Gr:nb,a=n.padRight?nb:Gr;return e[e.length-1]===Gr&&(e=e.concat(Gr)),e.join(a+hf+r).trim()}var gL=eL,rb=Sm,bL=lL,ab=Am.parse,ob=Im.parse,yL=EL,vL={}.hasOwnProperty;function EL(e,t,n){var r=n?kL(n):null;return a;function a(i,s){var l=bL(i,t),u=Array.prototype.slice.call(arguments,2),c=l.tagName.toLowerCase(),d;if(l.tagName=r&&vL.call(r,c)?r[c]:c,s&&wL(s,l)&&(u.unshift(s),s=null),s)for(d in s)o(l.properties,d,s[d]);return xk(l.children,u),l.tagName==="template"&&(l.content={type:"root",children:l.children},l.children=[]),l}function o(i,s,l){var u,c,d;l==null||l!==l||(u=gL(e,s),c=u.property,d=l,typeof d=="string"&&(u.spaceSeparated?d=ab(d):u.commaSeparated?d=ob(d):u.commaOrSpaceSeparated&&(d=ab(ob(d).join(" ")))),c==="style"&&typeof l!="string"&&(d=TL(d)),c==="className"&&i.className&&(d=i.className.concat(d)),i[c]=RL(u,c,d))}}function wL(e,t){return typeof e=="string"||"length"in e||SL(t.tagName,e)}function SL(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function xk(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)xk(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function RL(e,t,n){var r,a,o;if(typeof n!="object"||!("length"in n))return ib(e,t,n);for(a=n.length,r=-1,o=[];++r<a;)o[r]=ib(e,t,n[r]);return o}function ib(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||rb(n)===rb(t))&&(r=!0),r}function TL(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function kL(e){for(var t=e.length,n=-1,r={},a;++n<t;)a=e[n],r[a.toLowerCase()]=a;return r}var AL=XO,IL=yL,Nk=IL(AL,"div");Nk.displayName="html";var CL=Nk;(function(e){e.exports=CL})(Ek);const _L="\xC6",xL="&",NL="\xC1",OL="\xC2",LL="\xC0",DL="\xC5",ML="\xC3",FL="\xC4",PL="\xA9",UL="\xC7",BL="\xD0",qL="\xC9",jL="\xCA",$L="\xC8",zL="\xCB",HL=">",GL="\xCD",WL="\xCE",VL="\xCC",YL="\xCF",KL="<",XL="\xD1",ZL="\xD3",JL="\xD4",QL="\xD2",eD="\xD8",tD="\xD5",nD="\xD6",rD='"',aD="\xAE",oD="\xDE",iD="\xDA",sD="\xDB",lD="\xD9",uD="\xDC",cD="\xDD",dD="\xE1",pD="\xE2",fD="\xB4",mD="\xE6",hD="\xE0",gD="&",bD="\xE5",yD="\xE3",vD="\xE4",ED="\xA6",wD="\xE7",SD="\xB8",RD="\xA2",TD="\xA9",kD="\xA4",AD="\xB0",ID="\xF7",CD="\xE9",_D="\xEA",xD="\xE8",ND="\xF0",OD="\xEB",LD="\xBD",DD="\xBC",MD="\xBE",FD=">",PD="\xED",UD="\xEE",BD="\xA1",qD="\xEC",jD="\xBF",$D="\xEF",zD="\xAB",HD="<",GD="\xAF",WD="\xB5",VD="\xB7",YD="\xA0",KD="\xAC",XD="\xF1",ZD="\xF3",JD="\xF4",QD="\xF2",e0="\xAA",t0="\xBA",n0="\xF8",r0="\xF5",a0="\xF6",o0="\xB6",i0="\xB1",s0="\xA3",l0='"',u0="\xBB",c0="\xAE",d0="\xA7",p0="\xAD",f0="\xB9",m0="\xB2",h0="\xB3",g0="\xDF",b0="\xFE",y0="\xD7",v0="\xFA",E0="\xFB",w0="\xF9",S0="\xA8",R0="\xFC",T0="\xFD",k0="\xA5",A0="\xFF",I0={AElig:_L,AMP:xL,Aacute:NL,Acirc:OL,Agrave:LL,Aring:DL,Atilde:ML,Auml:FL,COPY:PL,Ccedil:UL,ETH:BL,Eacute:qL,Ecirc:jL,Egrave:$L,Euml:zL,GT:HL,Iacute:GL,Icirc:WL,Igrave:VL,Iuml:YL,LT:KL,Ntilde:XL,Oacute:ZL,Ocirc:JL,Ograve:QL,Oslash:eD,Otilde:tD,Ouml:nD,QUOT:rD,REG:aD,THORN:oD,Uacute:iD,Ucirc:sD,Ugrave:lD,Uuml:uD,Yacute:cD,aacute:dD,acirc:pD,acute:fD,aelig:mD,agrave:hD,amp:gD,aring:bD,atilde:yD,auml:vD,brvbar:ED,ccedil:wD,cedil:SD,cent:RD,copy:TD,curren:kD,deg:AD,divide:ID,eacute:CD,ecirc:_D,egrave:xD,eth:ND,euml:OD,frac12:LD,frac14:DD,frac34:MD,gt:FD,iacute:PD,icirc:UD,iexcl:BD,igrave:qD,iquest:jD,iuml:$D,laquo:zD,lt:HD,macr:GD,micro:WD,middot:VD,nbsp:YD,not:KD,ntilde:XD,oacute:ZD,ocirc:JD,ograve:QD,ordf:e0,ordm:t0,oslash:n0,otilde:r0,ouml:a0,para:o0,plusmn:i0,pound:s0,quot:l0,raquo:u0,reg:c0,sect:d0,shy:p0,sup1:f0,sup2:m0,sup3:h0,szlig:g0,thorn:b0,times:y0,uacute:v0,ucirc:E0,ugrave:w0,uml:S0,uuml:R0,yacute:T0,yen:k0,yuml:A0},C0={0:"\uFFFD",128:"\u20AC",130:"\u201A",131:"\u0192",132:"\u201E",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02C6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017D",145:"\u2018",146:"\u2019",147:"\u201C",148:"\u201D",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02DC",153:"\u2122",154:"\u0161",155:"\u203A",156:"\u0153",158:"\u017E",159:"\u0178"};var Ok=_0;function _0(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var x0=N0;function N0(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var O0=L0;function L0(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var D0=O0,M0=Ok,F0=P0;function P0(e){return D0(e)||M0(e)}var Ja,U0=59,B0=q0;function q0(e){var t="&"+e+";",n;return Ja=Ja||document.createElement("i"),Ja.innerHTML=t,n=Ja.textContent,n.charCodeAt(n.length-1)===U0&&e!=="semi"||n===t?!1:n}var sb=I0,lb=C0,j0=Ok,$0=x0,Lk=F0,z0=B0,H0=rM,G0={}.hasOwnProperty,Wn=String.fromCharCode,W0=Function.prototype,ub={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},V0=9,cb=10,Y0=12,K0=32,db=38,X0=59,Z0=60,J0=61,Q0=35,eM=88,tM=120,nM=65533,Vn="named",Cm="hexadecimal",_m="decimal",xm={};xm[Cm]=16;xm[_m]=10;var bi={};bi[Vn]=Lk;bi[_m]=j0;bi[Cm]=$0;var Dk=1,Mk=2,Fk=3,Pk=4,Uk=5,gf=6,Bk=7,Sn={};Sn[Dk]="Named character references must be terminated by a semicolon";Sn[Mk]="Numeric character references must be terminated by a semicolon";Sn[Fk]="Named character references cannot be empty";Sn[Pk]="Numeric character references cannot be empty";Sn[Uk]="Named character references must be known";Sn[gf]="Numeric character references cannot be disallowed";Sn[Bk]="Numeric character references cannot be outside the permissible Unicode range";function rM(e,t){var n={},r,a;t||(t={});for(a in ub)r=t[a],n[a]=r==null?ub[a]:r;return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),aM(e,n)}function aM(e,t){var n=t.additional,r=t.nonTerminated,a=t.text,o=t.reference,i=t.warning,s=t.textContext,l=t.referenceContext,u=t.warningContext,c=t.position,d=t.indent||[],m=e.length,g=0,E=-1,y=c.column||1,A=c.line||1,h="",f=[],p,S,T,b,k,I,C,O,N,P,B,V,K,X,J,x,F,M,w;for(typeof n=="string"&&(n=n.charCodeAt(0)),x=R(),O=i?pe:W0,g--,m++;++g<m;)if(k===cb&&(y=d[E]||1),k=e.charCodeAt(g),k===db){if(C=e.charCodeAt(g+1),C===V0||C===cb||C===Y0||C===K0||C===db||C===Z0||C!==C||n&&C===n){h+=Wn(k),y++;continue}for(K=g+1,V=K,w=K,C===Q0?(w=++V,C=e.charCodeAt(w),C===eM||C===tM?(X=Cm,w=++V):X=_m):X=Vn,p="",B="",b="",J=bi[X],w--;++w<m&&(C=e.charCodeAt(w),!!J(C));)b+=Wn(C),X===Vn&&G0.call(sb,b)&&(p=b,B=sb[b]);T=e.charCodeAt(w)===X0,T&&(w++,S=X===Vn?z0(b):!1,S&&(p=b,B=S)),M=1+w-K,!T&&!r||(b?X===Vn?(T&&!B?O(Uk,1):(p!==b&&(w=V+p.length,M=1+w-V,T=!1),T||(N=p?Dk:Fk,t.attribute?(C=e.charCodeAt(w),C===J0?(O(N,M),B=null):Lk(C)?B=null:O(N,M)):O(N,M))),I=B):(T||O(Mk,M),I=parseInt(b,xm[X]),oM(I)?(O(Bk,M),I=Wn(nM)):I in lb?(O(gf,M),I=lb[I]):(P="",iM(I)&&O(gf,M),I>65535&&(I-=65536,P+=Wn(I>>>10|55296),I=56320|I&1023),I=P+Wn(I))):X!==Vn&&O(Pk,M)),I?(ee(),x=R(),g=w-1,y+=w-K+1,f.push(I),F=R(),F.offset++,o&&o.call(l,I,{start:x,end:F},e.slice(K-1,w)),x=F):(b=e.slice(K-1,w),h+=b,y+=b.length,g=w-1)}else k===10&&(A++,E++,y=0),k===k?(h+=Wn(k),y++):ee();return f.join("");function R(){return{line:A,column:y,offset:g+(c.offset||0)}}function pe(be,G){var oe=R();oe.column+=G,oe.offset+=G,i.call(u,Sn[be],oe,be)}function ee(){h&&(f.push(h),a&&a.call(s,h,{start:x,end:R()}),h="")}}function oM(e){return e>=55296&&e<=57343||e>1114111}function iM(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var qk={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function f(p){return p instanceof l?new l(p.type,f(p.content),p.alias):Array.isArray(p)?p.map(f):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++o}),f.__id},clone:function f(p,S){S=S||{};var T,b;switch(s.util.type(p)){case"Object":if(b=s.util.objId(p),S[b])return S[b];T={},S[b]=T;for(var k in p)p.hasOwnProperty(k)&&(T[k]=f(p[k],S));return T;case"Array":return b=s.util.objId(p),S[b]?S[b]:(T=[],S[b]=T,p.forEach(function(I,C){T[C]=f(I,S)}),T);default:return p}},getLanguage:function(f){for(;f;){var p=a.exec(f.className);if(p)return p[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,p){f.className=f.className.replace(RegExp(a,"gi"),""),f.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(f){var p=document.getElementsByTagName("script");for(var S in p)if(p[S].src==f)return p[S]}return null}},isActive:function(f,p,S){for(var T="no-"+p;f;){var b=f.classList;if(b.contains(p))return!0;if(b.contains(T))return!1;f=f.parentElement}return!!S}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(f,p){var S=s.util.clone(s.languages[f]);for(var T in p)S[T]=p[T];return S},insertBefore:function(f,p,S,T){T=T||s.languages;var b=T[f],k={};for(var I in b)if(b.hasOwnProperty(I)){if(I==p)for(var C in S)S.hasOwnProperty(C)&&(k[C]=S[C]);S.hasOwnProperty(I)||(k[I]=b[I])}var O=T[f];return T[f]=k,s.languages.DFS(s.languages,function(N,P){P===O&&N!=f&&(this[N]=k)}),k},DFS:function f(p,S,T,b){b=b||{};var k=s.util.objId;for(var I in p)if(p.hasOwnProperty(I)){S.call(p,I,p[I],T||I);var C=p[I],O=s.util.type(C);O==="Object"&&!b[k(C)]?(b[k(C)]=!0,f(C,S,null,b)):O==="Array"&&!b[k(C)]&&(b[k(C)]=!0,f(C,S,I,b))}}},plugins:{},highlightAll:function(f,p){s.highlightAllUnder(document,f,p)},highlightAllUnder:function(f,p,S){var T={callback:S,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),s.hooks.run("before-all-elements-highlight",T);for(var b=0,k;k=T.elements[b++];)s.highlightElement(k,p===!0,T.callback)},highlightElement:function(f,p,S){var T=s.util.getLanguage(f),b=s.languages[T];s.util.setLanguage(f,T);var k=f.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(k,T);var I=f.textContent,C={element:f,language:T,grammar:b,code:I};function O(P){C.highlightedCode=P,s.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,s.hooks.run("after-highlight",C),s.hooks.run("complete",C),S&&S.call(C.element)}if(s.hooks.run("before-sanity-check",C),k=C.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!C.code){s.hooks.run("complete",C),S&&S.call(C.element);return}if(s.hooks.run("before-highlight",C),!C.grammar){O(s.util.encode(C.code));return}if(p&&r.Worker){var N=new Worker(s.filename);N.onmessage=function(P){O(P.data)},N.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else O(s.highlight(C.code,C.grammar,C.language))},highlight:function(f,p,S){var T={code:f,grammar:p,language:S};if(s.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=s.tokenize(T.code,T.grammar),s.hooks.run("after-tokenize",T),l.stringify(s.util.encode(T.tokens),T.language)},tokenize:function(f,p){var S=p.rest;if(S){for(var T in S)p[T]=S[T];delete p.rest}var b=new d;return m(b,b.head,f),c(f,b,p,b.head,0),E(b)},hooks:{all:{},add:function(f,p){var S=s.hooks.all;S[f]=S[f]||[],S[f].push(p)},run:function(f,p){var S=s.hooks.all[f];if(!(!S||!S.length))for(var T=0,b;b=S[T++];)b(p)}},Token:l};r.Prism=s;function l(f,p,S,T){this.type=f,this.content=p,this.alias=S,this.length=(T||"").length|0}l.stringify=function f(p,S){if(typeof p=="string")return p;if(Array.isArray(p)){var T="";return p.forEach(function(O){T+=f(O,S)}),T}var b={type:p.type,content:f(p.content,S),tag:"span",classes:["token",p.type],attributes:{},language:S},k=p.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(b.classes,k):b.classes.push(k)),s.hooks.run("wrap",b);var I="";for(var C in b.attributes)I+=" "+C+'="'+(b.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+I+">"+b.content+"</"+b.tag+">"};function u(f,p,S,T){f.lastIndex=p;var b=f.exec(S);if(b&&T&&b[1]){var k=b[1].length;b.index+=k,b[0]=b[0].slice(k)}return b}function c(f,p,S,T,b,k){for(var I in S)if(!(!S.hasOwnProperty(I)||!S[I])){var C=S[I];C=Array.isArray(C)?C:[C];for(var O=0;O<C.length;++O){if(k&&k.cause==I+","+O)return;var N=C[O],P=N.inside,B=!!N.lookbehind,V=!!N.greedy,K=N.alias;if(V&&!N.pattern.global){var X=N.pattern.toString().match(/[imsuy]*$/)[0];N.pattern=RegExp(N.pattern.source,X+"g")}for(var J=N.pattern||N,x=T.next,F=b;x!==p.tail&&!(k&&F>=k.reach);F+=x.value.length,x=x.next){var M=x.value;if(p.length>f.length)return;if(!(M instanceof l)){var w=1,R;if(V){if(R=u(J,F,f,B),!R||R.index>=f.length)break;var G=R.index,pe=R.index+R[0].length,ee=F;for(ee+=x.value.length;G>=ee;)x=x.next,ee+=x.value.length;if(ee-=x.value.length,F=ee,x.value instanceof l)continue;for(var be=x;be!==p.tail&&(ee<pe||typeof be.value=="string");be=be.next)w++,ee+=be.value.length;w--,M=f.slice(F,ee),R.index-=F}else if(R=u(J,0,M,B),!R)continue;var G=R.index,oe=R[0],Be=M.slice(0,G),qt=M.slice(G+oe.length),_t=F+M.length;k&&_t>k.reach&&(k.reach=_t);var Qt=x.prev;Be&&(Qt=m(p,Qt,Be),F+=Be.length),g(p,Qt,w);var Si=new l(I,P?s.tokenize(oe,P):oe,K,oe);if(x=m(p,Qt,Si),qt&&m(p,x,qt),w>1){var zn={cause:I+","+O,reach:_t};c(f,p,S,x.prev,F,zn),k&&zn.reach>k.reach&&(k.reach=zn.reach)}}}}}}function d(){var f={value:null,prev:null,next:null},p={value:null,prev:f,next:null};f.next=p,this.head=f,this.tail=p,this.length=0}function m(f,p,S){var T=p.next,b={value:S,prev:p,next:T};return p.next=b,T.prev=b,f.length++,b}function g(f,p,S){for(var T=p.next,b=0;b<S&&T!==f.tail;b++)T=T.next;p.next=T,T.prev=p,f.length-=b}function E(f){for(var p=[],S=f.head.next;S!==f.tail;)p.push(S.value),S=S.next;return p}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(f){var p=JSON.parse(f.data),S=p.language,T=p.code,b=p.immediateClose;r.postMessage(s.highlight(T,s.languages[S],S)),b&&r.close()},!1)),s;var y=s.util.currentScript();y&&(s.filename=y.src,y.hasAttribute("data-manual")&&(s.manual=!0));function A(){s.manual||s.highlightAll()}if(!s.manual){var h=document.readyState;h==="loading"||h==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return s}(t);e.exports&&(e.exports=n),typeof bo<"u"&&(bo.Prism=n)})(qk);var sM=Nm;Nm.displayName="markup";Nm.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Nm(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var lM=Om;Om.displayName="css";Om.aliases=[];function Om(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}var uM=Lm;Lm.displayName="clike";Lm.aliases=[];function Lm(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var cM=Dm;Dm.displayName="javascript";Dm.aliases=["js"];function Dm(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Wr=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof bo=="object"?bo:{},dM=IM();Wr.Prism={manual:!0,disableWorkerMessageHandler:!0};var pM=Ek.exports,fM=H0,jk=qk.exports,mM=sM,hM=lM,gM=uM,bM=cM;dM();var Mm={}.hasOwnProperty;function $k(){}$k.prototype=jk;var Te=new $k,yM=Te;Te.highlight=EM;Te.register=xa;Te.alias=vM;Te.registered=wM;Te.listLanguages=SM;xa(mM);xa(hM);xa(gM);xa(bM);Te.util.encode=kM;Te.Token.stringify=RM;function xa(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Te.languages[e.displayName]===void 0&&e(Te)}function vM(e,t){var n=Te.languages,r=e,a,o,i,s;t&&(r={},r[e]=t);for(a in r)for(o=r[a],o=typeof o=="string"?[o]:o,i=o.length,s=-1;++s<i;)n[o[s]]=n[a]}function EM(e,t){var n=jk.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Te.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Mm.call(Te.languages,t))r=Te.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function wM(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Mm.call(Te.languages,e)}function SM(){var e=Te.languages,t=[],n;for(n in e)Mm.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function RM(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:Te.util.type(e)==="Array"?TM(e,t):(r={type:e.type,content:Te.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),Te.hooks.run("wrap",r),pM(r.tag+"."+r.classes.join("."),AM(r.attributes),r.content))}function TM(e,t){for(var n=[],r=e.length,a=-1,o;++a<r;)o=e[a],o!==""&&o!==null&&o!==void 0&&n.push(o);for(a=-1,r=n.length;++a<r;)o=n[a],n[a]=Te.Token.stringify(o,t,n);return n}function kM(e){return e}function AM(e){var t;for(t in e)e[t]=fM(e[t]);return e}function IM(){var e="Prism"in Wr,t=e?Wr.Prism:void 0;return n;function n(){e?Wr.Prism=t:delete Wr.Prism,e=void 0,t=void 0}}const CM={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};var ss,pb;function _M(){if(pb)return ss;pb=1,ss=e,e.displayName="abap",e.aliases=[];function e(t){t.languages.abap={comment:/^\*.*/m,string:/(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/,"string-template":{pattern:/([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/,lookbehind:!0,alias:"string"},"eol-comment":{pattern:/(^|\s)".*/m,lookbehind:!0,alias:"comment"},keyword:{pattern:/(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,lookbehind:!0},number:/\b\d+\b/,operator:{pattern:/(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,lookbehind:!0},"string-operator":{pattern:/(\s)&&?(?=\s)/,lookbehind:!0,alias:"keyword"},"token-operator":[{pattern:/(\w)(?:->?|=>|[~|{}])(?=\w)/,lookbehind:!0,alias:"punctuation"},{pattern:/[|{}]/,alias:"punctuation"}],punctuation:/[,.:()]/}}return ss}var ls,fb;function xM(){if(fb)return ls;fb=1,ls=e,e.displayName="abnf",e.aliases=[];function e(t){(function(n){var r="(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";n.languages.abnf={comment:/;.*/,string:{pattern:/(?:%[is])?"[^"\n\r]*"/,greedy:!0,inside:{punctuation:/^%[is]/}},range:{pattern:/%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,alias:"number"},terminal:{pattern:/%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,alias:"number"},repetition:{pattern:/(^|[^\w-])(?:\d*\*\d*|\d+)/,lookbehind:!0,alias:"operator"},definition:{pattern:/(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,lookbehind:!0,alias:"keyword",inside:{punctuation:/<|>/}},"core-rule":{pattern:RegExp("(?:(^|[^<\\w-])"+r+"|<"+r+">)(?![\\w-])","i"),lookbehind:!0,alias:["rule","constant"],inside:{punctuation:/<|>/}},rule:{pattern:/(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,lookbehind:!0,inside:{punctuation:/<|>/}},operator:/=\/?|\//,punctuation:/[()\[\]]/}})(t)}return ls}var us,mb;function NM(){if(mb)return us;mb=1,us=e,e.displayName="actionscript",e.aliases=[];function e(t){t.languages.actionscript=t.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),t.languages.actionscript["class-name"].alias="function",delete t.languages.actionscript.parameter,delete t.languages.actionscript["literal-property"],t.languages.markup&&t.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:t.languages.markup}})}return us}var cs,hb;function OM(){if(hb)return cs;hb=1,cs=e,e.displayName="ada",e.aliases=[];function e(t){t.languages.ada={comment:/--.*/,string:/"(?:""|[^"\r\f\n])*"/,number:[{pattern:/\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i},{pattern:/\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i}],"attr-name":/\b'\w+/,keyword:/\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|new|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|return|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,boolean:/\b(?:false|true)\b/i,operator:/<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,punctuation:/\.\.?|[,;():]/,char:/'.'/,variable:/\b[a-z](?:\w)*\b/i}}return cs}var ds,gb;function LM(){if(gb)return ds;gb=1,ds=e,e.displayName="agda",e.aliases=[];function e(t){(function(n){n.languages.agda={comment:/\{-[\s\S]*?(?:-\}|$)|--.*/,string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},punctuation:/[(){}⦃⦄.;@]/,"class-name":{pattern:/((?:data|record) +)\S+/,lookbehind:!0},function:{pattern:/(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,lookbehind:!0},operator:{pattern:/(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,lookbehind:!0},keyword:/\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/}})(t)}return ds}var ps,bb;function DM(){if(bb)return ps;bb=1,ps=e,e.displayName="al",e.aliases=[];function e(t){t.languages.al={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,greedy:!0},function:{pattern:/(\b(?:event|procedure|trigger)\s+|(?:^|[^.])\.\s*)[a-z_]\w*(?=\s*\()/i,lookbehind:!0},keyword:[/\b(?:array|asserterror|begin|break|case|do|downto|else|end|event|exit|for|foreach|function|if|implements|in|indataset|interface|internal|local|of|procedure|program|protected|repeat|runonclient|securityfiltering|suppressdispose|temporary|then|to|trigger|until|var|while|with|withevents)\b/i,/\b(?:action|actions|addafter|addbefore|addfirst|addlast|area|assembly|chartpart|codeunit|column|controladdin|cuegroup|customizes|dataitem|dataset|dotnet|elements|enum|enumextension|extends|field|fieldattribute|fieldelement|fieldgroup|fieldgroups|fields|filter|fixed|grid|group|key|keys|label|labels|layout|modify|moveafter|movebefore|movefirst|movelast|page|pagecustomization|pageextension|part|profile|query|repeater|report|requestpage|schema|separator|systempart|table|tableelement|tableextension|textattribute|textelement|type|usercontrol|value|xmlport)\b/i],number:/\b(?:0x[\da-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)(?:F|LL?|U(?:LL?)?)?\b/i,boolean:/\b(?:false|true)\b/i,variable:/\b(?:Curr(?:FieldNo|Page|Report)|x?Rec|RequestOptionsPage)\b/,"class-name":/\b(?:automation|biginteger|bigtext|blob|boolean|byte|char|clienttype|code|completiontriggererrorlevel|connectiontype|database|dataclassification|datascope|date|dateformula|datetime|decimal|defaultlayout|dialog|dictionary|dotnetassembly|dotnettypedeclaration|duration|errorinfo|errortype|executioncontext|executionmode|fieldclass|fieldref|fieldtype|file|filterpagebuilder|guid|httpclient|httpcontent|httpheaders|httprequestmessage|httpresponsemessage|instream|integer|joker|jsonarray|jsonobject|jsontoken|jsonvalue|keyref|list|moduledependencyinfo|moduleinfo|none|notification|notificationscope|objecttype|option|outstream|pageresult|record|recordid|recordref|reportformat|securityfilter|sessionsettings|tableconnectiontype|tablefilter|testaction|testfield|testfilterfield|testpage|testpermissions|testrequestpage|text|textbuilder|textconst|textencoding|time|transactionmodel|transactiontype|variant|verbosity|version|view|views|webserviceactioncontext|webserviceactionresultcode|xmlattribute|xmlattributecollection|xmlcdata|xmlcomment|xmldeclaration|xmldocument|xmldocumenttype|xmlelement|xmlnamespacemanager|xmlnametable|xmlnode|xmlnodelist|xmlprocessinginstruction|xmlreadoptions|xmltext|xmlwriteoptions)\b/i,operator:/\.\.|:[=:]|[-+*/]=?|<>|[<>]=?|=|\b(?:and|div|mod|not|or|xor)\b/i,punctuation:/[()\[\]{}:.;,]/}}return ps}var fs,yb;function MM(){if(yb)return fs;yb=1,fs=e,e.displayName="antlr4",e.aliases=["g4"];function e(t){t.languages.antlr4={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,string:{pattern:/'(?:\\.|[^\\'\r\n])*'/,greedy:!0},"character-class":{pattern:/\[(?:\\.|[^\\\]\r\n])*\]/,greedy:!0,alias:"regex",inside:{range:{pattern:/([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,lookbehind:!0,alias:"punctuation"},escape:/\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,punctuation:/[\[\]]/}},action:{pattern:/\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,greedy:!0,inside:{content:{pattern:/(\{)[\s\S]+(?=\})/,lookbehind:!0},punctuation:/[{}]/}},command:{pattern:/(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,lookbehind:!0,inside:{function:/\b\w+(?=\s*(?:[,(]|$))/,punctuation:/[,()]/}},annotation:{pattern:/@\w+(?:::\w+)*/,alias:"keyword"},label:{pattern:/#[ \t]*\w+/,alias:"punctuation"},keyword:/\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,definition:[{pattern:/\b[a-z]\w*(?=\s*:)/,alias:["rule","class-name"]},{pattern:/\b[A-Z]\w*(?=\s*:)/,alias:["token","constant"]}],constant:/\b[A-Z][A-Z_]*\b/,operator:/\.\.|->|[|~]|[*+?]\??/,punctuation:/[;:()=]/},t.languages.g4=t.languages.antlr4}return fs}var ms,vb;function FM(){if(vb)return ms;vb=1,ms=e,e.displayName="apacheconf",e.aliases=[];function e(t){t.languages.apacheconf={comment:/#.*/,"directive-inline":{pattern:/(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|Type|UserFile|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|Limit(?:InternalRecursion|Request(?:Body|Fields|FieldSize|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|SRPUnknownUserSeed|SRPVerifierFile|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UserName|UseStapling|VerifyClient|VerifyDepth)|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,lookbehind:!0,alias:"property"},"directive-block":{pattern:/<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,inside:{"directive-block":{pattern:/^<\/?\w+/,inside:{punctuation:/^<\/?/},alias:"tag"},"directive-block-parameter":{pattern:/.*[^>]/,inside:{punctuation:/:/,string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}}},alias:"attr-value"},punctuation:/>/},alias:"tag"},"directive-flags":{pattern:/\[(?:[\w=],?)+\]/,alias:"keyword"},string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}},variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/,regex:/\^?.*\$|\^.*\$?/}}return ms}var hs,Eb;function Fm(){if(Eb)return hs;Eb=1,hs=e,e.displayName="sql",e.aliases=[];function e(t){t.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/}}return hs}var gs,wb;function PM(){if(wb)return gs;wb=1;var e=Fm();gs=t,t.displayName="apex",t.aliases=[];function t(n){n.register(e),function(r){var a=/\b(?:(?:after|before)(?=\s+[a-z])|abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|get(?=\s*[{};])|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|(?:inherited|with|without)\s+sharing)\b/i,o=/\b(?:(?=[a-z_]\w*\s*[<\[])|(?!<keyword>))[A-Z_]\w*(?:\s*\.\s*[A-Z_]\w*)*\b(?:\s*(?:\[\s*\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*/.source.replace(/<keyword>/g,function(){return a.source});function i(l){return RegExp(l.replace(/<CLASS-NAME>/g,function(){return o}),"i")}var s={keyword:a,punctuation:/[()\[\]{};,:.<>]/};r.languages.apex={comment:r.languages.clike.comment,string:r.languages.clike.string,sql:{pattern:/((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i,lookbehind:!0,greedy:!0,alias:"language-sql",inside:r.languages.sql},annotation:{pattern:/@\w+\b/,alias:"punctuation"},"class-name":[{pattern:i(/(\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\s+\w+\s+on)\s+)<CLASS-NAME>/.source),lookbehind:!0,inside:s},{pattern:i(/(\(\s*)<CLASS-NAME>(?=\s*\)\s*[\w(])/.source),lookbehind:!0,inside:s},{pattern:i(/<CLASS-NAME>(?=\s*\w+\s*[;=,(){:])/.source),inside:s}],trigger:{pattern:/(\btrigger\s+)\w+\b/i,lookbehind:!0,alias:"class-name"},keyword:a,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i,operator:/[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/,punctuation:/[()\[\]{};,.]/}}(n)}return gs}var bs,Sb;function UM(){if(Sb)return bs;Sb=1,bs=e,e.displayName="apl",e.aliases=[];function e(t){t.languages.apl={comment:/(?:⍝|#[! ]).*$/m,string:{pattern:/'(?:[^'\r\n]|'')*'/,greedy:!0},number:/¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,statement:/:[A-Z][a-z][A-Za-z]*\b/,"system-function":{pattern:/⎕[A-Z]+/i,alias:"function"},constant:/[⍬⌾#⎕⍞]/,function:/[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,"monadic-operator":{pattern:/[\\\/⌿⍀¨⍨⌶&∥]/,alias:"operator"},"dyadic-operator":{pattern:/[.⍣⍠⍤∘⌸@⌺⍥]/,alias:"operator"},assignment:{pattern:/←/,alias:"keyword"},punctuation:/[\[;\]()◇⋄]/,dfn:{pattern:/[{}⍺⍵⍶⍹∇⍫:]/,alias:"builtin"}}}return bs}var ys,Rb;function BM(){if(Rb)return ys;Rb=1,ys=e,e.displayName="applescript",e.aliases=[];function e(t){t.languages.applescript={comment:[/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,/--.+/,/#.+/],string:/"(?:\\.|[^"\\\r\n])*"/,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?\b/i,operator:[/[&=≠≤≥*+\-\/÷^]|[<>]=?/,/\b(?:(?:begin|end|start)s? with|(?:contains?|(?:does not|doesn't) contain)|(?:is|isn't|is not) (?:contained by|in)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:comes|(?:does not|doesn't) come) (?:after|before)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equal to|equals|is not|isn't)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|as|div|mod|not|or))\b/],keyword:/\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,"class-name":/\b(?:POSIX file|RGB color|alias|application|boolean|centimeters|centimetres|class|constant|cubic centimeters|cubic centimetres|cubic feet|cubic inches|cubic meters|cubic metres|cubic yards|date|degrees Celsius|degrees Fahrenheit|degrees Kelvin|feet|file|gallons|grams|inches|integer|kilograms|kilometers|kilometres|list|liters|litres|meters|metres|miles|number|ounces|pounds|quarts|real|record|reference|script|square feet|square kilometers|square kilometres|square meters|square metres|square miles|square yards|text|yards)\b/,punctuation:/[{}():,¬«»《》]/}}return ys}var vs,Tb;function qM(){if(Tb)return vs;Tb=1,vs=e,e.displayName="aql",e.aliases=[];function e(t){t.languages.aql={comment:/\/\/.*|\/\*[\s\S]*?\*\//,property:{pattern:/([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},identifier:{pattern:/([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},variable:/@@?\w+/,keyword:[{pattern:/(\bWITH\s+)COUNT(?=\s+INTO\b)/i,lookbehind:!0},/\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,{pattern:/(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,lookbehind:!0},{pattern:/(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,lookbehind:!0},{pattern:/\bOPTIONS(?=\s*\{)/i}],function:/\b(?!\d)\w+(?=\s*\()/,boolean:/\b(?:false|true)\b/i,range:{pattern:/\.\./,alias:"operator"},number:[/\b0b[01]+/i,/\b0x[0-9a-f]+/i,/(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i],operator:/\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,punctuation:/::|[?.:,;()[\]{}]/}}return vs}var Es,kb;function $n(){if(kb)return Es;kb=1,Es=e,e.displayName="c",e.aliases=[];function e(t){t.languages.c=t.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),t.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),t.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},t.languages.c.string],char:t.languages.c.char,comment:t.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:t.languages.c}}}}),t.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete t.languages.c.boolean}return Es}var ws,Ab;function Pm(){if(Ab)return ws;Ab=1;var e=$n();ws=t,t.displayName="cpp",t.aliases=[];function t(n){n.register(e),function(r){var a=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,o=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return a.source});r.languages.cpp=r.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return a.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:a,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),r.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return o})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),r.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r.languages.cpp}}}}),r.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),r.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:r.languages.extend("cpp",{})}}),r.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},r.languages.cpp["base-clause"])}(n)}return ws}var Ss,Ib;function jM(){if(Ib)return Ss;Ib=1;var e=Pm();Ss=t,t.displayName="arduino",t.aliases=["ino"];function t(n){n.register(e),n.languages.arduino=n.languages.extend("cpp",{keyword:/\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,constant:/\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,builtin:/\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/}),n.languages.ino=n.languages.arduino}return Ss}var Rs,Cb;function $M(){if(Cb)return Rs;Cb=1,Rs=e,e.displayName="arff",e.aliases=[];function e(t){t.languages.arff={comment:/%.*/,string:{pattern:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/@(?:attribute|data|end|relation)\b/i,number:/\b\d+(?:\.\d+)?\b/,punctuation:/[{},]/}}return Rs}var Ts,_b;function zM(){if(_b)return Ts;_b=1,Ts=e,e.displayName="asciidoc",e.aliases=["adoc"];function e(t){(function(n){var r={pattern:/(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,lookbehind:!0,inside:{quoted:{pattern:/([$`])(?:(?!\1)[^\\]|\\.)*\1/,inside:{punctuation:/^[$`]|[$`]$/}},interpreted:{pattern:/'(?:[^'\\]|\\.)*'/,inside:{punctuation:/^'|'$/}},string:/"(?:[^"\\]|\\.)*"/,variable:/\w+(?==)/,punctuation:/^\[|\]$|,/,operator:/=/,"attr-value":/(?!^\s+$).+/}},a=n.languages.asciidoc={"comment-block":{pattern:/^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,alias:"comment"},table:{pattern:/^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,inside:{specifiers:{pattern:/(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,alias:"attr-value"},punctuation:{pattern:/(^|[^\\])[|!]=*/,lookbehind:!0}}},"passthrough-block":{pattern:/^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^\++|\++$/}},"literal-block":{pattern:/^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^(?:-+|\.+)|(?:-+|\.+)$/}},"other-block":{pattern:/^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/}},"list-punctuation":{pattern:/(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,lookbehind:!0,alias:"punctuation"},"list-label":{pattern:/(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,lookbehind:!0,alias:"symbol"},"indented-block":{pattern:/((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,lookbehind:!0},comment:/^\/\/.*/m,title:{pattern:/^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,alias:"important",inside:{punctuation:/^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/}},"attribute-entry":{pattern:/^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,alias:"tag"},attributes:r,hr:{pattern:/^'{3,}$/m,alias:"punctuation"},"page-break":{pattern:/^<{3,}$/m,alias:"punctuation"},admonition:{pattern:/^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,alias:"keyword"},callout:[{pattern:/(^[ \t]*)<?\d*>/m,lookbehind:!0,alias:"symbol"},{pattern:/<\d+>/,alias:"symbol"}],macro:{pattern:/\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:{function:/^[a-z\d-]+(?=:)/,punctuation:/^::?/,attributes:{pattern:/(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:r.inside}}},inline:{pattern:/(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,lookbehind:!0,inside:{attributes:r,url:{pattern:/^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,inside:{punctuation:/^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/}},"attribute-ref":{pattern:/^\{.+\}$/,inside:{variable:{pattern:/(^\{)[a-z\d,+_-]+/,lookbehind:!0},operator:/^[=?!#%@$]|!(?=[:}])/,punctuation:/^\{|\}$|::?/}},italic:{pattern:/^(['_])[\s\S]+\1$/,inside:{punctuation:/^(?:''?|__?)|(?:''?|__?)$/}},bold:{pattern:/^\*[\s\S]+\*$/,inside:{punctuation:/^\*\*?|\*\*?$/}},punctuation:/^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/}},replacement:{pattern:/\((?:C|R|TM)\)/,alias:"builtin"},entity:/&#?[\da-z]{1,8};/i,"line-continuation":{pattern:/(^| )\+$/m,lookbehind:!0,alias:"punctuation"}};function o(i){i=i.split(" ");for(var s={},l=0,u=i.length;l<u;l++)s[i[l]]=a[i[l]];return s}r.inside.interpreted.inside.rest=o("macro inline replacement entity"),a["passthrough-block"].inside.rest=o("macro"),a["literal-block"].inside.rest=o("callout"),a.table.inside.rest=o("comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"),a["other-block"].inside.rest=o("table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"),a.title.inside.rest=o("macro inline replacement entity"),n.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.value.replace(/&amp;/,"&"))}),n.languages.adoc=n.languages.asciidoc})(t)}return Ts}var ks,xb;function HM(){if(xb)return ks;xb=1,ks=e,e.displayName="asm6502",e.aliases=[];function e(t){t.languages.asm6502={comment:/;.*/,directive:{pattern:/\.\w+(?= )/,alias:"property"},string:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,"op-code":{pattern:/\b(?:ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\b/,alias:"keyword"},"hex-number":{pattern:/#?\$[\da-f]{1,4}\b/i,alias:"number"},"binary-number":{pattern:/#?%[01]+\b/,alias:"number"},"decimal-number":{pattern:/#?\b\d+\b/,alias:"number"},register:{pattern:/\b[xya]\b/i,alias:"variable"},punctuation:/[(),:]/}}return ks}var As,Nb;function GM(){if(Nb)return As;Nb=1,As=e,e.displayName="asmatmel",e.aliases=[];function e(t){t.languages.asmatmel={comment:{pattern:/;.*/,greedy:!0},string:{pattern:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},constant:/\b(?:PORT[A-Z]|DDR[A-Z]|(?:DD|P)[A-Z](?:\d|[0-2]\d|3[01]))\b/,directive:{pattern:/\.\w+(?= )/,alias:"property"},"r-register":{pattern:/\br(?:\d|[12]\d|3[01])\b/,alias:"variable"},"op-code":{pattern:/\b(?:ADC|ADD|ADIW|AND|ANDI|ASR|BCLR|BLD|BRBC|BRBS|BRCC|BRCS|BREAK|BREQ|BRGE|BRHC|BRHS|BRID|BRIE|BRLO|BRLT|BRMI|BRNE|BRPL|BRSH|BRTC|BRTS|BRVC|BRVS|BSET|BST|CALL|CBI|CBR|CLC|CLH|CLI|CLN|CLR|CLS|CLT|CLV|CLZ|COM|CP|CPC|CPI|CPSE|DEC|DES|EICALL|EIJMP|ELPM|EOR|FMUL|FMULS|FMULSU|ICALL|IJMP|IN|INC|JMP|LAC|LAS|LAT|LD|LD[A-Za-z0-9]|LPM|LSL|LSR|MOV|MOVW|MUL|MULS|MULSU|NEG|NOP|OR|ORI|OUT|POP|PUSH|RCALL|RET|RETI|RJMP|ROL|ROR|SBC|SBCI|SBI|SBIC|SBIS|SBIW|SBR|SBRC|SBRS|SEC|SEH|SEI|SEN|SER|SES|SET|SEV|SEZ|SLEEP|SPM|ST|ST[A-Z0-9]|SUB|SUBI|SWAP|TST|WDR|XCH|adc|add|adiw|and|andi|asr|bclr|bld|brbc|brbs|brcc|brcs|break|breq|brge|brhc|brhs|brid|brie|brlo|brlt|brmi|brne|brpl|brsh|brtc|brts|brvc|brvs|bset|bst|call|cbi|cbr|clc|clh|cli|cln|clr|cls|clt|clv|clz|com|cp|cpc|cpi|cpse|dec|des|eicall|eijmp|elpm|eor|fmul|fmuls|fmulsu|icall|ijmp|in|inc|jmp|lac|las|lat|ld|ld[a-z0-9]|lpm|lsl|lsr|mov|movw|mul|muls|mulsu|neg|nop|or|ori|out|pop|push|rcall|ret|reti|rjmp|rol|ror|sbc|sbci|sbi|sbic|sbis|sbiw|sbr|sbrc|sbrs|sec|seh|sei|sen|ser|ses|set|sev|sez|sleep|spm|st|st[a-zA-Z0-9]|sub|subi|swap|tst|wdr|xch)\b/,alias:"keyword"},"hex-number":{pattern:/#?\$[\da-f]{2,4}\b/i,alias:"number"},"binary-number":{pattern:/#?%[01]+\b/,alias:"number"},"decimal-number":{pattern:/#?\b\d+\b/,alias:"number"},register:{pattern:/\b[acznvshtixy]\b/i,alias:"variable"},operator:/>>=?|<<=?|&&?|\|\|?|[-+*/%&|^!=<>?]=?/,punctuation:/[(),:]/}}return As}var Is,Ob;function yi(){if(Ob)return Is;Ob=1,Is=e,e.displayName="csharp",e.aliases=["dotnet","cs"];function e(t){(function(n){function r(w,R){return w.replace(/<<(\d+)>>/g,function(pe,ee){return"(?:"+R[+ee]+")"})}function a(w,R,pe){return RegExp(r(w,R),pe||"")}function o(w,R){for(var pe=0;pe<R;pe++)w=w.replace(/<<self>>/g,function(){return"(?:"+w+")"});return w.replace(/<<self>>/g,"[^\\s\\S]")}var i={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function s(w){return"\\b(?:"+w.trim().replace(/ /g,"|")+")\\b"}var l=s(i.typeDeclaration),u=RegExp(s(i.type+" "+i.typeDeclaration+" "+i.contextual+" "+i.other)),c=s(i.typeDeclaration+" "+i.contextual+" "+i.other),d=s(i.type+" "+i.typeDeclaration+" "+i.other),m=o(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),g=o(/\((?:[^()]|<<self>>)*\)/.source,2),E=/@?\b[A-Za-z_]\w*\b/.source,y=r(/<<0>>(?:\s*<<1>>)?/.source,[E,m]),A=r(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[c,y]),h=/\[\s*(?:,\s*)*\]/.source,f=r(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[A,h]),p=r(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[m,g,h]),S=r(/\(<<0>>+(?:,<<0>>+)+\)/.source,[p]),T=r(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[S,A,h]),b={keyword:u,punctuation:/[<>()?,.:[\]]/},k=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,I=/"(?:\\.|[^\\"\r\n])*"/.source,C=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;n.languages.csharp=n.languages.extend("clike",{string:[{pattern:a(/(^|[^$\\])<<0>>/.source,[C]),lookbehind:!0,greedy:!0},{pattern:a(/(^|[^@$\\])<<0>>/.source,[I]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:a(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[A]),lookbehind:!0,inside:b},{pattern:a(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[E,T]),lookbehind:!0,inside:b},{pattern:a(/(\busing\s+)<<0>>(?=\s*=)/.source,[E]),lookbehind:!0},{pattern:a(/(\b<<0>>\s+)<<1>>/.source,[l,y]),lookbehind:!0,inside:b},{pattern:a(/(\bcatch\s*\(\s*)<<0>>/.source,[A]),lookbehind:!0,inside:b},{pattern:a(/(\bwhere\s+)<<0>>/.source,[E]),lookbehind:!0},{pattern:a(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[f]),lookbehind:!0,inside:b},{pattern:a(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[T,d,E]),inside:b}],keyword:u,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),n.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),n.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:a(/([(,]\s*)<<0>>(?=\s*:)/.source,[E]),lookbehind:!0,alias:"punctuation"}}),n.languages.insertBefore("csharp","class-name",{namespace:{pattern:a(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[E]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:a(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[g]),lookbehind:!0,alias:"class-name",inside:b},"return-type":{pattern:a(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[T,A]),inside:b,alias:"class-name"},"constructor-invocation":{pattern:a(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[T]),lookbehind:!0,inside:b,alias:"class-name"},"generic-method":{pattern:a(/<<0>>\s*<<1>>(?=\s*\()/.source,[E,m]),inside:{function:a(/^<<0>>/.source,[E]),generic:{pattern:RegExp(m),alias:"class-name",inside:b}}},"type-list":{pattern:a(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[l,y,E,T,u.source,g,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:a(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[y,g]),lookbehind:!0,greedy:!0,inside:n.languages.csharp},keyword:u,"class-name":{pattern:RegExp(T),greedy:!0,inside:b},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var O=I+"|"+k,N=r(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[O]),P=o(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[N]),2),B=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,V=r(/<<0>>(?:\s*\(<<1>>*\))?/.source,[A,P]);n.languages.insertBefore("csharp","class-name",{attribute:{pattern:a(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[B,V]),lookbehind:!0,greedy:!0,inside:{target:{pattern:a(/^<<0>>(?=\s*:)/.source,[B]),alias:"keyword"},"attribute-arguments":{pattern:a(/\(<<0>>*\)/.source,[P]),inside:n.languages.csharp},"class-name":{pattern:RegExp(A),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var K=/:[^}\r\n]+/.source,X=o(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[N]),2),J=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[X,K]),x=o(r(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[O]),2),F=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[x,K]);function M(w,R){return{interpolation:{pattern:a(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[w]),lookbehind:!0,inside:{"format-string":{pattern:a(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[R,K]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:n.languages.csharp}}},string:/[\s\S]+/}}n.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:a(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[J]),lookbehind:!0,greedy:!0,inside:M(J,X)},{pattern:a(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[F]),lookbehind:!0,greedy:!0,inside:M(F,x)}],char:{pattern:RegExp(k),greedy:!0}}),n.languages.dotnet=n.languages.cs=n.languages.csharp})(t)}return Is}var Cs,Lb;function WM(){if(Lb)return Cs;Lb=1;var e=yi();Cs=t,t.displayName="aspnet",t.aliases=[];function t(n){n.register(e),n.languages.aspnet=n.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:n.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/,alias:"tag"},rest:n.languages.csharp}}}),n.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,n.languages.insertBefore("inside","punctuation",{directive:n.languages.aspnet.directive},n.languages.aspnet.tag.inside["attr-value"]),n.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),n.languages.insertBefore("aspnet",n.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:n.languages.csharp||{}}})}return Cs}var _s,Db;function VM(){if(Db)return _s;Db=1,_s=e,e.displayName="autohotkey",e.aliases=[];function e(t){t.languages.autohotkey={comment:[{pattern:/(^|\s);.*/,lookbehind:!0},{pattern:/(^[\t ]*)\/\*(?:[\r\n](?![ \t]*\*\/)|[^\r\n])*(?:[\r\n][ \t]*\*\/)?/m,lookbehind:!0,greedy:!0}],tag:{pattern:/^([ \t]*)[^\s,`":]+(?=:[ \t]*$)/m,lookbehind:!0},string:/"(?:[^"\n\r]|"")*"/,variable:/%\w+%/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,boolean:/\b(?:false|true)\b/,selector:/\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetRegView|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,constant:/\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_fileencoding|a_formatfloat|a_formatinteger|a_gui|a_guicontrol|a_guicontrolevent|a_guievent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_is64bitos|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|a_priorkey|a_programfiles|a_programs|a_programscommon|a_ptrsize|a_regview|a_screendpi|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scripthwnd|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel|programfiles)\b/i,builtin:/\b(?:abs|acos|asc|asin|atan|ceil|chr|class|comobjactive|comobjarray|comobjconnect|comobjcreate|comobjerror|comobjflags|comobjget|comobjquery|comobjtype|comobjvalue|cos|dllcall|exp|fileexist|Fileopen|floor|format|il_add|il_create|il_destroy|instr|isfunc|islabel|IsObject|ln|log|ltrim|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|numget|numput|onmessage|regexmatch|regexreplace|registercallback|round|rtrim|sb_seticon|sb_setparts|sb_settext|sin|sqrt|strlen|strreplace|strsplit|substr|tan|tv_add|tv_delete|tv_get|tv_getchild|tv_getcount|tv_getnext|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__Call|__Get|__New|__Set)\b/i,symbol:/\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,important:/#\b(?:AllowSameLineComments|ClipboardTimeout|CommentFlag|DerefChar|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|If|IfTimeout|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InputLevel|InstallKeybdHook|InstallMouseHook|KeyHistory|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|MenuMaskKey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|Warn|WinActivateForce)\b/i,keyword:/\b(?:Abort|AboveNormal|Add|ahk_class|ahk_exe|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Catch|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|Finally|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|Region|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Throw|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|Try|TryAgain|Type|UnCheck|underline|Unicode|Unlock|Until|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i,function:/[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+(?=\()/,punctuation:/[{}[\]():,]/}}return _s}var xs,Mb;function YM(){if(Mb)return xs;Mb=1,xs=e,e.displayName="autoit",e.aliases=[];function e(t){t.languages.autoit={comment:[/;.*/,{pattern:/(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,lookbehind:!0}],url:{pattern:/(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,lookbehind:!0},string:{pattern:/(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,greedy:!0,inside:{variable:/([%$@])\w+\1/}},directive:{pattern:/(^[\t ]*)#[\w-]+/m,lookbehind:!0,alias:"keyword"},function:/\b\w+(?=\()/,variable:/[$@]\w+/,keyword:/\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,boolean:/\b(?:False|True)\b/i,operator:/<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,punctuation:/[\[\]().,:]/}}return xs}var Ns,Fb;function KM(){if(Fb)return Ns;Fb=1,Ns=e,e.displayName="avisynth",e.aliases=["avs"];function e(t){(function(n){function r(c,d){return c.replace(/<<(\d+)>>/g,function(m,g){return d[+g]})}function a(c,d,m){return RegExp(r(c,d),m||"")}var o=/bool|clip|float|int|string|val/.source,i=[/is(?:bool|clip|float|int|string)|defined|(?:(?:internal)?function|var)?exists?/.source,/apply|assert|default|eval|import|nop|select|undefined/.source,/opt_(?:allowfloataudio|avipadscanlines|dwchannelmask|enable_(?:b64a|planartopackedrgb|v210|y3_10_10|y3_10_16)|usewaveextensible|vdubplanarhack)|set(?:cachemode|maxcpu|memorymax|planarlegacyalignment|workingdir)/.source,/hex(?:value)?|value/.source,/abs|ceil|continued(?:denominator|numerator)?|exp|floor|fmod|frac|log(?:10)?|max|min|muldiv|pi|pow|rand|round|sign|spline|sqrt/.source,/a?sinh?|a?cosh?|a?tan[2h]?/.source,/(?:bit(?:and|not|x?or|[lr]?shift[aslu]?|sh[lr]|sa[lr]|[lr]rotatel?|ro[rl]|te?st|set(?:count)?|cl(?:ea)?r|ch(?:an)?ge?))/.source,/average(?:[bgr]|chroma[uv]|luma)|(?:[rgb]|chroma[uv]|luma|rgb|[yuv](?=difference(?:fromprevious|tonext)))difference(?:fromprevious|tonext)?|[yuvrgb]plane(?:median|min|max|minmaxdifference)/.source,/getprocessinfo|logmsg|script(?:dir(?:utf8)?|file(?:utf8)?|name(?:utf8)?)|setlogparams/.source,/chr|(?:fill|find|left|mid|replace|rev|right)str|format|[lu]case|ord|str(?:cmpi?|fromutf8|len|toutf8)|time|trim(?:all|left|right)/.source,/isversionorgreater|version(?:number|string)/.source,/buildpixeltype|colorspacenametopixeltype/.source,/addautoloaddir|on(?:cpu|cuda)|prefetch|setfiltermtmode/.source].join("|"),s=[/has(?:audio|video)/.source,/height|width/.source,/frame(?:count|rate)|framerate(?:denominator|numerator)/.source,/getparity|is(?:field|frame)based/.source,/bitspercomponent|componentsize|hasalpha|is(?:planar(?:rgba?)?|interleaved|rgb(?:24|32|48|64)?|y(?:8|u(?:va?|y2))?|yv(?:12|16|24|411)|420|422|444|packedrgb)|numcomponents|pixeltype/.source,/audio(?:bits|channels|duration|length(?:[fs]|hi|lo)?|rate)|isaudio(?:float|int)/.source].join("|"),l=[/avi(?:file)?source|directshowsource|image(?:reader|source|sourceanim)|opendmlsource|segmented(?:avisource|directshowsource)|wavsource/.source,/coloryuv|convertbacktoyuy2|convertto(?:RGB(?:24|32|48|64)|(?:planar)?RGBA?|Y8?|YV(?:12|16|24|411)|YUVA?(?:411|420|422|444)|YUY2)|fixluminance|gr[ae]yscale|invert|levels|limiter|mergea?rgb|merge(?:chroma|luma)|rgbadjust|show(?:alpha|blue|green|red)|swapuv|tweak|[uv]toy8?|ytouv/.source,/(?:colorkey|reset)mask|layer|mask(?:hs)?|merge|overlay|subtract/.source,/addborders|(?:bicubic|bilinear|blackman|gauss|lanczos4|lanczos|point|sinc|spline(?:16|36|64))resize|crop(?:bottom)?|flip(?:horizontal|vertical)|(?:horizontal|vertical)?reduceby2|letterbox|skewrows|turn(?:180|left|right)/.source,/blur|fixbrokenchromaupsampling|generalconvolution|(?:spatial|temporal)soften|sharpen/.source,/trim|(?:un)?alignedsplice|(?:assume|assumescaled|change|convert)FPS|(?:delete|duplicate)frame|dissolve|fade(?:in|io|out)[02]?|freezeframe|interleave|loop|reverse|select(?:even|odd|(?:range)?every)/.source,/assume[bt]ff|assume(?:field|frame)based|bob|complementparity|doubleweave|peculiarblend|pulldown|separate(?:columns|fields|rows)|swapfields|weave(?:columns|rows)?/.source,/amplify(?:db)?|assumesamplerate|audiodub(?:ex)?|audiotrim|convertaudioto(?:(?:8|16|24|32)bit|float)|converttomono|delayaudio|ensurevbrmp3sync|get(?:left|right)?channel|kill(?:audio|video)|mergechannels|mixaudio|monotostereo|normalize|resampleaudio|ssrc|supereq|timestretch/.source,/animate|applyrange|conditional(?:filter|reader|select)|frameevaluate|scriptclip|tcp(?:server|source)|writefile(?:end|if|start)?/.source,/imagewriter/.source,/blackness|blankclip|colorbars(?:hd)?|compare|dumpfiltergraph|echo|histogram|info|messageclip|preroll|setgraphanalysis|show(?:framenumber|smpte|time)|showfiveversions|stack(?:horizontal|vertical)|subtitle|tone|version/.source].join("|"),u=[i,s,l].join("|");n.languages.avisynth={comment:[{pattern:/(^|[^\\])\[\*(?:[^\[*]|\[(?!\*)|\*(?!\])|\[\*(?:[^\[*]|\[(?!\*)|\*(?!\]))*\*\])*\*\]/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0,greedy:!0}],argument:{pattern:a(/\b(?:<<0>>)\s+("?)\w+\1/.source,[o],"i"),inside:{keyword:/^\w+/}},"argument-label":{pattern:/([,(][\s\\]*)\w+\s*=(?!=)/,lookbehind:!0,inside:{"argument-name":{pattern:/^\w+/,alias:"punctuation"},punctuation:/=$/}},string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0,inside:{constant:{pattern:/\b(?:DEFAULT_MT_MODE|(?:MAINSCRIPT|PROGRAM|SCRIPT)DIR|(?:MACHINE|USER)_(?:CLASSIC|PLUS)_PLUGINS)\b/}}}],variable:/\b(?:last)\b/i,boolean:/\b(?:false|no|true|yes)\b/i,keyword:/\b(?:catch|else|for|function|global|if|return|try|while|__END__)\b/i,constant:/\bMT_(?:MULTI_INSTANCE|NICE_FILTER|SERIALIZED|SPECIAL_MT)\b/,"builtin-function":{pattern:a(/\b(?:<<0>>)\b/.source,[u],"i"),alias:"function"},"type-cast":{pattern:a(/\b(?:<<0>>)(?=\s*\()/.source,[o],"i"),alias:"keyword"},function:{pattern:/\b[a-z_]\w*(?=\s*\()|(\.)[a-z_]\w*\b/i,lookbehind:!0},"line-continuation":{pattern:/(^[ \t]*)\\|\\(?=[ \t]*$)/m,lookbehind:!0,alias:"punctuation"},number:/\B\$(?:[\da-f]{6}|[\da-f]{8})\b|(?:(?:\b|\B-)\d+(?:\.\d*)?\b|\B\.\d+\b)/i,operator:/\+\+?|[!=<>]=?|&&|\|\||[?:*/%-]/,punctuation:/[{}\[\]();,.]/},n.languages.avs=n.languages.avisynth})(t)}return Ns}var Os,Pb;function XM(){if(Pb)return Os;Pb=1,Os=e,e.displayName="avroIdl",e.aliases=[];function e(t){t.languages["avro-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0},annotation:{pattern:/@(?:[$\w.-]|`[^\r\n`]+`)+/,greedy:!0,alias:"function"},"function-identifier":{pattern:/`[^\r\n`]+`(?=\s*\()/,greedy:!0,alias:"function"},identifier:{pattern:/`[^\r\n`]+`/,greedy:!0},"class-name":{pattern:/(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,lookbehind:!0,greedy:!0},keyword:/\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:[{pattern:/(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,lookbehind:!0},/-?\b(?:Infinity|NaN)\b/],operator:/=/,punctuation:/[()\[\]{}<>.:,;-]/},t.languages.avdl=t.languages["avro-idl"]}return Os}var Ls,Ub;function zk(){if(Ub)return Ls;Ub=1,Ls=e,e.displayName="bash",e.aliases=["shell"];function e(t){(function(n){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:a,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=n.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=o.variable[1].inside,l=0;l<i.length;l++)s[i[l]]=n.languages.bash[i[l]];n.languages.shell=n.languages.bash})(t)}return Ls}var Ds,Bb;function Hk(){if(Bb)return Ds;Bb=1,Ds=e,e.displayName="basic",e.aliases=[];function e(t){t.languages.basic={comment:{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},string:{pattern:/"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,greedy:!0},number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,function:/\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,operator:/<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,punctuation:/[,;:()]/}}return Ds}var Ms,qb;function ZM(){if(qb)return Ms;qb=1,Ms=e,e.displayName="batch",e.aliases=[];function e(t){(function(n){var r=/%%?[~:\w]+%?|!\S+!/,a={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},o=/"(?:[\\"]"|[^"])*"(?!")/,i=/(?:\b|-)\d+\b/;n.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/\b(?:do|in)\b|^for\b/i,string:o,parameter:a,variable:r,number:i,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:!0,inside:{keyword:/\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,string:o,parameter:a,variable:r,number:i,operator:/\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:o,parameter:a,variable:[r,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:i,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,lookbehind:!0,inside:{keyword:/^\w+\b/,string:o,parameter:a,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:r,number:i,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}})(t)}return Ms}var Fs,jb;function JM(){if(jb)return Fs;jb=1,Fs=e,e.displayName="bbcode",e.aliases=["shortcode"];function e(t){t.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},t.languages.shortcode=t.languages.bbcode}return Fs}var Ps,$b;function QM(){if($b)return Ps;$b=1,Ps=e,e.displayName="bicep",e.aliases=[];function e(t){t.languages.bicep={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],property:[{pattern:/([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,lookbehind:!0},{pattern:/([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,lookbehind:!0,greedy:!0}],string:[{pattern:/'''[^'][\s\S]*?'''/,greedy:!0},{pattern:/(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,lookbehind:!0,greedy:!0}],"interpolated-string":{pattern:/(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}\r\n]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0},punctuation:/^\$\{|\}$/}},string:/[\s\S]+/}},datatype:{pattern:/(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,lookbehind:!0,alias:"class-name"},boolean:/\b(?:false|true)\b/,keyword:/\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,decorator:/@\w+\b/,function:/\b[a-z_]\w*(?=[ \t]*\()/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,punctuation:/[{}[\];(),.:]/},t.languages.bicep["interpolated-string"].inside.interpolation.inside.expression.inside=t.languages.bicep}return Ps}var Us,zb;function eF(){if(zb)return Us;zb=1,Us=e,e.displayName="birb",e.aliases=[];function e(t){t.languages.birb=t.languages.extend("clike",{string:{pattern:/r?("|')(?:\\.|(?!\1)[^\\])*\1/,greedy:!0},"class-name":[/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,/\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/],keyword:/\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,operator:/\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,variable:/\b[a-z_]\w*\b/}),t.languages.insertBefore("birb","function",{metadata:{pattern:/<\w+>/,greedy:!0,alias:"symbol"}})}return Us}var Bs,Hb;function tF(){if(Hb)return Bs;Hb=1;var e=$n();Bs=t,t.displayName="bison",t.aliases=[];function t(n){n.register(e),n.languages.bison=n.languages.extend("c",{}),n.languages.insertBefore("bison","comment",{bison:{pattern:/^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:n.languages.c}},comment:n.languages.c.comment,string:n.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})}return Bs}var qs,Gb;function nF(){if(Gb)return qs;Gb=1,qs=e,e.displayName="bnf",e.aliases=["rbnf"];function e(t){t.languages.bnf={string:{pattern:/"[^\r\n"]*"|'[^\r\n']*'/},definition:{pattern:/<[^<>\r\n\t]+>(?=\s*::=)/,alias:["rule","keyword"],inside:{punctuation:/^<|>$/}},rule:{pattern:/<[^<>\r\n\t]+>/,inside:{punctuation:/^<|>$/}},operator:/::=|[|()[\]{}*+?]|\.{3}/},t.languages.rbnf=t.languages.bnf}return qs}var js,Wb;function rF(){if(Wb)return js;Wb=1,js=e,e.displayName="brainfuck",e.aliases=[];function e(t){t.languages.brainfuck={pointer:{pattern:/<|>/,alias:"keyword"},increment:{pattern:/\+/,alias:"inserted"},decrement:{pattern:/-/,alias:"deleted"},branching:{pattern:/\[|\]/,alias:"important"},operator:/[.,]/,comment:/\S+/}}return js}var $s,Vb;function aF(){if(Vb)return $s;Vb=1,$s=e,e.displayName="brightscript",e.aliases=[];function e(t){t.languages.brightscript={comment:/(?:\brem|').*/i,"directive-statement":{pattern:/(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,lookbehind:!0,alias:"property",inside:{"error-message":{pattern:/(^#error).+/,lookbehind:!0},directive:{pattern:/^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,alias:"keyword"},expression:{pattern:/[\s\S]+/,inside:null}}},property:{pattern:/([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},"class-name":{pattern:/(\bAs[\t ]+)\w+/i,lookbehind:!0},keyword:/\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,boolean:/\b(?:false|true)\b/i,function:/\b(?!\d)\w+(?=[\t ]*\()/,number:/(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,operator:/--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,punctuation:/[.,;()[\]{}]/,constant:/\b(?:LINE_NUM)\b/i},t.languages.brightscript["directive-statement"].inside.expression.inside=t.languages.brightscript}return $s}var zs,Yb;function oF(){if(Yb)return zs;Yb=1,zs=e,e.displayName="bro",e.aliases=[];function e(t){t.languages.bro={comment:{pattern:/(^|[^\\$])#.*/,lookbehind:!0,inside:{italic:/\b(?:FIXME|TODO|XXX)\b/}},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},boolean:/\b[TF]\b/,function:{pattern:/(\b(?:event|function|hook)[ \t]+)\w+(?:::\w+)?/,lookbehind:!0},builtin:/(?:@(?:load(?:-(?:plugin|sigs))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:add_func|create_expire|default|delete_func|encrypt|error_handler|expire_func|group|log|mergeable|optional|persistent|priority|raw_output|read_expire|redef|rotate_interval|rotate_size|synchronized|type_column|write_expire))/,constant:{pattern:/(\bconst[ \t]+)\w+/i,lookbehind:!0},keyword:/\b(?:add|addr|alarm|any|bool|break|const|continue|count|delete|double|else|enum|event|export|file|for|function|global|hook|if|in|int|interval|local|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,punctuation:/[{}[\];(),.:]/}}return zs}var Hs,Kb;function iF(){if(Kb)return Hs;Kb=1,Hs=e,e.displayName="bsl",e.aliases=[];function e(t){t.languages.bsl={comment:/\/\/.*/,string:[{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},{pattern:/'(?:[^'\r\n\\]|\\.)*'/}],keyword:[{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:break|do|each|else|elseif|enddo|endfunction|endif|endprocedure|endtry|except|execute|export|false|for|function|if|in|new|null|procedure|raise|return|then|to|true|try|undefined|val|var|while)\b/i}],number:{pattern:/(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,lookbehind:!0},operator:[/[<>+\-*/]=?|[%=]/,{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:and|not|or)\b/i}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/,directive:[{pattern:/^([ \t]*)&.*/m,lookbehind:!0,greedy:!0,alias:"important"},{pattern:/^([ \t]*)#.*/gm,lookbehind:!0,greedy:!0,alias:"important"}]},t.languages.oscript=t.languages.bsl}return Hs}var Gs,Xb;function sF(){if(Xb)return Gs;Xb=1,Gs=e,e.displayName="cfscript",e.aliases=[];function e(t){t.languages.cfscript=t.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,inside:{annotation:{pattern:/(?:^|[^.])@[\w\.]+/,alias:"punctuation"}}},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],keyword:/\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,operator:[/\+\+|--|&&|\|\||::|=>|[!=]==|<=?|>=?|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|[?:]/,/\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/],scope:{pattern:/\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/,alias:"global"},type:{pattern:/\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/,alias:"builtin"}}),t.languages.insertBefore("cfscript","keyword",{"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"}}),delete t.languages.cfscript["class-name"],t.languages.cfc=t.languages.cfscript}return Gs}var Ws,Zb;function lF(){if(Zb)return Ws;Zb=1;var e=Pm();Ws=t,t.displayName="chaiscript",t.aliases=[];function t(n){n.register(e),n.languages.chaiscript=n.languages.extend("clike",{string:{pattern:/(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,lookbehind:!0,greedy:!0},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},{pattern:/(\b(?:attr|def)\s+)\w+(?=\s*::)/,lookbehind:!0}],keyword:/\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,number:[n.languages.cpp.number,/\b(?:Infinity|NaN)\b/],operator:/>>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/}),n.languages.insertBefore("chaiscript","operator",{"parameter-type":{pattern:/([,(]\s*)\w+(?=\s+\w)/,lookbehind:!0,alias:"class-name"}}),n.languages.insertBefore("chaiscript","string",{"string-interpolation":{pattern:/(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,lookbehind:!0,inside:{"interpolation-expression":{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:n.languages.chaiscript},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"}}},string:/[\s\S]+/}}})}return Ws}var Vs,Jb;function uF(){if(Jb)return Vs;Jb=1,Vs=e,e.displayName="cil",e.aliases=[];function e(t){t.languages.cil={comment:/\/\/.*/,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},directive:{pattern:/(^|\W)\.[a-z]+(?=\s)/,lookbehind:!0,alias:"class-name"},variable:/\[[\w\.]+\]/,keyword:/\b(?:abstract|ansi|assembly|auto|autochar|beforefieldinit|bool|bstr|byvalstr|catch|char|cil|class|currency|date|decimal|default|enum|error|explicit|extends|extern|famandassem|family|famorassem|final(?:ly)?|float32|float64|hidebysig|u?int(?:8|16|32|64)?|iant|idispatch|implements|import|initonly|instance|interface|iunknown|literal|lpstr|lpstruct|lptstr|lpwstr|managed|method|native(?:Type)?|nested|newslot|object(?:ref)?|pinvokeimpl|private|privatescope|public|reqsecobj|rtspecialname|runtime|sealed|sequential|serializable|specialname|static|string|struct|syschar|tbstr|unicode|unmanagedexp|unsigned|value(?:type)?|variant|virtual|void)\b/,function:/\b(?:(?:constrained|no|readonly|tail|unaligned|volatile)\.)?(?:conv\.(?:[iu][1248]?|ovf\.[iu][1248]?(?:\.un)?|r\.un|r4|r8)|ldc\.(?:i4(?:\.\d+|\.[mM]1|\.s)?|i8|r4|r8)|ldelem(?:\.[iu][1248]?|\.r[48]|\.ref|a)?|ldind\.(?:[iu][1248]?|r[48]|ref)|stelem\.?(?:i[1248]?|r[48]|ref)?|stind\.(?:i[1248]?|r[48]|ref)?|end(?:fault|filter|finally)|ldarg(?:\.[0-3s]|a(?:\.s)?)?|ldloc(?:\.\d+|\.s)?|sub(?:\.ovf(?:\.un)?)?|mul(?:\.ovf(?:\.un)?)?|add(?:\.ovf(?:\.un)?)?|stloc(?:\.[0-3s])?|refany(?:type|val)|blt(?:\.un)?(?:\.s)?|ble(?:\.un)?(?:\.s)?|bgt(?:\.un)?(?:\.s)?|bge(?:\.un)?(?:\.s)?|unbox(?:\.any)?|init(?:blk|obj)|call(?:i|virt)?|brfalse(?:\.s)?|bne\.un(?:\.s)?|ldloca(?:\.s)?|brzero(?:\.s)?|brtrue(?:\.s)?|brnull(?:\.s)?|brinst(?:\.s)?|starg(?:\.s)?|leave(?:\.s)?|shr(?:\.un)?|rem(?:\.un)?|div(?:\.un)?|clt(?:\.un)?|alignment|castclass|ldvirtftn|beq(?:\.s)?|ckfinite|ldsflda|ldtoken|localloc|mkrefany|rethrow|cgt\.un|arglist|switch|stsfld|sizeof|newobj|newarr|ldsfld|ldnull|ldflda|isinst|throw|stobj|stfld|ldstr|ldobj|ldlen|ldftn|ldfld|cpobj|cpblk|break|br\.s|xor|shl|ret|pop|not|nop|neg|jmp|dup|cgt|ceq|box|and|or|br)\b/,boolean:/\b(?:false|true)\b/,number:/\b-?(?:0x[0-9a-f]+|\d+)(?:\.[0-9a-f]+)?\b/i,punctuation:/[{}[\];(),:=]|IL_[0-9A-Za-z]+/}}return Vs}var Ys,Qb;function cF(){if(Qb)return Ys;Qb=1,Ys=e,e.displayName="clojure",e.aliases=[];function e(t){t.languages.clojure={comment:{pattern:/;.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},char:/\\\w+/,symbol:{pattern:/(^|[\s()\[\]{},])::?[\w*+!?'<>=/.-]+/,lookbehind:!0},keyword:{pattern:/(\()(?:-|->|->>|\.|\.\.|\*|\/|\+|<|<=|=|==|>|>=|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|cond|conj|cons|constantly|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|declare|def|def-|definline|definterface|defmacro|defmethod|defmulti|defn|defn-|defonce|defproject|defprotocol|defrecord|defstruct|deftype|deref|difference|disj|dissoc|distinct|do|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|fn|fnseq|for|frest|gensym|get|get-proxy-class|hash-map|hash-set|identical\?|identity|if|if-let|if-not|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|let|line-seq|list|list\*|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|monitor-enter|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|quote|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|recur|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|set!|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|throw|time|to-array|to-array-2d|tree-seq|true\?|try|union|up|update-proxy|val|vals|var|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[\s)]|$)/,lookbehind:!0},boolean:/\b(?:false|nil|true)\b/,number:{pattern:/(^|[^\w$@])(?:\d+(?:[/.]\d+)?(?:e[+-]?\d+)?|0x[a-f0-9]+|[1-9]\d?r[a-z0-9]+)[lmn]?(?![\w$@])/i,lookbehind:!0},function:{pattern:/((?:^|[^'])\()[\w*+!?'<>=/.-]+(?=[\s)]|$)/,lookbehind:!0},operator:/[#@^`~]/,punctuation:/[{}\[\](),]/}}return Ys}var Ks,ey;function dF(){if(ey)return Ks;ey=1,Ks=e,e.displayName="cmake",e.aliases=[];function e(t){t.languages.cmake={comment:/#.*/,string:{pattern:/"(?:[^\\"]|\\.)*"/,greedy:!0,inside:{interpolation:{pattern:/\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,inside:{punctuation:/\$\{|\}/,variable:/\w+/}}}},variable:/\b(?:CMAKE_\w+|\w+_(?:(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT|VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,property:/\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,keyword:/\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,boolean:/\b(?:FALSE|OFF|ON|TRUE)\b/,namespace:/\b(?:INTERFACE|PRIVATE|PROPERTIES|PUBLIC|SHARED|STATIC|TARGET_OBJECTS)\b/,operator:/\b(?:AND|DEFINED|EQUAL|GREATER|LESS|MATCHES|NOT|OR|STREQUAL|STRGREATER|STRLESS|VERSION_EQUAL|VERSION_GREATER|VERSION_LESS)\b/,inserted:{pattern:/\b\w+::\w+\b/,alias:"class-name"},number:/\b\d+(?:\.\d+)*\b/,function:/\b[a-z_]\w*(?=\s*\()\b/i,punctuation:/[()>}]|\$[<{]/}}return Ks}var Xs,ty;function pF(){if(ty)return Xs;ty=1,Xs=e,e.displayName="cobol",e.aliases=[];function e(t){t.languages.cobol={comment:{pattern:/\*>.*|(^[ \t]*)\*.*/m,lookbehind:!0,greedy:!0},string:{pattern:/[xzgn]?(?:"(?:[^\r\n"]|"")*"(?!")|'(?:[^\r\n']|'')*'(?!'))/i,greedy:!0},level:{pattern:/(^[ \t]*)\d+\b/m,lookbehind:!0,greedy:!0,alias:"number"},"class-name":{pattern:/(\bpic(?:ture)?\s+)(?:(?:[-\w$/,:*+<>]|\.(?!\s|$))(?:\(\d+\))?)+/i,lookbehind:!0,inside:{number:{pattern:/(\()\d+/,lookbehind:!0},punctuation:/[()]/}},keyword:{pattern:/(^|[^\w-])(?:ABORT|ACCEPT|ACCESS|ADD|ADDRESS|ADVANCING|AFTER|ALIGNED|ALL|ALPHABET|ALPHABETIC|ALPHABETIC-LOWER|ALPHABETIC-UPPER|ALPHANUMERIC|ALPHANUMERIC-EDITED|ALSO|ALTER|ALTERNATE|ANY|ARE|AREA|AREAS|AS|ASCENDING|ASCII|ASSIGN|ASSOCIATED-DATA|ASSOCIATED-DATA-LENGTH|AT|ATTRIBUTE|AUTHOR|AUTO|AUTO-SKIP|BACKGROUND-COLOR|BACKGROUND-COLOUR|BASIS|BEEP|BEFORE|BEGINNING|BELL|BINARY|BIT|BLANK|BLINK|BLOCK|BOTTOM|BOUNDS|BY|BYFUNCTION|BYTITLE|CALL|CANCEL|CAPABLE|CCSVERSION|CD|CF|CH|CHAINING|CHANGED|CHANNEL|CHARACTER|CHARACTERS|CLASS|CLASS-ID|CLOCK-UNITS|CLOSE|CLOSE-DISPOSITION|COBOL|CODE|CODE-SET|COL|COLLATING|COLUMN|COM-REG|COMMA|COMMITMENT|COMMON|COMMUNICATION|COMP|COMP-1|COMP-2|COMP-3|COMP-4|COMP-5|COMPUTATIONAL|COMPUTATIONAL-1|COMPUTATIONAL-2|COMPUTATIONAL-3|COMPUTATIONAL-4|COMPUTATIONAL-5|COMPUTE|CONFIGURATION|CONTAINS|CONTENT|CONTINUE|CONTROL|CONTROL-POINT|CONTROLS|CONVENTION|CONVERTING|COPY|CORR|CORRESPONDING|COUNT|CRUNCH|CURRENCY|CURSOR|DATA|DATA-BASE|DATE|DATE-COMPILED|DATE-WRITTEN|DAY|DAY-OF-WEEK|DBCS|DE|DEBUG-CONTENTS|DEBUG-ITEM|DEBUG-LINE|DEBUG-NAME|DEBUG-SUB-1|DEBUG-SUB-2|DEBUG-SUB-3|DEBUGGING|DECIMAL-POINT|DECLARATIVES|DEFAULT|DEFAULT-DISPLAY|DEFINITION|DELETE|DELIMITED|DELIMITER|DEPENDING|DESCENDING|DESTINATION|DETAIL|DFHRESP|DFHVALUE|DISABLE|DISK|DISPLAY|DISPLAY-1|DIVIDE|DIVISION|DONTCARE|DOUBLE|DOWN|DUPLICATES|DYNAMIC|EBCDIC|EGCS|EGI|ELSE|EMI|EMPTY-CHECK|ENABLE|END|END-ACCEPT|END-ADD|END-CALL|END-COMPUTE|END-DELETE|END-DIVIDE|END-EVALUATE|END-IF|END-MULTIPLY|END-OF-PAGE|END-PERFORM|END-READ|END-RECEIVE|END-RETURN|END-REWRITE|END-SEARCH|END-START|END-STRING|END-SUBTRACT|END-UNSTRING|END-WRITE|ENDING|ENTER|ENTRY|ENTRY-PROCEDURE|ENVIRONMENT|EOL|EOP|EOS|ERASE|ERROR|ESCAPE|ESI|EVALUATE|EVENT|EVERY|EXCEPTION|EXCLUSIVE|EXHIBIT|EXIT|EXPORT|EXTEND|EXTENDED|EXTERNAL|FD|FILE|FILE-CONTROL|FILLER|FINAL|FIRST|FOOTING|FOR|FOREGROUND-COLOR|FOREGROUND-COLOUR|FROM|FULL|FUNCTION|FUNCTION-POINTER|FUNCTIONNAME|GENERATE|GIVING|GLOBAL|GO|GOBACK|GRID|GROUP|HEADING|HIGH-VALUE|HIGH-VALUES|HIGHLIGHT|I-O|I-O-CONTROL|ID|IDENTIFICATION|IF|IMPLICIT|IMPORT|IN|INDEX|INDEXED|INDICATE|INITIAL|INITIALIZE|INITIATE|INPUT|INPUT-OUTPUT|INSPECT|INSTALLATION|INTEGER|INTO|INVALID|INVOKE|IS|JUST|JUSTIFIED|KANJI|KEPT|KEY|KEYBOARD|LABEL|LANGUAGE|LAST|LB|LD|LEADING|LEFT|LEFTLINE|LENGTH|LENGTH-CHECK|LIBACCESS|LIBPARAMETER|LIBRARY|LIMIT|LIMITS|LINAGE|LINAGE-COUNTER|LINE|LINE-COUNTER|LINES|LINKAGE|LIST|LOCAL|LOCAL-STORAGE|LOCK|LONG-DATE|LONG-TIME|LOW-VALUE|LOW-VALUES|LOWER|LOWLIGHT|MEMORY|MERGE|MESSAGE|MMDDYYYY|MODE|MODULES|MORE-LABELS|MOVE|MULTIPLE|MULTIPLY|NAMED|NATIONAL|NATIONAL-EDITED|NATIVE|NEGATIVE|NETWORK|NEXT|NO|NO-ECHO|NULL|NULLS|NUMBER|NUMERIC|NUMERIC-DATE|NUMERIC-EDITED|NUMERIC-TIME|OBJECT-COMPUTER|OCCURS|ODT|OF|OFF|OMITTED|ON|OPEN|OPTIONAL|ORDER|ORDERLY|ORGANIZATION|OTHER|OUTPUT|OVERFLOW|OVERLINE|OWN|PACKED-DECIMAL|PADDING|PAGE|PAGE-COUNTER|PASSWORD|PERFORM|PF|PH|PIC|PICTURE|PLUS|POINTER|PORT|POSITION|POSITIVE|PRINTER|PRINTING|PRIVATE|PROCEDURE|PROCEDURE-POINTER|PROCEDURES|PROCEED|PROCESS|PROGRAM|PROGRAM-ID|PROGRAM-LIBRARY|PROMPT|PURGE|QUEUE|QUOTE|QUOTES|RANDOM|RD|READ|READER|REAL|RECEIVE|RECEIVED|RECORD|RECORDING|RECORDS|RECURSIVE|REDEFINES|REEL|REF|REFERENCE|REFERENCES|RELATIVE|RELEASE|REMAINDER|REMARKS|REMOTE|REMOVAL|REMOVE|RENAMES|REPLACE|REPLACING|REPORT|REPORTING|REPORTS|REQUIRED|RERUN|RESERVE|RESET|RETURN|RETURN-CODE|RETURNING|REVERSE-VIDEO|REVERSED|REWIND|REWRITE|RF|RH|RIGHT|ROUNDED|RUN|SAME|SAVE|SCREEN|SD|SEARCH|SECTION|SECURE|SECURITY|SEGMENT|SEGMENT-LIMIT|SELECT|SEND|SENTENCE|SEPARATE|SEQUENCE|SEQUENTIAL|SET|SHARED|SHAREDBYALL|SHAREDBYRUNUNIT|SHARING|SHIFT-IN|SHIFT-OUT|SHORT-DATE|SIGN|SIZE|SORT|SORT-CONTROL|SORT-CORE-SIZE|SORT-FILE-SIZE|SORT-MERGE|SORT-MESSAGE|SORT-MODE-SIZE|SORT-RETURN|SOURCE|SOURCE-COMPUTER|SPACE|SPACES|SPECIAL-NAMES|STANDARD|STANDARD-1|STANDARD-2|START|STATUS|STOP|STRING|SUB-QUEUE-1|SUB-QUEUE-2|SUB-QUEUE-3|SUBTRACT|SUM|SUPPRESS|SYMBOL|SYMBOLIC|SYNC|SYNCHRONIZED|TABLE|TALLY|TALLYING|TAPE|TASK|TERMINAL|TERMINATE|TEST|TEXT|THEN|THREAD|THREAD-LOCAL|THROUGH|THRU|TIME|TIMER|TIMES|TITLE|TO|TODAYS-DATE|TODAYS-NAME|TOP|TRAILING|TRUNCATED|TYPE|TYPEDEF|UNDERLINE|UNIT|UNSTRING|UNTIL|UP|UPON|USAGE|USE|USING|VALUE|VALUES|VARYING|VIRTUAL|WAIT|WHEN|WHEN-COMPILED|WITH|WORDS|WORKING-STORAGE|WRITE|YEAR|YYYYDDD|YYYYMMDD|ZERO-FILL|ZEROES|ZEROS)(?![\w-])/i,lookbehind:!0},boolean:{pattern:/(^|[^\w-])(?:false|true)(?![\w-])/i,lookbehind:!0},number:{pattern:/(^|[^\w-])(?:[+-]?(?:(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?|zero))(?![\w-])/i,lookbehind:!0},operator:[/<>|[<>]=?|[=+*/&]/,{pattern:/(^|[^\w-])(?:-|and|equal|greater|less|not|or|than)(?![\w-])/i,lookbehind:!0}],punctuation:/[.:,()]/}}return Xs}var Zs,ny;function fF(){if(ny)return Zs;ny=1,Zs=e,e.displayName="coffeescript",e.aliases=["coffee"];function e(t){(function(n){var r=/#(?!\{).+/,a={pattern:/#\{[^}]+\}/,alias:"variable"};n.languages.coffeescript=n.languages.extend("javascript",{comment:r,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:a}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),n.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:r,interpolation:a}}}),n.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:n.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:a}}]}),n.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete n.languages.coffeescript["template-string"],n.languages.coffee=n.languages.coffeescript})(t)}return Zs}var Js,ry;function mF(){if(ry)return Js;ry=1,Js=e,e.displayName="concurnas",e.aliases=["conc"];function e(t){t.languages.concurnas={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*)/,lookbehind:!0,greedy:!0},langext:{pattern:/\b\w+\s*\|\|[\s\S]+?\|\|/,greedy:!0,inside:{"class-name":/^\w+/,string:{pattern:/(^\s*\|\|)[\s\S]+(?=\|\|$)/,lookbehind:!0},punctuation:/\|\|/}},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/,lookbehind:!0},keyword:/\b(?:abstract|actor|also|annotation|assert|async|await|bool|boolean|break|byte|case|catch|changed|char|class|closed|constant|continue|def|default|del|double|elif|else|enum|every|extends|false|finally|float|for|from|global|gpudef|gpukernel|if|import|in|init|inject|int|lambda|local|long|loop|match|new|nodefault|null|of|onchange|open|out|override|package|parfor|parforsync|post|pre|private|protected|provide|provider|public|return|shared|short|single|size_t|sizeof|super|sync|this|throw|trait|trans|transient|true|try|typedef|unchecked|using|val|var|void|while|with)\b/,boolean:/\b(?:false|true)\b/,number:/\b0b[01][01_]*L?\b|\b0x(?:[\da-f_]*\.)?[\da-f_p+-]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfls]?/i,punctuation:/[{}[\];(),.:]/,operator:/<==|>==|=>|->|<-|<>|&==|&<>|\?:?|\.\?|\+\+|--|[-+*/=<>]=?|[!^~]|\b(?:and|as|band|bor|bxor|comp|is|isnot|mod|or)\b=?/,annotation:{pattern:/@(?:\w+:)?(?:\w+|\[[^\]]+\])?/,alias:"builtin"}},t.languages.insertBefore("concurnas","langext",{"regex-literal":{pattern:/\br("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:t.languages.concurnas},regex:/[\s\S]+/}},"string-literal":{pattern:/(?:\B|\bs)("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:t.languages.concurnas},string:/[\s\S]+/}}}),t.languages.conc=t.languages.concurnas}return Js}var Qs,ay;function hF(){if(ay)return Qs;ay=1,Qs=e,e.displayName="coq",e.aliases=[];function e(t){(function(n){for(var r=/\(\*(?:[^(*]|\((?!\*)|\*(?!\))|<self>)*\*\)/.source,a=0;a<2;a++)r=r.replace(/<self>/g,function(){return r});r=r.replace(/<self>/g,"[]"),n.languages.coq={comment:RegExp(r),string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},attribute:[{pattern:RegExp(/#\[(?:[^\[\]("]|"(?:[^"]|"")*"(?!")|\((?!\*)|<comment>)*\]/.source.replace(/<comment>/g,function(){return r})),greedy:!0,alias:"attr-name",inside:{comment:RegExp(r),string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},operator:/=/,punctuation:/^#\[|\]$|[,()]/}},{pattern:/\b(?:Cumulative|Global|Local|Monomorphic|NonCumulative|Polymorphic|Private|Program)\b/,alias:"attr-name"}],keyword:/\b(?:Abort|About|Add|Admit|Admitted|All|Arguments|As|Assumptions|Axiom|Axioms|Back|BackTo|Backtrace|BinOp|BinOpSpec|BinRel|Bind|Blacklist|Canonical|Case|Cd|Check|Class|Classes|Close|CoFixpoint|CoInductive|Coercion|Coercions|Collection|Combined|Compute|Conjecture|Conjectures|Constant|Constants|Constraint|Constructors|Context|Corollary|Create|CstOp|Custom|Cut|Debug|Declare|Defined|Definition|Delimit|Dependencies|Dependent|Derive|Diffs|Drop|Elimination|End|Entry|Equality|Eval|Example|Existential|Existentials|Existing|Export|Extern|Extraction|Fact|Fail|Field|File|Firstorder|Fixpoint|Flags|Focus|From|Funclass|Function|Functional|GC|Generalizable|Goal|Grab|Grammar|Graph|Guarded|Haskell|Heap|Hide|Hint|HintDb|Hints|Hypotheses|Hypothesis|IF|Identity|Immediate|Implicit|Implicits|Import|Include|Induction|Inductive|Infix|Info|Initial|InjTyp|Inline|Inspect|Instance|Instances|Intro|Intros|Inversion|Inversion_clear|JSON|Language|Left|Lemma|Let|Lia|Libraries|Library|Load|LoadPath|Locate|Ltac|Ltac2|ML|Match|Method|Minimality|Module|Modules|Morphism|Next|NoInline|Notation|Number|OCaml|Obligation|Obligations|Opaque|Open|Optimize|Parameter|Parameters|Parametric|Path|Paths|Prenex|Preterm|Primitive|Print|Profile|Projections|Proof|Prop|PropBinOp|PropOp|PropUOp|Property|Proposition|Pwd|Qed|Quit|Rec|Record|Recursive|Redirect|Reduction|Register|Relation|Remark|Remove|Require|Reserved|Reset|Resolve|Restart|Rewrite|Right|Ring|Rings|SProp|Saturate|Save|Scheme|Scope|Scopes|Search|SearchHead|SearchPattern|SearchRewrite|Section|Separate|Set|Setoid|Show|Signatures|Solve|Solver|Sort|Sortclass|Sorted|Spec|Step|Strategies|Strategy|String|Structure|SubClass|Subgraph|SuchThat|Tactic|Term|TestCompile|Theorem|Time|Timeout|To|Transparent|Type|Typeclasses|Types|Typing|UnOp|UnOpSpec|Undelimit|Undo|Unfocus|Unfocused|Unfold|Universe|Universes|Unshelve|Variable|Variables|Variant|Verbose|View|Visibility|Zify|_|apply|as|at|by|cofix|else|end|exists|exists2|fix|for|forall|fun|if|in|let|match|measure|move|removed|return|struct|then|using|wf|where|with)\b/,number:/\b(?:0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]+)?(?:p[+-]?\d[\d_]*)?|\d[\d_]*(?:\.[\d_]+)?(?:e[+-]?\d[\d_]*)?)\b/i,punct:{pattern:/@\{|\{\||\[=|:>/,alias:"punctuation"},operator:/\/\\|\\\/|\.{2,3}|:{1,2}=|\*\*|[-=]>|<(?:->?|[+:=>]|<:)|>(?:=|->)|\|[-|]?|[-!%&*+/<=>?@^~']/,punctuation:/\.\(|`\(|@\{|`\{|\{\||\[=|:>|[:.,;(){}\[\]]/}})(t)}return Qs}var el,oy;function vi(){if(oy)return el;oy=1,el=e,e.displayName="ruby",e.aliases=["rb"];function e(t){(function(n){n.languages.ruby=n.languages.extend("clike",{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),n.languages.insertBefore("ruby","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}});var r={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:n.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"}}};delete n.languages.ruby.function;var a="(?:"+[/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,/\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,/\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,/\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,/<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source].join("|")+")",o=/(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;n.languages.insertBefore("ruby","keyword",{"regex-literal":[{pattern:RegExp(/%r/.source+a+/[egimnosux]{0,6}/.source),greedy:!0,inside:{interpolation:r,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:r,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp(/(^|[^:]):/.source+o),lookbehind:!0,greedy:!0},{pattern:RegExp(/([\r\n{(,][ \t]*)/.source+o+/(?=:(?!:))/.source),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),n.languages.insertBefore("ruby","string",{"string-literal":[{pattern:RegExp(/%[qQiIwWs]?/.source+a),greedy:!0,inside:{interpolation:r,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:r,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:r,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp(/%x/.source+a),greedy:!0,inside:{interpolation:r,command:{pattern:/[\s\S]+/,alias:"string"}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:r,command:{pattern:/[\s\S]+/,alias:"string"}}}]}),delete n.languages.ruby.string,n.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),n.languages.rb=n.languages.ruby})(t)}return el}var tl,iy;function gF(){if(iy)return tl;iy=1;var e=vi();tl=t,t.displayName="crystal",t.aliases=[];function t(n){n.register(e),function(r){r.languages.crystal=r.languages.extend("ruby",{keyword:[/\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,operator:[/->/,r.languages.ruby.operator],punctuation:/[(){}[\].,;\\]/}),r.languages.insertBefore("crystal","string-literal",{attribute:{pattern:/@\[.*?\]/,inside:{delimiter:{pattern:/^@\[|\]$/,alias:"punctuation"},attribute:{pattern:/^(\s*)\w+/,lookbehind:!0,alias:"class-name"},args:{pattern:/\S(?:[\s\S]*\S)?/,inside:r.languages.crystal}}},expansion:{pattern:/\{(?:\{.*?\}|%.*?%)\}/,inside:{content:{pattern:/^(\{.)[\s\S]+(?=.\}$)/,lookbehind:!0,inside:r.languages.crystal},delimiter:{pattern:/^\{[\{%]|[\}%]\}$/,alias:"operator"}}},char:{pattern:/'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,greedy:!0}})}(n)}return tl}var nl,sy;function bF(){if(sy)return nl;sy=1;var e=yi();nl=t,t.displayName="cshtml",t.aliases=["razor"];function t(n){n.register(e),function(r){var a=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,o=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function i(A,h){for(var f=0;f<h;f++)A=A.replace(/<self>/g,function(){return"(?:"+A+")"});return A.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+o+")").replace(/<comment>/g,"(?:"+a+")")}var s=i(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),l=i(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,2),u=i(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),c=i(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source,2),d=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source,m=/(?!\d)[^\s>\/=$<%]+/.source+d+/\s*\/?>/.source,g=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+d+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+m+"|"+i(/<\1/.source+d+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+m+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+m+")";r.languages.cshtml=r.languages.extend("markup",{});var E=r.languages.insertBefore("csharp","string",{html:{pattern:RegExp(g),greedy:!0,inside:r.languages.cshtml}},{csharp:r.languages.extend("csharp",{})}),y={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:E};r.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[u,/(?:code|functions)\s*/.source+u,/(?:for|foreach|lock|switch|using|while)\s*/.source+s+/\s*/.source+u,/do\s*/.source+u+/\s*while\s*/.source+s+/(?:\s*;)?/.source,/try\s*/.source+u+/\s*catch\s*/.source+s+/\s*/.source+u+/\s*finally\s*/.source+u,/if\s*/.source+s+/\s*/.source+u+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+s+")?"+/\s*/.source+u+")*"].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:y}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:y}},value:{pattern:RegExp(/(^|[^@])@/.source+/(?:await\b\s*)?/.source+"(?:"+/\w+\b/.source+"|"+s+")(?:"+/[?!]?\.\w+\b/.source+"|"+s+"|"+l+"|"+c+s+")*"),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:y}},"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),r.languages.razor=r.languages.cshtml}(n)}return nl}var rl,ly;function yF(){if(ly)return rl;ly=1,rl=e,e.displayName="csp",e.aliases=[];function e(t){(function(n){function r(a){return RegExp(/([ \t])/.source+"(?:"+a+")"+/(?=[\s;]|$)/.source,"i")}n.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:r(/[a-z][a-z0-9.+-]*:/.source),lookbehind:!0},none:{pattern:r(/'none'/.source),lookbehind:!0,alias:"keyword"},nonce:{pattern:r(/'nonce-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},hash:{pattern:r(/'sha(?:256|384|512)-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},host:{pattern:r(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source+"|"+/\*[^\s;,']*/.source+"|"+/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:r(/'unsafe-[a-z-]+'/.source),lookbehind:!0,alias:"unsafe"},{pattern:r(/'[a-z-]+'/.source),lookbehind:!0,alias:"safe"}],punctuation:/;/}})(t)}return rl}var al,uy;function vF(){if(uy)return al;uy=1,al=e,e.displayName="cssExtras",e.aliases=[];function e(t){(function(n){var r=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,a;n.languages.css.selector={pattern:n.languages.css.selector.pattern,lookbehind:!0,inside:a={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+r.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[r,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},n.languages.css.atrule.inside["selector-function-argument"].inside=a,n.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var o={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},i={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};n.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:o,number:i,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:o,number:i})})(t)}return al}var ol,cy;function EF(){if(cy)return ol;cy=1,ol=e,e.displayName="csv",e.aliases=[];function e(t){t.languages.csv={value:/[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,punctuation:/,/}}return ol}var il,dy;function wF(){if(dy)return il;dy=1,il=e,e.displayName="cypher",e.aliases=[];function e(t){t.languages.cypher={comment:/\/\/.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,greedy:!0},"class-name":{pattern:/(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,lookbehind:!0,greedy:!0},relationship:{pattern:/(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,lookbehind:!0,greedy:!0,alias:"property"},identifier:{pattern:/`(?:[^`\\\r\n])*`/,greedy:!0},variable:/\$\w+/,keyword:/\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,function:/\b\w+\b(?=\s*\()/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,operator:/:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,punctuation:/[()[\]{},;.]/}}return il}var sl,py;function SF(){if(py)return sl;py=1,sl=e,e.displayName="d",e.aliases=[];function e(t){t.languages.d=t.languages.extend("clike",{comment:[{pattern:/^\s*#!.+/,greedy:!0},{pattern:RegExp(/(^|[^\\])/.source+"(?:"+[/\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source,/\/\/.*/.source,/\/\*[\s\S]*?\*\//.source].join("|")+")"),lookbehind:!0,greedy:!0}],string:[{pattern:RegExp([/\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source,/\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source,/\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source,/\bq"(.)[\s\S]*?\2"/.source,/(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source].join("|"),"m"),greedy:!0},{pattern:/\bq\{(?:\{[^{}]*\}|[^{}])*\}/,greedy:!0,alias:"token-string"}],keyword:/\$|\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\b/,number:[/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,{pattern:/((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,lookbehind:!0}],operator:/\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/}),t.languages.insertBefore("d","string",{char:/'(?:\\(?:\W|\w+)|[^\\])'/}),t.languages.insertBefore("d","keyword",{property:/\B@\w*/}),t.languages.insertBefore("d","function",{register:{pattern:/\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,alias:"variable"}})}return sl}var ll,fy;function RF(){if(fy)return ll;fy=1,ll=e,e.displayName="dart",e.aliases=[];function e(t){(function(n){var r=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],a=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,o={pattern:RegExp(a+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};n.languages.dart=n.languages.extend("clike",{"class-name":[o,{pattern:RegExp(a+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:o.inside}],keyword:r,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),n.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:n.languages.dart}}},string:/[\s\S]+/}},string:void 0}),n.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),n.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":o,keyword:r,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})})(t)}return ll}var ul,my;function TF(){if(my)return ul;my=1,ul=e,e.displayName="dataweave",e.aliases=[];function e(t){(function(n){n.languages.dataweave={url:/\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,property:{pattern:/(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,greedy:!0},string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},"mime-type":/\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,date:{pattern:/\|[\w:+-]+\|/,greedy:!0},comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],regex:{pattern:/\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,greedy:!0},keyword:/\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,function:/\b[A-Z_]\w*(?=\s*\()/i,number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\];(),.:@]/,operator:/<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,boolean:/\b(?:false|true)\b/}})(t)}return ul}var cl,hy;function kF(){if(hy)return cl;hy=1,cl=e,e.displayName="dax",e.aliases=[];function e(t){t.languages.dax={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/).*)/,lookbehind:!0},"data-field":{pattern:/'(?:[^']|'')*'(?!')(?:\[[ \w\xA0-\uFFFF]+\])?|\w+\[[ \w\xA0-\uFFFF]+\]/,alias:"symbol"},measure:{pattern:/\[[ \w\xA0-\uFFFF]+\]/,alias:"constant"},string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},function:/\b(?:ABS|ACOS|ACOSH|ACOT|ACOTH|ADDCOLUMNS|ADDMISSINGITEMS|ALL|ALLCROSSFILTERED|ALLEXCEPT|ALLNOBLANKROW|ALLSELECTED|AND|APPROXIMATEDISTINCTCOUNT|ASIN|ASINH|ATAN|ATANH|AVERAGE|AVERAGEA|AVERAGEX|BETA\.DIST|BETA\.INV|BLANK|CALCULATE|CALCULATETABLE|CALENDAR|CALENDARAUTO|CEILING|CHISQ\.DIST|CHISQ\.DIST\.RT|CHISQ\.INV|CHISQ\.INV\.RT|CLOSINGBALANCEMONTH|CLOSINGBALANCEQUARTER|CLOSINGBALANCEYEAR|COALESCE|COMBIN|COMBINA|COMBINEVALUES|CONCATENATE|CONCATENATEX|CONFIDENCE\.NORM|CONFIDENCE\.T|CONTAINS|CONTAINSROW|CONTAINSSTRING|CONTAINSSTRINGEXACT|CONVERT|COS|COSH|COT|COTH|COUNT|COUNTA|COUNTAX|COUNTBLANK|COUNTROWS|COUNTX|CROSSFILTER|CROSSJOIN|CURRENCY|CURRENTGROUP|CUSTOMDATA|DATATABLE|DATE|DATEADD|DATEDIFF|DATESBETWEEN|DATESINPERIOD|DATESMTD|DATESQTD|DATESYTD|DATEVALUE|DAY|DEGREES|DETAILROWS|DISTINCT|DISTINCTCOUNT|DISTINCTCOUNTNOBLANK|DIVIDE|EARLIER|EARLIEST|EDATE|ENDOFMONTH|ENDOFQUARTER|ENDOFYEAR|EOMONTH|ERROR|EVEN|EXACT|EXCEPT|EXP|EXPON\.DIST|FACT|FALSE|FILTER|FILTERS|FIND|FIRSTDATE|FIRSTNONBLANK|FIRSTNONBLANKVALUE|FIXED|FLOOR|FORMAT|GCD|GENERATE|GENERATEALL|GENERATESERIES|GEOMEAN|GEOMEANX|GROUPBY|HASONEFILTER|HASONEVALUE|HOUR|IF|IF\.EAGER|IFERROR|IGNORE|INT|INTERSECT|ISBLANK|ISCROSSFILTERED|ISEMPTY|ISERROR|ISEVEN|ISFILTERED|ISINSCOPE|ISLOGICAL|ISNONTEXT|ISNUMBER|ISO\.CEILING|ISODD|ISONORAFTER|ISSELECTEDMEASURE|ISSUBTOTAL|ISTEXT|KEEPFILTERS|KEYWORDMATCH|LASTDATE|LASTNONBLANK|LASTNONBLANKVALUE|LCM|LEFT|LEN|LN|LOG|LOG10|LOOKUPVALUE|LOWER|MAX|MAXA|MAXX|MEDIAN|MEDIANX|MID|MIN|MINA|MINUTE|MINX|MOD|MONTH|MROUND|NATURALINNERJOIN|NATURALLEFTOUTERJOIN|NEXTDAY|NEXTMONTH|NEXTQUARTER|NEXTYEAR|NONVISUAL|NORM\.DIST|NORM\.INV|NORM\.S\.DIST|NORM\.S\.INV|NOT|NOW|ODD|OPENINGBALANCEMONTH|OPENINGBALANCEQUARTER|OPENINGBALANCEYEAR|OR|PARALLELPERIOD|PATH|PATHCONTAINS|PATHITEM|PATHITEMREVERSE|PATHLENGTH|PERCENTILE\.EXC|PERCENTILE\.INC|PERCENTILEX\.EXC|PERCENTILEX\.INC|PERMUT|PI|POISSON\.DIST|POWER|PREVIOUSDAY|PREVIOUSMONTH|PREVIOUSQUARTER|PREVIOUSYEAR|PRODUCT|PRODUCTX|QUARTER|QUOTIENT|RADIANS|RAND|RANDBETWEEN|RANK\.EQ|RANKX|RELATED|RELATEDTABLE|REMOVEFILTERS|REPLACE|REPT|RIGHT|ROLLUP|ROLLUPADDISSUBTOTAL|ROLLUPGROUP|ROLLUPISSUBTOTAL|ROUND|ROUNDDOWN|ROUNDUP|ROW|SAMEPERIODLASTYEAR|SAMPLE|SEARCH|SECOND|SELECTCOLUMNS|SELECTEDMEASURE|SELECTEDMEASUREFORMATSTRING|SELECTEDMEASURENAME|SELECTEDVALUE|SIGN|SIN|SINH|SQRT|SQRTPI|STARTOFMONTH|STARTOFQUARTER|STARTOFYEAR|STDEV\.P|STDEV\.S|STDEVX\.P|STDEVX\.S|SUBSTITUTE|SUBSTITUTEWITHINDEX|SUM|SUMMARIZE|SUMMARIZECOLUMNS|SUMX|SWITCH|T\.DIST|T\.DIST\.2T|T\.DIST\.RT|T\.INV|T\.INV\.2T|TAN|TANH|TIME|TIMEVALUE|TODAY|TOPN|TOPNPERLEVEL|TOPNSKIP|TOTALMTD|TOTALQTD|TOTALYTD|TREATAS|TRIM|TRUE|TRUNC|UNICHAR|UNICODE|UNION|UPPER|USERELATIONSHIP|USERNAME|USEROBJECTID|USERPRINCIPALNAME|UTCNOW|UTCTODAY|VALUE|VALUES|VAR\.P|VAR\.S|VARX\.P|VARX\.S|WEEKDAY|WEEKNUM|XIRR|XNPV|YEAR|YEARFRAC)(?=\s*\()/i,keyword:/\b(?:DEFINE|EVALUATE|MEASURE|ORDER\s+BY|RETURN|VAR|START\s+AT|ASC|DESC)\b/i,boolean:{pattern:/\b(?:FALSE|NULL|TRUE)\b/i,alias:"constant"},number:/\b\d+(?:\.\d*)?|\B\.\d+\b/,operator:/:=|[-+*\/=^]|&&?|\|\||<(?:=>?|<|>)?|>[>=]?|\b(?:IN|NOT)\b/i,punctuation:/[;\[\](){}`,.]/}}return cl}var dl,gy;function AF(){if(gy)return dl;gy=1,dl=e,e.displayName="dhall",e.aliases=[];function e(t){t.languages.dhall={comment:/--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,string:{pattern:/"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,alias:"language-dhall",inside:null},punctuation:/\$\{|\}/}}}},label:{pattern:/`[^`]*`/,greedy:!0},url:{pattern:/\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,greedy:!0},env:{pattern:/\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,greedy:!0,inside:{function:/^env/,operator:/^:/,variable:/[\s\S]+/}},hash:{pattern:/\bsha256:[\da-fA-F]{64}\b/,inside:{function:/sha256/,operator:/:/,number:/[\da-fA-F]{64}/}},keyword:/\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,builtin:/\b(?:None|Some)\b/,boolean:/\b(?:False|True)\b/,number:/\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,operator:/\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,punctuation:/\.\.|[{}\[\](),./]/,"class-name":/\b[A-Z]\w*\b/},t.languages.dhall.string.inside.interpolation.inside.expression.inside=t.languages.dhall}return dl}var pl,by;function IF(){if(by)return pl;by=1,pl=e,e.displayName="diff",e.aliases=[];function e(t){(function(n){n.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(a){var o=r[a],i=[];/^\w+$/.test(a)||i.push(/\w+/.exec(a)[0]),a==="diff"&&i.push("bold"),n.languages.diff[a]={pattern:RegExp("^(?:["+o+`].*(?:\r
?|
]))(?:`+(/[^\s\\]/.source+'|[ 	]+(?:(?![ 	"])|'+a+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source)+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:r,quoted:{pattern:RegExp(/(^|\s)/.source+a),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}})(t)}return Id}var Cd,Lw;function zm(){if(Lw)return Cd;Lw=1,Cd=e,e.displayName="t4Templating",e.aliases=[];function e(t){(function(n){function r(o,i,s){return{pattern:RegExp("<#"+o+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+o+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:i,alias:s}}}}function a(o){var i=n.languages[o],s="language-"+o;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:r("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:r("=",i,s),"class-feature":r("\\+",i,s),standard:r("",i,s)}}}}n.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:a})})(t)}return Cd}var _d,Dw;function O2(){if(Dw)return _d;Dw=1;var e=zm(),t=yi();_d=n,n.displayName="t4Cs",n.aliases=[];function n(r){r.register(e),r.register(t),r.languages.t4=r.languages["t4-cs"]=r.languages["t4-templating"].createT4("csharp")}return _d}var xd,Mw;function Yk(){if(Mw)return xd;Mw=1;var e=Hk();xd=t,t.displayName="vbnet",t.aliases=[];function t(n){n.register(e),n.languages.vbnet=n.languages.extend("basic",{comment:[{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},{pattern:/(^|[^\\:])'.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(^|[^"])"(?:""|[^"])*"(?!")/,lookbehind:!0,greedy:!0},keyword:/(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,punctuation:/[,;:(){}]/})}return xd}var Nd,Fw;function L2(){if(Fw)return Nd;Fw=1;var e=zm(),t=Yk();Nd=n,n.displayName="t4Vb",n.aliases=[];function n(r){r.register(e),r.register(t),r.languages["t4-vb"]=r.languages["t4-templating"].createT4("vbnet")}return Nd}var Od,Pw;function Kk(){if(Pw)return Od;Pw=1,Od=e,e.displayName="yaml",e.aliases=["yml"];function e(t){(function(n){var r=/[*&][^\s[\]{},]+/,a=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,o="(?:"+a.source+"(?:[ 	]+"+r.source+")?|"+r.source+"(?:[ 	]+"+a.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function l(u,c){c=(c||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<value>>/g,function(){return u});return RegExp(d,c)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return o})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:l(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:l(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:l(s),lookbehind:!0,greedy:!0},number:{pattern:l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:a,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(t)}return Od}var Ld,Uw;function D2(){if(Uw)return Ld;Uw=1;var e=Kk();Ld=t,t.displayName="tap",t.aliases=[];function t(n){n.register(e),n.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:n.languages.yaml,alias:"language-yaml"}}}return Ld}var Dd,Bw;function M2(){if(Bw)return Dd;Bw=1,Dd=e,e.displayName="tcl",e.aliases=[];function e(t){t.languages.tcl={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,greedy:!0},variable:[{pattern:/(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,lookbehind:!0},{pattern:/(\$)\{[^}]+\}/,lookbehind:!0},{pattern:/(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,lookbehind:!0}],function:{pattern:/(^[\t ]*proc[ \t]+)\S+/m,lookbehind:!0},builtin:[{pattern:/(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,lookbehind:!0},/\b(?:else|elseif)\b/],scope:{pattern:/(^[\t ]*)(?:global|upvar|variable)\b/m,lookbehind:!0,alias:"constant"},keyword:{pattern:/(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,lookbehind:!0},operator:/!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,punctuation:/[{}()\[\]]/}}return Dd}var Md,qw;function F2(){if(qw)return Md;qw=1,Md=e,e.displayName="textile",e.aliases=[];function e(t){(function(n){var r=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,a=/\)|\((?![^|()\n]+\))/.source;function o(m,g){return RegExp(m.replace(/<MOD>/g,function(){return"(?:"+r+")"}).replace(/<PAR>/g,function(){return"(?:"+a+")"}),g||"")}var i={css:{pattern:/\{[^{}]+\}/,inside:{rest:n.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},s=n.languages.textile=n.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:o(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:o(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:i},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:o(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:o(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:i},punctuation:/^[*#]+/}},table:{pattern:o(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:o(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:i},punctuation:/\||^\./}},inline:{pattern:o(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:o(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:o(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:o(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:o(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:o(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:o(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:o(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:o(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:i},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:o(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:o(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:o(/(^")<MOD>+/.source),lookbehind:!0,inside:i},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:o(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:o(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:o(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:i},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),l=s.phrase.inside,u={inline:l.inline,link:l.link,image:l.image,footnote:l.footnote,acronym:l.acronym,mark:l.mark};s.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var c=l.inline.inside;c.bold.inside=u,c.italic.inside=u,c.inserted.inside=u,c.deleted.inside=u,c.span.inside=u;var d=l.table.inside;d.inline=u.inline,d.link=u.link,d.image=u.image,d.footnote=u.footnote,d.acronym=u.acronym,d.mark=u.mark})(t)}return Md}var Fd,jw;function P2(){if(jw)return Fd;jw=1,Fd=e,e.displayName="toml",e.aliases=[];function e(t){(function(n){var r=/(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;function a(o){return o.replace(/__/g,function(){return r})}n.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp(a(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source),"m"),lookbehind:!0,greedy:!0,alias:"class-name"},key:{pattern:RegExp(a(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source),"m"),lookbehind:!0,greedy:!0,alias:"property"},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,alias:"number"},{pattern:/\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,alias:"number"}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,boolean:/\b(?:false|true)\b/,punctuation:/[.,=[\]{}]/}})(t)}return Fd}var Pd,$w;function U2(){if($w)return Pd;$w=1,Pd=e,e.displayName="tremor",e.aliases=[];function e(t){(function(n){n.languages.tremor={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},"interpolated-string":null,extractor:{pattern:/\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,greedy:!0,inside:{regex:{pattern:/(^re)\|[\s\S]+/,lookbehind:!0},function:/^\w+/,value:/\|[\s\S]+/}},identifier:{pattern:/`[^`]*`/,greedy:!0},function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,keyword:/\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,"pattern-punctuation":{pattern:/%(?=[({[])/,alias:"punctuation"},operator:/[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,punctuation:/::|[;\[\]()\{\},.:]/};var r=/#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;n.languages.tremor["interpolated-string"]={pattern:RegExp(/(^|[^\\])/.source+'(?:"""(?:'+/[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source+"|"+r+')*"""|"(?:'+/[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source+"|"+r+')*")'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:RegExp(r),inside:{punctuation:/^#\{|\}$/,expression:{pattern:/[\s\S]+/,inside:n.languages.tremor}}},string:/[\s\S]+/}},n.languages.troy=n.languages.tremor,n.languages.trickle=n.languages.tremor})(t)}return Pd}var Ud,zw;function B2(){if(zw)return Ud;zw=1;var e=Wk(),t=qm();Ud=n,n.displayName="tsx",n.aliases=[];function n(r){r.register(e),r.register(t),function(a){var o=a.util.clone(a.languages.typescript);a.languages.tsx=a.languages.extend("jsx",o),delete a.languages.tsx.parameter,delete a.languages.tsx["literal-property"];var i=a.languages.tsx.tag;i.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+i.pattern.source+")",i.pattern.flags),i.lookbehind=!0}(r)}return Ud}var Bd,Hw;function q2(){if(Hw)return Bd;Hw=1;var e=Je();Bd=t,t.displayName="tt2",t.aliases=[];function t(n){n.register(e),function(r){r.languages.tt2=r.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),r.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,variable:{pattern:/\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i}}),r.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%\]$/,alias:"punctuation"}}),r.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete r.languages.tt2.string,r.hooks.add("before-tokenize",function(a){var o=/\[%[\s\S]+?%\]/g;r.languages["markup-templating"].buildPlaceholders(a,"tt2",o)}),r.hooks.add("after-tokenize",function(a){r.languages["markup-templating"].tokenizePlaceholders(a,"tt2")})}(n)}return Bd}var qd,Gw;function j2(){if(Gw)return qd;Gw=1;var e=Je();qd=t,t.displayName="twig",t.aliases=[];function t(n){n.register(e),n.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},n.hooks.add("before-tokenize",function(r){if(r.language==="twig"){var a=/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g;n.languages["markup-templating"].buildPlaceholders(r,"twig",a)}}),n.hooks.add("after-tokenize",function(r){n.languages["markup-templating"].tokenizePlaceholders(r,"twig")})}return qd}var jd,Ww;function $2(){if(Ww)return jd;Ww=1,jd=e,e.displayName="typoscript",e.aliases=["tsconfig"];function e(t){(function(n){var r=/\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;n.languages.typoscript={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^"'])#.*/,lookbehind:!0,greedy:!0}],function:[{pattern:/<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,inside:{string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,inside:{keyword:r}},keyword:{pattern:/INCLUDE_TYPOSCRIPT/}}},{pattern:/@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,inside:{string:/"[^"\r\n]*"|'[^'\r\n]*'/}}],string:{pattern:/^([^=]*=[< ]?)(?:(?!\]\n).)*/,lookbehind:!0,inside:{function:/\{\$.*\}/,keyword:r,number:/^\d+$/,punctuation:/[,|:]/}},keyword:r,number:{pattern:/\b\d+\s*[.{=]/,inside:{operator:/[.{=]/}},tag:{pattern:/\.?[-\w\\]+\.?/,inside:{punctuation:/\./}},punctuation:/[{}[\];(),.:|]/,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/},n.languages.tsconfig=n.languages.typoscript})(t)}return jd}var $d,Vw;function z2(){if(Vw)return $d;Vw=1,$d=e,e.displayName="unrealscript",e.aliases=["uc","uscript"];function e(t){t.languages.unrealscript={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},category:{pattern:/(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,lookbehind:!0,greedy:!0,alias:"property"},metadata:{pattern:/(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,lookbehind:!0,greedy:!0,inside:{property:/\b\w+(?=\s*=)/,operator:/=/,punctuation:/[<>|]/}},macro:{pattern:/`\w+/,alias:"property"},"class-name":{pattern:/(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,lookbehind:!0},keyword:/\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/>>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,punctuation:/[()[\]{};,.]/},t.languages.uc=t.languages.uscript=t.languages.unrealscript}return $d}var zd,Yw;function H2(){if(Yw)return zd;Yw=1,zd=e,e.displayName="uorazor",e.aliases=[];function e(t){t.languages.uorazor={"comment-hash":{pattern:/#.*/,alias:"comment",greedy:!0},"comment-slash":{pattern:/\/\/.*/,alias:"comment",greedy:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/},greedy:!0},"source-layers":{pattern:/\b(?:arms|backpack|blue|bracelet|cancel|clear|cloak|criminal|earrings|enemy|facialhair|friend|friendly|gloves|gray|grey|ground|hair|head|innerlegs|innertorso|innocent|lefthand|middletorso|murderer|neck|nonfriendly|onehandedsecondary|outerlegs|outertorso|pants|red|righthand|ring|self|shirt|shoes|talisman|waist)\b/i,alias:"function"},"source-commands":{pattern:/\b(?:alliance|attack|cast|clearall|clearignore|clearjournal|clearlist|clearsysmsg|createlist|createtimer|dclick|dclicktype|dclickvar|dress|dressconfig|drop|droprelloc|emote|getlabel|guild|gumpclose|gumpresponse|hotkey|ignore|lasttarget|lift|lifttype|menu|menuresponse|msg|org|organize|organizer|overhead|pause|poplist|potion|promptresponse|pushlist|removelist|removetimer|rename|restock|say|scav|scavenger|script|setability|setlasttarget|setskill|settimer|setvar|sysmsg|target|targetloc|targetrelloc|targettype|undress|unignore|unsetvar|useobject|useonce|useskill|usetype|virtue|wait|waitforgump|waitformenu|waitforprompt|waitforstat|waitforsysmsg|waitfortarget|walk|wfsysmsg|wft|whisper|yell)\b/,alias:"function"},"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},function:/\b(?:atlist|close|closest|count|counter|counttype|dead|dex|diffhits|diffmana|diffstam|diffweight|find|findbuff|finddebuff|findlayer|findtype|findtypelist|followers|gumpexists|hidden|hits|hp|hue|human|humanoid|ingump|inlist|insysmessage|insysmsg|int|invul|lhandempty|list|listexists|mana|maxhits|maxhp|maxmana|maxstam|maxweight|monster|mounted|name|next|noto|paralyzed|poisoned|position|prev|previous|queued|rand|random|rhandempty|skill|stam|str|targetexists|timer|timerexists|varexist|warmode|weight)\b/,keyword:/\b(?:and|as|break|continue|else|elseif|endfor|endif|endwhile|for|if|loop|not|or|replay|stop|while)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/}}return zd}var Hd,Kw;function G2(){if(Kw)return Hd;Kw=1,Hd=e,e.displayName="uri",e.aliases=["url"];function e(t){t.languages.uri={scheme:{pattern:/^[a-z][a-z0-9+.-]*:/im,greedy:!0,inside:{"scheme-delimiter":/:$/}},fragment:{pattern:/#[\w\-.~!$&'()*+,;=%:@/?]*/,inside:{"fragment-delimiter":/^#/}},query:{pattern:/\?[\w\-.~!$&'()*+,;=%:@/?]*/,inside:{"query-delimiter":{pattern:/^\?/,greedy:!0},"pair-delimiter":/[&;]/,pair:{pattern:/^[^=][\s\S]*/,inside:{key:/^[^=]+/,value:{pattern:/(^=)[\s\S]+/,lookbehind:!0}}}}},authority:{pattern:RegExp(/^\/\//.source+/(?:[\w\-.~!$&'()*+,;=%:]*@)?/.source+("(?:"+/\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\.[\w\-.~!$&'()*+,;=]+)\]/.source+"|"+/[\w\-.~!$&'()*+,;=%]*/.source+")")+/(?::\d*)?/.source,"m"),inside:{"authority-delimiter":/^\/\//,"user-info-segment":{pattern:/^[\w\-.~!$&'()*+,;=%:]*@/,inside:{"user-info-delimiter":/@$/,"user-info":/^[\w\-.~!$&'()*+,;=%:]+/}},"port-segment":{pattern:/:\d*$/,inside:{"port-delimiter":/^:/,port:/^\d+/}},host:{pattern:/[\s\S]+/,inside:{"ip-literal":{pattern:/^\[[\s\S]+\]$/,inside:{"ip-literal-delimiter":/^\[|\]$/,"ipv-future":/^v[\s\S]+/,"ipv6-address":/^[\s\S]+/}},"ipv4-address":/^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/}}}},path:{pattern:/^[\w\-.~!$&'()*+,;=%:@/]+/m,inside:{"path-separator":/\//}}},t.languages.url=t.languages.uri}return Hd}var Gd,Xw;function W2(){if(Xw)return Gd;Xw=1,Gd=e,e.displayName="v",e.aliases=[];function e(t){(function(n){var r={pattern:/[\s\S]+/,inside:null};n.languages.v=n.languages.extend("clike",{string:{pattern:/r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,alias:"quoted-string",greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/,lookbehind:!0,inside:{"interpolation-variable":{pattern:/^\$\w[\s\S]*$/,alias:"variable"},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},"interpolation-expression":r}}}},"class-name":{pattern:/(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/,lookbehind:!0},keyword:/(?:\b(?:__global|as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:else|for|if)|#(?:flag|include))\b/,number:/\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i,operator:/~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/,builtin:/\b(?:any(?:_float|_int)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|64|128|nt)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/}),r.inside=n.languages.v,n.languages.insertBefore("v","string",{char:{pattern:/`(?:\\`|\\?[^`]{1,2})`/,alias:"rune"}}),n.languages.insertBefore("v","operator",{attribute:{pattern:/(^[\t ]*)\[(?:deprecated|direct_array_access|flag|inline|live|ref_only|typedef|unsafe_fn|windows_stdcall)\]/m,lookbehind:!0,alias:"annotation",inside:{punctuation:/[\[\]]/,keyword:/\w+/}},generic:{pattern:/<\w+>(?=\s*[\)\{])/,inside:{punctuation:/[<>]/,"class-name":/\w+/}}}),n.languages.insertBefore("v","function",{"generic-function":{pattern:/\b\w+\s*<\w+>(?=\()/,inside:{function:/^\w+/,generic:{pattern:/<\w+>/,inside:n.languages.v.generic.inside}}}})})(t)}return Gd}var Wd,Zw;function V2(){if(Zw)return Wd;Zw=1,Wd=e,e.displayName="vala",e.aliases=[];function e(t){t.languages.vala=t.languages.extend("clike",{"class-name":[{pattern:/\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w)/,inside:{punctuation:/\./}},{pattern:/(\[)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/((?:\b(?:class|enum|interface|new|struct)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}}],keyword:/\b(?:abstract|as|assert|async|base|bool|break|case|catch|char|class|const|construct|continue|default|delegate|delete|do|double|dynamic|else|ensures|enum|errordomain|extern|finally|float|for|foreach|get|if|in|inline|int|int16|int32|int64|int8|interface|internal|is|lock|long|namespace|new|null|out|override|owned|params|private|protected|public|ref|requires|return|set|short|signal|sizeof|size_t|ssize_t|static|string|struct|switch|this|throw|throws|try|typeof|uchar|uint|uint16|uint32|uint64|uint8|ulong|unichar|unowned|ushort|using|value|var|virtual|void|volatile|weak|while|yield)\b/i,function:/\b\w+(?=\s*\()/,number:/(?:\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,operator:/\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,punctuation:/[{}[\];(),.:]/,constant:/\b[A-Z0-9_]+\b/}),t.languages.insertBefore("vala","string",{"raw-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"template-string":{pattern:/@"[\s\S]*?"/,greedy:!0,inside:{interpolation:{pattern:/\$(?:\([^)]*\)|[a-zA-Z]\w*)/,inside:{delimiter:{pattern:/^\$\(?|\)$/,alias:"punctuation"},rest:t.languages.vala}},string:/[\s\S]+/}}}),t.languages.insertBefore("vala","keyword",{regex:{pattern:/\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\//,"regex-flags":/^[a-z]+$/}}})}return Wd}var Vd,Jw;function Y2(){if(Jw)return Vd;Jw=1,Vd=e,e.displayName="velocity",e.aliases=[];function e(t){(function(n){n.languages.velocity=n.languages.extend("markup",{});var r={variable:{pattern:/(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,lookbehind:!0,inside:{}},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},number:/\b\d+\b/,boolean:/\b(?:false|true)\b/,operator:/[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,punctuation:/[(){}[\]:,.]/};r.variable.inside={string:r.string,function:{pattern:/([^\w-])[a-z][\w-]*(?=\()/,lookbehind:!0},number:r.number,boolean:r.boolean,punctuation:r.punctuation},n.languages.insertBefore("velocity","comment",{unparsed:{pattern:/(^|[^\\])#\[\[[\s\S]*?\]\]#/,lookbehind:!0,greedy:!0,inside:{punctuation:/^#\[\[|\]\]#$/}},"velocity-comment":[{pattern:/(^|[^\\])#\*[\s\S]*?\*#/,lookbehind:!0,greedy:!0,alias:"comment"},{pattern:/(^|[^\\])##.*/,lookbehind:!0,greedy:!0,alias:"comment"}],directive:{pattern:/(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,lookbehind:!0,inside:{keyword:{pattern:/^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,inside:{punctuation:/[{}]/}},rest:r}},variable:r.variable}),n.languages.velocity.tag.inside["attr-value"].inside.rest=n.languages.velocity})(t)}return Vd}var Yd,Qw;function K2(){if(Qw)return Yd;Qw=1,Yd=e,e.displayName="verilog",e.aliases=[];function e(t){t.languages.verilog={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"kernel-function":{pattern:/\B\$\w+\b/,alias:"property"},constant:/\B`\w+\b/,function:/\b\w+(?=\()/,keyword:/\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|case|casex|casez|cell|chandle|class|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endsequence|endspecify|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_ondetect|pulsestyle_onevent|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,important:/\b(?:always|always_comb|always_ff|always_latch)\b(?: *@)?/,number:/\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b(?:\d*[._])?\d+(?:e[-+]?\d+)?/i,operator:/[-+{}^~%*\/?=!<>&|]+/,punctuation:/[[\];(),.:]/}}return Yd}var Kd,eS;function X2(){if(eS)return Kd;eS=1,Kd=e,e.displayName="vhdl",e.aliases=[];function e(t){t.languages.vhdl={comment:/--.+/,"vhdl-vectors":{pattern:/\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,alias:"number"},"quoted-function":{pattern:/"\S+?"(?=\()/,alias:"function"},string:/"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,constant:/\b(?:library|use)\b/i,keyword:/\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,boolean:/\b(?:false|true)\b/i,function:/\w+(?=\()/,number:/'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,operator:/[<>]=?|:=|[-+*/&=]|\b(?:abs|and|mod|nand|nor|not|or|rem|rol|ror|sla|sll|sra|srl|xnor|xor)\b/i,punctuation:/[{}[\];(),.:]/}}return Kd}var Xd,tS;function Z2(){if(tS)return Xd;tS=1,Xd=e,e.displayName="vim",e.aliases=[];function e(t){t.languages.vim={string:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,comment:/".*/,function:/\b\w+(?=\()/,keyword:/\b(?:N|Next|P|Print|X|XMLent|XMLns|ab|abbreviate|abc|abclear|abo|aboveleft|al|all|ar|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|args|argu|argument|as|ascii|b|bN|bNext|ba|bad|badd|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bo|botright|bp|bprevious|br|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|brewind|bro|browse|bufdo|buffer|buffers|bun|bunload|bw|bwipeout|c|cN|cNext|cNfcNfile|ca|cabbrev|cabc|cabclear|cad|caddb|caddbuffer|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cg|cgetb|cgetbuffer|cgete|cgetexpr|cgetfile|change|changes|chd|chdir|che|checkpath|checkt|checktime|cl|cla|clast|clist|clo|close|cmapc|cmapclear|cn|cnew|cnewer|cnext|cnf|cnfile|cnorea|cnoreabbrev|co|col|colder|colo|colorscheme|comc|comclear|comp|compiler|con|conf|confirm|continue|cope|copen|copy|cp|cpf|cpfile|cprevious|cq|cquit|cr|crewind|cu|cuna|cunabbrev|cunmap|cw|cwindow|d|debugg|debuggreedy|delc|delcommand|delete|delf|delfunction|delm|delmarks|di|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|e|earlier|echoe|echoerr|echom|echomsg|echon|edit|el|else|elsei|elseif|em|emenu|en|endf|endfo|endfor|endfun|endfunction|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fin|fina|finally|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|foldd|folddoc|folddoclosed|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|h|ha|hardcopy|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iu|iuna|iunabbrev|iunmap|j|join|ju|jumps|k|kee|keepalt|keepj|keepjumps|keepmarks|l|lN|lNext|lNf|lNfile|la|lad|laddb|laddbuffer|laddexpr|laddf|laddfile|lan|language|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|left|lefta|leftabove|let|lex|lexpr|lf|lfile|lfir|lfirst|lg|lgetb|lgetbuffer|lgete|lgetexpr|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|list|ll|lla|llast|lli|llist|lm|lmak|lmake|lmap|lmapc|lmapclear|ln|lne|lnew|lnewer|lnext|lnf|lnfile|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lp|lpf|lpfile|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|m|ma|mak|make|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkv|mkvie|mkview|mkvimrc|mod|mode|move|mz|mzf|mzfile|mzscheme|n|nbkey|new|next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|o|omapc|omapclear|on|only|open|opt|options|ou|ounmap|p|pc|pclose|pe|ped|pedit|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|print|prof|profd|profdel|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|ptN|ptNext|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|py|pyf|pyfile|python|q|qa|qall|quit|quita|quitall|r|read|rec|recover|red|redi|redir|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|ru|rub|ruby|rubyd|rubydo|rubyf|rubyfile|runtime|rv|rviminfo|sN|sNext|sa|sal|sall|san|sandbox|sargument|sav|saveas|sb|sbN|sbNext|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbp|sbprevious|sbr|sbrewind|sbuffer|scrip|scripte|scriptencoding|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sl|sla|slast|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|so|sor|sort|source|sp|spe|spelld|spelldump|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|split|spr|sprevious|sre|srewind|st|sta|stag|star|startg|startgreplace|startinsert|startr|startreplace|stj|stjump|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tN|tNext|ta|tab|tabN|tabNext|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabn|tabnew|tabnext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|u|una|unabbreviate|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|ve|verb|verbose|version|vert|vertical|vi|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|w|wN|wNext|wa|wall|wh|while|win|winc|wincmd|windo|winp|winpos|winsize|wn|wnext|wp|wprevious|wq|wqa|wqall|write|ws|wsverb|wv|wviminfo|x|xa|xall|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,builtin:/\b(?:acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autocmd|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|t_AB|t_AF|t_AL|t_CS|t_CV|t_Ce|t_Co|t_Cs|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_IE|t_IS|t_K1|t_K3|t_K4|t_K5|t_K6|t_K7|t_K8|t_K9|t_KA|t_KB|t_KC|t_KD|t_KE|t_KF|t_KG|t_KH|t_KI|t_KJ|t_KK|t_KL|t_RI|t_RV|t_SI|t_Sb|t_Sf|t_WP|t_WS|t_ZH|t_ZR|t_al|t_bc|t_cd|t_ce|t_cl|t_cm|t_cs|t_da|t_db|t_dl|t_fs|t_k1|t_k2|t_k3|t_k4|t_k5|t_k6|t_k7|t_k8|t_k9|t_kB|t_kD|t_kI|t_kN|t_kP|t_kb|t_kd|t_ke|t_kh|t_kl|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_se|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_xs|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,operator:/\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,punctuation:/[{}[\](),;:]/}}return Xd}var Zd,nS;function J2(){if(nS)return Zd;nS=1,Zd=e,e.displayName="visualBasic",e.aliases=[];function e(t){t.languages["visual-basic"]={comment:{pattern:/(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,inside:{keyword:/^REM/i}},directive:{pattern:/#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,alias:"property",greedy:!0},string:{pattern:/\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,greedy:!0},date:{pattern:/#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,alias:"number"},number:/(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,boolean:/\b(?:False|Nothing|True)\b/i,keyword:/\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,operator:/[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,punctuation:/[{}().,:?]/},t.languages.vb=t.languages["visual-basic"],t.languages.vba=t.languages["visual-basic"]}return Zd}var Jd,rS;function Q2(){if(rS)return Jd;rS=1,Jd=e,e.displayName="warpscript",e.aliases=[];function e(t){t.languages.warpscript={comment:/#.*|\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,greedy:!0},variable:/\$\S+/,macro:{pattern:/@\S+/,alias:"property"},keyword:/\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,number:/[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,boolean:/\b(?:F|T|false|true)\b/,punctuation:/<%|%>|[{}[\]()]/,operator:/==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/}}return Jd}var Qd,aS;function eB(){if(aS)return Qd;aS=1,Qd=e,e.displayName="wasm",e.aliases=[];function e(t){t.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/}}return Qd}var ep,oS;function tB(){if(oS)return ep;oS=1,ep=e,e.displayName="webIdl",e.aliases=[];function e(t){(function(n){var r=/(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,a="(?:"+/\b(?:unsigned\s+)?long\s+long(?![\w-])/.source+"|"+/\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source+"|"+/(?!(?:unrestricted|unsigned)\b)/.source+r+/(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source+")"+/(?:\s*\?)?/.source,o={};n.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp(/(\bnamespace\s+)/.source+r),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:o},{pattern:RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source+a),lookbehind:!0,inside:o},{pattern:RegExp("("+/\bcallback\s+/.source+r+/\s*=\s*/.source+")"+a),lookbehind:!0,inside:o},{pattern:RegExp(/(\btypedef\b\s*)/.source+a),lookbehind:!0,inside:o},{pattern:RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source+r),lookbehind:!0},{pattern:RegExp(/(:\s*)/.source+r),lookbehind:!0},RegExp(r+/(?=\s+(?:implements|includes)\b)/.source),{pattern:RegExp(/(\b(?:implements|includes)\s+)/.source+r),lookbehind:!0},{pattern:RegExp(a+"(?="+/\s*(?:\.{3}\s*)?/.source+r+/\s*[(),;=]/.source+")"),inside:o}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/};for(var i in n.languages["web-idl"])i!=="class-name"&&(o[i]=n.languages["web-idl"][i]);n.languages.webidl=n.languages["web-idl"]})(t)}return ep}var tp,iS;function nB(){if(iS)return tp;iS=1,tp=e,e.displayName="wiki",e.aliases=[];function e(t){t.languages.wiki=t.languages.extend("markup",{"block-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,alias:"comment"},heading:{pattern:/^(=+)[^=\r\n].*?\1/m,inside:{punctuation:/^=+|=+$/,important:/.+/}},emphasis:{pattern:/('{2,5}).+?\1/,inside:{"bold-italic":{pattern:/(''''').+?(?=\1)/,lookbehind:!0,alias:["bold","italic"]},bold:{pattern:/(''')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},italic:{pattern:/('')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},punctuation:/^''+|''+$/}},hr:{pattern:/^-{4,}/m,alias:"punctuation"},url:[/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,/\[\[.+?\]\]|\[.+?\]/],variable:[/__[A-Z]+__/,/\{{3}.+?\}{3}/,/\{\{.+?\}\}/],symbol:[/^#redirect/im,/~{3,5}/],"table-tag":{pattern:/((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,lookbehind:!0,inside:{"table-bar":{pattern:/\|$/,alias:"punctuation"},rest:t.languages.markup.tag.inside}},punctuation:/^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m}),t.languages.insertBefore("wiki","tag",{nowiki:{pattern:/<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,inside:{tag:{pattern:/<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,inside:t.languages.markup.tag.inside}}}})}return tp}var np,sS;function rB(){if(sS)return np;sS=1,np=e,e.displayName="wolfram",e.aliases=["mathematica","wl","nb"];function e(t){t.languages.wolfram={comment:/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,context:{pattern:/\b\w+`+\w*/,alias:"class-name"},blank:{pattern:/\b\w+_\b/,alias:"regex"},"global-variable":{pattern:/\$\w+/,alias:"variable"},boolean:/\b(?:False|True)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\^|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},t.languages.mathematica=t.languages.wolfram,t.languages.wl=t.languages.wolfram,t.languages.nb=t.languages.wolfram}return np}var rp,lS;function aB(){if(lS)return rp;lS=1,rp=e,e.displayName="wren",e.aliases=[];function e(t){t.languages.wren={comment:[{pattern:/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*))*\*\/)*\*\/)*\*\//,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"string-literal":null,hashbang:{pattern:/^#!\/.+/,greedy:!0,alias:"comment"},attribute:{pattern:/#!?[ \t\u3000]*\w+/,alias:"keyword"},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},/\b[A-Z][a-z\d_]*\b/],constant:/\b[A-Z][A-Z\d_]*\b/,null:{pattern:/\bnull\b/,alias:"keyword"},keyword:/\b(?:as|break|class|construct|continue|else|for|foreign|if|import|in|is|return|static|super|this|var|while)\b/,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,function:/\b[a-z_]\w*(?=\s*[({])/i,operator:/<<|>>|[=!<>]=?|&&|\|\||[-+*/%~^&|?:]|\.{2,3}/,punctuation:/[\[\](){}.,;]/},t.languages.wren["string-literal"]={pattern:/(^|[^\\"])"(?:[^\\"%]|\\[\s\S]|%(?!\()|%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\))*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\)/,lookbehind:!0,inside:{expression:{pattern:/^(%\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:t.languages.wren},"interpolation-punctuation":{pattern:/^%\(|\)$/,alias:"punctuation"}}},string:/[\s\S]+/}}}return rp}var ap,uS;function oB(){if(uS)return ap;uS=1,ap=e,e.displayName="xeora",e.aliases=["xeoracube"];function e(t){(function(n){n.languages.xeora=n.languages.extend("markup",{constant:{pattern:/\$(?:DomainContents|PageRenderDuration)\$/,inside:{punctuation:{pattern:/\$/}}},variable:{pattern:/\$@?(?:#+|[-+*~=^])?[\w.]+\$/,inside:{punctuation:{pattern:/[$.]/},operator:{pattern:/#+|[-+*~=^@]/}}},"function-inline":{pattern:/\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,inside:{variable:{pattern:/(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,inside:{punctuation:{pattern:/[,.|]/},operator:{pattern:/#+|[-+*~=^@]/}}},punctuation:{pattern:/\$\w:|[$:?.,|]/}},alias:"function"},"function-block":{pattern:/\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,inside:{punctuation:{pattern:/[$:{}?.,|]/}},alias:"function"},"directive-inline":{pattern:/\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}}},alias:"function"},"directive-block-open":{pattern:/\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}},attribute:{pattern:/![A-Z]+$/,inside:{punctuation:{pattern:/!/}},alias:"keyword"}},alias:"function"},"directive-block-separator":{pattern:/\}:[-\w.]+:\{/,inside:{punctuation:{pattern:/[:{}]/}},alias:"function"},"directive-block-close":{pattern:/\}:[-\w.]+\$/,inside:{punctuation:{pattern:/[:{}$]/}},alias:"function"}}),n.languages.insertBefore("inside","punctuation",{variable:n.languages.xeora["function-inline"].inside.variable},n.languages.xeora["function-block"]),n.languages.xeoracube=n.languages.xeora})(t)}return ap}var op,cS;function iB(){if(cS)return op;cS=1,op=e,e.displayName="xmlDoc",e.aliases=[];function e(t){(function(n){function r(s,l){n.languages[s]&&n.languages.insertBefore(s,"comment",{"doc-comment":l})}var a=n.languages.markup.tag,o={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:a}},i={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:a}};r("csharp",o),r("fsharp",o),r("vbnet",i)})(t)}return op}var ip,dS;function sB(){if(dS)return ip;dS=1,ip=e,e.displayName="xojo",e.aliases=[];function e(t){t.languages.xojo={comment:{pattern:/(?:'|\/\/|Rem\b).+/i,greedy:!0},string:{pattern:/"(?:""|[^"])*"/,greedy:!0},number:[/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,/&[bchou][a-z\d]+/i],directive:{pattern:/#(?:Else|ElseIf|Endif|If|Pragma)\b/i,alias:"property"},keyword:/\b(?:AddHandler|App|Array|As(?:signs)?|Auto|Boolean|Break|By(?:Ref|Val)|Byte|Call|Case|Catch|CFStringRef|CGFloat|Class|Color|Const|Continue|CString|Currency|CurrentMethodName|Declare|Delegate|Dim|Do(?:uble|wnTo)?|Each|Else(?:If)?|End|Enumeration|Event|Exception|Exit|Extends|False|Finally|For|Function|Get|GetTypeInfo|Global|GOTO|If|Implements|In|Inherits|Int(?:8|16|32|64|eger|erface)?|Lib|Loop|Me|Module|Next|Nil|Object|Optional|OSType|ParamArray|Private|Property|Protected|PString|Ptr|Raise(?:Event)?|ReDim|RemoveHandler|Return|Select(?:or)?|Self|Set|Shared|Short|Single|Soft|Static|Step|String|Sub|Super|Text|Then|To|True|Try|Ubound|UInt(?:8|16|32|64|eger)?|Until|Using|Var(?:iant)?|Wend|While|WindowPtr|WString)\b/i,operator:/<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|WeakAddressOf|Xor)\b/i,punctuation:/[.,;:()]/}}return ip}var sp,pS;function lB(){if(pS)return sp;pS=1,sp=e,e.displayName="xquery",e.aliases=[];function e(t){(function(n){n.languages.xquery=n.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),n.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,n.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,n.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,n.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:n.languages.xquery,alias:"language-xquery"};var r=function(o){return typeof o=="string"?o:typeof o.content=="string"?o.content:o.content.map(r).join("")},a=function(o){for(var i=[],s=0;s<o.length;s++){var l=o[s],u=!1;if(typeof l!="string"&&(l.type==="tag"&&l.content[0]&&l.content[0].type==="tag"?l.content[0].content[0].content==="</"?i.length>0&&i[i.length-1].tagName===r(l.content[0].content[1])&&i.pop():l.content[l.content.length-1].content==="/>"||i.push({tagName:r(l.content[0].content[1]),openedBraces:0}):i.length>0&&l.type==="punctuation"&&l.content==="{"&&(!o[s+1]||o[s+1].type!=="punctuation"||o[s+1].content!=="{")&&(!o[s-1]||o[s-1].type!=="plain-text"||o[s-1].content!=="{")?i[i.length-1].openedBraces++:i.length>0&&i[i.length-1].openedBraces>0&&l.type==="punctuation"&&l.content==="}"?i[i.length-1].openedBraces--:l.type!=="comment"&&(u=!0)),(u||typeof l=="string")&&i.length>0&&i[i.length-1].openedBraces===0){var c=r(l);s<o.length-1&&(typeof o[s+1]=="string"||o[s+1].type==="plain-text")&&(c+=r(o[s+1]),o.splice(s+1,1)),s>0&&(typeof o[s-1]=="string"||o[s-1].type==="plain-text")&&(c=r(o[s-1])+c,o.splice(s-1,1),s--),/^\s+$/.test(c)?o[s]=c:o[s]=new n.Token("plain-text",c,null,c)}l.content&&typeof l.content!="string"&&a(l.content)}};n.hooks.add("after-tokenize",function(o){o.language==="xquery"&&a(o.tokens)})})(t)}return sp}var lp,fS;function uB(){if(fS)return lp;fS=1,lp=e,e.displayName="yang",e.aliases=[];function e(t){t.languages.yang={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"(?:[^\\"]|\\.)*"|'[^']*'/,greedy:!0},keyword:{pattern:/(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,lookbehind:!0},namespace:{pattern:/(\s)[a-z_][\w.-]*(?=:)/i,lookbehind:!0},boolean:/\b(?:false|true)\b/,operator:/\+/,punctuation:/[{};:]/}}return lp}var up,mS;function cB(){if(mS)return up;mS=1,up=e,e.displayName="zig",e.aliases=[];function e(t){(function(n){function r(c){return function(){return c}}var a=/\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,o="\\b(?!"+a.source+")(?!\\d)\\w+\\b",i=/align\s*\((?:[^()]|\([^()]*\))*\)/.source,s=/(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g,r(i)),l=/(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g,r(o)),u="(?!\\s)(?:!?\\s*(?:"+s+"\\s*)*"+l+")+";n.languages.zig={comment:[{pattern:/\/\/[/!].*/,alias:"doc-comment"},/\/{2}.*/],string:[{pattern:/(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},{pattern:/([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,lookbehind:!0,greedy:!0}],char:{pattern:/(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,lookbehind:!0,greedy:!0},builtin:/\B@(?!\d)\w+(?=\s*\()/,label:{pattern:/(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,lookbehind:!0},"class-name":[/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,{pattern:RegExp(/(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g,r(u)).replace(/<ALIGN>/g,r(i))),lookbehind:!0,inside:null},{pattern:RegExp(/(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g,r(u)).replace(/<ALIGN>/g,r(i))),lookbehind:!0,inside:null}],"builtin-type":{pattern:/\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,alias:"keyword"},keyword:a,function:/\b(?!\d)\w+(?=\s*\()/,number:/\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,boolean:/\b(?:false|true)\b/,operator:/\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,punctuation:/[.:,;(){}[\]]/},n.languages.zig["class-name"].forEach(function(c){c.inside===null&&(c.inside=n.languages.zig)})})(t)}return up}var v=yM,dB=v;v.register(_M());v.register(xM());v.register(NM());v.register(OM());v.register(LM());v.register(DM());v.register(MM());v.register(FM());v.register(PM());v.register(UM());v.register(BM());v.register(qM());v.register(jM());v.register($M());v.register(zM());v.register(HM());v.register(GM());v.register(WM());v.register(VM());v.register(YM());v.register(KM());v.register(XM());v.register(zk());v.register(Hk());v.register(ZM());v.register(JM());v.register(QM());v.register(eF());v.register(tF());v.register(nF());v.register(rF());v.register(aF());v.register(oF());v.register(iF());v.register($n());v.register(sF());v.register(lF());v.register(uF());v.register(cF());v.register(dF());v.register(pF());v.register(fF());v.register(mF());v.register(hF());v.register(Pm());v.register(gF());v.register(yi());v.register(bF());v.register(yF());v.register(vF());v.register(EF());v.register(wF());v.register(SF());v.register(RF());v.register(TF());v.register(kF());v.register(AF());v.register(IF());v.register(CF());v.register(_F());v.register(xF());v.register(NF());v.register(OF());v.register(LF());v.register(DF());v.register(MF());v.register(FF());v.register(PF());v.register(UF());v.register(BF());v.register(qF());v.register(jF());v.register($F());v.register(zF());v.register(HF());v.register(GF());v.register(WF());v.register(VF());v.register(YF());v.register(KF());v.register(XF());v.register(ZF());v.register(JF());v.register(QF());v.register(eP());v.register(tP());v.register(nP());v.register(rP());v.register(aP());v.register(oP());v.register(iP());v.register(sP());v.register(lP());v.register(uP());v.register(Um());v.register(cP());v.register(dP());v.register(pP());v.register(fP());v.register(mP());v.register(hP());v.register(gP());v.register(bP());v.register(yP());v.register(vP());v.register(EP());v.register(wP());v.register(SP());v.register(RP());v.register(TP());v.register(kP());v.register(AP());v.register(Bm());v.register(IP());v.register(Ei());v.register(CP());v.register(_P());v.register(xP());v.register(NP());v.register(OP());v.register(LP());v.register(DP());v.register(jm());v.register(MP());v.register(FP());v.register(PP());v.register(Wk());v.register(UP());v.register(BP());v.register(qP());v.register(jP());v.register($P());v.register(zP());v.register(HP());v.register(GP());v.register(WP());v.register(VP());v.register(YP());v.register(KP());v.register(XP());v.register(ZP());v.register(JP());v.register(QP());v.register(Gk());v.register(eU());v.register(tU());v.register(nU());v.register(Je());v.register(rU());v.register(aU());v.register(oU());v.register(iU());v.register(sU());v.register(lU());v.register(uU());v.register(cU());v.register(dU());v.register(pU());v.register(fU());v.register(mU());v.register(hU());v.register(gU());v.register(bU());v.register(yU());v.register(vU());v.register(EU());v.register(wU());v.register(SU());v.register(RU());v.register(TU());v.register(kU());v.register(AU());v.register(IU());v.register(CU());v.register(_U());v.register(xU());v.register(NU());v.register(OU());v.register(LU());v.register(DU());v.register(wi());v.register(MU());v.register(FU());v.register(PU());v.register(UU());v.register(BU());v.register(qU());v.register(jU());v.register($U());v.register(zU());v.register(HU());v.register(GU());v.register(WU());v.register(VU());v.register(YU());v.register(KU());v.register(XU());v.register(ZU());v.register(JU());v.register(QU());v.register(e2());v.register(t2());v.register(n2());v.register(r2());v.register(a2());v.register(o2());v.register(i2());v.register(s2());v.register(l2());v.register(u2());v.register(c2());v.register(vi());v.register(d2());v.register(p2());v.register(f2());v.register(m2());v.register($m());v.register(h2());v.register(g2());v.register(b2());v.register(y2());v.register(v2());v.register(E2());v.register(w2());v.register(S2());v.register(R2());v.register(T2());v.register(k2());v.register(A2());v.register(Fm());v.register(I2());v.register(C2());v.register(_2());v.register(x2());v.register(N2());v.register(O2());v.register(zm());v.register(L2());v.register(D2());v.register(M2());v.register(F2());v.register(P2());v.register(U2());v.register(B2());v.register(q2());v.register(Vk());v.register(j2());v.register(qm());v.register($2());v.register(z2());v.register(H2());v.register(G2());v.register(W2());v.register(V2());v.register(Yk());v.register(Y2());v.register(K2());v.register(X2());v.register(Z2());v.register(J2());v.register(Q2());v.register(eB());v.register(tB());v.register(nB());v.register(rB());v.register(aB());v.register(oB());v.register(iB());v.register(sB());v.register(lB());v.register(Kk());v.register(uB());v.register(cB());var Xk=cO(dB,CM);Xk.supportedLanguages=dO;const pB=Xk,fB={'code[class*="language-"]':{color:"#f8f8f2",background:"none",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#f8f8f2",background:"#2b2b2b",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:"0.5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:"0.1em",borderRadius:"0.3em",whiteSpace:"normal"},comment:{color:"#d4d0ab"},prolog:{color:"#d4d0ab"},doctype:{color:"#d4d0ab"},cdata:{color:"#d4d0ab"},punctuation:{color:"#fefefe"},property:{color:"#ffa07a"},tag:{color:"#ffa07a"},constant:{color:"#ffa07a"},symbol:{color:"#ffa07a"},deleted:{color:"#ffa07a"},boolean:{color:"#00e0e0"},number:{color:"#00e0e0"},selector:{color:"#abe338"},"attr-name":{color:"#abe338"},string:{color:"#abe338"},char:{color:"#abe338"},builtin:{color:"#abe338"},inserted:{color:"#abe338"},operator:{color:"#00e0e0"},entity:{color:"#00e0e0",cursor:"help"},url:{color:"#00e0e0"},".language-css .token.string":{color:"#00e0e0"},".style .token.string":{color:"#00e0e0"},variable:{color:"#00e0e0"},atrule:{color:"#ffd700"},"attr-value":{color:"#ffd700"},function:{color:"#ffd700"},keyword:{color:"#00e0e0"},regex:{color:"#ffd700"},important:{color:"#ffd700",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}},mB=({fill:e,className:t})=>H("svg",{className:t!=null?t:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:H("g",{"data-name":"Layer 2",children:Pn("g",{"data-name":"arrow-back",children:[H("rect",{width:"24",height:"24",transform:"rotate(90 12 12)",opacity:"0"}),H("path",{fill:e,d:"M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"})]})})});function hB(){const{setPage:e,reactJS:t,setReactJS:n}=dm(),r=pm.ReactJS.v1.value,[a,o]=pt.exports.useState(null),[i,s]=pt.exports.useState(!1);pt.exports.useEffect(()=>{u()},[]),pt.exports.useEffect(()=>(document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}),[a]);const l=()=>{const d=Object.entries(t!=null?t:{}).filter(([,g])=>!g.isDone),m=Math.floor(Math.random()*d.length);return d[m][0]};function u(d=!1){if(d&&a){const g={...t};g[a]={isDone:!0},n(g),fr.set("ReactJS",g)}const m=l();o(m),s(!1)}function c(d){d.key===" "?s(m=>!m):d.key==="ArrowRight"?u():d.key==="Enter"&&u(!0)}return Pn("div",{children:[H("div",{style:{height:"80px",width:"80px"},children:H("div",{style:{height:"80px",width:"80px",padding:"15px",cursor:"pointer"},onClick:()=>e("Home"),children:H(mB,{fill:"#d4d4d4"})})}),H("div",{style:{maxWidth:"820px",padding:"0 10px",margin:"0 auto",height:"calc(100vh - 160px)",overflowX:"hidden",overflowY:"auto"},onClick:()=>s(d=>!d),children:H("div",{children:a&&H(Em,{children:r[a.toString()].question+(i?r[a.toString()].answer:""),components:{code({node:d,inline:m,className:g,children:E,...y}){const A=/language-(\w+)/.exec(g||"");return!m&&A?H("div",{style:{marginBottom:"16px"},children:H(pB,{children:String(E).replace(/\n$/,""),style:fB,language:A[1],PreTag:"div",...y})}):H("code",{className:g,...y,style:{backgroundColor:"rgba(99,110,123,0.4)",padding:"0.2em 0.4em",borderRadius:"6px"},children:E})},h2:({node:d,...m})=>H("div",{style:{textAlign:"center",marginBottom:"32px"},children:H("h2",{style:{color:"#0ea5e9"},...m})}),p:({node:d,...m})=>H("p",{style:{marginBottom:"16px",lineHeight:"24px"},...m}),li:({node:d,...m})=>H("li",{style:{marginBottom:"4px",lineHeight:"24px"},...m}),ol:({node:d,...m})=>H("ol",{style:{marginBottom:"16px",marginLeft:"32px"},...m}),a:({node:d,...m})=>H("a",{style:{color:"#0ea5e9"},...m})}})})}),Pn("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80px"},children:[H(na,{style:{marginRight:"10px"},variant:"primary",onClick:()=>s(d=>!d),children:i?"Hide":"Show"}),H(na,{style:{marginRight:"10px"},variant:"primary",onClick:()=>u(!0),children:"Done"}),H(na,{variant:"primary",onClick:()=>u(),children:"Again"})]})]})}function gB(){return H(OC,{children:H(bB,{})})}function bB(){const{page:e,setReactJS:t}=dm();return pt.exports.useEffect(()=>{let n=fr.get("ReactJS");if(fr.get("JavaScript"),n==null){const r=pm.ReactJS.v1.initState();fr.set("ReactJS",r),t(r)}else t(n)},[]),e==="InGame"?H(hB,{}):H(WC,{})}cp.createRoot(document.getElementById("root")).render(H(to.StrictMode,{children:H(gB,{})}));