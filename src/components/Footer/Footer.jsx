import {FooterContainer, LinkFooter} from "./styles.js";

export function Footer() {
    return (
        <FooterContainer>
            <p>Todos direitos reservados - 2024 ©</p>
            <p>Desenvolvido por <LinkFooter href={"https://github.com/j0aoarthur"}>João Arthur Britto</LinkFooter> e <LinkFooter href={"https://github.com/raissaquezia"}>Raíssa Quezia</LinkFooter> </p>
        </FooterContainer>
    )
}