import { Text, View } from 'react-native'
import { Link } from 'expo-router'

import { alignCenter, bgRed500, flex1, justifyCenter, text2Xl } from '@/style'

export default function Index() {
    return (
        <View style={[alignCenter, flex1, justifyCenter]}>
            <Text style={[bgRed500, text2Xl]}>Events</Text>
            <Link href="/index">
                <Text>Index</Text>
            </Link>
        </View>
    )
}
