import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {IoIosCloseCircleOutline} from "react-icons/io";
import {Carousel} from "antd";
import {
    CarouselContainer,
    ComprarButton,
    ContentWrapper,
    DadosContainer,
    DescricaoContainer,
    DescricaoTexto,
    DescricaoTitulo,
    Image,
    ImageContainer,
    Info,
    InformationsContainer,
    Section,
    TituloContainer,
    TituloEvento
} from "./styles.js";
import {cloneElement} from "react";
import {LuCalendarDays} from "react-icons/lu";
import {PiMoneyFill} from "react-icons/pi";
import {IoTimeOutline} from "react-icons/io5";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BsFillPeopleFill} from "react-icons/bs";
import {getDetalhesEvento} from "../../services/apiService.js";
import {useQuery} from "@tanstack/react-query";

export function EventDetails({button, eventId}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {data: evento} = useQuery({
        queryKey: ["evento", eventId],
        queryFn: () => getDetalhesEvento(eventId)
    })

    return (
        <>
            {cloneElement(button, {onClick: onOpen})}

            {evento && (
                <Modal isOpen={isOpen} size={"3xl"} isCentered scrollBehavior={"inside"} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent height={550} p={2} borderRadius={20}>
                        <ModalHeader></ModalHeader>
                        <ModalCloseButton my={1} mx={3} size={"lg"}>
                            <IoIosCloseCircleOutline size={25} />
                        </ModalCloseButton>
                        <ModalBody mt={3}>
                            <ContentWrapper>
                                <CarouselContainer>
                                    <Carousel arrows infinite autoplay>
                                        {evento.imagens && evento.imagens.length > 0 ? (
                                            evento.imagens.map((imagem, index) => (
                                                <ImageContainer key={index}>
                                                    <Image src={`data:image/jpeg;base64,${imagem}`} alt={`Evento imagem ${index}`} />
                                                </ImageContainer>
                                            ))
                                        ): (
                                            <ImageContainer>
                                                <Image src="http://via.placeholder.com/530x250?text=Não%20Possui%20Imagem" />
                                            </ImageContainer>
                                        )}

                                    </Carousel>
                                </CarouselContainer>

                                <DadosContainer>
                                    <TituloContainer>
                                        <TituloEvento>{evento.nome}</TituloEvento>
                                        <ComprarButton to={`/comprar-ingresso/${evento.id}`}>Comprar</ComprarButton>
                                    </TituloContainer>

                                    <InformationsContainer>
                                        <Section>
                                            <Info>
                                                <FaMapMarkerAlt size={18} />
                                                {evento.local}
                                            </Info>
                                            <Info>
                                                <IoTimeOutline />
                                                {evento.horario}
                                            </Info>
                                            <Info>
                                                <LuCalendarDays />
                                                {evento.data}
                                            </Info>
                                        </Section>
                                        <Section>
                                            <Info>
                                                <PiMoneyFill />
                                                {evento.valorAtual ? ` R$ ${evento.valorAtual} ` : "Gratuito"}
                                            </Info>
                                            <Info>
                                                <BsFillPeopleFill />
                                                {evento.loteAtual}º Lote
                                            </Info>
                                        </Section>
                                    </InformationsContainer>
                                </DadosContainer>
                                <DescricaoContainer>
                                    <DescricaoTitulo>Descrição do evento</DescricaoTitulo>
                                    <DescricaoTexto>
                                        {evento.descricao}
                                    </DescricaoTexto>
                                </DescricaoContainer>
                            </ContentWrapper>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}