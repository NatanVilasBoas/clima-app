import { Outlet } from "react-router-dom";
import Tema from "../tema/Tema";

const PaginaBase = () => {
    return(
        <Tema>
            <Outlet/>
        </Tema>
    )
}

export default PaginaBase;