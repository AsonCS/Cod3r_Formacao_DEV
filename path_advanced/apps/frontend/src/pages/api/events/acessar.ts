import { NextApiRequest, NextApiResponse } from 'next'

import { buscarPorId } from '@/data/db/EventPrisma'
import { ApiResponse } from '@/data'
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
        case 'POST':
            const { id, senha } = req.body as { id: string; senha: string }
            response = await post(id, senha)
            break
        default:
    }
    res.status(response.codeStatus).send(response.error ?? response.data)
}

async function post(id: string, password: string): Promise<ApiResponse<any>> {
    const event = await buscarPorId(id, true)

    if (!event) {
        return {
            codeStatus: 400,
            error: 'Evento não encontrado',
        }
    }

    if (event.senha !== password) {
        return {
            codeStatus: 400,
            error: 'Senha não corresponde ao evento',
        }
    }

    return {
        codeStatus: 200,
        data: serializar(event),
    }
}
