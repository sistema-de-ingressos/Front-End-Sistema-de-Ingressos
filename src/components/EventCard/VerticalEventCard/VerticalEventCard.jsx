import {Image, Price, TextInfo, Title} from "../styles.js";
import {FaMapMarkerAlt} from "react-icons/fa";
import {LuCalendarDays} from "react-icons/lu";
import {IoTimeOutline} from "react-icons/io5";
import {PiMoneyFill} from "react-icons/pi";
import {Body, CardButton, ImageContainer, Informations, VerticalCardContainer} from "./styles.js";
import {EventDetails} from "../../EventDetails/EventDetails.jsx";
import {formatNumberToBRL} from "../../../utils/numberUtils.js";

export function VerticalEventCard({nome, imagemDestaque, local, data, horario, valorAtual, id}) {
    return (
        <VerticalCardContainer key={id}>
            <ImageContainer>
                <Image src={imagemDestaque ? `data:image/jpeg;base64,${imagemDestaque}` : "https://placehold.co/200/D1D1D1/EEE"}/>
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
                            {valorAtual ? formatNumberToBRL(valorAtual)  : "Gratuito"}
                        </Price>
                    </TextInfo>
                </Informations>
            </Body>
            <EventDetails button={<CardButton>Ver Mais</CardButton>} eventId={id}/>



        </VerticalCardContainer>
    )
}