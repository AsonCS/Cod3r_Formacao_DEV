import { useContext } from 'react'

import { EventsContext, Props } from '@/data/contexts/EventsContext'
import { Evento } from 'core'

export default function useEvents(): Props {
    const events = useContext(EventsContext)
    return events
}
