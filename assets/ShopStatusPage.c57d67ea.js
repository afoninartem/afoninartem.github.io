import{X as A,D as R,r as p,a as f,ao as S,s as x,p as C,q as U,t as r,v as t,u as o,E as h,y as w,x as F,ad as b,aC as M}from"./index.f5fd8453.js";import{Q as N}from"./QTable.3c221d26.js";import{Q as P,a as D}from"./QBar.5c25ba10.js";import{Q as E}from"./QTooltip.a40ba438.js";import{Q as L,a as V}from"./QCard.e313cb59.js";import{Q as v}from"./QInput.a0295016.js";import{Q as I}from"./QForm.37ae5dad.js";import{Q as X}from"./QDialog.85269645.js";import"./QSeparator.0722b4fe.js";import"./use-dark.c75d3aac.js";import"./QList.c1797d29.js";import"./scroll.b069c905.js";import"./use-form.5cb76cb7.js";import"./QChip.081f976d.js";import"./QItem.c75b0c4d.js";import"./position-engine.22d2b068.js";import"./selection.f7b60b19.js";import"./use-key-composition.6e338092.js";import"./format.3e32b8d9.js";import"./use-file-dom-props.f5b136ee.js";import"./use-prevent-scroll.cb350452.js";const g=A("shopStatuses",()=>{const{user:c}=R(),n=p([]),e=p(!1),i=p(null),_=p(["\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"]),d=p([]),m={status:"",title:"",capture:""},u=f(()=>n.value),s=f(()=>e.value),a=f(()=>i.value),y=f(()=>_.value.concat(n.value.map(l=>l.title))),B=f(()=>d.value),q=()=>{e.value=!0,i.value={...m}},$=()=>{e.value=!1},z=()=>{i.value={...m}},T=async l=>{await S.post("/admin/shopstatus/new",{...a.value},{headers:{Authorization:`Bearer ${c.token}`}}).then(k=>{Q(),e.value=!1}).catch(k=>console.log(k))},Q=async()=>{await S.get("/admin/shopstatus/all",{headers:{Authorization:`Bearer ${c.token}`}}).then(l=>n.value=l.data.data).catch(l=>console.log(l))};return{statuses:u,dialogState:s,statusCard:a,titles:y,limitedMaterials:B,addStatus:T,openStatusCard:q,resetCard:z,closeStatusCard:$,getAllStatuses:Q,getLimitedMaterials:async()=>{await S.get("/admin/shopstatus/limits",{headers:{Authorization:`Bearer ${c.token}`}}).then(l=>d.value=l.data.data).catch(l=>console.log(l))}}}),j={__name:"ShopStatusTable",setup(c){const{statuses:n,titles:e}=x(g()),{openStatusCard:i}=g(),_=f(()=>e.value.map(u=>({name:u,required:!0,label:u,field:u,align:"left",sortable:!0}))),d=[],m={page:1,rowsPerPage:0};return(u,s)=>(C(),U(N,{title:"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443 \u043F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443",rows:d,columns:_.value,class:"my-sticky-header-table","row-key":"name",pagination:m},{"top-right":r(a=>[t(h,{icon:"add",class:"q-ml-sm",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441",color:"positive",onClick:o(i)},null,8,["onClick"]),t(h,{flat:"",round:"",dense:"",icon:a.inFullscreen?"fullscreen_exit":"fullscreen",onClick:a.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),_:1},8,["columns"]))}},G={class:"container"},H=b("h4",null,"\u041D\u043E\u0432\u044B\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",-1),J={class:"btn-block"},K={__name:"ShopStatusCard",setup(c){const{dialogState:n,statusCard:e}=x(g()),{closeStatusCard:i,resetCard:_,addStatus:d}=g(),m=p(!0);return(u,s)=>(C(),w("div",G,[t(X,{modelValue:o(n),"onUpdate:modelValue":s[3]||(s[3]=a=>M(n)?n.value=a:null),persistent:"",maximized:m.value,"transition-show":"slide-left","transition-hide":"slide-left"},{default:r(()=>[t(L,null,{default:r(()=>[t(P,null,{default:r(()=>[t(D),t(h,{dense:"",flat:"",icon:"close",onClick:o(i)},{default:r(()=>[t(E,{class:"bg-white text-primary"},{default:r(()=>[F("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")]),_:1})]),_:1},8,["onClick"])]),_:1}),t(V,null,{default:r(()=>[H]),_:1}),t(V,{class:"q-pt-none"},{default:r(()=>[t(I,{onSubmit:o(d),onReset:o(_),class:"q-gutter-md"},{default:r(()=>[t(v,{label:"\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430",modelValue:o(e).status,"onUpdate:modelValue":s[0]||(s[0]=a=>o(e).status=a),hint:"regular, top, etc"},null,8,["modelValue"]),t(v,{label:"\u0422\u0438\u0442\u0443\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430",modelValue:o(e).title,"onUpdate:modelValue":s[1]||(s[1]=a=>o(e).title=a),hint:"\u041E\u0431\u044B\u0447\u043D\u044B\u0439, \u0422\u043E\u043F\u043E\u0432\u044B\u0439 \u0438 \u0442.\u0434."},null,8,["modelValue"]),t(v,{label:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",modelValue:o(e).capture,"onUpdate:modelValue":s[2]||(s[2]=a=>o(e).capture=a),hint:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u043C"},null,8,["modelValue"]),b("div",J,[t(h,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",type:"submit",color:"positive"}),t(h,{label:"\u0421\u0431\u0440\u043E\u0441",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},8,["onSubmit","onReset"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])]))}},O={class:"container"},W=b("h4",null," \u0421\u0442\u0430\u0442\u0443\u0441\u044B \u0424\u0421 ",-1),Ct={__name:"ShopStatusPage",setup(c){return(n,e)=>(C(),w("div",O,[W,t(j),t(K)]))}};export{Ct as default};
