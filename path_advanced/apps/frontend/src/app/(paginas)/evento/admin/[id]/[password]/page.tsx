"use client"
import { use, useCallback, useEffect, useState } from "react"
import { Evento, eventos } from "core"

import DashboardEvento from "@/components/evento/DashboardEvento"
import FormSenhaEvento from "@/components/evento/FormSenhaEvento"

interface Props {
    params: Promise<unknown>
}
interface Params {
    id: string,
    password?: string | null
}

export default function PaginaAdminEvento(
    props: Props
) {
    const params = use(props.params) as Params

    const id = params.id
    const [event, setEvent] = useState<Evento | null>(null)
    const [password] = useState(
        params.password ?? null
    )

    const loadEvent = useCallback(() => {
        const event = eventos
            .find(ev => ev.id === id && ev.senha === password)
        if (event) {
            setEvent(event)
        }
    }, [id, password])

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
                <DashboardEvento event={event} />
            ) : (
                <FormSenhaEvento />
            )}
        </div>
    )
}
