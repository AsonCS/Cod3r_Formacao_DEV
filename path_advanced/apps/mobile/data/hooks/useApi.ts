import { useCallback } from 'react'
import { Path } from '../paths'

const baseUrl = process.env.EXPO_PUBLIC_API_URL

export default function useApi() {
    const httpGet = useCallback(async function (path: Path) {
        const res = await fetch(`${baseUrl}${path.path}`)
        return extract(res)
    }, [])
    const httpPost = useCallback(async function (path: Path) {
        const res = await fetch(`${baseUrl}${path.path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: path.body ? JSON.stringify(path.body) : null,
        })
        return extract(res)
    }, [])

    return { httpGet, httpPost }
}

async function extract(res: Response) {
    let content: any

    try {
        content = await res.json()
    } catch (e) {
        if (!res.ok) {
            throw new Error(`Unexpected error ${res.status}`)
        }
        return null
    }

    if (!res.ok) {
        throw content
    }

    return content
}
