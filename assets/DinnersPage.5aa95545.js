import{r as $,j as b,z as ce,s as ut,g as ne,a as re,t as P,h as ve,aj as ct,d as dt,_ as Ke,H as j,M as K,ad as G,K as D,J as U,Q as ae,i as we,m as Xe,o as ft,x as vt,q as He,ao as mt,ap as Ye,a6 as ht,ai as pt,a1 as bt,aq as gt,w as fe,aa as yt,ae as _t,v as _e,W as Ct,c as xt,n as wt,l as Tt,b as he,p as Te,e as Be,f as ke,an as kt,ar as St,k as Pt,as as qt,u as Ft,B as Ge,G as X,at as Ee,T as ye,ah as Pe,R as pe,N as be,I as qe,L as Qe,P as Me,O as se}from"./index.34ec4f39.js";import{u as Dt,Q as At,a as Vt,C as $t,b as It}from"./ClosePopup.28f4c6fb.js";import{u as ue}from"./dinners-store.8eea2772.js";import{Q as Rt,u as Se,r as Lt,a as Bt}from"./QSeparator.7f22d13f.js";import{u as Et,b as Qt,c as Mt,e as Nt,d as zt,f as jt,g as Ne,i as Ot}from"./use-key-composition.e2e6254d.js";import{u as Ut,Q as Wt}from"./QInput.5b31c409.js";import{k as Kt,b as ze,c as Xt,j as Ht,h as Yt,Q as je,i as Gt}from"./format.521fb49e.js";import{Q as Jt}from"./QResizeObserver.1cf47ce8.js";import{g as Oe,s as Ue}from"./touch.70a9dd44.js";import{u as Zt,a as en}from"./use-dark.f545a510.js";import{Q as tn}from"./QCard.ef2c4050.js";import"./scroll.a24f6ae7.js";function ie(e,n,f,o){const a=[];return e.forEach(t=>{o(t)===!0?a.push(t):n.push({failedPropValidation:f,file:t})}),a}function ge(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),ne(e)}const nn={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},an=["rejected"];function ln({editable:e,dnd:n,getFileInput:f,addFilesToQueue:o}){const{props:a,emit:t,proxy:i}=ce(),g=$(null),A=b(()=>a.accept!==void 0?a.accept.split(",").map(c=>(c=c.trim(),c==="*"?"*/":(c.endsWith("/*")&&(c=c.slice(0,c.length-1)),c.toUpperCase()))):null),M=b(()=>parseInt(a.maxFiles,10)),C=b(()=>parseInt(a.maxTotalSize,10));function E(c){if(e.value)if(c!==Object(c)&&(c={target:null}),c.target!==null&&c.target.matches('input[type="file"]')===!0)c.clientX===0&&c.clientY===0&&ut(c);else{const s=f();s&&s!==c.target&&s.click(c)}}function x(c){e.value&&c&&o(null,c)}function h(c,s,q,L){let d=Array.from(s||c.target.files);const T=[],V=()=>{T.length>0&&t("rejected",T)};if(a.accept!==void 0&&A.value.indexOf("*/")===-1&&(d=ie(d,T,"accept",y=>A.value.some(B=>y.type.toUpperCase().startsWith(B)||y.name.toUpperCase().endsWith(B))),d.length===0))return V();if(a.maxFileSize!==void 0){const y=parseInt(a.maxFileSize,10);if(d=ie(d,T,"max-file-size",B=>B.size<=y),d.length===0)return V()}if(a.multiple!==!0&&d.length>0&&(d=[d[0]]),d.forEach(y=>{y.__key=y.webkitRelativePath+y.lastModified+y.name+y.size}),L===!0){const y=q.map(B=>B.__key);d=ie(d,T,"duplicate",B=>y.includes(B.__key)===!1)}if(d.length===0)return V();if(a.maxTotalSize!==void 0){let y=L===!0?q.reduce((B,te)=>B+te.size,0):0;if(d=ie(d,T,"max-total-size",B=>(y+=B.size,y<=C.value)),d.length===0)return V()}if(typeof a.filter=="function"){const y=a.filter(d);d=ie(d,T,"filter",B=>y.includes(B))}if(a.maxFiles!==void 0){let y=L===!0?q.length:0;if(d=ie(d,T,"max-files",()=>(y++,y<=M.value)),d.length===0)return V()}if(V(),d.length>0)return d}function m(c){ge(c),n.value!==!0&&(n.value=!0)}function r(c){ne(c),(c.relatedTarget!==null||re.is.safari!==!0?c.relatedTarget!==g.value:document.elementsFromPoint(c.clientX,c.clientY).includes(g.value)===!1)===!0&&(n.value=!1)}function F(c){ge(c);const s=c.dataTransfer.files;s.length>0&&o(null,s),n.value=!1}function N(c){if(n.value===!0)return P("div",{ref:g,class:`q-${c}__dnd absolute-full`,onDragenter:ge,onDragover:ge,onDragleave:r,onDrop:F})}return Object.assign(i,{pickFiles:E,addFiles:x}),{pickFiles:E,addFiles:x,onDragover:m,onDragleave:r,processFiles:h,getDndNode:N,maxFilesNumber:M,maxTotalSizeNumber:C}}var Je=ve({name:"QFile",inheritAttrs:!1,props:{...Et,...Qt,...nn,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Mt,...an],setup(e,{slots:n,emit:f,attrs:o}){const{proxy:a}=ce(),t=Nt(),i=$(null),g=$(!1),A=zt(e),{pickFiles:M,onDragover:C,onDragleave:E,processFiles:x,getDndNode:h}=ln({editable:t.editable,dnd:g,getFileInput:le,addFilesToQueue:v}),m=Ut(e),r=b(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),F=b(()=>Ne(r.value)),N=b(()=>r.value.map(_=>_.name).join(", ")),c=b(()=>Kt(r.value.reduce((_,Q)=>_+Q.size,0))),s=b(()=>({totalSize:c.value,filesNumber:r.value.length,maxFiles:e.maxFiles})),q=b(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:A.value,...o,id:t.targetUid.value,disabled:t.editable.value!==!0})),L=b(()=>"q-file q-field--auto-height"+(g.value===!0?" q-file--dnd":"")),d=b(()=>e.multiple===!0&&e.append===!0);function T(_){const Q=r.value.slice();Q.splice(_,1),y(Q)}function V(_){const Q=r.value.findIndex(_);Q>-1&&T(Q)}function y(_){f("update:modelValue",e.multiple===!0?_:_[0])}function B(_){_.keyCode===13&&dt(_)}function te(_){(_.keyCode===13||_.keyCode===32)&&M(_)}function le(){return i.value}function v(_,Q){const W=x(_,Q,r.value,d.value),de=le();de!=null&&(de.value=""),W!==void 0&&((e.multiple===!0?e.modelValue&&W.every(J=>r.value.includes(J)):e.modelValue===W[0])||y(d.value===!0?r.value.concat(W):W))}function k(){return[P("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function z(){if(n.file!==void 0)return r.value.length===0?k():r.value.map((Q,W)=>n.file({index:W,file:Q,ref:this}));if(n.selected!==void 0)return r.value.length===0?k():n.selected({files:r.value,ref:this});if(e.useChips===!0)return r.value.length===0?k():r.value.map((Q,W)=>P(Rt,{key:"file-"+W,removable:t.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{T(W)}},()=>P("span",{class:"ellipsis",textContent:Q.name})));const _=e.displayValue!==void 0?e.displayValue:N.value;return _.length>0?[P("div",{class:e.inputClass,style:e.inputStyle,textContent:_})]:k()}function H(){const _={ref:i,...q.value,...m.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:v};return e.multiple===!0&&(_.multiple=!0),P("input",_)}return Object.assign(t,{fieldClass:L,emitValue:y,hasValue:F,inputRef:i,innerValue:r,floatingLabel:b(()=>F.value===!0||Ne(e.displayValue)),computedCounter:b(()=>{if(e.counterLabel!==void 0)return e.counterLabel(s.value);const _=e.maxFiles;return`${r.value.length}${_!==void 0?" / "+_:""} (${c.value})`}),getControlChild:()=>h("file"),getControl:()=>{const _={ref:t.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return t.editable.value===!0&&Object.assign(_,{onDragover:C,onDragleave:E,onKeydown:B,onKeyup:te}),P("div",_,[H()].concat(z()))}}),Object.assign(a,{removeAtIndex:T,removeFile:V,getNativeElement:()=>i.value}),ct(a,"nativeEl",()=>i.value),jt(t)}});const on={setup(){const e=$(null),n="dinners",{uploadFile:f}=ue();return{file:e,mode:n,uploadFile:f}}},rn={class:"q-pa-md"},sn={class:"q-gutter-md row items-start"};function un(e,n,f,o,a,t){return j(),K("div",rn,[G("div",sn,[D(Je,{modelValue:o.file,"onUpdate:modelValue":[n[0]||(n[0]=i=>o.file=i),n[1]||(n[1]=i=>o.uploadFile(o.file,o.mode))],label:"\u041E\u0431\u0435\u0434\u044B Senesys",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:U(()=>[D(ae,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var cn=Ke(on,[["render",un]]);const dn={setup(){const e=$(null),n="artis",{uploadFile:f}=ue();return{file:e,mode:n,uploadFile:f}}},fn={class:"q-pa-md"},vn={class:"q-gutter-md row items-start"};function mn(e,n,f,o,a,t){return j(),K("div",fn,[G("div",vn,[D(Je,{modelValue:o.file,"onUpdate:modelValue":[n[0]||(n[0]=i=>o.file=i),n[1]||(n[1]=i=>o.uploadFile(o.file,o.mode))],label:"\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 1C7",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:U(()=>[D(ae,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var hn=Ke(dn,[["render",mn]]);let pn=0;const bn=["click","keydown"],gn={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${pn++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function yn(e,n,f,o){const a=vt(Ye,we);if(a===we)return console.error("QTab/QRouteTab component needs to be child of QTabs"),we;const{proxy:t}=ce(),i=$(null),g=$(null),A=$(null),M=b(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),C=b(()=>a.currentModel.value===e.name),E=b(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(C.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),x=b(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),h=b(()=>e.disable===!0||a.hasFocus.value===!0||C.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function m(s,q){if(q!==!0&&i.value!==null&&i.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&ne(s);return}if(o===void 0){a.updateModel({name:e.name}),f("click",s);return}if(o.hasRouterLink.value===!0){const L=(d={})=>{let T;const V=d.to===void 0||gt(d.to,e.to)===!0?a.avoidRouteWatcher=Ot():null;return o.navigateToRouterLink(s,{...d,returnRouterError:!0}).catch(y=>{T=y}).then(y=>{if(V===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,T===void 0&&(y===void 0||y.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),d.returnRouterError===!0)return T!==void 0?Promise.reject(T):y})};f("click",s,L),s.defaultPrevented!==!0&&L();return}f("click",s)}function r(s){ht(s,[13,32])?m(s,!0):pt(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&a.onKbdNavigate(s.keyCode,t.$el)===!0&&ne(s),f("keydown",s)}function F(){const s=a.tabProps.value.narrowIndicator,q=[],L=P("div",{ref:A,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&q.push(P(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&q.push(P("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&q.push(e.alertIcon!==void 0?P(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):P("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&q.push(L);const d=[P("div",{class:"q-focus-helper",tabindex:-1,ref:i}),P("div",{class:x.value},bt(n.default,q))];return s===!1&&d.push(L),d}const N={name:b(()=>e.name),rootRef:g,tabIndicatorRef:A,routeData:o};Xe(()=>{a.unregisterTab(N)}),ft(()=>{a.registerTab(N)});function c(s,q){const L={ref:g,class:E.value,tabindex:h.value,role:"tab","aria-selected":C.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:m,onKeydown:r,...q};return He(P(s,L,F()),[[mt,M.value]])}return{renderTab:c,$tabs:a}}var _n=ve({name:"QTab",props:gn,emits:bn,setup(e,{slots:n,emit:f}){const{renderTab:o}=yn(e,n,f);return()=>o("div")}});function Cn(e,n,f){const o=f===!0?["left","right"]:["top","bottom"];return`absolute-${n===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const xn=["left","center","right","justify"];var wn=ve({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>xn.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:n,emit:f}){const{proxy:o}=ce(),{$q:a}=o,{registerTick:t}=Se(),{registerTick:i}=Se(),{registerTick:g}=Se(),{registerTimeout:A,removeTimeout:M}=ze(),{registerTimeout:C,removeTimeout:E}=ze(),x=$(null),h=$(null),m=$(e.modelValue),r=$(!1),F=$(!0),N=$(!1),c=$(!1),s=[],q=$(0),L=$(!1);let d=null,T=null,V;const y=b(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Cn(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),B=b(()=>{const l=q.value,u=m.value;for(let p=0;p<l;p++)if(s[p].name.value===u)return!0;return!1}),te=b(()=>`q-tabs__content--align-${r.value===!0?"left":c.value===!0?"justify":e.align}`),le=b(()=>`q-tabs row no-wrap items-center q-tabs--${r.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),v=b(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+te.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),k=b(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),z=b(()=>e.vertical!==!0&&a.lang.rtl===!0),H=b(()=>Lt===!1&&z.value===!0);fe(z,oe),fe(()=>e.modelValue,l=>{_({name:l,setCurrent:!0,skipEmit:!0})}),fe(()=>e.outsideArrows,Q);function _({name:l,setCurrent:u,skipEmit:p}){m.value!==l&&(p!==!0&&e["onUpdate:modelValue"]!==void 0&&f("update:modelValue",l),(u===!0||e["onUpdate:modelValue"]===void 0)&&(de(m.value,l),m.value=l))}function Q(){t(()=>{W({width:x.value.offsetWidth,height:x.value.offsetHeight})})}function W(l){if(k.value===void 0||h.value===null)return;const u=l[k.value.container],p=Math.min(h.value[k.value.scroll],Array.prototype.reduce.call(h.value.children,(R,S)=>R+(S[k.value.content]||0),0)),I=u>0&&p>u;r.value=I,I===!0&&i(oe),c.value=u<parseInt(e.breakpoint,10)}function de(l,u){const p=l!=null&&l!==""?s.find(R=>R.name.value===l):null,I=u!=null&&u!==""?s.find(R=>R.name.value===u):null;if(p&&I){const R=p.tabIndicatorRef.value,S=I.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),R.style.transition="none",R.style.transform="none",S.style.transition="none",S.style.transform="none";const w=R.getBoundingClientRect(),O=S.getBoundingClientRect();S.style.transform=e.vertical===!0?`translate3d(0,${w.top-O.top}px,0) scale3d(1,${O.height?w.height/O.height:1},1)`:`translate3d(${w.left-O.left}px,0,0) scale3d(${O.width?w.width/O.width:1},1,1)`,g(()=>{d=setTimeout(()=>{d=null,S.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",S.style.transform="none"},70)})}I&&r.value===!0&&J(I.rootRef.value)}function J(l){const{left:u,width:p,top:I,height:R}=h.value.getBoundingClientRect(),S=l.getBoundingClientRect();let w=e.vertical===!0?S.top-I:S.left-u;if(w<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(w),oe();return}w+=e.vertical===!0?S.height-R:S.width-p,w>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(w),oe())}function oe(){const l=h.value;if(l===null)return;const u=l.getBoundingClientRect(),p=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);z.value===!0?(F.value=Math.ceil(p+u.width)<l.scrollWidth-1,N.value=p>0):(F.value=p>0,N.value=e.vertical===!0?Math.ceil(p+u.height)<l.scrollHeight:Math.ceil(p+u.width)<l.scrollWidth)}function Fe(l){T!==null&&clearInterval(T),T=setInterval(()=>{tt(l)===!0&&Z()},5)}function De(){Fe(H.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ae(){Fe(H.value===!0?0:Number.MAX_SAFE_INTEGER)}function Z(){T!==null&&(clearInterval(T),T=null)}function Ze(l,u){const p=Array.prototype.filter.call(h.value.children,O=>O===u||O.matches&&O.matches(".q-tab.q-focusable")===!0),I=p.length;if(I===0)return;if(l===36)return J(p[0]),p[0].focus(),!0;if(l===35)return J(p[I-1]),p[I-1].focus(),!0;const R=l===(e.vertical===!0?38:37),S=l===(e.vertical===!0?40:39),w=R===!0?-1:S===!0?1:void 0;if(w!==void 0){const O=z.value===!0?-1:1,Y=p.indexOf(u)+w*O;return Y>=0&&Y<I&&(J(p[Y]),p[Y].focus({preventScroll:!0})),!0}}const et=b(()=>H.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,u)=>{l.scrollLeft=-u}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,u)=>{l.scrollTop=u}}:{get:l=>l.scrollLeft,set:(l,u)=>{l.scrollLeft=u}});function tt(l){const u=h.value,{get:p,set:I}=et.value;let R=!1,S=p(u);const w=l<S?-1:1;return S+=w*5,S<0?(R=!0,S=0):(w===-1&&S<=l||w===1&&S>=l)&&(R=!0,S=l),I(u,S),oe(),R}function Ve(l,u){for(const p in l)if(l[p]!==u[p])return!1;return!0}function nt(){let l=null,u={matchedLen:0,queryDiff:9999,hrefLen:0};const p=s.filter(w=>w.routeData!==void 0&&w.routeData.hasRouterLink.value===!0),{hash:I,query:R}=o.$route,S=Object.keys(R).length;for(const w of p){const O=w.routeData.exact.value===!0;if(w.routeData[O===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Y,query:Ce,matched:rt,href:st}=w.routeData.resolvedLink.value,xe=Object.keys(Ce).length;if(O===!0){if(Y!==I||xe!==S||Ve(R,Ce)===!1)continue;l=w.name.value;break}if(Y!==""&&Y!==I||xe!==0&&Ve(Ce,R)===!1)continue;const ee={matchedLen:rt.length,queryDiff:S-xe,hrefLen:st.length-Y.length};if(ee.matchedLen>u.matchedLen){l=w.name.value,u=ee;continue}else if(ee.matchedLen!==u.matchedLen)continue;if(ee.queryDiff<u.queryDiff)l=w.name.value,u=ee;else if(ee.queryDiff!==u.queryDiff)continue;ee.hrefLen>u.hrefLen&&(l=w.name.value,u=ee)}l===null&&s.some(w=>w.routeData===void 0&&w.name.value===m.value)===!0||_({name:l,setCurrent:!0})}function at(l){if(M(),L.value!==!0&&x.value!==null&&l.target&&typeof l.target.closest=="function"){const u=l.target.closest(".q-tab");u&&x.value.contains(u)===!0&&(L.value=!0,r.value===!0&&J(u))}}function lt(){A(()=>{L.value=!1},30)}function me(){Ie.avoidRouteWatcher===!1?C(nt):E()}function $e(){if(V===void 0){const l=fe(()=>o.$route.fullPath,me);V=()=>{l(),V=void 0}}}function ot(l){s.push(l),q.value++,Q(),l.routeData===void 0||o.$route===void 0?C(()=>{if(r.value===!0){const u=m.value,p=u!=null&&u!==""?s.find(I=>I.name.value===u):null;p&&J(p.rootRef.value)}}):($e(),l.routeData.hasRouterLink.value===!0&&me())}function it(l){s.splice(s.indexOf(l),1),q.value--,Q(),V!==void 0&&l.routeData!==void 0&&(s.every(u=>u.routeData===void 0)===!0&&V(),me())}const Ie={currentModel:m,tabProps:y,hasFocus:L,hasActiveTab:B,registerTab:ot,unregisterTab:it,verifyRouteModel:me,updateModel:_,onKbdNavigate:Ze,avoidRouteWatcher:!1};Ct(Ye,Ie);function Re(){d!==null&&clearTimeout(d),Z(),V!==void 0&&V()}let Le;return Xe(Re),yt(()=>{Le=V!==void 0,Re()}),_t(()=>{Le===!0&&$e(),Q()}),()=>P("div",{ref:x,class:le.value,role:"tablist",onFocusin:at,onFocusout:lt},[P(Jt,{onResize:W}),P("div",{ref:h,class:v.value,onScroll:oe},_e(n.default)),P(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:De,onTouchstartPassive:De,onMouseupPassive:Z,onMouseleavePassive:Z,onTouchendPassive:Z}),P(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(N.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ae,onTouchstartPassive:Ae,onMouseupPassive:Z,onMouseleavePassive:Z,onTouchendPassive:Z})])}});function Tn(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((f,o)=>{const a=parseFloat(f);a&&(n[o]=a)}),n}var kn=xt({name:"touch-swipe",beforeMount(e,{value:n,arg:f,modifiers:o}){if(o.mouse!==!0&&re.has.touch!==!0)return;const a=o.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Tn(f),direction:Oe(o),noop:wt,mouseStart(i){Ue(i,t)&&Tt(i)&&(he(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ue(i,t)){const g=i.target;he(t,"temp",[[g,"touchmove","move","notPassiveCapture"],[g,"touchcancel","end","notPassiveCapture"],[g,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,g){re.is.firefox===!0&&Te(e,!0);const A=Be(i);t.event={x:A.left,y:A.top,time:Date.now(),mouse:g===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){ne(i);return}const g=Date.now()-t.event.time;if(g===0)return;const A=Be(i),M=A.left-t.event.x,C=Math.abs(M),E=A.top-t.event.y,x=Math.abs(E);if(t.event.mouse!==!0){if(C<t.sensitivity[1]&&x<t.sensitivity[1]){t.end(i);return}}else if(C<t.sensitivity[2]&&x<t.sensitivity[2])return;const h=C/g,m=x/g;t.direction.vertical===!0&&C<x&&C<100&&m>t.sensitivity[0]&&(t.event.dir=E<0?"up":"down"),t.direction.horizontal===!0&&C>x&&x<100&&h>t.sensitivity[0]&&(t.event.dir=M<0?"left":"right"),t.direction.up===!0&&C<x&&E<0&&C<100&&m>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&C<x&&E>0&&C<100&&m>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&C>x&&M<0&&x<100&&h>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&C>x&&M>0&&x<100&&h>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ne(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Xt(),t.styleCleanup=r=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const F=()=>{document.body.classList.remove("no-pointer-events--children")};r===!0?setTimeout(F,50):F()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:g,distance:{x:C,y:x}})):t.end(i)},end(i){t.event!==void 0&&(ke(t,"temp"),re.is.firefox===!0&&Te(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&ne(i),t.event=void 0)}};if(e.__qtouchswipe=t,o.mouse===!0){const i=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";he(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}re.has.touch===!0&&he(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const f=e.__qtouchswipe;f!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&f.end(),f.handler=n.value),f.direction=Oe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(ke(n,"main"),ke(n,"temp"),re.is.firefox===!0&&Te(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});const Sn={name:{required:!0},disable:Boolean},We={setup(e,{slots:n}){return()=>P("div",{class:"q-panel scroll",role:"tabpanel"},_e(n.default))}},Pn={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},qn=["update:modelValue","beforeTransition","transition"];function Fn(){const{props:e,emit:n,proxy:f}=ce(),{getCacheWithFn:o}=Dt();let a,t;const i=$(null),g=$(null);function A(v){const k=e.vertical===!0?"up":"left";T((f.$q.lang.rtl===!0?-1:1)*(v.direction===k?1:-1))}const M=b(()=>[[kn,A,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),C=b(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),E=b(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),x=b(()=>`--q-transition-duration: ${e.transitionDuration}ms`),h=b(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),m=b(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),r=b(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);fe(()=>e.modelValue,(v,k)=>{const z=s(v)===!0?q(v):-1;t!==!0&&d(z===-1?0:z<q(k)?-1:1),i.value!==z&&(i.value=z,n("beforeTransition",v,k),Pt(()=>{n("transition",v,k)}))});function F(){T(1)}function N(){T(-1)}function c(v){n("update:modelValue",v)}function s(v){return v!=null&&v!==""}function q(v){return a.findIndex(k=>k.props.name===v&&k.props.disable!==""&&k.props.disable!==!0)}function L(){return a.filter(v=>v.props.disable!==""&&v.props.disable!==!0)}function d(v){const k=v!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(v===-1?C.value:E.value):null;g.value!==k&&(g.value=k)}function T(v,k=i.value){let z=k+v;for(;z>-1&&z<a.length;){const H=a[z];if(H!==void 0&&H.props.disable!==""&&H.props.disable!==!0){d(v),t=!0,n("update:modelValue",H.props.name),setTimeout(()=>{t=!1});return}z+=v}e.infinite===!0&&a.length>0&&k!==-1&&k!==a.length&&T(v,v===-1?a.length:-1)}function V(){const v=q(e.modelValue);return i.value!==v&&(i.value=v),!0}function y(){const v=s(e.modelValue)===!0&&V()&&a[i.value];return e.keepAlive===!0?[P(qt,m.value,[P(r.value===!0?o(h.value,()=>({...We,name:h.value})):We,{key:h.value,style:x.value},()=>v)])]:[P("div",{class:"q-panel scroll",style:x.value,key:h.value,role:"tabpanel"},[v])]}function B(){if(a.length!==0)return e.animated===!0?[P(kt,{name:g.value},y)]:y()}function te(v){return a=St(_e(v.default,[])).filter(k=>k.props!==null&&k.props.slot===void 0&&s(k.props.name)===!0),a.length}function le(){return a}return Object.assign(f,{next:F,previous:N,goTo:c}),{panelIndex:i,panelDirectives:M,updatePanelsList:te,updatePanelIndex:V,getPanelContent:B,getEnabledPanels:L,getPanels:le,isValidPanelName:s,keepAliveProps:m,needsUniqueKeepAliveWrapper:r,goToPanelByOffset:T,goToPanel:c,nextPanel:F,previousPanel:N}}var Dn=ve({name:"QTabPanel",props:Sn,setup(e,{slots:n}){return()=>P("div",{class:"q-tab-panel",role:"tabpanel"},_e(n.default))}}),An=ve({name:"QTabPanels",props:{...Pn,...Zt},emits:qn,setup(e,{slots:n}){const f=ce(),o=en(e,f.proxy.$q),{updatePanelsList:a,getPanelContent:t,panelDirectives:i}=Fn(),g=b(()=>"q-tab-panels q-panel-parent"+(o.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(n),Ft("div",{class:g.value},t(),"pan",e.swipeable,()=>i.value))}});const Vn={class:"q-gutter-y-md dinners__handled-data",style:{"max-width":"500px"}},$n={class:"date-pdf-form"},In={class:"row items-center justify-end"},Rn={key:0,class:"department-issues"},Ln={__name:"DinnersHandledData",setup(e){const{handledData:n}=Ge(ue()),{download:f,downloadPDF:o,loadedDateRange:a}=ue(),t=a,i=t?$(t[t.length-1]):new Date,g=b(()=>new Date(i.value).toLocaleDateString()),A=$(null),M=Array.from(new Set(n.value.map(h=>h.Company).sort())),C=[];M.forEach((h,m)=>{C[m]={total:0},C[m].company=h}),n.value.forEach(h=>C.filter(m=>m.company==h.Company)[0].total+=h.Marks.length);const E=h=>{let m=!1,r=[];return h=="\u0410\u0440\u0442\u0438\u0441"&&n.value.filter(F=>F.Department=="!\u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435!").length&&(m=!0,r=n.value.filter(F=>F.Department=="!\u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435!")),{show:m,undefinedEaters:r}},x=()=>{const h=new Date(i.value).toLocaleDateString();return o(h)};return(h,m)=>(j(),K("div",Vn,[G("div",$n,[D(Wt,{filled:"",modelValue:X(g),"onUpdate:modelValue":m[1]||(m[1]=r=>Ee(g)?g.value=r:null),square:"",class:"date-picker"},{append:U(()=>[D(ae,{name:"event",class:"cursor-pointer"},{default:U(()=>[D(At,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:U(()=>[D(Vt,{modelValue:X(i),"onUpdate:modelValue":m[0]||(m[0]=r=>Ee(i)?i.value=r:null),minimal:"",options:X(t)},{default:U(()=>[G("div",In,[He(D(ye,{label:"\u041E\u041A",color:"primary",flat:""},null,512),[[$t]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),D(ye,{color:"secondary",label:"PDF",icon:"download",square:"",class:"pdf-btn",onClick:Pe(x,["prevent"])},null,8,["onClick"])]),D(tn,null,{default:U(()=>[D(wn,{modelValue:A.value,"onUpdate:modelValue":m[2]||(m[2]=r=>A.value=r),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:U(()=>[(j(),K(pe,null,be(C,(r,F)=>D(_n,{key:`label-${F}`,name:r.company,label:`${r.company} (${r.total})`},null,8,["name","label"])),64))]),_:1},8,["modelValue"]),D(Bt),D(An,{modelValue:A.value,"onUpdate:modelValue":m[3]||(m[3]=r=>A.value=r),animated:""},{default:U(()=>[(j(),K(pe,null,be(C,(r,F)=>D(Dn,{key:`panel-${F}`,name:r.company,class:"column"},{default:U(()=>[D(ye,{class:"btn-fixed-width",color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",icon:"download",onClick:Pe(N=>X(f)(r.company),["prevent"])},null,8,["onClick"]),E(r.company).show?(j(),K("div",Rn,[D(Ht,{bordered:"",separator:""},{default:U(()=>[D(Yt,null,{default:U(()=>[(j(!0),K(pe,null,be(E(r.company).undefinedEaters,(N,c)=>(j(),qe(Gt,{key:c},{default:U(()=>[D(je,null,{default:U(()=>[Qe(Me(N.Name),1)]),_:2},1024),(j(!0),K(pe,null,be(N.Tips,(s,q)=>(j(),qe(je,{caption:"",key:`tip-${q}`},{default:U(()=>[Qe("\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u044D\u0442\u043E "+Me(s),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):se("",!0)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])]),_:1})]))}};const Bn={class:"dinners"},En=G("h4",{class:"dinners__title"},"\u041E\u0431\u0435\u0434\u044B",-1),Qn={key:0,class:"dinners__description"},Mn=G("p",null,"\u0414\u043B\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u0430 \u043F\u043E \u043E\u0431\u0435\u0434\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u0438\u0437 Senesys \u0438 1\u04217.",-1),Nn=G("p",null,"Seneys \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0435 \u0441\u0430\u043C\u0438, \u043E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u0438\u0437 1\u04217 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435 \u0443 \u0410\u0444\u043E\u043D\u0438\u043D\u0430.",-1),zn=G("p",null,"\u041F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0425\u0435\u043B\u043F\u0435\u0440 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0445 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 XLSX.",-1),jn=G("p",null,"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0434\u043E \u0438\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044C, \u043D\u0430\u0436\u0430\u0442\u044C \u0424\u0430\u0439\u043B - \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A - \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 XLSX.",-1),On=[Mn,Nn,zn,jn],Un={key:1,class:"dinners__upload"},Wn={key:3,class:"loader"},Kn={key:4,class:"dinners__result"},ia={__name:"DinnersPage",setup(e){const n=$(!1),{files:f,hdIsReady:o}=Ge(ue()),{upload:a}=ue(),t=()=>{n.value=!0};return(i,g)=>(j(),K("div",Bn,[En,!X(o)&&!n.value?(j(),K("section",Qn,On)):se("",!0),!X(o)&&!n.value?(j(),K("div",Un,[D(cn,{class:"up1"}),D(hn,{class:"up2"})])):se("",!0),X(f).dinners&&X(f).artis&&!X(o)&&!n.value?(j(),qe(ye,{key:2,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:g[0]||(g[0]=Pe(A=>{X(a)(),t()},["prevent"]))})):se("",!0),!X(o)&&n.value?(j(),K("div",Wn,[D(It,{color:"primary",size:"5.5em"})])):se("",!0),X(o)?(j(),K("section",Kn,[D(Ln)])):se("",!0)]))}};export{ia as default};