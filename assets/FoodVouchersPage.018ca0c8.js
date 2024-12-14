import{c as Ze,r as H,a as i,w as ue,h as s,an as se,g as et,j as wt,aH as bt,n as Ue,E as O,X as Dt,D as kt,ao as ye,s as Ct,m as qt,p as Q,y as ge,u as te,q as _e,t as A,A as pe,v as N,ad as Ye,d as xt,Q as Mt,F as Xe,z as We,x as Vt,B as Ht}from"./index.ef225a1a.js";import{u as St,a as pt}from"./use-dark.6b3a4773.js";import{u as Tt}from"./use-render-cache.1a7235d4.js";import{a as jt,j as Yt,i as Ot}from"./use-form.0c90aca7.js";import{u as $t,a as Bt,b as Rt,t as Je,g as P,f as Ft,c as Et,j as Te,_ as It,Q as Lt,C as Qt}from"./ClosePopup.acdddaf2.js";import{p as ie}from"./format.3e32b8d9.js";import{Q as At}from"./QInput.db7a7af2.js";import{Q as Nt}from"./QToggle.ae81673b.js";import{Q as Pt}from"./QTd.cdf34d7c.js";import{Q as zt}from"./QTable.0a58609e.js";import{Q as Ut}from"./QSpinnerCube.aa29ce71.js";import"./QDialog.379b9bf8.js";import"./use-prevent-scroll.b39a97db.js";import"./scroll.088aa9f0.js";import"./selection.a54e58f6.js";import"./position-engine.3e721305.js";import"./use-file-dom-props.729a8976.js";import"./use-key-composition.dab2bf71.js";import"./QSeparator.4725f750.js";import"./QList.93de4c2d.js";import"./QChip.f5b843b4.js";import"./QItem.d9875fe4.js";const X=20,Xt=["Calendar","Years","Months"],Ke=n=>Xt.includes(n),je=n=>/^-?[\d]+\/[0-1]\d$/.test(n),ae=" \u2014 ";function z(n){return n.year+"/"+ie(n.month)}var Wt=Ze({name:"QDate",props:{...$t,...jt,...St,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:je},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:je},navigationMaxYearMonth:{type:String,validator:je},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ke}},emits:[...Bt,"rangeStart","rangeEnd","navigation"],setup(n,{slots:I,emit:S}){const{proxy:R}=wt(),{$q:D}=R,F=pt(n,D),{getCache:p}=Tt(),{tabindex:_,headerClass:W,getLocale:ne,getCurrentDate:w}=Rt(n,D);let k;const E=Yt(n),y=Ot(E),$=H(null),b=H(Ie()),f=H(ne()),we=i(()=>Ie()),be=i(()=>ne()),T=i(()=>w()),u=H(Le(b.value,f.value)),C=H(n.defaultView),ce=D.lang.rtl===!0?"right":"left",J=H(ce.value),j=H(ce.value),h=u.value.year,g=H(h-h%X-(h<0?X:0)),m=H(null),q=i(()=>{const e=n.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${n.minimal===!0?"minimal":"standard"}`+(F.value===!0?" q-date--dark q-dark":"")+(n.bordered===!0?" q-date--bordered":"")+(n.square===!0?" q-date--square no-border-radius":"")+(n.flat===!0?" q-date--flat no-shadow":"")+(n.disable===!0?" disabled":n.readonly===!0?" q-date--readonly":"")}),x=i(()=>n.color||"primary"),K=i(()=>n.textColor||"white"),ve=i(()=>n.emitImmediately===!0&&n.multiple!==!0&&n.range!==!0),De=i(()=>Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue!==null&&n.modelValue!==void 0?[n.modelValue]:[]),B=i(()=>De.value.filter(e=>typeof e=="string").map(e=>xe(e,b.value,f.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),G=i(()=>{const e=t=>xe(t,b.value,f.value);return De.value.filter(t=>bt(t)===!0&&t.from!==void 0&&t.to!==void 0).map(t=>({from:e(t.from),to:e(t.to)})).filter(t=>t.from.dateHash!==null&&t.to.dateHash!==null&&t.from.dateHash<t.to.dateHash)}),de=i(()=>n.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const t=Je(e.year,e.month,e.day);return new Date(t.gy,t.gm-1,t.gd)}),ke=i(()=>n.calendar==="persian"?P:(e,t,a)=>Ft(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),t===void 0?b.value:t,a===void 0?f.value:a,e.year,e.timezoneOffset)),le=i(()=>B.value.length+G.value.reduce((e,t)=>e+1+Et(de.value(t.to),de.value(t.from)),0)),Oe=i(()=>{if(n.title!==void 0&&n.title!==null&&n.title.length!==0)return n.title;if(m.value!==null){const a=m.value.init,l=de.value(a);return f.value.daysShort[l.getDay()]+", "+f.value.monthsShort[a.month-1]+" "+a.day+ae+"?"}if(le.value===0)return ae;if(le.value>1)return`${le.value} ${f.value.pluralDay}`;const e=B.value[0],t=de.value(e);return isNaN(t.valueOf())===!0?ae:f.value.headerTitle!==void 0?f.value.headerTitle(t,e):f.value.daysShort[t.getDay()]+", "+f.value.monthsShort[e.month-1]+" "+e.day}),tt=i(()=>B.value.concat(G.value.map(t=>t.from)).sort((t,a)=>t.year-a.year||t.month-a.month)[0]),at=i(()=>B.value.concat(G.value.map(t=>t.to)).sort((t,a)=>a.year-t.year||a.month-t.month)[0]),$e=i(()=>{if(n.subtitle!==void 0&&n.subtitle!==null&&n.subtitle.length!==0)return n.subtitle;if(le.value===0)return ae;if(le.value>1){const e=tt.value,t=at.value,a=f.value.monthsShort;return a[e.month-1]+(e.year!==t.year?" "+e.year+ae+a[t.month-1]+" ":e.month!==t.month?ae+a[t.month-1]:"")+" "+t.year}return B.value[0].year}),me=i(()=>{const e=[D.iconSet.datetime.arrowLeft,D.iconSet.datetime.arrowRight];return D.lang.rtl===!0?e.reverse():e}),Be=i(()=>n.firstDayOfWeek!==void 0?Number(n.firstDayOfWeek):f.value.firstDayOfWeek),nt=i(()=>{const e=f.value.daysShort,t=Be.value;return t>0?e.slice(t,7).concat(e.slice(0,t)):e}),L=i(()=>{const e=u.value;return n.calendar!=="persian"?new Date(e.year,e.month,0).getDate():Te(e.year,e.month)}),lt=i(()=>typeof n.eventColor=="function"?n.eventColor:()=>n.eventColor),M=i(()=>{if(n.navigationMinYearMonth===void 0)return null;const e=n.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),V=i(()=>{if(n.navigationMaxYearMonth===void 0)return null;const e=n.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),Ce=i(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return M.value!==null&&M.value.year>=u.value.year&&(e.year.prev=!1,M.value.year===u.value.year&&M.value.month>=u.value.month&&(e.month.prev=!1)),V.value!==null&&V.value.year<=u.value.year&&(e.year.next=!1,V.value.year===u.value.year&&V.value.month<=u.value.month&&(e.month.next=!1)),e}),fe=i(()=>{const e={};return B.value.forEach(t=>{const a=z(t);e[a]===void 0&&(e[a]=[]),e[a].push(t.day)}),e}),Re=i(()=>{const e={};return G.value.forEach(t=>{const a=z(t.from),l=z(t.to);if(e[a]===void 0&&(e[a]=[]),e[a].push({from:t.from.day,to:a===l?t.to.day:void 0,range:t}),a<l){let o;const{year:v,month:r}=t.from,c=r<12?{year:v,month:r+1}:{year:v+1,month:1};for(;(o=z(c))<=l;)e[o]===void 0&&(e[o]=[]),e[o].push({from:void 0,to:o===l?t.to.day:void 0,range:t}),c.month++,c.month>12&&(c.year++,c.month=1)}}),e}),oe=i(()=>{if(m.value===null)return;const{init:e,initHash:t,final:a,finalHash:l}=m.value,[o,v]=t<=l?[e,a]:[a,e],r=z(o),c=z(v);if(r!==Y.value&&c!==Y.value)return;const d={};return r===Y.value?(d.from=o.day,d.includeFrom=!0):d.from=1,c===Y.value?(d.to=v.day,d.includeTo=!0):d.to=L.value,d}),Y=i(()=>z(u.value)),ot=i(()=>{const e={};if(n.options===void 0){for(let a=1;a<=L.value;a++)e[a]=!0;return e}const t=typeof n.options=="function"?n.options:a=>n.options.includes(a);for(let a=1;a<=L.value;a++){const l=Y.value+"/"+ie(a);e[a]=t(l)}return e}),rt=i(()=>{const e={};if(n.events===void 0)for(let t=1;t<=L.value;t++)e[t]=!1;else{const t=typeof n.events=="function"?n.events:a=>n.events.includes(a);for(let a=1;a<=L.value;a++){const l=Y.value+"/"+ie(a);e[a]=t(l)===!0&&lt.value(l)}}return e}),ut=i(()=>{let e,t;const{year:a,month:l}=u.value;if(n.calendar!=="persian")e=new Date(a,l-1,1),t=new Date(a,l-1,0).getDate();else{const o=Je(a,l,1);e=new Date(o.gy,o.gm-1,o.gd);let v=l-1,r=a;v===0&&(v=12,r--),t=Te(r,v)}return{days:e.getDay()-Be.value-1,endDay:t}}),Fe=i(()=>{const e=[],{days:t,endDay:a}=ut.value,l=t<0?t+7:t;if(l<6)for(let r=a-l;r<=a;r++)e.push({i:r,fill:!0});const o=e.length;for(let r=1;r<=L.value;r++){const c={i:r,event:rt.value[r],classes:[]};ot.value[r]===!0&&(c.in=!0,c.flat=!0),e.push(c)}if(fe.value[Y.value]!==void 0&&fe.value[Y.value].forEach(r=>{const c=o+r-1;Object.assign(e[c],{selected:!0,unelevated:!0,flat:!1,color:x.value,textColor:K.value})}),Re.value[Y.value]!==void 0&&Re.value[Y.value].forEach(r=>{if(r.from!==void 0){const c=o+r.from-1,d=o+(r.to||L.value)-1;for(let re=c;re<=d;re++)Object.assign(e[re],{range:r.range,unelevated:!0,color:x.value,textColor:K.value});Object.assign(e[c],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[d],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const c=o+r.to-1;for(let d=o;d<=c;d++)Object.assign(e[d],{range:r.range,unelevated:!0,color:x.value,textColor:K.value});Object.assign(e[c],{flat:!1,rangeTo:!0})}else{const c=o+L.value-1;for(let d=o;d<=c;d++)Object.assign(e[d],{range:r.range,unelevated:!0,color:x.value,textColor:K.value})}}),oe.value!==void 0){const r=o+oe.value.from-1,c=o+oe.value.to-1;for(let d=r;d<=c;d++)e[d].color=x.value,e[d].editRange=!0;oe.value.includeFrom===!0&&(e[r].editRangeFrom=!0),oe.value.includeTo===!0&&(e[c].editRangeTo=!0)}u.value.year===T.value.year&&u.value.month===T.value.month&&(e[o+T.value.day-1].today=!0);const v=e.length%7;if(v>0){const r=7-v;for(let c=1;c<=r;c++)e.push({i:c,fill:!0})}return e.forEach(r=>{let c="q-date__calendar-item ";r.fill===!0?c+="q-date__calendar-item--fill":(c+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(c+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(c+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(c+=` text-${r.color}`)),r.classes=c}),e}),st=i(()=>n.disable===!0?{"aria-disabled":"true"}:{});ue(()=>n.modelValue,e=>{if(k===e)k=0;else{const t=Le(b.value,f.value);Z(t.year,t.month,t)}}),ue(C,()=>{$.value!==null&&R.$el.contains(document.activeElement)===!0&&$.value.focus()}),ue(()=>u.value.year+"|"+u.value.month,()=>{S("navigation",{year:u.value.year,month:u.value.month})}),ue(we,e=>{ze(e,f.value,"mask"),b.value=e}),ue(be,e=>{ze(b.value,e,"locale"),f.value=e});function Ee(){const{year:e,month:t,day:a}=T.value,l={...u.value,year:e,month:t,day:a},o=fe.value[z(l)];(o===void 0||o.includes(l.day)===!1)&&Ve(l),qe(l.year,l.month)}function it(e){Ke(e)===!0&&(C.value=e)}function ct(e,t){["month","year"].includes(e)&&(e==="month"?Ae:Me)(t===!0?-1:1)}function qe(e,t){C.value="Calendar",Z(e,t)}function vt(e,t){if(n.range===!1||!e){m.value=null;return}const a=Object.assign({...u.value},e),l=t!==void 0?Object.assign({...u.value},t):a;m.value={init:a,initHash:P(a),final:l,finalHash:P(l)},qe(a.year,a.month)}function Ie(){return n.calendar==="persian"?"YYYY/MM/DD":n.mask}function xe(e,t,a){return It(e,t,a,n.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Le(e,t){const a=Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue?[n.modelValue]:[];if(a.length===0)return Qe();const l=a[a.length-1],o=xe(l.from!==void 0?l.from:l,e,t);return o.dateHash===null?Qe():o}function Qe(){let e,t;if(n.defaultYearMonth!==void 0){const a=n.defaultYearMonth.split("/");e=parseInt(a[0],10),t=parseInt(a[1],10)}else{const a=T.value!==void 0?T.value:w();e=a.year,t=a.month}return{year:e,month:t,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+ie(t)+"/01"}}function Ae(e){let t=u.value.year,a=Number(u.value.month)+e;a===13?(a=1,t++):a===0&&(a=12,t--),Z(t,a),ve.value===!0&&he("month")}function Me(e){const t=Number(u.value.year)+e;Z(t,u.value.month),ve.value===!0&&he("year")}function dt(e){Z(e,u.value.month),C.value=n.defaultView==="Years"?"Months":"Calendar",ve.value===!0&&he("year")}function mt(e){Z(u.value.year,e),C.value="Calendar",ve.value===!0&&he("month")}function ft(e,t){const a=fe.value[t];(a!==void 0&&a.includes(e.day)===!0?He:Ve)(e)}function U(e){return{year:e.year,month:e.month,day:e.day}}function Z(e,t,a){if(M.value!==null&&e<=M.value.year&&((t<M.value.month||e<M.value.year)&&(t=M.value.month),e=M.value.year),V.value!==null&&e>=V.value.year&&((t>V.value.month||e>V.value.year)&&(t=V.value.month),e=V.value.year),a!==void 0){const{hour:o,minute:v,second:r,millisecond:c,timezoneOffset:d,timeHash:re}=a;Object.assign(u.value,{hour:o,minute:v,second:r,millisecond:c,timezoneOffset:d,timeHash:re})}const l=e+"/"+ie(t)+"/01";l!==u.value.dateHash&&(J.value=u.value.dateHash<l==(D.lang.rtl!==!0)?"left":"right",e!==u.value.year&&(j.value=J.value),Ue(()=>{g.value=e-e%X-(e<0?X:0),Object.assign(u.value,{year:e,month:t,day:1,dateHash:l})}))}function Ne(e,t,a){const l=e!==null&&e.length===1&&n.multiple===!1?e[0]:e;k=l;const{reason:o,details:v}=Pe(t,a);S("update:modelValue",l,o,v)}function he(e){const t=B.value[0]!==void 0&&B.value[0].dateHash!==null?{...B.value[0]}:{...u.value};Ue(()=>{t.year=u.value.year,t.month=u.value.month;const a=n.calendar!=="persian"?new Date(t.year,t.month,0).getDate():Te(t.year,t.month);t.day=Math.min(Math.max(1,t.day),a);const l=ee(t);k=l;const{details:o}=Pe("",t);S("update:modelValue",l,e,o)})}function Pe(e,t){return t.from!==void 0?{reason:`${e}-range`,details:{...U(t.target),from:U(t.from),to:U(t.to)}}:{reason:`${e}-day`,details:U(t)}}function ee(e,t,a){return e.from!==void 0?{from:ke.value(e.from,t,a),to:ke.value(e.to,t,a)}:ke.value(e,t,a)}function Ve(e){let t;if(n.multiple===!0)if(e.from!==void 0){const a=P(e.from),l=P(e.to),o=B.value.filter(r=>r.dateHash<a||r.dateHash>l),v=G.value.filter(({from:r,to:c})=>c.dateHash<a||r.dateHash>l);t=o.concat(v).concat(e).map(r=>ee(r))}else{const a=De.value.slice();a.push(ee(e)),t=a}else t=ee(e);Ne(t,"add",e)}function He(e){if(n.noUnset===!0)return;let t=null;if(n.multiple===!0&&Array.isArray(n.modelValue)===!0){const a=ee(e);e.from!==void 0?t=n.modelValue.filter(l=>l.from!==void 0?l.from!==a.from&&l.to!==a.to:!0):t=n.modelValue.filter(l=>l!==a),t.length===0&&(t=null)}Ne(t,"remove",e)}function ze(e,t,a){const l=B.value.concat(G.value).map(o=>ee(o,e,t)).filter(o=>o.from!==void 0?o.from.dateHash!==null&&o.to.dateHash!==null:o.dateHash!==null);S("update:modelValue",(n.multiple===!0?l:l[0])||null,a)}function ht(){if(n.minimal!==!0)return s("div",{class:"q-date__header "+W.value},[s("div",{class:"relative-position"},[s(se,{name:"q-transition--fade"},()=>s("div",{key:"h-yr-"+$e.value,class:"q-date__header-subtitle q-date__header-link "+(C.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:_.value,...p("vY",{onClick(){C.value="Years"},onKeyup(e){e.keyCode===13&&(C.value="Years")}})},[$e.value]))]),s("div",{class:"q-date__header-title relative-position flex no-wrap"},[s("div",{class:"relative-position col"},[s(se,{name:"q-transition--fade"},()=>s("div",{key:"h-sub"+Oe.value,class:"q-date__header-title-label q-date__header-link "+(C.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:_.value,...p("vC",{onClick(){C.value="Calendar"},onKeyup(e){e.keyCode===13&&(C.value="Calendar")}})},[Oe.value]))]),n.todayBtn===!0?s(O,{class:"q-date__header-today self-start",icon:D.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:_.value,onClick:Ee}):null])])}function Se({label:e,type:t,key:a,dir:l,goTo:o,boundaries:v,cls:r}){return[s("div",{class:"row items-center q-date__arrow"},[s(O,{round:!0,dense:!0,size:"sm",flat:!0,icon:me.value[0],tabindex:_.value,disable:v.prev===!1,...p("go-#"+t,{onClick(){o(-1)}})})]),s("div",{class:"relative-position overflow-hidden flex flex-center"+r},[s(se,{name:"q-transition--jump-"+l},()=>s("div",{key:a},[s(O,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:_.value,...p("view#"+t,{onClick:()=>{C.value=t}})})]))]),s("div",{class:"row items-center q-date__arrow"},[s(O,{round:!0,dense:!0,size:"sm",flat:!0,icon:me.value[1],tabindex:_.value,disable:v.next===!1,...p("go+#"+t,{onClick(){o(1)}})})])]}const yt={Calendar:()=>[s("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[s("div",{class:"q-date__navigation row items-center no-wrap"},Se({label:f.value.months[u.value.month-1],type:"Months",key:u.value.month,dir:J.value,goTo:Ae,boundaries:Ce.value.month,cls:" col"}).concat(Se({label:u.value.year,type:"Years",key:u.value.year,dir:j.value,goTo:Me,boundaries:Ce.value.year,cls:""}))),s("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},nt.value.map(e=>s("div",{class:"q-date__calendar-item"},[s("div",e)]))),s("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[s(se,{name:"q-transition--slide-"+J.value},()=>s("div",{key:Y.value,class:"q-date__calendar-days fit"},Fe.value.map(e=>s("div",{class:e.classes},[e.in===!0?s(O,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:_.value,...p("day#"+e.i,{onClick:()=>{gt(e.i)},onMouseover:()=>{_t(e.i)}})},e.event!==!1?()=>s("div",{class:"q-date__event bg-"+e.event}):null):s("div",""+e.i)]))))])])],Months(){const e=u.value.year===T.value.year,t=l=>M.value!==null&&u.value.year===M.value.year&&M.value.month>l||V.value!==null&&u.value.year===V.value.year&&V.value.month<l,a=f.value.monthsShort.map((l,o)=>{const v=u.value.month===o+1;return s("div",{class:"q-date__months-item flex flex-center"},[s(O,{class:e===!0&&T.value.month===o+1?"q-date__today":null,flat:v!==!0,label:l,unelevated:v,color:v===!0?x.value:null,textColor:v===!0?K.value:null,tabindex:_.value,disable:t(o+1),...p("month#"+o,{onClick:()=>{mt(o+1)}})})])});return n.yearsInMonthView===!0&&a.unshift(s("div",{class:"row no-wrap full-width"},[Se({label:u.value.year,type:"Years",key:u.value.year,dir:j.value,goTo:Me,boundaries:Ce.value.year,cls:" col"})])),s("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},a)},Years(){const e=g.value,t=e+X,a=[],l=o=>M.value!==null&&M.value.year>o||V.value!==null&&V.value.year<o;for(let o=e;o<=t;o++){const v=u.value.year===o;a.push(s("div",{class:"q-date__years-item flex flex-center"},[s(O,{key:"yr"+o,class:T.value.year===o?"q-date__today":null,flat:!v,label:o,dense:!0,unelevated:v,color:v===!0?x.value:null,textColor:v===!0?K.value:null,tabindex:_.value,disable:l(o),...p("yr#"+o,{onClick:()=>{dt(o)}})})]))}return s("div",{class:"q-date__view q-date__years flex flex-center"},[s("div",{class:"col-auto"},[s(O,{round:!0,dense:!0,flat:!0,icon:me.value[0],tabindex:_.value,disable:l(e),...p("y-",{onClick:()=>{g.value-=X}})})]),s("div",{class:"q-date__years-content col self-stretch row items-center"},a),s("div",{class:"col-auto"},[s(O,{round:!0,dense:!0,flat:!0,icon:me.value[1],tabindex:_.value,disable:l(t),...p("y+",{onClick:()=>{g.value+=X}})})])])}};function gt(e){const t={...u.value,day:e};if(n.range===!1){ft(t,Y.value);return}if(m.value===null){const a=Fe.value.find(o=>o.fill!==!0&&o.i===e);if(n.noUnset!==!0&&a.range!==void 0){He({target:t,from:a.range.from,to:a.range.to});return}if(a.selected===!0){He(t);return}const l=P(t);m.value={init:t,initHash:l,final:t,finalHash:l},S("rangeStart",U(t))}else{const a=m.value.initHash,l=P(t),o=a<=l?{from:m.value.init,to:t}:{from:t,to:m.value.init};m.value=null,Ve(a===l?t:{target:t,...o}),S("rangeEnd",{from:U(o.from),to:U(o.to)})}}function _t(e){if(m.value!==null){const t={...u.value,day:e};Object.assign(m.value,{final:t,finalHash:P(t)})}}return Object.assign(R,{setToday:Ee,setView:it,offsetCalendar:ct,setCalendarTo:qe,setEditingRange:vt}),()=>{const e=[s("div",{class:"q-date__content col relative-position"},[s(se,{name:"q-transition--fade"},yt[C.value])])],t=et(I.default);return t!==void 0&&e.push(s("div",{class:"q-date__actions"},t)),n.name!==void 0&&n.disable!==!0&&y(e,"push"),s("div",{class:q.value,...st.value},[ht(),s("div",{ref:$,class:"q-date__main col column",tabindex:-1},e)])}}}),Jt=Ze({name:"QTr",props:{props:Object,noHover:Boolean},setup(n,{slots:I}){const S=i(()=>"q-tr"+(n.props===void 0||n.props.header===!0?"":" "+n.props.__trClass)+(n.noHover===!0?" q-tr--no-hover":""));return()=>s("tr",{class:S.value},et(I.default))}});const Ge=Dt("vouchers",()=>{const n=H(null),I=H(null),S=H(null),{user:R}=kt(),D=async()=>{await ye.get("/get-vouchers-valid-range",{headers:{Authorization:`Bearer ${R.token}`}}).then(async w=>n.value=await w.data.data).catch(w=>console.log(w))},F=async w=>{const k=new Date(w.from).toLocaleDateString().split(".").reverse().join("/"),E=new Date(w.to).toLocaleDateString().split(".").reverse().join("/");await ye.get("/get-vouchers-sheet-data",{headers:{Authorization:`Bearer ${R.token}`,"Date-from":k,"Date-to":E}}).then(async y=>{I.value=await y.data.data}).catch(y=>console.log(y)),await ye.get("/get-vouchers-price",{headers:{Authorization:`Bearer ${R.token}`}}).then(async y=>S.value=await y.data.data).catch(y=>console.log(y))},p=i(()=>{var w;return(w=n.value)==null?void 0:w.map(k=>k.split("T")[0].split("-").join("/"))}),_=i(()=>I.value),W=i(()=>S.value);return{getValidRange:D,getVoucherData:F,saveXLSX:async w=>{await ye.get("/download/vouchers-report",{headers:{Authorization:`Bearer ${R.token}`,"Empty-hide":`${w}`},responseType:"blob"}).then(k=>{const y=`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C ${k.headers.get("Content-Type").split("; ")[1]}.xlsx`;console.log(y);const $=URL.createObjectURL(k.data),b=document.createElement("a");b.href=$,b.download=y,document.body.appendChild(b),b.click(),document.body.removeChild(b),window.URL.revokeObjectURL($)}).catch(k=>console.log(k))},validRange:p,vouchersData:_,voucherPrice:W}});const Kt={class:"food-vouchers"},Gt=Ye("h4",null,"\u0422\u0430\u043B\u043E\u043D\u044B",-1),Zt={class:"row items-center justify-end"},ea=Ye("br",null,null,-1),ta={key:2,class:"loader"},qa={__name:"FoodVouchersPage",setup(n){const{getValidRange:I,getVoucherData:S,saveXLSX:R}=Ge(),{validRange:D,vouchersData:F,voucherPrice:p}=Ct(Ge()),_=new Date,W=_.getDate()-_.getDay()-6,ne=W+6;let w=new Date(new Date().setDate(W)),k=new Date(new Date().setDate(ne));const E=H(!1),y=H({from:w,to:k}),$=i(()=>typeof y.value=="string"?{from:y.value,to:y.value}:y.value),b=i(()=>`\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u0442\u0430\u043B\u043E\u043D\u0430\u043C \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 ${new Date($.value.from).toLocaleDateString()} \u043F\u043E ${new Date($.value.to).toLocaleDateString()}`),f=i(()=>Object.keys(F.value[0]).map(j=>({name:j,required:!0,label:j,field:j,align:"left",sortable:!0}))),we={page:1,rowsPerPage:10},be=i(()=>{const j=Object.keys(F.value[0]),h={},g={};F.value.forEach(q=>{j.forEach(x=>{h[x]?h[x]+=+q[x]:h[x]=+q[x]})});const m=F.value;for(let q in h)g[q]=h[q]*p.value[q];return h.\u0414\u0430\u0442\u0430="\u0418\u0442\u043E\u0433\u043E",g.\u0414\u0430\u0442\u0430="\u0421\u0443\u043C\u043C\u0430",ce(),u(h),u(g),E.value?m.filter(q=>Object.values(q).filter(x=>x.length).length>1):m}),T=H([]);function u(j){T.value.push(j)}const C=i(()=>T.value),ce=()=>{T.value=[]},J=()=>{S($.value)};return qt(()=>{I(),S($.value)}),(j,h)=>(Q(),ge("div",Kt,[Gt,te(D)?(Q(),_e(At,{key:0,filled:"",modelValue:b.value,"onUpdate:modelValue":h[1]||(h[1]=g=>b.value=g),square:"",class:"date-picker"},{append:A(()=>[N(Mt,{name:"event",class:"cursor-pointer"},{default:A(()=>[N(Lt,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:A(()=>[N(Wt,{modelValue:y.value,"onUpdate:modelValue":h[0]||(h[0]=g=>y.value=g),options:te(D),range:"",minimal:""},{default:A(()=>[Ye("div",Zt,[xt(N(O,{label:"\u041E\u041A",color:"primary",flat:"",onClick:J},null,512),[[Qt]])])]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):pe("",!0),ea,te(F)&&te(D)?(Q(),_e(zt,{key:1,title:"\u0418\u0442\u043E\u0433 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0442\u0430\u043B\u043E\u043D\u043E\u0432",rows:be.value,columns:f.value,class:"my-sticky-header-table","row-key":"name",pagination:we},{"top-right":A(g=>[N(Nt,{modelValue:E.value,"onUpdate:modelValue":h[2]||(h[2]=m=>E.value=m),label:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u0435",class:"toggle"},null,8,["modelValue"]),N(O,{color:"primary","icon-right":"archive",label:"XLSX","no-caps":"",onClick:h[3]||(h[3]=m=>te(R)(E.value))}),N(O,{flat:"",round:"",dense:"",icon:g.inFullscreen?"fullscreen_exit":"fullscreen",onClick:g.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),"bottom-row":A(()=>[(Q(!0),ge(Xe,null,We(C.value,(g,m)=>(Q(),_e(Jt,{key:m,class:"bottom-row"},{default:A(()=>[(Q(!0),ge(Xe,null,We(g,q=>(Q(),_e(Pt,{key:q.name},{default:A(()=>[Vt(Ht(m==1?`${q.toLocaleString()} ${q=="\u0421\u0443\u043C\u043C\u0430"?"":"\u0440."}`:q),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["rows","columns"])):pe("",!0),te(D)?pe("",!0):(Q(),ge("div",ta,[N(Ut,{color:"primary",size:"5.5em"})]))]))}};export{qa as default};
