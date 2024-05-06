import styled from "styled-components";

export const TicketContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 5px 20px;
    background-color: var(--cinza-primario);
    border-radius: 12px;
`

export const Nome = styled.h3`
    font-size: 16px;
    font-weight: 500;
`

export const Info = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    color: var(--preto);
`

export const Button = styled.a`
    display: flex;
    align-content: center;
    padding: 8px;
    align-self: stretch;
    color: var(--branco-primario);
    background-color: var(--azul-primario);
    transition: 0.25s;
    border-radius: 7px;
    filter: brightness(160%);
    
    
    &:hover {
        filter: brightness(100%);
    }
    
`

export const QrButton = styled(Button)`
    background-color: var(--vermelho-primario);
`