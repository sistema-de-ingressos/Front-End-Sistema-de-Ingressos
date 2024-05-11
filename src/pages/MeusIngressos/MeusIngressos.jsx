import {ContentContainer, IngressosContainer, MeusIngressosContainer, UserTitle} from "./styles.js";
import {useState} from "react";
import {TicketCard} from "../../components/TicketCard/TicketCard.jsx";
import {SearchHeader} from "../../components/SearchHeader/SearchHeader.jsx";

export function MeusIngressos() {
    const [cpf, setCPF] =  useState()
    const [usuario, setUsuario] =  useState({
        nome: 'João Arthur',
        ingressos: [],
    })

    return (
        <MeusIngressosContainer>
            <SearchHeader
                title={"Meus Ingressos"}
                subtitle={"Digite seu CPF para buscar seus ingressos:"}
                placeholder={"XXX.XXX.XXX-XX"}
                onChange={(e) => setCPF(e.target.value)}
                // Ainda será implementado requisição de busca para API
                handleSubmit={() => console.log(cpf)}
            />
            <ContentContainer>
                <UserTitle>Eventos de {usuario.nome}</UserTitle>
                <IngressosContainer>
                    {usuario.ingressos.map((ingresso, index) =>
                        <TicketCard key={index} nome={ingresso.nome} data={ingresso.data} valor={ingresso.valor} qrCodeLink={ingresso.qrCodeLink}/>
                    )}
                    <TicketCard data={"13/04"} nome={"Nome do Evento"} valor={"R$ 12,00"} key={1}/>
                    <TicketCard data={"12/04"} nome={"Nome do Evento"} valor={"R$ 12,00"} key={1}/>
                    <TicketCard data={"12/04"} nome={"Nome do Evento"} valor={"R$ 12,00"} key={1}/>
                    <TicketCard data={"12/04"} nome={"Nome do Evento"} valor={"R$ 12,00"} key={1}/>
                </IngressosContainer>
            </ContentContainer>
        </MeusIngressosContainer>
    )
}