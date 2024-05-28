import {SearchHeader} from "../../components/SearchHeader/SearchHeader.jsx";
import {useEffect, useState} from "react";
import {EventosPageContainer, EventosWrapper} from "./styles.js";
import {HorizontalEventCard} from "../../components/EventCard/HorizontalEventCard/HorizontalEventCard.jsx";
import {buscarEventos} from "../../services/apiService.js";
import {useQuery} from "@tanstack/react-query";
import {useTitle} from "../../utils/useTitle.js";

export function Eventos({title}) {
    const [input, setInput] = useState("");
    const [eventos, setEventos] = useState([])
    useTitle(title)

    const {data} = useQuery({
        queryKey: ["eventos", "busca"],
        queryFn: () =>  buscarEventos(""),
    })

    useEffect(() => {
        if (data) {
            setEventos(data);
        }
    }, [data]);

    const handleSubmit = async () => {
        try {
            const response = await buscarEventos(input)
            setEventos(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <EventosPageContainer>
            <SearchHeader
                title={"Explore os eventos disponíveis"}
                subtitle={"Encontre uma infinidade de eventos para todos os gostos!"}
                placeholder={"Busque eventos pelo nome"}
                padding={"25%"}
                onChange={(e) => setInput(e.target.value)}
                handleSubmit={handleSubmit}
            />
            <EventosWrapper>
                {eventos ? eventos.map((evento, index) =>
                    <HorizontalEventCard
                        key={index}
                        imagemDestaque={evento.imagemDestaque}
                        id={evento.id}
                        nome={evento.nome}
                        data={evento.data}
                        horario={evento.horario}
                        local={evento.local}
                        valorAtual={evento.valorAtual}
                    />
                ) : <p>Nenhum evento encontrado</p>}
            </EventosWrapper>
        </EventosPageContainer>
    )
}