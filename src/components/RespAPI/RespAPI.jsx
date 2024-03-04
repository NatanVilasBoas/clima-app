import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCityContext } from "../../context/City";
import { memo, useEffect } from "react";

const Context = styled.section`
    display: flex;
    flex-direction: column;
    background: transparent;
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

const RespAPI = ({search}) => {
    const {city, addCity, temperatura} = useCityContext();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${search}&language=pt-br`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                if (data.length > 0) {
                    const keyCity = data[0].Key;

                    if (city.Key !== keyCity) {

                        const respClima = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${keyCity}?apikey=${apikey}&language=pt-br&details=true`)

                        const dataClima = await respClima.json();

                        const cityWithKeyAndName = {
                            ...dataClima[0],
                            Key: keyCity,
                            Name: search
                        };

                        addCity(cityWithKeyAndName);
                    }
                }

            } catch (err) {
                console.error(`Error fetching city data: ${err}`);
            }
        }

        if (search) {
            fetchData();
        }

    }, [search, city, addCity]);

    return (
        <>
        <Context>
            {city.WeatherText ? (
                <Content>
                    <p style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>Clima Atual em {city.Name}</p>
                    <ClimaText>{city.WeatherText}</ClimaText>
                    <Temperature>{`${temperatura}°C`}</Temperature>
                    <Link to={`/${city.Key}`}>
                        <p>Mais detalhes</p>
                    </Link>
                </Content>
            ) : (<Content>
                <h2>Seja bem-Vindo</h2>
                <ClimaText>Pesquise por sua cidade</ClimaText>
            </Content>)
            }
            </Context>
        </>
    )
}

export default memo(RespAPI);