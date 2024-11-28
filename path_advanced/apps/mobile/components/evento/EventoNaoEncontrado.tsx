import { View, Text } from 'react-native'

import { bgBlack, centerGrow, textWhite } from '@/style'

export default function EventoNaoEncontrado() {
    return (
        <View style={[centerGrow, bgBlack]}>
            <Text style={[textWhite]}>Evento não encontrado!</Text>
        </View>
    )
}
