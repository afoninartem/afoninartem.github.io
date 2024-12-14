import{Q as y}from"./QExpansionItem.335aa9fa.js";import{X as f,D as w,r as C,a as v,ao as h,s as x,p as a,y as c,ad as o,v as _,t as B,u as d,F as b,z as T,A as g,E as L,B as R,x as S}from"./index.ef225a1a.js";import{_ as A}from"./MultiFilesUpload.c905fec5.js";import"./QItem.d9875fe4.js";import"./use-dark.6b3a4773.js";import"./QSeparator.4725f750.js";import"./use-form.0c90aca7.js";import"./selection.a54e58f6.js";import"./position-engine.3e721305.js";import"./scroll.088aa9f0.js";import"./QTooltip.4cbcdd3f.js";import"./QChip.f5b843b4.js";import"./QFile.98b9550d.js";import"./use-file-dom-props.729a8976.js";import"./format.3e32b8d9.js";const k=f("report60",()=>{const{user:u}=w(),n=C(null),p=v(()=>n.value?n.value.response.split(`
`):n.value);return{sendToBackend:async t=>{const s=new FormData;for(let e=0;e<t.length;e++)s.append("r60",t[e]);await h.post("/accounting/report60/upload",s,{headers:{Authorization:`Bearer ${u.token}`,"Content-Type":"multipart/form-data"}}).then(e=>{console.log(e.data.data.issues),console.log(e.data.data.response),n.value=e.data.data}).catch(e=>console.log(e))},uploadResponse:p,download:async()=>{await h.get("/accounting/report60/download",{headers:{Authorization:`Bearer ${u.token}`},responseType:"blob"}).then(t=>{const s=t.headers.get("Content-Type");console.log(s);const e="\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u0432\u0435\u0440\u043A\u0435 60.xlsx";console.log(e);const i=URL.createObjectURL(t.data),l=document.createElement("a");l.href=i,l.download=e,document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(i)}).catch(t=>console.log(t))}}});const X={class:"check-60"},E=o("h4",null,"\u0421\u0432\u0435\u0440\u043A\u0430 \u043F\u043E \u0441\u0447\u0435\u0442\u0443 60",-1),N={class:"description"},U=o("p",null,"\u0412\u0441\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u0437 1\u0421 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 XLS \u0438\u043B\u0438 XLSX.",-1),V=o("p",null,"1C7.7:",-1),$=o("ol",null,[o("li",null,"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0442\u0447\u0435\u0442 \u0420\u0430\u0441\u0447\u0435\u0442\u044B \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438"),o("li",null,"\u0412 \u043F\u043E\u043B\u0435 \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443 \u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438 \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F"),o("li",null,"\u0412 \u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0430\u0445 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u043B\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440"),o("li",null,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434")],-1),z=o("p",null,"1\u04218.3:",-1),D=o("ol",null,[o("li",null,"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0443\u044E \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 60"),o("li",null,"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438: \u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0430 - \u0431\u0435\u0437 \u0441\u0443\u0431\u0441\u0447\u0435\u0442\u043E\u0432, \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u043B\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440"),o("li",null,"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438: \u041E\u0442\u0431\u043E\u0440 - \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u043B\u044F \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B, \u0432\u0438\u0434 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F - \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430, \u0432 \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443 \u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438 \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F"),o("li",null,[S("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438: \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F - \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u0445: "),o("ol",null,[o("li",null,"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B.\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.\u0418\u041D\u041D"),o("li",null,"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B.\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.\u041A\u041F\u041F"),o("li",null,"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B.\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435")])]),o("li",null,"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434"),o("li",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u0441\u0435 \u0444\u0430\u0439\u043B\u044B \u0432 \u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0435")],-1),F={class:"upload"},Q={class:"upload__inputs"},j={key:0,class:"upload__response"},O={class:"download"},I={key:0,class:"download__btn"},lo={__name:"CheckCA60",setup(u){const{sendToBackend:n,download:p}=k(),{uploadResponse:r}=x(k()),m=async(...t)=>{await n(t)};return(t,s)=>(a(),c("div",X,[E,o("section",N,[_(y,{dense:"","dense-toggle":"","expand-separator":"",icon:"help_outline",label:"\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"},{default:B(()=>[U,V,$,z,D]),_:1})]),o("section",F,[o("section",Q,[_(A,{onSendMessage:m})]),d(r)?(a(),c("section",j,[(a(!0),c(b,null,T(d(r),(e,i)=>(a(),c("p",{key:`ur-${i}`},R(e),1))),128))])):g("",!0)]),o("section",O,[d(r)?(a(),c("section",I,[_(L,{color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C XLSX",icon:"download",onClick:d(p)},null,8,["onClick"])])):g("",!0)])]))}};export{lo as default};
