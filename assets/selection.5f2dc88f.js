import{w as g,a1 as w,o as A,j as y,n as T,a2 as H,b as R,a3 as S,a4 as x}from"./index.4bf09933.js";const h={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},j=["beforeShow","show","beforeHide","hide"];function B({showing:o,canShow:n,hideOnRouteChange:t,handleShow:s,handleHide:r,processOnMount:M}){const f=y(),{props:l,emit:u,proxy:c}=f;let a;function U(e){o.value===!0?d(e):m(e)}function m(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||n!==void 0&&n(e)!==!0)return;const i=l["onUpdate:modelValue"]!==void 0;i===!0&&(u("update:modelValue",!0),a=e,T(()=>{a===e&&(a=void 0)})),(l.modelValue===null||i===!1)&&p(e)}function p(e){o.value!==!0&&(o.value=!0,u("beforeShow",e),s!==void 0?s(e):u("show",e))}function d(e){if(l.disable===!0)return;const i=l["onUpdate:modelValue"]!==void 0;i===!0&&(u("update:modelValue",!1),a=e,T(()=>{a===e&&(a=void 0)})),(l.modelValue===null||i===!1)&&v(e)}function v(e){o.value!==!1&&(o.value=!1,u("beforeHide",e),r!==void 0?r(e):u("hide",e))}function b(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):e===!0!==o.value&&(e===!0?p:v)(a)}g(()=>l.modelValue,b),t!==void 0&&w(f)===!0&&g(()=>c.$route.fullPath,()=>{t.value===!0&&o.value===!0&&d()}),M===!0&&A(()=>{b(l.modelValue)});const V={show:m,hide:d,toggle:U};return Object.assign(c,V),V}function D(){let o=null;const n=y();function t(){o!==null&&(clearTimeout(o),o=null)}return H(t),R(t),{removeTimeout:t,registerTimeout(s,r){t(),S(n)===!1&&(o=setTimeout(()=>{o=null,s()},r))}}}function I(){if(window.getSelection!==void 0){const o=window.getSelection();o.empty!==void 0?o.empty():o.removeAllRanges!==void 0&&(o.removeAllRanges(),x.is.mobile!==!0&&o.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{j as a,D as b,B as c,I as d,h as u};
