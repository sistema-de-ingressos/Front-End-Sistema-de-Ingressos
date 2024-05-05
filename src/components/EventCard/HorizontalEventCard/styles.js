import styled from "styled-components";

export const HorizontalCardContainer = styled.div`
    display: flex;
    width: 412px;
    height: 200px;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 36px;
    background-color: var(--cinza-primario);
    box-shadow: 0 2px 19px 1px rgba(0, 0, 0, 0.25);
`

export const ImageContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`


export const TextContainer = styled.div`
    width: 55%;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`


export const LineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`



export const CardButton = styled.button`
    display: flex;
    width: 100%;
    padding: 6px 46px;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    background-color: var(--azul-primario);
    color: var(--branco-primario);
    font-size: 15px;
    
    &:hover {
        filter: brightness(140%);
    }
    
`