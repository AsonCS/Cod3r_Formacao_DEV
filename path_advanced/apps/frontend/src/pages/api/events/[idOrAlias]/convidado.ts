import { NextApiRequest, NextApiResponse } from 'next'

import { buscarPorAlias, salvarConvidado } from '@/data/db/EventPrisma'
import { ApiResponse } from '@/data'
import { complementarConvidado, Convidado } from 'core'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let response: ApiResponse<any> = {
        codeStatus: 405,
        data: null,
    }
    switch (req.method) {
        case 'POST':
            const alias = req.query['idOrAlias'] as string
            const convidado = req.body as Convidado
            response = await post(alias, convidado)
            break
        default:
    }
    res.status(response.codeStatus).send(response.error ?? response.data)
}

async function post(
    alias: string,
    convidado: Partial<Convidado>
): Promise<ApiResponse<any>> {
    const event = await buscarPorAlias(alias)

    if (!event) {
        return {
            codeStatus: 404,
            error: 'Evento não encontrado.',
        }
    }

    const convidadoCompleto = complementarConvidado(convidado)
    await salvarConvidado(event, convidadoCompleto)
    return {
        codeStatus: 200,
    }
}
