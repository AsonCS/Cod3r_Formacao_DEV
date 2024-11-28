import { createContext, PropsWithChildren, useEffect, useState } from 'react'

import { Evento } from 'core'
import useApi from '../hooks/useApi'
import { EventsAccess } from '../paths'
import useLocalStorage from '../hooks/useLocalStorage'

export interface Props {
    event: Evento | null
    events: Evento[]
    addByQrCode(qrCode: string): void
    remove(id: string): void
    select(id: string): void
}

export const EventsContext = createContext<Props>({
    event: null,
    events: [],
    addByQrCode: () => {},
    remove: () => {},
    select: () => {},
})

export function EventsProvider(props: PropsWithChildren) {
    const { httpPost } = useApi()
    const { get, save } = useLocalStorage()

    const [event, setEvent] = useState<Evento | null>(null)
    const [events, setEvents] = useState<Evento[]>([])

    async function addByQrCode(qrcode: string) {
        try {
            const { id, password } = JSON.parse(qrcode)

            const evento = await loadEvent(id, password)
            if (!evento) {
                return remove(id)
            }

            const novosEventos = events.filter((e) => e.id !== id)
            novosEventos.push(evento)

            save('eventos', novosEventos)
            setEvents(novosEventos)
        } catch (error: any) {
            alert(JSON.stringify(error))
        }
    }

    async function loadEvent(id: string, password: string) {
        return await httpPost(new EventsAccess(id, password))
    }

    async function loadEvents() {
        setEvents((await get('eventos')) || [])
    }

    async function remove(id: string) {
        const evs = events.filter((ev) => ev.id !== id)
        save('eventos', evs)
        setEvents(evs)
    }

    async function select(id: string) {
        if (!events) return
        const evento = events.find((e) => e.id === id)
        const eventoCarregado = await loadEvent(id, evento?.senha || '')
        setEvent(eventoCarregado ?? null)
    }

    useEffect(() => {
        loadEvents()
    }, [])

    return (
        <EventsContext.Provider
            value={{
                event,
                events,
                addByQrCode: addByQrCode,
                remove: remove,
                select: select,
            }}
        >
            {props.children}
        </EventsContext.Provider>
    )
}
