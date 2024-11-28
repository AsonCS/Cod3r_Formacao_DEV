import { Data, Evento } from 'core'
import Informacao from '../shared/Informacao'

export interface Props {
    className?: string
    esconderNome?: boolean
    event: Evento
}

export default function InformacoesEvento(props: Props) {
    return (
        <div
            className={`
                flex
                flex-col
                gap-2

                ${props.className ?? ''}
            `}
        >
            {props.esconderNome ? null : (
                <div
                    className="
                        border
                        border-zinc-800
                        flex
                        flex-1
                        items-center
                        gap-4
                        rounded-lg
                        px-6
                        py-3
                    "
                >
                    <span
                        className="
                            font-black
                            text-2xl
                        "
                    >
                        {props.event.alias}:
                    </span>
                    <span
                        className="
                            font-black
                            text-zinc-300
                        "
                    >
                        {props.event.nome}
                    </span>
                </div>
            )}
            <div
                className="
                    flex
                    gap-2
                "
            >
                <Informacao label="Data:">
                    {Data.toDateString(new Date(props.event.data))}
                    {' às '}
                    {Data.toTimeString(new Date(props.event.data))}
                </Informacao>
                <Informacao label="Local:">{props.event.local}</Informacao>
            </div>
            <Informacao label="Descrição:">{props.event.descricao}</Informacao>
        </div>
    )
}
