import{e as N}from"../chunks/index.BdV64Xed.js";import{s as P}from"../chunks/series.bvFS7sk2.js";import{c as b,a as c,t as z,s as T,b as B}from"../chunks/disclose-version.DJ85z-SI.js";import{i as k}from"../chunks/legacy.CoaRLUsx.js";import{f as h,p as y,c as i,s as v,r as s,n as C,t as S,a as I,g as H}from"../chunks/runtime.BM7WB-jH.js";import{i as j}from"../chunks/if.Bwi4VD2e.js";import{p as R}from"../chunks/stores.DyJIuazv.js";import{s as x}from"../chunks/render.DShMk7TK.js";import{e as U,i as q,A as D}from"../chunks/routes.DZtBvaoF.js";import{s as f}from"../chunks/autores.5zafo9x9.js";import{l as E,s as F,p as M}from"../chunks/props.D4wnE-9g.js";import{I as G,s as J}from"../chunks/Icon.BM_G3JyZ.js";function K(n,r){const e=E(r,["children","$$slots","$$events","$$legacy"]);G(n,F({type:"outline",name:"brand-amazon"},()=>e,{iconNode:[["path",{d:"M17 12.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94"}],["path",{d:"M19.5 15c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1"}]],children:(l,m)=>{var a=b(),t=h(a);J(t,r,"default",{}),c(l,a)},$$slots:{default:!0}}))}function Q(n){const r=n.params.id,e=P.find(o=>o.id===r);if(e)return{serie:e};N(404,"Serie não encontrada")}const ve=Object.freeze(Object.defineProperty({__proto__:null,load:Q},Symbol.toStringTag,{value:"Module"}));var V=z(`<a class="
            bg-zinc-800
            flex
            flex-col
            overflow-hidden
            rounded-md
        " target="_blank"><img class="
                object-scale-down
            "> <div class="
                flex
                flex-1
                flex-col
                gap-2
                p-3
            "><span class="
                    flex-1
                    font-bold
                    text-center
                "> </span> <button class="
                    azul
                    botao
                "><!> Link do Livro</button></div></a>`);function W(n,r){y(r,!1);let e=M(r,"book",8,null);k();var o=b(),l=h(o);j(l,e,m=>{var a=V(),t=i(a),d=v(t,2),p=i(d),g=i(p,!0);s(p);var _=v(p,2),u=i(_);K(u,{size:25}),C(),s(_),s(d),s(a),S(()=>{f(a,"href",e().link),f(t,"alt",`Imagem do livro ${e().titulo??""}`),f(t,"src",e().imagem),x(g,e().titulo)}),c(m,a)}),c(n,o),I()}var X=z(`<div class="
            border
            border-zinc-800
            flex
            flex-col
            gap-5
            mb-4
            p-2
            rounded-lg
        "><div class="
                flex
                flex-col
            "><h1 class="
                    font-black
                    text-3xl
                "> </h1> <a class="
                    text-sm
                    text-zinc-400
                "> </a></div> <img class="
                    h-48
                    object-cover

                    md:h-72
                    lg:h-96
                "> <p class="
                text-justify
                text-lg
                text-zinc-400
            "> </p> <h2>Lista de Livros</h2> <div class="
                gap-5
                grid
                grid-cols-1

                md:grid-cols-2
                lg:grid-cols-3
            "></div></div>`);function Y(n,r){y(r,!1);let e=M(r,"serie",8,null);k();var o=b(),l=h(o);j(l,e,m=>{var a=X(),t=i(a),d=i(t),p=i(d,!0);s(d);var g=v(d,2),_=i(g,!0);s(g),s(t);var u=v(t,2),$=v(u,2),O=i($,!0);s($);var L=v($,4);U(L,5,()=>e().livros,q,(w,A)=>{W(w,{get book(){return H(A)}})}),s(L),s(a),S(()=>{x(p,e().titulo),f(g,"href",`${D}${e().autor.id??""}`),x(_,e().autor.nome),f(u,"alt",`Imagem da série ${e().titulo}`),f(u,"src",e().imagem),x(O,e().descricao)}),c(m,a)}),c(n,o),I()}var Z=z("<main><!></main>");function fe(n,r){y(r,!1);const e=T(),o=()=>B(R,"$page",e);k();var l=b(),m=h(l);j(m,()=>o().data.serie,a=>{var t=Z(),d=i(t);Y(d,{get serie(){return o().data.serie}}),s(t),c(a,t)}),c(n,l),I()}export{fe as component,ve as universal};
