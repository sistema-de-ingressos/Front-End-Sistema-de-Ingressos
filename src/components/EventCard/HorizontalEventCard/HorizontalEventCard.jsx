import {CardButton, Header, HorizontalCardContainer, ImageContainer, LineWrapper, TextContainer,} from "./styles.js";
import {Image, Price, TextInfo, Title} from "../styles.js";
import {FaMapMarkerAlt} from "react-icons/fa";
import {LuCalendarDays} from "react-icons/lu";
import {IoTimeOutline} from "react-icons/io5";
import {PiMoneyFill} from "react-icons/pi";
import {EventDetails} from "../../EventDetails/EventDetails.jsx";


export function HorizontalEventCard({key, nome, imagemDestaque, local, data, horario, valorAtual, id}) {
    return (
        <HorizontalCardContainer key={key}>
            <ImageContainer>
                <Image src={imagemDestaque ? `data:image/jpeg;base64,${imagemDestaque}` : "http://via.placeholder.com/200"}/>
            </ImageContainer>
            <TextContainer>
                <Header>
                    <Title>{nome}</Title>
                    <TextInfo>
                        <FaMapMarkerAlt size={18}/>
                        {local}
                    </TextInfo>
                    <LineWrapper>
                        <TextInfo>
                            <LuCalendarDays size={18}/>
                            {data}
                        </TextInfo>
                        <TextInfo>
                            <IoTimeOutline size={18}/>
                            {horario}
                        </TextInfo>
                    </LineWrapper>
                    <TextInfo>
                        <PiMoneyFill size={25}/>
                        <Price>
                            {valorAtual ? "R$ " + valorAtual : "Gratuito"}
                        </Price>
                    </TextInfo>
                </Header>
                <EventDetails eventId={id} button={ <CardButton>Ver Mais</CardButton> }/>
            </TextContainer>
        </HorizontalCardContainer>


    )
}