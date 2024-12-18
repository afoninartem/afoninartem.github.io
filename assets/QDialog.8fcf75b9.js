import{V as ue,$ as V,c as re,r as C,a as c,w as O,b as ce,h as v,an as R,g as de,j as fe,aD as me}from"./index.c5b88365.js";import{u as ge,a as ve}from"./use-prevent-scroll.a764803f.js";import{u as he,a as ye,b as be,c as ke}from"./selection.21a20a4f.js";import{a as xe,c as we,d as qe,g as Be}from"./position-engine.0aeac9b3.js";import{g as Ee}from"./use-form.194c5e78.js";const s=[];let d;function Se(e){d=e.keyCode===27}function Te(){d===!0&&(d=!1)}function _e(e){d===!0&&(d=!1,ue(e,27)===!0&&s[s.length-1](e))}function Q(e){window[e]("keydown",Se),window[e]("blur",Te),window[e]("keyup",_e),d=!1}function Ce(e){V.is.desktop===!0&&(s.push(e),s.length===1&&Q("addEventListener"))}function j(e){const o=s.indexOf(e);o!==-1&&(s.splice(o,1),s.length===0&&Q("removeEventListener"))}const u=[];function W(e){u[u.length-1](e)}function Fe(e){V.is.desktop===!0&&(u.push(e),u.length===1&&document.body.addEventListener("focusin",W))}function A(e){const o=u.indexOf(e);o!==-1&&(u.splice(o,1),u.length===0&&document.body.removeEventListener("focusin",W))}let k=0;const pe={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},I={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Pe=re({name:"QDialog",inheritAttrs:!1,props:{...he,...xe,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ye,"shake","click","escapeKey"],setup(e,{slots:o,emit:f,attrs:F}){const x=fe(),i=C(null),r=C(!1),m=C(!1);let l=null,a=null,h,w;const p=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:D}=ve(),{registerTimeout:z}=be(),{registerTick:U,removeTick:H}=we(),{transitionProps:G,transitionStyle:L}=qe(e,()=>I[e.position][0],()=>I[e.position][1]),J=c(()=>L.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:M,hidePortal:P,portalIsAccessible:N,renderPortal:X}=Be(x,i,se,"dialog"),{hide:y}=ke({showing:r,hideOnRouteChange:p,handleShow:oe,handleHide:ie,processOnMount:!0}),{addToHistory:Y,removeFromHistory:Z}=ge(r,y,p),ee=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${pe[e.position]}`+(m.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),b=c(()=>r.value===!0&&e.seamless!==!0),te=c(()=>e.autoClose===!0?{onClick:le}:{}),ne=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${b.value===!0?"modal":"seamless"}`,F.class]);O(()=>e.maximized,t=>{r.value===!0&&E(t)}),O(b,t=>{D(t),t===!0?(Fe(S),Ce(B)):(A(S),j(B))});function oe(t){Y(),a=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,E(e.maximized),M(),m.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),U(g)):H(),z(()=>{if(x.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:n,bottom:T}=document.activeElement.getBoundingClientRect(),{innerHeight:K}=window,_=window.visualViewport!==void 0?window.visualViewport.height:K;n>0&&T>_/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-_,T>=K?1/0:Math.ceil(document.scrollingElement.scrollTop+T-_/2))),document.activeElement.scrollIntoView()}w=!0,i.value.click(),w=!1}M(!0),m.value=!1,f("show",t)},e.transitionDuration)}function ie(t){H(),Z(),$(!0),m.value=!0,P(),a!==null&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),z(()=>{P(!0),m.value=!1,f("hide",t)},e.transitionDuration)}function g(t){Ee(()=>{let n=i.value;n===null||n.contains(document.activeElement)===!0||(n=(t!==""?n.querySelector(t):null)||n.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.querySelector("[autofocus], [data-autofocus]")||n,n.focus({preventScroll:!0}))})}function q(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):g(),f("shake");const n=i.value;n!==null&&(n.classList.remove("q-animate--scale"),n.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,i.value!==null&&(n.classList.remove("q-animate--scale"),g())},170))}function B(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&q():(f("escapeKey"),y()))}function $(t){l!==null&&(clearTimeout(l),l=null),(t===!0||r.value===!0)&&(E(!1),e.seamless!==!0&&(D(!1),A(S),j(B))),t!==!0&&(a=null)}function E(t){t===!0?h!==!0&&(k<1&&document.body.classList.add("q-body--dialog"),k++,h=!0):h===!0&&(k<2&&document.body.classList.remove("q-body--dialog"),k--,h=!1)}function le(t){w!==!0&&(y(t),f("click",t))}function ae(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?y(t):e.noShake!==!0&&q()}function S(t){e.allowFocusOutside!==!0&&N.value===!0&&me(i.value,t.target)!==!0&&g('[tabindex]:not([tabindex="-1"])')}Object.assign(x.proxy,{focus:g,shake:q,__updateRefocusTarget(t){a=t||null}}),ce($);function se(){return v("div",{role:"dialog","aria-modal":b.value===!0?"true":"false",...F,class:ne.value},[v(R,{name:"q-transition--fade",appear:!0},()=>b.value===!0?v("div",{class:"q-dialog__backdrop fixed-full",style:J.value,"aria-hidden":"true",tabindex:-1,onClick:ae}):null),v(R,G.value,()=>r.value===!0?v("div",{ref:i,class:ee.value,style:L.value,tabindex:-1,...te.value},de(o.default)):null)])}return X}});export{Pe as Q,Fe as a,j as b,Ce as c,A as r};
