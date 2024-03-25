import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: .3rem 1.2em;
    margin: 3rem .4rem 1rem;
    border-radius: 20px;
    box-shadow: 4px 6px 8px 0px rgba(0, 0, 0, 0.25);
    height: 7.8rem;
    width: 4.6rem;
    border: ${props => props.className ? '1px solid black' : ''};
    transition: 0.2s ease-in-out;

    &:hover{
        transform: translateX(-2px);
        transform: translateY(-5px);
        box-shadow: 6px 8px 10px 0px rgba(0, 0, 0, 0.25);
    }

    @media(max-width: 780px){
        height: 7rem;
        width: 4.6rem;
    }
`

const Text = styled.p`
    margin: 0 auto;

    @media(max-width: 780px){
        font-size: 12px;
    }
`

const TextTempMax = styled(Text)`
    font-size: 24px;

    @media(max-width: 780px){
        font-size: 16px;
    }
`

const TextTempMin = styled(Text)`
    font-size: 12px;
`

const DayCard = ({ dia, select, max, min, icone }) => {
    return (
        <Card className={select}>
            <Text>{dia}</Text>
            <TextTempMax>{max}°C</TextTempMax>
            <TextTempMin>{min}°C</TextTempMin>
            {icone}
        </Card>
    )
}

export default DayCard;