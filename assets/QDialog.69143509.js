import{u as pe,a as Be}from"./use-dark.509a2654.js";import{h as ve,j as v,t as k,z as F,r as S,a6 as Pe,d as xe,k as $e,b as be,w as q,o as Ye,m as _,f as Ue,Y as de,aC as U,a0 as Xe,ag as Je,aD as Ze,aE as et,aF as tt,aa as nt,ab as it,a as ge,e as ot,v as He,an as fe,aG as Me,g as lt}from"./index.752facc4.js";import{c as at,u as Le,a as Oe,b as ze,d as De,e as st,f as ut}from"./selection.da2640a6.js";import{c as rt,g as ct}from"./scroll.e741c4ec.js";import{r as ye,i as dt,g as We}from"./use-form.59fbe1c5.js";const ft={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},re={xs:2,sm:4,md:8,lg:16,xl:24};var Lt=ve({name:"QSeparator",props:{...pe,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=F(),l=Be(e,t.proxy.$q),n=v(()=>e.vertical===!0?"vertical":"horizontal"),i=v(()=>` q-separator--${n.value}`),r=v(()=>e.inset!==!1?`${i.value}-${ft[e.inset]}`:""),o=v(()=>`q-separator${i.value}${r.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),f=v(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const s=e.spaced===!0?`${re.md}px`:e.spaced in re?`${re[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${d[0]}`]=c[`margin${d[1]}`]=s}return c});return()=>k("hr",{class:o.value,style:f.value,"aria-orientation":n.value})}});let mt=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,mt=e.scrollLeft>=0,e.remove()}const ht={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function vt({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:i,emit:r}=F(),o=S(null);let f=null;function c(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};l===void 0&&(Object.assign(s,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Pe(a,13)===!0&&s.toggle(a)},contextClick(a){i.hide(a),xe(a),$e(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:xe,mobileTouch(a){if(s.mobileCleanup(a),c(a)!==!0)return;i.hide(a),o.value.classList.add("non-selectable");const b=a.target;be(s,"anchor",[[b,"touchmove","mobileCleanup","passive"],[b,"touchend","mobileCleanup","passive"],[b,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&at()}}),l=function(a=n.contextMenu){if(n.noParentEvent===!0||o.value===null)return;let b;a===!0?i.$q.platform.is.mobile===!0?b=[[o.value,"touchstart","mobileTouch","passive"]]:b=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:b=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],be(s,"anchor",b)});function d(){Ue(s,"anchor")}function g(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;l()}function x(){if(n.target===!1||n.target===""||i.$el.parentNode===null)o.value=null;else if(n.target===!0)g(i.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,l()):(o.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return q(()=>n.contextMenu,a=>{o.value!==null&&(d(),l(a))}),q(()=>n.target,()=>{o.value!==null&&d(),x()}),q(()=>n.noParentEvent,a=>{o.value!==null&&(a===!0?d():l())}),Ye(()=>{x(),t!==!0&&n.modelValue===!0&&o.value===null&&r("update:modelValue",!1)}),_(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:o,canShow:c,anchorEvents:s}}function gt(e,t){const l=S(null);let n;function i(f,c){const s=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:n;f!==window&&f[s]("scroll",d,de.passive),window[s]("scroll",d,de.passive),n=c}function r(){l.value!==null&&(i(l.value),l.value=null)}const o=q(()=>e.noParentEvent,()=>{l.value!==null&&(r(),t())});return _(o),{localScrollTarget:l,unconfigureScrollTarget:r,changeScrollEvent:i}}const M=[];function Ot(e){return M.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Fe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return U(e)}else if(e.__qPortal===!0){const l=U(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=U(e)}while(e!=null)}function zt(e,t,l){for(;l!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(l--,e.$options.name==="QMenu"){e=Fe(e,t);continue}e.hide(t)}e=U(e)}}function xt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function _e(e,t,l,n){const i=S(!1),r=S(!1);let o=null;const f={},c=n==="dialog"&&xt(e);function s(g){if(g===!0){ye(f),r.value=!0;return}r.value=!1,i.value===!1&&(c===!1&&o===null&&(o=et(!1,n)),i.value=!0,M.push(e.proxy),dt(f))}function d(g){if(r.value=!1,g!==!0)return;ye(f),i.value=!1;const x=M.indexOf(e.proxy);x!==-1&&M.splice(x,1),o!==null&&(tt(o),o=null)}return Xe(()=>{d(!0)}),e.proxy.__qPortal=!0,Je(e.proxy,"contentEl",()=>t.value),{showPortal:s,hidePortal:d,portalIsActive:i,portalIsAccessible:r,renderPortal:()=>c===!0?l():i.value===!0?[k(Ze,{to:o},l())]:void 0}}const Ae={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Re(e,t=()=>{},l=()=>{}){return{transitionProps:v(()=>{const n=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:v(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Qe(){let e;const t=F();function l(){e=void 0}return nt(l),_(l),{removeTick:l,registerTick(n){e=n,$e(()=>{e===n&&(it(t)===!1&&e(),e=void 0)})}}}const T=[];let L;function bt(e){L=e.keyCode===27}function yt(){L===!0&&(L=!1)}function wt(e){L===!0&&(L=!1,Pe(e,27)===!0&&T[T.length-1](e))}function Ke(e){window[e]("keydown",bt),window[e]("blur",yt),window[e]("keyup",wt),L=!1}function je(e){ge.is.desktop===!0&&(T.push(e),T.length===1&&Ke("addEventListener"))}function X(e){const t=T.indexOf(e);t>-1&&(T.splice(t,1),T.length===0&&Ke("removeEventListener"))}const p=[];function Ie(e){p[p.length-1](e)}function Ve(e){ge.is.desktop===!0&&(p.push(e),p.length===1&&document.body.addEventListener("focusin",Ie))}function me(e){const t=p.indexOf(e);t>-1&&(p.splice(t,1),p.length===0&&document.body.removeEventListener("focusin",Ie))}const{notPassiveCapture:J}=de,B=[];function Z(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=M.length-1;for(;l>=0;){const n=M[l].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=B.length-1;n>=0;n--){const i=B[n];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function kt(e){B.push(e),B.length===1&&(document.addEventListener("mousedown",Z,J),document.addEventListener("touchstart",Z,J))}function we(e){const t=B.findIndex(l=>l===e);t>-1&&(B.splice(t,1),B.length===0&&(document.removeEventListener("mousedown",Z,J),document.removeEventListener("touchstart",Z,J)))}let ke,Se;function qe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function St(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const he={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{he[`${e}#ltr`]=e,he[`${e}#rtl`]=e});function Ce(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:he[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function qt(e,t){let{top:l,left:n,right:i,bottom:r,width:o,height:f}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],r+=t[1],i+=t[0],o+=t[0],f+=t[1]),{top:l,bottom:r,height:f,left:n,right:i,width:o,middle:n+(i-n)/2,center:l+(r-l)/2}}function Ct(e,t,l){let{top:n,left:i}=e.getBoundingClientRect();return n+=t.top,i+=t.left,l!==void 0&&(n+=l[1],i+=l[0]),{top:n,bottom:n+1,height:1,left:i,right:i+1,width:1,middle:i,center:n}}function Et(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Ee(e,t,l){return{top:e[l.anchorOrigin.vertical]-t[l.selfOrigin.vertical],left:e[l.anchorOrigin.horizontal]-t[l.selfOrigin.horizontal]}}function Tt(e){if(ge.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:c,offsetTop:s}=window.visualViewport;c!==ke&&(f.setProperty("--q-pe-left",c+"px"),ke=c),s!==Se&&(f.setProperty("--q-pe-top",s+"px"),Se=s)}const{scrollLeft:t,scrollTop:l}=e.el,n=e.absoluteOffset===void 0?qt(e.anchorEl,e.cover===!0?[0,0]:e.offset):Ct(e.anchorEl,e.absoluteOffset,e.offset);let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=n.width+"px",e.cover===!0&&(i.minHeight=n.height+"px")),Object.assign(e.el.style,i);const r=Et(e.el);let o=Ee(n,r,e);if(e.absoluteOffset===void 0||e.offset===void 0)ce(o,n,r,e.anchorOrigin,e.selfOrigin);else{const{top:f,left:c}=o;ce(o,n,r,e.anchorOrigin,e.selfOrigin);let s=!1;if(o.top!==f){s=!0;const d=2*e.offset[1];n.center=n.top-=d,n.bottom-=d+2}if(o.left!==c){s=!0;const d=2*e.offset[0];n.middle=n.left-=d,n.right-=d+2}s===!0&&(o=Ee(n,r,e),ce(o,n,r,e.anchorOrigin,e.selfOrigin))}i={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(i.maxHeight=o.maxHeight+"px",n.height>o.maxHeight&&(i.minHeight=i.maxHeight)),o.maxWidth!==void 0&&(i.maxWidth=o.maxWidth+"px",n.width>o.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==t&&(e.el.scrollLeft=t)}function ce(e,t,l,n,i){const r=l.bottom,o=l.right,f=rt(),c=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+r>c)if(i.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-r):0,e.maxHeight=Math.min(r,c);else if(t[n.vertical]>c/2){const d=Math.min(c,n.vertical==="center"?t.center:n.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(r,d),e.top=Math.max(0,d-r)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(r,c-e.top);if(e.left<0||e.left+o>s)if(e.maxWidth=Math.min(o,s),i.horizontal==="middle")e.left=t[n.horizontal]>s/2?Math.max(0,s-o):0;else if(t[n.horizontal]>s/2){const d=Math.min(s,n.horizontal==="middle"?t.middle:n.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(o,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(o,s-e.left)}var Dt=ve({name:"QMenu",inheritAttrs:!1,props:{...ht,...Le,...pe,...Ae,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:qe},self:{type:String,validator:qe},offset:{type:Array,validator:St},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Oe,"click","escapeKey"],setup(e,{slots:t,emit:l,attrs:n}){let i=null,r,o,f;const c=F(),{proxy:s}=c,{$q:d}=s,g=S(null),x=S(!1),a=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),b=Be(e,d),{registerTick:ee,removeTick:A}=Qe(),{registerTimeout:R}=ze(),{transitionProps:Q,transitionStyle:K}=Re(e),{localScrollTarget:O,changeScrollEvent:te,unconfigureScrollTarget:ne}=gt(e,H),{anchorEl:y,canShow:ie}=vt({showing:x}),{hide:j}=De({showing:x,canShow:ie,handleShow:W,handleHide:ae,hideOnRouteChange:a,processOnMount:!0}),{showPortal:I,hidePortal:C,renderPortal:oe}=_e(c,g,N,"menu"),z={anchorEl:y,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return j(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&lt(u),!0}},V=v(()=>Ce(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),le=v(()=>e.cover===!0?V.value:Ce(e.self||"top start",d.lang.rtl)),E=v(()=>(e.square===!0?" q-menu--square":"")+(b.value===!0?" q-menu--dark q-dark":"")),D=v(()=>e.autoClose===!0?{onClick:se}:{}),P=v(()=>x.value===!0&&e.persistent!==!0);q(P,u=>{u===!0?(je(h),kt(z)):(X(h),we(z))});function $(){We(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function W(u){if(i=e.noRefocus===!1?document.activeElement:null,Ve(m),I(),H(),r=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const ue=ot(u);if(ue.left!==void 0){const{top:Ge,left:Ne}=y.value.getBoundingClientRect();r={left:ue.left-Ne,top:ue.top-Ge}}}o===void 0&&(o=q(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,w)),e.noFocus!==!0&&document.activeElement.blur(),ee(()=>{w(),e.noFocus!==!0&&$()}),R(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),w(),I(!0),l("show",u)},e.transitionDuration)}function ae(u){A(),C(),G(!0),i!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),R(()=>{C(!0),l("hide",u)},e.transitionDuration)}function G(u){r=void 0,o!==void 0&&(o(),o=void 0),(u===!0||x.value===!0)&&(me(m),ne(),we(z),X(h)),u!==!0&&(i=null)}function H(){(y.value!==null||e.scrollTarget!==void 0)&&(O.value=ct(y.value,e.scrollTarget),te(O.value,w))}function se(u){f!==!0?(Fe(s,u),l("click",u)):f=!1}function m(u){P.value===!0&&e.noFocus!==!0&&Me(g.value,u.target)!==!0&&$()}function h(u){l("escapeKey"),j(u)}function w(){const u=g.value;u===null||y.value===null||Tt({el:u,offset:e.offset,anchorEl:y.value,anchorOrigin:V.value,selfOrigin:le.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function N(){return k(fe,Q.value,()=>x.value===!0?k("div",{role:"menu",...n,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+E.value,n.class],style:[n.style,K.value],...D.value},He(t.default)):null)}return _(G),Object.assign(s,{focus:$,updatePosition:w}),oe}});let Y=0;const pt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Te={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Wt=ve({name:"QDialog",inheritAttrs:!1,props:{...Le,...Ae,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Oe,"shake","click","escapeKey"],setup(e,{slots:t,emit:l,attrs:n}){const i=F(),r=S(null),o=S(!1),f=S(!1);let c=null,s=null,d,g;const x=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:a}=ut(),{registerTimeout:b}=ze(),{registerTick:ee,removeTick:A}=Qe(),{transitionProps:R,transitionStyle:Q}=Re(e,()=>Te[e.position][0],()=>Te[e.position][1]),{showPortal:K,hidePortal:O,portalIsAccessible:te,renderPortal:ne}=_e(i,r,se,"dialog"),{hide:y}=De({showing:o,hideOnRouteChange:x,handleShow:V,handleHide:le,processOnMount:!0}),{addToHistory:ie,removeFromHistory:j}=st(o,y,x),I=v(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${pt[e.position]}`+(f.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),C=v(()=>o.value===!0&&e.seamless!==!0),oe=v(()=>e.autoClose===!0?{onClick:ae}:{}),z=v(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${C.value===!0?"modal":"seamless"}`,n.class]);q(()=>e.maximized,m=>{o.value===!0&&W(m)}),q(C,m=>{a(m),m===!0?(Ve(H),je(P)):(me(H),X(P))});function V(m){ie(),s=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,W(e.maximized),K(),f.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),ee(E)):A(),b(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:h,bottom:w}=document.activeElement.getBoundingClientRect(),{innerHeight:N}=window,u=window.visualViewport!==void 0?window.visualViewport.height:N;h>0&&w>u/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-u,w>=N?1/0:Math.ceil(document.scrollingElement.scrollTop+w-u/2))),document.activeElement.scrollIntoView()}g=!0,r.value.click(),g=!1}K(!0),f.value=!1,l("show",m)},e.transitionDuration)}function le(m){A(),j(),$(!0),f.value=!0,O(),s!==null&&(((m&&m.type.indexOf("key")===0?s.closest('[tabindex]:not([tabindex^="-"])'):void 0)||s).focus(),s=null),b(()=>{O(!0),f.value=!1,l("hide",m)},e.transitionDuration)}function E(m){We(()=>{let h=r.value;h===null||h.contains(document.activeElement)===!0||(h=(m!==""?h.querySelector(m):null)||h.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||h.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||h.querySelector("[autofocus], [data-autofocus]")||h,h.focus({preventScroll:!0}))})}function D(m){m&&typeof m.focus=="function"?m.focus({preventScroll:!0}):E(),l("shake");const h=r.value;h!==null&&(h.classList.remove("q-animate--scale"),h.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,r.value!==null&&(h.classList.remove("q-animate--scale"),E())},170))}function P(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&D():(l("escapeKey"),y()))}function $(m){c!==null&&(clearTimeout(c),c=null),(m===!0||o.value===!0)&&(W(!1),e.seamless!==!0&&(a(!1),me(H),X(P))),m!==!0&&(s=null)}function W(m){m===!0?d!==!0&&(Y<1&&document.body.classList.add("q-body--dialog"),Y++,d=!0):d===!0&&(Y<2&&document.body.classList.remove("q-body--dialog"),Y--,d=!1)}function ae(m){g!==!0&&(y(m),l("click",m))}function G(m){e.persistent!==!0&&e.noBackdropDismiss!==!0?y(m):e.noShake!==!0&&D()}function H(m){e.allowFocusOutside!==!0&&te.value===!0&&Me(r.value,m.target)!==!0&&E('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:E,shake:D,__updateRefocusTarget(m){s=m||null}}),_($);function se(){return k("div",{role:"dialog","aria-modal":C.value===!0?"true":"false",...n,class:z.value},[k(fe,{name:"q-transition--fade",appear:!0},()=>C.value===!0?k("div",{class:"q-dialog__backdrop fixed-full",style:Q.value,"aria-hidden":"true",tabindex:-1,onClick:G}):null),k(fe,R.value,()=>o.value===!0?k("div",{ref:r,class:I.value,style:Q.value,tabindex:-1,...oe.value},He(t.default)):null)])}return ne}});export{Dt as Q,Wt as a,Lt as b,ht as c,vt as d,zt as e,Ot as g,mt as r,Qe as u};
