import { Evento } from 'core'
import InformacoesEvento from './InformacoesEvento'
import AcessarViaQrCode from './AcessarViaQrCode'
import Estatistica from '../shared/Estatistica'
import ListaConvidados from './ListaConvidados'

export interface Props {
    event: Evento
    atualizarListaConvidados: () => void
}

export default function DashboardEvento(props: Props) {
    const ausentes = props.event?.convidados?.filter((c) => !c.confirmado) ?? []
    const presents = props.event?.convidados?.filter((c) => c.confirmado) ?? []

    const totalGeral = presents?.reduce((total, c) => {
        return total + c.qtdeAcompanhantes + 1
    }, 0)

    return (
        <div
            className="
                flex
                flex-col
                gap-2
            "
        >
            <div
                className="
                    flex
                    gap-4
                    self-stretch
                "
            >
                <InformacoesEvento event={props.event} />
                <AcessarViaQrCode event={props.event} />
            </div>
            <div
                className="
                    gap-6
                    grid
                    grid-cols-3
                    mt-4
                "
            >
                <Estatistica
                    image="/icones/convidados.svg"
                    text="Expectativa de Convidados:"
                    value={props.event.publicoEsperado}
                />
                <Estatistica
                    image="/icones/confirmados.svg"
                    text="Confirmações:"
                    value={presents.length}
                />
                <Estatistica
                    image="/icones/acompanhantes.svg"
                    text="Total Confirmado:"
                    value={totalGeral}
                />
            </div>

            <button
                className="
                    azul
                    botao
                    mt-12
                    self-end
                "
                onClick={props.atualizarListaConvidados}
            >
                <span>Atualizar Lista de Convidados</span>
            </button>

            <span
                className="
                    flex
                    font-bold
                    py-2
                    text-xl
                    text-white/80
                "
            >
                Convidados que confirmaram PRESENÇA
            </span>
            <ListaConvidados convidados={presents} />
            <span
                className="
                    flex
                    font-bold
                    py-2
                    text-xl
                    text-white/80
                "
            >
                Convidados que confirmaram AUSÊNCIA
            </span>
            <ListaConvidados convidados={ausentes} />
        </div>
    )
}
