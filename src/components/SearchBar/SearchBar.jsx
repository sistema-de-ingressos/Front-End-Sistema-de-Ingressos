import {ButtonContainer, SearchContainer, SearchInput} from "./styles.js";

export function SearchBar( {placeholder, handleSubmit, onChange} ) {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <SearchContainer>
            <SearchInput placeholder={placeholder} onChange={onChange} onKeyDown={handleKeyDown}/>
            <ButtonContainer onClick={handleSubmit}>
                Buscar
            </ButtonContainer>
        </SearchContainer>
    )
}