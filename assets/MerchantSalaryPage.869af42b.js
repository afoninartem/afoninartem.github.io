import{X as M,D as N,r as v,a as S,ao as _,s as R,m as L,p as k,q as F,t as u,v as a,E as f,u as o,x as E,ad as m,y as z,z as j,B as C,F as I,aC as O,A as P}from"./index.522f3b58.js";import{_ as X}from"./MultiFilesUpload.c5a4f336.js";import{Q as G,a as H}from"./QBar.f746b5a6.js";import{Q as J}from"./QTooltip.d94bba18.js";import{a as A,Q as K}from"./QCard.780d595b.js";import{Q as T}from"./QInput.ce1e3457.js";import{Q as W}from"./QForm.ddf4f01b.js";import{Q as Y}from"./QDialog.4ea68326.js";import"./position-engine.bc8a989e.js";import"./use-dark.c9c4934a.js";import"./selection.e0d38d8e.js";import"./use-form.83a1b45f.js";import"./scroll.fc854570.js";import"./QChip.c1c08142.js";import"./QFile.a3b4fbec.js";import"./use-file-dom-props.91eda0b6.js";import"./format.3e32b8d9.js";import"./use-key-composition.feda23ac.js";import"./use-prevent-scroll.c3f54d65.js";const x=M("merchantSalary",()=>{const{user:d}=N(),c={position:"",salary:"",hours_required:""},p=v(!1),l=v([]),i=v(null),h=v(!1),y=S(()=>p.value),b=S(()=>l.value),B=S(()=>i.value),V=S(()=>h.value),Q=()=>{p.value=!0,i.value={...c}},D=()=>{p.value=!1},r=()=>{i.value={...c}},t=async()=>{await _.post("/accounting/merchant-salary/add",{...i.value},{headers:{Authorization:`Bearer ${d.token}`}}).then(async e=>{await $(),i.value={...c}}).catch(e=>console.log(e))},w=async e=>{await _.post("/accounting/merchant-salary/edit",{...e},{headers:{Authorization:`Bearer ${d.token}`}}).then(n=>console.log(n)).catch(n=>console.log(n))},U=async e=>{await _.post("/accounting/merchant-salary/remove",{...e},{headers:{Authorization:`Bearer ${d.token}`}}).then(n=>$()).catch(n=>console.log(n))},$=async()=>{await _.get("/accounting/merchant-salary/all",{headers:{Authorization:`Bearer ${d.token}`}}).then(e=>l.value=e.data.data).catch(e=>console.log(e))};return{dialogState:y,salaries:b,model:B,dbtn:V,openDialog:Q,closeDialog:D,sendToBackend:async e=>{const n=new FormData;for(let s=0;s<e.length;s++)n.append("merchants",e[s]);await _.post("/accounting/merchant-salary/upload",n,{headers:{Authorization:`Bearer ${d.token}`,"Content-Type":"multipart/form-data"}}).then(s=>{console.log(s),s.data.data.data.length>0&&(h.value=!0)}).catch(s=>console.log(s))},allSalaries:$,addSalary:t,editSalary:w,removeSalary:U,resetForm:r,download:async()=>{await _.get("/accounting/merchant-salary/download",{headers:{Authorization:`Bearer ${d.token}`},responseType:"blob"}).then(e=>{const n=e.headers.get("Content-Type");console.log(n);const s="\u0417\u041F \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432.xlsx";console.log(s);const q=URL.createObjectURL(e.data),g=document.createElement("a");g.href=q,g.download=s,document.body.appendChild(g),g.click(),document.body.removeChild(g),window.URL.revokeObjectURL(q)}).catch(e=>console.log(e))}}});const Z=m("div",{class:"text-h6"},"\u041E\u043A\u043B\u0430\u0434\u044B \u043F\u043E \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044F\u043C",-1),ee={class:"btn-block"},ae={class:"btn-block"},oe={__name:"MerchantSalaryDialog",setup(d){const{dialogState:c,salaries:p,model:l}=R(x()),{closeDialog:i,allSalaries:h,addSalary:y,removeSalary:b,resetForm:B}=x(),V=v(!0);L(()=>h());const Q=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"});return(D,r)=>(k(),F(Y,{modelValue:o(c),"onUpdate:modelValue":r[3]||(r[3]=t=>O(c)?c.value=t:null),persistent:"",maximized:V.value,"transition-show":"slide-left","transition-hide":"slide-right"},{default:u(()=>[a(K,null,{default:u(()=>[a(G,null,{default:u(()=>[a(H),a(f,{dense:"",flat:"",icon:"close",onClick:o(i)},{default:u(()=>[a(J,{class:"bg-white text-primary"},{default:u(()=>[E("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")]),_:1})]),_:1},8,["onClick"])]),_:1}),a(A,null,{default:u(()=>[Z]),_:1}),a(A,{class:"q-pt-none"},{default:u(()=>[a(W,{class:"msd-form"},{default:u(()=>[a(T,{class:"q-ml-sm",label:"\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u0430\u043A \u0432 \u0417\u0423\u041F",hint:"\u041B\u0443\u0447\u0448\u0435 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0447\u0435\u043C \u043D\u0430\u0431\u0438\u0440\u0430\u0442\u044C \u0440\u0443\u043A\u0430\u043C\u0438",style:{width:"400px"},modelValue:o(l).position,"onUpdate:modelValue":r[0]||(r[0]=t=>o(l).position=t)},null,8,["modelValue"]),a(T,{type:"number",class:"q-ml-sm",label:"\u041D\u043E\u0440\u043C\u0430 \u0447\u0430\u0441\u043E\u0432",hint:"\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B",modelValue:o(l).hours_required,"onUpdate:modelValue":r[1]||(r[1]=t=>o(l).hours_required=t),style:{width:"400px"}},null,8,["modelValue"]),a(T,{type:"number",class:"q-ml-sm",label:"\u041E\u043A\u043B\u0430\u0434",hint:"\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B",modelValue:o(l).salary,"onUpdate:modelValue":r[2]||(r[2]=t=>o(l).salary=t),style:{width:"400px"}},null,8,["modelValue"]),m("div",ee,[a(f,{color:"positive",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",onClick:o(y)},null,8,["onClick"]),a(f,{color:"primary",flat:"",label:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",onClick:o(B)},null,8,["onClick"])])]),_:1}),(k(!0),z(I,null,j(o(p),(t,w)=>(k(),z("div",{class:"salary-item",key:`${w}`},[m("p",null,C(w+1),1),m("p",null,C(t.position),1),m("p",null,C(t.hours_required),1),m("p",null,C(o(Q).format(t.salary)),1),m("div",ae,[a(f,{color:"negative",icon:"delete",onClick:U=>o(b)(t)},null,8,["onClick"])])]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"]))}};const te={class:"container"},le=m("h4",null,"\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0442\u0430\u0431\u0435\u043B\u0435\u0439 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432",-1),Be={__name:"MerchantSalaryPage",setup(d){const{sendToBackend:c,openDialog:p,download:l}=x(),{dbtn:i}=R(x()),h=async(...y)=>{await c(y)};return(y,b)=>(k(),z("div",te,[le,a(f,{label:"\u041E\u043A\u043B\u0430\u0434\u044B",color:"secondary",onClick:o(p)},null,8,["onClick"]),a(X,{onSendMessage:h}),a(oe),o(i)?(k(),F(f,{key:0,color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",onClick:o(l)},null,8,["onClick"])):P("",!0)]))}};export{Be as default};
