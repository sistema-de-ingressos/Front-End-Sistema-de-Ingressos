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
import {cloneElement, useState} from "react";
import {LuCalendarDays} from "react-icons/lu";
import {PiMoneyFill} from "react-icons/pi";
import {IoTimeOutline} from "react-icons/io5";
import {FaMapMarkerAlt} from "react-icons/fa";
import {BsFillPeopleFill} from "react-icons/bs";

export function EventDetails({button, eventId}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Create a function to get the details of the event by its ID

    const [evento,setEvento] = useState({
        nome: 'Evento',
        imagens: ["https://picsum.photos/id/18/500/300","https://picsum.photos/id/19/500/300", "https://picsum.photos/id/29/500/300", "https://picsum.photos/id/33/500/300"],
        data: '12/04',
        local: 'Local do Evento',
        horario:'12:00',
        lote: '1º Lote',
        valor: 'R$ 12,00',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales dui nec felis blandit ultricies. Maecenas nec eros vitae nunc blandit vulputate ut sed leo. Quisque sed quam lectus. Maecenas ut volutpat ipsum. Vivamus mattis volutpat eros ac consectetur. Donec maximus orci ac malesuada aliquam. Nulla gravida consequat urna, et pretium metus vestibulum at. Curabitur mattis tortor metus, eget tempus eros vulputate efficitur. Nulla mattis vestibulum libero ut accumsan. Nam placerat magna euismod, rutrum justo nec, porttitor felis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu justo leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        id: eventId,
    })

    return (
        <>
            {cloneElement(button, {onClick: onOpen})}

            <Modal isOpen={isOpen} size={"xl"} isCentered scrollBehavior={"inside"} onClose={onClose}>
                <ModalOverlay />
                <ModalContent height={550} p={2} borderRadius={20}>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton my={1} mx={3} size={"lg"}>
                        <IoIosCloseCircleOutline size={25}/>
                    </ModalCloseButton>
                    <ModalBody mt={3}>
                        <ContentWrapper>
                            <CarouselContainer>
                                <Carousel arrows infinite autoplay>
                                    {evento.imagens.map((imagem, index) =>
                                        <ImageContainer key={index}>
                                            <Image src={imagem}/>
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
                                            <FaMapMarkerAlt size={18}/>
                                            {evento.local}
                                        </Info>
                                        <Info>
                                            <IoTimeOutline/>
                                            {evento.horario}
                                        </Info>
                                        <Info>
                                            <LuCalendarDays/>
                                            {evento.data}
                                        </Info>
                                    </Section>
                                    <Section>
                                        <Info>
                                            <PiMoneyFill/>
                                            {evento.valor}
                                        </Info>
                                        <Info>
                                            <BsFillPeopleFill />
                                            {evento.lote}
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
        </>
    )
}