import{_ as Ue,r as q,H as R,M as F,ad as z,K as C,J as I,Q as G,i as _e,j as w,m as je,o as rt,x as it,q as Ke,ap as st,t as S,aH as ze,g as ae,a6 as ut,af as ct,a1 as dt,z as ce,aw as vt,h as de,w as ne,aa as ft,ah as mt,v as ve,W as pt,c as ht,a as te,n as bt,l as gt,b as re,p as ye,e as Ie,f as Ce,an as _t,aI as yt,k as Ct,aJ as wt,u as Tt,B as He,G as W,aK as Be,T as ue,ae as Te,R as ie,N as se,I as ke,L as Ve,P as Qe,O as Z}from"./index.9d2e584e.js";import{Q as kt}from"./QSpinnerCube.5d4b85e1.js";import{u as ee}from"./dinners-store.c28bf982.js";import{Q as Oe}from"./QFile.75c1a69c.js";import{u as Pt,Q as xt,a as qt,C as St}from"./ClosePopup.e45ebab4.js";import{Q as $t}from"./QInput.caa53a51.js";import{j as Dt}from"./use-form.159f9b4c.js";import{Q as Lt}from"./QResizeObserver.7146e734.js";import{u as we,r as Rt,b as At}from"./QDialog.aee4cee7.js";import{b as Me,c as It}from"./selection.1e1542df.js";import{d as Bt,a as Vt,Q as Ee,c as Qt}from"./format.9bfce7d6.js";import{g as Fe,s as Ne}from"./touch.70a9dd44.js";import{u as Mt,a as Et}from"./use-dark.f56e6d5b.js";import{Q as Ft}from"./QCard.cd2c1def.js";import"./QChip.7e0e2fbf.js";import"./use-file-dom-props.fbf13579.js";import"./use-key-composition.a67d1709.js";import"./scroll.f5e2ceb0.js";const Nt={setup(){const e=q(null),a="dinners",{uploadFile:d}=ee();return{file:e,mode:a,uploadFile:d}}},Wt={class:"q-pa-md"},Ut={class:"q-gutter-md row items-start"};function jt(e,a,d,l,o,t){return R(),F("div",Wt,[z("div",Ut,[C(Oe,{modelValue:l.file,"onUpdate:modelValue":[a[0]||(a[0]=i=>l.file=i),a[1]||(a[1]=i=>l.uploadFile(l.file,l.mode))],label:"\u041E\u0431\u0435\u0434\u044B Senesys",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:I(()=>[C(G,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var Kt=Ue(Nt,[["render",jt]]);const zt={setup(){const e=q(null),a="artis",{uploadFile:d}=ee();return{file:e,mode:a,uploadFile:d}}},Ht={class:"q-pa-md"},Ot={class:"q-gutter-md row items-start"};function Xt(e,a,d,l,o,t){return R(),F("div",Ht,[z("div",Ot,[C(Oe,{modelValue:l.file,"onUpdate:modelValue":[a[0]||(a[0]=i=>l.file=i),a[1]||(a[1]=i=>l.uploadFile(l.file,l.mode))],label:"\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 1C7",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:I(()=>[C(G,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var Gt=Ue(zt,[["render",Xt]]);let Yt=0;const Jt=["click","keydown"],Zt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Yt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function en(e,a,d,l){const o=it(ze,_e);if(o===_e)return console.error("QTab/QRouteTab component needs to be child of QTabs"),_e;const{proxy:t}=ce(),i=q(null),h=q(null),$=q(null),N=w(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),b=w(()=>o.currentModel.value===e.name),Q=w(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(b.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),_=w(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),f=w(()=>e.disable===!0||o.hasFocus.value===!0||b.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function v(s,x){if(x!==!0&&i.value!==null&&i.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&ae(s);return}if(l===void 0){o.updateModel({name:e.name}),d("click",s);return}if(l.hasRouterLink.value===!0){const B=(D={})=>{let L;const E=D.to===void 0||vt(D.to,e.to)===!0?o.avoidRouteWatcher=Dt():null;return l.navigateToRouterLink(s,{...D,returnRouterError:!0}).catch(U=>{L=U}).then(U=>{if(E===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,L===void 0&&(U===void 0||U.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),D.returnRouterError===!0)return L!==void 0?Promise.reject(L):U})};d("click",s,B),s.defaultPrevented!==!0&&B();return}d("click",s)}function m(s){ut(s,[13,32])?v(s,!0):ct(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&o.onKbdNavigate(s.keyCode,t.$el)===!0&&ae(s),d("keydown",s)}function P(){const s=o.tabProps.value.narrowIndicator,x=[],B=S("div",{ref:$,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&x.push(S(G,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&x.push(S("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&x.push(e.alertIcon!==void 0?S(G,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):S("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&x.push(B);const D=[S("div",{class:"q-focus-helper",tabindex:-1,ref:i}),S("div",{class:_.value},dt(a.default,x))];return s===!1&&D.push(B),D}const M={name:w(()=>e.name),rootRef:h,tabIndicatorRef:$,routeData:l};je(()=>{o.unregisterTab(M)}),rt(()=>{o.registerTab(M)});function j(s,x){const B={ref:h,class:Q.value,tabindex:f.value,role:"tab","aria-selected":b.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:v,onKeydown:m,...x};return Ke(S(s,B,P()),[[st,N.value]])}return{renderTab:j,$tabs:o}}var tn=de({name:"QTab",props:Zt,emits:Jt,setup(e,{slots:a,emit:d}){const{renderTab:l}=en(e,a,d);return()=>l("div")}});function nn(e,a,d){const l=d===!0?["left","right"]:["top","bottom"];return`absolute-${a===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const an=["left","center","right","justify"];var on=de({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>an.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:a,emit:d}){const{proxy:l}=ce(),{$q:o}=l,{registerTick:t}=we(),{registerTick:i}=we(),{registerTick:h}=we(),{registerTimeout:$,removeTimeout:N}=Me(),{registerTimeout:b,removeTimeout:Q}=Me(),_=q(null),f=q(null),v=q(e.modelValue),m=q(!1),P=q(!0),M=q(!1),j=q(!1),s=[],x=q(0),B=q(!1);let D=null,L=null,E;const U=w(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:nn(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),fe=w(()=>{const n=x.value,r=v.value;for(let u=0;u<n;u++)if(s[u].name.value===r)return!0;return!1}),me=w(()=>`q-tabs__content--align-${m.value===!0?"left":j.value===!0?"justify":e.align}`),pe=w(()=>`q-tabs row no-wrap items-center q-tabs--${m.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),c=w(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+me.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=w(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),V=w(()=>e.vertical!==!0&&o.lang.rtl===!0),H=w(()=>Rt===!1&&V.value===!0);ne(V,J),ne(()=>e.modelValue,n=>{he({name:n,setCurrent:!0,skipEmit:!0})}),ne(()=>e.outsideArrows,oe);function he({name:n,setCurrent:r,skipEmit:u}){v.value!==n&&(u!==!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",n),(r===!0||e["onUpdate:modelValue"]===void 0)&&(Xe(v.value,n),v.value=n))}function oe(){t(()=>{Pe({width:_.value.offsetWidth,height:_.value.offsetHeight})})}function Pe(n){if(y.value===void 0||f.value===null)return;const r=n[y.value.container],u=Math.min(f.value[y.value.scroll],Array.prototype.reduce.call(f.value.children,(k,g)=>k+(g[y.value.content]||0),0)),T=r>0&&u>r;m.value=T,T===!0&&i(J),j.value=r<parseInt(e.breakpoint,10)}function Xe(n,r){const u=n!=null&&n!==""?s.find(k=>k.name.value===n):null,T=r!=null&&r!==""?s.find(k=>k.name.value===r):null;if(u&&T){const k=u.tabIndicatorRef.value,g=T.tabIndicatorRef.value;D!==null&&(clearTimeout(D),D=null),k.style.transition="none",k.style.transform="none",g.style.transition="none",g.style.transform="none";const p=k.getBoundingClientRect(),A=g.getBoundingClientRect();g.style.transform=e.vertical===!0?`translate3d(0,${p.top-A.top}px,0) scale3d(1,${A.height?p.height/A.height:1},1)`:`translate3d(${p.left-A.left}px,0,0) scale3d(${A.width?p.width/A.width:1},1,1)`,h(()=>{D=setTimeout(()=>{D=null,g.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",g.style.transform="none"},70)})}T&&m.value===!0&&Y(T.rootRef.value)}function Y(n){const{left:r,width:u,top:T,height:k}=f.value.getBoundingClientRect(),g=n.getBoundingClientRect();let p=e.vertical===!0?g.top-T:g.left-r;if(p<0){f.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(p),J();return}p+=e.vertical===!0?g.height-k:g.width-u,p>0&&(f.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(p),J())}function J(){const n=f.value;if(n===null)return;const r=n.getBoundingClientRect(),u=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);V.value===!0?(P.value=Math.ceil(u+r.width)<n.scrollWidth-1,M.value=u>0):(P.value=u>0,M.value=e.vertical===!0?Math.ceil(u+r.height)<n.scrollHeight:Math.ceil(u+r.width)<n.scrollWidth)}function xe(n){L!==null&&clearInterval(L),L=setInterval(()=>{Je(n)===!0&&O()},5)}function qe(){xe(H.value===!0?Number.MAX_SAFE_INTEGER:0)}function Se(){xe(H.value===!0?0:Number.MAX_SAFE_INTEGER)}function O(){L!==null&&(clearInterval(L),L=null)}function Ge(n,r){const u=Array.prototype.filter.call(f.value.children,A=>A===r||A.matches&&A.matches(".q-tab.q-focusable")===!0),T=u.length;if(T===0)return;if(n===36)return Y(u[0]),u[0].focus(),!0;if(n===35)return Y(u[T-1]),u[T-1].focus(),!0;const k=n===(e.vertical===!0?38:37),g=n===(e.vertical===!0?40:39),p=k===!0?-1:g===!0?1:void 0;if(p!==void 0){const A=V.value===!0?-1:1,K=u.indexOf(r)+p*A;return K>=0&&K<T&&(Y(u[K]),u[K].focus({preventScroll:!0})),!0}}const Ye=w(()=>H.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,r)=>{n.scrollLeft=-r}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,r)=>{n.scrollTop=r}}:{get:n=>n.scrollLeft,set:(n,r)=>{n.scrollLeft=r}});function Je(n){const r=f.value,{get:u,set:T}=Ye.value;let k=!1,g=u(r);const p=n<g?-1:1;return g+=p*5,g<0?(k=!0,g=0):(p===-1&&g<=n||p===1&&g>=n)&&(k=!0,g=n),T(r,g),J(),k}function $e(n,r){for(const u in n)if(n[u]!==r[u])return!1;return!0}function Ze(){let n=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const u=s.filter(p=>p.routeData!==void 0&&p.routeData.hasRouterLink.value===!0),{hash:T,query:k}=l.$route,g=Object.keys(k).length;for(const p of u){const A=p.routeData.exact.value===!0;if(p.routeData[A===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:K,query:be,matched:ot,href:lt}=p.routeData.resolvedLink.value,ge=Object.keys(be).length;if(A===!0){if(K!==T||ge!==g||$e(k,be)===!1)continue;n=p.name.value;break}if(K!==""&&K!==T||ge!==0&&$e(be,k)===!1)continue;const X={matchedLen:ot.length,queryDiff:g-ge,hrefLen:lt.length-K.length};if(X.matchedLen>r.matchedLen){n=p.name.value,r=X;continue}else if(X.matchedLen!==r.matchedLen)continue;if(X.queryDiff<r.queryDiff)n=p.name.value,r=X;else if(X.queryDiff!==r.queryDiff)continue;X.hrefLen>r.hrefLen&&(n=p.name.value,r=X)}n===null&&s.some(p=>p.routeData===void 0&&p.name.value===v.value)===!0||he({name:n,setCurrent:!0})}function et(n){if(N(),B.value!==!0&&_.value!==null&&n.target&&typeof n.target.closest=="function"){const r=n.target.closest(".q-tab");r&&_.value.contains(r)===!0&&(B.value=!0,m.value===!0&&Y(r))}}function tt(){$(()=>{B.value=!1},30)}function le(){Le.avoidRouteWatcher===!1?b(Ze):Q()}function De(){if(E===void 0){const n=ne(()=>l.$route.fullPath,le);E=()=>{n(),E=void 0}}}function nt(n){s.push(n),x.value++,oe(),n.routeData===void 0||l.$route===void 0?b(()=>{if(m.value===!0){const r=v.value,u=r!=null&&r!==""?s.find(T=>T.name.value===r):null;u&&Y(u.rootRef.value)}}):(De(),n.routeData.hasRouterLink.value===!0&&le())}function at(n){s.splice(s.indexOf(n),1),x.value--,oe(),E!==void 0&&n.routeData!==void 0&&(s.every(r=>r.routeData===void 0)===!0&&E(),le())}const Le={currentModel:v,tabProps:U,hasFocus:B,hasActiveTab:fe,registerTab:nt,unregisterTab:at,verifyRouteModel:le,updateModel:he,onKbdNavigate:Ge,avoidRouteWatcher:!1};pt(ze,Le);function Re(){D!==null&&clearTimeout(D),O(),E!==void 0&&E()}let Ae;return je(Re),ft(()=>{Ae=E!==void 0,Re()}),mt(()=>{Ae===!0&&De(),oe()}),()=>S("div",{ref:_,class:pe.value,role:"tablist",onFocusin:et,onFocusout:tt},[S(Lt,{onResize:Pe}),S("div",{ref:f,class:c.value,onScroll:J},ve(a.default)),S(G,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(P.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O}),S(G,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O})])}});function ln(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((d,l)=>{const o=parseFloat(d);o&&(a[l]=o)}),a}var rn=ht({name:"touch-swipe",beforeMount(e,{value:a,arg:d,modifiers:l}){if(l.mouse!==!0&&te.has.touch!==!0)return;const o=l.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:ln(d),direction:Fe(l),noop:bt,mouseStart(i){Ne(i,t)&&gt(i)&&(re(t,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ne(i,t)){const h=i.target;re(t,"temp",[[h,"touchmove","move","notPassiveCapture"],[h,"touchcancel","end","notPassiveCapture"],[h,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,h){te.is.firefox===!0&&ye(e,!0);const $=Ie(i);t.event={x:$.left,y:$.top,time:Date.now(),mouse:h===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){ae(i);return}const h=Date.now()-t.event.time;if(h===0)return;const $=Ie(i),N=$.left-t.event.x,b=Math.abs(N),Q=$.top-t.event.y,_=Math.abs(Q);if(t.event.mouse!==!0){if(b<t.sensitivity[1]&&_<t.sensitivity[1]){t.end(i);return}}else if(b<t.sensitivity[2]&&_<t.sensitivity[2])return;const f=b/h,v=_/h;t.direction.vertical===!0&&b<_&&b<100&&v>t.sensitivity[0]&&(t.event.dir=Q<0?"up":"down"),t.direction.horizontal===!0&&b>_&&_<100&&f>t.sensitivity[0]&&(t.event.dir=N<0?"left":"right"),t.direction.up===!0&&b<_&&Q<0&&b<100&&v>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&b<_&&Q>0&&b<100&&v>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&b>_&&N<0&&_<100&&f>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&b>_&&N>0&&_<100&&f>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ae(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),It(),t.styleCleanup=m=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};m===!0?setTimeout(P,50):P()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:h,distance:{x:b,y:_}})):t.end(i)},end(i){t.event!==void 0&&(Ce(t,"temp"),te.is.firefox===!0&&ye(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&ae(i),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const i=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";re(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}te.has.touch===!0&&re(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const d=e.__qtouchswipe;d!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&d.end(),d.handler=a.value),d.direction=Fe(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(Ce(a,"main"),Ce(a,"temp"),te.is.firefox===!0&&ye(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});const sn={name:{required:!0},disable:Boolean},We={setup(e,{slots:a}){return()=>S("div",{class:"q-panel scroll",role:"tabpanel"},ve(a.default))}},un={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},cn=["update:modelValue","beforeTransition","transition"];function dn(){const{props:e,emit:a,proxy:d}=ce(),{getCacheWithFn:l}=Pt();let o,t;const i=q(null),h=q(null);function $(c){const y=e.vertical===!0?"up":"left";L((d.$q.lang.rtl===!0?-1:1)*(c.direction===y?1:-1))}const N=w(()=>[[rn,$,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),b=w(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),Q=w(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),_=w(()=>`--q-transition-duration: ${e.transitionDuration}ms`),f=w(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),v=w(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),m=w(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);ne(()=>e.modelValue,(c,y)=>{const V=s(c)===!0?x(c):-1;t!==!0&&D(V===-1?0:V<x(y)?-1:1),i.value!==V&&(i.value=V,a("beforeTransition",c,y),Ct(()=>{a("transition",c,y)}))});function P(){L(1)}function M(){L(-1)}function j(c){a("update:modelValue",c)}function s(c){return c!=null&&c!==""}function x(c){return o.findIndex(y=>y.props.name===c&&y.props.disable!==""&&y.props.disable!==!0)}function B(){return o.filter(c=>c.props.disable!==""&&c.props.disable!==!0)}function D(c){const y=c!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(c===-1?b.value:Q.value):null;h.value!==y&&(h.value=y)}function L(c,y=i.value){let V=y+c;for(;V>-1&&V<o.length;){const H=o[V];if(H!==void 0&&H.props.disable!==""&&H.props.disable!==!0){D(c),t=!0,a("update:modelValue",H.props.name),setTimeout(()=>{t=!1});return}V+=c}e.infinite===!0&&o.length>0&&y!==-1&&y!==o.length&&L(c,c===-1?o.length:-1)}function E(){const c=x(e.modelValue);return i.value!==c&&(i.value=c),!0}function U(){const c=s(e.modelValue)===!0&&E()&&o[i.value];return e.keepAlive===!0?[S(wt,v.value,[S(m.value===!0?l(f.value,()=>({...We,name:f.value})):We,{key:f.value,style:_.value},()=>c)])]:[S("div",{class:"q-panel scroll",style:_.value,key:f.value,role:"tabpanel"},[c])]}function fe(){if(o.length!==0)return e.animated===!0?[S(_t,{name:h.value},U)]:U()}function me(c){return o=yt(ve(c.default,[])).filter(y=>y.props!==null&&y.props.slot===void 0&&s(y.props.name)===!0),o.length}function pe(){return o}return Object.assign(d,{next:P,previous:M,goTo:j}),{panelIndex:i,panelDirectives:N,updatePanelsList:me,updatePanelIndex:E,getPanelContent:fe,getEnabledPanels:B,getPanels:pe,isValidPanelName:s,keepAliveProps:v,needsUniqueKeepAliveWrapper:m,goToPanelByOffset:L,goToPanel:j,nextPanel:P,previousPanel:M}}var vn=de({name:"QTabPanel",props:sn,setup(e,{slots:a}){return()=>S("div",{class:"q-tab-panel",role:"tabpanel"},ve(a.default))}}),fn=de({name:"QTabPanels",props:{...un,...Mt},emits:cn,setup(e,{slots:a}){const d=ce(),l=Et(e,d.proxy.$q),{updatePanelsList:o,getPanelContent:t,panelDirectives:i}=dn(),h=w(()=>"q-tab-panels q-panel-parent"+(l.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(a),Tt("div",{class:h.value},t(),"pan",e.swipeable,()=>i.value))}});const mn={class:"q-gutter-y-md dinners__handled-data",style:{"max-width":"500px"}},pn={class:"date-pdf-form"},hn={class:"row items-center justify-end"},bn={key:0,class:"department-issues"},gn={__name:"DinnersHandledData",setup(e){const{handledData:a}=He(ee()),{download:d,downloadPDF:l,loadedDateRange:o}=ee(),t=o,i=t?q(t[t.length-1]):new Date,h=w(()=>new Date(i.value).toLocaleDateString()),$=q(null),N=Array.from(new Set(a.value.map(f=>f.Company).sort())),b=[];N.forEach((f,v)=>{b[v]={total:0},b[v].company=f}),a.value.forEach(f=>b.filter(v=>v.company==f.Company)[0].total+=f.Marks.length);const Q=f=>{let v=!1,m=[];return f=="\u0410\u0440\u0442\u0438\u0441"&&a.value.filter(P=>P.Department=="!\u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435!").length&&(v=!0,m=a.value.filter(P=>P.Department=="!\u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435!")),{show:v,undefinedEaters:m}},_=()=>{const f=new Date(i.value).toLocaleDateString();return l(f)};return(f,v)=>(R(),F("div",mn,[z("div",pn,[C($t,{filled:"",modelValue:W(h),"onUpdate:modelValue":v[1]||(v[1]=m=>Be(h)?h.value=m:null),square:"",class:"date-picker"},{append:I(()=>[C(G,{name:"event",class:"cursor-pointer"},{default:I(()=>[C(xt,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:I(()=>[C(qt,{modelValue:W(i),"onUpdate:modelValue":v[0]||(v[0]=m=>Be(i)?i.value=m:null),minimal:"",options:W(t)},{default:I(()=>[z("div",hn,[Ke(C(ue,{label:"\u041E\u041A",color:"primary",flat:""},null,512),[[St]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),C(ue,{color:"secondary",label:"PDF",icon:"download",square:"",class:"pdf-btn",onClick:Te(_,["prevent"])},null,8,["onClick"])]),C(Ft,null,{default:I(()=>[C(on,{modelValue:$.value,"onUpdate:modelValue":v[2]||(v[2]=m=>$.value=m),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:I(()=>[(R(),F(ie,null,se(b,(m,P)=>C(tn,{key:`label-${P}`,name:m.company,label:`${m.company} (${m.total})`},null,8,["name","label"])),64))]),_:1},8,["modelValue"]),C(At),C(fn,{modelValue:$.value,"onUpdate:modelValue":v[3]||(v[3]=m=>$.value=m),animated:""},{default:I(()=>[(R(),F(ie,null,se(b,(m,P)=>C(vn,{key:`panel-${P}`,name:m.company,class:"column"},{default:I(()=>[C(ue,{class:"btn-fixed-width",color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",icon:"download",onClick:Te(M=>W(d)(m.company),["prevent"])},null,8,["onClick"]),Q(m.company).show?(R(),F("div",bn,[C(Bt,{bordered:"",separator:""},{default:I(()=>[C(Vt,null,{default:I(()=>[(R(!0),F(ie,null,se(Q(m.company).undefinedEaters,(M,j)=>(R(),ke(Qt,{key:j},{default:I(()=>[C(Ee,null,{default:I(()=>[Ve(Qe(M.Name),1)]),_:2},1024),(R(!0),F(ie,null,se(M.Tips,(s,x)=>(R(),ke(Ee,{caption:"",key:`tip-${x}`},{default:I(()=>[Ve("\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u044D\u0442\u043E "+Qe(s),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):Z("",!0)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])]),_:1})]))}};const _n={class:"dinners"},yn=z("h4",{class:"dinners__title"},"\u041E\u0431\u0435\u0434\u044B",-1),Cn={key:0,class:"dinners__description"},wn=z("p",null,"\u0414\u043B\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u0430 \u043F\u043E \u043E\u0431\u0435\u0434\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u0438\u0437 Senesys \u0438 1\u04217.",-1),Tn=z("p",null,"Seneys \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0435 \u0441\u0430\u043C\u0438, \u043E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u0438\u0437 1\u04217 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435 \u0443 \u0410\u0444\u043E\u043D\u0438\u043D\u0430.",-1),kn=z("p",null,"\u041F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0425\u0435\u043B\u043F\u0435\u0440 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0445 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 XLSX.",-1),Pn=z("p",null,"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0434\u043E \u0438\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044C, \u043D\u0430\u0436\u0430\u0442\u044C \u0424\u0430\u0439\u043B - \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A - \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 XLSX.",-1),xn=[wn,Tn,kn,Pn],qn={key:1,class:"dinners__upload"},Sn={key:3,class:"loader"},$n={key:4,class:"dinners__result"},On={__name:"DinnersPage",setup(e){const a=q(!1),{files:d,hdIsReady:l}=He(ee()),{upload:o}=ee(),t=()=>{a.value=!0};return(i,h)=>(R(),F("div",_n,[yn,!W(l)&&!a.value?(R(),F("section",Cn,xn)):Z("",!0),!W(l)&&!a.value?(R(),F("div",qn,[C(Kt,{class:"up1"}),C(Gt,{class:"up2"})])):Z("",!0),W(d).dinners&&W(d).artis&&!W(l)&&!a.value?(R(),ke(ue,{key:2,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:h[0]||(h[0]=Te($=>{W(o)(),t()},["prevent"]))})):Z("",!0),!W(l)&&a.value?(R(),F("div",Sn,[C(kt,{color:"primary",size:"5.5em"})])):Z("",!0),W(l)?(R(),F("section",$n,[C(gn)])):Z("",!0)]))}};export{On as default};
