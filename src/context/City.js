import { createContext, useContext, useState } from "react"


export const CityContext = createContext();
CityContext.displayName = "Wheater";

export default function CityProvider({children}){
    const [city, setCity] = useState({});
    const [cityName, setCityName] = useState('');

    return(
        <CityContext.Provider value={{city, setCity, cityName, setCityName}}>
            {children}
        </CityContext.Provider>
    )
}

export function useCityContext(){
    const {city, setCity, cityName, setCityName} = useContext(CityContext);

    function addCityName(newCityName){
        setCityName(newCityName);
    }

    function addCity(newCity){
    
        setCity(newCity);
    }

    return{
        city,
        addCity,
        cityName,
        addCityName
    }
}