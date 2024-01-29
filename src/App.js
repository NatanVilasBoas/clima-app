import { useState } from "react";
import Search from "./components/SearchBar/SearchBar";

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
      {city.WeatherText && (
        <div>
          <h2>Condição Atual</h2>
          <p>Weather: {city.WeatherText}</p>
        </div>
      )}
    </>
  );
}

export default App;
