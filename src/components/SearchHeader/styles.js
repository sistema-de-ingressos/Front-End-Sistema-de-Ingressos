import styled from "styled-components";

export const HeaderContainer =  styled.div`
    display: flex;
    width: 100%;
    padding: 32px ${({ padding }) => padding};
    background-color: var(--cinza-primario);
    flex-direction: column;
    gap: 15px;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: stretch;
`

export const Title = styled.h1`
    color: var(--preto);
    font-size: 26px;
    font-weight: 700;
`

export const Subtitle = styled.h4`
    color: var(--preto);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
`