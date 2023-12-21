import{h as B,aI as z,aJ as A,j as p,t as C,v as k,A as Q,C as $,r as f,ao as v,B as q,F as x,E as I,H as m,M as g,ad as c,K as s,aK as V,J as i,aL as L,R as P,N as M,G as E,an as N,T as y,ae as R,I as T,P as D}from"./index.2b776743.js";import{Q as J}from"./QInput.600f8dbf.js";import{Q as K}from"./QCard.00aac02a.js";import"./use-form.8e52ac4d.js";import"./use-dark.5280168c.js";import"./use-file-dom-props.93905879.js";import"./use-key-composition.a2c1d50f.js";var U=B({name:"QCardActions",props:{...z,vertical:Boolean},setup(a,{slots:e}){const t=A(a),o=p(()=>`q-card__actions ${t.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>C("div",{class:o.value},k(e.default))}}),b=B({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:e}){const t=p(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>C(a.tag,{class:t.value},k(e.default))}});const F=Q("freeEaters",()=>{const{user:a}=$(),e=f(null),t=r=>{v.post("/freeEater/new",{name:r},{headers:{Authorization:`Bearer ${a.token}`}}).then(n=>{console.log(n)})},o=async r=>{await v.delete("/freeEater/delete",{headers:{Authorization:`Bearer ${a.token}`,RemoveFreeEater:r}}).then(n=>console.log(n))},d=async()=>{await v.get("/freeEaters",{headers:{Authorization:`Bearer ${a.token}`}}).then(r=>{e.value=r.data.data})},_=p(()=>e.value);return{addFreeEater:t,getFreeEaters:d,freeEatersList:_,deleteFreeEater:o}});const j={class:"free-eaters"},G=c("h4",null,"\u041E\u0431\u0435\u0434\u0430\u044E\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",-1),H={class:"free-eaters__form"},O={class:"free-eaters__list"},W={class:"q-pa-md row items-start q-gutter-md"},X={class:"text-h6 name"},ne={__name:"FreeEatersPage",setup(a){const e=f(null),t=f({width:"500px"}),{addFreeEater:o,getFreeEaters:d,deleteFreeEater:_}=F(),{freeEatersList:r}=q(F()),n=h=>{o(h),w()},w=()=>{e.value=null};return x(()=>{d()}),I(()=>{d()}),(h,u)=>(m(),g("div",j,[G,c("div",H,[s(J,{style:L(t.value),modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=l=>e.value=l),label:"\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0424\u0418\u041E \u0438\u0437 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430 1\u04217"},V({_:2},[e.value&&e.value.length?{name:"append",fn:i(()=>[s(N,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:i(()=>[s(y,{color:"secondary",icon:"person_add",onClick:u[0]||(u[0]=R(l=>n(e.value),["prevent"]))})]),_:1})]),key:"0"}:void 0]),1032,["style","modelValue"])]),c("div",O,[c("div",W,[(m(!0),g(P,null,M(E(r),(l,S)=>(m(),T(K,{class:"my-card",key:`free-eater-${S}`},{default:i(()=>[s(b,{horizontal:""},{default:i(()=>[c("div",X,D(l.name),1),s(U,{align:"center"},{default:i(()=>[s(y,{flat:"",color:"negative",icon:"delete",onClick:Y=>E(_)(l.ID)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])])]))}};export{ne as default};
