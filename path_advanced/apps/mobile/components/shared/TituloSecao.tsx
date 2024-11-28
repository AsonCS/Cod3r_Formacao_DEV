import { Text } from 'react-native'

import { fontBold, py4, selfStart, textXl, textZinc400 } from '@/style'

export interface Props {
    texto: string
}

export default function TituloSecao(props: Props) {
    return (
        <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>
            {props.texto}
        </Text>
    )
}
