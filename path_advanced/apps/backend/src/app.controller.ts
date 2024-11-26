import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
    constructor() {}

    @Get('/')
    index(): string {
        return this.ping()
    }

    @Get('/ping')
    ping(): string {
        return 'pong'
    }
}
