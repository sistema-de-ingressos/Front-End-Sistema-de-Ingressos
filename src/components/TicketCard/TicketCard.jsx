import {Button, Buttons, Data, Nome, QrButton, TicketContainer, Valor} from "./styles.js";
import {LuCalendarDays} from "react-icons/lu";
import {PiMoneyFill} from "react-icons/pi";
import {TbQrcode} from "react-icons/tb";
import {CgMoreO} from "react-icons/cg";
import {EventDetails} from "../EventDetails/EventDetails.jsx";
import {QRCodeImage} from "../QRCodeImage/QRCodeImage.jsx";

export function TicketCard({key, nome, data, total, qrCodeLink, eventId}) {
    return (
        <TicketContainer key={key}>
            <Nome>{nome}</Nome>
            <Data>
                <LuCalendarDays size={20}/>
                {data}
            </Data>
            <Valor>
                <PiMoneyFill size={20}/>
                R$ {total}
            </Valor>
            <Buttons>
                <QRCodeImage
                    button={ <QrButton> <TbQrcode size={22}/> </QrButton> }
                    qrCodeLink={qrCodeLink}
                />
                <EventDetails
                    button={<Button> <CgMoreO size={22}/> </Button>}
                    eventId={eventId}
                />
            </Buttons>
        </TicketContainer>
    )
}