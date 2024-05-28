import {ContentContainer, IngressosContainer, MeusIngressosContainer, UserTitle} from "./styles.js";
import {useState} from "react";
import {TicketCard} from "../../components/TicketCard/TicketCard.jsx";
import {SearchHeader} from "../../components/SearchHeader/SearchHeader.jsx";
import {buscarIngressoPorCpf} from "../../services/apiService.js";
import {useTitle} from "../../utils/useTitle.js";

export function MeusIngressos({title}) {
    const [cpf, setCPF] =  useState()
    const [cliente, setCliente] =  useState()
    useTitle(title)

    const handleSubmit = async () => {
        try {
            const response = await buscarIngressoPorCpf(cpf)
            setCliente(response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <MeusIngressosContainer>
            <SearchHeader
                title={"Meus Ingressos"}
                subtitle={"Busque seus ingressos disponíveis através do seu CPF:"}
                placeholder={"Digite seu CPF"}
                onChange={(e) => setCPF(e.target.value)}
                handleSubmit={handleSubmit}
            />
            {cliente && (
                <ContentContainer>
                    <UserTitle>Eventos de {cliente.nome}</UserTitle>
                    <IngressosContainer>
                        {cliente.ingressos ? cliente.ingressos.map((ingresso, index) =>
                            <TicketCard key={index} nome={ingresso.nome} data={ingresso.data} valor={ingresso.valor} qrCodeLink={ingresso.qrCodeLink}/>
                        ) : <p>Nenhum ingresso disponível</p>}
                    </IngressosContainer>
                </ContentContainer>
            )}

        </MeusIngressosContainer>
    )
}