'use client'
import { createContext, useCallback, useEffect, useState } from 'react'

import {
    Convidado,
    criarConvidadoVazio,
    criarEventoVazio,
    Data,
    Evento,
} from 'core'
import useAPI from '../hooks/useAPI'
import { useRouter } from 'next/navigation'
import useMensagens from '../hooks/useMensagens'

export interface ContextoEventoProps {
    evento: Partial<Evento>
    convidado: Partial<Convidado>
    aliasValido: boolean

    alterarEvento(evento: Partial<Evento>): void
    alterarConvidado(convidado: Partial<Convidado>): void

    carregarEvento(idOuAlias: string): Promise<void>
    salvarEvento(): Promise<void>

    adicionarConvidado(): void
}

const ContextoEvento = createContext<ContextoEventoProps>({
    evento: {},
    convidado: {},
    aliasValido: false,
    alterarEvento: () => {},
    alterarConvidado: () => {},
    carregarEvento: async () => {},
    salvarEvento: async () => {},
    adicionarConvidado: () => {},
})

export function ProvedorContextoEvento(props: any) {
    const { httpGet, httpPost } = useAPI()
    const { adicionarErro } = useMensagens()
    const router = useRouter()

    const [aliasValido, setAliasValido] = useState(true)
    const [evento, setEvento] = useState<Partial<Evento>>(criarEventoVazio())
    const [convidado, setConvidado] = useState<Partial<Convidado>>(
        criarConvidadoVazio()
    )

    const salvarEvento = useCallback(
        async function () {
            try {
                const eventoCriado = await httpPost('/events', evento)
                router.push('/evento/sucesso')
                setEvento({
                    ...eventoCriado,
                    data: Data.desformatar(eventoCriado.data),
                })
            } catch (error: any) {
                adicionarErro(error.messagem ?? 'Ocorreu um erro inesperado!')
            }
        },
        [evento, httpPost, router, adicionarErro]
    )

    const carregarEvento = useCallback(
        async function (idOuAlias: string) {
            try {
                const evento = await httpGet(`/events/${idOuAlias}`)
                if (!evento) return
                setEvento({
                    ...evento,
                    data: Data.desformatar(evento.data),
                })
            } catch (error: any) {
                adicionarErro(error.messagem ?? 'Ocorreu um erro inesperado!')
            }
        },
        [httpGet, setEvento, adicionarErro]
    )

    const adicionarConvidado = useCallback(
        async function () {
            try {
                await httpPost(`/events/${evento.alias}/convidado`, convidado)
                router.push('/convite/obrigado')
            } catch (error: any) {
                adicionarErro(error.messagem ?? 'Ocorreu um erro inesperado!')
            }
        },
        [httpPost, evento, convidado, router, adicionarErro]
    )

    const validarAlias = useCallback(
        async function () {
            try {
                const { valido } = await httpGet(
                    `/events/validar/${evento.alias}/${evento.id}`
                )
                setAliasValido(valido)
            } catch (error: any) {
                adicionarErro(error.messagem ?? 'Ocorreu um erro inesperado!')
            }
        },
        [httpGet, evento, adicionarErro]
    )

    useEffect(() => {
        if (evento?.alias) validarAlias()
    }, [evento?.alias, validarAlias])

    return (
        <ContextoEvento.Provider
            value={{
                evento,
                convidado,
                aliasValido,
                alterarEvento: setEvento,
                alterarConvidado: setConvidado,
                salvarEvento,
                carregarEvento,
                adicionarConvidado,
            }}
        >
            {props.children}
        </ContextoEvento.Provider>
    )
}

export default ContextoEvento