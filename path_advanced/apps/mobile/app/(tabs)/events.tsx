import { Text, View } from 'react-native'

import { alignCenter, bgRed500, flex1, justifyCenter, text2Xl } from '@/style'
import useEvents from '@/data/hooks/useEvents'

export default function Index() {
    const events = useEvents()

    return (
        <View style={[alignCenter, flex1, justifyCenter]}>
            <Text style={[bgRed500, text2Xl]}>
                Events: {events.events.map((ev) => `${ev.alias}, `)}
            </Text>
        </View>
    )
}
