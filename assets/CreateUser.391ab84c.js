import{Q as i}from"./QInput.02ed69c5.js";import{X as _,D as g,ao as w,r as m,p as h,y as V,v as r,t as U,ad as c,E as p,ae as b}from"./index.cfc702c5.js";import{Q as C}from"./QForm.3df7f1c2.js";import{u as x}from"./use-quasar.bf614a5e.js";import"./use-form.01601663.js";import"./use-dark.c42aa7e4.js";import"./use-file-dom-props.1900fd32.js";import"./use-key-composition.06dc6a81.js";const S=_("createUser",()=>{const{user:d}=g();return{newUser:async(u,t,l)=>{const s={email:u,password:t,role:l};await w.post("/user/new",{...s},{headers:{Authorization:`Bearer ${d.token}`}}).then(a=>{console.log(a.data.data)}).catch(a=>{console.log(a)})}}});const Q={class:"create-user"},B=c("h4",null,"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",-1),F={__name:"CreateUser",setup(d){const n=x(),{newUser:u}=S(),t=m(null),l=m(null),s=m(null),a=()=>{u(t.value,l.value,s.value)},f=()=>t.value.endsWith("@artis21.ru"),v=()=>{f()?n.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D"}):n.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u041B\u043E\u0433\u0438\u043D\u043E\u043C \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 *@artis21.ru"})},y=()=>{t.value=null,l.value=null};return(k,o)=>(h(),V("div",Q,[B,r(C,{onSubmit:v,onReset:y,class:"q-gutter-md form"},{default:U(()=>[r(i,{filled:"",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),type:"email",label:"\u041B\u043E\u0433\u0438\u043D (\u043F\u043E\u0447\u0442\u0430 @artis21.ru)",hint:"\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430","lazy-rules":"",rules:[e=>e&&e.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443"]},null,8,["modelValue","rules"]),r(i,{filled:"",type:"password",modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e),label:"\u041F\u0430\u0440\u043E\u043B\u044C","lazy-rules":"",rules:[e=>e!==null&&e!==""||"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",e=>e.toString().length==6||`\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ${e.toString().length}`]},null,8,["modelValue","rules"]),r(i,{type:"text",label:"\u0420\u043E\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=e=>s.value=e)},null,8,["modelValue"]),c("div",null,[r(p,{label:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C",type:"submit",color:"primary",onClick:b(a,["prevent"])}),r(p,{label:"\u0421\u0431\u0440\u043E\u0441",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})]))}};export{F as default};
