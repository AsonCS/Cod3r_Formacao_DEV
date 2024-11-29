'use client'

import useApiEvents from '@/data/hooks/useApiEvents'
import Image from 'next/image'
import Link from 'next/link'
import QRCode from 'react-qr-code'

export default function PaginaEventos() {
    const events = useApiEvents()

    return (
        <div
            className="
                gap-4
                grid
                grid-cols-1

                md:grid-cols-3
            "
        >
            {events.map((evento) => (
                <div
                    className="
                        bg-zinc-800
                        flex
                        flex-col
                        overflow-hidden
                        rounded-lg
                    "
                    key={evento.id}
                >
                    <div
                        className="
                            h-44
                            relative
                        "
                    >
                        <Image
                            alt={evento.nome}
                            className="
                                object-cover
                            "
                            fill
                            src={evento.imagem}
                        />
                    </div>
                    <div
                        className="
                            flex
                            flex-1
                            flex-col
                            gap-2
                            items-center
                            p-4
                        "
                    >
                        <span
                            className="
                                font-black
                                text-lg
                            "
                        >
                            {evento.nome}
                        </span>
                        <p
                            className="
                                flex-1
                                text-sm
                                text-zinc-400
                            "
                        >
                            {evento.descricao}
                        </p>
                        <QRCode
                            className="
                                h-44
                                w-44
                            "
                            value={JSON.stringify({
                                id: evento.id,
                                senha: evento.senha,
                            })}
                        />
                        <div
                            className="
                                flex
                                gap-5
                            "
                        >
                            <Link
                                className="
                                    botao
                                    flex-1
                                    vermelho
                                "
                                href={`/evento/admin/${evento.id}/${evento.senha}`}
                            >
                                Admin
                            </Link>
                            <Link
                                className="
                                    botao
                                    flex-1
                                    verde
                                "
                                href={`/convite/${evento.alias}`}
                            >
                                Convite
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
