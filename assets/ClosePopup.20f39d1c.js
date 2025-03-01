import{p as h}from"./format.3e32b8d9.js";import{a as v,aJ as P,aK as N,c as A,r as x,w as F,ag as X,h as z,j as q,a5 as B,V as J}from"./index.f5fd8453.js";import{Q as K}from"./QDialog.85269645.js";import{f as R}from"./QTable.3c221d26.js";import{u as U,f as V,j as G,k as W}from"./position-engine.22d2b068.js";const Y=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function ee(e,t,a){return Object.prototype.toString.call(e)==="[object Date]"&&(a=e.getDate(),t=e.getMonth()+1,e=e.getFullYear()),oe(I(e,t,a))}function Me(e,t,a){return L(ae(e,t,a))}function te(e){return re(e)===0}function ne(e,t){return t<=6?31:t<=11||te(e)?30:29}function re(e){const t=Y.length;let a=Y[0],r,s,n,l,o;if(e<a||e>=Y[t-1])throw new Error("Invalid Jalaali year "+e);for(o=1;o<t&&(r=Y[o],s=r-a,!(e<r));o+=1)a=r;return l=e-a,s-l<6&&(l=l-s+d(s+4,33)*33),n=m(m(l+1,33)-1,4),n===-1&&(n=4),n}function $(e,t){const a=Y.length,r=e+621;let s=-14,n=Y[0],l,o,i,f,u;if(e<n||e>=Y[a-1])throw new Error("Invalid Jalaali year "+e);for(u=1;u<a&&(l=Y[u],o=l-n,!(e<l));u+=1)s=s+d(o,33)*8+d(m(o,33),4),n=l;f=e-n,s=s+d(f,33)*8+d(m(f,33)+3,4),m(o,33)===4&&o-f===4&&(s+=1);const c=d(r,4)-d((d(r,100)+1)*3,4)-150,M=20+s-c;return t||(o-f<6&&(f=f-o+d(o+4,33)*33),i=m(m(f+1,33)-1,4),i===-1&&(i=4)),{leap:i,gy:r,march:M}}function ae(e,t,a){const r=$(e,!0);return I(r.gy,3,r.march)+(t-1)*31-d(t,7)*(t-7)+a-1}function oe(e){const t=L(e).gy;let a=t-621,r,s,n;const l=$(a,!1),o=I(t,3,l.march);if(n=e-o,n>=0){if(n<=185)return s=1+d(n,31),r=m(n,31)+1,{jy:a,jm:s,jd:r};n-=186}else a-=1,n+=179,l.leap===1&&(n+=1);return s=7+d(n,30),r=m(n,30)+1,{jy:a,jm:s,jd:r}}function I(e,t,a){let r=d((e+d(t-8,6)+100100)*1461,4)+d(153*m(t+9,12)+2,5)+a-34840408;return r=r-d(d(e+100100+d(t-8,6),100)*3,4)+752,r}function L(e){let t=4*e+139361631;t=t+d(d(4*e+183187720,146097)*3,4)*4-3908;const a=d(m(t,1461),4)*5+308,r=d(m(a,153),5)+1,s=m(d(a,153),12)+1;return{gy:d(t,1461)-100100+d(8-s,6),gm:s,gd:r}}function d(e,t){return~~(e/t)}function m(e,t){return e-~~(e/t)*t}const se=["gregorian","persian"],De={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>se.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},ye=["update:modelValue"];function Ye(e){return e.year+"/"+h(e.month)+"/"+h(e.day)}function ve(e,t){const a=v(()=>e.disable!==!0&&e.readonly!==!0),r=v(()=>a.value===!0?0:-1),s=v(()=>{const o=[];return e.color!==void 0&&o.push(`bg-${e.color}`),e.textColor!==void 0&&o.push(`text-${e.textColor}`),o.join(" ")});function n(){return e.locale!==void 0?{...t.lang.date,...e.locale}:t.lang.date}function l(o){const i=new Date,f=o===!0?null:0;if(e.calendar==="persian"){const u=ee(i);return{year:u.jy,month:u.jm,day:u.jd}}return{year:i.getFullYear(),month:i.getMonth()+1,day:i.getDate(),hour:f,minute:f,second:f,millisecond:f}}return{editable:a,tabindex:r,headerClass:s,getLocale:n,getCurrentDate:l}}const Q=864e5,ue=36e5,b=6e4,T="YYYY-MM-DDTHH:mm:ss.SSSZ",ie=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ce=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,H={};function le(e,t){const a="("+t.days.join("|")+")",r=e+a;if(H[r]!==void 0)return H[r];const s="("+t.daysShort.join("|")+")",n="("+t.months.join("|")+")",l="("+t.monthsShort.join("|")+")",o={};let i=0;const f=e.replace(ce,c=>{switch(i++,c){case"YY":return o.YY=i,"(-?\\d{1,2})";case"YYYY":return o.YYYY=i,"(-?\\d{1,4})";case"M":return o.M=i,"(\\d{1,2})";case"MM":return o.M=i,"(\\d{2})";case"MMM":return o.MMM=i,l;case"MMMM":return o.MMMM=i,n;case"D":return o.D=i,"(\\d{1,2})";case"Do":return o.D=i++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return o.D=i,"(\\d{2})";case"H":return o.H=i,"(\\d{1,2})";case"HH":return o.H=i,"(\\d{2})";case"h":return o.h=i,"(\\d{1,2})";case"hh":return o.h=i,"(\\d{2})";case"m":return o.m=i,"(\\d{1,2})";case"mm":return o.m=i,"(\\d{2})";case"s":return o.s=i,"(\\d{1,2})";case"ss":return o.s=i,"(\\d{2})";case"S":return o.S=i,"(\\d{1})";case"SS":return o.S=i,"(\\d{2})";case"SSS":return o.S=i,"(\\d{3})";case"A":return o.A=i,"(AM|PM)";case"a":return o.a=i,"(am|pm)";case"aa":return o.aa=i,"(a\\.m\\.|p\\.m\\.)";case"ddd":return s;case"dddd":return a;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return o.Z=i,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return o.ZZ=i,"(Z|[+-]\\d{2}\\d{2})";case"X":return o.X=i,"(-?\\d+)";case"x":return o.x=i,"(-?\\d{4,})";default:return i--,c[0]==="["&&(c=c.substring(1,c.length-1)),c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),u={map:o,regex:new RegExp("^"+f)};return H[r]=u,u}function k(e,t){return e!==void 0?e:t!==void 0?t.date:N.date}function O(e,t=""){const a=e>0?"-":"+",r=Math.abs(e),s=Math.floor(r/60),n=r%60;return a+h(s)+t+h(n)}function Se(e,t,a,r,s){const n={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(s!==void 0&&Object.assign(n,s),e==null||e===""||typeof e!="string")return n;t===void 0&&(t=T);const l=k(a,P.props),o=l.months,i=l.monthsShort,{regex:f,map:u}=le(t,l),c=e.match(f);if(c===null)return n;let M="";if(u.X!==void 0||u.x!==void 0){const p=parseInt(c[u.X!==void 0?u.X:u.x],10);if(isNaN(p)===!0||p<0)return n;const D=new Date(p*(u.X!==void 0?1e3:1));n.year=D.getFullYear(),n.month=D.getMonth()+1,n.day=D.getDate(),n.hour=D.getHours(),n.minute=D.getMinutes(),n.second=D.getSeconds(),n.millisecond=D.getMilliseconds()}else{if(u.YYYY!==void 0)n.year=parseInt(c[u.YYYY],10);else if(u.YY!==void 0){const p=parseInt(c[u.YY],10);n.year=p<0?p:2e3+p}if(u.M!==void 0){if(n.month=parseInt(c[u.M],10),n.month<1||n.month>12)return n}else u.MMM!==void 0?n.month=i.indexOf(c[u.MMM])+1:u.MMMM!==void 0&&(n.month=o.indexOf(c[u.MMMM])+1);if(u.D!==void 0){if(n.day=parseInt(c[u.D],10),n.year===null||n.month===null||n.day<1)return n;const p=r!=="persian"?new Date(n.year,n.month,0).getDate():ne(n.year,n.month);if(n.day>p)return n}u.H!==void 0?n.hour=parseInt(c[u.H],10)%24:u.h!==void 0&&(n.hour=parseInt(c[u.h],10)%12,(u.A&&c[u.A]==="PM"||u.a&&c[u.a]==="pm"||u.aa&&c[u.aa]==="p.m.")&&(n.hour+=12),n.hour=n.hour%24),u.m!==void 0&&(n.minute=parseInt(c[u.m],10)%60),u.s!==void 0&&(n.second=parseInt(c[u.s],10)%60),u.S!==void 0&&(n.millisecond=parseInt(c[u.S],10)*10**(3-c[u.S].length)),(u.Z!==void 0||u.ZZ!==void 0)&&(M=u.Z!==void 0?c[u.Z].replace(":",""):c[u.ZZ],n.timezoneOffset=(M[0]==="+"?-1:1)*(60*M.slice(1,3)+1*M.slice(3,5)))}return n.dateHash=h(n.year,6)+"/"+h(n.month)+"/"+h(n.day),n.timeHash=h(n.hour)+":"+h(n.minute)+":"+h(n.second)+M,n}function j(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);const r=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-r);const s=(t-a)/(Q*7);return 1+Math.floor(s)}function y(e,t,a){const r=new Date(e),s=`set${a===!0?"UTC":""}`;switch(t){case"year":case"years":r[`${s}Month`](0);case"month":case"months":r[`${s}Date`](1);case"day":case"days":case"date":r[`${s}Hours`](0);case"hour":case"hours":r[`${s}Minutes`](0);case"minute":case"minutes":r[`${s}Seconds`](0);case"second":case"seconds":r[`${s}Milliseconds`](0)}return r}function S(e,t,a){return(e.getTime()-e.getTimezoneOffset()*b-(t.getTime()-t.getTimezoneOffset()*b))/a}function de(e,t,a="days"){const r=new Date(e),s=new Date(t);switch(a){case"years":case"year":return r.getFullYear()-s.getFullYear();case"months":case"month":return(r.getFullYear()-s.getFullYear())*12+r.getMonth()-s.getMonth();case"days":case"day":case"date":return S(y(r,"day"),y(s,"day"),Q);case"hours":case"hour":return S(y(r,"hour"),y(s,"hour"),ue);case"minutes":case"minute":return S(y(r,"minute"),y(s,"minute"),b);case"seconds":case"second":return S(y(r,"second"),y(s,"second"),1e3)}}function _(e){return de(e,y(e,"year"),"days")+1}function Z(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const C={YY(e,t,a){const r=this.YYYY(e,t,a)%100;return r>=0?h(r):"-"+h(Math.abs(r))},YYYY(e,t,a){return a!=null?a:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return h(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Z(this.Q(e))},D(e){return e.getDate()},Do(e){return Z(e.getDate())},DD(e){return h(e.getDate())},DDD(e){return _(e)},DDDD(e){return h(_(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return j(e)},ww(e){return h(j(e))},H(e){return e.getHours()},HH(e){return h(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return h(this.h(e))},m(e){return e.getMinutes()},mm(e){return h(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return h(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return h(Math.floor(e.getMilliseconds()/10))},SSS(e){return h(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,a,r){const s=r==null?e.getTimezoneOffset():r;return O(s,":")},ZZ(e,t,a,r){const s=r==null?e.getTimezoneOffset():r;return O(s)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function we(e,t,a,r,s){if(e!==0&&!e||e===1/0||e===-1/0)return;const n=new Date(e);if(isNaN(n))return;t===void 0&&(t=T);const l=k(a,P.props);return t.replace(ie,(o,i)=>o in C?C[o](n,l,r,s):i===void 0?o:i.split("\\]").join("]"))}var xe=A({name:"QPopupProxy",props:{...U,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:t,emit:a,attrs:r}){const{proxy:s}=q(),{$q:n}=s,l=x(!1),o=x(null),i=v(()=>parseInt(e.breakpoint,10)),{canShow:f}=V({showing:l});function u(){return n.screen.width<i.value||n.screen.height<i.value?"dialog":"menu"}const c=x(u()),M=v(()=>c.value==="menu"?{maxHeight:"99vh"}:{});F(()=>u(),g=>{l.value!==!0&&(c.value=g)});function p(g){l.value=!0,a("show",g)}function D(g){l.value=!1,c.value=u(),a("hide",g)}return Object.assign(s,{show(g){f(g)===!0&&o.value.show(g)},hide(g){o.value.hide(g)},toggle(g){o.value.toggle(g)}}),X(s,"currentComponent",()=>({type:c.value,ref:o.value})),()=>{const g={ref:o,...M.value,...r,onShow:p,onHide:D};let w;return c.value==="dialog"?w=K:(w=R,Object.assign(g,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),z(w,g,t.default)}}});function E(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var He=B({name:"close-popup",beforeMount(e,{value:t}){const a={depth:E(t),handler(r){a.depth!==0&&setTimeout(()=>{const s=G(e);s!==void 0&&W(s,r,a.depth)})},handlerKey(r){J(r,13)===!0&&a.handler(r)}};e.__qclosepopup=a,e.addEventListener("click",a.handler),e.addEventListener("keyup",a.handlerKey)},updated(e,{value:t,oldValue:a}){t!==a&&(e.__qclosepopup.depth=E(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{He as C,xe as Q,Se as _,ye as a,ve as b,de as c,we as f,Ye as g,ne as j,Me as t,De as u};
