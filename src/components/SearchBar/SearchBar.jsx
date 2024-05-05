import {ButtonContainer, SearchContainer, SearchInput} from "./styles.js";

export function SearchBar( {placeholder, handleSubmit, onChange} ) {

    return (
        <SearchContainer>
            <SearchInput placeholder={placeholder} onChange={onChange}/>
            <ButtonContainer onClick={handleSubmit}>
                Buscar
            </ButtonContainer>
        </SearchContainer>
    )
}