import{b as P,Q as q}from"./QTable.0a58609e.js";import{X as z,D as E,r as d,a as v,ao as T,s as A,m as N,p as h,y as S,v as a,t as s,Q as w,E as Q,q as B,A as R,u as x,x as F,ad as k,B as $,aC as I}from"./index.ef225a1a.js";import{Q as y}from"./QInput.db7a7af2.js";import{Q as O}from"./QTd.cdf34d7c.js";import{Q as L,a as W}from"./QBar.5db36ce3.js";import{Q as H}from"./QTooltip.4cbcdd3f.js";import{Q as G,a as D}from"./QCard.7cf9542e.js";import{Q as U}from"./QToggle.ae81673b.js";import{Q as X}from"./QForm.a864eacb.js";import{Q as Z}from"./QDialog.379b9bf8.js";import"./QSeparator.4725f750.js";import"./use-dark.6b3a4773.js";import"./QList.93de4c2d.js";import"./scroll.088aa9f0.js";import"./use-form.0c90aca7.js";import"./QChip.f5b843b4.js";import"./QItem.d9875fe4.js";import"./position-engine.3e721305.js";import"./selection.a54e58f6.js";import"./use-key-composition.dab2bf71.js";import"./format.3e32b8d9.js";import"./use-file-dom-props.729a8976.js";import"./use-prevent-scroll.b39a97db.js";const M=z("materials",()=>{const{user:b}=E(),i=d([]),c=d(!1),u=d(null),p=d(null),m=(t,l)=>{u.value=l,c.value=!0,p.value={...u.value}},g=()=>{u.value={...p.value}},C=async()=>{await T.post("/warehouse/materials/update",{...u.value},{headers:{Authorization:`Bearer ${b.token}`}}).then(t=>{f()}).catch(t=>console.log(t))},e=()=>{c.value=!1,u.value=null},f=async()=>{await T.get("/warehouse/materials",{headers:{Authorization:`Bearer ${b.token}`}}).then(t=>i.value=t.data.data).catch(t=>console.log(t))},_=v(()=>i.value),V=v(()=>c.value),r=v(()=>u.value),o=v(()=>p.value);return{materials:_,dialogState:V,initiateCard:o,materialCard:r,getAllMaterials:f,openMaterialCard:m,resetMaterialCard:g,saveMaterialCard:C,closeMaterialCard:e}}),j={class:"container"},J={__name:"MaterialsTable",setup(b){const{materials:i,dialogState:c}=A(M()),{getAllMaterials:u,openMaterialCard:p}=M(),m=d([]),g=v(()=>m.value.length==0?i.value:i.value.filter(r=>m.value.some(o=>r.code.includes(o)))),C=[{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u041F\u0430\u043D\u0435\u043B\u0438",value:"PANEL"},{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u0424\u043E\u0442\u043E\u043E\u0431\u043E\u0438",value:"WPPHO"},{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u041E\u0431\u043E\u0438",value:"WPCOM"},{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u0414\u0438\u0437. \u043E\u0431\u043E\u0438",value:"WPDES"},{label:"\u0420\u0435\u043C\u043E\u043D\u0442/\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",value:"LIGHT"},{label:"\u0424\u0421: \u043F\u0438\u0449\u0435\u0432\u0430\u044F",value:"TREAT"},{label:"\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F",value:"DINER"},{label:"\u0414\u0435\u043A\u043E\u0440",value:"DECOR"}],e=d(""),f=[["code","\u041A\u043E\u0434\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0438"],["name","\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"],["min_leftover","\u041C\u0438\u043D. \u043E\u0441\u0442\u0430\u0442\u043E\u043A"],["pack","\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430"],["is_stopped","\u041E\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043C?"],["has_limits","\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"]],_=v(()=>f.map(r=>({name:r[0],required:!0,label:r[1],field:r[0],format:o=>r[0]=="has_limits"?o?"\u0414\u0430":"\u041D\u0435\u0442":`${o}`,align:"left",sortable:!0}))),V={page:1,rowsPerPage:0};return N(async()=>{await u()}),(r,o)=>(h(),S("div",j,[a(q,{title:"\u0420\u041F \u0438 \u0410\u0425\u041E",rows:g.value,columns:_.value,class:"my-sticky-header-table","row-key":"name",onRowClick:x(p),pagination:V,filter:e.value},{"top-right":s(t=>[a(P,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=l=>m.value=l),multiple:"",outlined:"",dense:"","options-dense":"","emit-value":"","map-options":"",label:"\u041F\u0430\u043F\u043A\u0438",options:C,style:{"min-width":"150px"},class:"q-mr-md"},null,8,["modelValue"]),a(y,{dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value=l),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:s(()=>[a(w,{name:"search"})]),_:1},8,["modelValue"]),a(Q,{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen",onClick:t.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"body-cell-is_stopped":s(t=>[a(O,{props:t},{default:s(()=>[t.value=="true"?(h(),B(w,{key:0,name:"do_not_disturb",color:"negative",size:"24px"})):R("",!0),t.value=="false"?(h(),B(w,{key:1,name:"check_circle",color:"positive",size:"24px"})):R("",!0)]),_:2},1032,["props"])]),_:1},8,["rows","columns","onRowClick","filter"])]))}},K={class:"container"},Y={class:"text-h5"},ee={class:"text-h6"},ae={class:"btn-block"},le={__name:"MaterialCard",setup(b){const{dialogState:i,materialCard:c,initiateCard:u}=A(M()),{closeMaterialCard:p,resetMaterialCard:m,saveMaterialCard:g}=M(),C=d(!0),e=d(c),f=d(null),_=v(()=>e.value.stop_date=="0001-01-01T00:00:00Z"||e.value.stop_date==null?"\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0440\u0435\u043C\u0435\u043D":new Date(e.value.stop_date).toLocaleDateString("ru-RU")),V=()=>{e.value.stop_date=new Date},r=async()=>{g()},o=()=>{m()};return(t,l)=>(h(),S("div",K,[a(Z,{modelValue:x(i),"onUpdate:modelValue":l[5]||(l[5]=n=>I(i)?i.value=n:null),persistent:"",maximized:C.value,"transition-show":"slide-left","transition-hide":"slide-left"},{default:s(()=>[a(G,null,{default:s(()=>[a(L,null,{default:s(()=>[a(W),a(Q,{dense:"",flat:"",icon:"close",onClick:x(p)},{default:s(()=>[a(H,{class:"bg-white text-primary"},{default:s(()=>[F("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")]),_:1})]),_:1},8,["onClick"])]),_:1}),a(D,null,{default:s(()=>[k("div",Y,$(e.value.name),1),k("div",ee,$(e.value.code),1)]),_:1}),a(D,{class:"q-pt-none"},{default:s(()=>[a(X,{ref_key:"materialCardForm",ref:f,onSubmit:r,onReset:o,class:"q-gutter-md"},{default:s(()=>[a(y,{label:"\u0410\u0434\u0440\u0435\u0441\u0430",filled:"",outlined:"",modelValue:e.value.address,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value.address=n)},null,8,["modelValue"]),a(y,{type:"number",label:"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A",modelValue:e.value.min_leftover,"onUpdate:modelValue":l[1]||(l[1]=n=>e.value.min_leftover=n)},null,8,["modelValue"]),a(y,{type:"number",label:"\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430",modelValue:e.value.pack,"onUpdate:modelValue":l[2]||(l[2]=n=>e.value.pack=n)},null,8,["modelValue"]),a(U,{label:e.value.is_stopped?`\u0412 \u0441\u0442\u043E\u043F-\u043B\u0438\u0441\u0442\u0435 \u0441 ${_.value}`:`\u041E\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0441 ${_.value}`,color:"red","false-value":!1,"true-value":!0,modelValue:e.value.is_stopped,"onUpdate:modelValue":[l[3]||(l[3]=n=>e.value.is_stopped=n),V]},null,8,["label","modelValue"]),a(U,{label:e.value.has_limits?"\u0415\u0441\u0442\u044C \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F":"\u041D\u0435\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439",color:"red","false-value":!1,"true-value":!0,modelValue:e.value.has_limits,"onUpdate:modelValue":l[4]||(l[4]=n=>e.value.has_limits=n)},null,8,["label","modelValue"]),k("div",ae,[a(Q,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",type:"submit",color:"positive"}),a(Q,{label:"\u0421\u0431\u0440\u043E\u0441",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])]))}},te={class:"container"},oe=k("h3",null,"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",-1),Se={__name:"MaterialsPage",setup(b){return(i,c)=>(h(),S("div",te,[oe,a(J),a(le)]))}};export{Se as default};
