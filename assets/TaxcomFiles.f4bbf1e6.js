import{_ as n}from"./MultiFilesUpload.34dcb95a.js";import{Z as p,D as l,r as i,aq as m,p as d,y as u,af as a,v as _}from"./index.07b77fcd.js";import"./QLinearProgress.97cac3fd.js";import"./use-dark.d5321536.js";import"./QTooltip.34c698c3.js";import"./position-engine.42b8cd98.js";import"./selection.049d4e13.js";import"./use-form.20320c62.js";import"./scroll.abd2c48e.js";import"./QChip.38f90f0f.js";import"./QFile.78be1e1e.js";import"./use-file-dom-props.f575653b.js";import"./format.3e32b8d9.js";const x=p("taxcom",()=>{const{user:c}=l(),e=i(null);return{upload:async t=>{const s=new FormData;for(let o=0;o<t.length;o++)s.append("taxcom",t[o]);await m.post("accounting/taxcom/upload",s,{headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"multipart/form-data"}}).then(o=>{console.log(o),e.value=o.data.data}).catch(o=>console.log(o))}}}),h={class:"taxcom"},f=a("div",{class:"taxcom__header"},[a("h1",null,"Taxcom"),a("p",null,"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0447\u0435\u043A\u043E\u0432")],-1),g={class:"taxcom__upload"},b={__name:"TaxcomFiles",setup(c){const{upload:e}=x(),r=async(...t)=>{await e(t)};return(t,s)=>(d(),u("div",h,[f,a("div",g,[_(n,{label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C xlsx",accept:".xlsx",onSendMessage:r})])]))}};export{b as default};
