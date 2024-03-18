import styled from "styled-components";

const CardWrapper = styled.div`
    display: flex;
    border: 1px solid #E5E1DA;
    border-radius: 50px;
    background-color: #FBF9F1;
    text-align: center;
    box-sizing: border-box;
    margin: 2em;
    width: 60%;
    height: 40%;
    box-shadow: 6px 5px 20px  3px rgba(0, 0, 0, 0.25)
`

const LeftSideCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`

const RightSideCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    background-color: #EEEBDE;
    width: 25%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`

const UpperText = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 16px;
`

const Temperature = styled.p`
    margin: 0 auto;
    font-size: 128px;
`

const data = new Date();
const diaDaSemanaIndex = data.getDay();
const diasDaSemana = [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const diaDaSemana = diasDaSemana[diaDaSemanaIndex];
const dia = data.getDate();
const mesIndex = data.getMonth();
const mes = meses[mesIndex];

const Card = () => {
    return (
        <CardWrapper>
            <LeftSideCard> 
                <UpperText>
                    <p>Botucatu</p>
                    <p>{`${diaDaSemana}, ${dia} de ${mes}`}</p>
                </UpperText>
                <div>
                    <Temperature>21°C</Temperature>
                </div>
                <div>
                    Cards 
                </div>
            </LeftSideCard>
            <RightSideCard>
                    
            </RightSideCard>
        </CardWrapper>
    )
}

export default Card;