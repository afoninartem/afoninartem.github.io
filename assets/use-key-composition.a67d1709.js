import{a as f}from"./index.9d2e584e.js";const o=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,a=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,s=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,e=/[a-z0-9_ -]$/i;function p(t){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,t(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(f.is.firefox===!0?e.test(u.data)===!1:o.test(u.data)===!0||a.test(u.data)===!0||s.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}export{p as u};
