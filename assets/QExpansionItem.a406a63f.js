import{c as H,b as j,h as i,ap as W,aU as X,V as P,r as A,a as m,w as q,j as Z,d as G,aV as p,g as ee,Q as E,Y as te}from"./index.b9a71e9d.js";import{a as ne,Q as O,b as k}from"./QItem.594eba31.js";import{Q as B}from"./QSeparator.15630a44.js";import{u as ae,a as ie}from"./use-dark.1714981a.js";import{l as oe,m as le}from"./private.use-form.ffc8d2ad.js";import{u as ue,a as re,c as se}from"./selection.1f4bea8e.js";var de=H({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:T,emit:w}){let s=!1,g,a,d=null,o=null,c,I;function b(){g==null||g(),g=null,s=!1,d!==null&&(clearTimeout(d),d=null),o!==null&&(clearTimeout(o),o=null),a==null||a.removeEventListener("transitionend",c),c=null}function l(n,r,f){r!==void 0&&(n.style.height=`${r}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,g=f}function u(n,r){n.style.overflowY=null,n.style.height=null,n.style.transition=null,b(),r!==I&&w(r)}function y(n,r){let f=0;a=n,s===!0?(b(),f=n.offsetHeight===n.scrollHeight?0:void 0):(I="hide",n.style.overflowY="hidden"),l(n,f,r),d=setTimeout(()=>{d=null,n.style.height=`${n.scrollHeight}px`,c=h=>{o=null,(Object(h)!==h||h.target===n)&&u(n,"show")},n.addEventListener("transitionend",c),o=setTimeout(c,e.duration*1.1)},100)}function L(n,r){let f;a=n,s===!0?b():(I="show",n.style.overflowY="hidden",f=n.scrollHeight),l(n,f,r),d=setTimeout(()=>{d=null,n.style.height=0,c=h=>{o=null,(Object(h)!==h||h.target===n)&&u(n,"hide")},n.addEventListener("transitionend",c),o=setTimeout(c,e.duration*1.1)},100)}return j(()=>{s===!0&&b()}),()=>i(W,{css:!1,appear:e.appear,onEnter:y,onLeave:L},T.default)}});const S=X({}),ce=Object.keys(P);var xe=H({name:"QExpansionItem",props:{...P,...ue,...ae,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...re,"click","afterShow","afterHide"],setup(e,{slots:T,emit:w}){const{proxy:{$q:s}}=Z(),g=ie(e,s),a=A(e.modelValue!==null?e.modelValue:e.defaultOpened),d=A(null),o=oe(),{show:c,hide:I,toggle:b}=se({showing:a});let l,u;const y=m(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),L=m(()=>{if(e.contentInsetLevel===void 0)return null;const t=s.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=m(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),r=m(()=>{const t={};return ce.forEach(v=>{t[v]=e[v]}),t}),f=m(()=>n.value===!0||e.expandIconToggle!==!0),h=m(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||s.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),$=m(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),N=m(()=>({expanded:a.value===!0,detailsId:o.value,toggle:b,show:c,hide:I})),_=m(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:s.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":o.value,"aria-label":t}});q(()=>e.group,t=>{u==null||u(),t!==void 0&&Q()});function R(t){n.value!==!0&&b(t),w("click",t)}function D(t){t.keyCode===13&&C(t,!0)}function C(t,v){var x;v!==!0&&t.qAvoidFocus!==!0&&((x=d.value)==null||x.focus()),b(t),te(t)}function V(){w("afterShow")}function Y(){w("afterHide")}function Q(){l===void 0&&(l=le()),a.value===!0&&(S[e.group]=l);const t=q(a,x=>{x===!0?S[e.group]=l:S[e.group]===l&&delete S[e.group]}),v=q(()=>S[e.group],(x,J)=>{J===l&&x!==void 0&&x!==l&&I()});u=()=>{t(),v(),S[e.group]===l&&delete S[e.group],u=void 0}}function K(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},v=[i(E,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:h.value})];return $.value===!0&&(Object.assign(t,{tabindex:0,..._.value,onClick:C,onKeyup:D}),v.unshift(i("div",{ref:d,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),i(k,t,()=>v)}function M(){let t;return T.header!==void 0?t=[].concat(T.header(N.value)):(t=[i(k,()=>[i(O,{lines:e.labelLines},()=>e.label||""),e.caption?i(O,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](i(k,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>i(E,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](K()),t}function U(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:g.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return f.value===!0&&(t.clickable=!0,t.onClick=R,Object.assign(t,n.value===!0?r.value:_.value)),i(ne,t,M)}function z(){return G(i("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:L.value,id:o.value},ee(T.default)),[[p,a.value]])}function F(){const t=[U(),i(de,{duration:e.duration,onShow:V,onHide:Y},z)];return e.expandSeparator===!0&&t.push(i(B,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:g.value}),i(B,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:g.value})),t}return e.group!==void 0&&Q(),j(()=>{u==null||u()}),()=>i("div",{class:y.value},[i("div",{class:"q-expansion-item__container relative-position"},F())])}});export{xe as Q};
