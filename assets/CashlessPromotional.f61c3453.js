import{Q as T,a as C,b as u,c as _}from"./QTabPanels.c85d8666.js";import{u as p,a as B,_ as P}from"./PromotionalConsumption.d74cb1ad.js";import{B as S,r as y,j as I,H as m,I as d,J as s,K as e,Q as $,T as b,ae as x,L as H,P as N,G as g,w as U,F,M as J,ad as a}from"./index.62b09686.js";import{Q as M}from"./QInput.142722da.js";import{Q as k}from"./QTd.e676fa53.js";import{Q as j}from"./QTable.fca1c974.js";import"./use-form.62d1521a.js";import"./use-dark.0e85ba3a.js";import"./QResizeObserver.b0baa95c.js";import"./QDialog.4d957239.js";import"./selection.663c804d.js";import"./scroll.a2ecb5a1.js";import"./touch.70a9dd44.js";import"./use-cache.b0833c75.js";import"./QList.fc872a7b.js";import"./QFile.70635223.js";import"./QChip.a306cd92.js";import"./use-file-dom-props.946e5f8a.js";import"./format.3e32b8d9.js";import"./use-key-composition.4fc25fba.js";const q={__name:"UserHandbookTable",setup(w){const{getHandbook:h,resetCashless:o}=p(),{userHB:c}=S(p()),t=y(""),i=[["name","\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"],["cash_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0437\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435"],["cashless_incomes","\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u043F\u043E \u0411/\u041D"],["cashless_percent","% \u0411/\u041D"],["is_cashless","\u0411/\u041D \u0438\u043B\u0438 \u041D\u0410\u041B"],["user_cashless","\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]],Q=async l=>{await o(l)},v=I(()=>i.map(l=>({name:l[0],required:!0,label:l[1],field:l[0],format:r=>l[0]=="cashless_percent"?`${r} %`:l[0]=="is_cashless"?r?"\u0411/\u041D":"\u041D\u0410\u041B":`${r}`,align:"left",sortable:!0}))),V={page:1,rowsPerPage:0};return(l,r)=>(m(),d(j,{title:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",rows:g(c),columns:g(v),class:"my-sticky-header-table","row-key":"name",pagination:V,filter:t.value},{"top-right":s(n=>[e(M,{dense:"",debounce:"300",modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=f=>t.value=f),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A"},{append:s(()=>[e($,{name:"search"})]),_:1},8,["modelValue"]),e(b,{flat:"",round:"",dense:"",icon:n.inFullscreen?"fullscreen_exit":"fullscreen",onClick:n.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"body-cell-user_cashless":s(n=>[typeof n.row.user_cashless=="boolean"?(m(),d(k,{key:0,props:n},{default:s(()=>[e(b,{icon:"delete",color:"primary",onClick:x(f=>Q(n.row),["prevent"])},null,8,["onClick"])]),_:2},1032,["props"])):(m(),d(k,{key:1,props:n},{default:s(()=>[H(N(n.row.user_cashless),1)]),_:2},1032,["props"]))]),_:1},8,["rows","columns","filter"]))}};const O={class:"cashless-promotional"},D=a("h4",null,"\u0420\u0430\u0441\u0447\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u043B\u044F \u0411\u041F",-1),E=a("p",null,"\u0414\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0442\u0447\u0435\u0442\u0430 \u0421\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u0443\u0447\u0435\u0442 \u041C\u041F\u0417 \u0432 1\u04217.7 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 xls.",-1),G=a("p",null,"\u0422\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0443\u043C\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043D\u0430\u0434\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u043C\u0435\u0436\u0434\u0443 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C\u0438 (\u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E).",-1),K=a("h4",null,"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",-1),L=a("p",null,"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438 \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0430\u043C\u0438.",-1),R=a("p",null,"\u041D\u0430 \u044D\u0442\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0441\u0432\u0435\u0436\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043F\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u043C \u0438 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043E\u0431\u0437\u043E\u0440\u043E\u043C \u043F\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C.",-1),z=a("p",null,'\u0422\u0430\u043A\u0436\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u0435\u0441\u043B\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F.',-1),A=a("h4",null,"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",-1),W=a("p",null,'\u0421\u043F\u0438\u0441\u043E\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u043F\u0440\u0438\u0437\u043D\u0430\u043A "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u044B\u043B \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C.',-1),X=a("p",null,'\u0427\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043F\u0440\u0438\u0437\u043D\u0430\u043A "\u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438" \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u043D\u0430 \u043E\u0431\u0449\u0438\u0445 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F\u0445, \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u0435\u0433\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.',-1),ge={__name:"CashlessPromotional",setup(w){const{getHandbook:h}=p(),o=y("consumption");return U(o,c=>{localStorage.setItem("tab",JSON.stringify(c))}),F(async()=>{await h(),o.value=localStorage.getItem("tab")?JSON.parse(localStorage.getItem("tab")):"handbook"}),(c,t)=>(m(),J("div",O,[e(T,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),class:"text-black","active-color":"secondary","indicator-color":"secondary",align:"justify","narrow-indicator":""},{default:s(()=>[e(u,{name:"consumption",label:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u0430"}),e(u,{name:"handbook",label:"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"}),e(u,{name:"settings",label:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"})]),_:1},8,["modelValue"]),e(C,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=i=>o.value=i),animated:""},{default:s(()=>[e(_,{class:"panel",name:"consumption"},{default:s(()=>[D,E,G,e(B)]),_:1}),e(_,{class:"panel",name:"handbook"},{default:s(()=>[K,L,R,z,e(P)]),_:1}),e(_,{class:"panel",name:"settings"},{default:s(()=>[A,W,X,e(q)]),_:1})]),_:1},8,["modelValue"])]))}};export{ge as default};
