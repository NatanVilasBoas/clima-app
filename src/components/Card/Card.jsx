import styled from "styled-components";
import DayCard from "./DayCard/DayCard";
import { useEffect, useState } from "react";
import wheaterService from "../../services/wheater";
import { useClimaContext } from "../../context/Clima";

const CardWrapper = styled.div`
    display: flex;
    border: 1px solid #E5E1DA;
    border-radius: 50px;
    background-color: #FBF9F1;
    text-align: center;
    margin: 2em;
    width: 65%;
    box-sizing: border-box;
    box-shadow: 6px 5px 20px  3px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    @media(max-width: 1200px){
        width: 98%;
        flex-direction: column;
    }
`

const LeftSideCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;

    @media(max-width: 1200px){
        width: 100%;    
    }
`

const RightSideCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    text-align: left;
    background-color: #EEEBDE;
    width: 25%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;

    @media(max-width: 1200px){
        font-size: 14px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px;
        width: inherit;    
        flex-direction: row;
        justify-content: space-around;
    }

    @media(max-width: 720px){
        font-size: 12px;
        gap: 12px;
        padding: 2rem 2rem 2rem 0;
    }
`

const UpperText = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 16px;
`

const TemperatureDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 0 4rem;
`

const TemperatureValue = styled.p`
    margin: 0 32px;
    font-size: 128px;
    display: inline;
    
    @media(max-width: 720px){
        font-size:64px
    }
`

const DayCardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
        display: none;
    }

    @media(max-width: 500px){
        padding: 0 0 0 8rem;
    }

    @media(max-width: 400px){
        padding: 0 0 0 12rem;
    }
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

const Card = ({ local, keyClima, icon }) => {
    const { icons, changeIcon, clima } = useClimaContext();
    const [climas, setClimas] = useState([]);

    useEffect(() => {
        const consultaPelosCLimas = async () => {
            const response = await wheaterService.buscarClimaDe5dias(keyClima);

            setClimas(response.DailyForecasts);
        }

        consultaPelosCLimas();
    }, [keyClima])

    return (
        <CardWrapper>
            <LeftSideCard>
                <UpperText>
                    <p>{local}</p>
                    <p>{`${diaDaSemana}, ${dia} de ${mes}`}</p>
                </UpperText>
                <TemperatureDisplay>
                    <TemperatureValue>{clima[0].Temperature.Metric.Value}°C</TemperatureValue>
                    <div>
                        {icons[changeIcon(icon)]}
                        <p style={{margin: "0px auto", fontSize:"16px"}}>{clima[0].WeatherText}</p>
                    </div>
                </TemperatureDisplay>
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
                <p><strong>Sensação Térmica:</strong> {clima[0].RealFeelTemperature.Metric.Value}°C</p>
                <p><strong>Precipitação:</strong> {clima[0].RelativeHumidity}%</p>
                <p><strong>Pressão:</strong> {clima[0].Pressure.Metric.Value}mb</p>
                <p><strong>Vento:</strong> {clima[0].Wind.Speed.Metric.Value}km/h</p>
            </RightSideCard>
        </CardWrapper>
    )
}

export default Card;