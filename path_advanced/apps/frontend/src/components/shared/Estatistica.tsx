import Image from "next/image"

export interface Props {
    image: string
    text: string
    value: string | number
}

export default function Estatistica(
    props: Props
) {
    return (
        <div
            className="
                bg-zinc-900
                flex
                gap-5
                items-center
                rounded-lg
                px-6
                py-2.5
            "
        >
            <div
                className="
                    flex
                    flex-1
                    flex-col
                "
            >
                <span
                    className="
                        font-light
                        text-zinc-400
                    "
                >
                    {props.text}
                </span>
                <span
                    className="
                        text-2xl
                        font-black
                    "
                >
                    {props.value}
                </span>
            </div>
            <Image
                alt="Ícone"
                height={80}
                src={props.image}
                width={80}
            />
        </div>
    )
}
