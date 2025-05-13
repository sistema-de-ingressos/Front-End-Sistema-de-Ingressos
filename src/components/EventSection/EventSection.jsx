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
import {useQuery} from "@tanstack/react-query";
import {getDetalhesCarrinho} from "../../services/apiService.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";

export function EventSection({idEvento}) {
    const { data: evento, error } = useQuery({
        queryKey: ["evento", idEvento],
        queryFn: () => getDetalhesCarrinho(idEvento)
    });

    if (error) {
        return <div>Error loading event details.</div>;
    }

    return (
        evento && (
            <EventoSectionContainer>
                <CarrinhoWrapper>
                    <CarrinhoTitle>Carrinho</CarrinhoTitle>
                    <IngressoCarrinho>
                        <Text fontSize={"12px"} fontWeight={"500"}>1x - Ingresso para {evento.nomeDoEvento}</Text>
                        <Text fontSize={"14px"} fontWeight={"500"}>{evento.valor ? formatNumberToBRL(evento.valor) : "Gratuito"}</Text>
                    </IngressoCarrinho>
                    <AuxiliarSection>
                        <CarrinhoLabel>Subtotal:</CarrinhoLabel>
                        <CarrinhoText> {evento.valor ? formatNumberToBRL(evento.valor) : "Gratuito"}</CarrinhoText>
                    </AuxiliarSection>
                    <AuxiliarSection>
                        <CarrinhoLabel>Taxa:</CarrinhoLabel>
                        <CarrinhoText>{evento.taxa ? formatNumberToBRL(evento.taxa) : "Gratuito"}</CarrinhoText>
                    </AuxiliarSection>
                    <AuxiliarSection>
                        <CarrinhoTotal>Total:</CarrinhoTotal>
                        <CarrinhoTotal>{evento.total ? formatNumberToBRL(evento.total) : "Gratuito"}</CarrinhoTotal>
                    </AuxiliarSection>
                </CarrinhoWrapper>
                <EventoWrapper>
                    <ImagemWrapper>
                        <Image src={evento.imagemDestaque ? `data:image/jpeg;base64,${evento.imagemDestaque}` : "https://placehold.co/530x250/FFF/A6A6A6"} alt="Event" />
                    </ImagemWrapper>
                    <TextWrapper>
                        <Title>{evento.nomeDoEvento}</Title>
                        <Descricao>{evento.descricao}</Descricao>
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
                                <InfoText>{evento.valor ? formatNumberToBRL(evento.valor) : "Gratuito"}</InfoText>
                            </Info>
                        </InformationsWrapper>
                    </TextWrapper>
                </EventoWrapper>
            </EventoSectionContainer>
        )
    );
}