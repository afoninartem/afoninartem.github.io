import{A as f,C as b,r as p,j as v,ao as x,H as u,M as _,ad as i,K as r,J as w,Q as k,G as c,B,I as V,ae as y,T as F,O as $}from"./index.ba59cbdf.js";import{Q as g}from"./QFile.e6edeae1.js";import"./QChip.26cf09bd.js";import"./use-dark.f55218f2.js";import"./use-form.d4c9659c.js";import"./use-file-dom-props.dd1c4fbf.js";import"./format.3e32b8d9.js";const d=f("shipment",()=>{const{user:n}=b(),t=p(null),s=p(null),a=v(()=>({leftovers:t.value,shipment:s.value}));return{uploadFile:(e,l)=>{switch(l){case"leftovers":t.value=e;break;case"shipment":s.value=e;break}},upload:async()=>{const e=new FormData;e.append("leftovers",a.value.leftovers),e.append("shipment",a.value.shipment),await x.post("/warehouse/shipment/upload",e,{headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"multipart/form-data"}}).then(l=>{console.log(l)}).catch(l=>console.log(l))},files:a}}),C={class:"q-pa-md"},Q={class:"q-gutter-md row items-start"},h={__name:"uploadFileTXT_WH",props:["mode","label"],setup(n){const t=n,s=p(null),{uploadFile:a}=d();return(m,o)=>(u(),_("div",C,[i("div",Q,[r(g,{modelValue:s.value,"onUpdate:modelValue":[o[0]||(o[0]=e=>s.value=e),o[1]||(o[1]=e=>c(a)(s.value,t.mode))],label:t.label,square:"",filled:"","use-chips":"",accept:".txt",style:{width:"400px"}},{prepend:w(()=>[r(k,{name:"attach_file"})]),_:1},8,["modelValue","label"])])]))}},S={class:"shipment"},T={class:"shipment__upload"},q=i("h4",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0430\u0439\u043B\u043E\u0432",-1),A={class:"inputs"},E={__name:"ShipmentPage",setup(n){const{files:t}=B(d()),{upload:s}=d(),a=v(()=>t.value&&t.value.shipment&&t.value.leftovers);return(m,o)=>(u(),_("div",S,[i("div",T,[q,i("div",A,[r(h,{mode:"leftovers",label:"\u041E\u0441\u0442\u0430\u0442\u043A\u0438.txt"}),r(h,{mode:"shipment",label:"\u041E\u0442\u0433\u0440\u0443\u0437\u043A\u0430.txt"})]),c(a)?(u(),V(F,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",style:{height:"61px"},onClick:o[0]||(o[0]=y(e=>c(s)(),["prevent"]))})):$("",!0)])]))}};export{E as default};
