'use client'
import { use, useCallback, useEffect, useState } from 'react'
import { Evento, eventos } from 'core'

import DashboardEvento from '@/components/evento/DashboardEvento'
import FormSenhaEvento from '@/components/evento/FormSenhaEvento'
import useAPI from '@/data/hooks/useAPI'

interface Props {
    params: any
}

export default function PaginaAdminEvento(props: Props) {
    const { httpPost } = useAPI()
    const [id, passwordParam] = (use(props.params) as any).todos

    const [event, setEvent] = useState<Evento | null>(null)
    const [password, setPassword] = useState(passwordParam ?? '')

    const loadEvent = useCallback(() => {
        const event = eventos.find(
            (ev) => ev.id === id && ev.senha === password
        )
        setEvent(event ?? null)
    }, [id, password])

    const obterEvento = useCallback(async () => {
        if (!id || !password) return
        const evento = await httpPost('/events/acessar', {
            id,
            senha: password,
        })
        setEvent(evento)
    }, [httpPost, id, password])

    useEffect(() => {
        loadEvent()
    }, [id, password, loadEvent])

    return (
        <div
            className="
                flex
                flex-col
                items-center
            "
        >
            {event ? (
                <DashboardEvento
                    atualizarListaConvidados={obterEvento}
                    event={event}
                />
            ) : (
                <FormSenhaEvento
                    acessarEvento={obterEvento}
                    senha={password}
                    setSenha={setPassword}
                />
            )}
        </div>
    )
}
