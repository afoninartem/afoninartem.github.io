import{X as j,r as u,a as s,D as B,ao as h}from"./index.960d3e0a.js";const D=j("dinners",()=>{const p=u(null),f=u(null),m=u(null),y=(e,n)=>{n=="dinners"?p.value=e:f.value=e},b=s(()=>({dinners:p.value,artis:f.value})),a=s(()=>m.value),w=s(()=>Boolean(a.value!=null)),g=s(()=>{let e="\u0418\u0449\u0435\u043C \u0432\u0447\u0435\u0440\u0430\u0448\u043D\u0438\u0439 \u0434\u0435\u043D\u044C";return a.value==null?(e="\u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0410\u0444\u043E\u043D\u0438\u043D\u0443.",e):(Object.keys(a.value.yesterday).length==0?e="\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0437\u0430 \u0432\u0447\u0435\u0440\u0430\u0448\u043D\u0438\u0439 \u0434\u0435\u043D\u044C. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0434\u0430\u0442\u044B \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 Senesys.":e="\u041E\u0442\u0447\u0435\u0442 \u043F\u043E \u043E\u0431\u0435\u0434\u0430\u043C \u0437\u0430 \u0432\u0447\u0435\u0440\u0430\u0448\u043D\u0438\u0439 \u0434\u0435\u043D\u044C \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D, \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0435\u0433\u043E.",e)}),v=s(()=>{let e="\u0412\u0441\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u0410\u0440\u0442\u0438\u0441 \u0431\u044B\u043B\u0438 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0441 1\u0421.";return a.value==null?(e="\u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u044B. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0410\u0444\u043E\u043D\u0438\u043D\u0443.",e):(Object.keys(a.value.artis).includes("\u041D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435")&&(e="\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u0410\u0440\u0442\u0438\u0441 \u043D\u0435 \u0431\u044B\u043B\u0438 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0441 1\u0421."),e)}),k=s(()=>{if(a.value==null)return;let e=Object.keys(a.value),n=[];return e.forEach(t=>{switch(t){case"artis":Object.keys(a.value[t]).length>0&&n.push("\u0410\u0440\u0442\u0438\u0441");break;case"emulcom":a.value[t].length>0&&n.push("\u042D\u043C\u0443\u043B\u044C\u043A\u043E\u043C");break;case"goodwood":a.value[t].length>0&&n.push("\u0413\u0443\u0434 \u0412\u0443\u0434");break;default:Object.keys(a.value[t]).length>0&&n.push("\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F");break}}),n}),{user:i}=B(),C=async e=>{const n=new FormData;for(let t=0;t<e.length;t++)n.append("dinners",e[t]);await h.post("/maintenance/dinners/upload",n,{headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"multipart/form-data"}}).then(t=>{m.value=t.data.data,console.log(t.data.data)}).catch(t=>console.log(t))};async function T(e){let n=h+"/download/dinners-pdf",t={method:"GET",headers:new Headers({"Content-Type":"application/pdf",Authorization:`Bearer ${i.token}`,"PDF-date":e}),mode:"cors",cache:"default"},r,c;fetch(n,t).then(function(l){return r="application/pdf",c=`\u041E\u0431\u0435\u0434\u044B ${e}.pdf`,l.blob()}).then(function(l){let o=window.document.createElement("a");o.href=window.URL.createObjectURL(new Blob([l],{type:r})),o.download=c,document.body.appendChild(o),o.click(),document.body.removeChild(o)}).catch(l=>{console.log("e",l)})}function O(e){console.log(e);const n=["\u0410\u0440\u0442\u0438\u0441","\u0413\u0443\u0434 \u0412\u0443\u0434","\u042D\u043C\u0443\u043B\u044C\u043A\u043E\u043C","\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F"];console.log(n.indexOf(e));let t=h.defaults.baseURL+"/maintenance/dinners/download",r={method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:`Bearer ${i.token}`,Company:n.indexOf(e)}),mode:"cors",cache:"default"},c,l;fetch(t,r).then(function(o){console.log(o);let d=o.headers.get("Content-Type");return c="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",l=n[Number(d.split("; ")[1])],console.log(d),console.log(l),o.blob()}).then(function(o){let d=window.document.createElement("a");d.href=window.URL.createObjectURL(new Blob([o],{type:c})),d.download=l,document.body.appendChild(d),d.click(),document.body.removeChild(d)}).catch(o=>{console.log("e",o)})}return{uploadFile:y,sendToBackend:C,files:b,handledData:a,hdIsReady:w,download:O,downloadPDF:T,drmsg:g,ufmsg:v,dbtns:k}});export{D as u};
