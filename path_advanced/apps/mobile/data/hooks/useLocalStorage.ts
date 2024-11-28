import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback(async function (key: string): Promise<any> {
        return await AsyncStorage.getItem(key).then((value) =>
            value ? JSON.parse(value) : null
        )
    }, [])
    const remove = useCallback(async function (key: string) {
        await AsyncStorage.removeItem(key)
    }, [])
    const save = useCallback(async function (key: string, value: any) {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    }, [])

    return { get, remove, save }
}
