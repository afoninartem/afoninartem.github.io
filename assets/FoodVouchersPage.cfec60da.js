import{c as H,a as c,h as I,g as W,Z as M,r as b,D as Z,aq as S,s as G,m as J,p as d,y as L,u as k,q as B,t as p,A as T,v,af as j,d as K,E as $,Q as Y,F as x,z as E,x as ee,B as te}from"./index.1f69b706.js";import{Q as oe}from"./QDate.520f960b.js";import{Q as ae,C as re}from"./ClosePopup.025ea6f2.js";import{Q as se}from"./QInput.5551d080.js";import{Q as ne}from"./QToggle.f197e923.js";import{Q as le}from"./QTd.4b407f48.js";import{Q as ce}from"./QTable.4e242be7.js";import{Q as ie}from"./QSpinnerCube.c6235c09.js";import"./use-dark.a9a5dd07.js";import"./use-render-cache.3aae9b27.js";import"./private.use-form.65999595.js";import"./format.de7e9769.js";import"./QDialog.215be82f.js";import"./use-prevent-scroll.19f5866d.js";import"./scroll.36fd76b0.js";import"./selection.43d4a6f4.js";import"./position-engine.5b553eb4.js";import"./QMenu.1fb30529.js";import"./use-file-dom-props.c001c208.js";import"./use-key-composition.3f5327e4.js";import"./QSeparator.6e11e9c1.js";import"./QList.05d41643.js";import"./QChip.373dc8cc.js";import"./QItem.26f8323d.js";import"./QLinearProgress.922f9aaa.js";var ue=H({name:"QTr",props:{props:Object,noHover:Boolean},setup(n,{slots:D}){const h=c(()=>"q-tr"+(n.props===void 0||n.props.header===!0?"":" "+n.props.__trClass)+(n.noHover===!0?" q-tr--no-hover":""));return()=>{var l;return I("tr",{style:(l=n.props)==null?void 0:l.__trStyle,class:h.value},W(D.default))}}});const X=M("vouchers",()=>{const n=b(null),D=b(null),h=b(null),{user:l}=Z(),_=async()=>{await S.get("/get-vouchers-valid-range",{headers:{Authorization:`Bearer ${l.token}`}}).then(async o=>n.value=await o.data.data).catch(o=>console.log(o))},g=async o=>{const s=new Date(o.from).toLocaleDateString().split(".").reverse().join("/"),f=new Date(o.to).toLocaleDateString().split(".").reverse().join("/");await S.get("/get-vouchers-sheet-data",{headers:{Authorization:`Bearer ${l.token}`,"Date-from":s,"Date-to":f}}).then(async e=>{D.value=await e.data.data}).catch(e=>console.log(e)),await S.get("/get-vouchers-price",{headers:{Authorization:`Bearer ${l.token}`}}).then(async e=>h.value=await e.data.data).catch(e=>console.log(e))},C=c(()=>{var o;return(o=n.value)==null?void 0:o.map(s=>s.split("T")[0].split("-").join("/"))}),V=c(()=>D.value),Q=c(()=>h.value);return{getValidRange:_,getVoucherData:g,saveXLSX:async o=>{await S.get("/download/vouchers-report",{headers:{Authorization:`Bearer ${l.token}`,"Empty-hide":`${o}`},responseType:"blob"}).then(s=>{const e=`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C ${s.headers.get("Content-Type").split("; ")[1]}.xlsx`;console.log(e);const y=URL.createObjectURL(s.data),i=document.createElement("a");i.href=y,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(y)}).catch(s=>console.log(s))},validRange:C,vouchersData:V,voucherPrice:Q}});const me={class:"food-vouchers"},de=j("h4",null,"\u0422\u0430\u043B\u043E\u043D\u044B",-1),pe={class:"row items-center justify-end"},ve=j("br",null,null,-1),he={key:2,class:"loader"},Ae={__name:"FoodVouchersPage",setup(n){const{getValidRange:D,getVoucherData:h,saveXLSX:l}=X(),{validRange:_,vouchersData:g,voucherPrice:C}=G(X()),V=new Date,Q=V.getDate()-V.getDay()-6,P=Q+6;let o=new Date(new Date().setDate(Q)),s=new Date(new Date().setDate(P));const f=b(!1),e=b({from:o,to:s}),y=c(()=>typeof e.value=="string"?{from:e.value,to:e.value}:e.value),i=c(()=>`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 ${new Date(y.value.from).toLocaleDateString()} \u043F\u043E ${new Date(y.value.to).toLocaleDateString()}`),U=c(()=>Object.keys(g.value[0]).map(u=>({name:u,required:!0,label:u,field:u,align:"left",sortable:!0}))),z={page:1,rowsPerPage:10},A=c(()=>{const u=Object.keys(g.value[0]),t={},r={};g.value.forEach(a=>{u.forEach(w=>{t[w]?t[w]+=+a[w]:t[w]=+a[w]})});const m=g.value;for(let a in t)r[a]=t[a]*C.value[a];return t.\u0414\u0430\u0442\u0430="\u0418\u0442\u043E\u0433\u043E",r.\u0414\u0430\u0442\u0430="\u0421\u0443\u043C\u043C\u0430",O(),q(t),q(r),f.value?m.filter(a=>Object.values(a).filter(w=>w.length).length>1):m}),R=b([]);function q(u){R.value.push(u)}const F=c(()=>R.value),O=()=>{R.value=[]},N=()=>{h(y.value)};return J(()=>{D(),h(y.value)}),(u,t)=>(d(),L("div",me,[de,k(_)?(d(),B(se,{key:0,filled:"",modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=r=>i.value=r),square:"",class:"date-picker"},{append:p(()=>[v(Y,{name:"event",class:"cursor-pointer"},{default:p(()=>[v(ae,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:p(()=>[v(oe,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value=r),options:k(_),range:"",minimal:""},{default:p(()=>[j("div",pe,[K(v($,{label:"\u041E\u041A",color:"primary",flat:"",onClick:N},null,512),[[re]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):T("",!0),ve,k(g)&&k(_)?(d(),B(ce,{key:1,title:"\u0418\u0442\u043E\u0433 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0442\u0430\u043B\u043E\u043D\u043E\u0432",rows:A.value,columns:U.value,class:"my-sticky-header-table","row-key":"name",pagination:z},{"top-right":p(r=>[v(ne,{modelValue:f.value,"onUpdate:modelValue":t[2]||(t[2]=m=>f.value=m),label:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u0435",class:"toggle"},null,8,["modelValue"]),v($,{color:"primary","icon-right":"archive",label:"XLSX","no-caps":"",onClick:t[3]||(t[3]=m=>k(l)(f.value))}),v($,{flat:"",round:"",dense:"",icon:r.inFullscreen?"fullscreen_exit":"fullscreen",onClick:r.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"bottom-row":p(()=>[(d(!0),L(x,null,E(F.value,(r,m)=>(d(),B(ue,{key:m,class:"bottom-row"},{default:p(()=>[(d(!0),L(x,null,E(r,a=>(d(),B(le,{key:a.name},{default:p(()=>[ee(te(m==1?`${a.toLocaleString()} ${a=="\u0421\u0443\u043C\u043C\u0430"?"":"\u0440."}`:a),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["rows","columns"])):T("",!0),k(_)?T("",!0):(d(),L("div",he,[v(ie,{color:"primary",size:"5.5em"})]))]))}};export{Ae as default};
