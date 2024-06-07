import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 100%;
    
    & > div {
        width: 100%;
        height: 450px;
        padding: 0 50px;
    }
`

export const Title =  styled.h1`
    color: var(--preto);
    font-size: 25px;
    font-weight: 700;
    margin-left: 30px;
`