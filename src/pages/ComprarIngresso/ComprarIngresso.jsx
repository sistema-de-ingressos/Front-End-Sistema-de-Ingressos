import {useParams} from "react-router-dom";
import {ComprarIngressoContainer} from "./styles.js";
import {EventSection} from "../../components/EventSection/EventSection.jsx";
import {TicketFormSection} from "../../components/TicketFormSection/TicketFormSection.jsx";
import {useTitle} from "../../utils/useTitle.js";

export function ComprarIngresso({title}) {
    const {idEvento} = useParams();
    useTitle(title)

    return (
        <ComprarIngressoContainer>
            <EventSection idEvento={idEvento}/>
            <TicketFormSection idEvento={idEvento}/>
        </ComprarIngressoContainer>
    )
}