import{s as h,p as s,y as a,ad as e,B as _,u as n,F as v,z as y,aL as g,m as S,A as i,q as c,E as T,x as m}from"./index.33f0d6f2.js";import{u as p,S as k}from"./ShipmentTableProps.dc31ef86.js";import"./leftDrawer-store.97c02881.js";const x={class:"shipment-total"},B={__name:"ShipmentTotal",setup(d){const{shipment:t}=h(p()),r=o=>o.includes("TREAT")||o.includes("PAPER")?"font-weight: 700":null;return(o,u)=>(s(),a("div",x,[e("h6",null,"\u0412\u0441\u0435\u0433\u043E \u0432 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0435 \u043D\u0430 "+_(new Date(n(t).shipment_info.shipment_date).toLocaleDateString())+":",1),e("ol",null,[(s(!0),a(v,null,y(n(t).info.total_list,(l,f)=>(s(),a("li",{key:`tl-${f}`},[e("p",{style:g(r(l.code))},_(l.name)+" - "+_(l.amount),5)]))),128))])]))}};const A={class:"container"},b=e("h4",null,"\u041E\u0442\u0433\u0440\u0443\u0437\u043A\u0430",-1),E={key:0,class:"no-shipment"},P=e("p",null,"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C C\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0439 \u0443\u0447\u0435\u0442 \u041C\u041F\u0417 \u043F\u043E \u0432\u0441\u0435\u043C \u043D\u0430\u0448\u0438\u043C \u043F\u0430\u043F\u043A\u0430\u043C \u0438\u0437 1\u04217.7 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 TXT.",-1),w=e("p",null,[m("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 "),e("span",null,[e("a",{href:"https://drive.google.com/file/d/13G1ET3-3M4mMpzbsI2N6V8ThQHvDYA4f/view?usp=sharing"},"\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435")]),m(" ArtisHelper.exe")],-1),C=e("p",null,"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0432\u0448\u0435\u0435\u0441\u044F \u043E\u043A\u043D\u043E \u0438 \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F\u043C.",-1),D=[P,w,C],L={__name:"ShipmentPage",setup(d){const{shipment:t}=h(p()),{show:r,print:o}=p();return S(()=>r()),(u,l)=>(s(),a("div",A,[b,n(t)?i("",!0):(s(),a("div",E,D)),n(t)?(s(),c(T,{key:1,class:"q-mb-lg",label:"\u0420\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C",icon:"print",color:"positive",onClick:n(o)},null,8,["onClick"])):i("",!0),n(t)?(s(),c(k,{key:2,shipment:n(t),class:"print-area"},null,8,["shipment"])):i("",!0),n(t)?(s(),c(B,{key:3,class:"print-area"})):i("",!0)]))}};export{L as default};
