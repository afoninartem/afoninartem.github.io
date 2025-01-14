import{X as E,D as F,r as y,a as d,ao as p,s as S,m as A,H as x,p as l,y as f,x as c,ad as g,v,t as k,B as b,u as h,A as _,q as C,ae as q,E as N}from"./index.ef225a1a.js";import{Q as L}from"./QTable.0a58609e.js";import{u as R}from"./dinners-store.aeeacdfe.js";import"./QSeparator.4725f750.js";import"./use-dark.6b3a4773.js";import"./QList.93de4c2d.js";import"./scroll.088aa9f0.js";import"./use-form.0c90aca7.js";import"./QChip.f5b843b4.js";import"./QItem.d9875fe4.js";import"./position-engine.3e721305.js";import"./selection.a54e58f6.js";import"./QDialog.379b9bf8.js";import"./use-prevent-scroll.b39a97db.js";import"./use-key-composition.dab2bf71.js";import"./format.3e32b8d9.js";const B=E("firedEaters",()=>{const{user:a}=F(),r=y([]),o=y([]);async function u(){await p.get("/get-senesys-records-dates",{headers:{Authorization:`Bearer ${a.token}`}}).then(e=>r.value=e.data.data).catch(e=>console.log(e))}async function t(){await p.post("/check-fired",{},{headers:{Authorization:`Bearer ${a.token}`}}).then(e=>console.log(e))}async function s(){await p.get("/get-fired-eaters",{headers:{Authorization:`Bearer ${a.token}`}}).then(e=>o.value=e.data.data).catch(e=>console.log(e))}const m=d(()=>r.value.map(e=>new Date(e).toLocaleDateString())),n=d(()=>o.value);return{getFirstAndLastSenesysRecordsDates:u,rangeEdges:m,checkFired:t,getFired:s,firedEaters:n}});const V={class:"fired-eaters"},z=g("h4",null,"\u041F\u043E\u0438\u0441\u043A \u0443\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0445",-1),M={key:0},Q=g("br",null,null,-1),T={key:2,class:"table"},re={__name:"FiredEatersPage",setup(a){const{getFirstAndLastSenesysRecordsDates:r,checkFired:o,getFired:u}=B(),{rangeEdges:t,firedEaters:s}=S(B()),{loadedDateRange:m}=R(),n=d(()=>Boolean(t.value.length&&m.length)),e=d(()=>s.value?s.value.map(i=>({name:i.Name,company:i.Company,month:"-",dinners:i.Marks.length})):[]),w=[{name:"company",required:!0,label:"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",field:"company",align:"left",sortable:!0},{name:"name",required:!0,label:"\u0424\u0418\u041E",field:"name",align:"left",sortable:!0},{name:"month",required:!0,label:"\u041C\u0435\u0441\u044F\u0446",field:"month",align:"left",sortable:!0},{name:"dinners",required:!0,label:"\u041E\u0431\u0435\u0434\u044B",field:"dinners",align:"left",sortable:!0}];return A(()=>{r(),u()}),(i,$)=>{const D=x("router-link");return l(),f("div",V,[z,n.value?_("",!0):(l(),f("p",M,[c("\u0414\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 "),g("span",null,[v(D,{to:"/maintenance/dinners"},{default:k(()=>[c("\u041E\u0431\u0435\u0434\u044B")]),_:1})]),c(" \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 Senesys \u0441 "+b(h(t)[0])+" \u043F\u043E "+b(h(t)[1]),1)])),n.value?(l(),C(N,{key:1,color:"secondary",onClick:q(h(o),["prevent"])},{default:k(()=>[c("\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0443\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0445")]),_:1},8,["onClick"])):_("",!0),Q,e.value.length?(l(),f("div",T,[v(L,{title:"\u0423\u0432\u043E\u043B\u0435\u043D\u043D\u044B\u0435",rows:e.value,columns:w,"row-key":"name","hide-bottom":""},null,8,["rows"])])):_("",!0)])}}};export{re as default};