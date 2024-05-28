import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarContainer = styled.header`
    background-color: var(--vermelho-primario);
    padding: 15px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const NavbarLogo = styled.a`
    font-size: 25px;
    color: var(--branco-primario);
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 5px 0;
`;

export const NavbarImage = styled.img`
    height: 40px;
    object-fit: cover;
`

export const NavbarLinks = styled.nav`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const NavbarLink = styled(Link)`
    font-family: Inter, sans-serif;
    font-size: 18px;
    color: var(--branco-primario);
    font-weight: 400;
    padding: 8px 10px;
    border-radius: 15px;
    transition: 0.25s;

    &:hover {
        background-color: var(--vermelho-secundario-hover);
    }
`;