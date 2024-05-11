import {useParams} from "react-router-dom";
import {ComprarIngressoContainer} from "./styles.js";
import {EventSection} from "../../components/EventSection/EventSection.jsx";
import {TicketFormSection} from "../../components/TicketFormSection/TicketFormSection.jsx";

export function ComprarIngresso() {
    const {idEvento} = useParams();

    return (
        <ComprarIngressoContainer>
            <EventSection idEvento={idEvento}/>
            <TicketFormSection idEvento={idEvento}/>
        </ComprarIngressoContainer>
    )
}