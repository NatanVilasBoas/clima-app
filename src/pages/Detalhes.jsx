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
                        <p>{cityDetails.RealFeelTemperature.Metric.Phrase}</p>
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