import{h as te,ay as Xe,az as Je,j as v,u as Ze,t as q,Q as ce,aA as et,ao as tt,z as D,g as _e,aa as nt,m as Q,k as He,ab as it,aB as X,r as k,a0 as lt,aj as ot,aC as at,aD as ut,aE as st,a6 as Me,a as be,w as E,an as me,v as ze,aF as Le,d as qe,b as we,o as rt,f as ct,Y as he,e as dt}from"./index.461cf75b.js";import{u as xe,a as ye}from"./use-dark.9744550a.js";import{u as Oe,a as De,b as pe,d as Re,e as ft,g as mt,c as ht}from"./format.e15fd7b9.js";import{r as Se,l as vt,a as We}from"./use-key-composition.def118d5.js";import{c as gt,g as bt}from"./scroll.a35e83ec.js";const xt={xs:8,sm:10,md:14,lg:20,xl:24};var At=te({name:"QChip",props:{...xe,...Xe,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:n,emit:i}){const{proxy:{$q:t}}=D(),l=ye(e,t),s=Je(e,xt),o=v(()=>e.selected===!0||e.icon!==void 0),f=v(()=>e.selected===!0?e.iconSelected||t.iconSet.chip.selected:e.icon),r=v(()=>e.iconRemove||t.iconSet.chip.remove),u=v(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),d=v(()=>{const h=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(h?` text-${h} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(u.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(l.value===!0?" q-chip--dark q-dark":"")}),g=v(()=>{const h=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},C={...h,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||t.lang.label.remove};return{chip:h,remove:C}});function x(h){h.keyCode===13&&a(h)}function a(h){e.disable||(i("update:selected",!e.selected),i("click",h))}function y(h){(h.keyCode===void 0||h.keyCode===13)&&(_e(h),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function p(){const h=[];u.value===!0&&h.push(q("div",{class:"q-focus-helper"})),o.value===!0&&h.push(q(ce,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const C=e.label!==void 0?[q("div",{class:"ellipsis"},[e.label])]:void 0;return h.push(q("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},et(n.default,C))),e.iconRight&&h.push(q(ce,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&h.push(q(ce,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:r.value,...g.value.remove,onClick:y,onKeyup:y})),h}return()=>{if(e.modelValue===!1)return;const h={class:d.value,style:s.value};return u.value===!0&&Object.assign(h,g.value.chip,{onClick:a,onKeyup:x}),Ze("div",h,p(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[tt,e.ripple]])}}});function Ae(){let e;const n=D();function i(){e=void 0}return nt(i),Q(i),{removeTick:i,registerTick(t){e=t,He(()=>{e===t&&(it(n)===!1&&e(),e=void 0)})}}}const Fe={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Qe(e,n=()=>{},i=()=>{}){return{transitionProps:v(()=>{const t=`q-transition--${e.transitionShow||n()}`,l=`q-transition--${e.transitionHide||i()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:v(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const L=[];function Ft(e){return L.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function je(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return X(e)}else if(e.__qPortal===!0){const i=X(e);return i!==void 0&&i.$options.name==="QPopupProxy"?(e.hide(n),i):e}e=X(e)}while(e!=null)}function Qt(e,n,i){for(;i!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(i--,e.$options.name==="QMenu"){e=je(e,n);continue}e.hide(n)}e=X(e)}}function yt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ke(e,n,i,t){const l=k(!1),s=k(!1);let o=null;const f={},r=t==="dialog"&&yt(e);function u(g){if(g===!0){Se(f),s.value=!0;return}s.value=!1,l.value===!1&&(r===!1&&o===null&&(o=ut(!1,t)),l.value=!0,L.push(e.proxy),vt(f))}function d(g){if(s.value=!1,g!==!0)return;Se(f),l.value=!1;const x=L.indexOf(e.proxy);x!==-1&&L.splice(x,1),o!==null&&(st(o),o=null)}return lt(()=>{d(!0)}),e.proxy.__qPortal=!0,ot(e.proxy,"contentEl",()=>n.value),{showPortal:u,hidePortal:d,portalIsActive:l,portalIsAccessible:s,renderPortal:()=>r===!0?i():l.value===!0?[q(at,{to:o},i())]:void 0}}const $=[];let O;function qt(e){O=e.keyCode===27}function wt(){O===!0&&(O=!1)}function St(e){O===!0&&(O=!1,Me(e,27)===!0&&$[$.length-1](e))}function Ie(e){window[e]("keydown",qt),window[e]("blur",wt),window[e]("keyup",St),O=!1}function Ve(e){be.is.desktop===!0&&($.push(e),$.length===1&&Ie("addEventListener"))}function J(e){const n=$.indexOf(e);n>-1&&($.splice(n,1),$.length===0&&Ie("removeEventListener"))}const P=[];function Ne(e){P[P.length-1](e)}function Ge(e){be.is.desktop===!0&&(P.push(e),P.length===1&&document.body.addEventListener("focusin",Ne))}function ve(e){const n=P.indexOf(e);n>-1&&(P.splice(n,1),P.length===0&&document.body.removeEventListener("focusin",Ne))}let U=0;const kt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ke={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var jt=te({name:"QDialog",inheritAttrs:!1,props:{...Oe,...Fe,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...De,"shake","click","escapeKey"],setup(e,{slots:n,emit:i,attrs:t}){const l=D(),s=k(null),o=k(!1),f=k(!1);let r=null,u=null,d,g;const x=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:a}=mt(),{registerTimeout:y}=pe(),{registerTick:p,removeTick:h}=Ae(),{transitionProps:C,transitionStyle:j}=Qe(e,()=>ke[e.position][0],()=>ke[e.position][1]),{showPortal:K,hidePortal:R,portalIsAccessible:ne,renderPortal:ie}=Ke(l,s,se,"dialog"),{hide:w}=Re({showing:o,hideOnRouteChange:x,handleShow:N,handleHide:ae,processOnMount:!0}),{addToHistory:le,removeFromHistory:I}=ft(o,w,x),V=v(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${kt[e.position]}`+(f.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),B=v(()=>o.value===!0&&e.seamless!==!0),oe=v(()=>e.autoClose===!0?{onClick:ue}:{}),W=v(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${B.value===!0?"modal":"seamless"}`,t.class]);E(()=>e.maximized,m=>{o.value===!0&&F(m)}),E(B,m=>{a(m),m===!0?(Ge(z),Ve(H)):(ve(z),J(H))});function N(m){le(),u=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,F(e.maximized),K(),f.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),p(T)):h(),y(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:b,bottom:S}=document.activeElement.getBoundingClientRect(),{innerHeight:Y}=window,c=window.visualViewport!==void 0?window.visualViewport.height:Y;b>0&&S>c/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-c,S>=Y?1/0:Math.ceil(document.scrollingElement.scrollTop+S-c/2))),document.activeElement.scrollIntoView()}g=!0,s.value.click(),g=!1}K(!0),f.value=!1,i("show",m)},e.transitionDuration)}function ae(m){h(),I(),M(!0),f.value=!0,R(),u!==null&&(((m&&m.type.indexOf("key")===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),y(()=>{R(!0),f.value=!1,i("hide",m)},e.transitionDuration)}function T(m){We(()=>{let b=s.value;b===null||b.contains(document.activeElement)===!0||(b=(m!==""?b.querySelector(m):null)||b.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||b.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||b.querySelector("[autofocus], [data-autofocus]")||b,b.focus({preventScroll:!0}))})}function A(m){m&&typeof m.focus=="function"?m.focus({preventScroll:!0}):T(),i("shake");const b=s.value;b!==null&&(b.classList.remove("q-animate--scale"),b.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,s.value!==null&&(b.classList.remove("q-animate--scale"),T())},170))}function H(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&A():(i("escapeKey"),w()))}function M(m){r!==null&&(clearTimeout(r),r=null),(m===!0||o.value===!0)&&(F(!1),e.seamless!==!0&&(a(!1),ve(z),J(H))),m!==!0&&(u=null)}function F(m){m===!0?d!==!0&&(U<1&&document.body.classList.add("q-body--dialog"),U++,d=!0):d===!0&&(U<2&&document.body.classList.remove("q-body--dialog"),U--,d=!1)}function ue(m){g!==!0&&(w(m),i("click",m))}function G(m){e.persistent!==!0&&e.noBackdropDismiss!==!0?w(m):e.noShake!==!0&&A()}function z(m){e.allowFocusOutside!==!0&&ne.value===!0&&Le(s.value,m.target)!==!0&&T('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:T,shake:A,__updateRefocusTarget(m){u=m||null}}),Q(M);function se(){return q("div",{role:"dialog","aria-modal":B.value===!0?"true":"false",...t,class:W.value},[q(me,{name:"q-transition--fade",appear:!0},()=>B.value===!0?q("div",{class:"q-dialog__backdrop fixed-full",style:j.value,"aria-hidden":"true",tabindex:-1,onClick:G}):null),q(me,C.value,()=>o.value===!0?q("div",{ref:s,class:V.value,style:j.value,tabindex:-1,...oe.value},ze(n.default)):null)])}return ie}});const Ct={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Et({showing:e,avoidEmit:n,configureAnchorEl:i}){const{props:t,proxy:l,emit:s}=D(),o=k(null);let f=null;function r(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const u={};i===void 0&&(Object.assign(u,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Me(a,13)===!0&&u.toggle(a)},contextClick(a){l.hide(a),qe(a),He(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:qe,mobileTouch(a){if(u.mobileCleanup(a),r(a)!==!0)return;l.hide(a),o.value.classList.add("non-selectable");const y=a.target;we(u,"anchor",[[y,"touchmove","mobileCleanup","passive"],[y,"touchend","mobileCleanup","passive"],[y,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&ht()}}),i=function(a=t.contextMenu){if(t.noParentEvent===!0||o.value===null)return;let y;a===!0?l.$q.platform.is.mobile===!0?y=[[o.value,"touchstart","mobileTouch","passive"]]:y=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:y=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],we(u,"anchor",y)});function d(){ct(u,"anchor")}function g(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;i()}function x(){if(t.target===!1||t.target===""||l.$el.parentNode===null)o.value=null;else if(t.target===!0)g(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,i()):(o.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return E(()=>t.contextMenu,a=>{o.value!==null&&(d(),i(a))}),E(()=>t.target,()=>{o.value!==null&&d(),x()}),E(()=>t.noParentEvent,a=>{o.value!==null&&(a===!0?d():i())}),rt(()=>{x(),n!==!0&&t.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),Q(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:o,canShow:r,anchorEvents:u}}function Bt(e,n){const i=k(null);let t;function l(f,r){const u=`${r!==void 0?"add":"remove"}EventListener`,d=r!==void 0?r:t;f!==window&&f[u]("scroll",d,he.passive),window[u]("scroll",d,he.passive),t=r}function s(){i.value!==null&&(l(i.value),i.value=null)}const o=E(()=>e.noParentEvent,()=>{i.value!==null&&(s(),n())});return Q(o),{localScrollTarget:i,unconfigureScrollTarget:s,changeScrollEvent:l}}const{notPassiveCapture:Z}=he,_=[];function ee(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let i=L.length-1;for(;i>=0;){const t=L[i].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;i--}for(let t=_.length-1;t>=0;t--){const l=_[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Tt(e){_.push(e),_.length===1&&(document.addEventListener("mousedown",ee,Z),document.addEventListener("touchstart",ee,Z))}function Ce(e){const n=_.findIndex(i=>i===e);n>-1&&(_.splice(n,1),_.length===0&&(document.removeEventListener("mousedown",ee,Z),document.removeEventListener("touchstart",ee,Z)))}let Ee,Be;function Te(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function $t(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ge={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ge[`${e}#ltr`]=e,ge[`${e}#rtl`]=e});function $e(e,n){const i=e.split(" ");return{vertical:i[0],horizontal:ge[`${i[1]}#${n===!0?"rtl":"ltr"}`]}}function Pt(e,n){let{top:i,left:t,right:l,bottom:s,width:o,height:f}=e.getBoundingClientRect();return n!==void 0&&(i-=n[1],t-=n[0],s+=n[1],l+=n[0],o+=n[0],f+=n[1]),{top:i,bottom:s,height:f,left:t,right:l,width:o,middle:t+(l-t)/2,center:i+(s-i)/2}}function _t(e,n,i){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,i!==void 0&&(t+=i[1],l+=i[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function Ht(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Pe(e,n,i){return{top:e[i.anchorOrigin.vertical]-n[i.selfOrigin.vertical],left:e[i.anchorOrigin.horizontal]-n[i.selfOrigin.horizontal]}}function Mt(e){if(be.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:r,offsetTop:u}=window.visualViewport;r!==Ee&&(f.setProperty("--q-pe-left",r+"px"),Ee=r),u!==Be&&(f.setProperty("--q-pe-top",u+"px"),Be=u)}const{scrollLeft:n,scrollTop:i}=e.el,t=e.absoluteOffset===void 0?Pt(e.anchorEl,e.cover===!0?[0,0]:e.offset):_t(e.anchorEl,e.absoluteOffset,e.offset);let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const s=Ht(e.el);let o=Pe(t,s,e);if(e.absoluteOffset===void 0||e.offset===void 0)de(o,t,s,e.anchorOrigin,e.selfOrigin);else{const{top:f,left:r}=o;de(o,t,s,e.anchorOrigin,e.selfOrigin);let u=!1;if(o.top!==f){u=!0;const d=2*e.offset[1];t.center=t.top-=d,t.bottom-=d+2}if(o.left!==r){u=!0;const d=2*e.offset[0];t.middle=t.left-=d,t.right-=d+2}u===!0&&(o=Pe(t,s,e),de(o,t,s,e.anchorOrigin,e.selfOrigin))}l={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(l.maxHeight=o.maxHeight+"px",t.height>o.maxHeight&&(l.minHeight=l.maxHeight)),o.maxWidth!==void 0&&(l.maxWidth=o.maxWidth+"px",t.width>o.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==i&&(e.el.scrollTop=i),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function de(e,n,i,t,l){const s=i.bottom,o=i.right,f=gt(),r=window.innerHeight-f,u=document.body.clientWidth;if(e.top<0||e.top+s>r)if(l.vertical==="center")e.top=n[t.vertical]>r/2?Math.max(0,r-s):0,e.maxHeight=Math.min(s,r);else if(n[t.vertical]>r/2){const d=Math.min(r,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(s,d),e.top=Math.max(0,d-s)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(s,r-e.top);if(e.left<0||e.left+o>u)if(e.maxWidth=Math.min(o,u),l.horizontal==="middle")e.left=n[t.horizontal]>u/2?Math.max(0,u-o):0;else if(n[t.horizontal]>u/2){const d=Math.min(u,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(o,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(o,u-e.left)}var Kt=te({name:"QMenu",inheritAttrs:!1,props:{...Ct,...Oe,...xe,...Fe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Te},self:{type:String,validator:Te},offset:{type:Array,validator:$t},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...De,"click","escapeKey"],setup(e,{slots:n,emit:i,attrs:t}){let l=null,s,o,f;const r=D(),{proxy:u}=r,{$q:d}=u,g=k(null),x=k(!1),a=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),y=ye(e,d),{registerTick:p,removeTick:h}=Ae(),{registerTimeout:C}=pe(),{transitionProps:j,transitionStyle:K}=Qe(e),{localScrollTarget:R,changeScrollEvent:ne,unconfigureScrollTarget:ie}=Bt(e,z),{anchorEl:w,canShow:le}=Et({showing:x}),{hide:I}=Re({showing:x,canShow:le,handleShow:F,handleHide:ue,hideOnRouteChange:a,processOnMount:!0}),{showPortal:V,hidePortal:B,renderPortal:oe}=Ke(r,g,Y,"menu"),W={anchorEl:w,innerRef:g,onClickOutside(c){if(e.persistent!==!0&&x.value===!0)return I(c),(c.type==="touchstart"||c.target.classList.contains("q-dialog__backdrop"))&&_e(c),!0}},N=v(()=>$e(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),ae=v(()=>e.cover===!0?N.value:$e(e.self||"top start",d.lang.rtl)),T=v(()=>(e.square===!0?" q-menu--square":"")+(y.value===!0?" q-menu--dark q-dark":"")),A=v(()=>e.autoClose===!0?{onClick:se}:{}),H=v(()=>x.value===!0&&e.persistent!==!0);E(H,c=>{c===!0?(Ve(b),Tt(W)):(J(b),Ce(W))});function M(){We(()=>{let c=g.value;c&&c.contains(document.activeElement)!==!0&&(c=c.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.querySelector("[autofocus], [data-autofocus]")||c,c.focus({preventScroll:!0}))})}function F(c){if(l=e.noRefocus===!1?document.activeElement:null,Ge(m),V(),z(),s=void 0,c!==void 0&&(e.touchPosition||e.contextMenu)){const re=dt(c);if(re.left!==void 0){const{top:Ye,left:Ue}=w.value.getBoundingClientRect();s={left:re.left-Ue,top:re.top-Ye}}}o===void 0&&(o=E(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,S)),e.noFocus!==!0&&document.activeElement.blur(),p(()=>{S(),e.noFocus!==!0&&M()}),C(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),S(),V(!0),i("show",c)},e.transitionDuration)}function ue(c){h(),B(),G(!0),l!==null&&(c===void 0||c.qClickOutside!==!0)&&(((c&&c.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),C(()=>{B(!0),i("hide",c)},e.transitionDuration)}function G(c){s=void 0,o!==void 0&&(o(),o=void 0),(c===!0||x.value===!0)&&(ve(m),ie(),Ce(W),J(b)),c!==!0&&(l=null)}function z(){(w.value!==null||e.scrollTarget!==void 0)&&(R.value=bt(w.value,e.scrollTarget),ne(R.value,S))}function se(c){f!==!0?(je(u,c),i("click",c)):f=!1}function m(c){H.value===!0&&e.noFocus!==!0&&Le(g.value,c.target)!==!0&&M()}function b(c){i("escapeKey"),I(c)}function S(){const c=g.value;c===null||w.value===null||Mt({el:c,offset:e.offset,anchorEl:w.value,anchorOrigin:N.value,selfOrigin:ae.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Y(){return q(me,j.value,()=>x.value===!0?q("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+T.value,t.class],style:[t.style,K.value],...A.value},ze(n.default)):null)}return Q(G),Object.assign(u,{focus:M,updatePosition:S}),oe}});let zt=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const n=document.createElement("div");Object.assign(n.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(n),e.scrollLeft=-1e3,zt=e.scrollLeft>=0,e.remove()}const Lt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},fe={xs:2,sm:4,md:8,lg:16,xl:24};var It=te({name:"QSeparator",props:{...xe,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=D(),i=ye(e,n.proxy.$q),t=v(()=>e.vertical===!0?"vertical":"horizontal"),l=v(()=>` q-separator--${t.value}`),s=v(()=>e.inset!==!1?`${l.value}-${Lt[e.inset]}`:""),o=v(()=>`q-separator${l.value}${s.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),f=v(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const u=e.spaced===!0?`${fe.md}px`:e.spaced in fe?`${fe[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${d[0]}`]=r[`margin${d[1]}`]=u}return r});return()=>q("hr",{class:o.value,style:f.value,"aria-orientation":t.value})}});export{At as Q,It as a,Ct as b,Et as c,jt as d,Kt as e,Qt as f,Ft as g,zt as r,Ae as u};
