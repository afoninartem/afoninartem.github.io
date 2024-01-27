import{w as R,o as te,m as L,x as ie,z as U,ai as se,r as g,j as i,ak as de,ag as fe,al as ce,g as ve,k as pe,aa as me,ah as ge,Z as be,t as a,d as A,Q as J,am as he,v as I,an as ye}from"./index.7872af03.js";import{u as Ce,a as qe}from"./use-dark.cb970ae1.js";function xe({validate:e,resetValidation:o,requiresQForm:r}){const t=ie(se,!1);if(t!==!1){const{props:v,proxy:s}=U();Object.assign(s,{validate:e,resetValidation:o}),R(()=>v.disable,n=>{n===!0?(typeof o=="function"&&o(),t.unbindComponent(s)):t.bindComponent(s)}),te(()=>{v.disable!==!0&&t.bindComponent(s)}),L(()=>{v.disable!==!0&&t.unbindComponent(s)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const X=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Y=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ee=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,M=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,O=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,T={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>X.test(e),hexaColor:e=>Y.test(e),hexOrHexaColor:e=>ee.test(e),rgbColor:e=>M.test(e),rgbaColor:e=>O.test(e),rgbOrRgbaColor:e=>M.test(e)||O.test(e),hexOrRgbColor:e=>X.test(e)||M.test(e),hexaOrRgbaColor:e=>Y.test(e)||O.test(e),anyColor:e=>ee.test(e)||M.test(e)||O.test(e)},_e=[!0,!1,"ondemand"],Se={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>_e.includes(e)}};function we(e,o){const{props:r,proxy:t}=U(),v=g(!1),s=g(null),n=g(null);xe({validate:C,resetValidation:S});let c=0,y;const k=i(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length>0),b=i(()=>r.disable!==!0&&k.value===!0),_=i(()=>r.error===!0||v.value===!0),j=i(()=>typeof r.errorMessage=="string"&&r.errorMessage.length>0?r.errorMessage:s.value);R(()=>r.modelValue,()=>{$()}),R(()=>r.reactiveRules,h=>{h===!0?y===void 0&&(y=R(()=>r.rules,()=>{$(!0)})):y!==void 0&&(y(),y=void 0)},{immediate:!0}),R(e,h=>{h===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,b.value===!0&&r.lazyRules!=="ondemand"&&o.value===!1&&w())});function S(){c++,o.value=!1,n.value=null,v.value=!1,s.value=null,w.cancel()}function C(h=r.modelValue){if(b.value!==!0)return!0;const F=++c,D=o.value!==!0?()=>{n.value=!0}:()=>{},q=(f,p)=>{f===!0&&D(),v.value=f,s.value=p||null,o.value=!1},B=[];for(let f=0;f<r.rules.length;f++){const p=r.rules[f];let m;if(typeof p=="function"?m=p(h,T):typeof p=="string"&&T[p]!==void 0&&(m=T[p](h)),m===!1||typeof m=="string")return q(!0,m),!1;m!==!0&&m!==void 0&&B.push(m)}return B.length===0?(q(!1),!0):(o.value=!0,Promise.all(B).then(f=>{if(f===void 0||Array.isArray(f)===!1||f.length===0)return F===c&&q(!1),!0;const p=f.find(m=>m===!1||typeof m=="string");return F===c&&q(p!==void 0,p),p===void 0},f=>(F===c&&(console.error(f),q(!0)),!1)))}function $(h){b.value===!0&&r.lazyRules!=="ondemand"&&(n.value===!0||r.lazyRules!==!0&&h!==!0)&&w()}const w=de(C,0);return L(()=>{y!==void 0&&y(),w.cancel()}),Object.assign(t,{resetValidation:S,validate:C}),fe(t,"hasError",()=>_.value),{isDirtyModel:n,hasRules:k,hasError:_,errorMessage:j,validate:C,resetValidation:S}}const oe=/^on[A-Z]/;function Fe(e,o){const r={listeners:g({}),attributes:g({})};function t(){const v={},s={};for(const n in e)n!=="class"&&n!=="style"&&oe.test(n)===!1&&(v[n]=e[n]);for(const n in o.props)oe.test(n)===!0&&(s[n]=o.props[n]);r.attributes.value=v,r.listeners.value=s}return ce(t),t(),r}let z,P=0;const d=new Array(256);for(let e=0;e<256;e++)d[e]=(e+256).toString(16).substring(1);const Be=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const r=new Uint8Array(o);return e.getRandomValues(r),r}}return o=>{const r=[];for(let t=o;t>0;t--)r.push(Math.floor(Math.random()*256));return r}})(),le=4096;function Re(){(z===void 0||P+16>le)&&(P=0,z=Be(le));const e=Array.prototype.slice.call(z,P,P+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,d[e[0]]+d[e[1]]+d[e[2]]+d[e[3]]+"-"+d[e[4]]+d[e[5]]+"-"+d[e[6]]+d[e[7]]+"-"+d[e[8]]+d[e[9]]+"-"+d[e[10]]+d[e[11]]+d[e[12]]+d[e[13]]+d[e[14]]+d[e[15]]}let x=[],V=[];function re(e){V=V.filter(o=>o!==e)}function Ie(e){re(e),V.push(e)}function Me(e){re(e),V.length===0&&x.length>0&&(x[x.length-1](),x=[])}function Ae(e){V.length===0?e():x.push(e)}function Ve(e){x=x.filter(o=>o!==e)}function H(e){return e===void 0?`f_${Re()}`:e}function ke(e){return e!=null&&(""+e).length>0}const Oe={...Ce,...Se,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Pe=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ue(){const{props:e,attrs:o,proxy:r,vnode:t}=U();return{isDark:qe(e,r.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Fe(o,t),targetUid:g(H(e.for)),rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function je(e){const{props:o,emit:r,slots:t,attrs:v,proxy:s}=U(),{$q:n}=s;let c=null;e.hasValue===void 0&&(e.hasValue=i(()=>ke(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{r("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:Z,onFocusout:N}),Object.assign(e,{clearValue:Q,onControlFocusin:Z,onControlFocusout:N,focus:p}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,u=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:y,hasRules:k,hasError:b,errorMessage:_,resetValidation:j}=we(e.focused,e.innerLoading),S=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=i(()=>o.bottomSlots===!0||o.hint!==void 0||k.value===!0||o.counter===!0||o.error!==null),$=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),w=i(()=>`q-field row no-wrap items-start q-field--${$.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(S.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(b.value===!0?" q-field--error":"")+(b.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),h=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(b.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),F=i(()=>o.labelSlot===!0||o.label!==void 0),D=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&b.value!==!0?` text-${o.labelColor}`:"")),q=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:S.value,modelValue:o.modelValue,emitValue:e.emitValue})),B=i(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});R(()=>o.for,l=>{e.targetUid.value=H(l)});function f(){const l=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(l===null||l.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==l&&u.focus({preventScroll:!0}))}function p(){Ae(f)}function m(){Ve(f);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function Z(l){c!==null&&(clearTimeout(c),c=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",l))}function N(l,u){c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",l)),u!==void 0&&u())})}function Q(l){ve(l),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),r("clear",o.modelValue),pe(()=>{j(),n.platform.is.mobile!==!0&&(y.value=!1)})}function ne(){const l=[];return t.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:A},t.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ue())),b.value===!0&&o.noErrorIcon===!1&&l.push(E("error",[a(J,{name:n.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(E("inner-loading-append",t.loading!==void 0?t.loading():[a(he,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(E("inner-clearable-append",[a(J,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:Q})])),t.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:A},t.append())),e.getInnerAppend!==void 0&&l.push(E("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function ue(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):t.rawControl!==void 0?l.push(t.rawControl()):t.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},t.control(q.value))),F.value===!0&&l.push(a("div",{class:D.value},I(t.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(I(t.default))}function ae(){let l,u;b.value===!0?_.value!==null?(l=[a("div",{role:"alert"},_.value)],u=`q--slot-error-${_.value}`):(l=I(t.error),u="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],u=`q--slot-hint-${o.hint}`):(l=I(t.hint),u="q--slot-hint"));const K=o.counter===!0||t.counter!==void 0;if(o.hideBottomSpace===!0&&K===!1&&l===void 0)return;const G=a("div",{key:u,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:A},[o.hideBottomSpace===!0?G:a(ye,{name:"q-transition--field-message"},()=>G),K===!0?a("div",{class:"q-field__counter"},t.counter!==void 0?t.counter():e.computedCounter.value):null])}function E(l,u){return u===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let W=!1;return me(()=>{W=!0}),ge(()=>{W===!0&&o.autofocus===!0&&s.focus()}),te(()=>{be.value===!0&&o.for===void 0&&(e.targetUid.value=H()),o.autofocus===!0&&s.focus()}),L(()=>{c!==null&&clearTimeout(c)}),Object.assign(s,{focus:p,blur:m}),function(){const u=e.getControl===void 0&&t.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...B.value}:B.value;return a("label",{ref:e.rootRef,class:[w.value,v.class],style:v.style,...u},[t.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:A},t.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:h.value,tabindex:-1,...e.controlEvents},ne()),C.value===!0?ae():null]),t.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:A},t.after()):null])}}const De={name:String};function Te(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function ze(e={}){return(o,r,t)=>{o[r](a("input",{class:"hidden"+(t||""),...e.value}))}}function He(e){return i(()=>e.name||e.for)}export{De as a,Pe as b,He as c,Ue as d,je as e,ke as f,Ae as g,ze as h,Ie as i,Re as j,Te as k,Me as r,Oe as u};
