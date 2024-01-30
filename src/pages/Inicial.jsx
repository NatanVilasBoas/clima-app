import Footer from "../components/Footer/Footer";
import LinkWord from "../components/LinkWord/LinkWord";
import Search from "../components/SearchBar/SearchBar";
import { useState } from "react";
import styled from "styled-components";

const Context = styled.section`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.mostlyCloudy};
    height: 100vh; 
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
`

const ClimaText = styled(Temperature)`
  font-size: 32px;
`

const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;




const Inicial = () => {

    const [city, setCity] = useState({});
    const [search, setSearch] = useState('');

    const searchLocationKey = async (value) => {
        setSearch(value);

        try {
            const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${value}&language=pt-br`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.length > 0) {
                const key = data[0].Key;
                searchLocationAtt(key);
            }

        } catch (err) {
            console.error(`Error fetching city data: ${err}`)
        }

    }

    const searchLocationAtt = async (key) => {
        try {
            const respClima = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apikey}&language=pt-br`)

            const dataClima = await respClima.json();

            setCity(dataClima[0]);
            console.log(dataClima[0].WeatherText);

        } catch (err) {
            console.error('Não foi possível consultar pelo local: ', err)
        }
    }

    return (
        <Context>
            <Search onSearch={value => searchLocationKey(value)} />
            <Content>
                <h2>Clima Atual</h2>
                <ClimaText>Predominantemente Ensolarado</ClimaText>
                <Temperature>28°C</Temperature>
                <LinkWord link="#" text="Mais detalhes"/>
            </Content>
            <Footer />
        </Context>
    )
}

export default Inicial;