import{Q as Fe,a as Ne}from"./QLayout.01454575.js";import{Q as ne,a as Re,b as me}from"./QItem.d9875fe4.js";import{c as K,i as ge,e as M,r as q,a as r,w as c,o as Ue,n as he,b as ke,d as je,h as B,f as be,g as ie,l as pe,j as Ce,s as le,k as Ee,m as Ge,u as G,p as $,q as A,t as w,v,x as R,y as U,z as Ke,Q as Xe,A as ye,B as we,F as Je,C as Ye,D as Ze,E as ue,G as xe,_ as qe,H as j}from"./index.ef225a1a.js";import{Q as et}from"./QList.93de4c2d.js";import{u as tt,a as at}from"./use-prevent-scroll.b39a97db.js";import{u as ot,a as nt,b as lt,c as rt}from"./selection.a54e58f6.js";import{u as ut,a as it}from"./use-dark.6b3a4773.js";import{T as re}from"./TouchPan.98b51985.js";import{b as N}from"./format.3e32b8d9.js";import{u as E}from"./leftDrawer-store.e0ac7035.js";import{Q as st}from"./QResizeObserver.d0cffd9a.js";import"./scroll.088aa9f0.js";import"./touch.3df10340.js";const _e=150;var ct=K({name:"QDrawer",inheritAttrs:!1,props:{...ot,...ut,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...nt,"onLayout","miniState"],setup(e,{slots:m,emit:s,attrs:_}){const l=Ce(),{proxy:{$q:f}}=l,d=it(e,f),{preventBodyScroll:k}=at(),{registerTimeout:Q,removeTimeout:W}=lt(),a=ge(pe,M);if(a===M)return console.error("QDrawer needs to be child of QLayout"),M;let H,C=null,h;const i=q(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),S=r(()=>e.mini===!0&&i.value!==!0),b=r(()=>S.value===!0?e.miniWidth:e.width),u=q(e.showIfAbove===!0&&i.value===!1?!0:e.modelValue===!0),o=r(()=>e.persistent!==!0&&(i.value===!0||Le.value===!0));function p(t,n){if(Be(),t!==!1&&a.animate(),g(0),i.value===!0){const y=a.instances[P.value];y!==void 0&&y.belowBreakpoint===!0&&y.hide(!1),L(1),a.isContainer.value!==!0&&k(!0)}else L(0),t!==!1&&te(!1);Q(()=>{t!==!1&&te(!0),n!==!0&&s("show",t)},_e)}function se(t,n){$e(),t!==!1&&a.animate(),L(0),g(D.value*b.value),ae(),n!==!0?Q(()=>{s("hide",t)},_e):W()}const{show:X,hide:V}=rt({showing:u,hideOnRouteChange:o,handleShow:p,handleHide:se}),{addToHistory:Be,removeFromHistory:$e}=tt(u,V,o),I={belowBreakpoint:i,hide:V},x=r(()=>e.side==="right"),D=r(()=>(f.lang.rtl===!0?-1:1)*(x.value===!0?1:-1)),ce=q(0),O=q(!1),J=q(!1),de=q(b.value*D.value),P=r(()=>x.value===!0?"left":"right"),Y=r(()=>u.value===!0&&i.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:b.value:0),Z=r(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(x.value?"R":"L")!==-1||f.platform.is.ios===!0&&a.isContainer.value===!0),z=r(()=>e.overlay===!1&&u.value===!0&&i.value===!1),Le=r(()=>e.overlay===!0&&u.value===!0&&i.value===!1),Te=r(()=>"fullscreen q-drawer__backdrop"+(u.value===!1&&O.value===!1?" hidden":"")),Qe=r(()=>({backgroundColor:`rgba(0,0,0,${ce.value*.4})`})),fe=r(()=>x.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Se=r(()=>x.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),De=r(()=>{const t={};return a.header.space===!0&&fe.value===!1&&(Z.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Se.value===!1&&(Z.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Oe=r(()=>{const t={width:`${b.value}px`,transform:`translateX(${de.value}px)`};return i.value===!0?t:Object.assign(t,De.value)}),Me=r(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),He=r(()=>`q-drawer q-drawer--${e.side}`+(J.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(O.value===!0?" no-transition":u.value===!0?"":" q-layout--prevent-focus")+(i.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(Z.value===!0||z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(fe.value===!0?" q-drawer--top-padding":""))),Ve=r(()=>{const t=f.lang.rtl===!0?e.side:P.value;return[[re,Ie,void 0,{[t]:!0,mouse:!0}]]}),ze=r(()=>{const t=f.lang.rtl===!0?P.value:e.side;return[[re,ve,void 0,{[t]:!0,mouse:!0}]]}),Ae=r(()=>{const t=f.lang.rtl===!0?P.value:e.side;return[[re,ve,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ee(){Pe(i,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}c(i,t=>{t===!0?(H=u.value,u.value===!0&&V(!1)):e.overlay===!1&&e.behavior!=="mobile"&&H!==!1&&(u.value===!0?(g(0),L(0),ae()):X(!1))}),c(()=>e.side,(t,n)=>{a.instances[n]===I&&(a.instances[n]=void 0,a[n].space=!1,a[n].offset=0),a.instances[t]=I,a[t].size=b.value,a[t].space=z.value,a[t].offset=Y.value}),c(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ee()}),c(()=>e.behavior+e.breakpoint,ee),c(a.isContainer,t=>{u.value===!0&&k(t!==!0),t===!0&&ee()}),c(a.scrollbarWidth,()=>{g(u.value===!0?0:void 0)}),c(Y,t=>{T("offset",t)}),c(z,t=>{s("onLayout",t),T("space",t)}),c(x,()=>{g()}),c(b,t=>{g(),oe(e.miniToOverlay,t)}),c(()=>e.miniToOverlay,t=>{oe(t,b.value)}),c(()=>f.lang.rtl,()=>{g()}),c(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(We(),a.animate())}),c(S,t=>{s("miniState",t)});function g(t){t===void 0?he(()=>{t=u.value===!0?0:b.value,g(D.value*t)}):(a.isContainer.value===!0&&x.value===!0&&(i.value===!0||Math.abs(t)===b.value)&&(t+=D.value*a.scrollbarWidth.value),de.value=t)}function L(t){ce.value=t}function te(t){const n=t===!0?"remove":a.isContainer.value!==!0?"add":"";n!==""&&document.body.classList[n]("q-body--drawer-toggle")}function We(){C!==null&&clearTimeout(C),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),J.value=!0,C=setTimeout(()=>{C=null,J.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ie(t){if(u.value!==!1)return;const n=b.value,y=N(t.distance.x,0,n);if(t.isFinal===!0){y>=Math.min(75,n)===!0?X():(a.animate(),L(0),g(D.value*n)),O.value=!1;return}g((f.lang.rtl===!0?x.value!==!0:x.value)?Math.max(n-y,0):Math.min(0,y-n)),L(N(y/n,0,1)),t.isFirst===!0&&(O.value=!0)}function ve(t){if(u.value!==!0)return;const n=b.value,y=t.direction===e.side,F=(f.lang.rtl===!0?y!==!0:y)?N(t.distance.x,0,n):0;if(t.isFinal===!0){Math.abs(F)<Math.min(75,n)===!0?(a.animate(),L(1),g(0)):V(),O.value=!1;return}g(D.value*F),L(N(1-F/n,0,1)),t.isFirst===!0&&(O.value=!0)}function ae(){k(!1),te(!0)}function T(t,n){a.update(e.side,t,n)}function Pe(t,n){t.value!==n&&(t.value=n)}function oe(t,n){T("size",t===!0?e.miniWidth:n)}return a.instances[e.side]=I,oe(e.miniToOverlay,b.value),T("space",z.value),T("offset",Y.value),e.showIfAbove===!0&&e.modelValue!==!0&&u.value===!0&&e["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),Ue(()=>{s("onLayout",z.value),s("miniState",S.value),H=e.showIfAbove===!0;const t=()=>{(u.value===!0?p:se)(!1,!0)};if(a.totalWidth.value!==0){he(t);return}h=c(a.totalWidth,()=>{h(),h=void 0,u.value===!1&&e.showIfAbove===!0&&i.value===!1?X(!1):t()})}),ke(()=>{h!==void 0&&h(),C!==null&&(clearTimeout(C),C=null),u.value===!0&&ae(),a.instances[e.side]===I&&(a.instances[e.side]=void 0,T("size",0),T("offset",0),T("space",!1))}),()=>{const t=[];i.value===!0&&(e.noSwipeOpen===!1&&t.push(je(B("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ve.value)),t.push(be("div",{ref:"backdrop",class:Te.value,style:Qe.value,"aria-hidden":"true",onClick:V},void 0,"backdrop",e.noSwipeBackdrop!==!0&&u.value===!0,()=>Ae.value)));const n=S.value===!0&&m.mini!==void 0,y=[B("div",{..._,key:""+n,class:[Me.value,_.class]},n===!0?m.mini():ie(m.default))];return e.elevated===!0&&u.value===!0&&y.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(be("aside",{ref:"content",class:He.value,style:Oe.value},y,"contentclose",e.noSwipeClose!==!0&&i.value===!0,()=>ze.value)),B("div",{class:"q-drawer-container"},t)}}});const dt={__name:"LeftDrawer",setup(e){const{leftDrawerOpen:m}=le(E()),s=q(null);Ee(()=>{const{userRoutes:l}=le(E());s.value=l.value});const{userRoutes:_}=le(E());return Ge(()=>{s.value=_.value}),(l,f)=>G(m)?($(),A(ct,{key:0,"show-if-above":"",bordered:""},{default:w(()=>[v(et,null,{default:w(()=>[v(ne,{header:""},{default:w(()=>[R(" \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B ")]),_:1}),($(!0),U(Je,null,Ke(G(_),(d,k)=>($(),A(Re,{clickable:"",tag:"a",to:d.link,key:`r-${k}`},{default:w(()=>[d.icon?($(),A(me,{key:0,avatar:""},{default:w(()=>[v(Xe,{name:d.icon},null,8,["name"])]),_:2},1024)):ye("",!0),v(me,null,{default:w(()=>[v(ne,null,{default:w(()=>[R(we(d.title),1)]),_:2},1024),v(ne,{caption:""},{default:w(()=>[R(we(d.caption),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})):ye("",!0)}};var ft=K({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:m}){const s=r(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>B("div",{class:s.value},ie(m.default))}}),vt=K({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const s=r(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>B("div",{class:s.value,role:"toolbar"},ie(m.default))}}),mt=K({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:s}){const{proxy:{$q:_}}=Ce(),l=ge(pe,M);if(l===M)return console.error("QHeader needs to be child of QLayout"),M;const f=q(parseInt(e.heightHint,10)),d=q(!0),k=r(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||_.platform.is.ios&&l.isContainer.value===!0),Q=r(()=>{if(e.modelValue!==!0)return 0;if(k.value===!0)return d.value===!0?f.value:0;const o=f.value-l.scroll.value.position;return o>0?o:0}),W=r(()=>e.modelValue!==!0||k.value===!0&&d.value!==!0),a=r(()=>e.modelValue===!0&&W.value===!0&&e.reveal===!0),H=r(()=>"q-header q-layout__section--marginal "+(k.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(W.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=r(()=>{const o=l.rows.value.top,p={};return o[0]==="l"&&l.left.space===!0&&(p[_.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(p[_.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),p});function h(o,p){l.update("header",o,p)}function i(o,p){o.value!==p&&(o.value=p)}function S({height:o}){i(f,o),h("size",o)}function b(o){a.value===!0&&i(d,!0),s("focusin",o)}c(()=>e.modelValue,o=>{h("space",o),i(d,!0),l.animate()}),c(Q,o=>{h("offset",o)}),c(()=>e.reveal,o=>{o===!1&&i(d,e.modelValue)}),c(d,o=>{l.animate(),s("reveal",o)}),c(l.scroll,o=>{e.reveal===!0&&i(d,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const u={};return l.instances.header=u,e.modelValue===!0&&h("size",f.value),h("space",e.modelValue),h("offset",Q.value),ke(()=>{l.instances.header===u&&(l.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const o=Ye(m.default,[]);return e.elevated===!0&&o.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(B(st,{debounce:0,onResize:S})),B("header",{class:H.value,style:C.value,onFocusin:b},o)}}});const ht={class:"account-menu"},bt={key:0,class:"login-btn"},yt={key:1,class:"account-info"},wt={__name:"UserControl",setup(e){const{user:m,logout:s}=Ze();return(_,l)=>($(),U("div",ht,[G(m)?($(),U("div",yt,[v(ue,{color:"secondary",icon:"logout",label:"\u0412\u044B\u0439\u0442\u0438",onClick:G(s)},null,8,["onClick"])])):($(),U("div",bt,[v(ue,{color:"secondary",icon:"person",label:"\u0412\u043E\u0439\u0442\u0438",to:"/login"})]))]))}},_t=xe({name:"HeaderComponent",components:{UserControl:wt},setup(){const{toggleLeftDrawer:e}=E();return{toggleLeftDrawer:e}}});function gt(e,m,s,_,l,f){const d=j("UserControl");return $(),A(mt,{elevated:""},{default:w(()=>[v(vt,null,{default:w(()=>[v(ue,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),v(ft,null,{default:w(()=>[R(" ArtisHelper ")]),_:1}),v(d)]),_:1})]),_:1})}var kt=qe(_t,[["render",gt]]);const pt=xe({name:"MainLayout",components:{HeaderComponent:kt,LeftDrawer:dt},setup(){}});function Ct(e,m,s,_,l,f){const d=j("HeaderComponent"),k=j("LeftDrawer"),Q=j("router-view");return $(),A(Fe,{view:"lHh Lpr lFf"},{default:w(()=>[v(d),v(k),v(Ne,null,{default:w(()=>[v(Q)]),_:1})]),_:1})}var At=qe(pt,[["render",Ct]]);export{At as default};
