import {Image, Price, TextInfo, Title} from "../styles.js";
import {FaMapMarkerAlt} from "react-icons/fa";
import {LuCalendarDays} from "react-icons/lu";
import {IoTimeOutline} from "react-icons/io5";
import {PiMoneyFill} from "react-icons/pi";
import {Body, CardButton, ImageContainer, Informations, VerticalCardContainer} from "./styles.js";
import {EventDetails} from "../../EventDetails/EventDetails.jsx";

export function VerticalEventCard({nome, img, local, data, horario, preco, id}) {
    return (
        <VerticalCardContainer key={id}>
            <ImageContainer>
                <Image src={img ? img : "https://picsum.photos/300/200"}/>
            </ImageContainer>
            <Body>
                <Title>{nome}</Title>
                <Informations>
                    <TextInfo>
                        <LuCalendarDays size={18}/>
                        {data}
                    </TextInfo>
                    <TextInfo>
                        <IoTimeOutline size={18}/>
                        {horario}
                    </TextInfo>
                    <TextInfo>
                        <FaMapMarkerAlt size={18}/>
                        {local}
                    </TextInfo>
                    <TextInfo>
                        <PiMoneyFill size={25}/>
                        <Price>
                            {preco ? "R$ " + preco : "Gratuito"}
                        </Price>
                    </TextInfo>
                </Informations>
            </Body>
            <EventDetails button={<CardButton>Ver Mais</CardButton>} eventId={id}/>



        </VerticalCardContainer>
    )
}