import{u as U,a as Y}from"./use-dark.c7db0d05.js";import{c as R,ar as J,as as Z,a as m,h as $,P as O,j as A,r as T,V as ee,a9 as B,n as V,a7 as D,w as H,o as te,b as Q,ac as le,L,at as E,O as ne,ag as ae,au as ie,av as oe,aw as re,a2 as se,a3 as ue,$ as ce}from"./index.0e31a611.js";import{d as de}from"./selection.ee0541a4.js";import{r as F,h as fe}from"./use-form.f53429b1.js";import{c as he}from"./scroll.832f3279.js";const me={xs:2,sm:4,md:6,lg:10,xl:14};function j(e,t,l){return{transform:t===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Pe=R({name:"QLinearProgress",props:{...U,...J,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:t}){const{proxy:l}=A(),n=Y(e,l.$q),a=Z(e,me),r=m(()=>e.indeterminate===!0||e.query===!0),i=m(()=>e.reverse!==e.query),c=m(()=>({...a.value!==null?a.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=m(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),u=m(()=>j(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),f=m(()=>`with${e.instantFeedback===!0?"out":""}-transition`),g=m(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${f.value} q-linear-progress__track--${n.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),b=m(()=>j(r.value===!0?1:e.value,i.value,l.$q)),o=m(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${f.value} q-linear-progress__model--${r.value===!0?"in":""}determinate`),s=m(()=>({width:`${e.value*100}%`})),C=m(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${f.value}`);return()=>{const w=[$("div",{class:g.value,style:u.value}),$("div",{class:o.value,style:b.value})];return e.stripe===!0&&r.value===!1&&w.push($("div",{class:C.value,style:s.value})),$("div",{class:d.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},O(t.default,w))}}});const He={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ee({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:a,emit:r}=A(),i=T(null);let c=null;function d(o){return i.value===null?!1:o===void 0||o.touches===void 0||o.touches.length<=1}const u={};l===void 0&&(Object.assign(u,{hide(o){a.hide(o)},toggle(o){a.toggle(o),o.qAnchorHandled=!0},toggleKey(o){ee(o,13)===!0&&u.toggle(o)},contextClick(o){a.hide(o),B(o),V(()=>{a.show(o),o.qAnchorHandled=!0})},prevent:B,mobileTouch(o){if(u.mobileCleanup(o),d(o)!==!0)return;a.hide(o),i.value.classList.add("non-selectable");const s=o.target;D(u,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,a.show(o),o.qAnchorHandled=!0},300)},mobileCleanup(o){i.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),e.value===!0&&o!==void 0&&de()}}),l=function(o=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let s;o===!0?a.$q.platform.is.mobile===!0?s=[[i.value,"touchstart","mobileTouch","passive"]]:s=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:s=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],D(u,"anchor",s)});function f(){le(u,"anchor")}function g(o){for(i.value=o;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function b(){if(n.target===!1||n.target===""||a.$el.parentNode===null)i.value=null;else if(n.target===!0)g(a.$el.parentNode);else{let o=n.target;if(typeof n.target=="string")try{o=document.querySelector(n.target)}catch{o=void 0}o!=null?(i.value=o.$el||o,l()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return H(()=>n.contextMenu,o=>{i.value!==null&&(f(),l(o))}),H(()=>n.target,()=>{i.value!==null&&f(),b()}),H(()=>n.noParentEvent,o=>{i.value!==null&&(o===!0?f():l())}),te(()=>{b(),t!==!0&&n.modelValue===!0&&i.value===null&&r("update:modelValue",!1)}),Q(()=>{c!==null&&clearTimeout(c),f()}),{anchorEl:i,canShow:d,anchorEvents:u}}function Te(e,t){const l=T(null);let n;function a(c,d){const u=`${d!==void 0?"add":"remove"}EventListener`,f=d!==void 0?d:n;c!==window&&c[u]("scroll",f,L.passive),window[u]("scroll",f,L.passive),n=d}function r(){l.value!==null&&(a(l.value),l.value=null)}const i=H(()=>e.noParentEvent,()=>{l.value!==null&&(r(),t())});return Q(i),{localScrollTarget:l,unconfigureScrollTarget:r,changeScrollEvent:a}}const y=[];function We(e){return y.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ve(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return E(e)}else if(e.__qPortal===!0){const l=E(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=E(e)}while(e!=null)}function Me(e,t,l){for(;l!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(l--,e.$options.name==="QMenu"){e=ve(e,t);continue}e.hide(t)}e=E(e)}}const ge=R({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function be(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function _e(e,t,l,n){const a=T(!1),r=T(!1);let i=null;const c={},d=n==="dialog"&&be(e);function u(g){if(g===!0){F(c),r.value=!0;return}r.value=!1,a.value===!1&&(d===!1&&i===null&&(i=oe(!1,n)),a.value=!0,y.push(e.proxy),fe(c))}function f(g){if(r.value=!1,g!==!0)return;F(c),a.value=!1;const b=y.indexOf(e.proxy);b!==-1&&y.splice(b,1),i!==null&&(re(i),i=null)}return ne(()=>{f(!0)}),e.proxy.__qPortal=!0,ae(e.proxy,"contentEl",()=>t.value),{showPortal:u,hidePortal:f,portalIsActive:a,portalIsAccessible:r,renderPortal:()=>d===!0?l():a.value===!0?[$(ie,{to:i},$(ge,l))]:void 0}}const Le={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ze(e,t=()=>{},l=()=>{}){return{transitionProps:m(()=>{const n=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:m(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ae(){let e;const t=A();function l(){e=void 0}return se(l),Q(l),{removeTick:l,registerTick(n){e=n,V(()=>{e===n&&(ue(t)===!1&&e(),e=void 0)})}}}const{notPassiveCapture:W}=L,x=[];function M(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=y.length-1;for(;l>=0;){const n=y[l].$;if(n.type.name==="QTooltip"){l--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=x.length-1;n>=0;n--){const a=x[n];if((a.anchorEl.value===null||a.anchorEl.value.contains(t)===!1)&&(t===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(t)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function Qe(e){x.push(e),x.length===1&&(document.addEventListener("mousedown",M,W),document.addEventListener("touchstart",M,W))}function Be(e){const t=x.findIndex(l=>l===e);t!==-1&&(x.splice(t,1),x.length===0&&(document.removeEventListener("mousedown",M,W),document.removeEventListener("touchstart",M,W)))}let N,I;function De(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Fe(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{z[`${e}#ltr`]=e,z[`${e}#rtl`]=e});function je(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:z[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function pe(e,t){let{top:l,left:n,right:a,bottom:r,width:i,height:c}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],r+=t[1],a+=t[0],i+=t[0],c+=t[1]),{top:l,bottom:r,height:c,left:n,right:a,width:i,middle:n+(a-n)/2,center:l+(r-l)/2}}function xe(e,t,l){let{top:n,left:a}=e.getBoundingClientRect();return n+=t.top,a+=t.left,l!==void 0&&(n+=l[1],a+=l[0]),{top:n,bottom:n+1,height:1,left:a,right:a+1,width:1,middle:a,center:n}}function we(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function G(e,t,l,n){return{top:e[l.vertical]-t[n.vertical],left:e[l.horizontal]-t[n.horizontal]}}function $e(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{$e(e,t+1)},10);return}const{targetEl:l,offset:n,anchorEl:a,anchorOrigin:r,selfOrigin:i,absoluteOffset:c,fit:d,cover:u,maxHeight:f,maxWidth:g}=e;if(ce.is.ios===!0&&window.visualViewport!==void 0){const P=document.body.style,{offsetLeft:k,offsetTop:p}=window.visualViewport;k!==N&&(P.setProperty("--q-pe-left",k+"px"),N=k),p!==I&&(P.setProperty("--q-pe-top",p+"px"),I=p)}const{scrollLeft:b,scrollTop:o}=l,s=c===void 0?pe(a,u===!0?[0,0]:n):xe(a,c,n);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:C,offsetHeight:w}=l,{elWidth:K,elHeight:X}=d===!0||u===!0?{elWidth:Math.max(s.width,C),elHeight:u===!0?Math.max(s.height,w):w}:{elWidth:C,elHeight:w};let v={maxWidth:g,maxHeight:f};(d===!0||u===!0)&&(v.minWidth=s.width+"px",u===!0&&(v.minHeight=s.height+"px")),Object.assign(l.style,v);const q=we(K,X);let h=G(s,q,r,i);if(c===void 0||n===void 0)_(h,s,q,r,i);else{const{top:P,left:k}=h;_(h,s,q,r,i);let p=!1;if(h.top!==P){p=!0;const S=2*n[1];s.center=s.top-=S,s.bottom-=S+2}if(h.left!==k){p=!0;const S=2*n[0];s.middle=s.left-=S,s.right-=S+2}p===!0&&(h=G(s,q,r,i),_(h,s,q,r,i))}v={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(v.maxHeight=h.maxHeight+"px",s.height>h.maxHeight&&(v.minHeight=v.maxHeight)),h.maxWidth!==void 0&&(v.maxWidth=h.maxWidth+"px",s.width>h.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(l.style,v),l.scrollTop!==o&&(l.scrollTop=o),l.scrollLeft!==b&&(l.scrollLeft=b)}function _(e,t,l,n,a){const r=l.bottom,i=l.right,c=he(),d=window.innerHeight-c,u=document.body.clientWidth;if(e.top<0||e.top+r>d)if(a.vertical==="center")e.top=t[n.vertical]>d/2?Math.max(0,d-r):0,e.maxHeight=Math.min(r,d);else if(t[n.vertical]>d/2){const f=Math.min(d,n.vertical==="center"?t.center:n.vertical===a.vertical?t.bottom:t.top);e.maxHeight=Math.min(r,f),e.top=Math.max(0,f-r)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===a.vertical?t.top:t.bottom),e.maxHeight=Math.min(r,d-e.top);if(e.left<0||e.left+i>u)if(e.maxWidth=Math.min(i,u),a.horizontal==="middle")e.left=t[n.horizontal]>u/2?Math.max(0,u-i):0;else if(t[n.horizontal]>u/2){const f=Math.min(u,n.horizontal==="middle"?t.middle:n.horizontal===a.horizontal?t.right:t.left);e.maxWidth=Math.min(i,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===a.horizontal?t.left:t.right),e.maxWidth=Math.min(i,u-e.left)}export{Pe as Q,Le as a,Fe as b,Ae as c,ze as d,Te as e,Ee as f,_e as g,Qe as h,ve as i,We as j,Me as k,je as p,Be as r,$e as s,He as u,De as v};
