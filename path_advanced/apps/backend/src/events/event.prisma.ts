import { Injectable } from '@nestjs/common'
import { Convidado, Evento } from 'core'
import { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class EventPrisma {
    constructor(readonly prisma: PrismaProvider) {}

    async buscarPorAlias(
        alias: string,
        complete: boolean = false
    ): Promise<Evento | null> {
        return (await this.prisma.evento.findUnique({
            select: {
                id: true,
                nome: true,
                descricao: true,
                data: true,
                local: true,
                imagem: true,
                imagemBackground: true,
                alias: true,
                senha: complete,
                publicoEsperado: complete,
                convidados: complete,
            },
            where: { alias },
        })) as any
    }

    async buscarPorId(
        id: string,
        complete: boolean = false
    ): Promise<Evento | null> {
        return (await this.prisma.evento.findUnique({
            where: { id },
            include: { convidados: complete },
        })) as any
    }

    async buscarTodos(): Promise<Evento[]> {
        return (await this.prisma.evento.findMany()) as any
    }

    async salvar(evento: Evento) {
        return await this.prisma.evento.create({
            data: {
                ...(evento as any),
                convidados: { create: evento.convidados },
            },
        })
    }

    async salvarConvidado(evento: Evento, convidado: Convidado) {
        return await this.prisma.convidado.create({
            data: {
                ...convidado,
                qtdeAcompanhantes: +(convidado.qtdeAcompanhantes ?? 0),
                evento: {
                    connect: {
                        id: evento.id,
                    },
                },
            },
        })
    }
}
