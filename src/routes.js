import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicial from './pages/Inicial';
import PaginaBase from './pages/PaginaBase';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaBase />}>
                    <Route index element={<Inicial />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;