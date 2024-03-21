import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .3rem 1.2em;
    margin: 3rem 1rem 1rem;
    border-radius: 20px;
    box-shadow: 4px 6px 8px 0px rgba(0, 0, 0, 0.25);
    height: 6rem;
    border: ${props => props.className ? '1px solid black' : ''};
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        transform: translateX(-2px);
        transform: translateY(-5px);
        box-shadow: 6px 8px 10px 0px rgba(0, 0, 0, 0.25);
    }
`

const Text = styled.p`
    margin: 0 auto;
`

const DayCard = ({dia, select}) => {
    return(
        <Card className={select}>
            <Text>{dia}</Text>
            <Text style={{fontSize: '24px'}}>18°</Text>
            <p>Icone</p>
        </Card>
    )
}

export default DayCard;