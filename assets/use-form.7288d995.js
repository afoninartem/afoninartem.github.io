import{M as se,r as g,o as L,w as x,a as i,i as de,b as Q,ai as fe,j as E,ak as ce,ag as ve,al as pe,W as me,n as ge,a2 as be,ah as he,h as u,a9 as k,Q as X,am as ye,g as M,an as Ce}from"./index.4bf09933.js";import{u as qe,a as xe}from"./use-dark.65f1b23a.js";let z,O=0;const d=new Array(256);for(let e=0;e<256;e++)d[e]=(e+256).toString(16).substring(1);const _e=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const l=new Uint8Array(o);return e.getRandomValues(l),l}}return o=>{const l=[];for(let r=o;r>0;r--)l.push(Math.floor(Math.random()*256));return l}})(),Y=4096;function H(){(z===void 0||O+16>Y)&&(O=0,z=_e(Y));const e=Array.prototype.slice.call(z,O,O+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,d[e[0]]+d[e[1]]+d[e[2]]+d[e[3]]+"-"+d[e[4]]+d[e[5]]+"-"+d[e[6]]+d[e[7]]+"-"+d[e[8]]+d[e[9]]+"-"+d[e[10]]+d[e[11]]+d[e[12]]+d[e[13]]+d[e[14]]+d[e[15]]}function Se(e){return e==null?null:e}function ee(e,o){return e==null?o===!0?`f_${H()}`:null:e}function we({getValue:e,required:o=!0}={}){if(se.value===!0){const l=e!==void 0?g(Se(e())):g(null);return o===!0&&l.value===null&&L(()=>{l.value=`f_${H()}`}),e!==void 0&&x(e,r=>{l.value=ee(r,o)}),l}return e!==void 0?i(()=>ee(e(),o)):g(`f_${H()}`)}function Fe({validate:e,resetValidation:o,requiresQForm:l}){const r=de(fe,!1);if(r!==!1){const{props:c,proxy:s}=E();Object.assign(s,{validate:e,resetValidation:o}),x(()=>c.disable,a=>{a===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),L(()=>{c.disable!==!0&&r.bindComponent(s)}),Q(()=>{c.disable!==!0&&r.unbindComponent(s)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const oe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,le=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,te=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,P=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,D=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,T={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>oe.test(e),hexaColor:e=>le.test(e),hexOrHexaColor:e=>te.test(e),rgbColor:e=>P.test(e),rgbaColor:e=>D.test(e),rgbOrRgbaColor:e=>P.test(e)||D.test(e),hexOrRgbColor:e=>oe.test(e)||P.test(e),hexaOrRgbaColor:e=>le.test(e)||D.test(e),anyColor:e=>te.test(e)||P.test(e)||D.test(e)},Re=[!0,!1,"ondemand"],Be={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Re.includes(e)}};function Ae(e,o){const{props:l,proxy:r}=E(),c=g(!1),s=g(null),a=g(!1);Fe({validate:F,resetValidation:w});let v=0,b;const A=i(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),h=i(()=>l.disable!==!0&&A.value===!0&&o.value===!1),S=i(()=>l.error===!0||c.value===!0),j=i(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:s.value);x(()=>l.modelValue,()=>{a.value=!0,h.value===!0&&l.lazyRules===!1&&C()});function V(){l.lazyRules!=="ondemand"&&h.value===!0&&a.value===!0&&C()}x(()=>l.reactiveRules,y=>{y===!0?b===void 0&&(b=x(()=>l.rules,V,{immediate:!0,deep:!0})):b!==void 0&&(b(),b=void 0)},{immediate:!0}),x(()=>l.lazyRules,V),x(e,y=>{y===!0?a.value=!0:h.value===!0&&l.lazyRules!=="ondemand"&&C()});function w(){v++,o.value=!1,a.value=!1,c.value=!1,s.value=null,C.cancel()}function F(y=l.modelValue){if(l.disable===!0||A.value===!1)return!0;const R=++v,U=o.value!==!0?()=>{a.value=!0}:()=>{},q=(f,p)=>{f===!0&&U(),c.value=f,s.value=p||null,o.value=!1},B=[];for(let f=0;f<l.rules.length;f++){const p=l.rules[f];let m;if(typeof p=="function"?m=p(y,T):typeof p=="string"&&T[p]!==void 0&&(m=T[p](y)),m===!1||typeof m=="string")return q(!0,m),!1;m!==!0&&m!==void 0&&B.push(m)}return B.length===0?(q(!1),!0):(o.value=!0,Promise.all(B).then(f=>{if(f===void 0||Array.isArray(f)===!1||f.length===0)return R===v&&q(!1),!0;const p=f.find(m=>m===!1||typeof m=="string");return R===v&&q(p!==void 0,p),p===void 0},f=>(R===v&&(console.error(f),q(!0)),!1)))}const C=ce(F,0);return Q(()=>{b!==void 0&&b(),C.cancel()}),Object.assign(r,{resetValidation:w,validate:F}),ve(r,"hasError",()=>S.value),{isDirtyModel:a,hasRules:A,hasError:S,errorMessage:j,validate:F,resetValidation:w}}const re=/^on[A-Z]/;function Ve(){const{attrs:e,vnode:o}=E(),l={listeners:g({}),attributes:g({})};function r(){const c={},s={};for(const a in e)a!=="class"&&a!=="style"&&re.test(a)===!1&&(c[a]=e[a]);for(const a in o.props)re.test(a)===!0&&(s[a]=o.props[a]);l.attributes.value=c,l.listeners.value=s}return pe(r),r(),l}let _=[],$=[];function ne(e){$=$.filter(o=>o!==e)}function Oe(e){ne(e),$.push(e)}function Pe(e){ne(e),$.length===0&&_.length!==0&&(_[_.length-1](),_=[])}function ke(e){$.length===0?e():_.push(e)}function $e(e){_=_.filter(o=>o!==e)}function Ee(e){return e!=null&&(""+e).length!==0}const De={...qe,...Be,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},je=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ue({requiredForAttr:e=!0,tagProp:o}={}){const{props:l,proxy:r}=E(),c=xe(l,r.$q),s=we({required:e,getValue:()=>l.for});return{requiredForAttr:e,tag:o===!0?i(()=>l.tag):{value:"label"},isDark:c,editable:i(()=>l.disable!==!0&&l.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Ve(),targetUid:s,rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function ze(e){const{props:o,emit:l,slots:r,attrs:c,proxy:s}=E(),{$q:a}=s;let v=null;e.hasValue===void 0&&(e.hasValue=i(()=>Ee(o.modelValue))),e.emitValue===void 0&&(e.emitValue=t=>{l("update:modelValue",t)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:Z,onFocusout:N}),Object.assign(e,{clearValue:W,onControlFocusin:Z,onControlFocusout:N,focus:p}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const t=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return t+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:b,hasRules:A,hasError:h,errorMessage:S,resetValidation:j}=Ae(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),w=i(()=>o.bottomSlots===!0||o.hint!==void 0||A.value===!0||o.counter===!0||o.error!==null),F=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=i(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&w.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),y=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(h.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),R=i(()=>o.labelSlot===!0||o.label!==void 0),U=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&h.value!==!0?` text-${o.labelColor}`:"")),q=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:o.modelValue,emitValue:e.emitValue})),B=i(()=>{const t={};return e.targetUid.value&&(t.for=e.targetUid.value),o.disable===!0&&(t["aria-disabled"]="true"),t});function f(){const t=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(t===null||t.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus({preventScroll:!0}))}function p(){ke(f)}function m(){$e(f);const t=document.activeElement;t!==null&&e.rootRef.value.contains(t)&&t.blur()}function Z(t){v!==null&&(clearTimeout(v),v=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",t))}function N(t,n){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",t)),n!==void 0&&n())})}function W(t){me(t),a.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",o.modelValue),ge(()=>{const n=b.value;j(),b.value=n})}function ue(){const t=[];return r.prepend!==void 0&&t.push(u("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:k},r.prepend())),t.push(u("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ae())),h.value===!0&&o.noErrorIcon===!1&&t.push(I("error",[u(X,{name:a.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?t.push(I("inner-loading-append",r.loading!==void 0?r.loading():[u(ye,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&t.push(I("inner-clearable-append",[u(X,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||a.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:W})])),r.append!==void 0&&t.push(u("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:k},r.append())),e.getInnerAppend!==void 0&&t.push(I("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&t.push(e.getControlChild()),t}function ae(){const t=[];return o.prefix!==void 0&&o.prefix!==null&&t.push(u("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&t.push(e.getShadowControl()),e.getControl!==void 0?t.push(e.getControl()):r.rawControl!==void 0?t.push(r.rawControl()):r.control!==void 0&&t.push(u("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),R.value===!0&&t.push(u("div",{class:U.value},M(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&t.push(u("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),t.concat(M(r.default))}function ie(){let t,n;h.value===!0?S.value!==null?(t=[u("div",{role:"alert"},S.value)],n=`q--slot-error-${S.value}`):(t=M(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(t=[u("div",o.hint)],n=`q--slot-hint-${o.hint}`):(t=M(r.hint),n="q--slot-hint"));const G=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&G===!1&&t===void 0)return;const J=u("div",{key:n,class:"q-field__messages col"},t);return u("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:k},[o.hideBottomSpace===!0?J:u(Ce,{name:"q-transition--field-message"},()=>J),G===!0?u("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function I(t,n){return n===null?null:u("div",{key:t,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let K=!1;return be(()=>{K=!0}),he(()=>{K===!0&&o.autofocus===!0&&s.focus()}),o.autofocus===!0&&L(()=>{s.focus()}),Q(()=>{v!==null&&clearTimeout(v)}),Object.assign(s,{focus:p,blur:m}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...B.value}:B.value;return u(e.tag.value,{ref:e.rootRef,class:[C.value,c.class],style:c.style,...n},[r.before!==void 0?u("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:k},r.before()):null,u("div",{class:"q-field__inner relative-position col self-stretch"},[u("div",{ref:e.controlRef,class:y.value,tabindex:-1,...e.controlEvents},ue()),w.value===!0?ie():null]),r.after!==void 0?u("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:k},r.after()):null])}}const Te={name:String};function He(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Le(e={}){return(o,l,r)=>{o[l](u("input",{class:"hidden"+(r||""),...e.value}))}}function Qe(e){return i(()=>e.name||e.for)}export{Te as a,je as b,Qe as c,Ue as d,ze as e,Ee as f,ke as g,Oe as h,Le as i,He as j,we as k,H as l,Pe as r,De as u};
