import { Convidado } from "@/core";
import ConvidadoItem from "./ConvidadoItem";

export interface Props {
    convidados: Convidado[]
}

export default function ListaConvidados(
    props: Props
) {
    return (
        <div>
            <ul
                className="
                    flex
                    flex-col
                    gap-2
                "
            >
                {props.convidados.map((convidado) => (
                    <ConvidadoItem
                        convidado={convidado}
                        key={convidado.id}
                    />
                ))}
            </ul>
        </div>
    )
}