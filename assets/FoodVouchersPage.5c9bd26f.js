import{h as P,j as c,t as C,Q as U,v as x,z as G,A as J,r as V,C as K,az as L,B as Y,F as Z,H as f,M as Q,G as m,I as R,J as y,at as ee,O as j,K as _,ad as $,q as te,T as q,R as O,N as X,L as oe,P as ae}from"./index.34ec4f39.js";import{b as ne,Q as se,a as le,C as re}from"./ClosePopup.28f4c6fb.js";import{Q as ce}from"./QInput.5b31c409.js";import{u as ue,a as ie,b as de,Q as ve}from"./QTable.dddac1a8.js";import"./use-dark.f545a510.js";import"./use-key-composition.e2e6254d.js";import"./format.521fb49e.js";import"./scroll.a24f6ae7.js";import"./QSeparator.7f22d13f.js";var me=P({name:"QToggle",props:{...ue,icon:String,iconColor:String},emits:ie,setup(e){function u(l,i){const d=c(()=>(l.value===!0?e.checkedIcon:i.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),a=c(()=>l.value===!0?e.iconColor:null);return()=>[C("div",{class:"q-toggle__track"}),C("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},d.value!==void 0?[C(U,{name:d.value,color:a.value})]:void 0)]}return de("toggle",u)}}),he=P({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:u}){const l=G(),i=c(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return C("td",{class:i.value},x(u.default));const d=l.vnode.key,a=(e.props.colsMap!==void 0?e.props.colsMap[d]:null)||e.props.col;if(a===void 0)return;const{row:D}=e.props;return C("td",{class:i.value+a.__tdClass(D),style:a.__tdStyle(D)},x(u.default))}}}),pe=P({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:u}){const l=c(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>C("tr",{class:l.value},x(u.default))}});const z=J("vouchers",()=>{const e=V(null),u=V(null),l=V(null),{user:i}=K(),d=async()=>{await L.get("/get-vouchers-valid-range",{headers:{Authorization:`Bearer ${i.token}`}}).then(n=>e.value=n.data.data).catch(n=>console.log(n))},a=async n=>{const v=new Date(n.from).toLocaleDateString().split(".").reverse().join("/"),k=new Date(n.to).toLocaleDateString().split(".").reverse().join("/");await L.get("/get-vouchers-sheet-data",{headers:{Authorization:`Bearer ${i.token}`,"Date-from":v,"Date-to":k}}).then(t=>{u.value=t.data.data}).catch(t=>console.log(t)),await L.get("/get-vouchers-price",{headers:{Authorization:`Bearer ${i.token}`}}).then(t=>l.value=t.data.data).catch(t=>console.log(t))},D=c(()=>{var n;return(n=e.value)==null?void 0:n.map(v=>v.split("T")[0].split("-").join("/"))}),S=c(()=>u.value),B=c(()=>l.value);return{getValidRange:d,getVoucherData:a,saveXLSX:async n=>{await L.get("/download/vouchers-report",{headers:{Authorization:`Bearer ${i.token}`,"Empty-hide":`${n}`},responseType:"blob"}).then(v=>{const t=`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C ${v.headers.get("Content-Type").split("; ")[1]}.xlsx`;console.log(t);const w=URL.createObjectURL(v.data),h=document.createElement("a");h.href=w,h.download=t,document.body.appendChild(h),h.click(),document.body.removeChild(h),window.URL.revokeObjectURL(w)}).catch(v=>console.log(v))},validRange:D,vouchersData:S,voucherPrice:B}});const ge={class:"food-vouchers"},fe=$("h4",null,"\u0422\u0430\u043B\u043E\u043D\u044B",-1),ye={class:"row items-center justify-end"},_e=$("br",null,null,-1),ke={key:2,class:"loader"},Re={__name:"FoodVouchersPage",setup(e){const{getValidRange:u,getVoucherData:l,saveXLSX:i}=z(),{validRange:d,vouchersData:a,voucherPrice:D}=Y(z()),S=new Date,B=S.getDate()-S.getDay()-6,E=B+6;let n=new Date(new Date().setDate(B)),v=new Date(new Date().setDate(E));const k=V(!1),t=V({from:n,to:v}),w=c(()=>typeof t.value=="string"?{from:t.value,to:t.value}:t.value),h=c(()=>`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 ${new Date(w.value.from).toLocaleDateString()} \u043F\u043E ${new Date(w.value.to).toLocaleDateString()}`),A=c(()=>Object.keys(a.value[0]).map(p=>({name:p,required:!0,label:p,field:p,align:"left",sortable:!0}))),F={page:1,rowsPerPage:10},N=c(()=>{const p=Object.keys(a.value[0]),o={},r={};a.value.forEach(s=>{p.forEach(b=>{o[b]?o[b]+=+s[b]:o[b]=+s[b]})});const g=a.value;for(let s in o)r[s]=o[s]*D.value[s];return o.\u0414\u0430\u0442\u0430="\u0418\u0442\u043E\u0433\u043E",r.\u0414\u0430\u0442\u0430="\u0421\u0443\u043C\u043C\u0430",M(),I(o),I(r),k.value?g.filter(s=>Object.values(s).filter(b=>b.length).length>1):g}),T=V([]);function I(p){T.value.push(p)}const H=c(()=>T.value),M=()=>{T.value=[]},W=()=>{l(w.value)};return Z(()=>{u(),l(w.value)}),(p,o)=>(f(),Q("div",ge,[fe,m(d)?(f(),R(ce,{key:0,filled:"",modelValue:m(h),"onUpdate:modelValue":o[1]||(o[1]=r=>ee(h)?h.value=r:null),square:"",class:"date-picker"},{append:y(()=>[_(U,{name:"event",class:"cursor-pointer"},{default:y(()=>[_(se,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:y(()=>[_(le,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),options:m(d),range:"",minimal:""},{default:y(()=>[$("div",ye,[te(_(q,{label:"\u041E\u041A",color:"primary",flat:"",onClick:W},null,512),[[re]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):j("",!0),_e,m(a)&&m(d)?(f(),R(ve,{key:1,title:"\u0418\u0442\u043E\u0433 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0442\u0430\u043B\u043E\u043D\u043E\u0432",rows:m(N),columns:m(A),class:"my-sticky-header-table","row-key":"name",pagination:F},{"top-right":y(r=>[_(me,{modelValue:k.value,"onUpdate:modelValue":o[2]||(o[2]=g=>k.value=g),label:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u0435",class:"toggle"},null,8,["modelValue"]),_(q,{color:"primary","icon-right":"archive",label:"XLSX","no-caps":"",onClick:o[3]||(o[3]=g=>m(i)(k.value))}),_(q,{flat:"",round:"",dense:"",icon:r.inFullscreen?"fullscreen_exit":"fullscreen",onClick:r.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"bottom-row":y(()=>[(f(!0),Q(O,null,X(m(H),(r,g)=>(f(),R(pe,{key:g,class:"bottom-row"},{default:y(()=>[(f(!0),Q(O,null,X(r,s=>(f(),R(he,{key:s.name},{default:y(()=>[oe(ae(g==1?`${s.toLocaleString()} ${s=="\u0421\u0443\u043C\u043C\u0430"?"":"\u0440."}`:s),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["rows","columns"])):j("",!0),m(d)?j("",!0):(f(),Q("div",ke,[_(ne,{color:"primary",size:"5.5em"})]))]))}};export{Re as default};