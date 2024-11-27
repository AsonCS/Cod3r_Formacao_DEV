import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

import { colors } from '@/style/colors'

function options(icon: string, label: string): any {
    return {
        headerShown: false,
        tabBarActiveTintColor: colors.blue[500],
        tabBarInactiveTintColor: colors.zinc[400],
        tabBarLabel: label,
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
        },
        tabBarStyle: {
            backgroundColor: colors.zinc[950],
            borderTopWidth: 0,
            height: 60,
            padding: 0,
        },
        tabBarIcon: ({ focused }: { focused: boolean }) => (
            <AntDesign
                color={focused ? colors.blue[500] : colors.zinc[400]}
                name={icon as any}
                size={24}
            />
        ),
    }
}

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={options('home', 'Início')} />
            <Tabs.Screen
                name="events"
                options={options('calendar', 'Eventos')}
            />
        </Tabs>
    )
}
