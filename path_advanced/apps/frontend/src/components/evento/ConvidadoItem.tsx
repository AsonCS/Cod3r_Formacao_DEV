import { Convidado } from "@/core";

export interface Props {
    convidado: Convidado
}

export default function ConvidadoItem(
    props: Props
) {
    return (
        <li
            className="
                border
                border-zinc-800
                bg-black/40
                flex
                justify-between
                rounded-lg
                px-6
                py-3
            "
        >
            <div
                className="
                    flex
                    flex-col
                "
            >
                <span
                    className="
                        font-bold
                        text-xl
                    "
                >
                    {props.convidado.nome}
                </span>
                <span
                    className="
                        text-sm
                        text-zinc-400
                    "
                >
                    {props.convidado.email}
                </span>
            </div>
            <div
                className="
                    flex
                    flex-col
                    items-end
                "
            >
                <span
                    className="
                        text-sm
                        text-zinc-400
                    "
                >
                    Acompanhantes
                </span>
                <span
                    className="
                        font-bold
                        text-xl
                    "
                >
                    {props.convidado.qtdeAcompanhantes}
                </span>
            </div>
        </li>
    )
}
