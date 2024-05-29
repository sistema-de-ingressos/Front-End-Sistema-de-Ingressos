import {CarouselSection} from "../../components/CarouselSection/CarouselSection.jsx";

import {PaginaPrincipalContainer} from "./styles.js";
import {getEventosDestaque, getEventosProximos} from "../../services/apiService.js";
import {useTitle} from "../../utils/useTitle.js";

export function PaginaPrincipal({title}) {
    useTitle(title)

    return (
        <PaginaPrincipalContainer>
            <CarouselSection title={"Eventos em destaque"} apiService={getEventosDestaque}/>
            <CarouselSection title={"Eventos Próximos"} apiService={getEventosProximos}/>
        </PaginaPrincipalContainer>
    )
}