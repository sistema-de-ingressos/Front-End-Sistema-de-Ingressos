import {Button, Info, Nome, QrButton, TicketContainer} from "./styles.js";
import {LuCalendarDays} from "react-icons/lu";
import {PiMoneyFill} from "react-icons/pi";
import { TbQrcode } from "react-icons/tb";
import { CgMoreO } from "react-icons/cg";

export function TicketCard({id, nome, data, valor, qrCodeLink}) {
    return (
        <TicketContainer key={id}>
            <Nome>{nome}</Nome>
            <Info>
                <LuCalendarDays size={20}/>
                {data}
            </Info>
            <Info>
                <PiMoneyFill size={20}/>
                {valor}
            </Info>
            <Info>
                <QrButton href={qrCodeLink}>
                    <TbQrcode size={22}/>
                </QrButton>
                <Button>
                    <CgMoreO size={22}/>
                </Button>
            </Info>
        </TicketContainer>
    )
}