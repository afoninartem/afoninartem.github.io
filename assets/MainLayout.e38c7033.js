import{Q as Ze,a as et}from"./QLayout.dde0ba09.js";import{b as W,Q as ue,a as tt,c as ge,d as at}from"./format.9bfce7d6.js";import{c as ot,a as P,n as nt,l as rt,b as U,p as le,d as Ce,s as ie,e as fe,f as se,g as ut,h as G,i as z,r as D,j as f,w as b,o as lt,k as ke,m as $e,q as it,t as $,u as qe,v as he,x as Te,y as Oe,z as Me,A as st,B as N,C as Ee,D as ct,E as dt,F as ft,G as ve,H as T,I as A,J as q,K as _,L as X,M as Y,N as vt,Q as mt,O as Be,P as xe,R as ht,S as pt,T as me,U as Qe,_ as ze,V as j}from"./index.9d2e584e.js";import{c as yt,u as bt,a as wt,b as _t,d as gt,e as Ct,f as kt}from"./selection.1e1542df.js";import{u as qt,a as Bt}from"./use-dark.f56e6d5b.js";import{g as De,s as Le}from"./touch.70a9dd44.js";import{Q as xt}from"./QResizeObserver.7146e734.js";import"./scroll.f5e2ceb0.js";function ce(t,l,r){const m=fe(t);let e,a=m.left-l.event.x,u=m.top-l.event.y,h=Math.abs(a),i=Math.abs(u);const s=l.direction;s.horizontal===!0&&s.vertical!==!0?e=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=u<0?"up":"down":s.up===!0&&u<0?(e="up",h>i&&(s.left===!0&&a<0?e="left":s.right===!0&&a>0&&(e="right"))):s.down===!0&&u>0?(e="down",h>i&&(s.left===!0&&a<0?e="left":s.right===!0&&a>0&&(e="right"))):s.left===!0&&a<0?(e="left",h<i&&(s.up===!0&&u<0?e="up":s.down===!0&&u>0&&(e="down"))):s.right===!0&&a>0&&(e="right",h<i&&(s.up===!0&&u<0?e="up":s.down===!0&&u>0&&(e="down")));let n=!1;if(e===void 0&&r===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};e=l.event.lastDir,n=!0,e==="left"||e==="right"?(m.left-=a,h=0,a=0):(m.top-=u,i=0,u=0)}return{synthetic:n,payload:{evt:t,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:m,direction:e,isFirst:l.event.isFirst,isFinal:r===!0,duration:Date.now()-l.event.time,distance:{x:h,y:i},offset:{x:a,y:u},delta:{x:m.left-l.event.lastX,y:m.top-l.event.lastY}}}}let Dt=0;var de=ot({name:"touch-pan",beforeMount(t,{value:l,modifiers:r}){if(r.mouse!==!0&&P.has.touch!==!0)return;function m(a,u){r.mouse===!0&&u===!0?ut(a):(r.stop===!0&&ie(a),r.prevent===!0&&Ce(a))}const e={uid:"qvtp_"+Dt++,handler:l,modifiers:r,direction:De(r),noop:nt,mouseStart(a){Le(a,e)&&rt(a)&&(U(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(Le(a,e)){const u=a.target;U(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,u){if(P.is.firefox===!0&&le(t,!0),e.lastEvt=a,u===!0||r.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ce(s),a.cancelBubble===!0&&ie(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:s}}ie(a)}const{left:h,top:i}=fe(a);e.event={x:h,y:i,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:i}},move(a){if(e.event===void 0)return;const u=fe(a),h=u.left-e.event.x,i=u.top-e.event.y;if(h===0&&i===0)return;e.lastEvt=a;const s=e.event.mouse===!0,n=()=>{m(a,s);let p;r.preserveCursor!==!0&&r.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),yt(),e.styleCleanup=v=>{if(e.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),s===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{L(),v()},50):L()}else v!==void 0&&v()}};if(e.event.detected===!0){e.event.isFirst!==!0&&m(a,e.event.mouse);const{payload:p,synthetic:v}=ce(a,e,!1);p!==void 0&&(e.handler(p)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&n(),e.event.lastX=p.position.left,e.event.lastY=p.position.top,e.event.lastDir=v===!0?void 0:p.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){n(),e.event.detected=!0,e.move(a);return}const k=Math.abs(h),w=Math.abs(i);k!==w&&(e.direction.horizontal===!0&&k>w||e.direction.vertical===!0&&k<w||e.direction.up===!0&&k<w&&i<0||e.direction.down===!0&&k<w&&i>0||e.direction.left===!0&&k>w&&h<0||e.direction.right===!0&&k>w&&h>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,u){if(e.event!==void 0){if(se(e,"temp"),P.is.firefox===!0&&le(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ce(a===void 0?e.lastEvt:a,e).payload);const{payload:h}=ce(a===void 0?e.lastEvt:a,e,!0),i=()=>{e.handler(h)};e.styleCleanup!==void 0?e.styleCleanup(i):i()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";U(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}P.has.touch===!0&&U(e,"main",[[t,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,l){const r=t.__qtouchpan;r!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&r.end(),r.handler=l.value),r.direction=De(l.modifiers))},beforeUnmount(t){const l=t.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),se(l,"main"),se(l,"temp"),P.is.firefox===!0&&le(t,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete t.__qtouchpan)}});const Se=150;var Lt=G({name:"QDrawer",inheritAttrs:!1,props:{...bt,...qt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...wt,"onLayout","miniState"],setup(t,{slots:l,emit:r,attrs:m}){const e=Me(),{proxy:{$q:a}}=e,u=Bt(t,a),{preventBodyScroll:h}=kt(),{registerTimeout:i,removeTimeout:s}=_t(),n=Te(Oe,z);if(n===z)return console.error("QDrawer needs to be child of QLayout"),z;let k,w=null,p;const v=D(t.behavior==="mobile"||t.behavior!=="desktop"&&n.totalWidth.value<=t.breakpoint),L=f(()=>t.mini===!0&&v.value!==!0),g=f(()=>L.value===!0?t.miniWidth:t.width),y=D(t.showIfAbove===!0&&v.value===!1?!0:t.modelValue===!0),c=f(()=>t.persistent!==!0&&(v.value===!0||Pe.value===!0));function x(o,d){if(He(),o!==!1&&n.animate(),B(0),v.value===!0){const C=n.instances[R.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),O(1),n.isContainer.value!==!0&&h(!0)}else O(0),o!==!1&&oe(!1);i(()=>{o!==!1&&oe(!0),d!==!0&&r("show",o)},Se)}function pe(o,d){Ve(),o!==!1&&n.animate(),O(0),B(E.value*g.value),ne(),d!==!0?i(()=>{r("hide",o)},Se):s()}const{show:J,hide:H}=gt({showing:y,hideOnRouteChange:c,handleShow:x,handleHide:pe}),{addToHistory:He,removeFromHistory:Ve}=Ct(y,H,c),F={belowBreakpoint:v,hide:H},S=f(()=>t.side==="right"),E=f(()=>(a.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),ye=D(0),Q=D(!1),Z=D(!1),be=D(g.value*E.value),R=f(()=>S.value===!0?"left":"right"),ee=f(()=>y.value===!0&&v.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:g.value:0),te=f(()=>t.overlay===!0||t.miniToOverlay===!0||n.view.value.indexOf(S.value?"R":"L")>-1||a.platform.is.ios===!0&&n.isContainer.value===!0),V=f(()=>t.overlay===!1&&y.value===!0&&v.value===!1),Pe=f(()=>t.overlay===!0&&y.value===!0&&v.value===!1),Ae=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&Q.value===!1?" hidden":"")),Fe=f(()=>({backgroundColor:`rgba(0,0,0,${ye.value*.4})`})),we=f(()=>S.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Re=f(()=>S.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Ie=f(()=>{const o={};return n.header.space===!0&&we.value===!1&&(te.value===!0?o.top=`${n.header.offset}px`:n.header.space===!0&&(o.top=`${n.header.size}px`)),n.footer.space===!0&&Re.value===!1&&(te.value===!0?o.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(o.bottom=`${n.footer.size}px`)),o}),We=f(()=>{const o={width:`${g.value}px`,transform:`translateX(${be.value}px)`};return v.value===!0?o:Object.assign(o,Ie.value)}),Ue=f(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),Ne=f(()=>`q-drawer q-drawer--${t.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(Q.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(te.value===!0||V.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(we.value===!0?" q-drawer--top-padding":""))),Xe=f(()=>{const o=a.lang.rtl===!0?t.side:R.value;return[[de,Ge,void 0,{[o]:!0,mouse:!0}]]}),Ye=f(()=>{const o=a.lang.rtl===!0?R.value:t.side;return[[de,_e,void 0,{[o]:!0,mouse:!0}]]}),je=f(()=>{const o=a.lang.rtl===!0?R.value:t.side;return[[de,_e,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){Je(v,t.behavior==="mobile"||t.behavior!=="desktop"&&n.totalWidth.value<=t.breakpoint)}b(v,o=>{o===!0?(k=y.value,y.value===!0&&H(!1)):t.overlay===!1&&t.behavior!=="mobile"&&k!==!1&&(y.value===!0?(B(0),O(0),ne()):J(!1))}),b(()=>t.side,(o,d)=>{n.instances[d]===F&&(n.instances[d]=void 0,n[d].space=!1,n[d].offset=0),n.instances[o]=F,n[o].size=g.value,n[o].space=V.value,n[o].offset=ee.value}),b(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),b(()=>t.behavior+t.breakpoint,ae),b(n.isContainer,o=>{y.value===!0&&h(o!==!0),o===!0&&ae()}),b(n.scrollbarWidth,()=>{B(y.value===!0?0:void 0)}),b(ee,o=>{M("offset",o)}),b(V,o=>{r("onLayout",o),M("space",o)}),b(S,()=>{B()}),b(g,o=>{B(),re(t.miniToOverlay,o)}),b(()=>t.miniToOverlay,o=>{re(o,g.value)}),b(()=>a.lang.rtl,()=>{B()}),b(()=>t.mini,()=>{t.modelValue===!0&&(Ke(),n.animate())}),b(L,o=>{r("miniState",o)});function B(o){o===void 0?ke(()=>{o=y.value===!0?0:g.value,B(E.value*o)}):(n.isContainer.value===!0&&S.value===!0&&(v.value===!0||Math.abs(o)===g.value)&&(o+=E.value*n.scrollbarWidth.value),be.value=o)}function O(o){ye.value=o}function oe(o){const d=o===!0?"remove":n.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Ke(){w!==null&&clearTimeout(w),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,w=setTimeout(()=>{w=null,Z.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ge(o){if(y.value!==!1)return;const d=g.value,C=W(o.distance.x,0,d);if(o.isFinal===!0){C>=Math.min(75,d)===!0?J():(n.animate(),O(0),B(E.value*d)),Q.value=!1;return}B((a.lang.rtl===!0?S.value!==!0:S.value)?Math.max(d-C,0):Math.min(0,C-d)),O(W(C/d,0,1)),o.isFirst===!0&&(Q.value=!0)}function _e(o){if(y.value!==!0)return;const d=g.value,C=o.direction===t.side,I=(a.lang.rtl===!0?C!==!0:C)?W(o.distance.x,0,d):0;if(o.isFinal===!0){Math.abs(I)<Math.min(75,d)===!0?(n.animate(),O(1),B(0)):H(),Q.value=!1;return}B(E.value*I),O(W(1-I/d,0,1)),o.isFirst===!0&&(Q.value=!0)}function ne(){h(!1),oe(!0)}function M(o,d){n.update(t.side,o,d)}function Je(o,d){o.value!==d&&(o.value=d)}function re(o,d){M("size",o===!0?t.miniWidth:d)}return n.instances[t.side]=F,re(t.miniToOverlay,g.value),M("space",V.value),M("offset",ee.value),t.showIfAbove===!0&&t.modelValue!==!0&&y.value===!0&&t["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),lt(()=>{r("onLayout",V.value),r("miniState",L.value),k=t.showIfAbove===!0;const o=()=>{(y.value===!0?x:pe)(!1,!0)};if(n.totalWidth.value!==0){ke(o);return}p=b(n.totalWidth,()=>{p(),p=void 0,y.value===!1&&t.showIfAbove===!0&&v.value===!1?J(!1):o()})}),$e(()=>{p!==void 0&&p(),w!==null&&(clearTimeout(w),w=null),y.value===!0&&ne(),n.instances[t.side]===F&&(n.instances[t.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const o=[];v.value===!0&&(t.noSwipeOpen===!1&&o.push(it($("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Xe.value)),o.push(qe("div",{ref:"backdrop",class:Ae.value,style:Fe.value,"aria-hidden":"true",onClick:H},void 0,"backdrop",t.noSwipeBackdrop!==!0&&y.value===!0,()=>je.value)));const d=L.value===!0&&l.mini!==void 0,C=[$("div",{...m,key:""+d,class:[Ue.value,m.class]},d===!0?l.mini():he(l.default))];return t.elevated===!0&&y.value===!0&&C.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(qe("aside",{ref:"content",class:Ne.value,style:We.value},C,"contentclose",t.noSwipeClose!==!0&&v.value===!0,()=>Ye.value)),$("div",{class:"q-drawer-container"},o)}}});const K=st("leftDrawerStore",()=>{const t=D(!0),l=()=>{t.value=!t.value},r=D(null),{user:m}=N(Ee());if(m.value){const a=m.value.role,u=Array.from(ct);u.forEach(i=>i.children?(i.children.forEach(s=>s.path=i.path+"/"+s.path),u.push(i.children)):null);const h=u.flat();r.value=h.filter(i=>i.meta&&i.meta.requiresRole&&a.split("").some(s=>i.meta.requiresRole.includes(s))).map(i=>({title:i.name,caption:i.caption||"caption will be here",icon:i.icon||"person",link:i.path}))}else r.value=[{title:"\u0417\u0430\u0433\u043B\u0443\u0448\u043A\u0430",caption:"\u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B \u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0443\u0440\u043B\u044B",icon:"person",link:"/"}];return{leftDrawerOpen:f(()=>t.value),toggleLeftDrawer:l,userRoutes:r}}),St={__name:"LeftDrawer",setup(t){const{leftDrawerOpen:l}=N(K()),r=D(null);return dt(()=>{const{userRoutes:m}=N(K());r.value=m.value}),ft(()=>{const{userRoutes:m}=N(K());r.value=m.value}),(m,e)=>ve(l)?(T(),A(Lt,{key:0,"show-if-above":"",bordered:""},{default:q(()=>[_(at,null,{default:q(()=>[_(ue,{header:""},{default:q(()=>[X(" \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B ")]),_:1}),(T(!0),Y(ht,null,vt(r.value,(a,u)=>(T(),A(tt,{clickable:"",tag:"a",to:a.link,key:`r-${u}`},{default:q(()=>[a.icon?(T(),A(ge,{key:0,avatar:""},{default:q(()=>[_(mt,{name:a.icon},null,8,["name"])]),_:2},1024)):Be("",!0),_(ge,null,{default:q(()=>[_(ue,null,{default:q(()=>[X(xe(a.title),1)]),_:2},1024),_(ue,{caption:""},{default:q(()=>[X(xe(a.caption),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})):Be("",!0)}};var $t=G({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:l}){const r=f(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>$("div",{class:r.value},he(l.default))}}),Tt=G({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:l}){const r=f(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>$("div",{class:r.value,role:"toolbar"},he(l.default))}}),Ot=G({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:l,emit:r}){const{proxy:{$q:m}}=Me(),e=Te(Oe,z);if(e===z)return console.error("QHeader needs to be child of QLayout"),z;const a=D(parseInt(t.heightHint,10)),u=D(!0),h=f(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||m.platform.is.ios&&e.isContainer.value===!0),i=f(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?a.value:0;const c=a.value-e.scroll.value.position;return c>0?c:0}),s=f(()=>t.modelValue!==!0||h.value===!0&&u.value!==!0),n=f(()=>t.modelValue===!0&&s.value===!0&&t.reveal===!0),k=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const c=e.rows.value.top,x={};return c[0]==="l"&&e.left.space===!0&&(x[m.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),c[2]==="r"&&e.right.space===!0&&(x[m.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),x});function p(c,x){e.update("header",c,x)}function v(c,x){c.value!==x&&(c.value=x)}function L({height:c}){v(a,c),p("size",c)}function g(c){n.value===!0&&v(u,!0),r("focusin",c)}b(()=>t.modelValue,c=>{p("space",c),v(u,!0),e.animate()}),b(i,c=>{p("offset",c)}),b(()=>t.reveal,c=>{c===!1&&v(u,t.modelValue)}),b(u,c=>{e.animate(),r("reveal",c)}),b(e.scroll,c=>{t.reveal===!0&&v(u,c.direction==="up"||c.position<=t.revealOffset||c.position-c.inflectionPoint<100)});const y={};return e.instances.header=y,t.modelValue===!0&&p("size",a.value),p("space",t.modelValue),p("offset",i.value),$e(()=>{e.instances.header===y&&(e.instances.header=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const c=pt(l.default,[]);return t.elevated===!0&&c.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push($(xt,{debounce:0,onResize:L})),$("header",{class:k.value,style:w.value,onFocusin:g},c)}}});const Mt={class:"account-menu"},Et={key:0,class:"login-btn"},Qt={key:1,class:"account-info"},zt={__name:"UserControl",setup(t){const{user:l,logout:r}=Ee();return(m,e)=>(T(),Y("div",Mt,[ve(l)?(T(),Y("div",Qt,[_(me,{color:"secondary",icon:"logout",label:"\u0412\u044B\u0439\u0442\u0438",onClick:ve(r)},null,8,["onClick"])])):(T(),Y("div",Et,[_(me,{color:"secondary",icon:"person",label:"\u0412\u043E\u0439\u0442\u0438",to:"/login"})]))]))}},Ht=Qe({name:"HeaderComponent",components:{UserControl:zt},setup(){const{toggleLeftDrawer:t}=K();return{toggleLeftDrawer:t}}});function Vt(t,l,r,m,e,a){const u=j("UserControl");return T(),A(Ot,{elevated:""},{default:q(()=>[_(Tt,null,{default:q(()=>[_(me,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),_($t,null,{default:q(()=>[X(" ArtisHelper ")]),_:1}),_(u)]),_:1})]),_:1})}var Pt=ze(Ht,[["render",Vt]]);const At=Qe({name:"MainLayout",components:{HeaderComponent:Pt,LeftDrawer:St},setup(){}});function Ft(t,l,r,m,e,a){const u=j("HeaderComponent"),h=j("LeftDrawer"),i=j("router-view");return T(),A(Ze,{view:"lHh Lpr lFf"},{default:q(()=>[_(u),_(h),_(et,null,{default:q(()=>[_(i)]),_:1})]),_:1})}var Gt=ze(At,[["render",Ft]]);export{Gt as default};
