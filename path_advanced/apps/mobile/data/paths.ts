export interface Path {
    body?: any
    path: string
}

export class Events implements Path {
    constructor(body?: any) {
        this.body = body
    }

    body?: any
    path = '/events'
}

export class EventsAccess implements Path {
    constructor(id: string, password: string) {
        this.body = {
            id,
            senha: password,
        }
    }

    body?: any
    path = '/events/acessar'
}

export class Ping implements Path {
    path = '/ping'
}
