import{X as q,D as A,r as y,a as V,ao as $,aR as I,_ as B,p as m,y as w,ad as i,v as f,t as R,Q as T,q as L,s as U,ae as S,E as F,A as b,u as h}from"./index.0e31a611.js";import{Q as E}from"./QInput.1fa2c4e9.js";import{Q as M}from"./QTable.5ceb1f83.js";import{Q as N}from"./QFile.0bdd09f0.js";import{Q as O}from"./QSpinnerCube.65b5a895.js";import{u as X}from"./use-quasar.a47efc85.js";import"./use-form.f53429b1.js";import"./use-dark.c7db0d05.js";import"./use-file-dom-props.29f642a8.js";import"./use-key-composition.19832b4e.js";import"./QSeparator.a297b6a4.js";import"./QList.681d3806.js";import"./scroll.832f3279.js";import"./QChip.c715a85d.js";import"./QItem.a2c161c3.js";import"./position-engine.282ebb25.js";import"./selection.ee0541a4.js";import"./QDialog.2804f50c.js";import"./use-prevent-scroll.2f9458f6.js";import"./format.3e32b8d9.js";const Q=q("materialConsumption",()=>{const{user:c}=A(),o=y(null),p=y(null),u=e=>{o.value=e},C=async()=>{if(!o.value)return;const e=new FormData;e.append("materialConsumption",o.value),await $.post("/materials-consumption/upload",e,{headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t.data),p.value=t.data.data}).catch(t=>console.log(t))},g=async e=>{console.log(e,typeof e),localStorage.setItem("coefficient",JSON.stringify(e));const t=new FormData;t.append("coefficient",e),await $.post("/materials-consumption/coefficient",t,{headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"multipart/form-data"}}).then(s=>{console.log(s.data),p.value=s.data.data}).catch(s=>console.log(s))},_=V(()=>{if(!p.value)return null;const e=new Object;e.columns=[],e.rows=[];const t={name:"article",required:!0,label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",align:"left",field:"article",format:l=>`${l}`,sortable:!0},s={name:"unit",required:!0,label:"\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C.",align:"left",field:"unit",format:l=>`${l}`,sortable:!0};return e.columns.push(t,s),Array.from(p.value).forEach((l,v)=>{const n=`amount-${v}`,r=`\u041A\u043E\u044D\u0444\u0444 = ${l.coefficient}`;e.columns.push({name:"unit",required:!0,label:r,align:"left",field:n,format:a=>`${a}`,sortable:!1}),l.result_items.forEach(a=>{const k=e.rows.filter(x=>x.article==a.article);k.length?k[0][n]=a.amount:(a[n]=a.amount,e.rows.push(a))})}),e}),d=async e=>{I.set("coefficient",e),await $.get("/materials-consumption/download",{headers:{Authorization:`Bearer ${c.token}`,Coefficient:`${e}`},responseType:"blob"}).then(t=>{const s=t.headers.get("Content-Type");console.log(s);const l=`\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442\u043E\u043C ${e}.xlsx`;console.log(l);const v=URL.createObjectURL(t.data),n=document.createElement("a");n.href=v,n.download=l,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(v)}).catch(t=>console.log(t))};return{uploadFile:u,upload:C,saveXLSX:d,calculate:g,saveXLSX:d,preview:_,inputFile:o}}),z={setup(){const c=y(null),{uploadFile:o}=Q();return{file:c,uploadFile:o}}},D={class:"q-pa-md"},j={class:"q-gutter-md row items-start"};function J(c,o,p,u,C,g){return m(),w("div",D,[i("div",j,[f(N,{modelValue:u.file,"onUpdate:modelValue":[o[0]||(o[0]=_=>u.file=_),o[1]||(o[1]=_=>u.uploadFile(u.file))],label:"\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:R(()=>[f(T,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var K=B(z,[["render",J]]);const P={};function G(c,o){return m(),L(O,{color:"primary",size:"5.5em"})}var H=B(P,[["render",G]]);const W={class:"material-consumption"},Y=i("h4",{class:"material-consumption__title"},"\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",-1),Z={class:"material-consumption__content"},ee={key:0,class:"upload-file"},te=i("div",{class:"material-consumption__description"},[i("p",null,"\u0421\u044E\u0434\u0430 \u043D\u0430\u0434\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0432\u0438\u0434\u0430:"),i("p",null,"\u041A\u0430\u043A\u043E\u0439 \u043E\u0442\u0447\u0435\u0442 \u0438\u0437 \u043A\u0430\u043A\u043E\u0439 \u0431\u0430\u0437\u044B \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438"),i("p",null,"\u0412 \u043A\u0430\u043A\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u043D\u0430\u0434\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B")],-1),oe={class:"material-consumption__upload"},ae={key:1,class:"results"},ne={class:"results__add-coeff"},le={key:2,class:"results__preview"},se={key:3,class:"loader"},Se={__name:"MaterialsConsumption",setup(c){const o=X();let p=JSON.parse(o.localStorage.getItem("coefficient"))||.8;const{upload:u,calculate:C,saveXLSX:g}=Q(),{inputFile:_,preview:d}=U(Q()),e=y(!1),t=y(p),s=(n,r)=>{const a=n.target.cellIndex;if(a<2)return;const x=d.value.columns[a].label.split("= ")[1];g(x)},l=()=>{e.value=!0},v=V(()=>Boolean(_.value)&&!e.value);return(n,r)=>(m(),w("div",W,[Y,i("section",Z,[e.value?b("",!0):(m(),w("article",ee,[te,i("div",oe,[f(K)]),v.value?(m(),L(F,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:r[0]||(r[0]=S(a=>{h(u)(),l()},["prevent"]))})):b("",!0)])),e.value?(m(),w("article",ae,[i("div",ne,[f(E,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=a=>t.value=a),modelModifiers:{number:!0},type:"number",filled:"",style:{"max-width":"200px"}},null,8,["modelValue"]),f(F,{class:"btn-fixed-width",color:"secondary",label:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C",onClick:r[2]||(r[2]=S(a=>h(C)(t.value),["prevent"]))})])])):b("",!0),h(d)?(m(),w("article",le,[f(M,{title:"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 (\u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u0443 \u043D\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F)",rows:h(d).rows,columns:h(d).columns,onRowClick:s,"row-key":"name","hide-pagination":!0,"rows-per-page-options":[0]},null,8,["rows","columns"])])):b("",!0),e.value&&!h(d)?(m(),w("article",se,[f(H)])):b("",!0)])]))}};export{Se as default};
