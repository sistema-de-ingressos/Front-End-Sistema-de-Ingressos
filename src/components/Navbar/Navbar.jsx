import {NavbarContainer, NavbarImage, NavbarLink, NavbarLinks, NavbarLogo} from "./styles.js";
import logo from '../../assets/images/logo.svg'

export function Navbar() {

    const navbarLinks = [
        {
            nome: "Página Principal",
            to: "/",
        },
        {
            nome: "Eventos",
            to: "/eventos",
        },
        {
            nome: "Meus Ingressos",
            to: "/meus-ingressos",
        }
    ]


    return (
        <NavbarContainer>
            <NavbarLogo href="/">
                <NavbarImage alt={"Logo da TicketFlow"} src={logo}/>
            </NavbarLogo>
            <NavbarLinks>
                {navbarLinks.map((link, index) =>
                    <NavbarLink key={index} to={link.to}>{link.nome}</NavbarLink>
                )}
            </NavbarLinks>
        </NavbarContainer>
    )
}
