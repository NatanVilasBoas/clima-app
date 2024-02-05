import styled from "styled-components";
import { useCityContext } from "../context/City";

const Container = styled.div`
    margin: 3vw;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`

const Title = styled.h1`
    font-size: 40px;
    text-align: center;
    border-bottom: 1px solid black;
`

const Card = styled.div`
    border: 1px solid #E5E1DA;
    padding: 1.1em;
    border-radius: 16px;
    background-color: #FBF9F1;
`

const CardWind = styled(Card)`
    display: flex;
    justify-content: space-around;
`

const Detalhes = () => {

    const { city, cityName } = useCityContext();

    return (
        <section>
            {city ? (
                <>
                    <button>Voltar</button>
                    <Title>Clima em {cityName}</Title>
                    <Container>
                        <Card>
                            <h3>Máxima:</h3>
                            <p>{city.TemperatureSummary.Past12HourRange.Maximum.Metric.Value}°C</p>
                        </Card>
                        <Card>
                            <h3>Mínima:</h3>
                            <p>{city.TemperatureSummary.Past12HourRange.Minimum.Metric.Value}°C</p>
                        </Card>
                        <Card>
                            <h3>Sensação Térmica:</h3>
                            <p>{`${city.RealFeelTemperature.Metric.Value}°C`}</p>
                            <p>{city.RealFeelTemperature.Metric.Phrase}</p>
                        </Card>
                        <Card>
                            <h3>Humidade Relativa:</h3>
                            <p>{city.RelativeHumidity}%</p>
                        </Card>
                        <CardWind>
                            <div>
                                <h3>Vento:</h3>
                                <p>{city.Wind.Direction.Degrees}° {city.Wind.Direction.Localized}</p>
                            </div>
                            <div>
                                <h3>Velocidade:</h3>
                                <p>{city.Wind.Speed.Metric.Value}km/h</p>
                            </div>
                        </CardWind>
                    </Container>
                </>
            ) : (
                <p>Falha ao obter os detalhes da temperatura</p>
            )}
        </section >
    )
}

export default Detalhes;