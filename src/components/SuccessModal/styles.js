import styled from "styled-components";

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 30px;

    & h1{
        text-align: center;
        font-size: 20px;
        font-weight: 500;
    }

    & svg {
        font-size: 70px;
        color: var(--azul-primario);
    }
`