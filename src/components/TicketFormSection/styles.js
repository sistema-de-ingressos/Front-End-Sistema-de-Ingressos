import styled from "styled-components";

export const TicketFormSectionContainer = styled.div`
    display: flex;
    height: 100%;
    padding: 30px 40px;
    flex-direction: column;
    align-items: center;
    gap: 78px;
    overflow-y: scroll;
`

export const Title = styled.h2`
    font-size: ${({ fontSize }) => fontSize};
    color: var(--preto);
    font-weight: 600;
`

export const FormSection = styled.div`
    display: flex;
    padding: 20px 70px;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1 0 0;
    align-items: flex-start;
    gap: 50px;
    align-self: stretch;
`

export const SecaoDados = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    align-self: stretch;
`

export const Campos = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: space-between;
    column-gap: 42px;
    row-gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
`

export const SubmitButton = styled.button`
    display: flex;
    padding: 15px 85px;
    align-items: center;
    border-radius: 35px;
    background-color: var(--azul-primario);
    color: var(--branco-primario);
    font-size: 18px;
    font-weight: 700;
    
    &:hover {
        filter: brightness(140%);
    }
`

export const FinalSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Erro = styled.p`
    font-size: 15px;
    text-align: center;
    color: red;
    font-weight: 400;
`