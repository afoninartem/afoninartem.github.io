import{A as L,C as S,r as v,j as N,ao as y,H as l,M as c,ad as t,K as p,J as B,Q as F,G as i,B as R,O as m,ae as b,T as g,R as X,N as $,P as T}from"./index.e029a779.js";import{Q as U}from"./QFile.b3050a75.js";import"./QChip.b1948b17.js";import"./use-dark.47dccd53.js";import"./use-form.fabb1506.js";import"./use-file-dom-props.f1f4081b.js";import"./format.3e32b8d9.js";const w=L("report62new",()=>{const{user:u}=S(),n=v(null),a=v(null),o=v(null),d=N(()=>({info1C7:n.value,info1C8:a.value}));return{uploadFile:(e,s)=>{s=="7"?n.value=e:a.value=e},upload:async()=>{if(!d.value.info1C7||!d.value.info1C8)return;const e=new FormData;e.append("info1C7",d.value.info1C7),e.append("info1C8",d.value.info1C8),await y.post("accounting/check62/upload",e,{headers:{Authorization:`Bearer ${u.token}`,"Content-Type":"multipart/form-data"}}).then(s=>{o.value=s.data.data,console.log(s.data)}).catch(s=>console.log(s))},download:async()=>{await y.get("accounting/check62/download",{headers:{Authorization:`Bearer ${u.token}`},responseType:"blob"}).then(e=>{const s=e.headers.get("Content-Type");console.log(s);const k="\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u0432\u0435\u0440\u043A\u0435 62.xlsx";console.log(k);const C=URL.createObjectURL(e.data),h=document.createElement("a");h.href=C,h.download=k,document.body.appendChild(h),h.click(),document.body.removeChild(h),window.URL.revokeObjectURL(C)}).catch(e=>console.log(e))},preview:o}}),V={class:"q-pa-md"},Q={class:"q-gutter-md row items-start"},x={__name:"FileUpload",props:["mode","label","accept"],setup(u){const n=u,a=v(null),{uploadFile:o}=w();return(d,r)=>(l(),c("div",V,[t("div",Q,[p(U,{modelValue:a.value,"onUpdate:modelValue":[r[0]||(r[0]=_=>a.value=_),r[1]||(r[1]=_=>i(o)(a.value,n.mode))],label:n.label,filled:"","use-chips":"",accept:n.accept,style:{width:"250px"}},{prepend:B(()=>[p(F,{name:"attach_file"})]),_:1},8,["modelValue","label","accept"])])]))}};const A={class:"check62new"},j=t("h4",{class:"check62new__title"},"\u0421\u0432\u0435\u0440\u043A\u0430 \u043F\u043E \u0441\u0447\u0435\u0442\u0443 62.02",-1),D={class:"check62new__content"},E={key:0,class:"check62new__description"},M=t("p",null,"\u0414\u043B\u044F \u0441\u0432\u0435\u0440\u043A\u0438 \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0432\u0430 \u0444\u0430\u0439\u043B\u0430:",-1),O=t("p",null,'\u0438\u0437 1\u04217 \u043E\u0442\u0447\u0435\u0442 "\u0420\u0430\u0441\u0447\u0435\u0442\u044B \u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438", - \u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u043E\u0442\u0447\u0435\u0442',-1),q=t("p",null,'\u0438\u0437 1\u04218 \u043E\u0442\u0447\u0435\u0442 "\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 62.02".',-1),z=t("p",null,"\u041F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0425\u0435\u043B\u043F\u0435\u0440 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0445 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 XLSX.",-1),G=t("p",null,"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0434\u043E \u0438\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044C, \u043D\u0430\u0436\u0430\u0442\u044C \u0424\u0430\u0439\u043B - \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A - \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 XLSX.",-1),H=[M,O,q,z,G],I={key:1,class:"check62new__upload"},J={class:"check62new__input"},K={key:0,class:"check62new__upload-btn"},P={key:2,class:"check62new__preview"},ae={__name:"CheckSales62New",setup(u){const{upload:n,download:a}=w(),{preview:o}=R(w());return(d,r)=>(l(),c("div",A,[j,t("div",D,[i(o)?m("",!0):(l(),c("div",E,H)),i(o)?m("",!0):(l(),c("div",I,[t("div",J,[p(x,{label:"1C7 XML",mode:"7",accept:".xml"}),p(x,{label:"1C8 XLSX",mode:"8",accept:".xlsx"})]),i(o)?m("",!0):(l(),c("div",K,[p(g,{class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:b(i(n),["prevent"])},null,8,["onClick"])]))])),i(o)?(l(),c("div",P,[(l(!0),c(X,null,$(i(o),(_,f)=>(l(),c("p",{key:`pi-${f}`},T(_),1))),128)),p(g,{class:"btn-fixed-width",color:"secondary",label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",icon:"download",onClick:b(i(a),["prevent"])},null,8,["onClick"])])):m("",!0)])]))}};export{ae as default};
