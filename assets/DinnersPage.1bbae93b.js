import{_ as L,r as b,p as n,y as r,ad as c,v as t,t as l,Q as S,s as T,a as A,u,aC as j,d as z,E as V,ae as $,F as k,z as D,q as g,x as P,B as q,A as v}from"./index.e2dfb63b.js";import{Q as H}from"./QSpinnerCube.cca789d0.js";import{u as y}from"./dinners-store.33a91199.js";import{Q as B}from"./QFile.3dd11c54.js";import{Q as M}from"./QDate.3fc08807.js";import{Q as G,C as J}from"./ClosePopup.b0571841.js";import{Q as K}from"./QInput.8f43056b.js";import{Q as O,b as W,a as Y,c as Z}from"./QTabPanels.f8e1d35f.js";import{Q as ee}from"./QSeparator.6f7f955f.js";import{a as te,Q as U,b as ae}from"./QItem.6e0ada56.js";import{Q as oe}from"./QList.da57b190.js";import{Q as se}from"./QCard.515f3819.js";import"./QChip.140145bf.js";import"./use-dark.44eab301.js";import"./use-form.c08f15a1.js";import"./use-file-dom-props.26ba1483.js";import"./format.3e32b8d9.js";import"./use-render-cache.1a7235d4.js";import"./QDialog.977ae71f.js";import"./use-prevent-scroll.0b193ef1.js";import"./scroll.36a5d815.js";import"./selection.0da1644d.js";import"./position-engine.f770b92f.js";import"./QMenu.980108c6.js";import"./use-key-composition.e05c7df5.js";import"./QResizeObserver.c472f623.js";import"./touch.3df10340.js";const ne={setup(){const _=b(null),e="dinners",{uploadFile:m}=y();return{file:_,mode:e,uploadFile:m}}},le={class:"q-pa-md"},re={class:"q-gutter-md row items-start"};function ie(_,e,m,a,h,p){return n(),r("div",le,[c("div",re,[t(B,{modelValue:a.file,"onUpdate:modelValue":[e[0]||(e[0]=i=>a.file=i),e[1]||(e[1]=i=>a.uploadFile(a.file,a.mode))],label:"\u041E\u0431\u0435\u0434\u044B Senesys",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:l(()=>[t(S,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var de=L(ne,[["render",ie]]);const ue={setup(){const _=b(null),e="artis",{uploadFile:m}=y();return{file:_,mode:e,uploadFile:m}}},me={class:"q-pa-md"},ce={class:"q-gutter-md row items-start"};function pe(_,e,m,a,h,p){return n(),r("div",me,[c("div",ce,[t(B,{modelValue:a.file,"onUpdate:modelValue":[e[0]||(e[0]=i=>a.file=i),e[1]||(e[1]=i=>a.uploadFile(a.file,a.mode))],label:"\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 1C7",filled:"","use-chips":"",accept:".xlsx",style:{"max-width":"300px"}},{prepend:l(()=>[t(S,{name:"attach_file"})]),_:1},8,["modelValue"])])])}var _e=L(ue,[["render",pe]]);const fe={class:"q-gutter-y-md dinners__handled-data",style:{"max-width":"500px"}},ve={class:"date-pdf-form"},ye={class:"row items-center justify-end"},he={key:0,class:"department-issues"},Qe={__name:"DinnersHandledData",setup(_){const{handledData:e}=T(y()),{download:m,downloadPDF:a,loadedDateRange:h}=y(),p=h,i=p?b(p[p.length-1]):new Date,Q=A(()=>new Date(i.value).toLocaleDateString()),x=b(null),E=Array.from(new Set(e.value.map(d=>d.Company).sort())),w=[];E.forEach((d,s)=>{w[s]={total:0},w[s].company=d}),e.value.forEach(d=>w.filter(s=>s.company==d.Company)[0].total+=d.Marks.length);const F=d=>{let s=!1,o=[];return d=="\u0410\u0440\u0442\u0438\u0441"&&e.value.filter(f=>f.Department=="!\u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435!").length&&(s=!0,o=e.value.filter(f=>f.Department=="!\u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435!")),{show:s,undefinedEaters:o}},I=()=>{const d=new Date(i.value).toLocaleDateString();return a(d)};return(d,s)=>(n(),r("div",fe,[c("div",ve,[t(K,{filled:"",modelValue:Q.value,"onUpdate:modelValue":s[1]||(s[1]=o=>Q.value=o),square:"",class:"date-picker"},{append:l(()=>[t(S,{name:"event",class:"cursor-pointer"},{default:l(()=>[t(G,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[t(M,{modelValue:u(i),"onUpdate:modelValue":s[0]||(s[0]=o=>j(i)?i.value=o:null),minimal:"",options:u(p)},{default:l(()=>[c("div",ye,[z(t(V,{label:"\u041E\u041A",color:"primary",flat:""},null,512),[[J]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(V,{color:"secondary",label:"PDF",icon:"download",square:"",class:"pdf-btn",onClick:$(I,["prevent"])})]),t(se,null,{default:l(()=>[t(O,{modelValue:x.value,"onUpdate:modelValue":s[2]||(s[2]=o=>x.value=o),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:l(()=>[(n(),r(k,null,D(w,(o,f)=>t(W,{key:`label-${f}`,name:o.company,label:`${o.company} (${o.total})`},null,8,["name","label"])),64))]),_:1},8,["modelValue"]),t(ee),t(Y,{modelValue:x.value,"onUpdate:modelValue":s[3]||(s[3]=o=>x.value=o),animated:""},{default:l(()=>[(n(),r(k,null,D(w,(o,f)=>t(Z,{key:`panel-${f}`,name:o.company,class:"column"},{default:l(()=>[t(V,{class:"btn-fixed-width",color:"secondary",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",icon:"download",onClick:$(C=>u(m)(o.company),["prevent"])},null,8,["onClick"]),F(o.company).show?(n(),r("div",he,[t(oe,{bordered:"",separator:""},{default:l(()=>[t(te,null,{default:l(()=>[(n(!0),r(k,null,D(F(o.company).undefinedEaters,(C,N)=>(n(),g(ae,{key:N},{default:l(()=>[t(U,null,{default:l(()=>[P(q(C.Name),1)]),_:2},1024),(n(!0),r(k,null,D(C.Tips,(R,X)=>(n(),g(U,{caption:"",key:`tip-${X}`},{default:l(()=>[P("\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u044D\u0442\u043E "+q(R),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):v("",!0)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])]),_:1})]))}};const xe={class:"dinners"},we=c("h4",{class:"dinners__title"},"\u041E\u0431\u0435\u0434\u044B",-1),be={key:0,class:"dinners__description"},ke=c("p",null,"\u0414\u043B\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u0430 \u043F\u043E \u043E\u0431\u0435\u0434\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u0438\u0437 Senesys \u0438 1\u04217.",-1),De=c("p",null,"Seneys \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0435 \u0441\u0430\u043C\u0438, \u043E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u0438\u0437 1\u04217 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435 \u0443 \u0410\u0444\u043E\u043D\u0438\u043D\u0430.",-1),Ve=c("p",null,"\u041F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0425\u0435\u043B\u043F\u0435\u0440 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0445 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 XLSX.",-1),Ce=c("p",null,"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0434\u043E \u0438\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044C, \u043D\u0430\u0436\u0430\u0442\u044C \u0424\u0430\u0439\u043B - \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A - \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 XLSX.",-1),$e=[ke,De,Ve,Ce],ge={key:1,class:"dinners__upload"},Se={key:3,class:"loader"},Fe={key:4,class:"dinners__result"},st={__name:"DinnersPage",setup(_){const e=b(!1),{files:m,hdIsReady:a}=T(y()),{upload:h}=y(),p=()=>{e.value=!0};return(i,Q)=>(n(),r("div",xe,[we,!u(a)&&!e.value?(n(),r("section",be,$e)):v("",!0),!u(a)&&!e.value?(n(),r("div",ge,[t(de,{class:"up1"}),t(_e,{class:"up2"})])):v("",!0),u(m).dinners&&u(m).artis&&!u(a)&&!e.value?(n(),g(V,{key:2,class:"btn-fixed-width",color:"secondary",label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",icon:"upload",onClick:Q[0]||(Q[0]=$(x=>{u(h)(),p()},["prevent"]))})):v("",!0),!u(a)&&e.value?(n(),r("div",Se,[t(H,{color:"primary",size:"5.5em"})])):v("",!0),u(a)?(n(),r("section",Fe,[t(Qe)])):v("",!0)]))}};export{st as default};
