import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
const PaginaBase = () => {

    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default PaginaBase;