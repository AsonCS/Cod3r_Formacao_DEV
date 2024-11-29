import type { NextApiRequest, NextApiResponse } from 'next'

import { ApiResponse } from '@/data'
import { buscarPorAlias } from '@/data/db/EventPrisma'

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
            const alias = req.query['alias'] as string
            const id = req.query['id'] as string
            response = await get(alias, id)
            break
        default:
    }
    res.status(response.codeStatus).send(response.error ?? response.data)
}

async function get(alias: string, id: string): Promise<ApiResponse<any>> {
    const event = await buscarPorAlias(alias)
    return {
        codeStatus: 200,
        data: { valido: !event || event.id === id },
    }
}
