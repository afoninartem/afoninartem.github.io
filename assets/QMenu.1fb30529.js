import{c as ae,r as w,a as u,w as D,ad as ne,h as M,g as se,ap as ue,b as ie,j as le,aK as re,Y as ce}from"./index.1f69b706.js";import{i as fe,a as de,v as A,b as ge,c as ve,d as me,e as he,f as Pe,g as ye,r as R,s as Te,p as K,j as ke,h as Ce}from"./position-engine.5b553eb4.js";import{u as Se,a as xe,b as be,c as Oe}from"./selection.43d4a6f4.js";import{u as qe,a as Ee}from"./use-dark.a9a5dd07.js";import{s as Be,g as Fe}from"./scroll.36fd76b0.js";import{a as we,r as De,b as H,c as Me}from"./QDialog.215be82f.js";import{g as Ae}from"./private.use-form.65999595.js";var Ie=ae({name:"QMenu",inheritAttrs:!1,props:{...fe,...Se,...qe,...de,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:A},self:{type:String,validator:A},offset:{type:Array,validator:ge},scrollTarget:Be,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...xe,"click","escapeKey"],setup(t,{slots:j,emit:c,attrs:d}){let n=null,f,i,g;const T=le(),{proxy:v}=T,{$q:o}=v,a=w(null),s=w(!1),Q=u(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),W=Ee(t,o),{registerTick:_,removeTick:I}=ve(),{registerTimeout:k}=be(),{transitionProps:L,transitionStyle:U}=me(t),{localScrollTarget:C,changeScrollEvent:Y,unconfigureScrollTarget:$}=he(t,B),{anchorEl:l,canShow:z}=Pe({showing:s}),{hide:S}=Oe({showing:s,canShow:z,handleShow:X,handleHide:Z,hideOnRouteChange:Q,processOnMount:!0}),{showPortal:x,hidePortal:b,renderPortal:G}=ye(T,a,ee,"menu"),m={anchorEl:l,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&ce(e),!0}},O=u(()=>K(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),J=u(()=>t.cover===!0?O.value:K(t.self||"top start",o.lang.rtl)),N=u(()=>(t.square===!0?" q-menu--square":"")+(W.value===!0?" q-menu--dark q-dark":"")),V=u(()=>t.autoClose===!0?{onClick:p}:{}),q=u(()=>s.value===!0&&t.persistent!==!0);D(q,e=>{e===!0?(Me(P),Ce(m)):(H(P),R(m))});function h(){Ae(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function X(e){if(n=t.noRefocus===!1?document.activeElement:null,we(F),x(),B(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const y=ne(e);if(y.left!==void 0){const{top:te,left:oe}=l.value.getBoundingClientRect();f={left:y.left-oe,top:y.top-te}}}i===void 0&&(i=D(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),_(()=>{r(),t.noFocus!==!0&&h()}),k(()=>{o.platform.is.ios===!0&&(g=t.autoClose,a.value.click()),r(),x(!0),c("show",e)},t.transitionDuration)}function Z(e){I(),b(),E(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&((((e==null?void 0:e.type.indexOf("key"))===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),k(()=>{b(!0),c("hide",e)},t.transitionDuration)}function E(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(De(F),$(),R(m),H(P)),e!==!0&&(n=null)}function B(){(l.value!==null||t.scrollTarget!==void 0)&&(C.value=Fe(l.value,t.scrollTarget),Y(C.value,r))}function p(e){g!==!0?(ke(v,e),c("click",e)):g=!1}function F(e){q.value===!0&&t.noFocus!==!0&&re(a.value,e.target)!==!0&&h()}function P(e){t.noEscDismiss!==!0&&(c("escapeKey"),S(e))}function r(){Te({targetEl:a.value,offset:t.offset,anchorEl:l.value,anchorOrigin:O.value,selfOrigin:J.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return M(ue,L.value,()=>s.value===!0?M("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+N.value,d.class],style:[d.style,U.value],...V.value},se(j.default)):null)}return ie(E),Object.assign(v,{focus:h,updatePosition:r}),G}});export{Ie as Q};
