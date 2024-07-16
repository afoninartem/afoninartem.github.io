import{c as H,a as n,h as I,g as W,X as M,r as b,D as G,ao as S,s as J,m as K,p as m,y as L,u as _,q as B,t as d,A as T,v as p,ad as j,d as Y,E as $,Q as Z,F as x,z as E,x as ee,B as te}from"./index.e2dfb63b.js";import{Q as oe}from"./QDate.3fc08807.js";import{Q as ae,C as re}from"./ClosePopup.b0571841.js";import{Q as se}from"./QInput.8f43056b.js";import{Q as ne}from"./QToggle.b24001d1.js";import{Q as le}from"./QTd.4db78490.js";import{Q as ce}from"./QTable.08735980.js";import{Q as ie}from"./QSpinnerCube.cca789d0.js";import"./use-dark.44eab301.js";import"./use-render-cache.1a7235d4.js";import"./use-form.c08f15a1.js";import"./format.3e32b8d9.js";import"./QDialog.977ae71f.js";import"./use-prevent-scroll.0b193ef1.js";import"./scroll.36a5d815.js";import"./selection.0da1644d.js";import"./position-engine.f770b92f.js";import"./QMenu.980108c6.js";import"./use-file-dom-props.26ba1483.js";import"./use-key-composition.e05c7df5.js";import"./QSeparator.6f7f955f.js";import"./QList.da57b190.js";import"./QChip.140145bf.js";import"./QItem.6e0ada56.js";import"./QLinearProgress.da8fcd42.js";var ue=H({name:"QTr",props:{props:Object,noHover:Boolean},setup(l,{slots:w}){const v=n(()=>"q-tr"+(l.props===void 0||l.props.header===!0?"":" "+l.props.__trClass)+(l.noHover===!0?" q-tr--no-hover":""));return()=>I("tr",{class:v.value},W(w.default))}});const q=M("vouchers",()=>{const l=b(null),w=b(null),v=b(null),{user:D}=G(),k=async()=>{await S.get("/get-vouchers-valid-range",{headers:{Authorization:`Bearer ${D.token}`}}).then(async o=>l.value=await o.data.data).catch(o=>console.log(o))},h=async o=>{const s=new Date(o.from).toLocaleDateString().split(".").reverse().join("/"),g=new Date(o.to).toLocaleDateString().split(".").reverse().join("/");await S.get("/get-vouchers-sheet-data",{headers:{Authorization:`Bearer ${D.token}`,"Date-from":s,"Date-to":g}}).then(async e=>{w.value=await e.data.data}).catch(e=>console.log(e)),await S.get("/get-vouchers-price",{headers:{Authorization:`Bearer ${D.token}`}}).then(async e=>v.value=await e.data.data).catch(e=>console.log(e))},C=n(()=>{var o;return(o=l.value)==null?void 0:o.map(s=>s.split("T")[0].split("-").join("/"))}),V=n(()=>w.value),Q=n(()=>v.value);return{getValidRange:k,getVoucherData:h,saveXLSX:async o=>{await S.get("/download/vouchers-report",{headers:{Authorization:`Bearer ${D.token}`,"Empty-hide":`${o}`},responseType:"blob"}).then(s=>{const e=`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C ${s.headers.get("Content-Type").split("; ")[1]}.xlsx`;console.log(e);const f=URL.createObjectURL(s.data),c=document.createElement("a");c.href=f,c.download=e,document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(f)}).catch(s=>console.log(s))},validRange:C,vouchersData:V,voucherPrice:Q}});const me={class:"food-vouchers"},de=j("h4",null,"\u0422\u0430\u043B\u043E\u043D\u044B",-1),pe={class:"row items-center justify-end"},ve=j("br",null,null,-1),he={key:2,class:"loader"},Ae={__name:"FoodVouchersPage",setup(l){const{getValidRange:w,getVoucherData:v,saveXLSX:D}=q(),{validRange:k,vouchersData:h,voucherPrice:C}=J(q()),V=new Date,Q=V.getDate()-V.getDay()-6,P=Q+6;let o=new Date(new Date().setDate(Q)),s=new Date(new Date().setDate(P));const g=b(!1),e=b({from:o,to:s}),f=n(()=>typeof e.value=="string"?{from:e.value,to:e.value}:e.value),c=n(()=>`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 ${new Date(f.value.from).toLocaleDateString()} \u043F\u043E ${new Date(f.value.to).toLocaleDateString()}`),U=n(()=>Object.keys(h.value[0]).map(i=>({name:i,required:!0,label:i,field:i,align:"left",sortable:!0}))),z={page:1,rowsPerPage:10},A=n(()=>{const i=Object.keys(h.value[0]),t={},r={};h.value.forEach(a=>{i.forEach(y=>{t[y]?t[y]+=+a[y]:t[y]=+a[y]})});const u=h.value;for(let a in t)r[a]=t[a]*C.value[a];return t.\u0414\u0430\u0442\u0430="\u0418\u0442\u043E\u0433\u043E",r.\u0414\u0430\u0442\u0430="\u0421\u0443\u043C\u043C\u0430",O(),X(t),X(r),g.value?u.filter(a=>Object.values(a).filter(y=>y.length).length>1):u}),R=b([]);function X(i){R.value.push(i)}const F=n(()=>R.value),O=()=>{R.value=[]},N=()=>{v(f.value)};return K(()=>{w(),v(f.value)}),(i,t)=>(m(),L("div",me,[de,_(k)?(m(),B(se,{key:0,filled:"",modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=r=>c.value=r),square:"",class:"date-picker"},{append:d(()=>[p(Z,{name:"event",class:"cursor-pointer"},{default:d(()=>[p(ae,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:d(()=>[p(oe,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value=r),options:_(k),range:"",minimal:""},{default:d(()=>[j("div",pe,[Y(p($,{label:"\u041E\u041A",color:"primary",flat:"",onClick:N},null,512),[[re]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):T("",!0),ve,_(h)&&_(k)?(m(),B(ce,{key:1,title:"\u0418\u0442\u043E\u0433 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0442\u0430\u043B\u043E\u043D\u043E\u0432",rows:A.value,columns:U.value,class:"my-sticky-header-table","row-key":"name",pagination:z},{"top-right":d(r=>[p(ne,{modelValue:g.value,"onUpdate:modelValue":t[2]||(t[2]=u=>g.value=u),label:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u0435",class:"toggle"},null,8,["modelValue"]),p($,{color:"primary","icon-right":"archive",label:"XLSX","no-caps":"",onClick:t[3]||(t[3]=u=>_(D)(g.value))}),p($,{flat:"",round:"",dense:"",icon:r.inFullscreen?"fullscreen_exit":"fullscreen",onClick:r.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"bottom-row":d(()=>[(m(!0),L(x,null,E(F.value,(r,u)=>(m(),B(ue,{key:u,class:"bottom-row"},{default:d(()=>[(m(!0),L(x,null,E(r,a=>(m(),B(le,{key:a.name},{default:d(()=>[ee(te(u==1?`${a.toLocaleString()} ${a=="\u0421\u0443\u043C\u043C\u0430"?"":"\u0440."}`:a),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["rows","columns"])):T("",!0),_(k)?T("",!0):(m(),L("div",he,[p(ie,{color:"primary",size:"5.5em"})]))]))}};export{Ae as default};