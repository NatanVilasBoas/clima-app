import { Outlet } from "react-router-dom";
import Tema from "../tema/Tema";
import Footer from "../components/Footer/Footer";
import { useClimaContext } from "../context/City";
import styled from "styled-components";

const Container = styled.div`
    background: ${props => {
        const temperatura = props.$temperatura;

        if (temperatura < 15) {
            return props.theme.cold;
        } else if (temperatura < 25) {
            return props.theme.warm;
        } else {
            return props.theme.hot;
        }
    }};
`

const PaginaBase = () => {

    const { temperatura } = useClimaContext();

    return (
        <Tema>
            <Container $temperatura={temperatura} >
                <Outlet />
                <Footer />
            </Container>
        </Tema>
    )
}

export default PaginaBase;