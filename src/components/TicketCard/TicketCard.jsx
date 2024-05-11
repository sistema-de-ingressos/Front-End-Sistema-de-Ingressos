import {Button, Buttons, Data, Nome, QrButton, TicketContainer, Valor} from "./styles.js";
import {LuCalendarDays} from "react-icons/lu";
import {PiMoneyFill} from "react-icons/pi";
import {TbQrcode} from "react-icons/tb";
import {CgMoreO} from "react-icons/cg";

export function TicketCard({key, nome, data, valor, qrCodeLink}) {
    return (
        <TicketContainer key={key}>
            <Nome>{nome}</Nome>
            <Data>
                <LuCalendarDays size={20}/>
                {data}
            </Data>
            <Valor>
                <PiMoneyFill size={20}/>
                {valor}
            </Valor>
            <Buttons>
                <QrButton href={qrCodeLink}>
                    <TbQrcode size={22}/>
                </QrButton>
                <Button>
                    <CgMoreO size={22}/>
                </Button>
            </Buttons>
        </TicketContainer>
    )
}