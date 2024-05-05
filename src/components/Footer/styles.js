import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
    width: 100%;
    background-color: var(--vermelho-primario);
    padding: 15px 30px;
    justify-content: space-between;
    
    & p {
        color: var(--branco-primario);
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
    }
`

export const LinkFooter = styled.a.attrs({
    target: '_blank'
})`
    color: var(--branco-primario);
    transition: 0.15s;
    font-weight: 700;
    
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`
