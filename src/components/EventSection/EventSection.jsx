import {
    AuxiliarSection,
    CarrinhoLabel,
    CarrinhoText,
    CarrinhoTitle,
    CarrinhoTotal,
    CarrinhoWrapper,
    Descricao,
    EventoSectionContainer,
    EventoWrapper,
    Image,
    ImagemWrapper,
    Info,
    InformationsWrapper,
    InfoText,
    InfoTitle,
    IngressoCarrinho,
    Text,
    TextWrapper,
    Title
} from "./styles.js";
import {useState} from "react";

export function EventSection({idEvento}) {
    // const {data: evento, isLoading} = useQuery({
    //     queryKey: ["evento", idEvento],
    //     queryFn: () => getDetalhesEvento(idEvento)
    // })

    const [evento, setEvento] = useState({
        nome: "Concerto de Verão",
        descricao: "Lorem ipsum dolor sit amet consectetur. Diam facilisis quis nisl ac fames turpis quam sit non. Diam turpis cursus et amet cras placerat posuere. Mattis habitasse ac nam erat viverra aliquet tortor. Purus sollicitudin amet pretium phasellus augue a.",
        local: "Teatro Municipal",
        data: "10 de junho de 2024",
        horario: "20:00",
        valor: "R$20,00",
        subtotal: "R$ 20,00",
        taxa: "R$ 2,00",
        total: "R$ 22,00",
        imagem: null,
    })

    return (
        <EventoSectionContainer>
            <CarrinhoWrapper>
                <CarrinhoTitle>Carrinho</CarrinhoTitle>
                <IngressoCarrinho>
                    <Text fontSize={"12px"} fontWeight={"500"}>1x - Ingresso para {evento.nome}</Text>
                    <Text fontSize={"14px"} fontWeight={"500"}>{evento.valor}</Text>
                </IngressoCarrinho>
                <AuxiliarSection>
                    <CarrinhoLabel>Subtotal:</CarrinhoLabel>
                    <CarrinhoText>{evento.subtotal}</CarrinhoText>
                </AuxiliarSection>
                <AuxiliarSection>
                    <CarrinhoLabel>Taxa:</CarrinhoLabel>
                    <CarrinhoText>{evento.taxa}</CarrinhoText>
                </AuxiliarSection>
                <AuxiliarSection>
                    <CarrinhoTotal>Total:</CarrinhoTotal>
                    <CarrinhoTotal>{evento.total}</CarrinhoTotal>
                </AuxiliarSection>
            </CarrinhoWrapper>
            <EventoWrapper>
                <ImagemWrapper>
                    <Image src={evento.imagem ? `data:image/jpeg;base64,${evento.imagem}` : "http://via.placeholder.com/530x250"}/>
                </ImagemWrapper>
                <TextWrapper>
                    <Title>{evento.nome}</Title>
                    <Descricao>
                        {evento.descricao}
                    </Descricao>
                    <InformationsWrapper>
                        <Info>
                            <InfoTitle>Local do Evento</InfoTitle>
                            <InfoText>{evento.local}</InfoText>
                        </Info>
                        <Info>
                            <InfoTitle>Data</InfoTitle>
                            <InfoText>{evento.data}</InfoText>
                        </Info>
                        <Info>
                            <InfoTitle>Horário</InfoTitle>
                            <InfoText>{evento.horario}</InfoText>
                        </Info>
                        <Info>
                            <InfoTitle>Valor</InfoTitle>
                            <InfoText>{evento.valor}</InfoText>
                        </Info>
                    </InformationsWrapper>
                </TextWrapper>
            </EventoWrapper>
        </EventoSectionContainer>
    )
}