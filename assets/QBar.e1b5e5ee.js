import{h as e,c as r,a as c,g as p,j as u}from"./index.4bf09933.js";import{u as l,a as d}from"./use-dark.65f1b23a.js";const m=e("div",{class:"q-space"});var q=r({name:"QSpace",setup(){return()=>m}}),Q=r({name:"QBar",props:{...l,dense:Boolean},setup(a,{slots:s}){const{proxy:{$q:t}}=u(),o=d(a,t),n=c(()=>`q-bar row no-wrap items-center q-bar--${a.dense===!0?"dense":"standard"}  q-bar--${o.value===!0?"dark":"light"}`);return()=>e("div",{class:n.value,role:"toolbar"},p(s.default))}});export{Q,q as a};
