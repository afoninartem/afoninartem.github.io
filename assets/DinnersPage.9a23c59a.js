import{r as R,j as b,z as ue,s as ut,g as ne,a as re,t as S,h as ve,aj as ct,d as dt,_ as Ke,H as U,M as K,ad as G,K as D,J as O,Q as ae,i as we,m as Xe,o as ft,x as vt,q as He,ao as mt,ap as Ye,a6 as ht,ai as pt,a1 as bt,aq as gt,w as de,aa as yt,ae as _t,v as _e,W as Ct,c as xt,n as wt,l as Tt,b as he,p as Te,e as Be,f as Pe,an as Pt,ar as kt,k as St,as as qt,u as Ft,B as Ge,G as X,at as Ee,T as ye,ah as Se,R as pe,N as be,I as qe,L as Me,P as Qe,O as fe}from"./index.cdc896ab.js";import{u as se}from"./dinners-store.3096eb2c.js";import{Q as Dt,u as ke,r as At,a as Vt}from"./QSeparator.82c60760.js";import{u as $t,b as It,c as Rt,e as Lt,d as Bt,f as Et,g as Ne,i as Mt}from"./use-key-composition.6378741b.js";import{u as Qt,Q as Nt}from"./QInput.a4f6884b.js";import{k as zt,b as ze,c as jt,j as Ot,h as Ut,Q as je,i as Wt}from"./format.851958cb.js";import{u as Kt,Q as Xt,a as Ht,C as Yt}from"./ClosePopup.c7d5a214.js";import{Q as Gt}from"./QResizeObserver.e8411feb.js";import{g as Oe,s as Ue}from"./touch.70a9dd44.js";import{u as Jt,a as Zt}from"./use-dark.1c1b0f64.js";import{Q as en}from"./QCard.59e9b819.js";import"./scroll.6f829543.js";function ie(e,l,f,i){const a=[];return e.forEach(t=>{i(t)===!0?a.push(t):l.push({failedPropValidation:f,file:t})}),a}function ge(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),ne(e)}const tn={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},nn=["rejected"];function an({editable:e,dnd:l,getFileInput:f,addFilesToQueue:i}){const{props:a,emit:t,proxy:o}=ue(),C=R(null),A=b(()=>a.accept!==void 0?a.accept.split(",").map(c=>(c=c.trim(),c==="*"?"*/":(c.endsWith("/*")&&(c=c.slice(0,c.length-1)),c.toUpperCase()))):null),Q=b(()=>parseInt(a.maxFiles,10)),_=b(()=>parseInt(a.maxTotalSize,10));function E(c){if(e.value)if(c!==Object(c)&&(c={target:null}),c.target!==null&&c.target.matches('input[type="file"]')===!0)c.clientX===0&&c.clientY===0&&ut(c);else{const s=f();s&&s!==c.target&&s.click(c)}}function x(c){e.value&&c&&i(null,c)}function h(c,s,q,L){let d=Array.from(s||c.target.files);const T=[],V=()=>{T.length>0&&t("rejected",T)};if(a.accept!==void 0&&A.value.indexOf("*/")===-1&&(d=ie(d,T,"accept",g=>A.value.some(B=>g.type.toUpperCase().startsWith(B)||g.name.toUpperCase().endsWith(B))),d.length===0))return V();if(a.maxFileSize!==void 0){const g=parseInt(a.maxFileSize,10);if(d=ie(d,T,"max-file-size",B=>B.size<=g),d.length===0)return V()}if(a.multiple!==!0&&d.length>0&&(d=[d[0]]),d.forEach(g=>{g.__key=g.webkitRelativePath+g.lastModified+g.name+g.size}),L===!0){const g=q.map(B=>B.__key);d=ie(d,T,"duplicate",B=>g.includes(B.__key)===!1)}if(d.length===0)return V();if(a.maxTotalSize!==void 0){let g=L===!0?q.reduce((B,te)=>B+te.size,0):0;if(d=ie(d,T,"max-total-size",B=>(g+=B.size,g<=_.value)),d.length===0)return V()}if(typeof a.filter=="function"){const g=a.filter(d);d=ie(d,T,"filter",B=>g.includes(B))}if(a.maxFiles!==void 0){let g=L===!0?q.length:0;if(d=ie(d,T,"max-files",()=>(g++,g<=Q.value)),d.length===0)return V()}if(V(),d.length>0)return d}function m(c){ge(c),l.value!==!0&&(l.value=!0)}function r(c){ne(c),(c.relatedTarget!==null||re.is.safari!==!0?c.relatedTarget!==C.value:document.elementsFromPoint(c.clientX,c.clientY).includes(C.value)===!1)===!0&&(l.value=!1)}function F(c){ge(c);const s=c.dataTransfer.files;s.length>0&&i(null,s),l.value=!1}function N(c){if(l.value===!0)return S("div",{ref:C,class:`q-${c}__dnd absolute-full`,onDragenter:ge,onDragover:ge,onDragleave:r,onDrop:F})}return Object.assign(o,{pickFiles:E,addFiles:x}),{pickFiles:E,addFiles:x,onDragover:m,onDragleave:r,processFiles:h,getDndNode:N,maxFilesNumber:Q,maxTotalSizeNumber:_}}var Je=ve({name:"QFile",inheritAttrs:!1,props:{...$t,...It,...tn,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Rt,...nn],setup(e,{slots:l,emit:f,attrs:i}){const{proxy:a}=ue(),t=Lt(),o=R(null),C=R(!1),A=Bt(e),{pickFiles:Q,onDragover:_,onDragleave:E,processFiles:x,getDndNode:h}=an({editable:t.editable,dnd:C,getFileInput:le,addFilesToQueue:v}),m=Qt(e),r=b(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),F=b(()=>Ne(r.value)),N=b(()=>r.value.map(y=>y.name).join(", ")),c=b(()=>zt(r.value.reduce((y,M)=>y+M.size,0))),s=b(()=>({totalSize:c.value,filesNumber:r.value.length,maxFiles:e.maxFiles})),q=b(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:A.value,...i,id:t.targetUid.value,disabled:t.editable.value!==!0})),L=b(()=>"q-file q-field--auto-height"+(C.value===!0?" q-file--dnd":"")),d=b(()=>e.multiple===!0&&e.append===!0);function T(y){const M=r.value.slice();M.splice(y,1),g(M)}function V(y){const M=r.value.findIndex(y);M>-1&&T(M)}function g(y){f("update:modelValue",e.multiple===!0?y:y[0])}function B(y){y.keyCode===13&&dt(y)}function te(y){(y.keyCode===13||y.keyCode===32)&&Q(y)}function le(){return o.value}function v(y,M){const W=x(y,M,r.value,d.value),ce=le();ce!=null&&(ce.value=""),W!==void 0&&((e.multiple===!0?e.modelValue&&W.every(J=>r.value.includes(J)):e.modelValue===W[0])||g(d.value===!0?r.value.concat(W):W))}function P(){return[S("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function z(){if(l.file!==void 0)return r.value.length===0?P():r.value.map((M,W)=>l.file({index:W,file:M,ref:this}));if(l.selected!==void 0)return r.value.length===0?P():l.selected({files:r.value,ref:this});if(e.useChips===!0)return r.value.length===0?P():r.value.map((M,W)=>S(Dt,{key:"file-"+W,removable:t.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{T(W)}},()=>S("span",{class:"ellipsis",textContent:M.name})));const y=e.displayValue!==void 0?e.displayValue:N.value;return y.length>0?[S("div",{class:e.inputClass,style:e.inputStyle,textContent:y})]:P()}function H(){const y={ref:o,...q.value,...m.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:v};return e.multiple===!0&&(y.multiple=!0),S("input",y)}return Object.assign(t,{fieldClass:L,emitValue:g,hasValue:F,inputRef:o,innerValue:r,floatingLabel:b(()=>F.value===!0||Ne(e.displayValue)),computedCounter:b(()=>{if(e.counterLabel!==void 0)return e.counterLabel(s.value);const y=e.maxFiles;return`${r.value.length}${y!==void 0?" / "+y:""} (${c.value})`}),getControlChild:()=>h("file"),getControl:()=>{const y={ref:t.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return t.editable.value===!0&&Object.assign(y,{onDragover:_,onDragleave:E,onKeydown:B,onKeyup:te}),S("div",y,[H()].concat(z()))}}),Object.assign(a,{removeAtIndex:T,removeFile:V,getNativeElement:()=>o.value}),ct(a,"nativeEl",()=>o.value),Et(t)}});const ln={setup(){const e=R(null),l="dinners",{uploadFile:f}=se();return{file:e,mode:l,uploadFile:f}}},on={class:"q-pa-md"},rn={class:"q-gutter-md row items-start"};function sn(e,l,f,i,a,t){return U(),K("div",on,[G("div",rn,[D(Je,{modelValue:i.file,"onUpdate:modelValue":[l[0]||(l[0]=o=>i.file=o),l[1]||(l[1]=o=>i.uploadFile(i.file,i.mode))],label:"\u041E\u0431\u0435\u0434\u044B Senesys",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:O(()=>[D(ae,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var un=Ke(ln,[["render",sn]]);const cn={setup(){const e=R(null),l="artis",{uploadFile:f}=se();return{file:e,mode:l,uploadFile:f}}},dn={class:"q-pa-md"},fn={class:"q-gutter-md row items-start"};function vn(e,l,f,i,a,t){return U(),K("div",dn,[G("div",fn,[D(Je,{modelValue:i.file,"onUpdate:modelValue":[l[0]||(l[0]=o=>i.file=o),l[1]||(l[1]=o=>i.uploadFile(i.file,i.mode))],label:"\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 1C7",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:O(()=>[D(ae,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var mn=Ke(cn,[["render",vn]]);let hn=0;const pn=["click","keydown"],bn={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${hn++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function gn(e,l,f,i){const a=vt(Ye,we);if(a===we)return console.error("QTab/QRouteTab component needs to be child of QTabs"),we;const{proxy:t}=ue(),o=R(null),C=R(null),A=R(null),Q=b(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),_=b(()=>a.currentModel.value===e.name),E=b(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(_.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(i!==void 0?i.linkClass.value:"")),x=b(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),h=b(()=>e.disable===!0||a.hasFocus.value===!0||_.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function m(s,q){if(q!==!0&&o.value!==null&&o.value.focus(),e.disable===!0){i!==void 0&&i.hasRouterLink.value===!0&&ne(s);return}if(i===void 0){a.updateModel({name:e.name}),f("click",s);return}if(i.hasRouterLink.value===!0){const L=(d={})=>{let T;const V=d.to===void 0||gt(d.to,e.to)===!0?a.avoidRouteWatcher=Mt():null;return i.navigateToRouterLink(s,{...d,returnRouterError:!0}).catch(g=>{T=g}).then(g=>{if(V===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,T===void 0&&(g===void 0||g.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),d.returnRouterError===!0)return T!==void 0?Promise.reject(T):g})};f("click",s,L),s.defaultPrevented!==!0&&L();return}f("click",s)}function r(s){ht(s,[13,32])?m(s,!0):pt(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&a.onKbdNavigate(s.keyCode,t.$el)===!0&&ne(s),f("keydown",s)}function F(){const s=a.tabProps.value.narrowIndicator,q=[],L=S("div",{ref:A,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&q.push(S(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&q.push(S("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&q.push(e.alertIcon!==void 0?S(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):S("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&q.push(L);const d=[S("div",{class:"q-focus-helper",tabindex:-1,ref:o}),S("div",{class:x.value},bt(l.default,q))];return s===!1&&d.push(L),d}const N={name:b(()=>e.name),rootRef:C,tabIndicatorRef:A,routeData:i};Xe(()=>{a.unregisterTab(N)}),ft(()=>{a.registerTab(N)});function c(s,q){const L={ref:C,class:E.value,tabindex:h.value,role:"tab","aria-selected":_.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:m,onKeydown:r,...q};return He(S(s,L,F()),[[mt,Q.value]])}return{renderTab:c,$tabs:a}}var yn=ve({name:"QTab",props:bn,emits:pn,setup(e,{slots:l,emit:f}){const{renderTab:i}=gn(e,l,f);return()=>i("div")}});function _n(e,l,f){const i=f===!0?["left","right"]:["top","bottom"];return`absolute-${l===!0?i[0]:i[1]}${e?` text-${e}`:""}`}const Cn=["left","center","right","justify"];var xn=ve({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Cn.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:l,emit:f}){const{proxy:i}=ue(),{$q:a}=i,{registerTick:t}=ke(),{registerTick:o}=ke(),{registerTick:C}=ke(),{registerTimeout:A,removeTimeout:Q}=ze(),{registerTimeout:_,removeTimeout:E}=ze(),x=R(null),h=R(null),m=R(e.modelValue),r=R(!1),F=R(!0),N=R(!1),c=R(!1),s=[],q=R(0),L=R(!1);let d=null,T=null,V;const g=b(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:_n(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),B=b(()=>{const n=q.value,u=m.value;for(let p=0;p<n;p++)if(s[p].name.value===u)return!0;return!1}),te=b(()=>`q-tabs__content--align-${r.value===!0?"left":c.value===!0?"justify":e.align}`),le=b(()=>`q-tabs row no-wrap items-center q-tabs--${r.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),v=b(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+te.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),P=b(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),z=b(()=>e.vertical!==!0&&a.lang.rtl===!0),H=b(()=>At===!1&&z.value===!0);de(z,oe),de(()=>e.modelValue,n=>{y({name:n,setCurrent:!0,skipEmit:!0})}),de(()=>e.outsideArrows,M);function y({name:n,setCurrent:u,skipEmit:p}){m.value!==n&&(p!==!0&&e["onUpdate:modelValue"]!==void 0&&f("update:modelValue",n),(u===!0||e["onUpdate:modelValue"]===void 0)&&(ce(m.value,n),m.value=n))}function M(){t(()=>{W({width:x.value.offsetWidth,height:x.value.offsetHeight})})}function W(n){if(P.value===void 0||h.value===null)return;const u=n[P.value.container],p=Math.min(h.value[P.value.scroll],Array.prototype.reduce.call(h.value.children,(I,k)=>I+(k[P.value.content]||0),0)),$=u>0&&p>u;r.value=$,$===!0&&o(oe),c.value=u<parseInt(e.breakpoint,10)}function ce(n,u){const p=n!=null&&n!==""?s.find(I=>I.name.value===n):null,$=u!=null&&u!==""?s.find(I=>I.name.value===u):null;if(p&&$){const I=p.tabIndicatorRef.value,k=$.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),I.style.transition="none",I.style.transform="none",k.style.transition="none",k.style.transform="none";const w=I.getBoundingClientRect(),j=k.getBoundingClientRect();k.style.transform=e.vertical===!0?`translate3d(0,${w.top-j.top}px,0) scale3d(1,${j.height?w.height/j.height:1},1)`:`translate3d(${w.left-j.left}px,0,0) scale3d(${j.width?w.width/j.width:1},1,1)`,C(()=>{d=setTimeout(()=>{d=null,k.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",k.style.transform="none"},70)})}$&&r.value===!0&&J($.rootRef.value)}function J(n){const{left:u,width:p,top:$,height:I}=h.value.getBoundingClientRect(),k=n.getBoundingClientRect();let w=e.vertical===!0?k.top-$:k.left-u;if(w<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(w),oe();return}w+=e.vertical===!0?k.height-I:k.width-p,w>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(w),oe())}function oe(){const n=h.value;if(n===null)return;const u=n.getBoundingClientRect(),p=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);z.value===!0?(F.value=Math.ceil(p+u.width)<n.scrollWidth-1,N.value=p>0):(F.value=p>0,N.value=e.vertical===!0?Math.ceil(p+u.height)<n.scrollHeight:Math.ceil(p+u.width)<n.scrollWidth)}function Fe(n){T!==null&&clearInterval(T),T=setInterval(()=>{tt(n)===!0&&Z()},5)}function De(){Fe(H.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ae(){Fe(H.value===!0?0:Number.MAX_SAFE_INTEGER)}function Z(){T!==null&&(clearInterval(T),T=null)}function Ze(n,u){const p=Array.prototype.filter.call(h.value.children,j=>j===u||j.matches&&j.matches(".q-tab.q-focusable")===!0),$=p.length;if($===0)return;if(n===36)return J(p[0]),p[0].focus(),!0;if(n===35)return J(p[$-1]),p[$-1].focus(),!0;const I=n===(e.vertical===!0?38:37),k=n===(e.vertical===!0?40:39),w=I===!0?-1:k===!0?1:void 0;if(w!==void 0){const j=z.value===!0?-1:1,Y=p.indexOf(u)+w*j;return Y>=0&&Y<$&&(J(p[Y]),p[Y].focus({preventScroll:!0})),!0}}const et=b(()=>H.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,u)=>{n.scrollLeft=-u}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,u)=>{n.scrollTop=u}}:{get:n=>n.scrollLeft,set:(n,u)=>{n.scrollLeft=u}});function tt(n){const u=h.value,{get:p,set:$}=et.value;let I=!1,k=p(u);const w=n<k?-1:1;return k+=w*5,k<0?(I=!0,k=0):(w===-1&&k<=n||w===1&&k>=n)&&(I=!0,k=n),$(u,k),oe(),I}function Ve(n,u){for(const p in n)if(n[p]!==u[p])return!1;return!0}function nt(){let n=null,u={matchedLen:0,queryDiff:9999,hrefLen:0};const p=s.filter(w=>w.routeData!==void 0&&w.routeData.hasRouterLink.value===!0),{hash:$,query:I}=i.$route,k=Object.keys(I).length;for(const w of p){const j=w.routeData.exact.value===!0;if(w.routeData[j===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Y,query:Ce,matched:rt,href:st}=w.routeData.resolvedLink.value,xe=Object.keys(Ce).length;if(j===!0){if(Y!==$||xe!==k||Ve(I,Ce)===!1)continue;n=w.name.value;break}if(Y!==""&&Y!==$||xe!==0&&Ve(Ce,I)===!1)continue;const ee={matchedLen:rt.length,queryDiff:k-xe,hrefLen:st.length-Y.length};if(ee.matchedLen>u.matchedLen){n=w.name.value,u=ee;continue}else if(ee.matchedLen!==u.matchedLen)continue;if(ee.queryDiff<u.queryDiff)n=w.name.value,u=ee;else if(ee.queryDiff!==u.queryDiff)continue;ee.hrefLen>u.hrefLen&&(n=w.name.value,u=ee)}n===null&&s.some(w=>w.routeData===void 0&&w.name.value===m.value)===!0||y({name:n,setCurrent:!0})}function at(n){if(Q(),L.value!==!0&&x.value!==null&&n.target&&typeof n.target.closest=="function"){const u=n.target.closest(".q-tab");u&&x.value.contains(u)===!0&&(L.value=!0,r.value===!0&&J(u))}}function lt(){A(()=>{L.value=!1},30)}function me(){Ie.avoidRouteWatcher===!1?_(nt):E()}function $e(){if(V===void 0){const n=de(()=>i.$route.fullPath,me);V=()=>{n(),V=void 0}}}function ot(n){s.push(n),q.value++,M(),n.routeData===void 0||i.$route===void 0?_(()=>{if(r.value===!0){const u=m.value,p=u!=null&&u!==""?s.find($=>$.name.value===u):null;p&&J(p.rootRef.value)}}):($e(),n.routeData.hasRouterLink.value===!0&&me())}function it(n){s.splice(s.indexOf(n),1),q.value--,M(),V!==void 0&&n.routeData!==void 0&&(s.every(u=>u.routeData===void 0)===!0&&V(),me())}const Ie={currentModel:m,tabProps:g,hasFocus:L,hasActiveTab:B,registerTab:ot,unregisterTab:it,verifyRouteModel:me,updateModel:y,onKbdNavigate:Ze,avoidRouteWatcher:!1};Ct(Ye,Ie);function Re(){d!==null&&clearTimeout(d),Z(),V!==void 0&&V()}let Le;return Xe(Re),yt(()=>{Le=V!==void 0,Re()}),_t(()=>{Le===!0&&$e(),M()}),()=>S("div",{ref:x,class:le.value,role:"tablist",onFocusin:at,onFocusout:lt},[S(Gt,{onResize:W}),S("div",{ref:h,class:v.value,onScroll:oe},_e(l.default)),S(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:De,onTouchstartPassive:De,onMouseupPassive:Z,onMouseleavePassive:Z,onTouchendPassive:Z}),S(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(N.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ae,onTouchstartPassive:Ae,onMouseupPassive:Z,onMouseleavePassive:Z,onTouchendPassive:Z})])}});function wn(e){const l=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((f,i)=>{const a=parseFloat(f);a&&(l[i]=a)}),l}var Tn=xt({name:"touch-swipe",beforeMount(e,{value:l,arg:f,modifiers:i}){if(i.mouse!==!0&&re.has.touch!==!0)return;const a=i.mouseCapture===!0?"Capture":"",t={handler:l,sensitivity:wn(f),direction:Oe(i),noop:wt,mouseStart(o){Ue(o,t)&&Tt(o)&&(he(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(Ue(o,t)){const C=o.target;he(t,"temp",[[C,"touchmove","move","notPassiveCapture"],[C,"touchcancel","end","notPassiveCapture"],[C,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,C){re.is.firefox===!0&&Te(e,!0);const A=Be(o);t.event={x:A.left,y:A.top,time:Date.now(),mouse:C===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){ne(o);return}const C=Date.now()-t.event.time;if(C===0)return;const A=Be(o),Q=A.left-t.event.x,_=Math.abs(Q),E=A.top-t.event.y,x=Math.abs(E);if(t.event.mouse!==!0){if(_<t.sensitivity[1]&&x<t.sensitivity[1]){t.end(o);return}}else if(_<t.sensitivity[2]&&x<t.sensitivity[2])return;const h=_/C,m=x/C;t.direction.vertical===!0&&_<x&&_<100&&m>t.sensitivity[0]&&(t.event.dir=E<0?"up":"down"),t.direction.horizontal===!0&&_>x&&x<100&&h>t.sensitivity[0]&&(t.event.dir=Q<0?"left":"right"),t.direction.up===!0&&_<x&&E<0&&_<100&&m>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&_<x&&E>0&&_<100&&m>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&_>x&&Q<0&&x<100&&h>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&_>x&&Q>0&&x<100&&h>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ne(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),jt(),t.styleCleanup=r=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const F=()=>{document.body.classList.remove("no-pointer-events--children")};r===!0?setTimeout(F,50):F()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:C,distance:{x:_,y:x}})):t.end(o)},end(o){t.event!==void 0&&(Pe(t,"temp"),re.is.firefox===!0&&Te(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&ne(o),t.event=void 0)}};if(e.__qtouchswipe=t,i.mouse===!0){const o=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";he(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}re.has.touch===!0&&he(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const f=e.__qtouchswipe;f!==void 0&&(l.oldValue!==l.value&&(typeof l.value!="function"&&f.end(),f.handler=l.value),f.direction=Oe(l.modifiers))},beforeUnmount(e){const l=e.__qtouchswipe;l!==void 0&&(Pe(l,"main"),Pe(l,"temp"),re.is.firefox===!0&&Te(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchswipe)}});const Pn={name:{required:!0},disable:Boolean},We={setup(e,{slots:l}){return()=>S("div",{class:"q-panel scroll",role:"tabpanel"},_e(l.default))}},kn={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Sn=["update:modelValue","beforeTransition","transition"];function qn(){const{props:e,emit:l,proxy:f}=ue(),{getCacheWithFn:i}=Kt();let a,t;const o=R(null),C=R(null);function A(v){const P=e.vertical===!0?"up":"left";T((f.$q.lang.rtl===!0?-1:1)*(v.direction===P?1:-1))}const Q=b(()=>[[Tn,A,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),_=b(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),E=b(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),x=b(()=>`--q-transition-duration: ${e.transitionDuration}ms`),h=b(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),m=b(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),r=b(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);de(()=>e.modelValue,(v,P)=>{const z=s(v)===!0?q(v):-1;t!==!0&&d(z===-1?0:z<q(P)?-1:1),o.value!==z&&(o.value=z,l("beforeTransition",v,P),St(()=>{l("transition",v,P)}))});function F(){T(1)}function N(){T(-1)}function c(v){l("update:modelValue",v)}function s(v){return v!=null&&v!==""}function q(v){return a.findIndex(P=>P.props.name===v&&P.props.disable!==""&&P.props.disable!==!0)}function L(){return a.filter(v=>v.props.disable!==""&&v.props.disable!==!0)}function d(v){const P=v!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(v===-1?_.value:E.value):null;C.value!==P&&(C.value=P)}function T(v,P=o.value){let z=P+v;for(;z>-1&&z<a.length;){const H=a[z];if(H!==void 0&&H.props.disable!==""&&H.props.disable!==!0){d(v),t=!0,l("update:modelValue",H.props.name),setTimeout(()=>{t=!1});return}z+=v}e.infinite===!0&&a.length>0&&P!==-1&&P!==a.length&&T(v,v===-1?a.length:-1)}function V(){const v=q(e.modelValue);return o.value!==v&&(o.value=v),!0}function g(){const v=s(e.modelValue)===!0&&V()&&a[o.value];return e.keepAlive===!0?[S(qt,m.value,[S(r.value===!0?i(h.value,()=>({...We,name:h.value})):We,{key:h.value,style:x.value},()=>v)])]:[S("div",{class:"q-panel scroll",style:x.value,key:h.value,role:"tabpanel"},[v])]}function B(){if(a.length!==0)return e.animated===!0?[S(Pt,{name:C.value},g)]:g()}function te(v){return a=kt(_e(v.default,[])).filter(P=>P.props!==null&&P.props.slot===void 0&&s(P.props.name)===!0),a.length}function le(){return a}return Object.assign(f,{next:F,previous:N,goTo:c}),{panelIndex:o,panelDirectives:Q,updatePanelsList:te,updatePanelIndex:V,getPanelContent:B,getEnabledPanels:L,getPanels:le,isValidPanelName:s,keepAliveProps:m,needsUniqueKeepAliveWrapper:r,goToPanelByOffset:T,goToPanel:c,nextPanel:F,previousPanel:N}}var Fn=ve({name:"QTabPanel",props:Pn,setup(e,{slots:l}){return()=>S("div",{class:"q-tab-panel",role:"tabpanel"},_e(l.default))}}),Dn=ve({name:"QTabPanels",props:{...kn,...Jt},emits:Sn,setup(e,{slots:l}){const f=ue(),i=Zt(e,f.proxy.$q),{updatePanelsList:a,getPanelContent:t,panelDirectives:o}=qn(),C=b(()=>"q-tab-panels q-panel-parent"+(i.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(l),Ft("div",{class:C.value},t(),"pan",e.swipeable,()=>o.value))}});const An={class:"q-gutter-y-md dinners__handled-data",style:{"max-width":"500px"}},Vn={class:"date-pdf-form"},$n={class:"row items-center justify-end"},In={key:0,class:"department-issues"},Rn={__name:"DinnersHandledData",setup(e){const{handledData:l}=Ge(se()),{download:f,downloadPDF:i,loadedDateRange:a}=se(),t=a,o=t?R(t[t.length-1]):new Date,C=b(()=>new Date(o.value).toLocaleDateString()),A=R(null),Q=Array.from(new Set(l.value.map(h=>h.Company).sort())),_=[];Q.forEach((h,m)=>{_[m]={total:0},_[m].company=h}),l.value.forEach(h=>_.filter(m=>m.company==h.Company)[0].total+=h.Marks.length);const E=h=>{let m=!1,r=[];return h=="\u0410\u0440\u0442\u0438\u0441"&&l.value.filter(F=>F.Department=="!\u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435!").length&&(m=!0,r=l.value.filter(F=>F.Department=="!\u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435!")),{show:m,undefinedEaters:r}},x=()=>{const h=new Date(o.value).toLocaleDateString();return i(h)};return(h,m)=>(U(),K("div",An,[G("div",Vn,[D(Nt,{filled:"",modelValue:X(C),"onUpdate:modelValue":m[1]||(m[1]=r=>Ee(C)?C.value=r:null),square:"",class:"date-picker"},{append:O(()=>[D(ae,{name:"event",class:"cursor-pointer"},{default:O(()=>[D(Xt,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:O(()=>[D(Ht,{modelValue:X(o),"onUpdate:modelValue":m[0]||(m[0]=r=>Ee(o)?o.value=r:null),minimal:"",options:X(t)},{default:O(()=>[G("div",$n,[He(D(ye,{label:"\u041E\u041A",color:"primary",flat:""},null,512),[[Yt]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),D(ye,{color:"secondary",label:"PDF",icon:"download",square:"",class:"pdf-btn",onClick:Se(x,["prevent"])},null,8,["onClick"])]),D(en,null,{default:O(()=>[D(xn,{modelValue:A.value,"onUpdate:modelValue":m[2]||(m[2]=r=>A.value=r),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:O(()=>[(U(),K(pe,null,be(_,(r,F)=>D(yn,{key:`label-${F}`,name:r.company,label:`${r.company} (${r.total})`},null,8,["name","label"])),64))]),_:1},8,["modelValue"]),D(Vt),D(Dn,{modelValue:A.value,"onUpdate:modelValue":m[3]||(m[3]=r=>A.value=r),animated:""},{default:O(()=>[(U(),K(pe,null,be(_,(r,F)=>D(Fn,{key:`panel-${F}`,name:r.company,class:"column"},{default:O(()=>[D(ye,{class:"btn-fixed-width",color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",icon:"download",onClick:Se(N=>X(f)(r.company),["prevent"])},null,8,["onClick"]),E(r.company).show?(U(),K("div",In,[D(Ot,{bordered:"",separator:""},{default:O(()=>[D(Ut,null,{default:O(()=>[(U(!0),K(pe,null,be(E(r.company).undefinedEaters,(N,c)=>(U(),qe(Wt,{key:c},{default:O(()=>[D(je,null,{default:O(()=>[Me(Qe(N.Name),1)]),_:2},1024),(U(!0),K(pe,null,be(N.Tips,(s,q)=>(U(),qe(je,{caption:"",key:`tip-${q}`},{default:O(()=>[Me("\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u044D\u0442\u043E "+Qe(s),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):fe("",!0)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])]),_:1})]))}};const Ln={class:"dinners"},Bn=G("h4",{class:"dinners__title"},"\u041E\u0431\u0435\u0434\u044B",-1),En={key:0,class:"dinners__description"},Mn=G("p",null,"\u0414\u043B\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u0430 \u043F\u043E \u043E\u0431\u0435\u0434\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u0438\u0437 Senesys \u0438 1\u04217.",-1),Qn=G("p",null,"Seneys \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0435 \u0441\u0430\u043C\u0438, \u043E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u0438\u0437 1\u04217 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435 \u0443 \u0410\u0444\u043E\u043D\u0438\u043D\u0430.",-1),Nn=G("p",null,"\u041F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0425\u0435\u043B\u043F\u0435\u0440 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0445 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 XLSX.",-1),zn=G("p",null,"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0434\u043E \u0438\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044C, \u043D\u0430\u0436\u0430\u0442\u044C \u0424\u0430\u0439\u043B - \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A - \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 XLSX.",-1),jn=[Mn,Qn,Nn,zn],On={key:1,class:"dinners__upload"},Un={key:3,class:"dinners__result"},la={__name:"DinnersPage",setup(e){const{files:l,hdIsReady:f}=Ge(se()),{upload:i}=se();return(a,t)=>(U(),K("div",Ln,[Bn,X(f)?fe("",!0):(U(),K("section",En,jn)),X(f)?fe("",!0):(U(),K("div",On,[D(un,{class:"up1"}),D(mn,{class:"up2"})])),X(l).dinners&&X(l).artis&&!X(f)?(U(),qe(ye,{key:2,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:Se(X(i),["prevent"])},null,8,["onClick"])):fe("",!0),X(f)?(U(),K("section",Un,[D(Rn)])):fe("",!0)]))}};export{la as default};
