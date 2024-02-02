import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;


const Detalhes = () => {
    const {id} = useParams();
    const [cityDetails, setCityDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            
            try{
                const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${apikey}&language=pt-br&details=true`);
    
                const data = await response.json();
                setCityDetails(data[0]);

            } catch(e){
                console.error('Falha na consulta: ', e);
            }

        }

        fetchData();
    }, [])

    return(
        <section>
            {cityDetails ? (
                <div>
                    {cityDetails.RealFeelTemperature && cityDetails.RealFeelTemperature.Metric ? (
                        <div>
                            <h3>Sensação Térmica:</h3>
                            <p>{`${cityDetails.RealFeelTemperature.Metric.Value}°C`}</p>
                            <p>{cityDetails.RealFeelTemperature.Metric.Phrase}</p>
                            <h3>Humidade Relativa:</h3>
                            <p>{cityDetails.RelativeHumidity}%</p>
                            <h3>Vento:</h3>
                            <p>{cityDetails.Wind.Direction.Degrees}° {cityDetails.Wind.Direction.Localized}</p>
                            <h5>Velocidade:</h5>
                            <p>{cityDetails.Wind.Speed.Metric.Value}km/h</p>
                            <h3>Máxima:</h3>
                            <p>{cityDetails.TemperatureSummary.Past12HourRange.Maximum.Metric.Value}°C</p>
                            <h3>Mínima:</h3>
                            <p>{cityDetails.TemperatureSummary.Past12HourRange.Minimum.Metric.Value}°C</p>
                        </div>
                    ) : (
                        <p>Falha ao obter os detalhes da temperatura</p>
                    )}
                </div>
            ) : (
                <div>
                    <p>Carregando...</p>
                </div>
            )}
        </section>
    )
}

export default Detalhes;