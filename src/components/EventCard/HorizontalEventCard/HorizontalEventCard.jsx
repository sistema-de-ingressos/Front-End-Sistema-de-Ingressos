import {
    CardButton,
    Header,
    HorizontalCardContainer,
    ImageContainer,
    LineWrapper,
    TextContainer,
} from "./styles.js";
import {Image, Price, TextInfo, Title} from "../styles.js";
import {FaMapMarkerAlt} from "react-icons/fa";
import {LuCalendarDays} from "react-icons/lu";
import {IoTimeOutline} from "react-icons/io5";
import {PiMoneyFill} from "react-icons/pi";


export function HorizontalEventCard({nome, img, local, data, horario, preco, id}) {
    return (
        <HorizontalCardContainer key={id}>
            <ImageContainer>
                <Image src={img ? img : "https://picsum.photos/200"}/>
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
                            {preco ? "R$ " + preco : "Gratuito"}
                        </Price>
                    </TextInfo>
                </Header>
                <CardButton>
                    Ver Mais
                </CardButton>
            </TextContainer>
        </HorizontalCardContainer>


    )
}