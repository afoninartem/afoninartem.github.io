import{c as ee,r as O,a as f,w as C,b as E,ae as k,a9 as x,h as H,ap as te,j as oe,g as ae,Y as ne}from"./index.2510f71b.js";import{u as ie,a as le,v as A,b as se,c as re,d as ue,e as ce,f as de,g as fe,r as j,s as ve,p as q,h as he}from"./position-engine.934368c7.js";import{u as me,a as ge,b as pe,c as ye,d as D}from"./selection.9660383c.js";import{g as Te}from"./scroll.81821ef9.js";var Oe=ee({name:"QTooltip",inheritAttrs:!1,props:{...ie,...me,...le,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:se},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ge],setup(e,{slots:M,emit:p,attrs:v}){let i,l;const h=oe(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>q(e.anchor,o.lang.rtl)),Q=f(()=>q(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:B,removeTick:N}=re(),{registerTimeout:d}=pe(),{transitionProps:R,transitionStyle:_}=ue(e),{localScrollTarget:y,changeScrollEvent:I,unconfigureScrollTarget:U}=ce(e,P),{anchorEl:a,canShow:V,anchorEvents:r}=de({showing:c,configureAnchorEl:K}),{show:Y,hide:m}=ye({showing:c,canShow:V,handleShow:z,handleHide:F,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:T,hidePortal:b,renderPortal:$}=fe(h,s,Z,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(g,n=>{(n===!0?he:j)(t)}),E(()=>{j(t)})}function z(t){T(),B(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{T(!0),p("show",t)},e.transitionDuration)}function F(t){N(),b(),S(),d(()=>{b(!0),p("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),U(),k(r,"tooltipTemp")}function u(){ve({targetEl:s.value,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(o.platform.is.mobile===!0){D(),document.body.classList.add("non-selectable");const g=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{Y(t)},e.delay)}function J(t){o.platform.is.mobile===!0&&(k(r,"tooltipTemp"),D(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){y.value=Te(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;I(y.value,t)}}function X(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,_.value],role:"tooltip"},ae(M.default)):null}function Z(){return H(te,R.value,X)}return E(S),Object.assign(h.proxy,{updatePosition:u}),$}});export{Oe as Q};
