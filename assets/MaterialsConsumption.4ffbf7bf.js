import{A as V,C as A,r as y,j as S,ao as $,av as I,_ as L,H as f,M as w,ad as i,K as _,J as T,Q as M,B as U,G as p,I as q,ae as F,T as Q,O as b}from"./index.5db17dab.js";import{Q as N}from"./QInput.7218c442.js";import{Q as O}from"./QTable.4b86a3d2.js";import{Q as R}from"./QFile.a5028bb5.js";import{A as E}from"./ArtisLoader.550c77f4.js";import{u as j}from"./use-quasar.3aa05764.js";import"./use-form.623e43b4.js";import"./use-dark.dbc33460.js";import"./use-file-dom-props.7a6a4b3b.js";import"./use-key-composition.473a3dd8.js";import"./QDialog.7afd218f.js";import"./selection.75b1d316.js";import"./scroll.485fd83f.js";import"./QList.3e005ba0.js";import"./QChip.73c05c0c.js";import"./format.3e32b8d9.js";import"./QSpinnerCube.59facdcd.js";const B=V("materialConsumption",()=>{const{user:d}=A(),a=y(null),m=y(null),c=e=>{a.value=e},C=async()=>{if(!a.value)return;const e=new FormData;e.append("materialConsumption",a.value),await $.post("/materials-consumption/upload",e,{headers:{Authorization:`Bearer ${d.token}`,"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t.data),m.value=t.data.data}).catch(t=>console.log(t))},g=async e=>{console.log(e,typeof e),localStorage.setItem("coefficient",JSON.stringify(e));const t=new FormData;t.append("coefficient",e),await $.post("/materials-consumption/coefficient",t,{headers:{Authorization:`Bearer ${d.token}`,"Content-Type":"multipart/form-data"}}).then(s=>{console.log(s.data),m.value=s.data.data}).catch(s=>console.log(s))},v=S(()=>{if(!m.value)return null;const e=new Object;e.columns=[],e.rows=[];const t={name:"article",required:!0,label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",align:"left",field:"article",format:n=>`${n}`,sortable:!0},s={name:"unit",required:!0,label:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C.",align:"left",field:"unit",format:n=>`${n}`,sortable:!0};return e.columns.push(t,s),Array.from(m.value).forEach((n,h)=>{const l=`amount-${h}`,r=`\u041A\u043E\u044D\u0444\u0444 = ${n.coefficient}`;e.columns.push({name:"unit",required:!0,label:r,align:"left",field:l,format:o=>`${o}`,sortable:!1}),n.result_items.forEach(o=>{const k=e.rows.filter(x=>x.article==o.article);k.length?k[0][l]=o.amount:(o[l]=o.amount,e.rows.push(o))})}),e}),u=async e=>{I.set("coefficient",e),await $.get("/materials-consumption/download",{headers:{Authorization:`Bearer ${d.token}`,Coefficient:`${e}`},responseType:"blob"}).then(t=>{const s=t.headers.get("Content-Type");console.log(s);const n=`\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442\u043E\u043C ${e}.xlsx`;console.log(n);const h=URL.createObjectURL(t.data),l=document.createElement("a");l.href=h,l.download=n,document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(h)}).catch(t=>console.log(t))};return{uploadFile:c,upload:C,saveXLSX:u,calculate:g,saveXLSX:u,preview:v,inputFile:a}}),X={setup(){const d=y(null),{uploadFile:a}=B();return{file:d,uploadFile:a}}},z={class:"q-pa-md"},D={class:"q-gutter-md row items-start"};function J(d,a,m,c,C,g){return f(),w("div",z,[i("div",D,[_(R,{modelValue:c.file,"onUpdate:modelValue":[a[0]||(a[0]=v=>c.file=v),a[1]||(a[1]=v=>c.uploadFile(c.file))],label:"\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:T(()=>[_(M,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var K=L(X,[["render",J]]);const G={class:"material-consumption"},H=i("h4",{class:"material-consumption__title"},"\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",-1),P={class:"material-consumption__content"},W={key:0,class:"upload-file"},Y=i("div",{class:"material-consumption__description"},[i("p",null,"\u0421\u044E\u0434\u0430 \u043D\u0430\u0434\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0432\u0438\u0434\u0430:"),i("p",null,"\u041A\u0430\u043A\u043E\u0439 \u043E\u0442\u0447\u0435\u0442 \u0438\u0437 \u043A\u0430\u043A\u043E\u0439 \u0431\u0430\u0437\u044B \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438"),i("p",null,"\u0412 \u043A\u0430\u043A\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u043D\u0430\u0434\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B")],-1),Z={class:"material-consumption__upload"},ee={key:1,class:"results"},te={class:"results__add-coeff"},oe={key:2,class:"results__preview"},ae={key:3,class:"loader"},Ce={__name:"MaterialsConsumption",setup(d){const a=j();let m=JSON.parse(a.localStorage.getItem("coefficient"))||.8;const{upload:c,calculate:C,saveXLSX:g}=B(),{inputFile:v,preview:u}=U(B()),e=y(!1),t=y(m),s=(l,r)=>{const o=l.target.cellIndex;if(o<2)return;const x=u.value.columns[o].label.split("= ")[1];g(x)},n=()=>{e.value=!0},h=S(()=>Boolean(v.value)&&!e.value);return(l,r)=>(f(),w("div",G,[H,i("section",P,[e.value?b("",!0):(f(),w("article",W,[Y,i("div",Z,[_(K)]),p(h)?(f(),q(Q,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:r[0]||(r[0]=F(o=>{p(c)(),n()},["prevent"]))})):b("",!0)])),e.value?(f(),w("article",ee,[i("div",te,[_(N,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=o=>t.value=o),modelModifiers:{number:!0},type:"number",filled:"",style:{"max-width":"200px"}},null,8,["modelValue"]),_(Q,{class:"btn-fixed-width",color:"secondary",label:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C",onClick:r[2]||(r[2]=F(o=>p(C)(t.value),["prevent"]))})])])):b("",!0),p(u)?(f(),w("article",oe,[_(O,{title:"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 (\u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u0443 \u043D\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F)",rows:p(u).rows,columns:p(u).columns,onRowClick:s,"row-key":"name","hide-pagination":!0,"rows-per-page-options":[0]},null,8,["rows","columns"])])):b("",!0),e.value&&!p(u)?(f(),w("article",ae,[_(E)])):b("",!0)])]))}};export{Ce as default};
