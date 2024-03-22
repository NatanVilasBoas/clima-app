import { createContext, useContext, useState } from "react";
import { WiCloudy, WiDayCloudy, WiDayCloudyGusts, WiDaySunny, WiHail } from "react-icons/wi";


export const CityContext = createContext();
CityContext.displayName = "Wheater";

export default function CityProvider({ children }) {
    const [city, setCity] = useState({});

    return (
        <CityContext.Provider value={{ city, setCity }}>
            {children}
        </CityContext.Provider>
    )
}

export function useCityContext() {
    const { city, setCity } = useContext(CityContext);

    const icons = [<WiDaySunny size={40} />, <WiCloudy size={40} />, <WiHail size={40} />, <WiDayCloudyGusts size={40} />, <WiDayCloudy size={40} />]

    function changeIcon(index) {
        switch (index) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
               return 0;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                return 1;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                return 2;
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                return 3;
            default:
                return 4;
        }

    }

    function addCity(newCity) {

        setCity(newCity);
    }

    const temperatura = city.Temperature ? Math.round(parseFloat(city.Temperature.Metric.Value)) : 0;

    return {
        city,
        addCity,
        temperatura,
        icons,
        changeIcon
    }
}