import{Q as r}from"./QInput.3a6fe896.js";import{C as x,r as n,H as y,I as h,J as u,ad as i,K as t,T as m,ae as v}from"./index.e029a779.js";import{Q as w}from"./QForm.b53dcaef.js";import{Q as _}from"./QPage.c8f57a58.js";import{u as b}from"./use-quasar.adcda8b6.js";import"./use-form.fabb1506.js";import"./use-dark.47dccd53.js";import"./use-file-dom-props.f1f4081b.js";import"./use-key-composition.b7bf7482.js";const Q={class:"q-pa-md",style:{"flex-basis":"400px"}},U={__name:"LoginPage",setup(V){const p=x(),a=b(),l=n(null),o=n(null),d=()=>l.value.endsWith("@artis21.ru"),c=()=>{p.login({email:l.value,password:o.value})},f=()=>{d()?a.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043E\u0448\u043B\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443"}):a.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 \u0410\u0440\u0442\u0438\u0441 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043B\u043E\u0433\u0438\u043D\u0430"})},g=()=>{l.value=null,o.value=null};return(C,s)=>(y(),h(_,{class:"fullscreen text-white text-center q-pa-md flex flex-center"},{default:u(()=>[i("div",Q,[t(w,{onSubmit:f,onReset:g,class:"q-gutter-md"},{default:u(()=>[t(r,{filled:"",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e),type:"email",label:"\u041B\u043E\u0433\u0438\u043D (\u043F\u043E\u0447\u0442\u0430 @artis21.ru)",hint:"\u0412\u0430\u0448\u0430 \u0440\u0430\u0431\u043E\u0447\u0430\u044F \u043F\u043E\u0447\u0442\u0430","lazy-rules":"",rules:[e=>e&&e.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0443 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443"]},null,8,["modelValue","rules"]),t(r,{filled:"",type:"password",modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=e=>o.value=e),label:"\u041F\u0430\u0440\u043E\u043B\u044C","lazy-rules":"",rules:[e=>e!==null&&e!==""||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",e=>e.toString().length==6||`\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ${e.toString().length}`]},null,8,["modelValue","rules"]),i("div",null,[t(m,{label:"\u0412\u043E\u0439\u0442\u0438",type:"submit",color:"primary",onClick:v(c,["prevent"])},null,8,["onClick"]),t(m,{label:"\u0421\u0431\u0440\u043E\u0441",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})])]),_:1}))}};export{U as default};
