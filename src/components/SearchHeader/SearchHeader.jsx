import {HeaderContainer, Subtitle, Title, TitleWrapper} from "./styles.js";
import {SearchBar} from "../SearchBar/SearchBar.jsx";

export function SearchHeader({title, subtitle, handleSubmit, placeholder, onChange, padding}) {
    return (
        <HeaderContainer padding={padding ? padding : "35%"}>
            <TitleWrapper>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleWrapper>
            <SearchBar onChange={onChange} handleSubmit={handleSubmit} placeholder={placeholder}/>
        </HeaderContainer>
    )
}