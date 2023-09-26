import{j as _,av as Ke,aw as qt,h as Ge,r as $,w as ee,t as h,an as re,v as kt,z as et,ax as pt,k as Le,T as A,aj as Ot,c as It,a6 as jt}from"./index.cdc896ab.js";import{u as Tt,a as Vt}from"./use-dark.1c1b0f64.js";import{b as $t,j as Ft,k as Et}from"./use-key-composition.6378741b.js";import{p as w}from"./format.851958cb.js";import{b as Nt,c as At,d as Pt,e as Zt,g as Lt,f as Bt}from"./QSeparator.82c60760.js";function Qt(){const e=new Map;return{getCache:function(r,l){return e[r]===void 0?e[r]=l:e[r]},getCacheWithFn:function(r,l){return e[r]===void 0?e[r]=l():e[r]}}}const Q=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function zt(e,r,l){return Object.prototype.toString.call(e)==="[object Date]"&&(l=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Jt(qe(e,r,l))}function Be(e,r,l){return at(Wt(e,r,l))}function Rt(e){return Xt(e)===0}function fe(e,r){return r<=6?31:r<=11||Rt(e)?30:29}function Xt(e){const r=Q.length;let l=Q[0],u,d,o,M,s;if(e<l||e>=Q[r-1])throw new Error("Invalid Jalaali year "+e);for(s=1;s<r&&(u=Q[s],d=u-l,!(e<u));s+=1)l=u;return M=e-l,d-M<6&&(M=M-d+x(d+4,33)*33),o=T(T(M+1,33)-1,4),o===-1&&(o=4),o}function tt(e,r){const l=Q.length,u=e+621;let d=-14,o=Q[0],M,s,m,C,v;if(e<o||e>=Q[l-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<l&&(M=Q[v],s=M-o,!(e<M));v+=1)d=d+x(s,33)*8+x(T(s,33),4),o=M;C=e-o,d=d+x(C,33)*8+x(T(C,33)+3,4),T(s,33)===4&&s-C===4&&(d+=1);const D=x(u,4)-x((x(u,100)+1)*3,4)-150,F=20+d-D;return r||(s-C<6&&(C=C-s+x(s+4,33)*33),m=T(T(C+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:u,march:F}}function Wt(e,r,l){const u=tt(e,!0);return qe(u.gy,3,u.march)+(r-1)*31-x(r,7)*(r-7)+l-1}function Jt(e){const r=at(e).gy;let l=r-621,u,d,o;const M=tt(l,!1),s=qe(r,3,M.march);if(o=e-s,o>=0){if(o<=185)return d=1+x(o,31),u=T(o,31)+1,{jy:l,jm:d,jd:u};o-=186}else l-=1,o+=179,M.leap===1&&(o+=1);return d=7+x(o,30),u=T(o,30)+1,{jy:l,jm:d,jd:u}}function qe(e,r,l){let u=x((e+x(r-8,6)+100100)*1461,4)+x(153*T(r+9,12)+2,5)+l-34840408;return u=u-x(x(e+100100+x(r-8,6),100)*3,4)+752,u}function at(e){let r=4*e+139361631;r=r+x(x(4*e+183187720,146097)*3,4)*4-3908;const l=x(T(r,1461),4)*5+308,u=x(T(l,153),5)+1,d=T(x(l,153),12)+1;return{gy:x(r,1461)-100100+x(8-d,6),gm:d,gd:u}}function x(e,r){return~~(e/r)}function T(e,r){return e-~~(e/r)*r}const Ut=["gregorian","persian"],Kt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Ut.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Gt=["update:modelValue"];function L(e){return e.year+"/"+w(e.month)+"/"+w(e.day)}function ea(e,r){const l=_(()=>e.disable!==!0&&e.readonly!==!0),u=_(()=>l.value===!0?0:-1),d=_(()=>{const s=[];return e.color!==void 0&&s.push(`bg-${e.color}`),e.textColor!==void 0&&s.push(`text-${e.textColor}`),s.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function M(s){const m=new Date,C=s===!0?null:0;if(e.calendar==="persian"){const v=zt(m);return{year:v.jy,month:v.jm,day:v.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:C,minute:C,second:C,millisecond:C}}return{editable:l,tabindex:u,headerClass:d,getLocale:o,getCurrentDate:M}}const nt=864e5,ta=36e5,Ce=6e4,rt="YYYY-MM-DDTHH:mm:ss.SSSZ",aa=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,na=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Se={};function ra(e,r){const l="("+r.days.join("|")+")",u=e+l;if(Se[u]!==void 0)return Se[u];const d="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",M="("+r.monthsShort.join("|")+")",s={};let m=0;const C=e.replace(na,D=>{switch(m++,D){case"YY":return s.YY=m,"(-?\\d{1,2})";case"YYYY":return s.YYYY=m,"(-?\\d{1,4})";case"M":return s.M=m,"(\\d{1,2})";case"MM":return s.M=m,"(\\d{2})";case"MMM":return s.MMM=m,M;case"MMMM":return s.MMMM=m,o;case"D":return s.D=m,"(\\d{1,2})";case"Do":return s.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return s.D=m,"(\\d{2})";case"H":return s.H=m,"(\\d{1,2})";case"HH":return s.H=m,"(\\d{2})";case"h":return s.h=m,"(\\d{1,2})";case"hh":return s.h=m,"(\\d{2})";case"m":return s.m=m,"(\\d{1,2})";case"mm":return s.m=m,"(\\d{2})";case"s":return s.s=m,"(\\d{1,2})";case"ss":return s.s=m,"(\\d{2})";case"S":return s.S=m,"(\\d{1})";case"SS":return s.S=m,"(\\d{2})";case"SSS":return s.S=m,"(\\d{3})";case"A":return s.A=m,"(AM|PM)";case"a":return s.a=m,"(am|pm)";case"aa":return s.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return l;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return s.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return s.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return s.X=m,"(-?\\d+)";case"x":return s.x=m,"(-?\\d{4,})";default:return m--,D[0]==="["&&(D=D.substring(1,D.length-1)),D.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:s,regex:new RegExp("^"+C)};return Se[u]=v,v}function ot(e,r){return e!==void 0?e:r!==void 0?r.date:qt.date}function Qe(e,r=""){const l=e>0?"-":"+",u=Math.abs(e),d=Math.floor(u/60),o=u%60;return l+w(d)+r+w(o)}function oa(e,r,l,u,d){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(o,d),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=rt);const M=ot(l,Ke.props),s=M.months,m=M.monthsShort,{regex:C,map:v}=ra(r,M),D=e.match(C);if(D===null)return o;let F="";if(v.X!==void 0||v.x!==void 0){const O=parseInt(D[v.X!==void 0?v.X:v.x],10);if(isNaN(O)===!0||O<0)return o;const I=new Date(O*(v.X!==void 0?1e3:1));o.year=I.getFullYear(),o.month=I.getMonth()+1,o.day=I.getDate(),o.hour=I.getHours(),o.minute=I.getMinutes(),o.second=I.getSeconds(),o.millisecond=I.getMilliseconds()}else{if(v.YYYY!==void 0)o.year=parseInt(D[v.YYYY],10);else if(v.YY!==void 0){const O=parseInt(D[v.YY],10);o.year=O<0?O:2e3+O}if(v.M!==void 0){if(o.month=parseInt(D[v.M],10),o.month<1||o.month>12)return o}else v.MMM!==void 0?o.month=m.indexOf(D[v.MMM])+1:v.MMMM!==void 0&&(o.month=s.indexOf(D[v.MMMM])+1);if(v.D!==void 0){if(o.day=parseInt(D[v.D],10),o.year===null||o.month===null||o.day<1)return o;const O=u!=="persian"?new Date(o.year,o.month,0).getDate():fe(o.year,o.month);if(o.day>O)return o}v.H!==void 0?o.hour=parseInt(D[v.H],10)%24:v.h!==void 0&&(o.hour=parseInt(D[v.h],10)%12,(v.A&&D[v.A]==="PM"||v.a&&D[v.a]==="pm"||v.aa&&D[v.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),v.m!==void 0&&(o.minute=parseInt(D[v.m],10)%60),v.s!==void 0&&(o.second=parseInt(D[v.s],10)%60),v.S!==void 0&&(o.millisecond=parseInt(D[v.S],10)*10**(3-D[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(F=v.Z!==void 0?D[v.Z].replace(":",""):D[v.ZZ],o.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return o.dateHash=w(o.year,6)+"/"+w(o.month)+"/"+w(o.day),o.timeHash=w(o.hour)+":"+w(o.minute)+":"+w(o.second)+F,o}function ze(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const l=new Date(r.getFullYear(),0,4);l.setDate(l.getDate()-(l.getDay()+6)%7+3);const u=r.getTimezoneOffset()-l.getTimezoneOffset();r.setHours(r.getHours()-u);const d=(r-l)/(nt*7);return 1+Math.floor(d)}function P(e,r,l){const u=new Date(e),d=`set${l===!0?"UTC":""}`;switch(r){case"year":case"years":u[`${d}Month`](0);case"month":case"months":u[`${d}Date`](1);case"day":case"days":case"date":u[`${d}Hours`](0);case"hour":case"hours":u[`${d}Minutes`](0);case"minute":case"minutes":u[`${d}Seconds`](0);case"second":case"seconds":u[`${d}Milliseconds`](0)}return u}function ve(e,r,l){return(e.getTime()-e.getTimezoneOffset()*Ce-(r.getTime()-r.getTimezoneOffset()*Ce))/l}function lt(e,r,l="days"){const u=new Date(e),d=new Date(r);switch(l){case"years":case"year":return u.getFullYear()-d.getFullYear();case"months":case"month":return(u.getFullYear()-d.getFullYear())*12+u.getMonth()-d.getMonth();case"days":case"day":case"date":return ve(P(u,"day"),P(d,"day"),nt);case"hours":case"hour":return ve(P(u,"hour"),P(d,"hour"),ta);case"minutes":case"minute":return ve(P(u,"minute"),P(d,"minute"),Ce);case"seconds":case"second":return ve(P(u,"second"),P(d,"second"),1e3)}}function Re(e){return lt(e,P(e,"year"),"days")+1}function Xe(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const We={YY(e,r,l){const u=this.YYYY(e,r,l)%100;return u>=0?w(u):"-"+w(Math.abs(u))},YYYY(e,r,l){return l!=null?l:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return w(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Xe(this.Q(e))},D(e){return e.getDate()},Do(e){return Xe(e.getDate())},DD(e){return w(e.getDate())},DDD(e){return Re(e)},DDDD(e){return w(Re(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return ze(e)},ww(e){return w(ze(e))},H(e){return e.getHours()},HH(e){return w(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return w(this.h(e))},m(e){return e.getMinutes()},mm(e){return w(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return w(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return w(Math.floor(e.getMilliseconds()/10))},SSS(e){return w(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,l,u){const d=u==null?e.getTimezoneOffset():u;return Qe(d,":")},ZZ(e,r,l,u){const d=u==null?e.getTimezoneOffset():u;return Qe(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function la(e,r,l,u,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=rt);const M=ot(l,Ke.props);return r.replace(aa,(s,m)=>s in We?We[s](o,M,u,d):m===void 0?s:m.split("\\]").join("]"))}const X=20,ua=["Calendar","Years","Months"],Je=e=>ua.includes(e),He=e=>/^-?[\d]+\/[0-1]\d$/.test(e),G=" \u2014 ";function B(e){return e.year+"/"+w(e.month)}var fa=Ge({name:"QDate",props:{...Kt,...$t,...Tt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:He},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:He},navigationMaxYearMonth:{type:String,validator:He},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Je}},emits:[...Gt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:l}){const{proxy:u}=et(),{$q:d}=u,o=Vt(e,d),{getCache:M}=Qt(),{tabindex:s,headerClass:m,getLocale:C,getCurrentDate:v}=ea(e,d);let D;const F=Ft(e),O=Et(F),I=$(null),S=$($e()),H=$(C()),ut=_(()=>$e()),st=_(()=>C()),N=_(()=>v()),g=$(Fe(S.value,H.value)),j=$(e.defaultView),ke=d.lang.rtl===!0?"right":"left",oe=$(ke.value),me=$(ke.value),he=g.value.year,le=$(he-he%X-(he<0?X:0)),q=$(null),it=_(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),z=_(()=>e.color||"primary"),W=_(()=>e.textColor||"white"),ue=_(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ge=_(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),E=_(()=>ge.value.filter(t=>typeof t=="string").map(t=>_e(t,S.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),J=_(()=>{const t=a=>_e(a,S.value,H.value);return ge.value.filter(a=>pt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),se=_(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Be(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ye=_(()=>e.calendar==="persian"?L:(t,a,n)=>la(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?S.value:a,n===void 0?H.value:n,t.year,t.timezoneOffset)),te=_(()=>E.value.length+J.value.reduce((t,a)=>t+1+lt(se.value(a.to),se.value(a.from)),0)),pe=_(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length>0)return e.title;if(q.value!==null){const n=q.value.init,c=se.value(n);return H.value.daysShort[c.getDay()]+", "+H.value.monthsShort[n.month-1]+" "+n.day+G+"?"}if(te.value===0)return G;if(te.value>1)return`${te.value} ${H.value.pluralDay}`;const t=E.value[0],a=se.value(t);return isNaN(a.valueOf())===!0?G:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),ct=_(()=>E.value.concat(J.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),dt=_(()=>E.value.concat(J.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Oe=_(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length>0)return e.subtitle;if(te.value===0)return G;if(te.value>1){const t=ct.value,a=dt.value,n=H.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+G+n[a.month-1]+" ":t.month!==a.month?G+n[a.month-1]:"")+" "+a.year}return E.value[0].year}),ie=_(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),Ie=_(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),vt=_(()=>{const t=H.value.daysShort,a=Ie.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Z=_(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():fe(t.year,t.month)}),ft=_(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),k=_(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),p=_(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),Me=_(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return k.value!==null&&k.value.year>=g.value.year&&(t.year.prev=!1,k.value.year===g.value.year&&k.value.month>=g.value.month&&(t.month.prev=!1)),p.value!==null&&p.value.year<=g.value.year&&(t.year.next=!1,p.value.year===g.value.year&&p.value.month<=g.value.month&&(t.month.next=!1)),t}),ce=_(()=>{const t={};return E.value.forEach(a=>{const n=B(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),je=_(()=>{const t={};return J.value.forEach(a=>{const n=B(a.from),c=B(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===c?a.to.day:void 0,range:a}),n<c){let i;const{year:b,month:f}=a.from,y=f<12?{year:b,month:f+1}:{year:b+1,month:1};for(;(i=B(y))<=c;)t[i]===void 0&&(t[i]=[]),t[i].push({from:void 0,to:i===c?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),ae=_(()=>{if(q.value===null)return;const{init:t,initHash:a,final:n,finalHash:c}=q.value,[i,b]=a<=c?[t,n]:[n,t],f=B(i),y=B(b);if(f!==V.value&&y!==V.value)return;const Y={};return f===V.value?(Y.from=i.day,Y.includeFrom=!0):Y.from=1,y===V.value?(Y.to=b.day,Y.includeTo=!0):Y.to=Z.value,Y}),V=_(()=>B(g.value)),mt=_(()=>{const t={};if(e.options===void 0){for(let n=1;n<=Z.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=Z.value;n++){const c=V.value+"/"+w(n);t[n]=a(c)}return t}),ht=_(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Z.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=Z.value;n++){const c=V.value+"/"+w(n);t[n]=a(c)===!0&&ft.value(c)}}return t}),gt=_(()=>{let t,a;const{year:n,month:c}=g.value;if(e.calendar!=="persian")t=new Date(n,c-1,1),a=new Date(n,c-1,0).getDate();else{const i=Be(n,c,1);t=new Date(i.gy,i.gm-1,i.gd);let b=c-1,f=n;b===0&&(b=12,f--),a=fe(f,b)}return{days:t.getDay()-Ie.value-1,endDay:a}}),Te=_(()=>{const t=[],{days:a,endDay:n}=gt.value,c=a<0?a+7:a;if(c<6)for(let f=n-c;f<=n;f++)t.push({i:f,fill:!0});const i=t.length;for(let f=1;f<=Z.value;f++){const y={i:f,event:ht.value[f],classes:[]};mt.value[f]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(ce.value[V.value]!==void 0&&ce.value[V.value].forEach(f=>{const y=i+f-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:z.value,textColor:W.value})}),je.value[V.value]!==void 0&&je.value[V.value].forEach(f=>{if(f.from!==void 0){const y=i+f.from-1,Y=i+(f.to||Z.value)-1;for(let ne=y;ne<=Y;ne++)Object.assign(t[ne],{range:f.range,unelevated:!0,color:z.value,textColor:W.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[Y],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const y=i+f.to-1;for(let Y=i;Y<=y;Y++)Object.assign(t[Y],{range:f.range,unelevated:!0,color:z.value,textColor:W.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=i+Z.value-1;for(let Y=i;Y<=y;Y++)Object.assign(t[Y],{range:f.range,unelevated:!0,color:z.value,textColor:W.value})}}),ae.value!==void 0){const f=i+ae.value.from-1,y=i+ae.value.to-1;for(let Y=f;Y<=y;Y++)t[Y].color=z.value,t[Y].editRange=!0;ae.value.includeFrom===!0&&(t[f].editRangeFrom=!0),ae.value.includeTo===!0&&(t[y].editRangeTo=!0)}g.value.year===N.value.year&&g.value.month===N.value.month&&(t[i+N.value.day-1].today=!0);const b=t.length%7;if(b>0){const f=7-b;for(let y=1;y<=f;y++)t.push({i:y,fill:!0})}return t.forEach(f=>{let y="q-date__calendar-item ";f.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(y+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(y+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(y+=` text-${f.color}`)),f.classes=y}),t}),yt=_(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});ee(()=>e.modelValue,t=>{if(D===t)D=0;else{const a=Fe(S.value,H.value);U(a.year,a.month,a)}}),ee(j,()=>{I.value!==null&&u.$el.contains(document.activeElement)===!0&&I.value.focus()}),ee(()=>g.value.year+"|"+g.value.month,()=>{l("navigation",{year:g.value.year,month:g.value.month})}),ee(ut,t=>{Ze(t,H.value,"mask"),S.value=t}),ee(st,t=>{Ze(S.value,t,"locale"),H.value=t});function Ve(){const t=N.value,a=ce.value[B(t)];(a===void 0||a.includes(t.day)===!1)&&we(t),De(t.year,t.month)}function Mt(t){Je(t)===!0&&(j.value=t)}function Dt(t,a){["month","year"].includes(t)&&(t==="month"?Ne:be)(a===!0?-1:1)}function De(t,a){j.value="Calendar",U(t,a)}function _t(t,a){if(e.range===!1||!t){q.value=null;return}const n=Object.assign({...g.value},t),c=a!==void 0?Object.assign({...g.value},a):n;q.value={init:n,initHash:L(n),final:c,finalHash:L(c)},De(n.year,n.month)}function $e(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function _e(t,a,n){return oa(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Fe(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ee();const c=n[n.length-1],i=_e(c.from!==void 0?c.from:c,t,a);return i.dateHash===null?Ee():i}function Ee(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=N.value!==void 0?N.value:v();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+w(a)+"/01"}}function Ne(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),U(a,n),ue.value===!0&&de("month")}function be(t){const a=Number(g.value.year)+t;U(a,g.value.month),ue.value===!0&&de("year")}function bt(t){U(t,g.value.month),j.value=e.defaultView==="Years"?"Months":"Calendar",ue.value===!0&&de("year")}function wt(t){U(g.value.year,t),j.value="Calendar",ue.value===!0&&de("month")}function Yt(t,a){const n=ce.value[a];(n!==void 0&&n.includes(t.day)===!0?Ye:we)(t)}function R(t){return{year:t.year,month:t.month,day:t.day}}function U(t,a,n){if(k.value!==null&&t<=k.value.year&&(t=k.value.year,a<k.value.month&&(a=k.value.month)),p.value!==null&&t>=p.value.year&&(t=p.value.year,a>p.value.month&&(a=p.value.month)),n!==void 0){const{hour:i,minute:b,second:f,millisecond:y,timezoneOffset:Y,timeHash:ne}=n;Object.assign(g.value,{hour:i,minute:b,second:f,millisecond:y,timezoneOffset:Y,timeHash:ne})}const c=t+"/"+w(a)+"/01";c!==g.value.dateHash&&(oe.value=g.value.dateHash<c==(d.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(me.value=oe.value),Le(()=>{le.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:c})}))}function Ae(t,a,n){const c=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;D=c;const{reason:i,details:b}=Pe(a,n);l("update:modelValue",c,i,b)}function de(t){const a=E.value[0]!==void 0&&E.value[0].dateHash!==null?{...E.value[0]}:{...g.value};Le(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():fe(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const c=K(a);D=c;const{details:i}=Pe("",a);l("update:modelValue",c,t,i)})}function Pe(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...R(a.target),from:R(a.from),to:R(a.to)}}:{reason:`${t}-day`,details:R(a)}}function K(t,a,n){return t.from!==void 0?{from:ye.value(t.from,a,n),to:ye.value(t.to,a,n)}:ye.value(t,a,n)}function we(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=L(t.from),c=L(t.to),i=E.value.filter(f=>f.dateHash<n||f.dateHash>c),b=J.value.filter(({from:f,to:y})=>y.dateHash<n||f.dateHash>c);a=i.concat(b).concat(t).map(f=>K(f))}else{const n=ge.value.slice();n.push(K(t)),a=n}else a=K(t);Ae(a,"add",t)}function Ye(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=K(t);t.from!==void 0?a=e.modelValue.filter(c=>c.from!==void 0?c.from!==n.from&&c.to!==n.to:!0):a=e.modelValue.filter(c=>c!==n),a.length===0&&(a=null)}Ae(a,"remove",t)}function Ze(t,a,n){const c=E.value.concat(J.value).map(i=>K(i,t,a)).filter(i=>i.from!==void 0?i.from.dateHash!==null&&i.to.dateHash!==null:i.dateHash!==null);l("update:modelValue",(e.multiple===!0?c:c[0])||null,n)}function xt(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(re,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Oe.value,class:"q-date__header-subtitle q-date__header-link "+(j.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...M("vY",{onClick(){j.value="Years"},onKeyup(t){t.keyCode===13&&(j.value="Years")}})},[Oe.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(re,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+pe.value,class:"q-date__header-title-label q-date__header-link "+(j.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...M("vC",{onClick(){j.value="Calendar"},onKeyup(t){t.keyCode===13&&(j.value="Calendar")}})},[pe.value]))]),e.todayBtn===!0?h(A,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:s.value,onClick:Ve}):null])])}function xe({label:t,type:a,key:n,dir:c,goTo:i,boundaries:b,cls:f}){return[h("div",{class:"row items-center q-date__arrow"},[h(A,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[0],tabindex:s.value,disable:b.prev===!1,...M("go-#"+a,{onClick(){i(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+f},[h(re,{name:"q-transition--jump-"+c},()=>h("div",{key:n},[h(A,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:s.value,...M("view#"+a,{onClick:()=>{j.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(A,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[1],tabindex:s.value,disable:b.next===!1,...M("go+#"+a,{onClick(){i(1)}})})])]}const St={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},xe({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:oe.value,goTo:Ne,boundaries:Me.value.month,cls:" col"}).concat(xe({label:g.value.year,type:"Years",key:g.value.year,dir:me.value,goTo:be,boundaries:Me.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},vt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(re,{name:"q-transition--slide-"+oe.value},()=>h("div",{key:V.value,class:"q-date__calendar-days fit"},Te.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(A,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:s.value,...M("day#"+t.i,{onClick:()=>{Ht(t.i)},onMouseover:()=>{Ct(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===N.value.year,a=c=>k.value!==null&&g.value.year===k.value.year&&k.value.month>c||p.value!==null&&g.value.year===p.value.year&&p.value.month<c,n=H.value.monthsShort.map((c,i)=>{const b=g.value.month===i+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(A,{class:t===!0&&N.value.month===i+1?"q-date__today":null,flat:b!==!0,label:c,unelevated:b,color:b===!0?z.value:null,textColor:b===!0?W.value:null,tabindex:s.value,disable:a(i+1),...M("month#"+i,{onClick:()=>{wt(i+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[xe({label:g.value.year,type:"Years",key:g.value.year,dir:me.value,goTo:be,boundaries:Me.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=le.value,a=t+X,n=[],c=i=>k.value!==null&&k.value.year>i||p.value!==null&&p.value.year<i;for(let i=t;i<=a;i++){const b=g.value.year===i;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(A,{key:"yr"+i,class:N.value.year===i?"q-date__today":null,flat:!b,label:i,dense:!0,unelevated:b,color:b===!0?z.value:null,textColor:b===!0?W.value:null,tabindex:s.value,disable:c(i),...M("yr#"+i,{onClick:()=>{bt(i)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(A,{round:!0,dense:!0,flat:!0,icon:ie.value[0],tabindex:s.value,disable:c(t),...M("y-",{onClick:()=>{le.value-=X}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(A,{round:!0,dense:!0,flat:!0,icon:ie.value[1],tabindex:s.value,disable:c(a),...M("y+",{onClick:()=>{le.value+=X}})})])])}};function Ht(t){const a={...g.value,day:t};if(e.range===!1){Yt(a,V.value);return}if(q.value===null){const n=Te.value.find(i=>i.fill!==!0&&i.i===t);if(e.noUnset!==!0&&n.range!==void 0){Ye({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Ye(a);return}const c=L(a);q.value={init:a,initHash:c,final:a,finalHash:c},l("rangeStart",R(a))}else{const n=q.value.initHash,c=L(a),i=n<=c?{from:q.value.init,to:a}:{from:a,to:q.value.init};q.value=null,we(n===c?a:{target:a,...i}),l("rangeEnd",{from:R(i.from),to:R(i.to)})}}function Ct(t){if(q.value!==null){const a={...g.value,day:t};Object.assign(q.value,{final:a,finalHash:L(a)})}}return Object.assign(u,{setToday:Ve,setView:Mt,offsetCalendar:Dt,setCalendarTo:De,setEditingRange:_t}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(re,{name:"q-transition--fade"},St[j.value])])],a=kt(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&O(t,"push"),h("div",{class:it.value,...yt.value},[xt(),h("div",{ref:I,class:"q-date__main col column",tabindex:-1},t)])}}}),ma=Ge({name:"QPopupProxy",props:{...Nt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:l,attrs:u}){const{proxy:d}=et(),{$q:o}=d,M=$(!1),s=$(null),m=_(()=>parseInt(e.breakpoint,10)),{canShow:C}=At({showing:M});function v(){return o.screen.width<m.value||o.screen.height<m.value?"dialog":"menu"}const D=$(v()),F=_(()=>D.value==="menu"?{maxHeight:"99vh"}:{});ee(()=>v(),S=>{M.value!==!0&&(D.value=S)});function O(S){M.value=!0,l("show",S)}function I(S){M.value=!1,D.value=v(),l("hide",S)}return Object.assign(d,{show(S){C(S)===!0&&s.value.show(S)},hide(S){s.value.hide(S)},toggle(S){s.value.toggle(S)}}),Ot(d,"currentComponent",()=>({type:D.value,ref:s.value})),()=>{const S={ref:s,...F.value,...u,onShow:O,onHide:I};let H;return D.value==="dialog"?H=Pt:(H=Zt,Object.assign(S,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(H,S,r.default)}}});function Ue(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const r=parseInt(e,10);return isNaN(r)?0:r}var ha=It({name:"close-popup",beforeMount(e,{value:r}){const l={depth:Ue(r),handler(u){l.depth!==0&&setTimeout(()=>{const d=Lt(e);d!==void 0&&Bt(d,u,l.depth)})},handlerKey(u){jt(u,13)===!0&&l.handler(u)}};e.__qclosepopup=l,e.addEventListener("click",l.handler),e.addEventListener("keyup",l.handlerKey)},updated(e,{value:r,oldValue:l}){r!==l&&(e.__qclosepopup.depth=Ue(r))},beforeUnmount(e){const r=e.__qclosepopup;e.removeEventListener("click",r.handler),e.removeEventListener("keyup",r.handlerKey),delete e.__qclosepopup}});export{ha as C,ma as Q,fa as a,Qt as u};
