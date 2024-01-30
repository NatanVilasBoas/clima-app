import styled from "styled-components";
import LinkWord from "../LinkWord/LinkWord";

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 30px 0;
    height: 2em;
    margin-top: 2em;
    background-color: #9BB8CD;
`;

const Footer = () => {
    return (
        <Container>
            <div> 
                <p>Criado por <LinkWord link="https://github.com/NatanVilasBoas" text="Natan Vilas Boas"/></p>
                <p>Copyright &copy; Natan Vilas Boas - 2024</p>
            </div>
            <div>
                <h3><i>Clima-App</i></h3>
            </div>
        </Container>
    )
}

export default Footer;