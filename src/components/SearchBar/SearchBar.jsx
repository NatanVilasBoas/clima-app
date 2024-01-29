import styled from 'styled-components';

const SearchBar = styled.input`
    width: 90%;
    height: 2.5em;
    padding: 0.3em 1em;
    box-sizing: border-box;
    border-radius: 12px 0 0 12px;
    border: none;
`;

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    height: 8em;
    background-color: #AAD7D9;
`;

const CustomButton = styled.button`
    width: 6em;
    box-sizing: content-box;
    height: 2.4em;
    border: none;
    cursor:pointer;
    border-radius: 0 12px 12px 0;
`

const Search = () => {
    return(
        <Container>
            <SearchBar type="text" placeholder="Digite a cidade, estado, país"/>
            <CustomButton>Pesquisar</CustomButton>
        </Container>
    )
}

export default Search