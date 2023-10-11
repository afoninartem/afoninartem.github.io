import{h as L,j as u,t,Q as X,v as q,z as G,aO as J,aP as K,A as Y,r as S,C as Z,au as x,B as ee,F as te,H as y,M as B,G as p,I as Q,J as w,at as ae,O as P,K as k,ad as $,q as oe,T as j,R as O,N as E,L as ne,P as re}from"./index.461cf75b.js";import{Q as se,a as le,C as ce}from"./ClosePopup.57f57cf7.js";import{Q as ie}from"./QInput.7680f1e2.js";import{u as ue,a as de,b as me,Q as ve}from"./QTable.12d5508a.js";import"./use-dark.9744550a.js";import"./use-key-composition.def118d5.js";import"./format.e15fd7b9.js";import"./scroll.a35e83ec.js";import"./QSeparator.38a422df.js";var pe=L({name:"QToggle",props:{...ue,icon:String,iconColor:String},emits:de,setup(e){function n(r,d){const m=u(()=>(r.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),s=u(()=>r.value===!0?e.iconColor:null);return()=>[t("div",{class:"q-toggle__track"}),t("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},m.value!==void 0?[t(X,{name:m.value,color:s.value})]:void 0)]}return me("toggle",n)}}),he=L({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:n}){const r=G(),d=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return t("td",{class:d.value},q(n.default));const m=r.vnode.key,s=(e.props.colsMap!==void 0?e.props.colsMap[m]:null)||e.props.col;if(s===void 0)return;const{row:D}=e.props;return t("td",{class:d.value+s.__tdClass(D),style:s.__tdStyle(D)},q(n.default))}}}),ge=L({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:n}){const r=u(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>t("tr",{class:r.value},q(n.default))}});const fe=[t("rect",{x:"0",y:"0",width:" 100",height:"100",fill:"none"}),t("g",{transform:"translate(25 25)"},[t("rect",{x:"-20",y:"-20",width:" 40",height:"40",fill:"currentColor",opacity:"0.9"},[t("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),t("g",{transform:"translate(75 25)"},[t("rect",{x:"-20",y:"-20",width:" 40",height:"40",fill:"currentColor",opacity:"0.8"},[t("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.1s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),t("g",{transform:"translate(25 75)"},[t("rect",{x:"-20",y:"-20",width:" 40",height:"40",fill:"currentColor",opacity:"0.7"},[t("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.3s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),t("g",{transform:"translate(75 75)"},[t("rect",{x:"-20",y:"-20",width:" 40",height:"40",fill:"currentColor",opacity:"0.6"},[t("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.2s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])])];var ye=L({name:"QSpinnerCube",props:J,setup(e){const{cSize:n,classes:r}=K(e);return()=>t("svg",{class:r.value,width:n.value,height:n.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},fe)}});const I=Y("vouchers",()=>{const e=S(null),n=S(null),r=S(null),{user:d}=Z(),m=async()=>{await x.get("/get-vouchers-valid-range",{headers:{Authorization:`Bearer ${d.token}`}}).then(l=>e.value=l.data.data).catch(l=>console.log(l))},s=async l=>{const v=new Date(l.from).toLocaleDateString().split(".").reverse().join("/"),b=new Date(l.to).toLocaleDateString().split(".").reverse().join("/");await x.get("/get-vouchers-sheet-data",{headers:{Authorization:`Bearer ${d.token}`,"Date-from":v,"Date-to":b}}).then(a=>{n.value=a.data.data}).catch(a=>console.log(a)),await x.get("/get-vouchers-price",{headers:{Authorization:`Bearer ${d.token}`}}).then(a=>r.value=a.data.data).catch(a=>console.log(a))},D=u(()=>{var l;return(l=e.value)==null?void 0:l.map(v=>v.split("T")[0].split("-").join("/"))}),T=u(()=>n.value),V=u(()=>r.value);return{getValidRange:m,getVoucherData:s,saveXLSX:async l=>{await x.get("/download/vouchers-report",{headers:{Authorization:`Bearer ${d.token}`,"Empty-hide":`${l}`},responseType:"blob"}).then(v=>{const a=`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C ${v.headers.get("Content-Type").split("; ")[1]}.xlsx`;console.log(a);const _=URL.createObjectURL(v.data),h=document.createElement("a");h.href=_,h.download=a,document.body.appendChild(h),h.click(),document.body.removeChild(h),window.URL.revokeObjectURL(_)}).catch(v=>console.log(v))},validRange:D,vouchersData:T,voucherPrice:V}});const we={class:"food-vouchers"},ke=$("h4",null,"\u0422\u0430\u043B\u043E\u043D\u044B",-1),be={class:"row items-center justify-end"},_e=$("br",null,null,-1),Ce={key:2,class:"loader"},Pe={__name:"FoodVouchersPage",setup(e){const{getValidRange:n,getVoucherData:r,saveXLSX:d}=I(),{validRange:m,vouchersData:s,voucherPrice:D}=ee(I()),T=new Date,V=T.getDate()-T.getDay()-6,M=V+6;let l=new Date(new Date().setDate(V)),v=new Date(new Date().setDate(M));const b=S(!1),a=S({from:l,to:v}),_=u(()=>typeof a.value=="string"?{from:a.value,to:a.value}:a.value),h=u(()=>`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 ${new Date(_.value.from).toLocaleDateString()} \u043F\u043E ${new Date(_.value.to).toLocaleDateString()}`),z=u(()=>Object.keys(s.value[0]).map(g=>({name:g,required:!0,label:g,field:g,align:"left",sortable:!0}))),A={page:1,rowsPerPage:10},U=u(()=>{const g=Object.keys(s.value[0]),o={},i={};s.value.forEach(c=>{g.forEach(C=>{o[C]?o[C]+=+c[C]:o[C]=+c[C]})});const f=s.value;for(let c in o)i[c]=o[c]*D.value[c];return o.\u0414\u0430\u0442\u0430="\u0418\u0442\u043E\u0433\u043E",i.\u0414\u0430\u0442\u0430="\u0421\u0443\u043C\u043C\u0430",H(),N(o),N(i),b.value?f.filter(c=>Object.values(c).filter(C=>C.length).length>1):f}),R=S([]);function N(g){R.value.push(g)}const F=u(()=>R.value),H=()=>{R.value=[]},W=()=>{r(_.value)};return te(()=>{n(),r(_.value)}),(g,o)=>(y(),B("div",we,[ke,p(m)?(y(),Q(ie,{key:0,filled:"",modelValue:p(h),"onUpdate:modelValue":o[1]||(o[1]=i=>ae(h)?h.value=i:null),square:"",class:"date-picker"},{append:w(()=>[k(X,{name:"event",class:"cursor-pointer"},{default:w(()=>[k(se,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:w(()=>[k(le,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=i=>a.value=i),options:p(m),range:"",minimal:""},{default:w(()=>[$("div",be,[oe(k(j,{label:"\u041E\u041A",color:"primary",flat:"",onClick:W},null,512),[[ce]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):P("",!0),_e,p(s)&&p(m)?(y(),Q(ve,{key:1,title:"\u0418\u0442\u043E\u0433 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0442\u0430\u043B\u043E\u043D\u043E\u0432",rows:p(U),columns:p(z),class:"my-sticky-header-table","row-key":"name",pagination:A},{"top-right":w(i=>[k(pe,{modelValue:b.value,"onUpdate:modelValue":o[2]||(o[2]=f=>b.value=f),label:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u0435",class:"toggle"},null,8,["modelValue"]),k(j,{color:"primary","icon-right":"archive",label:"XLSX","no-caps":"",onClick:o[3]||(o[3]=f=>p(d)(b.value))}),k(j,{flat:"",round:"",dense:"",icon:i.inFullscreen?"fullscreen_exit":"fullscreen",onClick:i.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"bottom-row":w(()=>[(y(!0),B(O,null,E(p(F),(i,f)=>(y(),Q(ge,{key:f,class:"bottom-row"},{default:w(()=>[(y(!0),B(O,null,E(i,c=>(y(),Q(he,{key:c.name},{default:w(()=>[ne(re(f==1?`${c.toLocaleString()} ${c=="\u0421\u0443\u043C\u043C\u0430"?"":"\u0440."}`:c),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["rows","columns"])):P("",!0),p(m)?P("",!0):(y(),B("div",Ce,[k(ye,{color:"primary",size:"5.5em"})]))]))}};export{Pe as default};
