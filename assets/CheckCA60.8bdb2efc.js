import{A as f,C as g,r as w,k as C,ao as m,B as T,H as a,M as l,ad as u,K as h,G as r,R as v,N as B,O as k,T as R,aH as b,P as S}from"./index.9c73f242.js";import{_ as A}from"./MultiFilesUpload.cf7b2678.js";import"./QLinearProgress.7f08d88f.js";import"./use-dark.9125821f.js";import"./QTooltip.915f9e39.js";import"./position-engine.a808bf1c.js";import"./selection.aa176e5e.js";import"./use-form.a31ae3ca.js";import"./scroll.509a285f.js";import"./QChip.f0e0b7df.js";import"./QFile.a7ad9f74.js";import"./use-file-dom-props.51037f88.js";import"./format.3e32b8d9.js";const y=f("report60",()=>{const{user:d}=g(),t=w(null),p=C(()=>t.value?t.value.split(`
`):t.value);return{sendToBackend:async e=>{const n=new FormData;for(let o=0;o<e.length;o++)n.append("r60",e[o]);await m.post("/accounting/report60/upload",n,{headers:{Authorization:`Bearer ${d.token}`,"Content-Type":"multipart/form-data"}}).then(o=>{console.log(o),t.value=o.data.data}).catch(o=>console.log(o))},uploadResponse:p,download:async()=>{await m.get("/accounting/report60/download",{headers:{Authorization:`Bearer ${d.token}`},responseType:"blob"}).then(e=>{const n=e.headers.get("Content-Type");console.log(n);const o="\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u0432\u0435\u0440\u043A\u0435 60.xlsx";console.log(o);const i=URL.createObjectURL(e.data),s=document.createElement("a");s.href=i,s.download=o,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(i)}).catch(e=>console.log(e))}}});const L={class:"check-60"},N=b('<h4>\u0421\u0432\u0435\u0440\u043A\u0430 \u043F\u043E \u0441\u0447\u0435\u0442\u0443 60</h4><section class="description"><p>\u0412\u0441\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u0437 1\u0421 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 TXT</p><p>1C7.7:</p><ol><li>\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0442\u0447\u0435\u0442 \u0420\u0430\u0441\u0447\u0435\u0442\u044B \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438</li><li>\u0412 \u043F\u043E\u043B\u0435 \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443 \u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438 \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F</li><li>\u0412 \u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0430\u0445 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u043B\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440</li><li>\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434</li></ol><p>1\u04218.3</p><ol><li>\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0443\u044E \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 60</li><li>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438: \u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0430 - \u0431\u0435\u0437 \u0441\u0443\u0431\u0441\u0447\u0435\u0442\u043E\u0432, \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u043B\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440</li><li>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438: \u041E\u0442\u0431\u043E\u0440 - \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u043B\u044F \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B, \u0432\u0438\u0434 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F - \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430, \u0432 \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443 \u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438 \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F</li><li>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438: \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F - \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u0445: <ol><li>\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B.\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.\u0418\u041D\u041D</li><li>\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B.\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.\u041A\u041F\u041F</li><li>\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B.\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435</li></ol></li><li>\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434</li><li>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u0441\u0435 \u0444\u0430\u0439\u043B\u044B \u0432 \u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0435</li></ol></section>',2),x={class:"upload"},U={class:"upload__inputs"},V={key:0,class:"upload__response"},$={class:"download"},E={key:0,class:"download__btn"},I={__name:"CheckCA60",setup(d){const{sendToBackend:t,download:p}=y(),{uploadResponse:c}=T(y()),_=async(...e)=>{await t(e)};return(e,n)=>(a(),l("div",L,[N,u("section",x,[u("section",U,[h(A,{onSendMessage:_})]),r(c)?(a(),l("section",V,[(a(!0),l(v,null,B(r(c),(o,i)=>(a(),l("p",{key:`ur-${i}`},S(o),1))),128))])):k("",!0)]),u("section",$,[r(c)?(a(),l("section",E,[h(R,{color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C XLSX",icon:"download",onClick:r(p)},null,8,["onClick"])])):k("",!0)])]))}};export{I as default};
