import{A as F,C as S,r as y,j as n,au as h,B as E,F as A,H as c,M as _,G as a,L as u,ad as p,K as k,J as v,P as b,O as g,I as C,ah as L,T as x,V as N}from"./index.8adde4c0.js";import{Q as V}from"./QTable.081422f9.js";import{u as q}from"./dinners-store.51a38912.js";import"./QSeparator.0bcd3fd7.js";import"./use-dark.630a681f.js";import"./format.01bcd501.js";import"./scroll.8eff397f.js";import"./use-key-composition.79294631.js";const B=F("firedEaters",()=>{const{user:s}=S(),o=y([]),l=y([]);async function m(){await h.get("/get-senesys-records-dates",{headers:{Authorization:`Bearer ${s.token}`}}).then(e=>o.value=e.data.data)}async function t(){await h.post("/check-fired",{},{headers:{Authorization:`Bearer ${s.token}`}}).then(e=>console.log(e))}async function f(){await h.get("/get-fired-eaters",{headers:{Authorization:`Bearer ${s.token}`}}).then(e=>l.value=e.data.data)}const r=n(()=>o.value),i=n(()=>l.value);return{getFirstAndLastSenesysRecordsDates:m,rangeEdges:r,checkFired:t,getFired:f,firedEaters:i}});const M={class:"fired-eaters"},R=p("h4",null,"\u041F\u043E\u0438\u0441\u043A \u0443\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0445",-1),T={key:0},z=p("br",null,null,-1),P={key:2,class:"table"},U={__name:"FiredEatersPage",setup(s){const{getFirstAndLastSenesysRecordsDates:o,checkFired:l,getFired:m}=B(),{rangeEdges:t,firedEaters:f}=E(B()),{loadedDateRange:r}=q(),i=n(()=>Boolean(t.value.length&&r.length));n(()=>Boolean(t.value[0]==new Date(r[0]).toLocaleDateString()&&t.value[1]==new Date(r[r.length-1]).toLocaleDateString()));const e=n(()=>f.value.map(d=>({name:d.Name,company:d.Company,month:"-",dinners:d.Marks.length}))),w=[{name:"company",required:!0,label:"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",field:"company",align:"left",sortable:!0},{name:"name",required:!0,label:"\u0424\u0418\u041E",field:"name",align:"left",sortable:!0},{name:"month",required:!0,label:"\u041C\u0435\u0441\u044F\u0446",field:"month",align:"left",sortable:!0},{name:"dinners",required:!0,label:"\u041E\u0431\u0435\u0434\u044B",field:"dinners",align:"left",sortable:!0}];return A(()=>{o(),m()}),(d,Q)=>{const D=N("router-link");return c(),_("div",M,[R,a(i)?g("",!0):(c(),_("p",T,[u("\u0414\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 "),p("span",null,[k(D,{to:"/maintenance/dinners"},{default:v(()=>[u("\u041E\u0431\u0435\u0434\u044B")]),_:1})]),u(" \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 Senesys \u0441 "+b(a(t)[0])+" \u043F\u043E "+b(a(t)[1]),1)])),a(i)?(c(),C(x,{key:1,color:"secondary",onClick:L(a(l),["prevent"])},{default:v(()=>[u("\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0443\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0445")]),_:1},8,["onClick"])):g("",!0),z,a(e).length?(c(),_("div",P,[k(V,{title:"\u0423\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0435",rows:a(e),columns:w,"row-key":"name","hide-bottom":""},null,8,["rows"])])):g("",!0)])}}};export{U as default};
