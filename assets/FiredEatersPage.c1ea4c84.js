import{A as D,C as E,r as y,j as u,ao as h,B as S,F as A,H as c,M as p,G as t,L as d,ad as g,K as k,J as v,P as b,O as _,I as C,ae as x,T as L,V as N}from"./index.9d2e584e.js";import{Q as V}from"./QTable.c92998b5.js";import{u as q}from"./dinners-store.c28bf982.js";import"./QDialog.aee4cee7.js";import"./use-dark.f56e6d5b.js";import"./selection.1e1542df.js";import"./scroll.f5e2ceb0.js";import"./use-form.159f9b4c.js";import"./format.9bfce7d6.js";import"./QChip.7e0e2fbf.js";import"./use-key-composition.a67d1709.js";const B=D("firedEaters",()=>{const{user:r}=E(),o=y([]),n=y([]);async function m(){await h.get("/get-senesys-records-dates",{headers:{Authorization:`Bearer ${r.token}`}}).then(e=>o.value=e.data.data).catch(e=>console.log(e))}async function a(){await h.post("/check-fired",{},{headers:{Authorization:`Bearer ${r.token}`}}).then(e=>console.log(e))}async function s(){await h.get("/get-fired-eaters",{headers:{Authorization:`Bearer ${r.token}`}}).then(e=>n.value=e.data.data).catch(e=>console.log(e))}const f=u(()=>o.value.map(e=>new Date(e).toLocaleDateString())),i=u(()=>n.value);return{getFirstAndLastSenesysRecordsDates:m,rangeEdges:f,checkFired:a,getFired:s,firedEaters:i}});const M={class:"fired-eaters"},R=g("h4",null,"\u041F\u043E\u0438\u0441\u043A \u0443\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0445",-1),T={key:0},z=g("br",null,null,-1),P={key:2,class:"table"},Y={__name:"FiredEatersPage",setup(r){const{getFirstAndLastSenesysRecordsDates:o,checkFired:n,getFired:m}=B(),{rangeEdges:a,firedEaters:s}=S(B()),{loadedDateRange:f}=q(),i=u(()=>Boolean(a.value.length&&f.length)),e=u(()=>s.value?s.value.map(l=>({name:l.Name,company:l.Company,month:"-",dinners:l.Marks.length})):[]),w=[{name:"company",required:!0,label:"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",field:"company",align:"left",sortable:!0},{name:"name",required:!0,label:"\u0424\u0418\u041E",field:"name",align:"left",sortable:!0},{name:"month",required:!0,label:"\u041C\u0435\u0441\u044F\u0446",field:"month",align:"left",sortable:!0},{name:"dinners",required:!0,label:"\u041E\u0431\u0435\u0434\u044B",field:"dinners",align:"left",sortable:!0}];return A(()=>{o(),m()}),(l,Q)=>{const F=N("router-link");return c(),p("div",M,[R,t(i)?_("",!0):(c(),p("p",T,[d("\u0414\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 "),g("span",null,[k(F,{to:"/maintenance/dinners"},{default:v(()=>[d("\u041E\u0431\u0435\u0434\u044B")]),_:1})]),d(" \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 Senesys \u0441 "+b(t(a)[0])+" \u043F\u043E "+b(t(a)[1]),1)])),t(i)?(c(),C(L,{key:1,color:"secondary",onClick:x(t(n),["prevent"])},{default:v(()=>[d("\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0443\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0445")]),_:1},8,["onClick"])):_("",!0),z,t(e).length?(c(),p("div",P,[k(V,{title:"\u0423\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0435",rows:t(e),columns:w,"row-key":"name","hide-bottom":""},null,8,["rows"])])):_("",!0)])}}};export{Y as default};
