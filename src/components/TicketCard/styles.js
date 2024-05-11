import styled from "styled-components";

export const TicketContainer = styled.div`
    display: flex;
    width: inherit;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 5px 20px;
    background-color: var(--cinza-primario);
    border-radius: 12px;
`

export const Info = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: var(--preto);
`

export const Nome = styled(Info)`
    width: 40%;
    font-size: 18px;
    font-weight: 500;
`

export const Data = styled(Info)`
    width: 20%;
`

export const Valor = styled(Info)`
    width: 20%;
`

export const Buttons = styled(Info)`
    width: fit-content;
    justify-content: flex-end;
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
        cursor: pointer;
        filter: brightness(100%);
    }
    
`

export const QrButton = styled(Button)`
    background-color: var(--vermelho-primario);
`