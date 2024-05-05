import styled from "styled-components";

export const VerticalCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 38px;
    background-color: var(--cinza-primario);
    box-shadow: 4px 4px 20.7px 0 rgba(0, 0, 0, 0.25);
    width: 310px;
    height: 370px;
    padding-bottom: 15px;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`


export const ImageContainer = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`

export const Body = styled.div`
    display: flex;
    padding: 0px 15px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`

export const Informations = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    column-gap: 9px;
    row-gap: 10px;
    align-self: stretch;
`


export const CardButton = styled.button`
    display: flex;
    padding: 6px 46px;
    justify-content: center;
    align-items: center;

    background-color: var(--azul-primario);
    color: var(--branco-primario);
    font-size: 15px;
    
    &:hover {
        filter: brightness(140%);
    }
    
`