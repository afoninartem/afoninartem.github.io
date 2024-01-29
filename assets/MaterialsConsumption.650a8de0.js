import{A as V,C as A,r as y,j as S,ao as $,av as I,_ as L,H as f,M as w,ad as i,K as _,J as T,Q as M,B as U,G as p,I as q,ae as F,T as Q,O as b}from"./index.9d2e584e.js";import{Q as N}from"./QInput.caa53a51.js";import{Q as O}from"./QTable.c92998b5.js";import{Q as R}from"./QFile.75c1a69c.js";import{A as E}from"./ArtisLoader.c4e26c5f.js";import{u as j}from"./use-quasar.d4ec9c72.js";import"./use-form.159f9b4c.js";import"./use-dark.f56e6d5b.js";import"./use-file-dom-props.fbf13579.js";import"./use-key-composition.a67d1709.js";import"./QDialog.aee4cee7.js";import"./selection.1e1542df.js";import"./scroll.f5e2ceb0.js";import"./format.9bfce7d6.js";import"./QChip.7e0e2fbf.js";import"./QSpinnerCube.5d4b85e1.js";const B=V("materialConsumption",()=>{const{user:d}=A(),a=y(null),m=y(null),c=e=>{a.value=e},C=async()=>{if(!a.value)return;const e=new FormData;e.append("materialConsumption",a.value),await $.post("/materials-consumption/upload",e,{headers:{Authorization:`Bearer ${d.token}`,"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t.data),m.value=t.data.data}).catch(t=>console.log(t))},g=async e=>{console.log(e,typeof e),localStorage.setItem("coefficient",JSON.stringify(e));const t=new FormData;t.append("coefficient",e),await $.post("/materials-consumption/coefficient",t,{headers:{Authorization:`Bearer ${d.token}`,"Content-Type":"multipart/form-data"}}).then(s=>{console.log(s.data),m.value=s.data.data}).catch(s=>console.log(s))},v=S(()=>{if(!m.value)return null;const e=new Object;e.columns=[],e.rows=[];const t={name:"article",required:!0,label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",align:"left",field:"article",format:l=>`${l}`,sortable:!0},s={name:"unit",required:!0,label:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C.",align:"left",field:"unit",format:l=>`${l}`,sortable:!0};return e.columns.push(t,s),Array.from(m.value).forEach((l,h)=>{const n=`amount-${h}`,r=`\u041A\u043E\u044D\u0444\u0444 = ${l.coefficient}`;e.columns.push({name:"unit",required:!0,label:r,align:"left",field:n,format:o=>`${o}`,sortable:!1}),l.result_items.forEach(o=>{const k=e.rows.filter(x=>x.article==o.article);k.length?k[0][n]=o.amount:(o[n]=o.amount,e.rows.push(o))})}),e}),u=async e=>{I.set("coefficient",e),await $.get("/materials-consumption/download",{headers:{Authorization:`Bearer ${d.token}`,Coefficient:`${e}`},responseType:"blob"}).then(t=>{const s=t.headers.get("Content-Type");console.log(s);const l=`\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442\u043E\u043C ${e}.xlsx`;console.log(l);const h=URL.createObjectURL(t.data),n=document.createElement("a");n.href=h,n.download=l,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(h)}).catch(t=>console.log(t))};return{uploadFile:c,upload:C,saveXLSX:u,calculate:g,saveXLSX:u,preview:v,inputFile:a}}),X={setup(){const d=y(null),{uploadFile:a}=B();return{file:d,uploadFile:a}}},z={class:"q-pa-md"},D={class:"q-gutter-md row items-start"};function J(d,a,m,c,C,g){return f(),w("div",z,[i("div",D,[_(R,{modelValue:c.file,"onUpdate:modelValue":[a[0]||(a[0]=v=>c.file=v),a[1]||(a[1]=v=>c.uploadFile(c.file))],label:"\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:T(()=>[_(M,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var K=L(X,[["render",J]]);const G={class:"material-consumption"},H=i("h4",{class:"material-consumption__title"},"\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",-1),P={class:"material-consumption__content"},W={key:0,class:"upload-file"},Y=i("div",{class:"material-consumption__description"},[i("p",null,"\u0421\u044E\u0434\u0430 \u043D\u0430\u0434\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0432\u0438\u0434\u0430:"),i("p",null,"\u041A\u0430\u043A\u043E\u0439 \u043E\u0442\u0447\u0435\u0442 \u0438\u0437 \u043A\u0430\u043A\u043E\u0439 \u0431\u0430\u0437\u044B \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438"),i("p",null,"\u0412 \u043A\u0430\u043A\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u043D\u0430\u0434\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B")],-1),Z={class:"material-consumption__upload"},ee={key:1,class:"results"},te={class:"results__add-coeff"},oe={key:2,class:"results__preview"},ae={key:3,class:"loader"},ye={__name:"MaterialsConsumption",setup(d){const a=j();let m=JSON.parse(a.localStorage.getItem("coefficient"))||.8;const{upload:c,calculate:C,saveXLSX:g}=B(),{inputFile:v,preview:u}=U(B()),e=y(!1),t=y(m),s=(n,r)=>{const o=n.target.cellIndex;if(o<2)return;const x=u.value.columns[o].label.split("= ")[1];g(x)},l=()=>{e.value=!0},h=S(()=>Boolean(v.value)&&!e.value);return(n,r)=>(f(),w("div",G,[H,i("section",P,[e.value?b("",!0):(f(),w("article",W,[Y,i("div",Z,[_(K)]),p(h)?(f(),q(Q,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:r[0]||(r[0]=F(o=>{p(c)(),l()},["prevent"]))})):b("",!0)])),e.value?(f(),w("article",ee,[i("div",te,[_(N,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=o=>t.value=o),modelModifiers:{number:!0},type:"number",filled:"",style:{"max-width":"200px"}},null,8,["modelValue"]),_(Q,{class:"btn-fixed-width",color:"secondary",label:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C",onClick:r[2]||(r[2]=F(o=>p(C)(t.value),["prevent"]))})])])):b("",!0),p(u)?(f(),w("article",oe,[_(O,{title:"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 (\u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u0443 \u043D\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F)",rows:p(u).rows,columns:p(u).columns,onRowClick:s,"row-key":"name","hide-pagination":!0,"rows-per-page-options":[0]},null,8,["rows","columns"])])):b("",!0),p(u)?b("",!0):(f(),w("article",ae,[_(E)]))])]))}};export{ye as default};
