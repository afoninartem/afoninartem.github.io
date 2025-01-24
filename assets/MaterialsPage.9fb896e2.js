import{b as F,Q as I}from"./QTable.35e4f02a.js";import{X as K,D as L,r as c,a as _,ao as U,s as D,m as W,p as b,y as E,v as a,t as r,Q as B,E as w,q as T,A as S,u as y,o as H,O as G,x as X,ad as M,B as q,aC as Z,aO as j}from"./index.522f3b58.js";import{Q}from"./QInput.ce1e3457.js";import{Q as J}from"./QTd.65e83619.js";import{Q as Y,a as ee}from"./QBar.f746b5a6.js";import{Q as ae}from"./QTooltip.d94bba18.js";import{Q as le,a as z}from"./QCard.780d595b.js";import{Q as $}from"./QToggle.91eeba56.js";import{Q as te}from"./QForm.ddf4f01b.js";import{Q as oe}from"./QDialog.4ea68326.js";import{u as se}from"./use-quasar.7dac029e.js";import"./QSeparator.60bb61f7.js";import"./use-dark.c9c4934a.js";import"./QList.ca36e70d.js";import"./scroll.fc854570.js";import"./use-form.83a1b45f.js";import"./QChip.c1c08142.js";import"./QItem.4ab010e1.js";import"./position-engine.bc8a989e.js";import"./selection.e0d38d8e.js";import"./use-key-composition.feda23ac.js";import"./format.3e32b8d9.js";import"./use-file-dom-props.91eda0b6.js";import"./use-prevent-scroll.c3f54d65.js";const x=K("materials",()=>{const{user:g}=L(),p=c([]),d=c(!1),u=c(null),i=c(null),v=(l,P)=>{u.value=P,d.value=!0,i.value={...u.value}},h=()=>{u.value={...i.value}},k=async()=>{await U.post("/warehouse/materials/update",{...u.value},{headers:{Authorization:`Bearer ${g.token}`}}).then(l=>{e()}).catch(l=>console.log(l))},f=async()=>{await U.post("/warehouse/materials/delete",{...u.value},{headers:{Authorization:`Bearer ${g.token}`}}).then(l=>{e(),console.log(l.data.data)}).catch(l=>console.log(l))},V=()=>{d.value=!1,u.value=null},e=async()=>{await U.get("/warehouse/materials",{headers:{Authorization:`Bearer ${g.token}`}}).then(l=>p.value=l.data.data).catch(l=>console.log(l))},C=_(()=>p.value),n=_(()=>d.value),s=_(()=>u.value),m=_(()=>i.value);return{materials:C,dialogState:n,initiateCard:m,materialCard:s,deleteMaterial:f,getAllMaterials:e,openMaterialCard:v,resetMaterialCard:h,saveMaterialCard:k,closeMaterialCard:V}}),ne={class:"container"},re={__name:"MaterialsTable",setup(g){const{materials:p,dialogState:d}=D(x()),{getAllMaterials:u,openMaterialCard:i}=x(),v=c([]),h=_(()=>v.value.length==0?p.value:p.value.filter(n=>v.value.some(s=>n.code.includes(s)))),k=[{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u041F\u0430\u043D\u0435\u043B\u0438",value:"PANEL"},{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u0424\u043E\u0442\u043E\u043E\u0431\u043E\u0438",value:"WPPHO"},{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u041E\u0431\u043E\u0438",value:"WPCOM"},{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u0414\u0438\u0437. \u043E\u0431\u043E\u0438",value:"WPDES"},{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",value:"LIGHT"},{label:"\u0424\u0421: \u043F\u0438\u0449\u0435\u0432\u0430\u044F",value:"TREAT"},{label:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F",value:"DINER"},{label:"\u0414\u0435\u043A\u043E\u0440",value:"DECOR"}],f=c(""),V=[["code","\u041A\u043E\u0434\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0438"],["name","\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"],["min_leftover","\u041C\u0438\u043D. \u043E\u0441\u0442\u0430\u0442\u043E\u043A"],["pack","\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430"],["is_stopped","\u041E\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043C?"],["has_limits","\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"],["cabinet","\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435"]],e=_(()=>V.map(n=>({name:n[0],required:!0,label:n[1],field:n[0],format:s=>n[0]=="has_limits"?s?"\u0414\u0430":"\u041D\u0435\u0442":n[0]=="cabinet"?s?"\u041A\u0430\u0431\u0438\u043D\u0435\u0442":"\u0421\u043A\u043B\u0430\u0434":`${s}`,align:"left",sortable:!0}))),C={page:1,rowsPerPage:0};return W(async()=>{await u()}),(n,s)=>(b(),E("div",ne,[a(I,{title:"\u0420\u041F \u0438 \u0410\u0425\u041E",rows:h.value,columns:e.value,class:"my-sticky-header-table","row-key":"code",onRowClick:y(i),pagination:C,filter:f.value},{"top-right":r(m=>[a(F,{modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=l=>v.value=l),multiple:"",outlined:"",dense:"","options-dense":"","emit-value":"","map-options":"",label:"\u041F\u0430\u043F\u043A\u0438",options:k,style:{"min-width":"150px"},class:"q-mr-md"},null,8,["modelValue"]),a(Q,{dense:"",debounce:"300",modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=l=>f.value=l),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:r(()=>[a(B,{name:"search"})]),_:1},8,["modelValue"]),a(w,{flat:"",round:"",dense:"",icon:m.inFullscreen?"fullscreen_exit":"fullscreen",onClick:m.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"body-cell-is_stopped":r(m=>[a(J,{props:m},{default:r(()=>[m.value=="true"?(b(),T(B,{key:0,name:"do_not_disturb",color:"negative",size:"24px"})):S("",!0),m.value=="false"?(b(),T(B,{key:1,name:"check_circle",color:"positive",size:"24px"})):S("",!0)]),_:2},1032,["props"])]),_:1},8,["rows","columns","onRowClick","filter"])]))}},ue={class:"text-h5"},ie={class:"text-h6"},de={class:"btn-block"},me={__name:"MaterialCard",setup(g){se();const{user:p}=D(L()),{dialogState:d,materialCard:u}=D(x()),{closeMaterialCard:i,resetMaterialCard:v,saveMaterialCard:h,deleteMaterial:k}=x(),f=c(!0),V=c(null),e=c(u),C=c(null),n=()=>{V.value=setTimeout(()=>{m()},1e3)},s=()=>{clearTimeout(V.value)},m=()=>{k(),i()},l=_(()=>e.value.stop_date=="0001-01-01T00:00:00Z"||e.value.stop_date==null?"\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0440\u0435\u043C\u0435\u043D":new Date(e.value.stop_date).toLocaleDateString("ru-RU")),P=()=>{e.value.stop_date=new Date},N=async()=>{h()},O=()=>{v()};H(()=>{document.addEventListener("keydown",R)}),G(()=>{document.removeEventListener("keydown",R)});const R=A=>{A.key==="Escape"&&d.value&&i()};return(A,t)=>(b(),E("div",{class:"container",onKeydown:t[8]||(t[8]=j((...o)=>y(i)&&y(i)(...o),["esc"]))},[a(oe,{modelValue:y(d),"onUpdate:modelValue":t[7]||(t[7]=o=>Z(d)?d.value=o:null),persistent:"",maximized:f.value,"transition-show":"slide-left","transition-hide":"slide-left"},{default:r(()=>[a(le,null,{default:r(()=>[a(Y,null,{default:r(()=>[a(ee),a(w,{dense:"",flat:"",icon:"close",onClick:y(i)},{default:r(()=>[a(ae,{class:"bg-white text-primary"},{default:r(()=>[X("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")]),_:1})]),_:1},8,["onClick"])]),_:1}),a(z,null,{default:r(()=>[M("div",ue,q(e.value.name),1),M("div",ie,q(e.value.code),1)]),_:1}),a(z,{class:"q-pt-none"},{default:r(()=>[a(te,{ref_key:"materialCardForm",ref:C,onSubmit:N,onReset:O,class:"q-gutter-md"},{default:r(()=>[a(Q,{label:"\u0410\u0434\u0440\u0435\u0441\u0430",filled:"",outlined:"",modelValue:e.value.address,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.address=o)},null,8,["modelValue"]),a(Q,{type:"number",label:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A",modelValue:e.value.min_leftover,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.min_leftover=o)},null,8,["modelValue"]),a(Q,{type:"number",label:"\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430",modelValue:e.value.pack,"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.pack=o)},null,8,["modelValue"]),a($,{label:e.value.is_stopped?`\u0412 \u0441\u0442\u043E\u043F-\u043B\u0438\u0441\u0442\u0435 \u0441 ${l.value}`:`\u041E\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441 ${l.value}`,color:"red","false-value":!1,"true-value":!0,modelValue:e.value.is_stopped,"onUpdate:modelValue":[t[3]||(t[3]=o=>e.value.is_stopped=o),P]},null,8,["label","modelValue"]),a($,{label:e.value.has_limits?"\u0415\u0441\u0442\u044C \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F":"\u041D\u0435\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439",color:"red","false-value":!1,"true-value":!0,modelValue:e.value.has_limits,"onUpdate:modelValue":t[4]||(t[4]=o=>e.value.has_limits=o)},null,8,["label","modelValue"]),a($,{label:e.value.cabinet?"\u0425\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0432 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435":"\u0425\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435",color:"yellow","false-value":!1,"true-value":!0,modelValue:e.value.cabinet,"onUpdate:modelValue":t[5]||(t[5]=o=>e.value.cabinet=o)},null,8,["label","modelValue"]),e.value.has_limits?(b(),T(Q,{key:0,type:"number",label:"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443 (\u0432 \u0435\u0434\u0438\u043D\u0438\u0446\u0430\u0445 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430)",modelValue:e.value.limit,"onUpdate:modelValue":t[6]||(t[6]=o=>e.value.limit=o)},null,8,["modelValue"])):S("",!0),M("div",de,[a(w,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",type:"submit",color:"positive"}),a(w,{label:"\u0421\u0431\u0440\u043E\u0441",type:"reset",color:"primary",flat:"",class:"q-ml-sm"}),y(p).role==1?(b(),T(w,{key:0,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",color:"red",flat:"",class:"q-ml-sm",onMousedown:n,onMouseup:s,onMouseleave:s})):S("",!0)])]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])],32))}},ce={class:"container"},pe=M("h3",null,"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",-1),qe={__name:"MaterialsPage",setup(g){return(p,d)=>(b(),E("div",ce,[pe,a(re),a(me)]))}};export{qe as default};
