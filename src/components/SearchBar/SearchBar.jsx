import { useState } from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
    width: 90%;
    height: 2.5em;
    padding: 0.3em 1em;
    box-sizing: border-box;
    border-radius: 12px 0 0 12px;
    border: none;
    font-size: 16px;

    &:focus{
        outline: 1px solid #4E9F3D;
    }
`;

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    height: 8em;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
`;

const CustomButton = styled.button`
    width: 6em;
    box-sizing: content-box;
    height: 3em;
    border: none;
    cursor:pointer;
    border-radius: 0 12px 12px 0;
    background-color: #5DB678;
    color: white;
    font-weight: 600;
    transition: background-color ease-in-out 0.3s;

    &:hover{
        background-color: #98D8AA;
    }
    &:focus{
        border: 1px solid #5DB678;
    }
`


const Search = (props) => {
    
    const [searchValue, setSearchValue] = useState('')
    
    const aoPesquisar = (e) => {
        e.preventDefault();
        props.onSearch(searchValue);
    }

    return(
        <Container>
            <SearchBar type="text" 
                        placeholder="Digite a cidade, estado, país"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}/>
            <CustomButton onClick={aoPesquisar}>Pesquisar</CustomButton>
        </Container>
    )
}

export default Search