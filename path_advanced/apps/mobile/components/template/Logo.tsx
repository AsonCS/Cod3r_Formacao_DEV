import { useFonts } from 'expo-font'
import { Image, Text, View } from 'react-native'

import {
    alignCenter,
    flexRow,
    text3Xl,
    textBlue500,
    textCenter,
    textWhite,
    textZinc400,
    w4_5,
} from '@/style'

export default function Logo() {
    const [loaded] = useFonts({
        Righteous: require('@/assets/fonts/Righteous-Regular.ttf'),
    })
    const font = { fontFamily: loaded ? 'Righteous' : 'auto' }

    if (!font) return null

    return (
        <View style={[alignCenter]}>
            <Image
                source={require('@/assets/images/logo.png')}
                style={{ height: 80, width: 80 }}
            />
            <View style={[flexRow]}>
                <Text style={[font, text3Xl, textWhite]}>CONVIT</Text>
                <Text style={[font, text3Xl, textBlue500]}>3 </Text>
                <Text style={[font, text3Xl, textWhite]}>DIGITAL</Text>
            </View>
            <View style={w4_5}>
                <Text style={[textZinc400, textCenter]}>
                    Crie e gerencie o convite do seu evento de forma rápida e
                    fácil, sem complicações!
                </Text>
            </View>
        </View>
    )
}
