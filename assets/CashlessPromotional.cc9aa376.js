import{i as st,e as Ce,r as C,a as g,b as We,o as rt,aU as je,d as it,ay as ut,h as L,W as le,V as ct,af as dt,Q as G,P as vt,j as fe,aE as ft,c as me,w as te,I as mt,a2 as ht,ah as pt,g as he,a5 as bt,$ as ae,K as gt,a6 as _t,a7 as ue,a8 as Te,ab as Ue,ac as Pe,an as yt,aV as wt,n as kt,aW as Ct,f as Tt,X as Pt,D as xt,ao as ee,p as F,y as se,ad as B,v as w,t as D,u as N,s as pe,E as ne,q as Y,x as Oe,B as $e,A as ce,ae as de,m as St}from"./index.d1b0ce96.js";import{l as qt}from"./use-form.de12502b.js";import{Q as $t}from"./QResizeObserver.5ded857c.js";import{c as xe}from"./position-engine.c51006b7.js";import{b as Fe,d as Bt}from"./selection.651de191.js";import{r as At,Q as Xe}from"./QTable.250e5a24.js";import{g as He,s as Ne}from"./touch.3df10340.js";import{u as Lt}from"./use-render-cache.1a7235d4.js";import{u as Rt,a as Vt}from"./use-dark.eb4ba390.js";import{Q as It}from"./QExpansionItem.643c5a31.js";import{Q as Dt}from"./QFile.380856b2.js";import{Q as Be}from"./QInput.f6696d79.js";import{Q as Mt}from"./QToggle.a6d92573.js";import{Q as ve}from"./QTd.49df9a13.js";import"./scroll.7e2bcd44.js";import"./QSeparator.b9320f50.js";import"./QList.0dae7542.js";import"./QChip.a074864f.js";import"./QItem.41547944.js";import"./QDialog.2959846d.js";import"./use-prevent-scroll.5b599ae2.js";import"./use-key-composition.98822fb6.js";import"./format.3e32b8d9.js";import"./use-file-dom-props.98997532.js";let Qt=0;const Et=["click","keydown"],Ut={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Qt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ft(e,r,i,l){const a=st(je,Ce);if(a===Ce)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Ce;const{proxy:t}=fe(),o=C(null),_=C(null),P=C(null),m=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),d=g(()=>a.currentModel.value===e.name),b=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(d.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),p=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),S=g(()=>e.disable===!0||a.hasFocus.value===!0||d.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function A(c,R){if(R!==!0&&o.value!==null&&o.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&le(c);return}if(l===void 0){a.updateModel({name:e.name}),i("click",c);return}if(l.hasRouterLink.value===!0){const u=(v={})=>{let x;const M=v.to===void 0||ft(v.to,e.to)===!0?a.avoidRouteWatcher=qt():null;return l.navigateToRouterLink(c,{...v,returnRouterError:!0}).catch(I=>{x=I}).then(I=>{if(M===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,x===void 0&&(I===void 0||I.message!==void 0&&I.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),v.returnRouterError===!0)return x!==void 0?Promise.reject(x):I})};i("click",c,u),c.defaultPrevented!==!0&&u();return}i("click",c)}function V(c){ct(c,[13,32])?A(c,!0):dt(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&a.onKbdNavigate(c.keyCode,t.$el)===!0&&le(c),i("keydown",c)}function U(){const c=a.tabProps.value.narrowIndicator,R=[],u=L("div",{ref:P,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&R.push(L(G,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&R.push(L("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&R.push(e.alertIcon!==void 0?L(G,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):L("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&R.push(u);const v=[L("div",{class:"q-focus-helper",tabindex:-1,ref:o}),L("div",{class:p.value},vt(r.default,R))];return c===!1&&v.push(u),v}const H={name:g(()=>e.name),rootRef:_,tabIndicatorRef:P,routeData:l};We(()=>{a.unregisterTab(H)}),rt(()=>{a.registerTab(H)});function W(c,R){const u={ref:_,class:b.value,tabindex:S.value,role:"tab","aria-selected":d.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:A,onKeydown:V,...R};return it(L(c,u,U()),[[ut,m.value]])}return{renderTab:W,$tabs:a}}var Se=me({name:"QTab",props:Ut,emits:Et,setup(e,{slots:r,emit:i}){const{renderTab:l}=Ft(e,r,i);return()=>l("div")}});function Ht(e,r,i){const l=i===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const Nt=["left","center","right","justify"];var zt=me({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:i}){const{proxy:l}=fe(),{$q:a}=l,{registerTick:t}=xe(),{registerTick:o}=xe(),{registerTick:_}=xe(),{registerTimeout:P,removeTimeout:m}=Fe(),{registerTimeout:d,removeTimeout:b}=Fe(),p=C(null),S=C(null),A=C(e.modelValue),V=C(!1),U=C(!0),H=C(!1),W=C(!1),c=[],R=C(0),u=C(!1);let v=null,x=null,M;const I=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ht(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),be=g(()=>{const n=R.value,s=A.value;for(let f=0;f<n;f++)if(c[f].name.value===s)return!0;return!1}),ge=g(()=>`q-tabs__content--align-${V.value===!0?"left":W.value===!0?"justify":e.align}`),_e=g(()=>`q-tabs row no-wrap items-center q-tabs--${V.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),h=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),T=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),E=g(()=>e.vertical!==!0&&a.lang.rtl===!0),O=g(()=>At===!1&&E.value===!0);te(E,Z),te(()=>e.modelValue,n=>{ye({name:n,setCurrent:!0,skipEmit:!0})}),te(()=>e.outsideArrows,re);function ye({name:n,setCurrent:s,skipEmit:f}){A.value!==n&&(f!==!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",n),(s===!0||e["onUpdate:modelValue"]===void 0)&&(Ke(A.value,n),A.value=n))}function re(){t(()=>{Ae({width:p.value.offsetWidth,height:p.value.offsetHeight})})}function Ae(n){if(T.value===void 0||S.value===null)return;const s=n[T.value.container],f=Math.min(S.value[T.value.scroll],Array.prototype.reduce.call(S.value.children,($,k)=>$+(k[T.value.content]||0),0)),q=s>0&&f>s;V.value=q,q===!0&&o(Z),W.value=s<parseInt(e.breakpoint,10)}function Ke(n,s){const f=n!=null&&n!==""?c.find($=>$.name.value===n):null,q=s!=null&&s!==""?c.find($=>$.name.value===s):null;if(f&&q){const $=f.tabIndicatorRef.value,k=q.tabIndicatorRef.value;v!==null&&(clearTimeout(v),v=null),$.style.transition="none",$.style.transform="none",k.style.transition="none",k.style.transform="none";const y=$.getBoundingClientRect(),Q=k.getBoundingClientRect();k.style.transform=e.vertical===!0?`translate3d(0,${y.top-Q.top}px,0) scale3d(1,${Q.height?y.height/Q.height:1},1)`:`translate3d(${y.left-Q.left}px,0,0) scale3d(${Q.width?y.width/Q.width:1},1,1)`,_(()=>{v=setTimeout(()=>{v=null,k.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",k.style.transform="none"},70)})}q&&V.value===!0&&J(q.rootRef.value)}function J(n){const{left:s,width:f,top:q,height:$}=S.value.getBoundingClientRect(),k=n.getBoundingClientRect();let y=e.vertical===!0?k.top-q:k.left-s;if(y<0){S.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(y),Z();return}y+=e.vertical===!0?k.height-$:k.width-f,y>0&&(S.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(y),Z())}function Z(){const n=S.value;if(n===null)return;const s=n.getBoundingClientRect(),f=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);E.value===!0?(U.value=Math.ceil(f+s.width)<n.scrollWidth-1,H.value=f>0):(U.value=f>0,H.value=e.vertical===!0?Math.ceil(f+s.height)<n.scrollHeight:Math.ceil(f+s.width)<n.scrollWidth)}function Le(n){x!==null&&clearInterval(x),x=setInterval(()=>{Je(n)===!0&&X()},5)}function Re(){Le(O.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ve(){Le(O.value===!0?0:Number.MAX_SAFE_INTEGER)}function X(){x!==null&&(clearInterval(x),x=null)}function Ye(n,s){const f=Array.prototype.filter.call(S.value.children,Q=>Q===s||Q.matches&&Q.matches(".q-tab.q-focusable")===!0),q=f.length;if(q===0)return;if(n===36)return J(f[0]),f[0].focus(),!0;if(n===35)return J(f[q-1]),f[q-1].focus(),!0;const $=n===(e.vertical===!0?38:37),k=n===(e.vertical===!0?40:39),y=$===!0?-1:k===!0?1:void 0;if(y!==void 0){const Q=E.value===!0?-1:1,j=f.indexOf(s)+y*Q;return j>=0&&j<q&&(J(f[j]),f[j].focus({preventScroll:!0})),!0}}const Ge=g(()=>O.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,s)=>{n.scrollLeft=-s}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,s)=>{n.scrollTop=s}}:{get:n=>n.scrollLeft,set:(n,s)=>{n.scrollLeft=s}});function Je(n){const s=S.value,{get:f,set:q}=Ge.value;let $=!1,k=f(s);const y=n<k?-1:1;return k+=y*5,k<0?($=!0,k=0):(y===-1&&k<=n||y===1&&k>=n)&&($=!0,k=n),q(s,k),Z(),$}function Ie(n,s){for(const f in n)if(n[f]!==s[f])return!1;return!0}function Ze(){let n=null,s={matchedLen:0,queryDiff:9999,hrefLen:0};const f=c.filter(y=>y.routeData!==void 0&&y.routeData.hasRouterLink.value===!0),{hash:q,query:$}=l.$route,k=Object.keys($).length;for(const y of f){const Q=y.routeData.exact.value===!0;if(y.routeData[Q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:j,query:we,matched:ot,href:lt}=y.routeData.resolvedLink.value,ke=Object.keys(we).length;if(Q===!0){if(j!==q||ke!==k||Ie($,we)===!1)continue;n=y.name.value;break}if(j!==""&&j!==q||ke!==0&&Ie(we,$)===!1)continue;const K={matchedLen:ot.length,queryDiff:k-ke,hrefLen:lt.length-j.length};if(K.matchedLen>s.matchedLen){n=y.name.value,s=K;continue}else if(K.matchedLen!==s.matchedLen)continue;if(K.queryDiff<s.queryDiff)n=y.name.value,s=K;else if(K.queryDiff!==s.queryDiff)continue;K.hrefLen>s.hrefLen&&(n=y.name.value,s=K)}n===null&&c.some(y=>y.routeData===void 0&&y.name.value===A.value)===!0||ye({name:n,setCurrent:!0})}function et(n){if(m(),u.value!==!0&&p.value!==null&&n.target&&typeof n.target.closest=="function"){const s=n.target.closest(".q-tab");s&&p.value.contains(s)===!0&&(u.value=!0,V.value===!0&&J(s))}}function tt(){P(()=>{u.value=!1},30)}function ie(){Me.avoidRouteWatcher===!1?d(Ze):b()}function De(){if(M===void 0){const n=te(()=>l.$route.fullPath,ie);M=()=>{n(),M=void 0}}}function nt(n){c.push(n),R.value++,re(),n.routeData===void 0||l.$route===void 0?d(()=>{if(V.value===!0){const s=A.value,f=s!=null&&s!==""?c.find(q=>q.name.value===s):null;f&&J(f.rootRef.value)}}):(De(),n.routeData.hasRouterLink.value===!0&&ie())}function at(n){c.splice(c.indexOf(n),1),R.value--,re(),M!==void 0&&n.routeData!==void 0&&(c.every(s=>s.routeData===void 0)===!0&&M(),ie())}const Me={currentModel:A,tabProps:I,hasFocus:u,hasActiveTab:be,registerTab:nt,unregisterTab:at,verifyRouteModel:ie,updateModel:ye,onKbdNavigate:Ye,avoidRouteWatcher:!1};mt(je,Me);function Qe(){v!==null&&clearTimeout(v),X(),M!==void 0&&M()}let Ee;return We(Qe),ht(()=>{Ee=M!==void 0,Qe()}),pt(()=>{Ee===!0&&De(),re()}),()=>L("div",{ref:p,class:_e.value,role:"tablist",onFocusin:et,onFocusout:tt},[L($t,{onResize:Ae}),L("div",{ref:S,class:h.value,onScroll:Z},he(r.default)),L(G,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(U.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Re,onTouchstartPassive:Re,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X}),L(G,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(H.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ve,onTouchstartPassive:Ve,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X})])}});function Wt(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,l)=>{const a=parseFloat(i);a&&(r[l]=a)}),r}var jt=bt({name:"touch-swipe",beforeMount(e,{value:r,arg:i,modifiers:l}){if(l.mouse!==!0&&ae.has.touch!==!0)return;const a=l.mouseCapture===!0?"Capture":"",t={handler:r,sensitivity:Wt(i),direction:He(l),noop:gt,mouseStart(o){Ne(o,t)&&_t(o)&&(ue(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(Ne(o,t)){const _=o.target;ue(t,"temp",[[_,"touchmove","move","notPassiveCapture"],[_,"touchcancel","end","notPassiveCapture"],[_,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,_){ae.is.firefox===!0&&Te(e,!0);const P=Ue(o);t.event={x:P.left,y:P.top,time:Date.now(),mouse:_===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){le(o);return}const _=Date.now()-t.event.time;if(_===0)return;const P=Ue(o),m=P.left-t.event.x,d=Math.abs(m),b=P.top-t.event.y,p=Math.abs(b);if(t.event.mouse!==!0){if(d<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(d<t.sensitivity[2]&&p<t.sensitivity[2])return;const S=d/_,A=p/_;t.direction.vertical===!0&&d<p&&d<100&&A>t.sensitivity[0]&&(t.event.dir=b<0?"up":"down"),t.direction.horizontal===!0&&d>p&&p<100&&S>t.sensitivity[0]&&(t.event.dir=m<0?"left":"right"),t.direction.up===!0&&d<p&&b<0&&d<100&&A>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&d<p&&b>0&&d<100&&A>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&d>p&&m<0&&p<100&&S>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&d>p&&m>0&&p<100&&S>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(le(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Bt(),t.styleCleanup=V=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const U=()=>{document.body.classList.remove("no-pointer-events--children")};V===!0?setTimeout(U,50):U()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:_,distance:{x:d,y:p}})):t.end(o)},end(o){t.event!==void 0&&(Pe(t,"temp"),ae.is.firefox===!0&&Te(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&le(o),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const o=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";ue(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}ae.has.touch===!0&&ue(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const i=e.__qtouchswipe;i!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&i.end(),i.handler=r.value),i.direction=He(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(Pe(r,"main"),Pe(r,"temp"),ae.is.firefox===!0&&Te(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchswipe)}});const Ot={name:{required:!0},disable:Boolean},ze={setup(e,{slots:r}){return()=>L("div",{class:"q-panel scroll",role:"tabpanel"},he(r.default))}},Xt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Kt=["update:modelValue","beforeTransition","transition"];function Yt(){const{props:e,emit:r,proxy:i}=fe(),{getCache:l}=Lt();let a,t;const o=C(null),_=C(null);function P(h){const T=e.vertical===!0?"up":"left";x((i.$q.lang.rtl===!0?-1:1)*(h.direction===T?1:-1))}const m=g(()=>[[jt,P,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),S=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),A=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),V=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);te(()=>e.modelValue,(h,T)=>{const E=c(h)===!0?R(h):-1;t!==!0&&v(E===-1?0:E<R(T)?-1:1),o.value!==E&&(o.value=E,r("beforeTransition",h,T),kt(()=>{r("transition",h,T)}))});function U(){x(1)}function H(){x(-1)}function W(h){r("update:modelValue",h)}function c(h){return h!=null&&h!==""}function R(h){return a.findIndex(T=>T.props.name===h&&T.props.disable!==""&&T.props.disable!==!0)}function u(){return a.filter(h=>h.props.disable!==""&&h.props.disable!==!0)}function v(h){const T=h!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(h===-1?d.value:b.value):null;_.value!==T&&(_.value=T)}function x(h,T=o.value){let E=T+h;for(;E!==-1&&E<a.length;){const O=a[E];if(O!==void 0&&O.props.disable!==""&&O.props.disable!==!0){v(h),t=!0,r("update:modelValue",O.props.name),setTimeout(()=>{t=!1});return}E+=h}e.infinite===!0&&a.length!==0&&T!==-1&&T!==a.length&&x(h,h===-1?a.length:-1)}function M(){const h=R(e.modelValue);return o.value!==h&&(o.value=h),!0}function I(){const h=c(e.modelValue)===!0&&M()&&a[o.value];return e.keepAlive===!0?[L(Ct,A.value,[L(V.value===!0?l(S.value,()=>({...ze,name:S.value})):ze,{key:S.value,style:p.value},()=>h)])]:[L("div",{class:"q-panel scroll",style:p.value,key:S.value,role:"tabpanel"},[h])]}function be(){if(a.length!==0)return e.animated===!0?[L(yt,{name:_.value},I)]:I()}function ge(h){return a=wt(he(h.default,[])).filter(T=>T.props!==null&&T.props.slot===void 0&&c(T.props.name)===!0),a.length}function _e(){return a}return Object.assign(i,{next:U,previous:H,goTo:W}),{panelIndex:o,panelDirectives:m,updatePanelsList:ge,updatePanelIndex:M,getPanelContent:be,getEnabledPanels:u,getPanels:_e,isValidPanelName:c,keepAliveProps:A,needsUniqueKeepAliveWrapper:V,goToPanelByOffset:x,goToPanel:W,nextPanel:U,previousPanel:H}}var qe=me({name:"QTabPanel",props:Ot,setup(e,{slots:r}){return()=>L("div",{class:"q-tab-panel",role:"tabpanel"},he(r.default))}}),Gt=me({name:"QTabPanels",props:{...Xt,...Rt},emits:Kt,setup(e,{slots:r}){const i=fe(),l=Vt(e,i.proxy.$q),{updatePanelsList:a,getPanelContent:t,panelDirectives:o}=Yt(),_=g(()=>"q-tab-panels q-panel-parent"+(l.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(r),Tt("div",{class:_.value},t(),"pan",e.swipeable,()=>o.value))}});const z=Pt("cashlessPromotional",()=>{const{user:e}=xt(),r=C(null),i=C(null),l=C(null),a=C(null),t=C(null),o=C(null),_=C(null),P=C(null),m=g(()=>({analysis:r.value,settlements:i.value,turningSheet1012:l.value,turningSheet4106:a.value,consumption:t.value})),d=g(()=>o.value),b=async()=>{await ee.get("/accounting/cashless-promotions/result/download",{headers:{Authorization:`Bearer ${e.token}`},responseType:"blob"}).then(u=>{const v=u.headers.get("Content-Type");console.log(v);const x=`${new Date().toLocaleDateString()} \u0411\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u0441\u0447\u0435\u0442, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.xlsx`;console.log(x);const M=URL.createObjectURL(u.data),I=document.createElement("a");I.href=M,I.download=x,document.body.appendChild(I),I.click(),document.body.removeChild(I),window.URL.revokeObjectURL(M)})},p=(u,v)=>{switch(v){case"analysis":r.value=u;break;case"settlements":i.value=u;break;case"10.12":l.value=u;break;case"41.06":a.value=u;break;case"consumption":t.value=u;break}},S=async(u=0)=>{if(!t.value)return;const v=new FormData;v.append("consumption",t.value),await ee.post("/accounting/cashless-promotions/consumption/upload",v,{headers:{Authorization:`Bearer ${e.token}`,"Content-Type":"multipart/form-data",Sum:u}}).then(x=>{P.value=x.data.data}).catch(x=>console.log(x))},A=g(()=>P.value),V=async()=>{await ee.get("/accounting/cashless-promotional/handbook",{headers:{Authorization:`Bearer ${e.token}`}}).then(u=>{_.value=u.data.data}).catch(u=>console.log(u))},U=async()=>{const u=new FormData;u.append("analysis",m.value.analysis),u.append("settlements",m.value.settlements),u.append("10.12",m.value.turningSheet1012),u.append("41.06",m.value.turningSheet4106),await ee.post("/accounting/cashless-promotional/handbook/upload",u,{headers:{Authorization:`Bearer ${e.token}`,"Content-Type":"multipart/form-data"}}).then(v=>{o.value=v.data.data}).catch(v=>console.log(v))},H=g(()=>_.value),W=g(()=>_.value.data.filter(v=>v.user_cashless));return{uploadFile:p,upload:U,saveXLSX:b,uploadConsumption:S,getHandbook:V,updateHB:async u=>{await ee.post("/accounting/cashless-promotional/handbook/update",{...u},{headers:{Authorization:`Bearer ${e.token}`}}).then(v=>{V()}).catch(v=>console.log(v))},resetCashless:async u=>{await ee.post("/accounting/cashless-promotional/handbook/resetCashless",{...u},{headers:{Authorization:`Bearer ${e.token}`}}).then(v=>{V()}).catch(v=>console.log(v))},userHB:W,actualHB:H,consumption:t,cashlessPromotional:A,files:m,handbookSummary:d}}),Jt={class:"q-pa-md"},Zt={class:"q-gutter-md row items-start"},oe={__name:"FileUploadTXT",props:["mode","label"],setup(e){const r=e,i=C(null),{uploadFile:l}=z();return(a,t)=>(F(),se("div",Jt,[B("div",Zt,[w(Dt,{modelValue:i.value,"onUpdate:modelValue":[t[0]||(t[0]=o=>i.value=o),t[1]||(t[1]=o=>N(l)(i.value,r.mode))],label:r.label,square:"",filled:"","use-chips":"",accept:".txt",style:{width:"400px"}},{prepend:D(()=>[w(G,{name:"attach_file"})]),_:1},8,["modelValue","label"])])]))}};const en={key:0,class:"cashless-promotions__table"},tn={__name:"HandbookTable",setup(e){const{updateHB:r,getHandbook:i}=z(),{actualHB:l}=pe(z()),a=C(""),t=[["name","\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"],["cash_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0437\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435"],["cashless_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u043F\u043E \u0411/\u041D"],["cashless_percent","% \u0411/\u041D"],["is_cashless","\u0421\u0442\u0430\u0442\u0443\u0441 \u0411/\u041D"]],o=async m=>{await r(m)},_=g(()=>t.map(m=>({name:m[0],required:!0,label:m[1],field:m[0],format:d=>m[0]=="cashless_percent"?`${d} %`:`${d}`,align:"left",sortable:!0}))),P={page:1,rowsPerPage:0};return(m,d)=>N(l)?(F(),se("div",en,[w(Xe,{title:"\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",rows:N(l).data,columns:_.value,class:"my-sticky-header-table","row-key":"name",pagination:P,filter:a.value},{"top-right":D(b=>[w(Be,{dense:"",debounce:"300",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=p=>a.value=p),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:D(()=>[w(G,{name:"search"})]),_:1},8,["modelValue"]),w(ne,{flat:"",round:"",dense:"",icon:b.inFullscreen?"fullscreen_exit":"fullscreen",onClick:b.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"body-cell-is_cashless":D(b=>[typeof b.row.is_cashless=="boolean"?(F(),Y(ve,{key:0,props:b},{default:D(()=>[w(Mt,{name:b.row.name,modelValue:b.row.is_cashless,"onUpdate:modelValue":[p=>b.row.is_cashless=p,p=>o(b.row)],size:"xs",color:"green"},null,8,["name","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])):(F(),Y(ve,{key:1,props:b},{default:D(()=>[Oe($e(b.row.is_cashless),1)]),_:2},1032,["props"]))]),_:1},8,["rows","columns","filter"])])):ce("",!0)}};const nn={class:"cashless-promotions__handbook"},an={class:"upload-section"},on={class:"upload-section__turning-sheets"},ln={class:"upload-section__reports"},sn={class:"summary-section"},rn={class:"table-section"},un={__name:"HandbookCashless",setup(e){const{upload:r}=z(),{handbookSummary:i,files:l}=pe(z()),a=g(()=>l.value&&l.value.analysis&&l.value.settlements&&l.value.turningSheet1012&&l.value.turningSheet4106);return(t,o)=>(F(),se("div",nn,[w(It,{label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430",width:"100%"},{default:D(()=>[B("section",an,[B("div",on,[w(oe,{mode:"10.12",label:"\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 10.12.txt"}),w(oe,{mode:"41.06",label:"\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 41.06.txt"})]),B("div",ln,[w(oe,{mode:"analysis",label:"TXT \u0410\u043D\u0430\u043B\u0438\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438"}),w(oe,{mode:"settlements",label:"TXT \u0420\u0430\u0441\u0447\u0435\u0442\u044B \u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438"})]),a.value?(F(),Y(ne,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",style:{height:"61px"},onClick:o[0]||(o[0]=de(_=>N(r)(),["prevent"]))})):ce("",!0)])]),_:1}),B("section",sn,[B("p",null,$e(N(i)),1)]),B("section",rn,[w(tn)])]))}};const cn={class:"cashless-promotions__consumption"},dn={class:"upload-section"},vn={class:"inputs"},fn={class:"buttons"},mn={__name:"PromotionalConsumption",setup(e){const{cashlessPromotional:r,files:i}=pe(z()),{uploadConsumption:l,saveXLSX:a}=z(),t=C(null),o=g(()=>i.value&&i.value.consumption);return(_,P)=>(F(),se("div",cn,[B("section",dn,[B("div",vn,[w(oe,{mode:"consumption",label:"\u0421\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u0443\u0447\u0435\u0442 \u041C\u041F\u0417"}),w(Be,{modelValue:t.value,"onUpdate:modelValue":P[0]||(P[0]=m=>t.value=m),modelModifiers:{number:!0},type:"number",label:"\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: 1% \u0432\u044B\u0440\u0443\u0447\u043A\u0438",square:"",filled:"",style:{width:"400px"}},null,8,["modelValue"])]),B("div",fn,[o.value?(F(),Y(ne,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",style:{height:"61px"},onClick:P[1]||(P[1]=de(m=>N(l)(t.value),["prevent"]))})):ce("",!0),N(r)&&N(r).length?(F(),Y(ne,{key:1,class:"btn-fixed-width",color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",icon:"download",style:{height:"61px"},onClick:de(N(a),["prevent"])},null,8,["onClick"])):ce("",!0)])])]))}},hn={__name:"UserHandbookTable",setup(e){const{getHandbook:r,resetCashless:i}=z(),{userHB:l}=pe(z()),a=C(""),t=[["name","\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"],["cash_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0437\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435"],["cashless_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u043F\u043E \u0411/\u041D"],["cashless_percent","% \u0411/\u041D"],["is_cashless","\u0411/\u041D \u0438\u043B\u0438 \u041D\u0410\u041B"],["user_cashless","\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]],o=async m=>{await i(m)},_=g(()=>t.map(m=>({name:m[0],required:!0,label:m[1],field:m[0],format:d=>m[0]=="cashless_percent"?`${d} %`:m[0]=="is_cashless"?d?"\u0411/\u041D":"\u041D\u0410\u041B":`${d}`,align:"left",sortable:!0}))),P={page:1,rowsPerPage:0};return(m,d)=>(F(),Y(Xe,{title:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",rows:N(l),columns:_.value,class:"my-sticky-header-table","row-key":"name",pagination:P,filter:a.value},{"top-right":D(b=>[w(Be,{dense:"",debounce:"300",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=p=>a.value=p),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:D(()=>[w(G,{name:"search"})]),_:1},8,["modelValue"]),w(ne,{flat:"",round:"",dense:"",icon:b.inFullscreen?"fullscreen_exit":"fullscreen",onClick:b.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"body-cell-user_cashless":D(b=>[typeof b.row.user_cashless=="boolean"?(F(),Y(ve,{key:0,props:b},{default:D(()=>[w(ne,{icon:"delete",color:"primary",onClick:de(p=>o(b.row),["prevent"])},null,8,["onClick"])]),_:2},1032,["props"])):(F(),Y(ve,{key:1,props:b},{default:D(()=>[Oe($e(b.row.user_cashless),1)]),_:2},1032,["props"]))]),_:1},8,["rows","columns","filter"]))}};const pn={class:"cashless-promotional"},bn=B("h4",null,"\u0420\u0430\u0441\u0447\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u043B\u044F \u0411\u041F",-1),gn=B("p",null,"\u0414\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0442\u0447\u0435\u0442\u0430 \u0421\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u0443\u0447\u0435\u0442 \u041C\u041F\u0417 \u0432 1\u04217.7 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 xls.",-1),_n=B("p",null,"\u0422\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0443\u043C\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043D\u0430\u0434\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043C\u0435\u0436\u0434\u0443 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C\u0438 (\u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E).",-1),yn=B("h4",null,"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",-1),wn=B("p",null,"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0430\u043C\u0438.",-1),kn=B("p",null,"\u041D\u0430 \u044D\u0442\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0441\u0432\u0435\u0436\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043F\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u043C \u0438 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043E\u0431\u0437\u043E\u0440\u043E\u043C \u043F\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C.",-1),Cn=B("p",null,'\u0422\u0430\u043A\u0436\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u0435\u0441\u043B\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F.',-1),Tn=B("h4",null,"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",-1),Pn=B("p",null,'\u0421\u043F\u0438\u0441\u043E\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u043F\u0440\u0438\u0437\u043D\u0430\u043A "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u044B\u043B \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C.',-1),xn=B("p",null,'\u0427\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043F\u0440\u0438\u0437\u043D\u0430\u043A "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u043D\u0430 \u043E\u0431\u0449\u0438\u0445 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F\u0445, \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u0435\u0433\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.',-1),Gn={__name:"CashlessPromotional",setup(e){const{getHandbook:r}=z(),i=C("consumption");return te(i,l=>{localStorage.setItem("tab",JSON.stringify(l))}),St(async()=>{await r(),i.value=localStorage.getItem("tab")?JSON.parse(localStorage.getItem("tab")):"handbook"}),(l,a)=>(F(),se("div",pn,[w(zt,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=t=>i.value=t),class:"text-black","active-color":"secondary","indicator-color":"secondary",align:"justify","narrow-indicator":""},{default:D(()=>[w(Se,{name:"consumption",label:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u0430"}),w(Se,{name:"handbook",label:"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"}),w(Se,{name:"settings",label:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"})]),_:1},8,["modelValue"]),w(Gt,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=t=>i.value=t),animated:""},{default:D(()=>[w(qe,{class:"panel",name:"consumption"},{default:D(()=>[bn,gn,_n,w(mn)]),_:1}),w(qe,{class:"panel",name:"handbook"},{default:D(()=>[yn,wn,kn,Cn,w(un)]),_:1}),w(qe,{class:"panel",name:"settings"},{default:D(()=>[Tn,Pn,xn,w(hn)]),_:1})]),_:1},8,["modelValue"])]))}};export{Gn as default};
