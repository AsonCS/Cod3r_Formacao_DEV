'use client'
import { useContext } from 'react'

import FormEvento from '@/components/evento/FormEvento'
import Janela from '@/components/shared/Janela'
import ContextoEvento from '@/data/contexts/ContextoEvento'

export default function PaginaEvento() {
    const { evento } = useContext(ContextoEvento)
    return (
        <div>
            <Janela
                label="Qual evento vamos criar?"
                titulo={evento?.nome ? evento?.nome : 'Novo Evento'}
                imagem={evento?.imagem}
                background={evento?.imagemBackground}
            >
                <FormEvento />
            </Janela>
        </div>
    )
}
