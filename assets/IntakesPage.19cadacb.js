import{Z as f,D as v,r as y,a as g,aq as B,s as S,p as t,y as s,v as T,u as p,F as c,z as u,A as N,aN as w,af as x,B as d}from"./index.1f69b706.js";import{_ as V}from"./MultiFilesUpload.7b9127ec.js";import"./QLinearProgress.922f9aaa.js";import"./use-dark.a9a5dd07.js";import"./QTooltip.92c3f307.js";import"./position-engine.5b553eb4.js";import"./selection.43d4a6f4.js";import"./private.use-form.65999595.js";import"./scroll.36fd76b0.js";import"./QChip.373dc8cc.js";import"./QFile.d29c7e3c.js";import"./use-file-dom-props.c001c208.js";import"./format.de7e9769.js";const m=f("intakes",()=>{const{user:l}=v(),o=y(null),i=async a=>{const r=new FormData;for(let e=0;e<a.length;e++)r.append("intakes",a[e]);await B.post("/warehouse/intakes/upload",r,{headers:{Authorization:`Bearer ${l.token}`,"Content-Type":"multipart/form-data"}}).then(e=>{o.value=e.data.data,console.log(e)}).catch(e=>console.log(e))},n=g(()=>o.value);return{sendToBackend:i,issues:n}});const $={class:"intakes"},b=w('<div class="description"><h6>\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439:</h6><ol><li><p>\u0412 1\u04217.7 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0442\u0447\u0435\u0442 \u041F\u0435\u0447\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439.</p></li><li><p>\u0412 \u0433\u0440\u0430\u0444\u0435 \u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u043F\u0435\u0440\u0432\u0430\u044F \u0434\u0430\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0443 <b>\u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0433\u043E</b> \u043C\u0435\u0441\u044F\u0446\u0430. </p></li><li><p>\u0412 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0448\u0438 \u043F\u0430\u043F\u043A\u0438 \u0438\u0437 \u043A\u043E\u0440\u043D\u044F \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430 \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.</p></li><li><p> \u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442. </p></li><li><p> \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 TXT. </p></li><li><p> \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0432\u0448\u0438\u0439\u0441\u044F \u0444\u0430\u0439\u043B \u0432 \u043E\u043A\u043D\u043E \u043D\u0438\u0436\u0435. </p></li></ol></div>',1),A={key:0,class:"issues"},j={__name:"IntakesPage",setup(l){const{sendToBackend:o}=m(),{issues:i}=S(m()),n=async(...a)=>{await o(a)};return(a,r)=>(t(),s("div",$,[b,T(V,{accept:".txt",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C XLS",onSendMessage:n}),p(i)?(t(),s("div",A,[(t(!0),s(c,null,u(p(i),(e,_)=>(t(),s("div",{class:"issues__item",key:`intake-${_}`},[x("h6",null,d(e.title),1),(t(!0),s(c,null,u(e.issues,(k,h)=>(t(),s("p",{key:`issue-${h}`},d(k),1))),128))]))),128))])):N("",!0)]))}};export{j as default};
