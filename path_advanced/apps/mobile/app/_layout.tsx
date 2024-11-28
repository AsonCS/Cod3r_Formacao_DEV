import { Stack } from 'expo-router'

import { EventsProvider } from '@/data/contexts/EventsContext'
import { colors } from '@/style/colors'

export default function RootLayout() {
    return (
        <EventsProvider>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(stack)/qrcode"
                    options={{
                        headerBackTitle: 'Voltar',
                        headerStyle: {
                            backgroundColor: colors.zinc[900],
                        },
                        headerTintColor: colors.white,
                        title: 'Leitor de QR Code',
                    }}
                />
                <Stack.Screen
                    name="(stack)/eventos/[id]"
                    options={{
                        headerBackTitle: 'Voltar',
                        headerStyle: {
                            backgroundColor: colors.zinc[900],
                        },
                        headerTintColor: colors.white,
                        title: 'Detalhe do Evento',
                    }}
                />
            </Stack>
        </EventsProvider>
    )
}
