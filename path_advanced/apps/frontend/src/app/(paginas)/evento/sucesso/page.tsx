'use client'
import { useEffect, useState } from 'react'

import InformacoesEvento from '@/components/evento/InformacoesEvento'
import CopiarClipboard from '@/components/shared/CopiarClipboard'
import Janela from '@/components/shared/Janela'
import useEvento from '@/data/hooks/useEvento'
import { Evento } from 'core'
import { IconFingerprint, IconLink } from '@tabler/icons-react'
import AcessarViaQrCode from '@/components/evento/AcessarViaQrCode'

/*
http://localhost:3000/convite/test-4
http://localhost:3000/evento/admin/7a4110e7-c82a-4661-925d-635f2cf2aca2
*4#8pN6%19C#z$79SMG*
*/

export default function EventoSucesso() {
    const { evento } = useEvento()

    const [urlAtual, setUrlAtual] = useState('')

    useEffect(() => {
        setUrlAtual(window.location.origin)
    }, [])

    return evento ? (
        <Janela
            label="Seu evento foi criado:"
            titulo={evento.nome}
            imagem={evento.imagem}
            background={evento.imagemBackground}
        >
            <InformacoesEvento esconderNome event={evento as Evento} />
            <div className="flex gap-5 items-center py-6">
                <div className="flex-1 flex flex-col gap-5">
                    <CopiarClipboard
                        icone={IconLink}
                        label="Link para Convidar"
                        texto={`${urlAtual}/convite/${evento.alias}`}
                    />
                    <CopiarClipboard
                        icone={IconLink}
                        label="Link Administrador"
                        texto={`${urlAtual}/evento/admin/${evento.id}`}
                    />
                    <CopiarClipboard
                        icone={IconFingerprint}
                        label="Senha Administrador"
                        texto={evento.senha ?? ''}
                        observacao="Essa senha não será exibida novamente, então guarde-a com cuidado!"
                    />
                </div>
                <AcessarViaQrCode event={evento as Evento} />
            </div>
        </Janela>
    ) : null
}
