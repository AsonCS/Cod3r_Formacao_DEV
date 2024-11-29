import type { NextApiRequest, NextApiResponse } from 'next'

import { Evento, Id } from 'core'
import { ApiResponse } from '@/data'
import { buscarPorAlias, buscarPorId } from '@/data/db/EventPrisma'
import { serializar } from '@/lib/utils'

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
            const idOrAlias = req.query['idOrAlias'] as string
            response = await get(idOrAlias)
            break
        default:
    }
    res.status(response.codeStatus).send(response.error ?? response.data)
}

async function get(idOrAlias: string): Promise<ApiResponse<any>> {
    let event: Evento | null
    if (Id.valido(idOrAlias)) {
        event = await buscarPorId(idOrAlias, true)
    } else {
        event = await buscarPorAlias(idOrAlias)
    }

    if (!event) {
        return {
            codeStatus: 404,
            error: 'Evento não encontrado.',
        }
    }

    return {
        codeStatus: 200,
        data: serializar(event),
    }
}
