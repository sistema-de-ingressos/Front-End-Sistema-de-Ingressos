import {CarouselSection} from "../../components/CarouselSection/CarouselSection.jsx";

import {PaginaPrincipalContainer} from "./styles.js";

export function PaginaPrincipal() {
    return (
        <PaginaPrincipalContainer>
            <CarouselSection title={"Eventos em destaque"} />
            <CarouselSection title={"Eventos Próximos"} />
        </PaginaPrincipalContainer>
    )
}