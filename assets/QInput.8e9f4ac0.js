import{u as ae,a as ne,b as le,c as ie,d as re,e as ue,f as G,g as oe}from"./use-form.e7390af2.js";import{r as X,w as I,m as L,af as se,h as fe,k as O,q as de,o as ce,u as D,ag as ge,z as me,s as J}from"./index.1a2ebdf4.js";import{u as ve}from"./use-file-dom-props.2cb444a5.js";import{u as he}from"./use-key-composition.0b799554.js";const p={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},U={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},te=Object.keys(U);te.forEach(e=>{U[e].regex=new RegExp(U[e].pattern)});const ke=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+te.join("")+"])|(.)","g"),ee=/[.*+?^${}()|[\]\\]/g,h=String.fromCharCode(1),Me={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function xe(e,F,H,Z){let m,v,V,R,P,M;const x=X(null),f=X(C());function Y(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,q),I(()=>e.mask,l=>{if(l!==void 0)j(f.value,!0);else{const a=S(f.value);q(),e.modelValue!==a&&F("update:modelValue",a)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&j(f.value,!0)}),I(()=>e.unmaskedValue,()=>{x.value===!0&&j(f.value)});function C(){if(q(),x.value===!0){const l=z(S(e.modelValue));return e.fillMask!==!1?$(l):l}return e.modelValue}function N(l){if(l<m.length)return m.slice(-l);let a="",i=m;const n=i.indexOf(h);if(n!==-1){for(let u=l-i.length;u>0;u--)a+=h;i=i.slice(0,n)+a+i.slice(n)}return i}function q(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&Y(),x.value===!1){R=void 0,m="",v="";return}const l=p[e.mask]===void 0?e.mask:p[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=a.replace(ee,"\\$&"),n=[],u=[],r=[];let g=e.reverseFillMask===!0,o="",s="";l.replace(ke,(k,t,c,E,b)=>{if(E!==void 0){const w=U[E];r.push(w),s=w.negate,g===!0&&(u.push("(?:"+s+"+)?("+w.pattern+"+)?(?:"+s+"+)?("+w.pattern+"+)?"),g=!1),u.push("(?:"+s+"+)?("+w.pattern+")?")}else if(c!==void 0)o="\\"+(c==="\\"?"":c),r.push(c),n.push("([^"+o+"]+)?"+o+"?");else{const w=t!==void 0?t:b;o=w==="\\"?"\\\\\\\\":w.replace(ee,"\\\\$&"),r.push(w),n.push("([^"+o+"]+)?"+o+"?")}});const K=new RegExp("^"+n.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),T=u.length-1,d=u.map((k,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+k):t===T?new RegExp("^"+k+"("+(s===""?".":s)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+k));V=r,R=k=>{const t=K.exec(e.reverseFillMask===!0?k:k.slice(0,r.length+1));t!==null&&(k=t.slice(1).join(""));const c=[],E=d.length;for(let b=0,w=k;b<E;b++){const B=d[b].exec(w);if(B===null)break;w=w.slice(B.shift().length),c.push(...B)}return c.length!==0?c.join(""):k},m=r.map(k=>typeof k=="string"?k:h).join(""),v=m.split(h).join(a)}function j(l,a,i){const n=Z.value,u=n.selectionEnd,r=n.value.length-u,g=S(l);a===!0&&q();const o=z(g),s=e.fillMask!==!1?$(o):o,K=f.value!==s;n.value!==s&&(n.value=s),K===!0&&(f.value=s),document.activeElement===n&&L(()=>{if(s===v){const d=e.reverseFillMask===!0?v.length:0;n.setSelectionRange(d,d,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const d=n.selectionEnd;let k=u-1;for(let t=P;t<=k&&t<d;t++)m[t]!==h&&k++;y.right(n,k);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)!==-1){const d=e.reverseFillMask===!0?u===0?s.length>o.length?1:0:Math.max(0,s.length-(s===v?0:Math.min(o.length,r)+1))+1:u;n.setSelectionRange(d,d,"forward");return}if(e.reverseFillMask===!0)if(K===!0){const d=Math.max(0,s.length-(s===v?0:Math.min(o.length,r+1)));d===1&&u===1?n.setSelectionRange(d,d,"forward"):y.rightReverse(n,d)}else{const d=s.length-r;n.setSelectionRange(d,d,"backward")}else if(K===!0){const d=Math.max(0,m.indexOf(h),Math.min(o.length,u)-1);y.right(n,d)}else{const d=u-1;y.right(n,d)}});const T=e.unmaskedValue===!0?S(s):s;String(e.modelValue)!==T&&(e.modelValue!==null||T!=="")&&H(T,!0)}function Q(l,a,i){const n=z(S(l.value));a=Math.max(0,m.indexOf(h),Math.min(n.length,a)),P=a,l.setSelectionRange(a,i,"forward")}const y={left(l,a){const i=m.slice(a-1).indexOf(h)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(m[n]===h){a=n,i===!0&&a++;break}if(n<0&&m[a]!==void 0&&m[a]!==h)return y.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const i=l.value.length;let n=Math.min(i,a+1);for(;n<=i;n++)if(m[n]===h){a=n;break}else m[n-1]===h&&(a=n);if(n>i&&m[a-1]!==void 0&&m[a-1]!==h)return y.left(l,i);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const i=N(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n-1]===h){a=n;break}else if(i[n]===h&&(a=n,n===0))break;if(n<0&&i[a]!==void 0&&i[a]!==h)return y.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const i=l.value.length,n=N(i),u=n.slice(0,a+1).indexOf(h)===-1;let r=Math.min(i,a+1);for(;r<=i;r++)if(n[r-1]===h){a=r,a>0&&u===!0&&a--;break}if(r>i&&n[a-1]!==void 0&&n[a-1]!==h)return y.leftReverse(l,i);l.setSelectionRange(a,a,"forward")}};function W(l){F("click",l),M=void 0}function _(l){if(F("keydown",l),se(l)===!0||l.altKey===!0)return;const a=Z.value,i=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(M=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&M===void 0&&(M=a.selectionDirection==="forward"?i:n);const u=y[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),u(a,M===i?n:i),l.shiftKey){const r=a.selectionStart;a.setSelectionRange(Math.min(M,r),Math.max(M,r),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===n?(y.left(a,i),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===n&&(y.rightReverse(a,n),a.setSelectionRange(i,a.selectionEnd,"forward"))}function z(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return A(l);const a=V;let i=0,n="";for(let u=0;u<a.length;u++){const r=l[i],g=a[u];if(typeof g=="string")n+=g,r===g&&i++;else if(r!==void 0&&g.regex.test(r))n+=g.transform!==void 0?g.transform(r):r,i++;else return n}return n}function A(l){const a=V,i=m.indexOf(h);let n=l.length-1,u="";for(let r=a.length-1;r>=0&&n!==-1;r--){const g=a[r];let o=l[n];if(typeof g=="string")u=g+u,o===g&&n--;else if(o!==void 0&&g.regex.test(o))do u=(g.transform!==void 0?g.transform(o):o)+u,n--,o=l[n];while(i===r&&o!==void 0&&g.regex.test(o));else return u}return u}function S(l){return typeof l!="string"||R===void 0?typeof l=="number"?R(""+l):l:R(l)}function $(l){return v.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?v.slice(0,-l.length)+l:l+v.slice(l.length)}return{innerValue:f,hasMask:x,moveCursorForPaste:Q,updateMaskValue:j,onMaskedKeydown:_,onMaskedClick:W}}var be=fe({name:"QInput",inheritAttrs:!1,props:{...ae,...Me,...ne,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...le,"paste","change","keydown","click","animationend"],setup(e,{emit:F,attrs:H}){const{proxy:Z}=me(),{$q:m}=Z,v={};let V=NaN,R,P,M=null,x;const f=X(null),Y=ie(e),{innerValue:C,hasMask:N,moveCursorForPaste:q,updateMaskValue:j,onMaskedKeydown:Q,onMaskedClick:y}=xe(e,F,o,f),W=ve(e,!0),_=O(()=>G(C.value)),z=he(r),A=re(),S=O(()=>e.type==="textarea"||e.autogrow===!0),$=O(()=>S.value===!0||["text","search","url","tel","password"].includes(e.type)),l=O(()=>{const t={...A.splitAttrs.listeners.value,onInput:r,onPaste:u,onChange:K,onBlur:T,onFocus:J};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=z,N.value===!0&&(t.onKeydown=Q,t.onClick=y),e.autogrow===!0&&(t.onAnimationend=g),t}),a=O(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Y.value,...A.splitAttrs.attributes.value,id:A.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return S.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});I(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),I(()=>e.modelValue,t=>{if(N.value===!0){if(P===!0&&(P=!1,String(t)===V))return;j(t)}else C.value!==t&&(C.value=t,e.type==="number"&&v.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete v.value));e.autogrow===!0&&L(s)}),I(()=>e.autogrow,t=>{t===!0?L(s):f.value!==null&&H.rows>0&&(f.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&L(s)});function i(){oe(()=>{const t=document.activeElement;f.value!==null&&f.value!==t&&(t===null||t.id!==A.targetUid.value)&&f.value.focus({preventScroll:!0})})}function n(){f.value!==null&&f.value.select()}function u(t){if(N.value===!0&&e.reverseFillMask!==!0){const c=t.target;q(c,c.selectionStart,c.selectionEnd)}F("paste",t)}function r(t){if(!t||!t.target)return;if(e.type==="file"){F("update:modelValue",t.target.files);return}const c=t.target.value;if(t.target.qComposing===!0){v.value=c;return}if(N.value===!0)j(c,!1,t.inputType);else if(o(c),$.value===!0&&t.target===document.activeElement){const{selectionStart:E,selectionEnd:b}=t.target;E!==void 0&&b!==void 0&&L(()=>{t.target===document.activeElement&&c.indexOf(t.target.value)===0&&t.target.setSelectionRange(E,b)})}e.autogrow===!0&&s()}function g(t){F("animationend",t),s()}function o(t,c){x=()=>{M=null,e.type!=="number"&&v.hasOwnProperty("value")===!0&&delete v.value,e.modelValue!==t&&V!==t&&(V=t,c===!0&&(P=!0),F("update:modelValue",t),L(()=>{V===t&&(V=NaN)})),x=void 0},e.type==="number"&&(R=!0,v.value=t),e.debounce!==void 0?(M!==null&&clearTimeout(M),v.value=t,M=setTimeout(x,e.debounce)):x()}function s(){requestAnimationFrame(()=>{const t=f.value;if(t!==null){const c=t.parentNode.style,{scrollTop:E}=t,{overflowY:b,maxHeight:w}=m.platform.is.firefox===!0?{}:window.getComputedStyle(t),B=b!==void 0&&b!=="scroll";B===!0&&(t.style.overflowY="hidden"),c.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",B===!0&&(t.style.overflowY=parseInt(w,10)<t.scrollHeight?"auto":"hidden"),c.marginBottom="",t.scrollTop=E}})}function K(t){z(t),M!==null&&(clearTimeout(M),M=null),x!==void 0&&x(),F("change",t.target.value)}function T(t){t!==void 0&&J(t),M!==null&&(clearTimeout(M),M=null),x!==void 0&&x(),R=!1,P=!1,delete v.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=C.value!==void 0?C.value:"")})}function d(){return v.hasOwnProperty("value")===!0?v.value:C.value!==void 0?C.value:""}de(()=>{T()}),ce(()=>{e.autogrow===!0&&s()}),Object.assign(A,{innerValue:C,fieldClass:O(()=>`q-${S.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:O(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:o,hasValue:_,floatingLabel:O(()=>_.value===!0&&(e.type!=="number"||isNaN(C.value)===!1)||G(e.displayValue)),getControl:()=>D(S.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:d()}:W.value}),getShadowControl:()=>D("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(S.value===!0?"":" text-no-wrap")},[D("span",{class:"invisible"},d()),D("span",e.shadowText)])});const k=ue(A);return Object.assign(Z,{focus:i,select:n,getNativeElement:()=>f.value}),ge(Z,"nativeEl",()=>f.value),k}});export{be as Q};
