import{Z as M,D as N,r as v,a as S,aq as _,s as R,m as E,p as k,q as F,t as u,v as a,E as f,u as o,x as L,af as m,y as q,z as j,B as C,F as I,aE as O,A as P}from"./index.f7b09357.js";import{_ as Z}from"./MultiFilesUpload.7edb2012.js";import{Q as G,a as H}from"./QBar.c9e0ed28.js";import{Q as J}from"./QTooltip.6fab776f.js";import{a as A,Q as K}from"./QCard.c96cc3ce.js";import{Q as T}from"./QInput.ba44d331.js";import{Q as W}from"./QForm.fcb88be6.js";import{Q as X}from"./QDialog.5b8411ea.js";import"./QLinearProgress.fb0b8ae6.js";import"./use-dark.7584776e.js";import"./QChip.55880020.js";import"./QFile.35ae592e.js";import"./use-form.927c5f98.js";import"./use-file-dom-props.5ca1b415.js";import"./format.3e32b8d9.js";import"./position-engine.16a41f35.js";import"./selection.a82ce445.js";import"./scroll.4fa8745d.js";import"./use-key-composition.71287be3.js";import"./use-prevent-scroll.998b213e.js";const x=M("merchantSalary",()=>{const{user:d}=N(),c={position:"",salary:"",hours_required:""},p=v(!1),l=v([]),i=v(null),h=v(!1),y=S(()=>p.value),b=S(()=>l.value),B=S(()=>i.value),V=S(()=>h.value),Q=()=>{p.value=!0,i.value={...c}},z=()=>{p.value=!1},r=()=>{i.value={...c}},t=async()=>{await _.post("/accounting/merchant-salary/add",{...i.value},{headers:{Authorization:`Bearer ${d.token}`}}).then(async e=>{await $(),i.value={...c}}).catch(e=>console.log(e))},w=async e=>{await _.post("/accounting/merchant-salary/edit",{...e},{headers:{Authorization:`Bearer ${d.token}`}}).then(n=>console.log(n)).catch(n=>console.log(n))},D=async e=>{await _.post("/accounting/merchant-salary/remove",{...e},{headers:{Authorization:`Bearer ${d.token}`}}).then(n=>$()).catch(n=>console.log(n))},$=async()=>{await _.get("/accounting/merchant-salary/all",{headers:{Authorization:`Bearer ${d.token}`}}).then(e=>l.value=e.data.data).catch(e=>console.log(e))};return{dialogState:y,salaries:b,model:B,dbtn:V,openDialog:Q,closeDialog:z,sendToBackend:async e=>{const n=new FormData;for(let s=0;s<e.length;s++)n.append("merchants",e[s]);await _.post("/accounting/merchant-salary/upload",n,{headers:{Authorization:`Bearer ${d.token}`,"Content-Type":"multipart/form-data"}}).then(s=>{console.log(s),s.data.data.data.length>0&&(h.value=!0)}).catch(s=>console.log(s))},allSalaries:$,addSalary:t,editSalary:w,removeSalary:D,resetForm:r,download:async()=>{await _.get("/accounting/merchant-salary/download",{headers:{Authorization:`Bearer ${d.token}`},responseType:"blob"}).then(e=>{const n=e.headers.get("Content-Type");console.log(n);const s="\u0417\u041F \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432.xlsx";console.log(s);const U=URL.createObjectURL(e.data),g=document.createElement("a");g.href=U,g.download=s,document.body.appendChild(g),g.click(),document.body.removeChild(g),window.URL.revokeObjectURL(U)}).catch(e=>console.log(e))}}});const Y=m("div",{class:"text-h6"},"\u041E\u043A\u043B\u0430\u0434\u044B \u043F\u043E \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044F\u043C",-1),ee={class:"btn-block"},ae={class:"btn-block"},oe={__name:"MerchantSalaryDialog",setup(d){const{dialogState:c,salaries:p,model:l}=R(x()),{closeDialog:i,allSalaries:h,addSalary:y,removeSalary:b,resetForm:B}=x(),V=v(!0);E(()=>h());const Q=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"});return(z,r)=>(k(),F(X,{modelValue:o(c),"onUpdate:modelValue":r[3]||(r[3]=t=>O(c)?c.value=t:null),persistent:"",maximized:V.value,"transition-show":"slide-left","transition-hide":"slide-right"},{default:u(()=>[a(K,null,{default:u(()=>[a(G,null,{default:u(()=>[a(H),a(f,{dense:"",flat:"",icon:"close",onClick:o(i)},{default:u(()=>[a(J,{class:"bg-white text-primary"},{default:u(()=>[L("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")]),_:1})]),_:1},8,["onClick"])]),_:1}),a(A,null,{default:u(()=>[Y]),_:1}),a(A,{class:"q-pt-none"},{default:u(()=>[a(W,{class:"msd-form"},{default:u(()=>[a(T,{class:"q-ml-sm",label:"\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u0430\u043A \u0432 \u0417\u0423\u041F",hint:"\u041B\u0443\u0447\u0448\u0435 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0447\u0435\u043C \u043D\u0430\u0431\u0438\u0440\u0430\u0442\u044C \u0440\u0443\u043A\u0430\u043C\u0438",style:{width:"400px"},modelValue:o(l).position,"onUpdate:modelValue":r[0]||(r[0]=t=>o(l).position=t)},null,8,["modelValue"]),a(T,{type:"number",class:"q-ml-sm",label:"\u041D\u043E\u0440\u043C\u0430 \u0447\u0430\u0441\u043E\u0432",hint:"\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B",modelValue:o(l).hours_required,"onUpdate:modelValue":r[1]||(r[1]=t=>o(l).hours_required=t),style:{width:"400px"}},null,8,["modelValue"]),a(T,{type:"number",class:"q-ml-sm",label:"\u041E\u043A\u043B\u0430\u0434",hint:"\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B",modelValue:o(l).salary,"onUpdate:modelValue":r[2]||(r[2]=t=>o(l).salary=t),style:{width:"400px"}},null,8,["modelValue"]),m("div",ee,[a(f,{color:"positive",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",onClick:o(y)},null,8,["onClick"]),a(f,{color:"primary",flat:"",label:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",onClick:o(B)},null,8,["onClick"])])]),_:1}),(k(!0),q(I,null,j(o(p),(t,w)=>(k(),q("div",{class:"salary-item",key:`${w}`},[m("p",null,C(w+1),1),m("p",null,C(t.position),1),m("p",null,C(t.hours_required),1),m("p",null,C(o(Q).format(t.salary)),1),m("div",ae,[a(f,{color:"negative",icon:"delete",onClick:D=>o(b)(t)},null,8,["onClick"])])]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"]))}};const te={class:"container"},le=m("h4",null,"\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0442\u0430\u0431\u0435\u043B\u0435\u0439 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432",-1),Ve={__name:"MerchantSalaryPage",setup(d){const{sendToBackend:c,openDialog:p,download:l}=x(),{dbtn:i}=R(x()),h=async(...y)=>{await c(y)};return(y,b)=>(k(),q("div",te,[le,a(f,{label:"\u041E\u043A\u043B\u0430\u0434\u044B",color:"secondary",onClick:o(p)},null,8,["onClick"]),a(Z,{onSendMessage:h}),a(oe),o(i)?(k(),F(f,{key:0,color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",onClick:o(l)},null,8,["onClick"])):P("",!0)]))}};export{Ve as default};
