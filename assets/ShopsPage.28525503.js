import{_ as _l}from"./MultiFilesUpload.55658be5.js";import{X as pl,D as je,r as M,a as f,ao as ue,s as Ke,m as gl,u as r,p as F,q as Le,t as g,v as s,E as I,Q as re,A as be,h as v,c as ye,ar as bl,as as yl,P as kl,g as Ne,j as ke,az as ze,W as Be,w as De,ab as Vl,an as Cl,d as ge,n as ql,a3 as Sl,y as R,ad as P,x as L,B as j,aA as $e,aB as Oe,F as wl,z as xl,ae as pe,aC as Ml}from"./index.8f4f6de6.js";import{Q as D}from"./QInput.0af2b25a.js";import{Q as Ql,o as zl,u as Bl,a as Dl,b as Ae}from"./QTable.97a6ca1e.js";import{Q as $l,a as Ol}from"./QBar.94f53545.js";import{Q as Al}from"./QTooltip.cc2936e5.js";import{Q as Il,a as Ie}from"./QCard.bc2dcaeb.js";import{a as Te,b as Ue,Q as se}from"./QItem.4b7ac684.js";import{Q as Re}from"./QToggle.a5de9584.js";import{Q as Tl}from"./QForm.6247ff88.js";import{Q as Ul}from"./QDialog.231b9ba1.js";import{u as Ve,a as Ce}from"./use-dark.ef34ec87.js";import{a as Ge,i as Ee,j as Pl}from"./use-form.b6f3b663.js";import{T as Fl}from"./TouchPan.303a445e.js";import{u as Hl,a as jl,b as Kl,_ as ie,g as Ll,f as Nl,Q as Pe,C as Fe}from"./ClosePopup.8ebab06e.js";import{p as N}from"./format.3e32b8d9.js";import"./position-engine.0000a277.js";import"./selection.369d4e44.js";import"./scroll.99a2be16.js";import"./QChip.4c4e794d.js";import"./QFile.daf314a7.js";import"./use-file-dom-props.86cec7f2.js";import"./use-key-composition.36c30cfe.js";import"./QSeparator.204eea84.js";import"./QList.1d24b4ba.js";import"./use-prevent-scroll.ab7b9b10.js";import"./touch.3df10340.js";const X=pl("shops",()=>{const{user:e}=je(),b=M(null),u=M(!1),_=M(null),k=M(null),x=f(()=>u.value),p=f(()=>b.value),y=f(()=>_.value),z=f(()=>_.value.name7),V=f(()=>_.value),c=()=>{_.value=null,u.value=!0},B=(q,o)=>{_.value=o,u.value=!0,k.value={..._.value}},w=()=>{u.value=!1,_.value=null};return{getShops:async()=>{await ue.get("/handbook/shops/all",{headers:{Authorization:`Bearer ${e.token}`}}).then(q=>{b.value=q.data.data}).catch(q=>console.log(q))},addShop:async q=>{const o=JSON.stringify(q);console.log(q),console.log(o),await ue.post("/handbook/shops/new",{js:o},{headers:{Authorization:`Bearer ${e.token}`}}).then(n=>console.log(n)).catch(n=>console.log(n))},updateShop:async()=>{await ue.post("/handbook/shops/update",{..._.value},{headers:{Authorization:`Bearer ${e.token}`}}).then(q=>w()).catch(q=>console.log(q))},shops:p,dialogState:x,createShopCard:c,openShopCard:B,closeShopCard:w,resetShopCard:()=>{_.value={...k.value}},massShops:async q=>{console.log("file accepted",q);const o=new FormData;o.append("ms",q),await ue.post("/handbook/shops/mass",o,{headers:{Authorization:`Bearer ${e.token}`}}).then(n=>console.log(n)).catch(n=>console.log(n))},shopCard:V,shopCardName7:z,shopCardModel:y}}),Rl={__name:"ShopsTable",setup(e){const{getShops:b,openShopCard:u,createShopCard:_}=X(),{shops:k}=Ke(X()),x=M(""),p=["name7","region","email","status","coffee_machine"],y=f(()=>p.map(V=>({name:V,required:!0,label:V,field:V,align:"left",sortable:!0}))),z={page:1,rowsPerPage:0};return gl(()=>{b()}),(V,c)=>r(k)?(F(),Le(Ql,{key:0,title:"\u041F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u0430\u043B\u043E\u043D\u043E\u0432",rows:r(k),columns:y.value,class:"my-sticky-header-table",onRowClick:r(u),"row-key":"name",pagination:z,filter:x.value},{"top-right":g(B=>[s(I,{icon:"add",class:"q-ml-sm",label:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C",color:"positive",onClick:r(_)},null,8,["onClick"]),s(I,{icon:"download",class:"q-ml-sm",label:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",color:"primary"}),s(D,{dense:"",debounce:"300",modelValue:x.value,"onUpdate:modelValue":c[0]||(c[0]=w=>x.value=w),name:"search",placeholder:"\u041F\u043E\u0438\u0441\u043A",class:"q-ml-sm"},{append:g(()=>[s(re,{name:"search"})]),_:1},8,["modelValue"]),s(I,{flat:"",round:"",dense:"",icon:B.inFullscreen?"fullscreen_exit":"fullscreen",onClick:B.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),_:1},8,["rows","columns","onRowClick","filter"])):be("",!0)}},Gl=v("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[v("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),v("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var El=ye({name:"QRadio",props:{...Ve,...bl,...Ge,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:b,emit:u}){const{proxy:_}=ke(),k=Ce(e,_.$q),x=yl(e,zl),p=M(null),{refocusTargetEl:y,refocusTarget:z}=Bl(e,p),V=f(()=>ze(e.modelValue)===ze(e.val)),c=f(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(k.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),B=f(()=>{const o=e.color!==void 0&&(e.keepColor===!0||V.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${V.value===!0?"truthy":"falsy"}${o}`}),w=f(()=>(V.value===!0?e.checkedIcon:e.uncheckedIcon)||null),T=f(()=>e.disable===!0?-1:e.tabindex||0),d=f(()=>{const o={type:"radio"};return e.name!==void 0&&Object.assign(o,{".checked":V.value===!0,"^checked":V.value===!0?"checked":void 0,name:e.name,value:e.val}),o}),t=Ee(d);function $(o){o!==void 0&&(Be(o),z(o)),e.disable!==!0&&V.value!==!0&&u("update:modelValue",e.val,o)}function K(o){(o.keyCode===13||o.keyCode===32)&&Be(o)}function q(o){(o.keyCode===13||o.keyCode===32)&&$(o)}return Object.assign(_,{set:$}),()=>{const o=w.value!==null?[v("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[v(re,{class:"q-radio__icon",name:w.value})])]:[Gl];e.disable!==!0&&t(o,"unshift"," q-radio__native q-ma-none q-pa-none");const n=[v("div",{class:B.value,style:x.value,"aria-hidden":"true"},o)];y.value!==null&&n.push(y.value);const S=e.label!==void 0?kl(b.default,[e.label]):Ne(b.default);return S!==void 0&&n.push(v("div",{class:"q-radio__label q-anchor--skip"},S)),v("div",{ref:p,class:c.value,tabindex:T.value,role:"radio","aria-label":e.label,"aria-checked":V.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:$,onKeydown:K,onKeyup:q},n)}}});const Ye={radio:El,checkbox:Dl,toggle:Re},Yl=Object.keys(Ye);var Wl=ye({name:"QOptionGroup",props:{...Ve,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(b=>"value"in b&&"label"in b)},name:String,type:{default:"radio",validator:e=>Yl.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:b,slots:u}){const{proxy:{$q:_}}=ke(),k=Array.isArray(e.modelValue);e.type==="radio"?k===!0&&console.error("q-option-group: model should not be array"):k===!1&&console.error("q-option-group: model should be array in your case");const x=Ce(e,_),p=f(()=>Ye[e.type]),y=f(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),z=f(()=>{const c={role:"group"};return e.type==="radio"&&(c.role="radiogroup",e.disable===!0&&(c["aria-disabled"]="true")),c});function V(c){b("update:modelValue",c)}return()=>v("div",{class:y.value,...z.value},e.options.map((c,B)=>{const w=u["label-"+B]!==void 0?()=>u["label-"+B](c):u.label!==void 0?()=>u.label(c):void 0;return v("div",[v(p.value,{modelValue:e.modelValue,val:c.value,name:c.name===void 0?e.name:c.name,disable:e.disable||c.disable,label:w===void 0?c.label:null,leftLabel:c.leftLabel===void 0?e.leftLabel:c.leftLabel,color:c.color===void 0?e.color:c.color,checkedIcon:c.checkedIcon,uncheckedIcon:c.uncheckedIcon,dark:c.dark||x.value,size:c.size===void 0?e.size:c.size,dense:e.dense,keepColor:c.keepColor===void 0?e.keepColor:c.keepColor,"onUpdate:modelValue":V},w)])}))}});function Xl(e,b){if(e.hour!==null){if(e.minute===null)return"minute";if(b===!0&&e.second===null)return"second"}return"hour"}function Jl(){const e=new Date;return{hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()}}var He=ye({name:"QTime",props:{...Ve,...Ge,...Hl,mask:{default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:jl,setup(e,{slots:b,emit:u}){const _=ke(),{$q:k}=_.proxy,x=Ce(e,k),{tabindex:p,headerClass:y,getLocale:z,getCurrentDate:V}=Kl(e,k),c=Pl(e),B=Ee(c);let w,T;const d=M(null),t=f(()=>ll()),$=f(()=>z()),K=f(()=>al()),q=ie(e.modelValue,t.value,$.value,e.calendar,K.value),o=M(Xl(q)),n=M(q),S=M(q.hour===null||q.hour<12),We=f(()=>`q-time q-time--${e.landscape===!0?"landscape":"portrait"}`+(x.value===!0?" q-time--dark q-dark":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-time--readonly":"")+(e.bordered===!0?" q-time--bordered":"")+(e.square===!0?" q-time--square no-border-radius":"")+(e.flat===!0?" q-time--flat no-shadow":"")),de=f(()=>{const l=n.value;return{hour:l.hour===null?"--":O.value===!0?N(l.hour):String(S.value===!0?l.hour===0?12:l.hour:l.hour>12?l.hour-12:l.hour),minute:l.minute===null?"--":N(l.minute),second:l.second===null?"--":N(l.second)}}),O=f(()=>e.format24h!==null?e.format24h:k.lang.date.format24h),Xe=f(()=>{const l=o.value==="hour",a=l===!0?12:60,i=n.value[o.value];let C=`rotate(${Math.round(i*(360/a))-180}deg) translateX(-50%)`;return l===!0&&O.value===!0&&n.value.hour>=12&&(C+=" scale(.7)"),{transform:C}}),qe=f(()=>n.value.hour!==null),Je=f(()=>qe.value===!0&&n.value.minute!==null),G=f(()=>e.hourOptions!==void 0?l=>e.hourOptions.includes(l):e.options!==void 0?l=>e.options(l,null,null):null),J=f(()=>e.minuteOptions!==void 0?l=>e.minuteOptions.includes(l):e.options!==void 0?l=>e.options(n.value.hour,l,null):null),Z=f(()=>e.secondOptions!==void 0?l=>e.secondOptions.includes(l):e.options!==void 0?l=>e.options(n.value.hour,n.value.minute,l):null),U=f(()=>{if(G.value===null)return null;const l=le(0,11,G.value),a=le(12,11,G.value);return{am:l,pm:a,values:l.values.concat(a.values)}}),E=f(()=>J.value!==null?le(0,59,J.value):null),Y=f(()=>Z.value!==null?le(0,59,Z.value):null),ee=f(()=>{switch(o.value){case"hour":return U.value;case"minute":return E.value;case"second":return Y.value}}),Ze=f(()=>{let l,a,i=0,h=1;const C=ee.value!==null?ee.value.values:void 0;o.value==="hour"?O.value===!0?(l=0,a=23):(l=0,a=11,S.value===!1&&(i=12)):(l=0,a=55,h=5);const A=[];for(let m=l,Q=l;m<=a;m+=h,Q++){const H=m+i,fl=C!==void 0&&C.includes(H)===!1,hl=o.value==="hour"&&m===0?O.value===!0?"00":"12":m;A.push({val:H,index:Q,disable:fl,label:hl})}return A}),el=f(()=>[[Fl,tl,void 0,{stop:!0,prevent:!0,mouse:!0}]]);De(()=>e.modelValue,l=>{const a=ie(l,t.value,$.value,e.calendar,K.value);(a.dateHash!==n.value.dateHash||a.timeHash!==n.value.timeHash)&&(n.value=a,a.hour===null?o.value="hour":S.value=a.hour<12)}),De([t,$],()=>{ql(()=>{_e()})});function Se(){const l={...V(),...Jl()};_e(l),Object.assign(n.value,l),o.value="hour"}function le(l,a,i){const h=Array.apply(null,{length:a+1}).map((C,A)=>{const m=A+l;return{index:m,val:i(m)===!0}}).filter(C=>C.val===!0).map(C=>C.index);return{min:h[0],max:h[h.length-1],values:h,threshold:a+1}}function we(l,a,i){const h=Math.abs(l-a);return Math.min(h,i-h)}function ce(l,{min:a,max:i,values:h,threshold:C}){if(l===a)return a;if(l<a||l>i)return we(l,a,C)<=we(l,i,C)?a:i;const A=h.findIndex(H=>l<=H),m=h[A-1],Q=h[A];return l-m<=Q-l?m:Q}function ll(){return e.calendar!=="persian"&&e.mask!==null?e.mask:`HH:mm${e.withSeconds===!0?":ss":""}`}function al(){if(typeof e.defaultDate!="string"){const l=V(!0);return l.dateHash=Ll(l),l}return ie(e.defaultDate,"YYYY/MM/DD",void 0,e.calendar)}function me(){return Sl(_)===!0||ee.value!==null&&(ee.value.values.length===0||o.value==="hour"&&O.value!==!0&&U.value[S.value===!0?"am":"pm"].values.length===0)}function ve(){const l=d.value,{top:a,left:i,width:h}=l.getBoundingClientRect(),C=h/2;return{top:a+C,left:i+C,dist:C*.7}}function tl(l){if(me()!==!0){if(l.isFirst===!0){w=ve(),T=ae(l.evt,w);return}T=ae(l.evt,w,T),l.isFinal===!0&&(w=!1,T=null,xe())}}function xe(){o.value==="hour"?o.value="minute":e.withSeconds&&o.value==="minute"&&(o.value="second")}function ae(l,a,i){const h=Vl(l),C=Math.abs(h.top-a.top),A=Math.sqrt(Math.pow(Math.abs(h.top-a.top),2)+Math.pow(Math.abs(h.left-a.left),2));let m,Q=Math.asin(C/A)*(180/Math.PI);if(h.top<a.top?Q=a.left<h.left?90-Q:270+Q:Q=a.left<h.left?Q+90:270-Q,o.value==="hour"){if(m=Q/30,U.value!==null){const H=O.value!==!0?S.value===!0:U.value.am.values.length!==0&&U.value.pm.values.length!==0?A>=a.dist:U.value.am.values.length!==0;m=ce(m+(H===!0?0:12),U.value[H===!0?"am":"pm"])}else m=Math.round(m),O.value===!0?A<a.dist?m<12&&(m+=12):m===12&&(m=0):S.value===!0&&m===12?m=0:S.value===!1&&m!==12&&(m+=12);O.value===!0&&(S.value=m<12)}else m=Math.round(Q/6)%60,o.value==="minute"&&E.value!==null?m=ce(m,E.value):o.value==="second"&&Y.value!==null&&(m=ce(m,Y.value));return i!==m&&cl[o.value](m),m}const fe={hour(){o.value="hour"},minute(){o.value="minute"},second(){o.value="second"}};function ol(l){l.keyCode===13&&Me()}function nl(l){l.keyCode===13&&Qe()}function ul(l){me()!==!0&&(k.platform.is.desktop!==!0&&ae(l,ve()),xe())}function sl(l){me()!==!0&&ae(l,ve())}function il(l){if(l.keyCode===13)o.value="hour";else if([37,39].includes(l.keyCode)){const a=l.keyCode===37?-1:1;if(U.value!==null){const i=O.value===!0?U.value.values:U.value[S.value===!0?"am":"pm"].values;if(i.length===0)return;if(n.value.hour===null)te(i[0]);else{const h=(i.length+i.indexOf(n.value.hour)+a)%i.length;te(i[h])}}else{const i=O.value===!0?24:12,h=O.value!==!0&&S.value===!1?12:0,C=n.value.hour===null?-a:n.value.hour;te(h+(24+C+a)%i)}}}function rl(l){if(l.keyCode===13)o.value="minute";else if([37,39].includes(l.keyCode)){const a=l.keyCode===37?-1:1;if(E.value!==null){const i=E.value.values;if(i.length===0)return;if(n.value.minute===null)oe(i[0]);else{const h=(i.length+i.indexOf(n.value.minute)+a)%i.length;oe(i[h])}}else{const i=n.value.minute===null?-a:n.value.minute;oe((60+i+a)%60)}}}function dl(l){if(l.keyCode===13)o.value="second";else if([37,39].includes(l.keyCode)){const a=l.keyCode===37?-1:1;if(Y.value!==null){const i=Y.value.values;if(i.length===0)return;if(n.value.seconds===null)ne(i[0]);else{const h=(i.length+i.indexOf(n.value.second)+a)%i.length;ne(i[h])}}else{const i=n.value.second===null?-a:n.value.second;ne((60+i+a)%60)}}}function te(l){n.value.hour!==l&&(n.value.hour=l,W())}function oe(l){n.value.minute!==l&&(n.value.minute=l,W())}function ne(l){n.value.second!==l&&(n.value.second=l,W())}const cl={hour:te,minute:oe,second:ne};function Me(){S.value===!1&&(S.value=!0,n.value.hour!==null&&(n.value.hour-=12,W()))}function Qe(){S.value===!0&&(S.value=!1,n.value.hour!==null&&(n.value.hour+=12,W()))}function he(l){const a=e.modelValue;o.value!==l&&a!==void 0&&a!==null&&a!==""&&typeof a!="string"&&(o.value=l)}function W(){if(G.value!==null&&G.value(n.value.hour)!==!0){n.value=ie(),he("hour");return}if(J.value!==null&&J.value(n.value.minute)!==!0){n.value.minute=null,n.value.second=null,he("minute");return}if(e.withSeconds===!0&&Z.value!==null&&Z.value(n.value.second)!==!0){n.value.second=null,he("second");return}n.value.hour===null||n.value.minute===null||e.withSeconds===!0&&n.value.second===null||_e()}function _e(l){const a=Object.assign({...n.value},l),i=e.calendar==="persian"?N(a.hour)+":"+N(a.minute)+(e.withSeconds===!0?":"+N(a.second):""):Nl(new Date(a.year,a.month===null?null:a.month-1,a.day,a.hour,a.minute,a.second,a.millisecond),t.value,$.value,a.year,a.timezoneOffset);a.changed=i!==e.modelValue,u("update:modelValue",i,a)}function ml(){const l=[v("div",{class:"q-time__link "+(o.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:p.value,onClick:fe.hour,onKeyup:il},de.value.hour),v("div",":"),v("div",qe.value===!0?{class:"q-time__link "+(o.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:p.value,onKeyup:rl,onClick:fe.minute}:{class:"q-time__link"},de.value.minute)];e.withSeconds===!0&&l.push(v("div",":"),v("div",Je.value===!0?{class:"q-time__link "+(o.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:p.value,onKeyup:dl,onClick:fe.second}:{class:"q-time__link"},de.value.second));const a=[v("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},l)];return O.value===!1&&a.push(v("div",{class:"q-time__header-ampm column items-between no-wrap"},[v("div",{class:"q-time__link "+(S.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:p.value,onClick:Me,onKeyup:ol},"AM"),v("div",{class:"q-time__link "+(S.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:p.value,onClick:Qe,onKeyup:nl},"PM")])),v("div",{class:"q-time__header flex flex-center no-wrap "+y.value},a)}function vl(){const l=n.value[o.value];return v("div",{class:"q-time__content col relative-position"},[v(Cl,{name:"q-transition--scale"},()=>v("div",{key:"clock"+o.value,class:"q-time__container-parent absolute-full"},[v("div",{ref:d,class:"q-time__container-child fit overflow-hidden"},[ge(v("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:ul,onMousedown:sl},[v("div",{class:"q-time__clock-circle fit"},[v("div",{class:"q-time__clock-pointer"+(n.value[o.value]===null?" hidden":e.color!==void 0?` text-${e.color}`:""),style:Xe.value}),Ze.value.map(a=>v("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${a.index}`+(a.val===l?" q-time__clock-position--active "+y.value:a.disable===!0?" q-time__clock-position--disable":"")},[v("span",a.label)]))])]),el.value)])])),e.nowBtn===!0?v(I,{class:"q-time__now-button absolute",icon:k.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:e.color,textColor:e.textColor,tabindex:p.value,onClick:Se}):null])}return _.proxy.setNow=Se,()=>{const l=[vl()],a=Ne(b.default);return a!==void 0&&l.push(v("div",{class:"q-time__actions"},a)),e.name!==void 0&&e.disable!==!0&&B(l,"push"),v("div",{class:We.value,tabindex:-1},[ml(),v("div",{class:"q-time__main col overflow-auto"},l)])}}});const Zl={class:"container"},ea={class:"row items-center justify-end"},la={class:"row items-center justify-end"},aa={__name:"ShopTime",setup(e){const b=M([]),u=M(null),_=M(null);f(()=>({days:b,opening_time:u,closing_time:_}));const k=[{label:"\u041F\u041D",value:"\u041F\u041D",color:"blue"},{label:"\u0412\u0422",value:"\u0412\u0422",color:"blue"},{label:"\u0421\u0420",value:"\u0421\u0420",color:"blue"},{label:"\u0427\u0422",value:"\u0427\u0422",color:"blue"},{label:"\u041F\u0422",value:"\u041F\u0422",color:"blue"},{label:"\u0421\u0411",value:"\u0421\u0411",color:"blue"},{label:"\u0412\u0421",value:"\u0412\u0421",color:"blue"}];return(x,p)=>(F(),R("div",Zl,[s(Wl,{options:k,type:"checkbox",inline:"",dense:"",modelValue:b.value,"onUpdate:modelValue":p[0]||(p[0]=y=>b.value=y)},null,8,["modelValue"]),s(D,{filled:"",modelValue:u.value,"onUpdate:modelValue":p[2]||(p[2]=y=>u.value=y),mask:"time",rules:["time"],label:"\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435"},{append:g(()=>[s(re,{name:"access_time",class:"cursor-pointer"},{default:g(()=>[s(Pe,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:g(()=>[s(He,{modelValue:u.value,"onUpdate:modelValue":p[1]||(p[1]=y=>u.value=y)},{default:g(()=>[P("div",ea,[ge(s(I,{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",color:"primary",flat:""},null,512),[[Fe]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(D,{filled:"",modelValue:_.value,"onUpdate:modelValue":p[4]||(p[4]=y=>_.value=y),mask:"time",rules:["time"],label:"\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435"},{append:g(()=>[s(re,{name:"access_time",class:"cursor-pointer"},{default:g(()=>[s(Pe,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:g(()=>[s(He,{modelValue:_.value,"onUpdate:modelValue":p[3]||(p[3]=y=>_.value=y)},{default:g(()=>[P("div",la,[ge(s(I,{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",color:"primary",flat:""},null,512),[[Fe]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};const ta={class:"shop-card"},oa={class:"text-h6"},na={key:0,style:{color:"darkgrey"}},ua={class:"gr"},sa={class:"gr__elem general"},ia=P("label",{class:"gr__label"},"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",-1),ra={class:"gr__elem cards"},da=P("label",{class:"gr__label"},"\u0412\u0438\u0437\u0438\u0442\u043A\u0438 \u0438 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438",-1),ca={class:"btn-block"},ma={__name:"ShopCard",setup(e){const{dialogState:b,shopCardModel:u}=Ke(X()),{closeShopCard:_,addShop:k,resetShopCard:x,updateShop:p}=X(),y=M(!0),z=M([{}]),V=()=>{z.value.push("")},c=T=>{z.value.splice(T,1)},B=[{label:"\u041C\u043E\u0441\u043A\u0432\u0430",description:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0437\u0430 48 \u0447\u0430\u0441\u043E\u0432, \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u043C \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430 (\u043A\u0440\u043E\u043C\u0435 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445)",category:"msc"},{label:"\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",description:"\u041E\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043F\u043E \u041F\u041D \u0438 \u0427\u0422, \u0441\u0431\u043E\u0440\u043A\u0430 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C \u0441 \u0443\u0442\u0440\u0430",category:"spb"},{label:"\u041D\u0438\u0436\u043D\u0438\u0439 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434",description:"\u041E\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043F\u043E \u041F\u041D \u0438 \u0427\u0422, \u0441\u0431\u043E\u0440\u043A\u0430 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C \u0441 \u0443\u0442\u0440\u0430",category:"nn"},{label:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0433\u0438\u043E\u043D\u044B",description:"\u041E\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0442\u0430\u0431\u043B\u0438\u0446\u0435\u0439 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 \u0440\u0435\u0433\u0438\u043E\u043D\u044B",category:"others"}],w=[{label:"\u041E\u0431\u044B\u0447\u043D\u044B\u0439",description:"\u0421\u0430\u043B\u043E\u043D \u043A\u0430\u043A \u0441\u0430\u043B\u043E\u043D, \u043D\u0438\u0447\u0435\u0433\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0433\u043E",category:"regular"},{label:"\u0422\u043E\u043F\u043E\u0432\u044B\u0439",description:"\u0421\u0430\u043B\u043E\u043D c \u0445\u043E\u0440\u043E\u0448\u0438\u043C\u0438 \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438",category:"top"}];return(T,d)=>(F(),R("div",ta,[s(Ul,{modelValue:r(b),"onUpdate:modelValue":d[14]||(d[14]=t=>Ml(b)?b.value=t:null),persistent:"",maximized:y.value,"transition-show":"slide-left","transition-hide":"slide-left"},{default:g(()=>[s(Il,null,{default:g(()=>[s($l,null,{default:g(()=>[s(Ol),s(I,{dense:"",flat:"",icon:"close",onClick:r(_)},{default:g(()=>[s(Al,{class:"bg-white text-primary"},{default:g(()=>[L("\u0417\u0430\u043A\u0440\u044B\u0442\u044C")]),_:1})]),_:1},8,["onClick"])]),_:1}),s(Ie,null,{default:g(()=>[P("div",oa,[L("\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0430\u043B\u043E\u043D "+j(r(u).code)+": "+j(r(u).name7)+" ",1),r(u).name8?(F(),R("span",na,"1C8.3 CRM: "+j(r(u).name8),1)):be("",!0)])]),_:1}),s(Ie,{class:"q-pt-none"},{default:g(()=>[s(Tl,{onSubmit:r(p),onReset:r(x),class:"q-gutter-md"},{default:g(()=>[P("div",ua,[P("div",sa,[ia,s(D,{readonly:"",filled:"",modelValue:r(u).name7,"onUpdate:modelValue":d[0]||(d[0]=t=>r(u).name7=t),required:"",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437 1\u04217.7 *",hint:"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u0421\u0430\u043B\u043E\u043D\u043E\u0432","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0424\u0421 \u0438\u0437 1C7.7 (\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u0421\u0430\u043B\u043E\u043D\u043E\u0432)"]},null,8,["modelValue","rules"]),s(D,{readonly:"",filled:"",modelValue:r(u).name8,"onUpdate:modelValue":d[1]||(d[1]=t=>r(u).name8=t),label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437 1\u04218.3 *",hint:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0424\u0421 \u0438\u0437 1C8.3","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0424\u0421 \u0438\u0437 1C8.3"]},null,8,["modelValue","rules"]),s(Ae,{filled:"",options:B,modelValue:r(u).region,"onUpdate:modelValue":d[2]||(d[2]=t=>r(u).region=t),label:"\u0420\u0435\u0433\u0438\u043E\u043D (\u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438)"},{option:g(t=>[s(Te,$e(Oe(t.itemProps)),{default:g(()=>[s(Ue,null,{default:g(()=>[s(se,null,{default:g(()=>[L(j(t.opt.label),1)]),_:2},1024),s(se,{caption:""},{default:g(()=>[L(j(t.opt.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"]),s(Ae,{filled:"",options:w,modelValue:r(u).status,"onUpdate:modelValue":d[3]||(d[3]=t=>r(u).status=t),label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u0430\u043B\u043E\u043D\u0430"},{option:g(t=>[s(Te,$e(Oe(t.itemProps)),{default:g(()=>[s(Ue,null,{default:g(()=>[s(se,null,{default:g(()=>[L(j(t.opt.label),1)]),_:2},1024),s(se,{caption:""},{default:g(()=>[L(j(t.opt.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"]),s(D,{filled:"",modelValue:r(u).email_corporate,"onUpdate:modelValue":d[4]||(d[4]=t=>r(u).email_corporate=t),label:"\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 @artis21.ru",hint:"example@artis21.ru","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",t=>t.includes("@artis21.ru")||"\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u043C\u0435\u0442\u044C \u0434\u043E\u043C\u0435\u043D artis21.ru"]},null,8,["modelValue","rules"]),s(D,{filled:"",modelValue:r(u).email_gmail,"onUpdate:modelValue":d[5]||(d[5]=t=>r(u).email_gmail=t),label:"Gmail \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430 @gmail.com",hint:"example@gmail.com","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 Gmail \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",t=>t.includes("@gmail.com")||"Gmail \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u043C\u0435\u0442\u044C \u0434\u043E\u043C\u0435\u043D gmail.com"]},null,8,["modelValue","rules"]),s(D,{filled:"",modelValue:r(u).inner_phone,"onUpdate:modelValue":d[6]||(d[6]=t=>r(u).inner_phone=t),label:"\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u043D\u043E\u043C\u0435\u0440\u0430",hint:"\u0415\u0441\u043B\u0438 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E, \u0432\u0432\u043E\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043E\u0447\u043D\u044B\u0435 \u043D\u043E\u043C\u0435\u0440\u0430"]},null,8,["modelValue","rules"]),s(D,{filled:"",modelValue:r(u).outer_phone,"onUpdate:modelValue":d[7]||(d[7]=t=>r(u).outer_phone=t),label:"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",hint:"\u0412\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B - \u0431\u0435\u0437 \u0441\u043A\u043E\u0431\u043E\u043A, \u0434\u0435\u0444\u0438\u0441\u043E\u0432 \u0438 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440"]},null,8,["modelValue","rules"]),s(Re,{label:r(u).coffee_machine?"\u0412 \u0441\u0430\u043B\u043E\u043D\u0435 \u0435\u0441\u0442\u044C \u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u0430":"\u0412 \u0441\u0430\u043B\u043E\u043D\u0435 \u043D\u0435\u0442 \u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u044B","false-value":!1,"true-value":!0,color:"green",modelValue:r(u).coffee_machine,"onUpdate:modelValue":d[8]||(d[8]=t=>r(u).coffee_machine=t)},null,8,["label","modelValue"])]),P("div",ra,[da,s(D,{filled:"",modelValue:r(u).name_card_sticker,"onUpdate:modelValue":d[9]||(d[9]=t=>r(u).name_card_sticker=t),required:"",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0438\u0437\u0438\u0442\u043E\u043A \u0438 \u043D\u0430\u043A\u043B\u0435\u0435\u043A",hint:"\u041E\u0431\u044B\u0447\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u041C\u0426, \u0422\u0420\u0426, \u041C\u0426\u0414 \u0438 \u043F\u0440\u043E\u0447\u0438\u0435 \u0434\u0435\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u044F, \u0443\u0442\u043E\u0447\u043D\u044F\u0439\u0442\u0435 \u0443 \u041A\u043E\u043A\u0430\u0440\u0435\u0432\u043E\u0439","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0424\u0421 \u0438\u0437 1C7.7 (\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u0421\u0430\u043B\u043E\u043D\u043E\u0432)"]},null,8,["modelValue","rules"]),s(D,{filled:"",modelValue:r(u).city,"onUpdate:modelValue":d[10]||(d[10]=t=>r(u).city=t),label:"\u0413\u043E\u0440\u043E\u0434",hint:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u0440\u043E\u0434\u0430","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u0440\u043E\u0434\u0430 \u0431\u0435\u0437 \u0433."]},null,8,["modelValue","rules"]),s(D,{filled:"",modelValue:r(u).underground_station,"onUpdate:modelValue":d[11]||(d[11]=t=>r(u).underground_station=t),label:"\u041C\u0435\u0442\u0440\u043E",hint:"\u0415\u0441\u043B\u0438 \u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u0445 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0431\u0435\u0437 \u043C."]},null,8,["modelValue","rules"]),s(D,{filled:"",modelValue:r(u).address,"onUpdate:modelValue":d[12]||(d[12]=t=>r(u).address=t),label:"\u0410\u0434\u0440\u0435\u0441",hint:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u043B\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441","lazy-rules":"",rules:[t=>t&&t.length>0||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u043B\u043E\u043D\u0430"]},null,8,["modelValue","rules"]),(F(!0),R(wl,null,xl(z.value,(t,$)=>(F(),R("div",{class:"cards__time",key:$},[s(aa),s(I,{icon:"delete",color:"red",onClick:pe(K=>c($),["prevent"])},null,8,["onClick"])]))),128)),s(I,{label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F",color:"secondary",onClick:d[13]||(d[13]=pe(t=>V(),["prevent"]))})])]),P("div",ca,[s(I,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",type:"submit",color:"positive",onClick:pe(r(p),["prevent"])},null,8,["onClick"]),s(I,{label:"\u0421\u0431\u0440\u043E\u0441",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},8,["onSubmit","onReset"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])]))}},va={class:"shops"},fa=P("h3",null,"\u0424\u0421",-1),ja={__name:"ShopsPage",setup(e){const{user:b}=je(),{massShops:u}=X(),_=async(...k)=>{await u(k[0])};return(k,x)=>(F(),R("div",va,[fa,r(b).role=="1"?(F(),Le(_l,{key:0,accept:".xls, .xlsx",onSendMessage:_})):be("",!0),s(Rl),s(ma)]))}};export{ja as default};
