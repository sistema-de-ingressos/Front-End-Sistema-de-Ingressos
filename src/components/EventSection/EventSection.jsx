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

export function EventSection({evento}) {

    return (
        <EventoSectionContainer>
            <CarrinhoWrapper>
                <CarrinhoTitle>Carrinho</CarrinhoTitle>
                <IngressoCarrinho>
                    <Text fontSize={"12px"} fontWeight={"500"}>1x - Ingresso para {evento.nomeDoEvento}</Text>
                    <Text fontSize={"14px"} fontWeight={"500"}>{evento.valor ? ` R$ ${evento.valor} ` : "Gratuito"}</Text>
                </IngressoCarrinho>
                <AuxiliarSection>
                    <CarrinhoLabel>Subtotal:</CarrinhoLabel>
                    <CarrinhoText> {evento.valor ? ` R$ ${evento.valor} ` : "Gratuito"}</CarrinhoText>
                </AuxiliarSection>
                <AuxiliarSection>
                    <CarrinhoLabel>Taxa:</CarrinhoLabel>
                    <CarrinhoText>{evento.taxa ? ` R$ ${evento.taxa} ` : "Gratuito"}</CarrinhoText>
                </AuxiliarSection>
                <AuxiliarSection>
                    <CarrinhoTotal>Total:</CarrinhoTotal>
                    <CarrinhoTotal>{evento.total ? ` R$ ${evento.total} ` : "Gratuito"}</CarrinhoTotal>
                </AuxiliarSection>
            </CarrinhoWrapper>
            <EventoWrapper>
                <ImagemWrapper>
                    <Image src={evento.imagemDestaque ? `data:image/jpeg;base64,${evento.imagemDestaque}` : "http://via.placeholder.com/530x250"}/>
                </ImagemWrapper>
                <TextWrapper>
                    <Title>{evento.nomeDoEvento}</Title>
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
                            <InfoText>{evento.valor ? ` R$ ${evento.valor} ` : "Gratuito"}</InfoText>
                        </Info>
                    </InformationsWrapper>
                </TextWrapper>
            </EventoWrapper>
        </EventoSectionContainer>
    )
}