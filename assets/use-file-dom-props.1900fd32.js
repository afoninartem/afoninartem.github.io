import{a as n}from"./index.cfc702c5.js";function f(t,i){function o(){const e=t.modelValue;try{const r="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(e)===e&&("length"in e?Array.from(e):[e]).forEach(a=>{r.items.add(a)}),{files:r.files}}catch{return{files:void 0}}}return i===!0?n(()=>{if(t.type==="file")return o()}):n(o)}export{f as u};
