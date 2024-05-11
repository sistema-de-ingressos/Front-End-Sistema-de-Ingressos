import {NavbarContainer, NavbarLink, NavbarLinks, NavbarLogo} from "./styles.js";

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
        },
        {
            nome: "Administrador",
            to: "/login",
        },
    ]


    return (
        <NavbarContainer>
            <NavbarLogo href="/">TicketFlow</NavbarLogo>
            <NavbarLinks>
                {navbarLinks.map((link, index) =>
                    <NavbarLink key={index} to={link.to}>{link.nome}</NavbarLink>
                )}
            </NavbarLinks>
        </NavbarContainer>
    )
}
