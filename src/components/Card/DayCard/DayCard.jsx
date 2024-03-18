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
`

const Text = styled.p`
    margin: 0 auto;
`

const DayCard = () => {
    return(
        <Card>
            <Text>Terça</Text>
            <Text style={{fontSize: '24px'}}>18°</Text>
            <icon></icon>
        </Card>
    )
}

export default DayCard;