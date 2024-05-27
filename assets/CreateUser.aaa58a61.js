import{Q as a}from"./QInput.4aa5f8a4.js";import{r as n,H as _,M as f,K as l,J as g,ad as i,T as u,ae as y}from"./index.3fed2421.js";import{Q as v}from"./QForm.68d8505c.js";import{u as h}from"./use-quasar.7831595d.js";import"./use-form.12a5b6c2.js";import"./use-dark.7be76274.js";import"./use-file-dom-props.5bacef0c.js";import"./use-key-composition.0fcc8103.js";const V={class:"create-user"},b=i("h4",null,"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",-1),M={__name:"CreateUser",setup(w){const s=h(),t=n(null),r=n(null),m=()=>{console.log("create user")},d=()=>t.value.endsWith("@artis21.ru"),p=()=>{d()?s.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D"}):s.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u041B\u043E\u0433\u0438\u043D\u043E\u043C \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 *@artis21.ru"})},c=()=>{t.value=null,r.value=null};return(C,o)=>(_(),f("div",V,[b,l(v,{onSubmit:p,onReset:c,class:"q-gutter-md form"},{default:g(()=>[l(a,{filled:"",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),type:"email",label:"\u041B\u043E\u0433\u0438\u043D (\u043F\u043E\u0447\u0442\u0430 @artis21.ru)",hint:"\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430","lazy-rules":"",rules:[e=>e&&e.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443"]},null,8,["modelValue","rules"]),l(a,{filled:"",type:"password",modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=e=>r.value=e),label:"\u041F\u0430\u0440\u043E\u043B\u044C","lazy-rules":"",rules:[e=>e!==null&&e!==""||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",e=>e.toString().length==6||`\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ${e.toString().length}`]},null,8,["modelValue","rules"]),i("div",null,[l(u,{label:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C",type:"submit",color:"primary",onClick:y(m,["prevent"])}),l(u,{label:"\u0421\u0431\u0440\u043E\u0441",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})]))}};export{M as default};
