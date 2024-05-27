import{Q as Ze,a as et}from"./QLayout.0af4a06f.js";import{Q as le,a as tt,b as ge}from"./QItem.585b58cf.js";import{c as at,a as V,n as ot,l as nt,b as W,p as ie,d as Ce,s as se,e as ve,f as ce,g as rt,h as J,i as $e,j as z,r as D,k as v,w as b,o as ut,m as ke,q as Te,t as lt,u as $,v as qe,x as he,y as Me,z as Oe,A as it,B as N,C as Qe,D as st,E as ct,F as dt,G,H as T,I as P,J as q,K as _,L as X,M as Y,N as ft,Q as vt,O as Be,P as xe,R as mt,S as ht,T as me,U as Ee,_ as ze,V as j}from"./index.3fed2421.js";import{u as pt,a as yt,Q as bt}from"./use-prevent-scroll.c7f0ecee.js";import{c as wt,u as _t,a as gt,b as Ct,d as kt}from"./selection.19639fea.js";import{u as qt,a as Bt}from"./use-dark.7be76274.js";import{g as De,s as Le}from"./touch.3df10340.js";import{b as U}from"./format.3e32b8d9.js";import{Q as xt}from"./QResizeObserver.df200a32.js";import"./scroll.9a76306a.js";function de(t,l,u){const h=ve(t);let e,o=h.left-l.event.x,r=h.top-l.event.y,f=Math.abs(o),i=Math.abs(r);const s=l.direction;s.horizontal===!0&&s.vertical!==!0?e=o<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=r<0?"up":"down":s.up===!0&&r<0?(e="up",f>i&&(s.left===!0&&o<0?e="left":s.right===!0&&o>0&&(e="right"))):s.down===!0&&r>0?(e="down",f>i&&(s.left===!0&&o<0?e="left":s.right===!0&&o>0&&(e="right"))):s.left===!0&&o<0?(e="left",f<i&&(s.up===!0&&r<0?e="up":s.down===!0&&r>0&&(e="down"))):s.right===!0&&o>0&&(e="right",f<i&&(s.up===!0&&r<0?e="up":s.down===!0&&r>0&&(e="down")));let n=!1;if(e===void 0&&u===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};e=l.event.lastDir,n=!0,e==="left"||e==="right"?(h.left-=o,f=0,o=0):(h.top-=r,i=0,r=0)}return{synthetic:n,payload:{evt:t,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:h,direction:e,isFirst:l.event.isFirst,isFinal:u===!0,duration:Date.now()-l.event.time,distance:{x:f,y:i},offset:{x:o,y:r},delta:{x:h.left-l.event.lastX,y:h.top-l.event.lastY}}}}let Dt=0;var fe=at({name:"touch-pan",beforeMount(t,{value:l,modifiers:u}){if(u.mouse!==!0&&V.has.touch!==!0)return;function h(o,r){u.mouse===!0&&r===!0?rt(o):(u.stop===!0&&se(o),u.prevent===!0&&Ce(o))}const e={uid:"qvtp_"+Dt++,handler:l,modifiers:u,direction:De(u),noop:ot,mouseStart(o){Le(o,e)&&nt(o)&&(W(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(o,!0))},touchStart(o){if(Le(o,e)){const r=o.target;W(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(o)}},start(o,r){if(V.is.firefox===!0&&ie(t,!0),e.lastEvt=o,r===!0||u.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=o.type.indexOf("mouse")!==-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Ce(s),o.cancelBubble===!0&&se(s),Object.assign(s,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[e.uid]:o.qClonedBy.concat(e.uid)}),e.initialEvent={target:o.target,event:s}}se(o)}const{left:f,top:i}=ve(o);e.event={x:f,y:i,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:i}},move(o){if(e.event===void 0)return;const r=ve(o),f=r.left-e.event.x,i=r.top-e.event.y;if(f===0&&i===0)return;e.lastEvt=o;const s=e.event.mouse===!0,n=()=>{h(o,s);let p;u.preserveCursor!==!0&&u.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),wt(),e.styleCleanup=m=>{if(e.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),s===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{L(),m()},50):L()}else m!==void 0&&m()}};if(e.event.detected===!0){e.event.isFirst!==!0&&h(o,e.event.mouse);const{payload:p,synthetic:m}=de(o,e,!1);p!==void 0&&(e.handler(p)===!1?e.end(o):(e.styleCleanup===void 0&&e.event.isFirst===!0&&n(),e.event.lastX=p.position.left,e.event.lastY=p.position.top,e.event.lastDir=m===!0?void 0:p.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){n(),e.event.detected=!0,e.move(o);return}const k=Math.abs(f),w=Math.abs(i);k!==w&&(e.direction.horizontal===!0&&k>w||e.direction.vertical===!0&&k<w||e.direction.up===!0&&k<w&&i<0||e.direction.down===!0&&k<w&&i>0||e.direction.left===!0&&k>w&&f<0||e.direction.right===!0&&k>w&&f>0?(e.event.detected=!0,e.move(o)):e.end(o,!0))},end(o,r){if(e.event!==void 0){if(ce(e,"temp"),V.is.firefox===!0&&ie(t,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(de(o===void 0?e.lastEvt:o,e).payload);const{payload:f}=de(o===void 0?e.lastEvt:o,e,!0),i=()=>{e.handler(f)};e.styleCleanup!==void 0?e.styleCleanup(i):i()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,u.mouse===!0){const o=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";W(e,"main",[[t,"mousedown","mouseStart",`passive${o}`]])}V.has.touch===!0&&W(e,"main",[[t,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,l){const u=t.__qtouchpan;u!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&u.end(),u.handler=l.value),u.direction=De(l.modifiers))},beforeUnmount(t){const l=t.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),ce(l,"main"),ce(l,"temp"),V.is.firefox===!0&&ie(t,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete t.__qtouchpan)}});const Se=150;var Lt=J({name:"QDrawer",inheritAttrs:!1,props:{..._t,...qt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...gt,"onLayout","miniState"],setup(t,{slots:l,emit:u,attrs:h}){const e=Oe(),{proxy:{$q:o}}=e,r=Bt(t,o),{preventBodyScroll:f}=yt(),{registerTimeout:i,removeTimeout:s}=Ct(),n=$e(Me,z);if(n===z)return console.error("QDrawer needs to be child of QLayout"),z;let k,w=null,p;const m=D(t.behavior==="mobile"||t.behavior!=="desktop"&&n.totalWidth.value<=t.breakpoint),L=v(()=>t.mini===!0&&m.value!==!0),g=v(()=>L.value===!0?t.miniWidth:t.width),y=D(t.showIfAbove===!0&&m.value===!1?!0:t.modelValue===!0),c=v(()=>t.persistent!==!0&&(m.value===!0||Ve.value===!0));function x(a,d){if(Ae(),a!==!1&&n.animate(),B(0),m.value===!0){const C=n.instances[R.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),M(1),n.isContainer.value!==!0&&f(!0)}else M(0),a!==!1&&ne(!1);i(()=>{a!==!1&&ne(!0),d!==!0&&u("show",a)},Se)}function pe(a,d){He(),a!==!1&&n.animate(),M(0),B(Q.value*g.value),re(),d!==!0?i(()=>{u("hide",a)},Se):s()}const{show:Z,hide:A}=kt({showing:y,hideOnRouteChange:c,handleShow:x,handleHide:pe}),{addToHistory:Ae,removeFromHistory:He}=pt(y,A,c),F={belowBreakpoint:m,hide:A},S=v(()=>t.side==="right"),Q=v(()=>(o.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),ye=D(0),E=D(!1),ee=D(!1),be=D(g.value*Q.value),R=v(()=>S.value===!0?"left":"right"),te=v(()=>y.value===!0&&m.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:g.value:0),ae=v(()=>t.overlay===!0||t.miniToOverlay===!0||n.view.value.indexOf(S.value?"R":"L")!==-1||o.platform.is.ios===!0&&n.isContainer.value===!0),H=v(()=>t.overlay===!1&&y.value===!0&&m.value===!1),Ve=v(()=>t.overlay===!0&&y.value===!0&&m.value===!1),Pe=v(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&E.value===!1?" hidden":"")),Fe=v(()=>({backgroundColor:`rgba(0,0,0,${ye.value*.4})`})),we=v(()=>S.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Re=v(()=>S.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Ie=v(()=>{const a={};return n.header.space===!0&&we.value===!1&&(ae.value===!0?a.top=`${n.header.offset}px`:n.header.space===!0&&(a.top=`${n.header.size}px`)),n.footer.space===!0&&Re.value===!1&&(ae.value===!0?a.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(a.bottom=`${n.footer.size}px`)),a}),We=v(()=>{const a={width:`${g.value}px`,transform:`translateX(${be.value}px)`};return m.value===!0?a:Object.assign(a,Ie.value)}),Ue=v(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),Ne=v(()=>`q-drawer q-drawer--${t.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(E.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(ae.value===!0||H.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(we.value===!0?" q-drawer--top-padding":""))),Xe=v(()=>{const a=o.lang.rtl===!0?t.side:R.value;return[[fe,Ge,void 0,{[a]:!0,mouse:!0}]]}),Ye=v(()=>{const a=o.lang.rtl===!0?R.value:t.side;return[[fe,_e,void 0,{[a]:!0,mouse:!0}]]}),je=v(()=>{const a=o.lang.rtl===!0?R.value:t.side;return[[fe,_e,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){Je(m,t.behavior==="mobile"||t.behavior!=="desktop"&&n.totalWidth.value<=t.breakpoint)}b(m,a=>{a===!0?(k=y.value,y.value===!0&&A(!1)):t.overlay===!1&&t.behavior!=="mobile"&&k!==!1&&(y.value===!0?(B(0),M(0),re()):Z(!1))}),b(()=>t.side,(a,d)=>{n.instances[d]===F&&(n.instances[d]=void 0,n[d].space=!1,n[d].offset=0),n.instances[a]=F,n[a].size=g.value,n[a].space=H.value,n[a].offset=te.value}),b(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),b(()=>t.behavior+t.breakpoint,oe),b(n.isContainer,a=>{y.value===!0&&f(a!==!0),a===!0&&oe()}),b(n.scrollbarWidth,()=>{B(y.value===!0?0:void 0)}),b(te,a=>{O("offset",a)}),b(H,a=>{u("onLayout",a),O("space",a)}),b(S,()=>{B()}),b(g,a=>{B(),ue(t.miniToOverlay,a)}),b(()=>t.miniToOverlay,a=>{ue(a,g.value)}),b(()=>o.lang.rtl,()=>{B()}),b(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Ke(),n.animate())}),b(L,a=>{u("miniState",a)});function B(a){a===void 0?ke(()=>{a=y.value===!0?0:g.value,B(Q.value*a)}):(n.isContainer.value===!0&&S.value===!0&&(m.value===!0||Math.abs(a)===g.value)&&(a+=Q.value*n.scrollbarWidth.value),be.value=a)}function M(a){ye.value=a}function ne(a){const d=a===!0?"remove":n.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Ke(){w!==null&&clearTimeout(w),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,w=setTimeout(()=>{w=null,ee.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ge(a){if(y.value!==!1)return;const d=g.value,C=U(a.distance.x,0,d);if(a.isFinal===!0){C>=Math.min(75,d)===!0?Z():(n.animate(),M(0),B(Q.value*d)),E.value=!1;return}B((o.lang.rtl===!0?S.value!==!0:S.value)?Math.max(d-C,0):Math.min(0,C-d)),M(U(C/d,0,1)),a.isFirst===!0&&(E.value=!0)}function _e(a){if(y.value!==!0)return;const d=g.value,C=a.direction===t.side,I=(o.lang.rtl===!0?C!==!0:C)?U(a.distance.x,0,d):0;if(a.isFinal===!0){Math.abs(I)<Math.min(75,d)===!0?(n.animate(),M(1),B(0)):A(),E.value=!1;return}B(Q.value*I),M(U(1-I/d,0,1)),a.isFirst===!0&&(E.value=!0)}function re(){f(!1),ne(!0)}function O(a,d){n.update(t.side,a,d)}function Je(a,d){a.value!==d&&(a.value=d)}function ue(a,d){O("size",a===!0?t.miniWidth:d)}return n.instances[t.side]=F,ue(t.miniToOverlay,g.value),O("space",H.value),O("offset",te.value),t.showIfAbove===!0&&t.modelValue!==!0&&y.value===!0&&t["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),ut(()=>{u("onLayout",H.value),u("miniState",L.value),k=t.showIfAbove===!0;const a=()=>{(y.value===!0?x:pe)(!1,!0)};if(n.totalWidth.value!==0){ke(a);return}p=b(n.totalWidth,()=>{p(),p=void 0,y.value===!1&&t.showIfAbove===!0&&m.value===!1?Z(!1):a()})}),Te(()=>{p!==void 0&&p(),w!==null&&(clearTimeout(w),w=null),y.value===!0&&re(),n.instances[t.side]===F&&(n.instances[t.side]=void 0,O("size",0),O("offset",0),O("space",!1))}),()=>{const a=[];m.value===!0&&(t.noSwipeOpen===!1&&a.push(lt($("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Xe.value)),a.push(qe("div",{ref:"backdrop",class:Pe.value,style:Fe.value,"aria-hidden":"true",onClick:A},void 0,"backdrop",t.noSwipeBackdrop!==!0&&y.value===!0,()=>je.value)));const d=L.value===!0&&l.mini!==void 0,C=[$("div",{...h,key:""+d,class:[Ue.value,h.class]},d===!0?l.mini():he(l.default))];return t.elevated===!0&&y.value===!0&&C.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(qe("aside",{ref:"content",class:Ne.value,style:We.value},C,"contentclose",t.noSwipeClose!==!0&&m.value===!0,()=>Ye.value)),$("div",{class:"q-drawer-container"},a)}}});const K=it("leftDrawerStore",()=>{const t=D(!0),l=()=>{t.value=!t.value},u=D(null),{user:h}=N(Qe());if(h.value){const o=h.value.role,r=Array.from(st);r.forEach(i=>i.children?(i.children.forEach(s=>s.path=i.path+"/"+s.path),r.push(i.children)):null);const f=r.flat();u.value=f.filter(i=>i.meta&&i.meta.requiresRole&&o.split("").some(s=>i.meta.requiresRole.includes(s))).map(i=>({title:i.name,caption:i.caption||"caption will be here",icon:i.icon||"person",link:i.path}))}else u.value=[{title:"\u0417\u0430\u0433\u043B\u0443\u0448\u043A\u0430",caption:"\u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B \u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0443\u0440\u043B\u044B",icon:"person",link:"/"}];return{leftDrawerOpen:v(()=>t.value),toggleLeftDrawer:l,userRoutes:u}}),St={__name:"LeftDrawer",setup(t){const{leftDrawerOpen:l}=N(K()),u=D(null);ct(()=>{const{userRoutes:e}=N(K());u.value=e.value});const{userRoutes:h}=N(K());return dt(()=>{u.value=h.value}),(e,o)=>G(l)?(T(),P(Lt,{key:0,"show-if-above":"",bordered:""},{default:q(()=>[_(bt,null,{default:q(()=>[_(le,{header:""},{default:q(()=>[X(" \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B ")]),_:1}),(T(!0),Y(mt,null,ft(G(h),(r,f)=>(T(),P(tt,{clickable:"",tag:"a",to:r.link,key:`r-${f}`},{default:q(()=>[r.icon?(T(),P(ge,{key:0,avatar:""},{default:q(()=>[_(vt,{name:r.icon},null,8,["name"])]),_:2},1024)):Be("",!0),_(ge,null,{default:q(()=>[_(le,null,{default:q(()=>[X(xe(r.title),1)]),_:2},1024),_(le,{caption:""},{default:q(()=>[X(xe(r.caption),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})):Be("",!0)}};var $t=J({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:l}){const u=v(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>$("div",{class:u.value},he(l.default))}}),Tt=J({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:l}){const u=v(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>$("div",{class:u.value,role:"toolbar"},he(l.default))}}),Mt=J({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:l,emit:u}){const{proxy:{$q:h}}=Oe(),e=$e(Me,z);if(e===z)return console.error("QHeader needs to be child of QLayout"),z;const o=D(parseInt(t.heightHint,10)),r=D(!0),f=v(()=>t.reveal===!0||e.view.value.indexOf("H")!==-1||h.platform.is.ios&&e.isContainer.value===!0),i=v(()=>{if(t.modelValue!==!0)return 0;if(f.value===!0)return r.value===!0?o.value:0;const c=o.value-e.scroll.value.position;return c>0?c:0}),s=v(()=>t.modelValue!==!0||f.value===!0&&r.value!==!0),n=v(()=>t.modelValue===!0&&s.value===!0&&t.reveal===!0),k=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),w=v(()=>{const c=e.rows.value.top,x={};return c[0]==="l"&&e.left.space===!0&&(x[h.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),c[2]==="r"&&e.right.space===!0&&(x[h.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),x});function p(c,x){e.update("header",c,x)}function m(c,x){c.value!==x&&(c.value=x)}function L({height:c}){m(o,c),p("size",c)}function g(c){n.value===!0&&m(r,!0),u("focusin",c)}b(()=>t.modelValue,c=>{p("space",c),m(r,!0),e.animate()}),b(i,c=>{p("offset",c)}),b(()=>t.reveal,c=>{c===!1&&m(r,t.modelValue)}),b(r,c=>{e.animate(),u("reveal",c)}),b(e.scroll,c=>{t.reveal===!0&&m(r,c.direction==="up"||c.position<=t.revealOffset||c.position-c.inflectionPoint<100)});const y={};return e.instances.header=y,t.modelValue===!0&&p("size",o.value),p("space",t.modelValue),p("offset",i.value),Te(()=>{e.instances.header===y&&(e.instances.header=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const c=ht(l.default,[]);return t.elevated===!0&&c.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push($(xt,{debounce:0,onResize:L})),$("header",{class:k.value,style:w.value,onFocusin:g},c)}}});const Ot={class:"account-menu"},Qt={key:0,class:"login-btn"},Et={key:1,class:"account-info"},zt={__name:"UserControl",setup(t){const{user:l,logout:u}=Qe();return(h,e)=>(T(),Y("div",Ot,[G(l)?(T(),Y("div",Et,[_(me,{color:"secondary",icon:"logout",label:"\u0412\u044B\u0439\u0442\u0438",onClick:G(u)},null,8,["onClick"])])):(T(),Y("div",Qt,[_(me,{color:"secondary",icon:"person",label:"\u0412\u043E\u0439\u0442\u0438",to:"/login"})]))]))}},At=Ee({name:"HeaderComponent",components:{UserControl:zt},setup(){const{toggleLeftDrawer:t}=K();return{toggleLeftDrawer:t}}});function Ht(t,l,u,h,e,o){const r=j("UserControl");return T(),P(Mt,{elevated:""},{default:q(()=>[_(Tt,null,{default:q(()=>[_(me,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),_($t,null,{default:q(()=>[X(" ArtisHelper ")]),_:1}),_(r)]),_:1})]),_:1})}var Vt=ze(At,[["render",Ht]]);const Pt=Ee({name:"MainLayout",components:{HeaderComponent:Vt,LeftDrawer:St},setup(){}});function Ft(t,l,u,h,e,o){const r=j("HeaderComponent"),f=j("LeftDrawer"),i=j("router-view");return T(),P(Ze,{view:"lHh Lpr lFf"},{default:q(()=>[_(r),_(f),_(et,null,{default:q(()=>[_(i)]),_:1})]),_:1})}var Zt=ze(Pt,[["render",Ft]]);export{Zt as default};
