import{Q as g}from"./QSpinnerCube.d2cda2f3.js";import{s as y,p as e,y as s,u as t,B as h,A as r,ad as _,F as b,z as B,q as D,ae as S,E as $,r as C,v as u}from"./index.c5b88365.js";import{u as i}from"./dinners-store.8332635f.js";import{_ as x}from"./MultiFilesUpload.63c5686b.js";import"./position-engine.0aeac9b3.js";import"./use-dark.af48444f.js";import"./selection.21a20a4f.js";import"./use-form.194c5e78.js";import"./scroll.11e8edc3.js";import"./QTooltip.cc81c93d.js";import"./QChip.dca2385d.js";import"./QFile.56395e93.js";import"./use-file-dom-props.fc2de019.js";import"./format.3e32b8d9.js";const w={class:"dinners-btns"},M={key:0},R={key:1},N={class:"btns"},Q={__name:"DinnersMinimalResult",setup(v){const{handledData:n,drmsg:c,ufmsg:p,dbtns:o}=y(i()),{download:l}=i();function d(a){l(a)}return(a,f)=>(e(),s("div",w,[t(n)?(e(),s("p",M,h(t(p)),1)):r("",!0),t(n)?(e(),s("p",R,h(t(c)),1)):r("",!0),_("div",N,[(e(!0),s(b,null,B(t(o),(m,k)=>(e(),D($,{icon:"download",class:"q-mc-sm",label:m,color:"primary",key:k,onClick:S(L=>d(m),["prevent"])},null,8,["label","onClick"]))),128))])]))}};const V={class:"dinners"},q=_("h4",{class:"dinners__title"},"\u041E\u0431\u0435\u0434\u044B",-1),z={key:0,class:"dinners__description"},E=_("p",null,"\u0414\u043B\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u0430 \u043F\u043E \u043E\u0431\u0435\u0434\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u0438\u0437 Senesys \u0438 1\u04217.",-1),F=_("p",null,"Seneys \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0435 \u0441\u0430\u043C\u0438, \u043E\u0442\u0447\u0435\u0442 \u043F\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u0438\u0437 1\u04217 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435 \u0443 \u0410\u0444\u043E\u043D\u0438\u043D\u0430.",-1),P=[E,F],T={key:1,class:"dinners__upload"},A={key:2,class:"loader"},I={key:3,class:"dinners__result"},ne={__name:"DinnersPage",setup(v){const n=C(!1),{sendToBackend:c}=i(),{files:p,hdIsReady:o}=y(i()),l=()=>{n.value=!0},d=async(...a)=>{l(),await c(a)};return(a,f)=>(e(),s("div",V,[q,!t(o)&&!n.value?(e(),s("section",z,P)):r("",!0),!t(o)&&!n.value?(e(),s("div",T,[u(x,{onSendMessage:d})])):r("",!0),!t(o)&&n.value?(e(),s("div",A,[u(g,{color:"primary",size:"5.5em"})])):r("",!0),t(o)?(e(),s("section",I,[u(Q)])):r("",!0)]))}};export{ne as default};
