import{h as te,m as ne,t as _,an as he,aI as ge,a4 as ae,r as k,j as v,w as R,z as ve,q as fe,aJ as be,v as _e,Q as j,g as pe,A as ye,C as ke,ao as Q,H as C,M as F,ad as T,K as p,J as q,G as x,B as M,T as D,I as O,L as xe,P as oe,O as N,ae as X}from"./index.62b09686.js";import{a as we,Q as J,b as z}from"./QList.fc872a7b.js";import{k as W}from"./QDialog.4d957239.js";import{u as Se,a as Te}from"./use-dark.0e85ba3a.js";import{u as Ie,a as Ce,d as Le}from"./selection.663c804d.js";import{j as Z}from"./use-form.62d1521a.js";import{Q as se}from"./QInput.142722da.js";import{Q as ee,a as $e}from"./QTd.e676fa53.js";import{Q as Be}from"./QTable.fca1c974.js";import{Q as qe}from"./QFile.70635223.js";var He=te({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:h,emit:g}){let s=!1,m,a,u=null,c=null,r,i;function f(){m&&m(),m=null,s=!1,u!==null&&(clearTimeout(u),u=null),c!==null&&(clearTimeout(c),c=null),a!==void 0&&a.removeEventListener("transitionend",r),r=null}function l(n,y,w){y!==void 0&&(n.style.height=`${y}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,m=w}function b(n,y){n.style.overflowY=null,n.style.height=null,n.style.transition=null,f(),y!==i&&g(y)}function V(n,y){let w=0;a=n,s===!0?(f(),w=n.offsetHeight===n.scrollHeight?0:void 0):(i="hide",n.style.overflowY="hidden"),l(n,w,y),u=setTimeout(()=>{u=null,n.style.height=`${n.scrollHeight}px`,r=S=>{c=null,(Object(S)!==S||S.target===n)&&b(n,"show")},n.addEventListener("transitionend",r),c=setTimeout(r,e.duration*1.1)},100)}function A(n,y){let w;a=n,s===!0?f():(i="show",n.style.overflowY="hidden",w=n.scrollHeight),l(n,w,y),u=setTimeout(()=>{u=null,n.style.height=0,r=S=>{c=null,(Object(S)!==S||S.target===n)&&b(n,"hide")},n.addEventListener("transitionend",r),c=setTimeout(r,e.duration*1.1)},100)}return ne(()=>{s===!0&&f()}),()=>_(he,{css:!1,appear:e.appear,onEnter:V,onLeave:A},h.default)}});const B=ge({}),Qe=Object.keys(ae);var Ve=te({name:"QExpansionItem",props:{...ae,...Ie,...Se,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Ce,"click","afterShow","afterHide"],setup(e,{slots:h,emit:g}){const{proxy:{$q:s}}=ve(),m=Te(e,s),a=k(e.modelValue!==null?e.modelValue:e.defaultOpened),u=k(null),c=Z(),{show:r,hide:i,toggle:f}=Le({showing:a});let l,b;const V=v(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),A=v(()=>{if(e.contentInsetLevel===void 0)return null;const t=s.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=v(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),y=v(()=>{const t={};return Qe.forEach(I=>{t[I]=e[I]}),t}),w=v(()=>n.value===!0||e.expandIconToggle!==!0),S=v(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||s.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),G=v(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),K=v(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:f,show:r,hide:i})),o=v(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:s.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-controls":c,"aria-label":t}});R(()=>e.group,t=>{b!==void 0&&b(),t!==void 0&&Y()});function d(t){n.value!==!0&&f(t),g("click",t)}function L(t){t.keyCode===13&&P(t,!0)}function P(t,I){I!==!0&&u.value!==null&&u.value.focus(),f(t),pe(t)}function $(){g("afterShow")}function le(){g("afterHide")}function Y(){l===void 0&&(l=Z()),a.value===!0&&(B[e.group]=l);const t=R(a,U=>{U===!0?B[e.group]=l:B[e.group]===l&&delete B[e.group]}),I=R(()=>B[e.group],(U,me)=>{me===l&&U!==void 0&&U!==l&&i()});b=()=>{t(),I(),B[e.group]===l&&delete B[e.group],b=void 0}}function ie(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},I=[_(j,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:S.value})];return G.value===!0&&(Object.assign(t,{tabindex:0,...o.value,onClick:P,onKeyup:L}),I.unshift(_("div",{ref:u,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),_(z,t,()=>I)}function ue(){let t;return h.header!==void 0?t=[].concat(h.header(K.value)):(t=[_(z,()=>[_(J,{lines:e.labelLines},()=>e.label||""),e.caption?_(J,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](_(z,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>_(j,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](ie()),t}function re(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:m.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return w.value===!0&&(t.clickable=!0,t.onClick=d,Object.assign(t,n.value===!0?y.value:o.value)),_(we,t,ue)}function ce(){return fe(_("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:A.value,id:c},_e(h.default)),[[be,a.value]])}function de(){const t=[re(),_(He,{duration:e.duration,onShow:$,onHide:le},ce)];return e.expandSeparator===!0&&t.push(_(W,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:m.value}),_(W,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:m.value})),t}return e.group!==void 0&&Y(),ne(()=>{b!==void 0&&b()}),()=>_("div",{class:V.value},[_("div",{class:"q-expansion-item__container relative-position"},de())])}});const H=ye("cashlessPromotional",()=>{const{user:e}=ke(),h=k(null),g=k(null),s=k(null),m=k(null),a=k(null),u=k(null),c=k(null),r=k(null),i=v(()=>({analysis:h.value,settlements:g.value,turningSheet1012:s.value,turningSheet4106:m.value,consumption:a.value})),f=v(()=>u.value),l=async()=>{await Q.get("/accounting/cashless-promotions/result/download",{headers:{Authorization:`Bearer ${e.token}`},responseType:"blob"}).then(o=>{const d=o.headers.get("Content-Type");console.log(d);const L=`${new Date().toLocaleDateString()} \u0411\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u0441\u0447\u0435\u0442, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.xlsx`;console.log(L);const P=URL.createObjectURL(o.data),$=document.createElement("a");$.href=P,$.download=L,document.body.appendChild($),$.click(),document.body.removeChild($),window.URL.revokeObjectURL(P)})},b=(o,d)=>{switch(d){case"analysis":h.value=o;break;case"settlements":g.value=o;break;case"10.12":s.value=o;break;case"41.06":m.value=o;break;case"consumption":a.value=o;break}},V=async(o=0)=>{if(!a.value)return;const d=new FormData;d.append("consumption",a.value),await Q.post("/accounting/cashless-promotions/consumption/upload",d,{headers:{Authorization:`Bearer ${e.token}`,"Content-Type":"multipart/form-data",Sum:o}}).then(L=>{r.value=L.data.data}).catch(L=>console.log(L))},A=v(()=>r.value),n=async()=>{await Q.get("/accounting/cashless-promotional/handbook",{headers:{Authorization:`Bearer ${e.token}`}}).then(o=>{c.value=o.data.data}).catch(o=>console.log(o))},y=async()=>{const o=new FormData;o.append("analysis",i.value.analysis),o.append("settlements",i.value.settlements),o.append("10.12",i.value.turningSheet1012),o.append("41.06",i.value.turningSheet4106),await Q.post("/accounting/cashless-promotional/handbook/upload",o,{headers:{Authorization:`Bearer ${e.token}`,"Content-Type":"multipart/form-data"}}).then(d=>{u.value=d.data.data}).catch(d=>console.log(d))},w=v(()=>c.value),S=v(()=>c.value.data.filter(d=>d.user_cashless));return{uploadFile:b,upload:y,saveXLSX:l,uploadConsumption:V,getHandbook:n,updateHB:async o=>{await Q.post("/accounting/cashless-promotional/handbook/update",{...o},{headers:{Authorization:`Bearer ${e.token}`}}).then(d=>{n()}).catch(d=>console.log(d))},resetCashless:async o=>{await Q.post("/accounting/cashless-promotional/handbook/resetCashless",{...o},{headers:{Authorization:`Bearer ${e.token}`}}).then(d=>{n()}).catch(d=>console.log(d))},userHB:S,actualHB:w,consumption:a,cashlessPromotional:A,files:i,handbookSummary:f}}),Ae={class:"q-pa-md"},Pe={class:"q-gutter-md row items-start"},E={__name:"FileUploadTXT",props:["mode","label"],setup(e){const h=e,g=k(null),{uploadFile:s}=H();return(m,a)=>(C(),F("div",Ae,[T("div",Pe,[p(qe,{modelValue:g.value,"onUpdate:modelValue":[a[0]||(a[0]=u=>g.value=u),a[1]||(a[1]=u=>x(s)(g.value,h.mode))],label:h.label,square:"",filled:"","use-chips":"",accept:".txt",style:{width:"400px"}},{prepend:q(()=>[p(j,{name:"attach_file"})]),_:1},8,["modelValue","label"])])]))}};const Ee={key:0,class:"cashless-promotions__table"},Oe={__name:"HandbookTable",setup(e){const{updateHB:h,getHandbook:g}=H(),{actualHB:s}=M(H()),m=k(""),a=[["name","\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"],["cash_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0437\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435"],["cashless_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u043F\u043E \u0411/\u041D"],["cashless_percent","% \u0411/\u041D"],["is_cashless","\u0421\u0442\u0430\u0442\u0443\u0441 \u0411/\u041D"]],u=async i=>{await h(i)},c=v(()=>a.map(i=>({name:i[0],required:!0,label:i[1],field:i[0],format:f=>i[0]=="cashless_percent"?`${f} %`:`${f}`,align:"left",sortable:!0}))),r={page:1,rowsPerPage:0};return(i,f)=>x(s)?(C(),F("div",Ee,[p(Be,{title:"\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",rows:x(s).data,columns:x(c),class:"my-sticky-header-table","row-key":"name",pagination:r,filter:m.value},{"top-right":q(l=>[p(se,{dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":f[0]||(f[0]=b=>m.value=b),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:q(()=>[p(j,{name:"search"})]),_:1},8,["modelValue"]),p(D,{flat:"",round:"",dense:"",icon:l.inFullscreen?"fullscreen_exit":"fullscreen",onClick:l.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"body-cell-is_cashless":q(l=>[typeof l.row.is_cashless=="boolean"?(C(),O(ee,{key:0,props:l},{default:q(()=>[p($e,{name:l.row.name,modelValue:l.row.is_cashless,"onUpdate:modelValue":[b=>l.row.is_cashless=b,b=>u(l.row)],size:"xs",color:"green"},null,8,["name","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])):(C(),O(ee,{key:1,props:l},{default:q(()=>[xe(oe(l.row.is_cashless),1)]),_:2},1032,["props"]))]),_:1},8,["rows","columns","filter"])])):N("",!0)}};const Ue={class:"cashless-promotions__handbook"},je={class:"upload-section"},De={class:"upload-section__turning-sheets"},Ne={class:"upload-section__reports"},Fe={class:"summary-section"},Re={class:"table-section"},st={__name:"HandbookCashless",setup(e){const{upload:h}=H(),{handbookSummary:g,files:s,dialogState:m}=M(H()),a=v(()=>s.value&&s.value.analysis&&s.value.settlements&&s.value.turningSheet1012&&s.value.turningSheet4106);return(u,c)=>(C(),F("div",Ue,[p(Ve,{label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430",width:"100%"},{default:q(()=>[T("section",je,[T("div",De,[p(E,{mode:"10.12",label:"\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 10.12.txt"}),p(E,{mode:"41.06",label:"\u041E\u0431\u043E\u0440\u043E\u0442\u043D\u043E-\u0441\u0430\u043B\u044C\u0434\u043E\u0432\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0441\u0447\u0435\u0442\u0443 41.06.txt"})]),T("div",Ne,[p(E,{mode:"analysis",label:"TXT \u0410\u043D\u0430\u043B\u0438\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438"}),p(E,{mode:"settlements",label:"TXT \u0420\u0430\u0441\u0447\u0435\u0442\u044B \u0441 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430\u043C\u0438"})]),x(a)?(C(),O(D,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",style:{height:"61px"},onClick:c[0]||(c[0]=X(r=>x(h)(),["prevent"]))})):N("",!0)])]),_:1}),T("section",Fe,[T("p",null,oe(x(g)),1)]),T("section",Re,[p(Oe)])]))}};const ze={class:"cashless-promotions__consumption"},Xe={class:"upload-section"},Me={class:"inputs"},Ge={class:"buttons"},lt={__name:"PromotionalConsumption",setup(e){const{cashlessPromotional:h,files:g}=M(H()),{uploadConsumption:s,saveXLSX:m}=H(),a=k(null),u=v(()=>g.value&&g.value.consumption);return(c,r)=>(C(),F("div",ze,[T("section",Xe,[T("div",Me,[p(E,{mode:"consumption",label:"\u0421\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u0443\u0447\u0435\u0442 \u041C\u041F\u0417"}),p(se,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=i=>a.value=i),modelModifiers:{number:!0},type:"number",label:"\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: 1% \u0432\u044B\u0440\u0443\u0447\u043A\u0438",square:"",filled:"",style:{width:"400px"}},null,8,["modelValue"])]),T("div",Ge,[x(u)?(C(),O(D,{key:0,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",style:{height:"61px"},onClick:r[1]||(r[1]=X(i=>x(s)(a.value),["prevent"]))})):N("",!0),x(h)&&x(h).length?(C(),O(D,{key:1,class:"btn-fixed-width",color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",icon:"download",style:{height:"61px"},onClick:X(x(m),["prevent"])},null,8,["onClick"])):N("",!0)])])]))}};export{st as _,lt as a,H as u};
