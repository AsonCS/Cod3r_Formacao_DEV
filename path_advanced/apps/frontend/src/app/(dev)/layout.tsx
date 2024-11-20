import React from "react";

import Pagina from "@/components/template/Pagina";

export default function Layout(
    props: React.PropsWithChildren
) {
    return (
        <Pagina>
            {props.children}
        </Pagina>
    )
}
