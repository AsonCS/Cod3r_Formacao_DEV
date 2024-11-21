import{e as P}from"../chunks/index.ttbJM-fD.js";import{s as B}from"../chunks/series.DZqW-sO0.js";import{c as b,a as c,t as z,s as C,b as T}from"../chunks/disclose-version.BePWVN5T.js";import{i as k}from"../chunks/legacy.COuAM1YB.js";import{f as h,p as y,c as i,s as v,r as s,n as q,t as S,a as I,g as A}from"../chunks/runtime.C3JS33kB.js";import{i as j}from"../chunks/if.B80wWXnR.js";import{p as D}from"../chunks/stores.BZtxqo8t.js";import{s as x}from"../chunks/render.B4FoGs1w.js";import{e as E,i as F}from"../chunks/each.ND-Woi6p.js";import{s as f}from"../chunks/autores.CymrV0NB.js";import{l as G,s as H,p as M}from"../chunks/props.BaCyDQt9.js";import{I as J,s as K}from"../chunks/Icon.cLyn4T8-.js";function Q(n,r){const e=G(r,["children","$$slots","$$events","$$legacy"]);J(n,H({type:"outline",name:"brand-amazon"},()=>e,{iconNode:[["path",{d:"M17 12.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94"}],["path",{d:"M19.5 15c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1"}]],children:(l,m)=>{var a=b(),t=h(a);K(t,r,"default",{}),c(l,a)},$$slots:{default:!0}}))}function R(n){const r=n.params.id,e=B.find(o=>o.id===r);if(e)return{serie:e};P(404,"Serie não encontrada")}const me=Object.freeze(Object.defineProperty({__proto__:null,load:R},Symbol.toStringTag,{value:"Module"}));var U=z(`<a class="
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
                "><!> Link do Livro</button></div></a>`);function V(n,r){y(r,!1);let e=M(r,"book",8,null);k();var o=b(),l=h(o);j(l,e,m=>{var a=U(),t=i(a),d=v(t,2),p=i(d),g=i(p,!0);s(p);var _=v(p,2),u=i(_);Q(u,{size:25}),q(),s(_),s(d),s(a),S(()=>{f(a,"href",e().link),f(t,"alt",`Imagem do livro ${e().titulo??""}`),f(t,"src",e().imagem),x(g,e().titulo)}),c(m,a)}),c(n,o),I()}var W=z(`<div class="
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
            "></div></div>`);function X(n,r){y(r,!1);let e=M(r,"serie",8,null);k();var o=b(),l=h(o);j(l,e,m=>{var a=W(),t=i(a),d=i(t),p=i(d,!0);s(d);var g=v(d,2),_=i(g,!0);s(g),s(t);var u=v(t,2),$=v(u,2),w=i($,!0);s($);var L=v($,4);E(L,5,()=>e().livros,F,(N,O)=>{V(N,{get book(){return A(O)}})}),s(L),s(a),S(()=>{x(p,e().titulo),f(g,"href",`/authors/${e().autor.id??""}`),x(_,e().autor.nome),f(u,"alt",`Imagem da série ${e().titulo}`),f(u,"src",e().imagem),x(w,e().descricao)}),c(m,a)}),c(n,o),I()}var Y=z("<main><!></main>");function ve(n,r){y(r,!1);const e=C(),o=()=>T(D,"$page",e);k();var l=b(),m=h(l);j(m,()=>o().data.serie,a=>{var t=Y(),d=i(t);X(d,{get serie(){return o().data.serie}}),s(t),c(a,t)}),c(n,l),I()}export{ve as component,me as universal};
