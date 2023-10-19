import{Q as w}from"./QInput.ed5a497e.js";import{h as Q,r as x,aa as E,ae as k,o as A,t as I,v as R,z as j,ab as z,g as P,k as K,W as $,af as D,x as M,ag as N,C as O,H as T,I as U,J as _,ad as B,K as m,T as F,ah as W}from"./index.ba41c96b.js";import{a as H}from"./use-key-composition.a24491ef.js";import{Q as J}from"./QPage.a23d5dfa.js";import"./use-dark.3d4d6b20.js";var L=Q({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(l,{slots:y,emit:f}){const c=j(),a=x(null);let u=0;const r=[];function v(e){const i=typeof e=="boolean"?e:l.noErrorFocus!==!0,g=++u,S=(o,n)=>{f("validation"+(o===!0?"Success":"Error"),n)},C=o=>{const n=o.validate();return typeof n.then=="function"?n.then(s=>({valid:s,comp:o}),s=>({valid:!1,comp:o,err:s})):Promise.resolve({valid:n,comp:o})};return(l.greedy===!0?Promise.all(r.map(C)).then(o=>o.filter(n=>n.valid!==!0)):r.reduce((o,n)=>o.then(()=>C(n).then(s=>{if(s.valid===!1)return Promise.reject(s)})),Promise.resolve()).catch(o=>[o])).then(o=>{if(o===void 0||o.length===0)return g===u&&S(!0),!0;if(g===u){const{comp:n,err:s}=o[0];if(s!==void 0&&console.error(s),S(!1,n),i===!0){const V=o.find(({comp:q})=>typeof q.focus=="function"&&z(q.$)===!1);V!==void 0&&V.comp.focus()}}return!1})}function p(){u++,r.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function b(e){e!==void 0&&P(e);const i=u+1;v().then(g=>{i===u&&g===!0&&(l.onSubmit!==void 0?f("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function d(e){e!==void 0&&P(e),f("reset"),K(()=>{p(),l.autofocus===!0&&l.noResetFocus!==!0&&t()})}function t(){H(()=>{if(a.value===null)return;const e=a.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(a.value.querySelectorAll("[tabindex]"),i=>i.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}$(D,{bindComponent(e){r.push(e)},unbindComponent(e){const i=r.indexOf(e);i>-1&&r.splice(i,1)}});let h=!1;return E(()=>{h=!0}),k(()=>{h===!0&&l.autofocus===!0&&t()}),A(()=>{l.autofocus===!0&&t()}),Object.assign(c.proxy,{validate:v,resetValidation:p,submit:b,reset:d,focus:t,getValidationComponents:()=>r}),()=>I("form",{class:"q-form",ref:a,onSubmit:b,onReset:d},R(y.default))}});function G(){return M(N)}const X={class:"q-pa-md",style:{"flex-basis":"400px"}},ne={__name:"LoginPage",setup(l){const y=O(),f=G(),c=x("test1@artis21.ru"),a=x("123456"),u=()=>c.value.endsWith("@artis21.ru"),r=()=>{y.login({email:c.value,password:a.value})},v=()=>{u()?f.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043E\u0448\u043B\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443"}):f.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 \u0410\u0440\u0442\u0438\u0441 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043B\u043E\u0433\u0438\u043D\u0430"})},p=()=>{c.value=null,a.value=null};return(b,d)=>(T(),U(J,{class:"fullscreen text-white text-center q-pa-md flex flex-center"},{default:_(()=>[B("div",X,[m(L,{onSubmit:v,onReset:p,class:"q-gutter-md"},{default:_(()=>[m(w,{filled:"",modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=t=>c.value=t),type:"email",label:"\u041B\u043E\u0433\u0438\u043D (\u043F\u043E\u0447\u0442\u0430 @artis21.ru)",hint:"\u0412\u0430\u0448\u0430 \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u043F\u043E\u0447\u0442\u0430","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0443 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443"]},null,8,["modelValue","rules"]),m(w,{filled:"",type:"password",modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=t=>a.value=t),label:"\u041F\u0430\u0440\u043E\u043B\u044C","lazy-rules":"",rules:[t=>t!==null&&t!==""||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",t=>t.toString().length==6||`\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ${t.toString().length}`]},null,8,["modelValue","rules"]),B("div",null,[m(F,{label:"\u0412\u043E\u0439\u0442\u0438",type:"submit",color:"primary",onClick:W(r,["prevent"])},null,8,["onClick"]),m(F,{label:"\u0421\u0431\u0440\u043E\u0441",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})])]),_:1}))}};export{ne as default};
