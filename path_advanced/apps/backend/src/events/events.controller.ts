import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common'
import {
    complementarConvidado,
    complementarEvento,
    Convidado,
    Data,
    Evento,
    Id,
} from 'core'
import { EventPrisma } from './event.prisma'

@Controller('events')
export class EventsController {
    constructor(readonly db: EventPrisma) {}

    @Post('acessar')
    async acessarEvento(@Body() dados: { id: string; senha: string }) {
        const event = await this.db.buscarPorId(dados.id, true)

        if (!event) {
            throw new HttpException('Evento não encontrado', 400)
        }

        if (event.senha !== dados.senha) {
            throw new HttpException('Senha não corresponde ao evento', 400)
        }

        return this.serializar(event)
    }

    @Get()
    async buscarEventos() {
        const eventos = await this.db.buscarTodos()
        return eventos.map(this.serializar)
    }

    @Get(':idOrAlias')
    async buscarEvento(@Param('idOrAlias') idOrAlias: string) {
        let event: Evento
        if (Id.valido(idOrAlias)) {
            event = await this.db.buscarPorId(idOrAlias, true)
        } else {
            event = await this.db.buscarPorAlias(idOrAlias)
        }
        return this.serializar(event)
    }

    @Post(':alias/convidado')
    async salvarConvidado(
        @Param('alias') alias: string,
        @Body() convidado: Partial<Convidado>
    ) {
        const event = await this.db.buscarPorAlias(alias)
        if (!event) {
            throw new HttpException('Evento não encontrado.', 404)
        }

        const convidadoCompleto = complementarConvidado(convidado)
        await this.db.salvarConvidado(event, convidadoCompleto)
    }

    @Post('')
    async salvarEvento(@Body() evento: Evento) {
        const event = await this.db.buscarPorAlias(evento.alias)

        if (event && event.id !== evento.id) {
            throw new HttpException('Já existe um evento com esse alias.', 400)
        }

        const eventComplete = complementarEvento(this.deserializar(evento))
        await this.db.salvar(eventComplete)
    }

    @Get('validar/:alias/:id')
    async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
        const event = await this.db.buscarPorAlias(alias)
        return { valido: !event || event.id === id }
    }

    private serializar(evento: Evento) {
        if (!evento) return null
        return {
            ...evento,
            data: Data.formatar(evento.data),
        }
    }

    private deserializar(evento: any): Evento {
        if (!evento) return null
        return {
            ...evento,
            data: Data.desformatar(evento.data),
        }
    }
}
