import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Data, Evento } from 'core'

export function safeLog(...message: any) {
    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(...message)
    }
}

export function safeError(...message: any) {
    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error(...message)
    }
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function serializar(evento: Evento): any | null {
    if (!evento) return null
    return {
        ...evento,
        data: Data.formatar(evento.data),
    }
}

export function deserializar(evento: any): Evento {
    return {
        ...evento,
        data: Data.desformatar(evento.data),
    }
}
