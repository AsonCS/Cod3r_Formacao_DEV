import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect } from 'react'
import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import EventoNaoEncontrado from '@/components/evento/EventoNaoEncontrado'
import InformacoesEvento from '@/components/evento/InformacoesEvento'
import Estatistica from '@/components/shared/Estatistica'
import TituloSecao from '@/components/shared/TituloSecao'
import ListaConvidados from '@/components/evento/ListaConvidados'
import useEvents from '@/data/hooks/useEvents'
import {
    bgBlack,
    bgRed500,
    button,
    flex1,
    flexRow,
    fontBold,
    gapX2,
    gapY4,
    p4,
    py4,
    roundedLg,
    selfCenter,
    textWhite,
    w4_5,
    wFull,
} from '@/style'
import { colors } from '@/style/colors'

export default function EventDetail() {
    const { id } = useLocalSearchParams()
    const { event, remove, select } = useEvents()
    const router = useRouter()

    useEffect(() => {
        select(id as string)
    }, [id])

    if (!event) {
        return <EventoNaoEncontrado />
    }

    const presentes = event.convidados.filter((c) => c.confirmado) ?? []
    const ausentes = event.convidados.filter((c) => !c.confirmado) ?? []
    const totalConvidados = presentes.reduce(
        (total, c) => total + c.qtdeAcompanhantes + 1,
        0
    )

    return (
        <SafeAreaView style={[bgBlack, flex1, p4]}>
            <ScrollView contentContainerStyle={[gapY4, py4]}>
                <Image
                    source={{ uri: event.imagem }}
                    style={[{ height: 200 }, roundedLg, wFull]}
                />
                <InformacoesEvento evento={event} />
                <View style={[{ marginTop: 40 }, flexRow, gapX2]}>
                    <Estatistica
                        imagem={require('@/assets/images/convidados.png')}
                        texto="Expectativa"
                        valor={event.publicoEsperado}
                    />
                    <Estatistica
                        imagem={require('@/assets/images/confirmados.png')}
                        texto="Confirmações"
                        valor={presentes.length}
                    />
                    <Estatistica
                        imagem={require('@/assets/images/acompanhantes.png')}
                        texto="Total"
                        valor={totalConvidados}
                    />
                </View>
                <TituloSecao texto="Presenças confirmadas" />
                <ListaConvidados convidados={presentes} />
                <TituloSecao texto="Ausências confirmadas" />
                <ListaConvidados convidados={ausentes} />
                <Pressable
                    onPress={() => {
                        remove(event.id)
                        router.back()
                    }}
                    style={[button, bgRed500, selfCenter, w4_5]}
                >
                    <AntDesign color={colors.white} name="delete" size={24} />
                    <Text style={[fontBold, textWhite]}>Excluir Evento</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}
