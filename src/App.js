import { useState } from "react";
import Search from "./components/SearchBar/SearchBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(255,152,67);
  background: linear-gradient(0deg, rgba(255,152,67,1) 0%, rgba(255,221,149,1) 100%);
  height: 100%; 
`

const Temperature = styled.p`
  font-size: 84px;
  color: white;
`

const ClimaText = styled(Temperature)`
  font-size: 32px;
`

const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;
function App() {


  const [city, setCity] = useState({});
  const [search, setSearch] = useState('');

  const searchLocationKey = async (value) => {
    setSearch(value);
    
    try{
      const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${value}&language=pt-br`);

      if(!response.ok){
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if(data.length > 0){
        const key = data[0].Key;
        searchLocationAtt(key);
      }

    } catch(err){
      console.error(`Error fetching city data: ${err}`)
    }

  }

  const searchLocationAtt = async (key) => {
    try{
      const respClima = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apikey}&language=pt-br`)

      const dataClima = await respClima.json();

        setCity(dataClima[0]);
        console.log(dataClima[0].WeatherText);

    }catch(err){
        console.error('Não foi possível consultar pelo local: ', err)
    }
  }

  return (
    <>
      <Search onSearch={value => searchLocationKey(value)}/>
        <Container>
          <h2>Clima Atual</h2>
          <ClimaText>Predominantemente Ensolarado</ClimaText>
          <Temperature>28°C</Temperature>
        </Container>
      
    </>
  );
}

export default App;
