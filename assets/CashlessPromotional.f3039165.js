import{Q as pe,a as ve,b as G,c as K}from"./QTabPanels.b791a8c3.js";import{h as oe,q as se,u as k,an as be,aL as fe,a4 as le,r as w,k as f,w as D,z as ye,t as ke,aM as we,x as xe,Q as N,g as Se,A as Te,C as Ce,ao as Q,H as S,M as F,ad as v,K as i,J as y,G as I,B as X,T as P,I as V,L as ie,P as Y,O as R,ae as z,F as Ie}from"./index.9c73f242.js";import{b as $e,Q as ne,c as J}from"./use-prevent-scroll.3d4fa4eb.js";import{b as ae}from"./QDialog.3f97503a.js";import{u as Le,a as Be}from"./use-dark.9125821f.js";import{j as Ve,k as qe}from"./use-form.a31ae3ca.js";import{u as He,a as Qe,d as Pe}from"./selection.aa176e5e.js";import{Q as Ae}from"./QFile.a7ad9f74.js";import{Q as W}from"./QInput.34711f3e.js";import{Q as M,a as Ue}from"./QTd.84d7dfab.js";import{Q as ue}from"./QTable.2b3356b2.js";import"./QResizeObserver.ab169c72.js";import"./position-engine.a808bf1c.js";import"./scroll.509a285f.js";import"./touch.3df10340.js";import"./use-render-cache.1a7235d4.js";import"./QChip.f0e0b7df.js";import"./use-file-dom-props.51037f88.js";import"./format.3e32b8d9.js";import"./use-key-composition.3fb7cd5b.js";import"./QLinearProgress.7f08d88f.js";var Oe=oe({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:g,emit:c}){let l=!1,u,t,d=null,_=null,h,s;function m(){u&&u(),u=null,l=!1,d!==null&&(clearTimeout(d),d=null),_!==null&&(clearTimeout(_),_=null),t!==void 0&&t.removeEventListener("transitionend",h),h=null}function o(a,x,T){x!==void 0&&(a.style.height=`${x}px`),a.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,u=T}function b(a,x){a.style.overflowY=null,a.style.height=null,a.style.transition=null,m(),x!==s&&c(x)}function A(a,x){let T=0;t=a,l===!0?(m(),T=a.offsetHeight===a.scrollHeight?0:void 0):(s="hide",a.style.overflowY="hidden"),o(a,T,x),d=setTimeout(()=>{d=null,a.style.height=`${a.scrollHeight}px`,h=C=>{_=null,(Object(C)!==C||C.target===a)&&b(a,"show")},a.addEventListener("transitionend",h),_=setTimeout(h,e.duration*1.1)},100)}function U(a,x){let T;t=a,l===!0?m():(s="show",a.style.overflowY="hidden",T=a.scrollHeight),o(a,T,x),d=setTimeout(()=>{d=null,a.style.height=0,h=C=>{_=null,(Object(C)!==C||C.target===a)&&b(a,"hide")},a.addEventListener("transitionend",h),_=setTimeout(h,e.duration*1.1)},100)}return se(()=>{l===!0&&m()}),()=>k(be,{css:!1,appear:e.appear,onEnter:A,onLeave:U},g.default)}});const H=fe({}),Ee=Object.keys(le);var Ne=oe({name:"QExpansionItem",props:{...le,...He,...Le,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Qe,"click","afterShow","afterHide"],setup(e,{slots:g,emit:c}){const{proxy:{$q:l}}=ye(),u=Be(e,l),t=w(e.modelValue!==null?e.modelValue:e.defaultOpened),d=w(null),_=Ve(),{show:h,hide:s,toggle:m}=Pe({showing:t});let o,b;const A=f(()=>`q-expansion-item q-item-type q-expansion-item--${t.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),U=f(()=>{if(e.contentInsetLevel===void 0)return null;const n=l.lang.rtl===!0?"Right":"Left";return{["padding"+n]:e.contentInsetLevel*56+"px"}}),a=f(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),x=f(()=>{const n={};return Ee.forEach(L=>{n[L]=e[L]}),n}),T=f(()=>a.value===!0||e.expandIconToggle!==!0),C=f(()=>e.expandedIcon!==void 0&&t.value===!0?e.expandedIcon:e.expandIcon||l.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),Z=f(()=>e.disable!==!0&&(a.value===!0||e.expandIconToggle===!0)),ee=f(()=>({expanded:t.value===!0,detailsId:_.value,toggle:m,show:h,hide:s})),r=f(()=>{const n=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:l.lang.label[t.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":t.value===!0?"true":"false","aria-controls":_.value,"aria-label":n}});D(()=>e.group,n=>{b!==void 0&&b(),n!==void 0&&te()});function p(n){a.value!==!0&&m(n),c("click",n)}function B(n){n.keyCode===13&&O(n,!0)}function O(n,L){L!==!0&&d.value!==null&&d.value.focus(),m(n),Se(n)}function q(){c("afterShow")}function re(){c("afterHide")}function te(){o===void 0&&(o=qe()),t.value===!0&&(H[e.group]=o);const n=D(t,j=>{j===!0?H[e.group]=o:H[e.group]===o&&delete H[e.group]}),L=D(()=>H[e.group],(j,_e)=>{_e===o&&j!==void 0&&j!==o&&s()});b=()=>{n(),L(),H[e.group]===o&&delete H[e.group],b=void 0}}function ce(){const n={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[k(N,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&t.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:C.value})];return Z.value===!0&&(Object.assign(n,{tabindex:0,...r.value,onClick:O,onKeyup:B}),L.unshift(k("div",{ref:d,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),k(J,n,()=>L)}function de(){let n;return g.header!==void 0?n=[].concat(g.header(ee.value)):(n=[k(J,()=>[k(ne,{lines:e.labelLines},()=>e.label||""),e.caption?k(ne,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&n[e.switchToggleSide===!0?"push":"unshift"](k(J,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>k(N,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&n[e.switchToggleSide===!0?"unshift":"push"](ce()),n}function me(){const n={ref:"item",style:e.headerStyle,class:e.headerClass,dark:u.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return T.value===!0&&(n.clickable=!0,n.onClick=p,Object.assign(n,a.value===!0?x.value:r.value)),k($e,n,de)}function he(){return ke(k("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:U.value,id:_.value},xe(g.default)),[[we,t.value]])}function ge(){const n=[me(),k(Oe,{duration:e.duration,onShow:q,onHide:re},he)];return e.expandSeparator===!0&&n.push(k(ae,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:u.value}),k(ae,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:u.value})),n}return e.group!==void 0&&te(),se(()=>{b!==void 0&&b()}),()=>k("div",{class:A.value},[k("div",{class:"q-expansion-item__container relative-position"},ge())])}});const $=Te("cashlessPromotional",()=>{const{user:e}=Ce(),g=w(null),c=w(null),l=w(null),u=w(null),t=w(null),d=w(null),_=w(null),h=w(null),s=f(()=>({analysis:g.value,settlements:c.value,turningSheet1012:l.value,turningSheet4106:u.value,consumption:t.value})),m=f(()=>d.value),o=async()=>{await Q.get("/accounting/cashless-promotions/result/download",{headers:{Authorization:`Bearer ${e.token}`},responseType:"blob"}).then(r=>{const p=r.headers.get("Content-Type");console.log(p);const B=`${new Date().toLocaleDateString()} \u0411\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u0441\u0447\u0435\u0442, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.xlsx`;console.log(B);const O=URL.createObjectURL(r.data),q=document.createElement("a");q.href=O,q.download=B,document.body.appendChild(q),q.click(),document.body.removeChild(q),window.URL.revokeObjectURL(O)})},b=(r,p)=>{switch(p){case"analysis":g.value=r;break;case"settlements":c.value=r;break;case"10.12":l.value=r;break;case"41.06":u.value=r;break;case"consumption":t.value=r;break}},A=async(r=0)=>{if(!t.value)return;const p=new FormData;p.append("consumption",t.value),await Q.post("/accounting/cashless-promotions/consumption/upload",p,{headers:{Authorization:`Bearer ${e.token}`,"Content-Type":"multipart/form-data",Sum:r}}).then(B=>{h.value=B.data.data}).catch(B=>console.log(B))},U=f(()=>h.value),a=async()=>{await Q.get("/accounting/cashless-promotional/handbook",{headers:{Authorization:`Bearer ${e.token}`}}).then(r=>{_.value=r.data.data}).catch(r=>console.log(r))},x=async()=>{const r=new FormData;r.append("analysis",s.value.analysis),r.append("settlements",s.value.settlements),r.append("10.12",s.value.turningSheet1012),r.append("41.06",s.value.turningSheet4106),await Q.post("/accounting/cashless-promotional/handbook/upload",r,{headers:{Authorization:`Bearer ${e.token}`,"Content-Type":"multipart/form-data"}}).then(p=>{d.value=p.data.data}).catch(p=>console.log(p))},T=f(()=>_.value),C=f(()=>_.value.data.filter(p=>p.user_cashless));return{uploadFile:b,upload:x,saveXLSX:o,uploadConsumption:A,getHandbook:a,updateHB:async r=>{await Q.post("/accounting/cashless-promotional/handbook/update",{...r},{headers:{Authorization:`Bearer ${e.token}`}}).then(p=>{a()}).catch(p=>console.log(p))},resetCashless:async r=>{await Q.post("/accounting/cashless-promotional/handbook/resetCashless",{...r},{headers:{Authorization:`Bearer ${e.token}`}}).then(p=>{a()}).catch(p=>console.log(p))},userHB:C,actualHB:T,consumption:t,cashlessPromotional:U,files:s,handbookSummary:m}}),Fe={class:"q-pa-md"},je={class:"q-gutter-md row items-start"},E={__name:"FileUploadTXT",props:["mode","label"],setup(e){const g=e,c=w(null),{uploadFile:l}=$();return(u,t)=>(S(),F("div",Fe,[v("div",je,[i(Ae,{modelValue:c.value,"onUpdate:modelValue":[t[0]||(t[0]=d=>c.value=d),t[1]||(t[1]=d=>I(l)(c.value,g.mode))],label:g.label,square:"",filled:"","use-chips":"",accept:".txt",style:{width:"400px"}},{prepend:y(()=>[i(N,{name:"attach_file"})]),_:1},8,["modelValue","label"])])]))}};const De={key:0,class:"cashless-promotions__table"},Re={__name:"HandbookTable",setup(e){const{updateHB:g,getHandbook:c}=$(),{actualHB:l}=X($()),u=w(""),t=[["name","\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"],["cash_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0437\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435"],["cashless_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u043F\u043E \u0411/\u041D"],["cashless_percent","% \u0411/\u041D"],["is_cashless","\u0421\u0442\u0430\u0442\u0443\u0441 \u0411/\u041D"]],d=async s=>{await g(s)},_=f(()=>t.map(s=>({name:s[0],required:!0,label:s[1],field:s[0],format:m=>s[0]=="cashless_percent"?`${m} %`:`${m}`,align:"left",sortable:!0}))),h={page:1,rowsPerPage:0};return(s,m)=>I(l)?(S(),F("div",De,[i(ue,{title:"\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",rows:I(l).data,columns:_.value,class:"my-sticky-header-table","row-key":"name",pagination:h,filter:u.value},{"top-right":y(o=>[i(W,{dense:"",debounce:"300",modelValue:u.value,"onUpdate:modelValue":m[0]||(m[0]=b=>u.value=b),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:y(()=>[i(N,{name:"search"})]),_:1},8,["modelValue"]),i(P,{flat:"",round:"",dense:"",icon:o.inFullscreen?"fullscreen_exit":"fullscreen",onClick:o.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"body-cell-is_cashless":y(o=>[typeof o.row.is_cashless=="boolean"?(S(),V(M,{key:0,props:o},{default:y(()=>[i(Ue,{name:o.row.name,modelValue:o.row.is_cashless,"onUpdate:modelValue":[b=>o.row.is_cashless=b,b=>d(o.row)],size:"xs",color:"green"},null,8,["name","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])):(S(),V(M,{key:1,props:o},{default:y(()=>[ie(Y(o.row.is_cashless),1)]),_:2},1032,["props"]))]),_:1},8,["rows","columns","filter"])])):R("",!0)}};const ze={class:"cashless-promotions__handbook"},Me={class:"upload-section"},Xe={class:"upload-section__turning-sheets"},Ge={class:"upload-section__reports"},Ke={class:"summary-section"},Je={class:"table-section"},Ye={__name:"HandbookCashless",setup(e){const{upload:g}=$(),{handbookSummary:c,files:l}=X($()),u=f(()=>l.value&&l.value.analysis&&l.value.settlements&&l.value.turningSheet1012&&l.value.turningSheet4106);return(t,d)=>(S(),F("div",ze,[i(Ne,{label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430",width:"100%"},{default:y(()=>[v("section",Me,[v("div",Xe,[i(E,{mode:"10.12",label:"\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 10.12.txt"}),i(E,{mode:"41.06",label:"\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 41.06.txt"})]),v("div",Ge,[i(E,{mode:"analysis",label:"TXT \u0410\u043D\u0430\u043B\u0438\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438"}),i(E,{mode:"settlements",label:"TXT \u0420\u0430\u0441\u0447\u0435\u0442\u044B \u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438"})]),u.value?(S(),V(P,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",style:{height:"61px"},onClick:d[0]||(d[0]=z(_=>I(g)(),["prevent"]))})):R("",!0)])]),_:1}),v("section",Ke,[v("p",null,Y(I(c)),1)]),v("section",Je,[i(Re)])]))}};const We={class:"cashless-promotions__consumption"},Ze={class:"upload-section"},et={class:"inputs"},tt={class:"buttons"},nt={__name:"PromotionalConsumption",setup(e){const{cashlessPromotional:g,files:c}=X($()),{uploadConsumption:l,saveXLSX:u}=$(),t=w(null),d=f(()=>c.value&&c.value.consumption);return(_,h)=>(S(),F("div",We,[v("section",Ze,[v("div",et,[i(E,{mode:"consumption",label:"\u0421\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u0443\u0447\u0435\u0442 \u041C\u041F\u0417"}),i(W,{modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=s=>t.value=s),modelModifiers:{number:!0},type:"number",label:"\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: 1% \u0432\u044B\u0440\u0443\u0447\u043A\u0438",square:"",filled:"",style:{width:"400px"}},null,8,["modelValue"])]),v("div",tt,[d.value?(S(),V(P,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",style:{height:"61px"},onClick:h[1]||(h[1]=z(s=>I(l)(t.value),["prevent"]))})):R("",!0),I(g)&&I(g).length?(S(),V(P,{key:1,class:"btn-fixed-width",color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",icon:"download",style:{height:"61px"},onClick:z(I(u),["prevent"])},null,8,["onClick"])):R("",!0)])])]))}},at={__name:"UserHandbookTable",setup(e){const{getHandbook:g,resetCashless:c}=$(),{userHB:l}=X($()),u=w(""),t=[["name","\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"],["cash_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0437\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435"],["cashless_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u043F\u043E \u0411/\u041D"],["cashless_percent","% \u0411/\u041D"],["is_cashless","\u0411/\u041D \u0438\u043B\u0438 \u041D\u0410\u041B"],["user_cashless","\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]],d=async s=>{await c(s)},_=f(()=>t.map(s=>({name:s[0],required:!0,label:s[1],field:s[0],format:m=>s[0]=="cashless_percent"?`${m} %`:s[0]=="is_cashless"?m?"\u0411/\u041D":"\u041D\u0410\u041B":`${m}`,align:"left",sortable:!0}))),h={page:1,rowsPerPage:0};return(s,m)=>(S(),V(ue,{title:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",rows:I(l),columns:_.value,class:"my-sticky-header-table","row-key":"name",pagination:h,filter:u.value},{"top-right":y(o=>[i(W,{dense:"",debounce:"300",modelValue:u.value,"onUpdate:modelValue":m[0]||(m[0]=b=>u.value=b),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:y(()=>[i(N,{name:"search"})]),_:1},8,["modelValue"]),i(P,{flat:"",round:"",dense:"",icon:o.inFullscreen?"fullscreen_exit":"fullscreen",onClick:o.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"body-cell-user_cashless":y(o=>[typeof o.row.user_cashless=="boolean"?(S(),V(M,{key:0,props:o},{default:y(()=>[i(P,{icon:"delete",color:"primary",onClick:z(b=>d(o.row),["prevent"])},null,8,["onClick"])]),_:2},1032,["props"])):(S(),V(M,{key:1,props:o},{default:y(()=>[ie(Y(o.row.user_cashless),1)]),_:2},1032,["props"]))]),_:1},8,["rows","columns","filter"]))}};const ot={class:"cashless-promotional"},st=v("h4",null,"\u0420\u0430\u0441\u0447\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u043B\u044F \u0411\u041F",-1),lt=v("p",null,"\u0414\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0442\u0447\u0435\u0442\u0430 \u0421\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u0443\u0447\u0435\u0442 \u041C\u041F\u0417 \u0432 1\u04217.7 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 xls.",-1),it=v("p",null,"\u0422\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0443\u043C\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043D\u0430\u0434\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043C\u0435\u0436\u0434\u0443 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C\u0438 (\u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E).",-1),ut=v("h4",null,"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",-1),rt=v("p",null,"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0430\u043C\u0438.",-1),ct=v("p",null,"\u041D\u0430 \u044D\u0442\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0441\u0432\u0435\u0436\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043F\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u043C \u0438 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043E\u0431\u0437\u043E\u0440\u043E\u043C \u043F\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C.",-1),dt=v("p",null,'\u0422\u0430\u043A\u0436\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u0435\u0441\u043B\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F.',-1),mt=v("h4",null,"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",-1),ht=v("p",null,'\u0421\u043F\u0438\u0441\u043E\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u043F\u0440\u0438\u0437\u043D\u0430\u043A "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u044B\u043B \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C.',-1),gt=v("p",null,'\u0427\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043F\u0440\u0438\u0437\u043D\u0430\u043A "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u043D\u0430 \u043E\u0431\u0449\u0438\u0445 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F\u0445, \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u0435\u0433\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.',-1),At={__name:"CashlessPromotional",setup(e){const{getHandbook:g}=$(),c=w("consumption");return D(c,l=>{localStorage.setItem("tab",JSON.stringify(l))}),Ie(async()=>{await g(),c.value=localStorage.getItem("tab")?JSON.parse(localStorage.getItem("tab")):"handbook"}),(l,u)=>(S(),F("div",ot,[i(pe,{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=t=>c.value=t),class:"text-black","active-color":"secondary","indicator-color":"secondary",align:"justify","narrow-indicator":""},{default:y(()=>[i(G,{name:"consumption",label:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u0430"}),i(G,{name:"handbook",label:"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"}),i(G,{name:"settings",label:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"})]),_:1},8,["modelValue"]),i(ve,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=t=>c.value=t),animated:""},{default:y(()=>[i(K,{class:"panel",name:"consumption"},{default:y(()=>[st,lt,it,i(nt)]),_:1}),i(K,{class:"panel",name:"handbook"},{default:y(()=>[ut,rt,ct,dt,i(Ye)]),_:1}),i(K,{class:"panel",name:"settings"},{default:y(()=>[mt,ht,gt,i(at)]),_:1})]),_:1},8,["modelValue"])]))}};export{At as default};
