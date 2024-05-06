import styled from "styled-components";

export const SearchContainer = styled("search")`
    display: flex;
    justify-content: space-between;
    padding: 5px 5px 5px 20px;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    background-color: var(--branco-primario);
    max-height: 80px;
`

export const SearchInput = styled.input.attrs({
    type: "text"
})`
    background-color: transparent;
    width: 100%;
    border: none;
    font-size: 15px;
    padding: 5px;
    
    &:focus {
        outline: none;
    }
`

export const ButtonContainer = styled.button`
    display: flex;
    padding: 10px;
    background-color: var(--azul-primario);
    border-radius: 7px;

    color: var(--branco-primario);
    font-weight: 500;
    font-size: 15px;
    
    transition: 0.25s;
    
    &:hover {
        filter: brightness(140%);
    }
    
    
`