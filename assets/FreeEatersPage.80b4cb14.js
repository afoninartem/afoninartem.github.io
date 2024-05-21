import{h as C,aS as A,aT as Q,k as F,u as S,x as w,A as $,C as x,r as p,ao as _,B as z,F as I,E as V,H as f,M as h,ad as d,K as s,ap as q,J as i,aU as P,R as T,N as L,G as E,an as M,T as g,ae as N,I as R,P as U}from"./index.196e559a.js";import{Q as D}from"./QInput.bb0f1870.js";import{Q as b}from"./QCardSection.e1bfc9af.js";import{Q as G}from"./QCard.a40f5197.js";import"./use-form.c27adf40.js";import"./use-dark.03865f36.js";import"./use-file-dom-props.405a664b.js";import"./use-key-composition.f969ea2f.js";var H=C({name:"QCardActions",props:{...A,vertical:Boolean},setup(a,{slots:e}){const r=Q(a),o=F(()=>`q-card__actions ${r.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>S("div",{class:o.value},w(e.default))}});const y=$("freeEaters",()=>{const{user:a}=x(),e=p(null),r=t=>{_.post("/freeEater/new",{name:t},{headers:{Authorization:`Bearer ${a.token}`}}).then(n=>{console.log(n)})},o=async t=>{await _.delete("/freeEater/delete",{headers:{Authorization:`Bearer ${a.token}`,RemoveFreeEater:t}}).then(n=>console.log(n))},c=async()=>{await _.get("/freeEaters",{headers:{Authorization:`Bearer ${a.token}`}}).then(t=>{e.value=t.data.data})},m=F(()=>e.value);return{addFreeEater:r,getFreeEaters:c,freeEatersList:m,deleteFreeEater:o}});const J={class:"free-eaters"},K=d("h4",null,"\u041E\u0431\u0435\u0434\u0430\u044E\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",-1),O={class:"free-eaters__form"},j={class:"free-eaters__list"},W={class:"q-pa-md row items-start q-gutter-md"},X={class:"text-h6 name"},le={__name:"FreeEatersPage",setup(a){const e=p(null),r=p({width:"500px"}),{addFreeEater:o,getFreeEaters:c,deleteFreeEater:m}=y(),{freeEatersList:t}=z(y()),n=v=>{o(v),k()},k=()=>{e.value=null};return I(()=>{c()}),V(()=>{c()}),(v,u)=>(f(),h("div",J,[K,d("div",O,[s(D,{style:P(r.value),modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=l=>e.value=l),label:"\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0424\u0418\u041E \u0438\u0437 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430 1\u04217"},q({_:2},[e.value&&e.value.length?{name:"append",fn:i(()=>[s(M,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:i(()=>[s(g,{color:"secondary",icon:"person_add",onClick:u[0]||(u[0]=N(l=>n(e.value),["prevent"]))})]),_:1})]),key:"0"}:void 0]),1032,["style","modelValue"])]),d("div",j,[d("div",W,[(f(!0),h(T,null,L(E(t),(l,B)=>(f(),R(G,{class:"my-card",key:`free-eater-${B}`},{default:i(()=>[s(b,{horizontal:""},{default:i(()=>[d("div",X,U(l.name),1),s(H,{align:"center"},{default:i(()=>[s(g,{flat:"",color:"negative",icon:"delete",onClick:Y=>E(m)(l.ID)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])])]))}};export{le as default};
