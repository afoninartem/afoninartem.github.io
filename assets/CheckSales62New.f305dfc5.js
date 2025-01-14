import{X as L,D as S,r as v,a as F,ao as y,p as l,y as c,ad as t,v as p,t as X,Q as B,u as i,s as N,A as m,ae as b,E as g,F as $,z as R,B as U}from"./index.ef225a1a.js";import{Q as V}from"./QFile.98b9550d.js";import"./QChip.f5b843b4.js";import"./use-dark.6b3a4773.js";import"./use-form.0c90aca7.js";import"./use-file-dom-props.729a8976.js";import"./format.3e32b8d9.js";const w=L("report62new",()=>{const{user:u}=S(),n=v(null),a=v(null),o=v(null),d=F(()=>({info1C7:n.value,info1C8:a.value}));return{uploadFile:(e,s)=>{s=="7"?n.value=e:a.value=e},upload:async()=>{if(!d.value.info1C7||!d.value.info1C8)return;const e=new FormData;e.append("info1C7",d.value.info1C7),e.append("info1C8",d.value.info1C8),await y.post("accounting/check62/upload",e,{headers:{Authorization:`Bearer ${u.token}`,"Content-Type":"multipart/form-data"}}).then(s=>{o.value=s.data.data,console.log(s.data)}).catch(s=>console.log(s))},download:async()=>{await y.get("accounting/check62/download",{headers:{Authorization:`Bearer ${u.token}`},responseType:"blob"}).then(e=>{const s=e.headers.get("Content-Type");console.log(s);const k="\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u0432\u0435\u0440\u043A\u0435 62.xlsx";console.log(k);const C=URL.createObjectURL(e.data),h=document.createElement("a");h.href=C,h.download=k,document.body.appendChild(h),h.click(),document.body.removeChild(h),window.URL.revokeObjectURL(C)}).catch(e=>console.log(e))},preview:o}}),Q={class:"q-pa-md"},T={class:"q-gutter-md row items-start"},x={__name:"FileUpload",props:["mode","label","accept"],setup(u){const n=u,a=v(null),{uploadFile:o}=w();return(d,r)=>(l(),c("div",Q,[t("div",T,[p(V,{modelValue:a.value,"onUpdate:modelValue":[r[0]||(r[0]=_=>a.value=_),r[1]||(r[1]=_=>i(o)(a.value,n.mode))],label:n.label,filled:"","use-chips":"",accept:n.accept,style:{width:"250px"}},{prepend:X(()=>[p(B,{name:"attach_file"})]),_:1},8,["modelValue","label","accept"])])]))}};const A={class:"check62new"},D=t("h4",{class:"check62new__title"},"\u0421\u0432\u0435\u0440\u043A\u0430 \u043F\u043E \u0441\u0447\u0435\u0442\u0443 62.02",-1),E={class:"check62new__content"},z={key:0,class:"check62new__description"},j=t("p",null,"\u0414\u043B\u044F \u0441\u0432\u0435\u0440\u043A\u0438 \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0432\u0430 \u0444\u0430\u0439\u043B\u0430:",-1),q=t("p",null,'\u0438\u0437 1\u04217 \u043E\u0442\u0447\u0435\u0442 "\u0420\u0430\u0441\u0447\u0435\u0442\u044B \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438", - \u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u043E\u0442\u0447\u0435\u0442',-1),M=t("p",null,'\u0438\u0437 1\u04218 \u043E\u0442\u0447\u0435\u0442 "\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 62.02".',-1),O=t("p",null,"\u041F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0425\u0435\u043B\u043F\u0435\u0440 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0445 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 XLSX.",-1),I=t("p",null,"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0434\u043E \u0438\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044C, \u043D\u0430\u0436\u0430\u0442\u044C \u0424\u0430\u0439\u043B - \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A - \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 XLSX.",-1),G=[j,q,M,O,I],H={key:1,class:"check62new__upload"},J={class:"check62new__input"},K={key:0,class:"check62new__upload-btn"},P={key:2,class:"check62new__preview"},ae={__name:"CheckSales62New",setup(u){const{upload:n,download:a}=w(),{preview:o}=N(w());return(d,r)=>(l(),c("div",A,[D,t("div",E,[i(o)?m("",!0):(l(),c("div",z,G)),i(o)?m("",!0):(l(),c("div",H,[t("div",J,[p(x,{label:"1C7 XML",mode:"7",accept:".xml"}),p(x,{label:"1C8 XLSX",mode:"8",accept:".xlsx"})]),i(o)?m("",!0):(l(),c("div",K,[p(g,{class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:b(i(n),["prevent"])},null,8,["onClick"])]))])),i(o)?(l(),c("div",P,[(l(!0),c($,null,R(i(o),(_,f)=>(l(),c("p",{key:`pi-${f}`},U(_),1))),128)),p(g,{class:"btn-fixed-width",color:"secondary",label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",icon:"download",onClick:b(i(a),["prevent"])},null,8,["onClick"])])):m("",!0)])]))}};export{ae as default};