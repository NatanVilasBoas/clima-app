import styled from "styled-components";

const CustomLink = styled.a`
    text-decoration: none;
    color: #206B6D;
    transition: color ease-in-out 0.3s; 

    &:hover{
        color: #61B3B6;
    }
`


const LinkWord = (props) => {
    return(
        <CustomLink href={props.link}>{props.text}</CustomLink>
    )
}


export default LinkWord;