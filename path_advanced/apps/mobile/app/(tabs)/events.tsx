import { Pressable, SafeAreaView, ScrollView } from 'react-native'

import useEvents from '@/data/hooks/useEvents'
import { alignCenter, bgBlack, flex1, gapY4, p4, py8 } from '@/style'
import EventCard from '@/components/evento/EventCard'
import { useRouter } from 'expo-router'
import SemEventos from '@/components/evento/SemEventos'
import NovoEvento from '@/components/evento/NovoEvento'

export default function Events() {
    const { events } = useEvents()
    const router = useRouter()

    return (
        <SafeAreaView style={[bgBlack, flex1, p4]}>
            <ScrollView contentContainerStyle={[gapY4, py8]}>
                {events.length > 0 ? (
                    events.map((event) => (
                        <Pressable
                            key={event.id}
                            onPress={() => router.push(`/eventos/${event.id}`)}
                        >
                            <EventCard event={event} />
                        </Pressable>
                    ))
                ) : (
                    <SemEventos />
                )}
                <NovoEvento />
            </ScrollView>
        </SafeAreaView>
    )
}
