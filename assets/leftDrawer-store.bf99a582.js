import{X as f,r as l,s as p,D as h,Y as m,a as w}from"./index.36d0b482.js";const d=f("leftDrawerStore",()=>{const t=l(!0),n=()=>{t.value=!t.value},u=()=>{t.value=!1},a=l(null),{user:s}=p(h());if(s.value){const c=s.value.role,r=Array.from(m);r.forEach(e=>e.children?(e.children.forEach(o=>o.path=e.path+"/"+o.path),r.push(e.children)):null);const i=r.flat();a.value=i.filter(e=>e.meta&&e.meta.requiresRole&&c.split("").some(o=>e.meta.requiresRole.includes(o))).map(e=>({title:e.name,caption:e.caption||"caption will be here",icon:e.icon||"person",link:e.path}))}else a.value=[{title:"\u0417\u0430\u0433\u043B\u0443\u0448\u043A\u0430",caption:"\u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B \u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0443\u0440\u043B\u044B",icon:"person",link:"/"}];return{leftDrawerOpen:w(()=>t.value),toggleLeftDrawer:n,userRoutes:a,closeLeftDrawer:u}});export{d as u};
