import { ImageBackground } from 'react-native'

import { bgBlack, centerGrow } from '@/style'
import Logo from '@/components/template/Logo'

export default function Init() {
    return (
        <ImageBackground
            resizeMode="cover"
            source={require('@/assets/images/background.png')}
            style={[centerGrow, bgBlack]}
        >
            <Logo />
        </ImageBackground>
    )
}
