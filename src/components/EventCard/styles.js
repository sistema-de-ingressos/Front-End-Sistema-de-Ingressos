import styled from "styled-components";

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const TextInfo = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
`

export const Price = styled.span`
    font-size: 18px;
    font-weight: 700;
`

export const Title = styled.h2`
    color: var(--preto);
    font-size: 1.4rem;
    font-weight: 700;
`