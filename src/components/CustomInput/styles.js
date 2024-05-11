import styled from "styled-components";
import {InputMask} from "primereact/inputmask";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
`;

export const Label = styled.label`
    color: var(--preto);
    font-size: 13px;
    font-weight: 500;
`;

const sizeMap = {
    "sm": '200px',
    "md": '280px',
    "lg": '350px'
};

const baseInputStyles = `
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 22px;
    background-color: var(--cinza-primario);
    border: none;
    max-width: ${sizeMap["md"]};
    &:focus {
        outline: none;
    }
`;

export const Input = styled.input`
    ${baseInputStyles};
    max-width: ${({ size }) => sizeMap[size] || sizeMap["md"]};
`;

export const InputMaskStyled = styled(InputMask)`
    ${baseInputStyles};
    max-width: ${({ size }) => sizeMap[size] || sizeMap["md"]};
`;