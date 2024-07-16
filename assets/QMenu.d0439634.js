import{c as ae,r as A,a as u,w as M,ab as ne,h as D,g as se,an as ue,b as le,j as ie,aI as re,W as ce}from"./index.886a69b4.js";import{u as de,a as fe,v as R,b as ve,c as ge,d as me,e as he,f as ye,g as be,r as H,s as xe,p as K,i as Pe,h as Ce}from"./position-engine.1d68ca0b.js";import{u as Te,a as ke,b as Se,c as Oe}from"./selection.f9e5bedd.js";import{u as qe,a as Ee}from"./use-dark.c94c877a.js";import{g as Be}from"./scroll.ab803963.js";import{a as we,r as Fe,b as j,c as Ae}from"./QDialog.e864a7ca.js";import{g as Me}from"./use-form.e147c5e5.js";let De=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}var Qe=ae({name:"QMenu",inheritAttrs:!1,props:{...de,...Te,...qe,...fe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:R},self:{type:String,validator:R},offset:{type:Array,validator:ve},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ke,"click","escapeKey"],setup(e,{slots:c,emit:d,attrs:v}){let n=null,f,l,g;const P=ie(),{proxy:m}=P,{$q:o}=m,a=A(null),s=A(!1),p=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),W=Ee(e,o),{registerTick:L,removeTick:Q}=ge(),{registerTimeout:C}=Se(),{transitionProps:I,transitionStyle:_}=me(e),{localScrollTarget:T,changeScrollEvent:U,unconfigureScrollTarget:$}=he(e,w),{anchorEl:i,canShow:z}=ye({showing:s}),{hide:k}=Oe({showing:s,canShow:z,handleShow:X,handleHide:Y,hideOnRouteChange:p,processOnMount:!0}),{showPortal:S,hidePortal:O,renderPortal:G}=be(P,a,ee,"menu"),h={anchorEl:i,innerRef:a,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return k(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&ce(t),!0}},q=u(()=>K(e.anchor||(e.cover===!0?"center middle":"bottom start"),o.lang.rtl)),J=u(()=>e.cover===!0?q.value:K(e.self||"top start",o.lang.rtl)),N=u(()=>(e.square===!0?" q-menu--square":"")+(W.value===!0?" q-menu--dark q-dark":"")),V=u(()=>e.autoClose===!0?{onClick:Z}:{}),E=u(()=>s.value===!0&&e.persistent!==!0);M(E,t=>{t===!0?(Ae(b),Ce(h)):(j(b),H(h))});function y(){Me(()=>{let t=a.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function X(t){if(n=e.noRefocus===!1?document.activeElement:null,we(F),S(),w(),f=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const x=ne(t);if(x.left!==void 0){const{top:te,left:oe}=i.value.getBoundingClientRect();f={left:x.left-oe,top:x.top-te}}}l===void 0&&(l=M(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,r)),e.noFocus!==!0&&document.activeElement.blur(),L(()=>{r(),e.noFocus!==!0&&y()}),C(()=>{o.platform.is.ios===!0&&(g=e.autoClose,a.value.click()),r(),S(!0),d("show",t)},e.transitionDuration)}function Y(t){Q(),O(),B(!0),n!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),C(()=>{O(!0),d("hide",t)},e.transitionDuration)}function B(t){f=void 0,l!==void 0&&(l(),l=void 0),(t===!0||s.value===!0)&&(Fe(F),$(),H(h),j(b)),t!==!0&&(n=null)}function w(){(i.value!==null||e.scrollTarget!==void 0)&&(T.value=Be(i.value,e.scrollTarget),U(T.value,r))}function Z(t){g!==!0?(Pe(m,t),d("click",t)):g=!1}function F(t){E.value===!0&&e.noFocus!==!0&&re(a.value,t.target)!==!0&&y()}function b(t){d("escapeKey"),k(t)}function r(){xe({targetEl:a.value,offset:e.offset,anchorEl:i.value,anchorOrigin:q.value,selfOrigin:J.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(){return D(ue,I.value,()=>s.value===!0?D("div",{role:"menu",...v,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+N.value,v.class],style:[v.style,_.value],...V.value},se(c.default)):null)}return le(B),Object.assign(m,{focus:y,updatePosition:r}),G}});export{Qe as Q,De as r};