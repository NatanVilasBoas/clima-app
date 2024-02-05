import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Search from "../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCityContext } from "../context/City";

const Context = styled.section`
    display: flex;
    flex-direction: column;
    background: ${props => {
        const temperatura = props.temperatura;


        if (temperatura < 15) {
            return props.theme.cold;
        } else if (temperatura < 25) {
            return props.theme.warm;
        } else {
            return props.theme.hot;
        }
    }};
    height: 100vh; 
    transition: background 0.5s ease;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const Temperature = styled.p`
  font-size: 84px;
  color: white;
  margin: 40px 0 120px 0;
`

const ClimaText = styled.p`
  font-size: 32px;
  color: white;
`

const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;

const Inicial = () => {

    const {city, addCity, cityName, addCityName} = useCityContext();
    const [search, setSearch] = useState('');
    const [temperatura, setTemperatura] = useState(0);
    const [key, setKey] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${search}&language=pt-br`);
    
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
    
                const data = await response.json();
    
                if (data.length > 0) {
                    const keyCity = data[0].Key;
                    setKey(data[0].Key)
                    const respClima = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${keyCity}?apikey=${apikey}&language=pt-br&details=true`)
    
                    const dataClima = await respClima.json();

                    setTemperatura(dataClima[0].Temperature.Metric.Value);

                    addCity(dataClima[0]);
                    addCityName(search);
                }

            } catch (err) {
                console.error(`Error fetching city data: ${err}`);
            }
        }

        if(search){
            fetchData();
        }
    
    }, [search, addCity, addCityName]);

    return (
        <Context temperatura={temperatura}>
            <Search onSearch={value => setSearch(value)} />
            {city.WeatherText ? (
                <Content>
                    <p style={{fontSize: '18px', fontWeight: '600', margin: '0'}}>Clima Atual em {cityName}</p>
                    <ClimaText>{city.WeatherText}</ClimaText>
                    <Temperature>{`${Math.round(parseFloat(city.Temperature.Metric.Value))}°C`}</Temperature>
                    <Link to={`/${key}`}>
                        <p>Mais detalhes</p>
                    </Link>
                </Content>
            ) : (<Content>
                <h2>Seja bem-Vindo</h2>
                <ClimaText>Pesquise por sua cidade</ClimaText>
            </Content>)
            }
            <Footer />
        </Context>
    )
}

export default Inicial;