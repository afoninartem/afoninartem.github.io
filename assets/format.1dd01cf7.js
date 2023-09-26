import{h as _,j as d,t as k,v as H,a4 as N,a5 as O,r as A,a6 as G,g as D,S as J,z as x,m as F,a7 as I,w as $,a8 as Z,o as ee,k as R,a as w,Y as m,a9 as te,aa as le,ab as oe,ac as ie}from"./index.f7769ffa.js";import{u as Y,a as X}from"./use-dark.99a45325.js";import{b as ne,a as ae,h as re}from"./scroll.ae4a1e70.js";var me=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=d(()=>parseInt(e.lines,10)),l=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),i=d(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>k("div",{style:i.value,class:l.value},H(t.default))}}),be=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:o.value},H(t.default))}}),pe=_({name:"QItem",props:{...Y,...N,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=x(),i=X(e,l),{hasLink:f,linkAttrs:r,linkClass:s,linkTag:c,navigateOnClick:T}=O(),u=A(null),p=A(null),h=d(()=>e.clickable===!0||f.value===!0||e.tag==="label"),v=d(()=>e.disable!==!0&&h.value===!0),g=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=d(()=>{if(e.insetLevel===void 0)return null;const a=l.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function S(a){v.value===!0&&(p.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===u.value?p.value.focus():document.activeElement===p.value&&u.value.focus()),T(a))}function B(a){if(v.value===!0&&G(a,13)===!0){D(a),a.qKeyEvent=!0;const M=new MouseEvent("click",a);M.qKeyEvent=!0,u.value.dispatchEvent(M)}o("keyup",a)}function n(){const a=J(t.default,[]);return v.value===!0&&a.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:p})),a}return()=>{const a={ref:u,class:g.value,style:L.value,role:"listitem",onClick:S,onKeyup:B};return v.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,r.value)):h.value===!0&&(a["aria-disabled"]="true"),k(c.value,a,n())}}}),we=_({name:"QList",props:{...Y,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=x(),l=X(e,o.proxy.$q),i=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:i.value},H(t.default))}});function he(e,t,o){let l;function i(){l!==void 0&&(I.remove(l),l=void 0)}return F(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>o.value===!0,handler:t},I.add(l)}}}const ge={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ye=["beforeShow","show","beforeHide","hide"];function qe({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:i,processOnMount:f}){const r=x(),{props:s,emit:c,proxy:T}=r;let u;function p(n){e.value===!0?g(n):h(n)}function h(n){if(s.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const a=s["onUpdate:modelValue"]!==void 0;a===!0&&(c("update:modelValue",!0),u=n,R(()=>{u===n&&(u=void 0)})),(s.modelValue===null||a===!1)&&v(n)}function v(n){e.value!==!0&&(e.value=!0,c("beforeShow",n),l!==void 0?l(n):c("show",n))}function g(n){if(s.disable===!0)return;const a=s["onUpdate:modelValue"]!==void 0;a===!0&&(c("update:modelValue",!1),u=n,R(()=>{u===n&&(u=void 0)})),(s.modelValue===null||a===!1)&&L(n)}function L(n){e.value!==!1&&(e.value=!1,c("beforeHide",n),i!==void 0?i(n):c("hide",n))}function S(n){s.disable===!0&&n===!0?s["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):n===!0!==e.value&&(n===!0?v:L)(u)}$(()=>s.modelValue,S),o!==void 0&&Z(r)===!0&&$(()=>T.$route.fullPath,()=>{o.value===!0&&e.value===!0&&g()}),f===!0&&ee(()=>{S(s.modelValue)});const B={show:h,hide:g,toggle:p};return Object.assign(T,B),B}let y=0,V,P,q,C=!1,Q,z,j,b=null;function se(e){ue(e)&&D(e)}function ue(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=te(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=o||l?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const r=t[f];if(re(r,l))return l?i<0&&r.scrollTop===0?!0:i>0&&r.scrollTop+r.clientHeight===r.scrollHeight:i<0&&r.scrollLeft===0?!0:i>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function K(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function E(e){C!==!0&&(C=!0,requestAnimationFrame(()=>{C=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=l),l>q&&(document.scrollingElement.scrollTop-=Math.ceil((l-q)/8))}))}function U(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(t);V=ne(window),P=ae(window),Q=t.style.left,z=t.style.top,j=window.location.href,t.style.left=`-${V}px`,t.style.top=`-${P}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,w.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",E,m.passiveCapture),window.visualViewport.addEventListener("scroll",E,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",K,m.passiveCapture))}w.is.desktop===!0&&w.is.mac===!0&&window[`${e}EventListener`]("wheel",se,m.notPassive),e==="remove"&&(w.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",E,m.passiveCapture),window.visualViewport.removeEventListener("scroll",E,m.passiveCapture)):window.removeEventListener("scroll",K,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Q,t.style.top=z,window.location.href===j&&window.scrollTo(V,P),q=void 0)}function ce(e){let t="add";if(e===!0){if(y++,b!==null){clearTimeout(b),b=null;return}if(y>1)return}else{if(y===0||(y--,y>0))return;if(t="remove",w.is.ios===!0&&w.is.nativeMobile===!0){b!==null&&clearTimeout(b),b=setTimeout(()=>{U(t),b=null},100);return}}U(t)}function ke(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ce(t))}}}function Te(){let e=null;const t=x();function o(){e!==null&&(clearTimeout(e),e=null)}return le(o),F(o),{removeTimeout:o,registerTimeout(l,i){o(),oe(t)===!1&&(e=setTimeout(l,i))}}}function Le(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ie.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const W=["B","KB","MB","GB","TB","PB"];function Se(e){let t=0;for(;parseInt(e,10)>=1024&&t<W.length-1;)e/=1024,++t;return`${e.toFixed(1)}${W[t]}`}function Be(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function Ee(e,t,o){if(o<=t)return t;const l=o-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}function _e(e,t=2,o="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(o)+l}export{me as Q,ye as a,Te as b,Le as c,qe as d,he as e,Be as f,ke as g,pe as h,be as i,we as j,Se as k,Ee as n,_e as p,ge as u};
