import{c as x,ar as C,as as _,a as l,f as y,h as a,Q as u,ax as B,ay as R,j as I,W as Q}from"./index.522f3b58.js";import{u as w,a as z}from"./use-dark.c9c4934a.js";const D={xs:8,sm:10,md:14,lg:20,xl:24};var A=x({name:"QChip",props:{...w,...C,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:h,emit:i}){const{proxy:{$q:n}}=I(),v=z(e,n),b=_(e,D),m=l(()=>e.selected===!0||e.icon!==void 0),f=l(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),q=l(()=>e.iconRemove||n.iconSet.chip.remove),c=l(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),g=l(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(c.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(v.value===!0?" q-chip--dark q-dark":"")}),r=l(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},o={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:t,remove:o}});function S(t){t.keyCode===13&&s(t)}function s(t){e.disable||(i("update:selected",!e.selected),i("click",t))}function d(t){(t.keyCode===void 0||t.keyCode===13)&&(Q(t),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function k(){const t=[];c.value===!0&&t.push(a("div",{class:"q-focus-helper"})),m.value===!0&&t.push(a(u,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const o=e.label!==void 0?[a("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(a("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},B(h.default,o))),e.iconRight&&t.push(a(u,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(a(u,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:q.value,...r.value.remove,onClick:d,onKeyup:d})),t}return()=>{if(e.modelValue===!1)return;const t={class:g.value,style:b.value};return c.value===!0&&Object.assign(t,r.value.chip,{onClick:s,onKeyup:S}),y("div",t,k(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[R,e.ripple]])}}});export{A as Q};
