const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.C3hTQB-Y.js","../chunks/disclose-version.DJ85z-SI.js","../chunks/runtime.BM7WB-jH.js","../chunks/legacy.CoaRLUsx.js","../chunks/Icon.BM_G3JyZ.js","../chunks/routes.DZtBvaoF.js","../chunks/autores.5zafo9x9.js","../chunks/props.D4wnE-9g.js","../chunks/render.DShMk7TK.js","../assets/0.BrD5AbVa.css","../nodes/1.D2eCruJF.js","../chunks/stores.DyJIuazv.js","../chunks/entry.D52X2MeU.js","../nodes/2.nRWxu9x0.js","../chunks/ItemSerie.fknQmNfX.js","../chunks/if.Bwi4VD2e.js","../chunks/series.bvFS7sk2.js","../nodes/3.Dt0dFuOe.js","../chunks/Titulo.CgeB7wb9.js","../nodes/4.CzWRps2Q.js","../chunks/index.BdV64Xed.js","../nodes/5.BPEppFl7.js","../nodes/6.DAv1bOJ-.js"])))=>i.map(i=>d[i]);
var q=e=>{throw TypeError(e)};var Y=(e,t,r)=>t.has(e)||q("Cannot "+r);var u=(e,t,r)=>(Y(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,i)=>(Y(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{z as G,k as Q,C as X,F as Z,y as $,l as tt,E as et,aC as rt,aD as st,ae as N,L as at,Y as nt,g as v,ad as ot,a0 as x,aE as it,ax as ct,V as ut,B as S,aa as lt,ao as W,p as ft,an as dt,f as w,a as mt,aF as _t,s as ht,c as vt,t as gt,r as yt,aG as C,af as p}from"../chunks/runtime.BM7WB-jH.js";import{h as Et,m as Pt,u as Rt,s as bt}from"../chunks/render.DShMk7TK.js";import{c as D,a as b,t as H,p as kt}from"../chunks/disclose-version.DJ85z-SI.js";import{i as V}from"../chunks/if.Bwi4VD2e.js";import{p as I,a as wt}from"../chunks/props.D4wnE-9g.js";function xt(e){throw new Error("lifecycle_outside_component")}function B(e,t,r){G&&Q();var i=e,n,o;X(()=>{n!==(n=t())&&(o&&(et(o),o=null),n&&(o=$(()=>r(i,n))))},Z),G&&(i=tt)}function U(e,t){return e===t||(e==null?void 0:e[nt])===t}function F(e={},t,r,i){return rt(()=>{var n,o;return st(()=>{n=o,o=[],N(()=>{e!==r(...o)&&(t(e,...o),n&&U(r(...n),e)&&t(null,...n))})}),()=>{at(()=>{o&&U(r(...o),e)&&t(null,...o)})}}),e}function Lt(e){return class extends At{constructor(t){super({component:e,...t})}}}var g,f;class At{constructor(t){T(this,g);T(this,f);var o;var r=new Map,i=(a,s)=>{var d=ut(s);return r.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return v(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===ot?!0:(v(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,d){return x(r.get(s)??i(s,d),d),Reflect.set(a,s,d)}});O(this,f,(t.hydrate?Et:Pt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&it(),O(this,g,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||ct(this,a,{get(){return u(this,f)[a]},set(s){u(this,f)[a]=s},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{Rt(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;function Tt(e){S===null&&xt(),lt&&S.l!==null?Ot(S).m.push(e):W(()=>{const t=N(e);if(typeof t=="function")return t})}function Ot(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const St="modulepreload",Ct=function(e,t){return new URL(e,t).href},z={},P=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=Ct(l,i),l in z)return;z[l]=!0;const y=l.endsWith(".css"),L=y?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const h=a[m];if(h.href===l&&(!y||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${L}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":St,y||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),y)return new Promise((m,h)=>{c.addEventListener("load",m),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Ut={};var pt=H('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Dt=H("<!> <!>",1);function Vt(e,t){ft(t,!0);let r=I(t,"components",23,()=>[]),i=I(t,"data_0",3,null),n=I(t,"data_1",3,null);dt(()=>t.stores.page.set(t.page)),W(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=C(!1),a=C(!1),s=C(null);Tt(()=>{const E=t.stores.page.subscribe(()=>{v(o)&&(x(a,!0),_t().then(()=>{x(s,wt(document.title||"untitled page"))}))});return x(o,!0),E});const d=p(()=>t.constructors[1]);var l=Dt(),y=w(l);V(y,()=>t.constructors[1],E=>{var c=D();const m=p(()=>t.constructors[0]);var h=w(c);B(h,()=>v(m),(R,A)=>{F(A(R,{get data(){return i()},get form(){return t.form},children:(_,It)=>{var j=D(),J=w(j);B(J,()=>v(d),(K,M)=>{F(M(K,{get data(){return n()},get form(){return t.form}}),k=>r()[1]=k,()=>{var k;return(k=r())==null?void 0:k[1]})}),b(_,j)},$$slots:{default:!0}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(E,c)},E=>{var c=D();const m=p(()=>t.constructors[0]);var h=w(c);B(h,()=>v(m),(R,A)=>{F(A(R,{get data(){return i()},get form(){return t.form}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(E,c)});var L=ht(y,2);V(L,()=>v(o),E=>{var c=pt(),m=vt(c);V(m,()=>v(a),h=>{var R=kt();gt(()=>bt(R,v(s))),b(h,R)}),yt(c),b(E,c)}),b(e,l),mt()}const zt=Lt(Vt),Nt=[()=>P(()=>import("../nodes/0.C3hTQB-Y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>P(()=>import("../nodes/1.D2eCruJF.js"),__vite__mapDeps([10,1,2,3,8,11,12]),import.meta.url),()=>P(()=>import("../nodes/2.nRWxu9x0.js"),__vite__mapDeps([13,1,2,3,5,14,8,15,6,7,16]),import.meta.url),()=>P(()=>import("../nodes/3.Dt0dFuOe.js"),__vite__mapDeps([17,1,2,3,5,8,15,6,7,18]),import.meta.url),()=>P(()=>import("../nodes/4.CzWRps2Q.js"),__vite__mapDeps([19,20,12,2,6,1,3,15,11,7]),import.meta.url),()=>P(()=>import("../nodes/5.BPEppFl7.js"),__vite__mapDeps([21,1,2,3,5,14,8,15,6,7,18,16]),import.meta.url),()=>P(()=>import("../nodes/6.DAv1bOJ-.js"),__vite__mapDeps([22,20,12,2,16,6,1,3,15,11,8,5,7,4]),import.meta.url)],Wt=[],Ht={"/":[2],"/authors":[3],"/authors/[id]":[4],"/series":[5],"/series/[id]":[6]},Jt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Ht as dictionary,Jt as hooks,Ut as matchers,Nt as nodes,zt as root,Wt as server_loads};
