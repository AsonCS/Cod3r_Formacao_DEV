import{c as b,a as n,t as v}from"../chunks/disclose-version.BePWVN5T.js";import{i as h}from"../chunks/legacy.COuAM1YB.js";import{p as x,f as _,c as s,s as u,r as e,t as k,a as q,g as w}from"../chunks/runtime.C3JS33kB.js";import{e as z,i as A}from"../chunks/each.ND-Woi6p.js";import{s as T}from"../chunks/render.B4FoGs1w.js";import{i as j}from"../chunks/if.B80wWXnR.js";import{s as c,a as y}from"../chunks/autores.CymrV0NB.js";import{p as C}from"../chunks/props.BaCyDQt9.js";import{T as F}from"../chunks/Titulo.b6cSH3zp.js";var I=v(`<a class="
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
                "> </span></div></a>`);function B(i,r){x(r,!1);let a=C(r,"author",8,null);h();var o=b(),l=_(o);j(l,a,m=>{var t=I(),d=s(t),p=u(d,2),f=s(p),g=s(f,!0);e(f),e(p),e(t),k(()=>{c(t,"href",`/authors/${a().id}`),c(d,"alt",`Foto de ${a().nome}`),c(d,"src",a().imagem),T(g,a().nome)}),n(m,t)}),n(i,o),q()}var D=v(`<div class="
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
        "></div></div>`);function P(i){var r=D(),a=s(r);F(a,{principal:"Autores",secundario:"Conheça os autores que escrevem as histórias que você ama!"});var o=u(a,2);z(o,5,()=>y,A,(l,m)=>{B(l,{get author(){return w(m)}})}),e(o),e(r),n(i,r)}export{P as component};
