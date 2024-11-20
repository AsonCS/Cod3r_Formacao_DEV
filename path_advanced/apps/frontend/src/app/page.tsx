import Link from "next/link";

import LogoGrande from "@/components/template/LogoGrande";

export default function Home() {
  return (
    <div
      className="
bg-[url('/background-inicio.svg')]
bg-cover
flex
flex-col
gap-10
h-screen
items-center
justify-center
"
    >
      <div
        className="
flex
flex-col
gap-4
items-center
"
      >
        <LogoGrande />
        <p
          className="
font-light
leading-6
select-none
text-center
text-zinc-500
w-96
"
        >
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem
          complicações!
        </p>
      </div>
      <Link
        className="
azul
botao
text-lg
uppercase
"
        href="/evento"
      >
        Crie o seu Evento
      </Link>
    </div>
  );
}
