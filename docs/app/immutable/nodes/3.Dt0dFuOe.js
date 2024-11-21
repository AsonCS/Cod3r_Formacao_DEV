import{c as b,a as n,t as v}from"../chunks/disclose-version.DJ85z-SI.js";import{i as h}from"../chunks/legacy.CoaRLUsx.js";import{p as x,f as _,c as s,s as u,r as o,t as A,a as k,g as T}from"../chunks/runtime.BM7WB-jH.js";import{A as q,e as w,i as z}from"../chunks/routes.DZtBvaoF.js";import{s as j}from"../chunks/render.DShMk7TK.js";import{i as y}from"../chunks/if.Bwi4VD2e.js";import{s as c,a as C}from"../chunks/autores.5zafo9x9.js";import{p as F}from"../chunks/props.D4wnE-9g.js";import{T as H}from"../chunks/Titulo.CgeB7wb9.js";var I=v(`<a class="
            border
            border-zinc-800
            flex
            flex-col
            overflow-hidden
            relative
            rounded-md
        "><img class="
                h-96
                object-cover
            "> <div class="
                absolute
                bg-black/50
                bottom-0
                px-6
                py-4
                text-end
                w-full
            "><span class="
                    font-black
                    text-2xl
                "> </span></div></a>`);function O(i,r){x(r,!1);let a=F(r,"author",8,null);h();var e=b(),l=_(e);y(l,a,m=>{var t=I(),d=s(t),p=u(d,2),f=s(p),g=s(f,!0);o(f),o(p),o(t),A(()=>{c(t,"href",`${q}${a().id??""}`),c(d,"alt",`Foto de ${a().nome}`),c(d,"src",a().imagem),j(g,a().nome)}),n(m,t)}),n(i,e),k()}var R=v(`<div class="
        border
		border-zinc-800
        flex
        flex-col
        gap-5
        mb-4
		p-2
		rounded-lg
    "><!> <div class="
            gap-5
            grid
            grid-cols-1

            lg:grid-cols-2
        "></div></div>`);function L(i){var r=R(),a=s(r);H(a,{principal:"Autores",secundario:"Conheça os autores que escrevem as histórias que você ama!"});var e=u(a,2);w(e,5,()=>C,z,(l,m)=>{O(l,{get author(){return T(m)}})}),o(e),o(r),n(i,r)}export{L as component};
