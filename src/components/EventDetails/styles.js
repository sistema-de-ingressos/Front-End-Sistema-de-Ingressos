import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    background-color: var(--vermelho-primario);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
`

export const CarouselContainer = styled.div`
    border-radius: 20px;
    overflow: hidden;
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const DadosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 15px;
    align-self: stretch;
`

export const TituloContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
`

export const TituloEvento = styled.h2`
    color: var(--preto);
    font-size: 20px;
    font-weight: 700;
`

export const ComprarButton = styled(Link)`
    color: var(--branco-primario);
    display: flex;
    padding: 10px 40px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 32px;
    background: var(--azul-primario);
    transition: 0.25s;
    
    &:hover {
        filter: brightness(160%);
    }
`

export const InformationsContainer = styled.div`
    display: flex;
    align-self: center;
    align-items: flex-start;
    gap: 25px;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    color: var(--preto);
    font-weight: 700;
    font-size: 13px;
    
    & svg {
        font-size: 14px;
        max-width: 14px;
        max-height: 16px;
        object-fit: cover;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 9px;
`

export const DescricaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 15px;
    gap: 10px;
    align-self: stretch;
`

export const DescricaoTitulo = styled.h3`
    color: var(--preto);
    font-size: 16px;
    font-weight: 600;
`

export const DescricaoTexto = styled.p`
    color: var(--preto);
    text-align: justify;
    font-size: 13px;
    line-height: 120%;
    margin-bottom: 20px;
`

