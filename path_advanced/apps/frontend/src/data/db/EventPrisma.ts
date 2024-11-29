import { Convidado, Evento } from 'core'
import PrismaProvider from './PrismaProvider'

export async function buscarPorAlias(
    alias: string,
    complete: boolean = false
): Promise<Evento | null> {
    return await PrismaProvider(
        async (prisma) =>
            await prisma.evento.findUnique({
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
            })
    )
}

export async function buscarPorId(
    id: string,
    complete: boolean = false
): Promise<Evento | null> {
    return await PrismaProvider(
        async (prisma) =>
            await prisma.evento.findUnique({
                where: { id },
                include: { convidados: complete },
            })
    )
}

export async function buscarTodos(): Promise<Evento[]> {
    const events = await PrismaProvider(
        async (prisma) => await prisma.evento.findMany()
    )

    return (events ?? []) as Evento[]
}

export async function salvar(event: Evento) {
    await PrismaProvider(
        async (prisma) =>
            await prisma.evento.create({
                data: {
                    ...(event as any),
                    convidados: { create: event.convidados },
                },
            })
    )
}

export async function salvarConvidado(evento: Evento, convidado: Convidado) {
    await PrismaProvider(
        async (prisma) =>
            await prisma.convidado.create({
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
    )
}
