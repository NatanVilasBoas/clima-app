import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    height: 6em;
    background-color: #9BB8CD;
`;

const Footer = () => {
    return (
        <Container>
            <div> 
                <p>Criado por <a href="https://github.com/NatanVilasBoas">NatanVilasBoas</a></p>
                <p>Copyright &copy; Natan Vilas Boas - 2024</p>
            </div>
            <div>
                <h3><i>Clima-App</i></h3>
            </div>
        </Container>
    )
}

export default Footer;