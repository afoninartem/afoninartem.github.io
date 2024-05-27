import{h as H,k as n,u as I,x as M,A as W,r as b,C as G,ao as Q,B as J,F as K,H as d,M as S,G as _,I as B,J as m,O as T,K as p,ad as j,t as Y,T as $,Q as Z,R as X,N as E,L as ee,P as te}from"./index.3fed2421.js";import{Q as ae,a as oe,C as re}from"./ClosePopup.6852a193.js";import{Q as se}from"./QInput.4aa5f8a4.js";import{a as ne,Q as le}from"./QTd.7488a2cb.js";import{Q as ce}from"./QTable.db823af6.js";import{Q as ue}from"./QSpinnerCube.44279573.js";import"./use-dark.7be76274.js";import"./use-render-cache.1a7235d4.js";import"./use-form.12a5b6c2.js";import"./format.3e32b8d9.js";import"./QDialog.a3ddb180.js";import"./position-engine.2afcebae.js";import"./selection.19639fea.js";import"./scroll.9a76306a.js";import"./use-prevent-scroll.c7f0ecee.js";import"./use-file-dom-props.5bacef0c.js";import"./use-key-composition.0fcc8103.js";import"./QSeparator.dca876d8.js";import"./QChip.a3ffc295.js";import"./QItem.585b58cf.js";import"./QLinearProgress.a985a1f1.js";var ie=H({name:"QTr",props:{props:Object,noHover:Boolean},setup(l,{slots:w}){const v=n(()=>"q-tr"+(l.props===void 0||l.props.header===!0?"":" "+l.props.__trClass)+(l.noHover===!0?" q-tr--no-hover":""));return()=>I("tr",{class:v.value},M(w.default))}});const O=W("vouchers",()=>{const l=b(null),w=b(null),v=b(null),{user:k}=G(),D=async()=>{await Q.get("/get-vouchers-valid-range",{headers:{Authorization:`Bearer ${k.token}`}}).then(async a=>l.value=await a.data.data).catch(a=>console.log(a))},h=async a=>{const s=new Date(a.from).toLocaleDateString().split(".").reverse().join("/"),g=new Date(a.to).toLocaleDateString().split(".").reverse().join("/");await Q.get("/get-vouchers-sheet-data",{headers:{Authorization:`Bearer ${k.token}`,"Date-from":s,"Date-to":g}}).then(async e=>{w.value=await e.data.data}).catch(e=>console.log(e)),await Q.get("/get-vouchers-price",{headers:{Authorization:`Bearer ${k.token}`}}).then(async e=>v.value=await e.data.data).catch(e=>console.log(e))},C=n(()=>{var a;return(a=l.value)==null?void 0:a.map(s=>s.split("T")[0].split("-").join("/"))}),V=n(()=>w.value),L=n(()=>v.value);return{getValidRange:D,getVoucherData:h,saveXLSX:async a=>{await Q.get("/download/vouchers-report",{headers:{Authorization:`Bearer ${k.token}`,"Empty-hide":`${a}`},responseType:"blob"}).then(s=>{const e=`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C ${s.headers.get("Content-Type").split("; ")[1]}.xlsx`;console.log(e);const f=URL.createObjectURL(s.data),c=document.createElement("a");c.href=f,c.download=e,document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(f)}).catch(s=>console.log(s))},validRange:C,vouchersData:V,voucherPrice:L}});const de={class:"food-vouchers"},me=j("h4",null,"\u0422\u0430\u043B\u043E\u043D\u044B",-1),pe={class:"row items-center justify-end"},ve=j("br",null,null,-1),he={key:2,class:"loader"},Ee={__name:"FoodVouchersPage",setup(l){const{getValidRange:w,getVoucherData:v,saveXLSX:k}=O(),{validRange:D,vouchersData:h,voucherPrice:C}=J(O()),V=new Date,L=V.getDate()-V.getDay()-6,P=L+6;let a=new Date(new Date().setDate(L)),s=new Date(new Date().setDate(P));const g=b(!1),e=b({from:a,to:s}),f=n(()=>typeof e.value=="string"?{from:e.value,to:e.value}:e.value),c=n(()=>`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 ${new Date(f.value.from).toLocaleDateString()} \u043F\u043E ${new Date(f.value.to).toLocaleDateString()}`),U=n(()=>Object.keys(h.value[0]).map(u=>({name:u,required:!0,label:u,field:u,align:"left",sortable:!0}))),q={page:1,rowsPerPage:10},A=n(()=>{const u=Object.keys(h.value[0]),t={},r={};h.value.forEach(o=>{u.forEach(y=>{t[y]?t[y]+=+o[y]:t[y]=+o[y]})});const i=h.value;for(let o in t)r[o]=t[o]*C.value[o];return t.\u0414\u0430\u0442\u0430="\u0418\u0442\u043E\u0433\u043E",r.\u0414\u0430\u0442\u0430="\u0421\u0443\u043C\u043C\u0430",N(),x(t),x(r),g.value?i.filter(o=>Object.values(o).filter(y=>y.length).length>1):i}),R=b([]);function x(u){R.value.push(u)}const F=n(()=>R.value),N=()=>{R.value=[]},z=()=>{v(f.value)};return K(()=>{w(),v(f.value)}),(u,t)=>(d(),S("div",de,[me,_(D)?(d(),B(se,{key:0,filled:"",modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=r=>c.value=r),square:"",class:"date-picker"},{append:m(()=>[p(Z,{name:"event",class:"cursor-pointer"},{default:m(()=>[p(ae,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:m(()=>[p(oe,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value=r),options:_(D),range:"",minimal:""},{default:m(()=>[j("div",pe,[Y(p($,{label:"\u041E\u041A",color:"primary",flat:"",onClick:z},null,512),[[re]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):T("",!0),ve,_(h)&&_(D)?(d(),B(ce,{key:1,title:"\u0418\u0442\u043E\u0433 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0442\u0430\u043B\u043E\u043D\u043E\u0432",rows:A.value,columns:U.value,class:"my-sticky-header-table","row-key":"name",pagination:q},{"top-right":m(r=>[p(ne,{modelValue:g.value,"onUpdate:modelValue":t[2]||(t[2]=i=>g.value=i),label:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u0435",class:"toggle"},null,8,["modelValue"]),p($,{color:"primary","icon-right":"archive",label:"XLSX","no-caps":"",onClick:t[3]||(t[3]=i=>_(k)(g.value))}),p($,{flat:"",round:"",dense:"",icon:r.inFullscreen?"fullscreen_exit":"fullscreen",onClick:r.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"bottom-row":m(()=>[(d(!0),S(X,null,E(F.value,(r,i)=>(d(),B(ie,{key:i,class:"bottom-row"},{default:m(()=>[(d(!0),S(X,null,E(r,o=>(d(),B(le,{key:o.name},{default:m(()=>[ee(te(i==1?`${o.toLocaleString()} ${o=="\u0421\u0443\u043C\u043C\u0430"?"":"\u0440."}`:o),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["rows","columns"])):T("",!0),_(D)?T("",!0):(d(),S("div",he,[p(ue,{color:"primary",size:"5.5em"})]))]))}};export{Ee as default};