import styled from "styled-components";

export const EventoSectionContainer = styled.div`
    display: flex;
    width: 35%;
    min-width: 570px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    align-self: stretch;
    height: max-content;
    min-height: 100%;
    background-color: var(--cinza-primario);
    
`

export const CarrinhoWrapper = styled.div`
    display: flex;
    padding: 12px 25px;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-self: stretch;
    align-items: flex-start;
    background-color: var(--branco-primario);
    border-radius: 25px;
`

export const CarrinhoTitle = styled.h3`
    color: var(--preto);
    font-size: 15px;
    font-weight: 600;
`

export const IngressoCarrinho = styled.div`
    display: flex;
    padding: 4px 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background-color: var(--cinza-primario);
    border-radius: 8px;
`
export const AuxiliarSection = styled.div`
    display: flex;
    padding: 0 8.844px;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`

export const Text = styled.p`
    color: var(--preto);
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
`

export const InfoTitle = styled(Text)`
    font-weight: 700;
    font-size: 12px;
`

export const InfoText = styled(Text)`
    font-size: 18px;
    font-weight: 400;
`

export const CarrinhoLabel = styled(Text)`
    font-weight: 600;
    font-size: 13px;
`

export const CarrinhoText = styled(Text)`
    font-weight: 500;
    font-size: 13px;
    width: 18%;
    text-align: end;
`

export const CarrinhoTotal = styled(Text)`
    font-size: 17px;
    font-weight: 700;
    width: 18%;
    text-align: end;
`


export const EventoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    align-self: stretch;
`

export const ImagemWrapper = styled.div`
    display: flex;
    height: 250px;
    align-self: stretch;
    border-radius: 50px;
    overflow: hidden;
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const TextWrapper = styled.div`
    display: flex;
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
`

export const Title = styled.h2`
    color: var(--preto);
    font-size: 30px;
    font-weight: 700;
`

export const Descricao = styled.p`
    color: var(--preto);
    text-align: justify;
    font-size: 14px;
    font-weight: 500;
`

export const InformationsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    flex-wrap: wrap;
    row-gap: 18px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`
