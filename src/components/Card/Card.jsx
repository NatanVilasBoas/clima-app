import styled from "styled-components";
import DayCard from "./DayCard/DayCard";
import { useEffect, useState } from "react";
import wheaterService from "../../services/wheater";
import { useCityContext } from "../../context/City";

const CardWrapper = styled.div`
    display: flex;
    border: 1px solid #E5E1DA;
    border-radius: 50px;
    background-color: #FBF9F1;
    text-align: center;
    margin: 2em;
    width: 60%;
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
    margin: 0 32px;
    font-size: 128px;
    display: inline;
`

const DayCardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const data = new Date();
const mesIndex = data.getMonth();
const diaDaSemanaIndex = data.getDay();
const dia = data.getDate();
const diaDaSemana = diasDaSemana[diaDaSemanaIndex];
const mes = meses[mesIndex];
const proximosDias = [];

for (let i = 0; i < 5; i++) {
    const proximoDiaIndex = (diaDaSemanaIndex + i) % 7;
    proximosDias.push({ selected: false, dia: diasDaSemana[proximoDiaIndex] });
}

const Card = ({ temperature, city, keyCity, icon }) => {
    const { icons, changeIcon } = useCityContext();
    const [climas, setClimas] = useState([]);

    useEffect(() => {
        const consultaPelosCLimas = async () => {
            const response = await wheaterService.buscarClimaDe5dias(keyCity);

            setClimas(response.DailyForecasts);
        }

        consultaPelosCLimas();
    }, [keyCity])

    return (
        <CardWrapper>
            <LeftSideCard>
                <UpperText>
                    <p>{city}</p>
                    <p>{`${diaDaSemana}, ${dia} de ${mes}`}</p>
                </UpperText>
                <div>
                    <Temperature>{temperature}°C</Temperature>
                    {icons[changeIcon(icon)]}
                </div>
                <DayCardWrapper>
                    {climas && climas.map((day, index) => {

                        return (
                            <DayCard
                                key={index}
                                dia={proximosDias[index].dia}
                                select={proximosDias[index].dia === diaDaSemana ? true : false}
                                max={day.Temperature.Maximum.Value}
                                min={day.Temperature.Minimum.Value}
                                icone={icons[changeIcon(day.Day.Icon)]}
                            />
                        )
                    })}
                </DayCardWrapper>
            </LeftSideCard>
            <RightSideCard>
            </RightSideCard>
        </CardWrapper>
    )
}

export default Card;