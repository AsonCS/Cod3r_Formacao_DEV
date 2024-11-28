import {
    alignCenter,
    bgZinc900,
    fontBold,
    p4,
    roundedLg,
    textCenter,
    textLg,
    textWhite,
    textXs,
    textZinc400,
    w9_10,
    wFull,
} from '@/style'
import { Evento } from 'core'
import { Image, Text, View } from 'react-native'

export interface Props {
    event: Evento
}

export default function EventCard({ event }: Props) {
    return (
        <View style={[{ overflow: 'hidden' }, bgZinc900, roundedLg]}>
            <Image
                source={{ uri: event.imagem }}
                style={[{ height: 150 }, wFull]}
            />
            <View style={[alignCenter, p4]}>
                <Text style={[fontBold, textCenter, textLg, textWhite]}>
                    {event.nome}
                </Text>
                <Text style={[textCenter, textXs, textZinc400, w9_10]}>
                    {event.descricao}
                </Text>
            </View>
        </View>
    )
}
