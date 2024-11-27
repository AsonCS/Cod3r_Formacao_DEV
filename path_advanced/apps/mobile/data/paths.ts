export interface Path {
    body?: any
    path: string
}

export class Events implements Path {
    constructor(body?: any) {
        this.body = body
    }

    body?: any
    path = 'ping'
}

export class Ping implements Path {
    path = 'ping'
}
