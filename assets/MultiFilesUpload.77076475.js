import{Q as k}from"./position-engine.e2707329.js";import{r as i,a as f,b as x,p as B,y as q,v as t,ap as P,t as n,E as M,aq as T,Q as V,ad as C,B as _,x as F}from"./index.cfc702c5.js";import{Q as N}from"./QTooltip.eafafb1e.js";import{Q as O}from"./QChip.8d631d18.js";import{Q as w}from"./QFile.a78dc632.js";const D={class:"q-pa-md column items-start q-gutter-y-md"},E={class:"ellipsis relative-position"},j={__name:"MultiFilesUpload",props:["accept","label"],emits:["send-message"],setup(g,{emit:h}){const p=g,b=h,u=i(null),l=i([]),s=i(null);function d(){clearTimeout(s.value)}const c=f(()=>s.value!==null),m=f(()=>u.value!==null);function v(){let a=!0;l.value=l.value.map(e=>{if(e.percent===1||e.error===!0)return e;const o=Math.min(1,e.percent+Math.random()/10),r=o<1&&Math.random()>.95;return r===!1&&o<1&&a===!0&&(a=!1),{...e,error:r,color:r===!0?"red-2":"green-2",percent:o}}),s.value=a!==!0?setTimeout(v,300):null}x(d),v();function y(){d();const a=l.value.every(e=>e.percent===1);l.value=l.value.map(e=>({...e,error:!1,color:"green-2",percent:a===!0?0:e.percent})),b("send-message",...u.value)}function Q(a){this.uploadProgress[a]={...this.uploadProgress[a],error:!0,color:"orange-2"}}function U(a){u.value=a,l.value=(a||[]).map(e=>({error:!1,color:"green-2",percent:0,icon:e.type.indexOf("video/")===0?"movie":e.type.indexOf("image/")===0?"photo":e.type.indexOf("audio/")===0?"audiotrack":"insert_drive_file"}))}return(a,e)=>(B(),q("div",D,[t(w,{"model-value":u.value,"onUpdate:modelValue":U,label:p.label||"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B",outlined:"",multiple:"",accept:p.accept,clearable:!c.value,style:{"max-width":"400px"}},P({file:n(({index:o,file:r})=>[t(O,{class:"full-width q-my-xs",removable:c.value&&l.value[o].percent<1,square:"",onRemove:R=>Q(o)},{default:n(()=>[t(k,{class:"absolute-full full-height",value:l.value[o].percent,color:l.value[o].color,"track-color":"grey-2"},null,8,["value","color"]),t(T,null,{default:n(()=>[t(V,{name:l.value[o].icon},null,8,["name"])]),_:2},1024),C("div",E,_(r.name),1),t(N,null,{default:n(()=>[F(_(r.name),1)]),_:2},1024)]),_:2},1032,["removable","onRemove"])]),_:2},[m.value?{name:"after",fn:n(()=>[t(M,{color:"primary",dense:"",icon:"cloud_upload",round:"",onClick:y,disable:!m.value,loading:c.value},null,8,["disable","loading"])]),key:"0"}:void 0]),1032,["model-value","label","accept","clearable"])]))}};export{j as _};
