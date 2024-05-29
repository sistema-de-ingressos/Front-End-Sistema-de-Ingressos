import {useParams} from "react-router-dom";
import {ComprarIngressoContainer} from "./styles.js";
import {EventSection} from "../../components/EventSection/EventSection.jsx";
import {TicketFormSection} from "../../components/TicketFormSection/TicketFormSection.jsx";
import {useTitle} from "../../utils/useTitle.js";
import {useQuery} from "@tanstack/react-query";
import {getDetalhesCarrinho} from "../../services/apiService.js";

export function ComprarIngresso({title}) {
    const {idEvento} = useParams();
    useTitle(title)

    const {data: evento} = useQuery({
        queryKey: ["evento", idEvento],
        queryFn: () => getDetalhesCarrinho(idEvento)
    })

    return (
        <ComprarIngressoContainer>
            {evento && (
                <>
                    <EventSection evento={evento} />
                    <TicketFormSection total={evento.total} idEvento={idEvento} />
                </>
            )}
        </ComprarIngressoContainer>
    )
}