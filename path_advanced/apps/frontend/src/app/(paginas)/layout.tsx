import React from 'react'

import Pagina from '@/components/template/Pagina'
import { ProvedorContextoEvento } from '@/data/contexts/ContextoEvento'
import { ProvedorContextoMensagens } from '@/data/contexts/ContextoMensagens'

export default function Layout(props: React.PropsWithChildren) {
    return (
        <ProvedorContextoMensagens>
            <ProvedorContextoEvento>
                <Pagina>{props.children}</Pagina>
            </ProvedorContextoEvento>
        </ProvedorContextoMensagens>
    )
}
