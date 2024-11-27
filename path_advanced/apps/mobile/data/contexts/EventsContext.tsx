import { createContext, PropsWithChildren, useState } from 'react'

import { Evento, eventos as eventosMock } from 'core'

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
    const [event, setEvent] = useState<Evento | null>(null)
    const [events, setEvents] = useState<Evento[]>(eventosMock)

    return (
        <EventsContext.Provider
            value={{
                event,
                events,

                addByQrCode: () => {},
                remove: (id) => {
                    setEvents(events.filter((ev) => ev.id !== id))
                },
                select: (id) => {
                    const event = events.find((ev) => ev.id === id)
                    setEvent(event || null)
                },
            }}
        >
            {props.children}
        </EventsContext.Provider>
    )
}
