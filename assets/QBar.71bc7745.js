import{c as e,h as r,a as c,g as p,j as u}from"./index.1f69b706.js";import{u as l,a as d}from"./use-dark.a9a5dd07.js";var v=e({name:"QSpace",setup(){const a=r("div",{class:"q-space"});return()=>a}}),q=e({name:"QBar",props:{...l,dense:Boolean},setup(a,{slots:s}){const{proxy:{$q:t}}=u(),o=d(a,t),n=c(()=>`q-bar row no-wrap items-center q-bar--${a.dense===!0?"dense":"standard"}  q-bar--${o.value===!0?"dark":"light"}`);return()=>r("div",{class:n.value,role:"toolbar"},p(s.default))}});export{q as Q,v as a};
