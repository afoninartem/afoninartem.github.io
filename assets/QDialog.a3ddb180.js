import{a6 as Oe,a as ue,h as re,r as H,k as u,w as J,e as Fe,u as b,x as ce,an as oe,q as de,z as fe,aG as me,g as _e}from"./index.3fed2421.js";import{u as De,a as ve,v as ie,b as He,c as ge,d as he,e as Re,f as Me,g as ye,r as ae,s as Ae,p as le,i as Le,h as ze}from"./position-engine.2afcebae.js";import{u as xe,a as ke,b as be,d as we}from"./selection.19639fea.js";import{u as Ke,a as $e}from"./use-dark.7be76274.js";import{g as je}from"./scroll.9a76306a.js";import{g as qe}from"./use-form.12a5b6c2.js";import{u as pe,a as Qe}from"./use-prevent-scroll.c7f0ecee.js";let We=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const i=document.createElement("div");Object.assign(i.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(i),e.scrollLeft=-1e3,We=e.scrollLeft>=0,e.remove()}const w=[];let T;function Ie(e){T=e.keyCode===27}function Ve(){T===!0&&(T=!1)}function Ge(e){T===!0&&(T=!1,Oe(e,27)===!0&&w[w.length-1](e))}function Se(e){window[e]("keydown",Ie),window[e]("blur",Ve),window[e]("keyup",Ge),T=!1}function Ce(e){ue.is.desktop===!0&&(w.push(e),w.length===1&&Se("addEventListener"))}function N(e){const i=w.indexOf(e);i!==-1&&(w.splice(i,1),w.length===0&&Se("removeEventListener"))}const q=[];function Be(e){q[q.length-1](e)}function Ee(e){ue.is.desktop===!0&&(q.push(e),q.length===1&&document.body.addEventListener("focusin",Be))}function ne(e){const i=q.indexOf(e);i!==-1&&(q.splice(i,1),q.length===0&&document.body.removeEventListener("focusin",Be))}var ot=re({name:"QMenu",inheritAttrs:!1,props:{...De,...xe,...Ke,...ve,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ie},self:{type:String,validator:ie},offset:{type:Array,validator:He},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ke,"click","escapeKey"],setup(e,{slots:i,emit:d,attrs:S}){let f=null,a,l,v;const m=fe(),{proxy:r}=m,{$q:s}=r,c=H(null),g=H(!1),R=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),M=$e(e,s),{registerTick:X,removeTick:A}=ge(),{registerTimeout:L}=be(),{transitionProps:z,transitionStyle:Y}=he(e),{localScrollTarget:P,changeScrollEvent:K,unconfigureScrollTarget:Z}=Re(e,V),{anchorEl:h,canShow:C}=Me({showing:g}),{hide:$}=we({showing:g,canShow:C,handleShow:W,handleHide:F,hideOnRouteChange:R,processOnMount:!0}),{showPortal:j,hidePortal:p,renderPortal:B}=ye(m,c,D,"menu"),O={anchorEl:h,innerRef:c,onClickOutside(t){if(e.persistent!==!0&&g.value===!0)return $(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&_e(t),!0}},Q=u(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),ee=u(()=>e.cover===!0?Q.value:le(e.self||"top start",s.lang.rtl)),te=u(()=>(e.square===!0?" q-menu--square":"")+(M.value===!0?" q-menu--dark q-dark":"")),y=u(()=>e.autoClose===!0?{onClick:_}:{}),E=u(()=>g.value===!0&&e.persistent!==!0);J(E,t=>{t===!0?(Ce(o),ze(O)):(N(o),ae(O))});function x(){qe(()=>{let t=c.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function W(t){if(f=e.noRefocus===!1?document.activeElement:null,Ee(G),j(),V(),a=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const k=Fe(t);if(k.left!==void 0){const{top:Te,left:Pe}=h.value.getBoundingClientRect();a={left:k.left-Pe,top:k.top-Te}}}l===void 0&&(l=J(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,n)),e.noFocus!==!0&&document.activeElement.blur(),X(()=>{n(),e.noFocus!==!0&&x()}),L(()=>{s.platform.is.ios===!0&&(v=e.autoClose,c.value.click()),n(),j(!0),d("show",t)},e.transitionDuration)}function F(t){A(),p(),I(!0),f!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?f.closest('[tabindex]:not([tabindex^="-"])'):void 0)||f).focus(),f=null),L(()=>{p(!0),d("hide",t)},e.transitionDuration)}function I(t){a=void 0,l!==void 0&&(l(),l=void 0),(t===!0||g.value===!0)&&(ne(G),Z(),ae(O),N(o)),t!==!0&&(f=null)}function V(){(h.value!==null||e.scrollTarget!==void 0)&&(P.value=je(h.value,e.scrollTarget),K(P.value,n))}function _(t){v!==!0?(Le(r,t),d("click",t)):v=!1}function G(t){E.value===!0&&e.noFocus!==!0&&me(c.value,t.target)!==!0&&x()}function o(t){d("escapeKey"),$(t)}function n(){Ae({targetEl:c.value,offset:e.offset,anchorEl:h.value,anchorOrigin:Q.value,selfOrigin:ee.value,absoluteOffset:a,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function D(){return b(oe,z.value,()=>g.value===!0?b("div",{role:"menu",...S,ref:c,tabindex:-1,class:["q-menu q-position-engine scroll"+te.value,S.class],style:[S.style,Y.value],...y.value},ce(i.default)):null)}return de(I),Object.assign(r,{focus:x,updatePosition:n}),B}});let U=0;const Ue={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},se={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var nt=re({name:"QDialog",inheritAttrs:!1,props:{...xe,...ve,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ke,"shake","click","escapeKey"],setup(e,{slots:i,emit:d,attrs:S}){const f=fe(),a=H(null),l=H(!1),v=H(!1);let m=null,r=null,s,c;const g=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:R}=Qe(),{registerTimeout:M}=be(),{registerTick:X,removeTick:A}=ge(),{transitionProps:L,transitionStyle:z}=he(e,()=>se[e.position][0],()=>se[e.position][1]),Y=u(()=>z.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:P,hidePortal:K,portalIsAccessible:Z,renderPortal:h}=ye(f,a,G,"dialog"),{hide:C}=we({showing:l,hideOnRouteChange:g,handleShow:ee,handleHide:te,processOnMount:!0}),{addToHistory:$,removeFromHistory:j}=pe(l,C,g),p=u(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ue[e.position]}`+(v.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),B=u(()=>l.value===!0&&e.seamless!==!0),O=u(()=>e.autoClose===!0?{onClick:I}:{}),Q=u(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${B.value===!0?"modal":"seamless"}`,S.class]);J(()=>e.maximized,o=>{l.value===!0&&F(o)}),J(B,o=>{R(o),o===!0?(Ee(_),Ce(x)):(ne(_),N(x))});function ee(o){$(),r=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,F(e.maximized),P(),v.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),X(y)):A(),M(()=>{if(f.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:n,bottom:D}=document.activeElement.getBoundingClientRect(),{innerHeight:t}=window,k=window.visualViewport!==void 0?window.visualViewport.height:t;n>0&&D>k/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-k,D>=t?1/0:Math.ceil(document.scrollingElement.scrollTop+D-k/2))),document.activeElement.scrollIntoView()}c=!0,a.value.click(),c=!1}P(!0),v.value=!1,d("show",o)},e.transitionDuration)}function te(o){A(),j(),W(!0),v.value=!0,K(),r!==null&&(((o&&o.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),M(()=>{K(!0),v.value=!1,d("hide",o)},e.transitionDuration)}function y(o){qe(()=>{let n=a.value;n===null||n.contains(document.activeElement)===!0||(n=(o!==""?n.querySelector(o):null)||n.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.querySelector("[autofocus], [data-autofocus]")||n,n.focus({preventScroll:!0}))})}function E(o){o&&typeof o.focus=="function"?o.focus({preventScroll:!0}):y(),d("shake");const n=a.value;n!==null&&(n.classList.remove("q-animate--scale"),n.classList.add("q-animate--scale"),m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,a.value!==null&&(n.classList.remove("q-animate--scale"),y())},170))}function x(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&E():(d("escapeKey"),C()))}function W(o){m!==null&&(clearTimeout(m),m=null),(o===!0||l.value===!0)&&(F(!1),e.seamless!==!0&&(R(!1),ne(_),N(x))),o!==!0&&(r=null)}function F(o){o===!0?s!==!0&&(U<1&&document.body.classList.add("q-body--dialog"),U++,s=!0):s===!0&&(U<2&&document.body.classList.remove("q-body--dialog"),U--,s=!1)}function I(o){c!==!0&&(C(o),d("click",o))}function V(o){e.persistent!==!0&&e.noBackdropDismiss!==!0?C(o):e.noShake!==!0&&E()}function _(o){e.allowFocusOutside!==!0&&Z.value===!0&&me(a.value,o.target)!==!0&&y('[tabindex]:not([tabindex="-1"])')}Object.assign(f.proxy,{focus:y,shake:E,__updateRefocusTarget(o){r=o||null}}),de(W);function G(){return b("div",{role:"dialog","aria-modal":B.value===!0?"true":"false",...S,class:Q.value},[b(oe,{name:"q-transition--fade",appear:!0},()=>B.value===!0?b("div",{class:"q-dialog__backdrop fixed-full",style:Y.value,"aria-hidden":"true",tabindex:-1,onClick:V}):null),b(oe,L.value,()=>l.value===!0?b("div",{ref:a,class:p.value,style:z.value,tabindex:-1,...O.value},ce(i.default)):null)])}return h}});export{nt as Q,ot as a,We as r};
