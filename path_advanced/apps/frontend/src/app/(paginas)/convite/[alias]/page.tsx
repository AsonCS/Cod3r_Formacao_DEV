interface Props {
    params: Promise<{ alias: string }>
}

export default async function PaginaConvite(
    props: Props
) {
    const { alias } = await props.params
    return (
        <div>
            <span>
                Convite: {alias}
            </span>
        </div>
    )
}
