import{c as te,r as C,a as f,w as E,b as k,ae as x,a9 as H,h as A,ap as oe,j as ae,g as ne,Y as ie}from"./index.1f69b706.js";import{u as se,a as p,v as j,b as le,c as re,d as ue,e as ce,f as de,g as fe,r as q,s as he,p as D,h as ve}from"./position-engine.5b553eb4.js";import{u as ge,a as me,b as pe,c as Te,d as M}from"./selection.43d4a6f4.js";import{s as ye,g as be}from"./scroll.36fd76b0.js";var Ce=te({name:"QTooltip",inheritAttrs:!1,props:{...se,...ge,...p,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...p.transitionShow,default:"jump-down"},transitionHide:{...p.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:j},self:{type:String,default:"top middle",validator:j},offset:{type:Array,default:()=>[14,14],validator:le},scrollTarget:ye,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...me],setup(e,{slots:L,emit:T,attrs:h}){let i,s;const v=ae(),{proxy:{$q:o}}=v,l=C(null),c=C(!1),Q=f(()=>D(e.anchor,o.lang.rtl)),W=f(()=>D(e.self,o.lang.rtl)),B=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=re(),{registerTimeout:d}=pe(),{transitionProps:_,transitionStyle:I}=ue(e),{localScrollTarget:y,changeScrollEvent:U,unconfigureScrollTarget:V}=ce(e,w),{anchorEl:a,canShow:Y,anchorEvents:r}=de({showing:c,configureAnchorEl:X}),{show:$,hide:g}=Te({showing:c,canShow:Y,handleShow:F,handleHide:G,hideOnRouteChange:B,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:b,hidePortal:S,renderPortal:z}=fe(v,l,ee,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:l,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ie(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(m,n=>{(n===!0?ve:q)(t)}),k(()=>{q(t)})}function F(t){b(),N(()=>{s=new MutationObserver(()=>u()),s.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=E(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{b(!0),T("show",t)},e.transitionDuration)}function G(t){R(),S(),P(),d(()=>{S(!0),T("hide",t)},e.transitionDuration)}function P(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),V(),x(r,"tooltipTemp")}function u(){he({targetEl:l.value,offset:e.offset,anchorEl:a.value,anchorOrigin:Q.value,selfOrigin:W.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(o.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const m=a.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[m,O,"delayHide","passiveCapture"]);H(r,"tooltipTemp",n)}d(()=>{$(t)},e.delay)}function K(t){o.platform.is.mobile===!0&&(x(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];H(r,"anchor",t)}function w(){if(a.value!==null||e.scrollTarget!==void 0){y.value=be(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;U(y.value,t)}}function Z(){return c.value===!0?A("div",{...h,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,I.value],role:"tooltip"},ne(L.default)):null}function ee(){return A(oe,_.value,Z)}return k(P),Object.assign(v.proxy,{updatePosition:u}),z}});export{Ce as Q};
