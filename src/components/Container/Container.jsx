import {Navbar} from "../Navbar/Navbar.jsx";
import {Footer} from "../Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import {ContainerWrapper, ContentWrapper} from "./styles.js";

export function Container() {
    return (
        <ContainerWrapper>
            <Navbar/>
            <ContentWrapper>
                <Outlet/>
            </ContentWrapper>
            <Footer/>
        </ContainerWrapper>
    )
}