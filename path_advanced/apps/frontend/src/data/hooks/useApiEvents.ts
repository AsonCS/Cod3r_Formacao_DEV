'use client'

import { useEffect, useState } from 'react'

import { Evento } from 'core'
import useAPI from './useAPI'

export default function useApiEvents() {
    const { httpGet } = useAPI()
    const [events, setEvents] = useState<Evento[]>([])

    useEffect(() => {
        httpGet('/events')
            .then((events) => {
                if (events && events.length > 0) {
                    setEvents(events)
                }
            })
            .catch(() => {})
    }, [httpGet])

    return events
}
