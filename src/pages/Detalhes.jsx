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
    margin: 0;
    padding: 1em;
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

const Button = styled.button`
    position: fixed;
    background-color: transparent;
    border: none;
    cursor: pointer;
    top: 2em;
    left: 1em;
`

const Detalhes = () => {

    const { city } = useCityContext();

    return (
        <section style={{ backgroundColor: "#E9F6FF" }}>
            {city ? (
                <>
                    <Link to="/">
                        <Button><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-45)" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17L7 7M7 7V16M7 7H16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></Button>
                    </Link>
                    <Title>Clima em {city.Name}</Title>
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