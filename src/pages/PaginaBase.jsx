import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const Container = styled.div`
    background: linear-gradient(0deg, rgba(169,201,201,1) 0%, rgba(154,211,224,1) 100%);
`

const PaginaBase = () => {

    return (
        <Container >
            <Outlet />
            <Footer />
        </Container>
    )
}

export default PaginaBase;