import type { NextApiRequest, NextApiResponse } from 'next'

import { complementarEvento, Evento } from 'core'
import { ApiResponse } from '@/data'
import { buscarPorAlias, buscarTodos, salvar } from '@/data/db/EventPrisma'
import { deserializar, serializar } from '@/lib/utils'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let response: ApiResponse<any> = {
        codeStatus: 405,
        data: null,
    }
    switch (req.method) {
        case 'GET':
            response = await get()
            break
        case 'POST':
            response = await post(req.body as Evento)
            break
        default:
    }
    res.status(response.codeStatus).send(response.error ?? response.data)
}

async function get(): Promise<ApiResponse<any[]>> {
    const events = await buscarTodos()
    return {
        codeStatus: 200,
        data: events.map(serializar),
    }
}

async function post(paramEvent: Evento): Promise<ApiResponse<Evento>> {
    const event = await buscarPorAlias(paramEvent.alias)

    if (event && event.id !== paramEvent.id) {
        return {
            codeStatus: 400,
            error: 'Já existe um evento com esse alias.',
        }
    }

    const eventComplete = complementarEvento(deserializar(paramEvent))
    await salvar(eventComplete)
    return {
        codeStatus: 200,
        data: eventComplete,
    }
}
