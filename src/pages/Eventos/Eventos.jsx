import {SearchHeader} from "../../components/SearchHeader/SearchHeader.jsx";
import {useState} from "react";
import {EventosPageContainer, EventosWrapper} from "./styles.js";
import {HorizontalEventCard} from "../../components/EventCard/HorizontalEventCard/HorizontalEventCard.jsx";

export function Eventos() {
    const [input, setInput] = useState();
    const [eventos, setEventos] = useState([])

    return (
        <EventosPageContainer>
            <SearchHeader
                title={"Explore os eventos disponíveis"}
                subtitle={"Encontre uma infinidade de eventos para todos os gostos!"}
                placeholder={"Busque eventos pelo nome"}
                padding={"25%"}
                onChange={(e) => setInput(e.target.value)}

                // Ainda será implementado requisição de busca para API
                handleSubmit={() => console.log(input)}
            />
            <EventosWrapper>
                {eventos.map((evento, index) =>
                    <HorizontalEventCard
                        key={index}
                        id={evento.id}
                        nome={evento.nome}
                        data={evento.data}
                        horario={evento.horario}
                        local={evento.local}
                        preco={evento.preco}
                    />
                )}
                <HorizontalEventCard
                    key={1}
                    id={1}
                    nome={"Nome do Evento"}
                    data={"12/04"}
                    horario={"12:00"}
                    local={"Local do Evento"}
                    preco={"15,00"}
                />
                <HorizontalEventCard
                    key={1}
                    id={1}
                    nome={"Nome do Evento"}
                    data={"12/04"}
                    horario={"12:00"}
                    local={"Local do Evento"}
                    preco={"15,00"}
                />
                <HorizontalEventCard
                    key={1}
                    id={1}
                    nome={"Nome do Evento"}
                    data={"12/04"}
                    horario={"12:00"}
                    local={"Local do Evento"}
                    preco={"15,00"}
                />
                <HorizontalEventCard
                    key={1}
                    id={1}
                    nome={"Nome do Evento"}
                    data={"12/04"}
                    horario={"12:00"}
                    local={"Local do Evento"}
                    preco={"15,00"}
                />
                <HorizontalEventCard
                    key={1}
                    id={1}
                    nome={"Nome do Evento"}
                    data={"12/04"}
                    horario={"12:00"}
                    local={"Local do Evento"}
                    preco={"15,00"}
                />
            </EventosWrapper>
        </EventosPageContainer>
    )
}