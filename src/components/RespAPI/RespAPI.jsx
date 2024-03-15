import styled from "styled-components";
import { Suspense, memo, useCallback, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import wheaterService from "../../services/wheater";

const Context = styled.section`
    display: flex;
    background: transparent;
    transition: background 0.5s ease;
`

const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 3vh;
  flex: 1;
`

const ClimaText = styled.p`
  font-size: 32px;
  color: white;
`

const GridContainer = styled.div`
    margin: 3vw;
    display: grid;
    text-align: center;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
`

const Card = styled.div`
    border: 1px solid #E5E1DA;
    padding: 1em;
    border-radius: 16px;
    background-color: #FBF9F1;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1)
`

const CardWind = styled(Card)`
    grid-row: span 2;
    grid-column: span 2;
    display: flex;
    justify-content: space-around;
`

const RespAPI = ({ search }) => {
    const [loading, setLoading] = useState(false);
    const [clima, setClima] = useState({});

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await wheaterService.buscarLocalCode(search);

            const respClima = await wheaterService.buscarClima(response[0].Key);
            setClima(respClima);
        } catch (err) {
            console.error(`Error fetching city data: ${err}`);
        } finally {
            setLoading(false);
        }
    }, [search])

    useEffect(() => {
        if (!search) return;

        fetchData();

    }, [search, fetchData]);

    return (
        <Suspense fallback={<Loader />}>
            <Context>
                {loading ? <Loader /> :
                    Object.keys(clima).length > 0 ? (
                        <Content>
                            <p style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>Clima Atual em {search}</p>
                            <ClimaText>{clima[0].WeatherText}</ClimaText>
                            <GridContainer>
                                <CardWind>
                                    <div>
                                        <h3>Máxima:</h3>
                                        <p>{clima[0].TemperatureSummary.Past12HourRange.Maximum.Metric.Value}°C</p>
                                    </div>
                                    <div>
                                        <h3>Mínima:</h3>
                                        <p>{clima[0].TemperatureSummary.Past12HourRange.Minimum.Metric.Value}°C</p>
                                    </div>
                                </CardWind>
                                <Card>
                                    <h3>Sensação Térmica:</h3>
                                    <p>{`${clima[0].RealFeelTemperature.Metric.Value}°C`}</p>
                                    <p>{clima[0].RealFeelTemperature.Metric.Phrase}</p>
                                </Card>
                                <Card>
                                    <h3>Humidade Relativa:</h3>
                                    <p>{clima[0].RelativeHumidity}%</p>
                                </Card>
                                <CardWind>
                                    <div>
                                        <h3>Vento:</h3>
                                        <p>{clima[0].Wind.Direction.Degrees}° {clima[0].Wind.Direction.Localized}</p>
                                    </div>
                                    <div>
                                        <h3>Velocidade:</h3>
                                        <p>{clima[0].Wind.Speed.Metric.Value}km/h</p>
                                    </div>
                                </CardWind>
                            </GridContainer>
                        </Content>
                    ) : (<Content>
                        <h2>Seja bem-Vindo</h2>
                        <ClimaText>Pesquise por sua cidade</ClimaText>
                    </Content>)
                }
            </Context>
        </Suspense>
    )
}

export default memo(RespAPI);