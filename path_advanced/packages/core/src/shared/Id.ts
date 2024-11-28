import { v4 as uuid, validate } from 'uuid'

export default class Id {
    static novo(): string {
        try {
            return uuid()
        } catch (e) {
            return Math.random().toString(32)
        }
    }

    static valido(id: string): boolean {
        return validate(id)
    }
}
