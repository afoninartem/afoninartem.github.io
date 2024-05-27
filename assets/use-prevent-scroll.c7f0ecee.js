import{h as q,k as T,u as S,x as E,z as P,q as H,a7 as m,a,Y as s,g as x,a8 as C}from"./index.3fed2421.js";import{u as k,a as V}from"./use-dark.7be76274.js";import{b as B,a as Y,h as z}from"./scroll.9a76306a.js";var Q=q({name:"QList",props:{...k,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=P(),o=V(e,l.proxy.$q),r=T(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:r.value},E(t.default))}});function F(e,t,l){let o;function r(){o!==void 0&&(m.remove(o),o=void 0)}return H(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){o={condition:()=>l.value===!0,handler:t},m.add(o)}}}let d=0,p,v,c,w=!1,h,y,g,n=null;function W(e){X(e)&&x(e)}function X(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=C(e),l=e.shiftKey&&!e.deltaX,o=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=l||o?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const i=t[f];if(z(i,o))return o?r<0&&i.scrollTop===0?!0:r>0&&i.scrollTop+i.clientHeight===i.scrollHeight:r<0&&i.scrollLeft===0?!0:r>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function b(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function u(e){w!==!0&&(w=!0,requestAnimationFrame(()=>{w=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:o}=document.scrollingElement;(c===void 0||t!==window.innerHeight)&&(c=l-t,document.scrollingElement.scrollTop=o),o>c&&(document.scrollingElement.scrollTop-=Math.ceil((o-c)/8))}))}function L(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:r}=window.getComputedStyle(t);p=B(window),v=Y(window),h=t.style.left,y=t.style.top,g=window.location.href,t.style.left=`-${p}px`,t.style.top=`-${v}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,a.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",u,s.passiveCapture),window.visualViewport.addEventListener("scroll",u,s.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",b,s.passiveCapture))}a.is.desktop===!0&&a.is.mac===!0&&window[`${e}EventListener`]("wheel",W,s.notPassive),e==="remove"&&(a.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",u,s.passiveCapture),window.visualViewport.removeEventListener("scroll",u,s.passiveCapture)):window.removeEventListener("scroll",b,s.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=h,t.style.top=y,window.location.href===g&&window.scrollTo(p,v),c=void 0)}function A(e){let t="add";if(e===!0){if(d++,n!==null){clearTimeout(n),n=null;return}if(d>1)return}else{if(d===0||(d--,d>0))return;if(t="remove",a.is.ios===!0&&a.is.nativeMobile===!0){n!==null&&clearTimeout(n),n=setTimeout(()=>{L(t),n=null},100);return}}L(t)}function U(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,A(t))}}}export{Q,U as a,F as u};
