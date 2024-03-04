import styled from "styled-components";


const Text = styled.div`
    font-size: 40px; 
    height: 30vh; 
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loader = () => {
    return(
        <Text>Carregando...</Text>
    )
}

export default Loader;