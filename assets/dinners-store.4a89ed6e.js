import{A as T,r as u,k as c,C as g,ao as w}from"./index.196e559a.js";const B=T("dinners",()=>{const h=u(null),m=u(null),f=u(null),y=(e,t)=>{t=="dinners"?h.value=e:m.value=e},d=c(()=>({dinners:h.value,artis:m.value})),p=c(()=>f.value),v=c(()=>{var e;return Boolean((e=p.value)==null?void 0:e.length)}),b=c(()=>{var e;return Array.from(new Set((e=p.value)==null?void 0:e.map(t=>t.Marks).flat().map(t=>t.split(" ")[0].split(".").reverse().join("/"))))}),{user:s}=g(),C=async()=>{if(!d.value.dinners||!d.value.artis)return;const e=new FormData,t=new FormData;e.append("dinners",d.value.dinners),t.append("eaters-info",d.value.artis),await w.post("/upload/dinners",e,{headers:{Authorization:`Bearer ${s.token}`,"Content-Type":"multipart/form-data"}}),await w.post("/upload/eaters-info",t,{headers:{Authorization:`Bearer ${s.token}`,"Content-Type":"multipart/form-data"}}).then(a=>{f.value=a.data.data}).catch(a=>console.log(a))};async function k(e){let t="http://localhost:3000/api/download/dinners-pdf",a={method:"GET",headers:new Headers({"Content-Type":"application/pdf",Authorization:`Bearer ${s.token}`,"PDF-date":e}),mode:"cors",cache:"default"},i,l;fetch(t,a).then(function(o){return i="application/pdf",l=`\u041E\u0431\u0435\u0434\u044B ${e}.pdf`,o.blob()}).then(function(o){let n=window.document.createElement("a");n.href=window.URL.createObjectURL(new Blob([o],{type:i})),n.download=l,document.body.appendChild(n),n.click(),document.body.removeChild(n)}).catch(o=>{console.log("e",o)})}function D(e){const t=["\u0410\u0440\u0442\u0438\u0441","\u0413\u0443\u0434 \u0412\u0443\u0434","\u042D\u043C\u0443\u043B\u044C\u043A\u043E\u043C"];let a="http://localhost:3000/api/download/dinners-report",i={method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:`Bearer ${s.token}`,Company:t.indexOf(e)}),mode:"cors",cache:"default"},l,o;fetch(a,i).then(function(n){let r=n.headers.get("Content-Type");return l="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",o=t[Number(r.split("; ")[1])],n.blob()}).then(function(n){let r=window.document.createElement("a");r.href=window.URL.createObjectURL(new Blob([n],{type:l})),r.download=o,document.body.appendChild(r),r.click(),document.body.removeChild(r)}).catch(n=>{console.log("e",n)})}return{uploadFile:y,files:d,upload:C,handledData:p,hdIsReady:v,download:D,downloadPDF:k,loadedDateRange:b}});export{B as u};
