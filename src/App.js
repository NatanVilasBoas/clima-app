import { useState } from "react";
import Search from "./components/SearchBar/SearchBar";


function App() {

  const apikey = 'kYfLOAWGq2g5a2QAArgVhnIdqKrfXz9x';

  const [city, setCity] = useState({});
  const [search, setSearch] = useState('');

  const searchLocationKey = async (event) => {
    event.preventDefault();
    
    try{
      const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${search}&language=pt-br`);

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
      <Search/>
      <div>
        <input placeholder="teste" value={search} onChange={e => setSearch(e.target.value)}/>
        <button onClick={ e => searchLocationKey(e)}>Pesquisar</button>
      </div>
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
