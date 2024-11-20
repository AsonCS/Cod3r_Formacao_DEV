import { Evento } from "@/core";
import QRCode from "react-qr-code";

export interface Props {
    event: Evento
}

export default function AcessarViaQrCode(
    props: Props
) {
    return (
        <div
            className="
                border
                border-zinc-800
                flex
                flex-col
                gap-4
                items-center
                justify-center
                px-4
            "
        >
            <span
                className="
                    font-light
                    text-sm
                    text-zinc-400
                "
            >
                Acessar via mobile
            </span>
            <QRCode
                className="
                    h-32
                    w-32
                "
                value={JSON.stringify({
                    senha: props.event.senha,
                    id: props.event.id
                })}
            />
        </div>
    )
}
