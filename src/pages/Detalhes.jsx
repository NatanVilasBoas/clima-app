import styled from "styled-components";
import { useCityContext } from "../context/City";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Container = styled.div`
    margin: 3vw;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
`

const Title = styled.h1`
    font-size: 40px;
    text-align: center;
    border-bottom: 1px solid black;
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
`

const CardWind = styled(Card)`
    grid-row: span 2;
    grid-column: span 2;
    display: flex;
    justify-content: space-around;
`

const Detalhes = () => {

    const { city, cityName } = useCityContext();

    return (
        <section style={{ backgroundColor: "#E9F6FF" }}>
            {city ? (
                <>
                    <Link to="/">
                        <button >Voltar</button>
                    </Link>
                    <Title>Clima em {cityName}</Title>
                    <Container>
                        <CardWind>
                            <div>
                                <h3>Máxima:</h3>
                                <p>{city.TemperatureSummary.Past12HourRange.Maximum.Metric.Value}°C</p>
                            </div>
                            <div>
                                <h3>Mínima:</h3>
                                <p>{city.TemperatureSummary.Past12HourRange.Minimum.Metric.Value}°C</p>
                            </div>
                        </CardWind>
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
            <Footer />
        </section >
    )
}

export default Detalhes;