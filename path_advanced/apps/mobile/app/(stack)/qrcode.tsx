import { CameraView } from 'expo-camera'
import { useRouter } from 'expo-router'

import useEventos from '@/data/hooks/useEvents'
import { flex1 } from '@/style'

export default function TelaQrCode() {
    const { addByQrCode } = useEventos()
    const router = useRouter()
    return (
        <CameraView
            facing="back"
            style={flex1}
            onBarcodeScanned={({ data }) => {
                addByQrCode(data)
                router.back()
            }}
        />
    )
}
