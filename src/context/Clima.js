import { createContext, useContext, useState } from "react";
import { WiCloudy, WiDayCloudy, WiDayCloudyGusts, WiDaySunny, WiHail } from "react-icons/wi";


export const ClimaContext = createContext();
ClimaContext.displayName = "Wheater";

export default function ClimaProvider({ children }) {
    const [clima, setClima] = useState({});

    return (
        <ClimaContext.Provider value={{ clima, setClima }}>
            {children}
        </ClimaContext.Provider>
    )
}

export function useClimaContext() {
    const { clima, setClima } = useContext(ClimaContext);

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

    const temperatura = clima.Temperature ? Math.round(parseFloat(clima.Temperature.Metric.Value)) : 0;

    return {
        clima,
        setClima,
        temperatura,
        icons,
        changeIcon
    }
}