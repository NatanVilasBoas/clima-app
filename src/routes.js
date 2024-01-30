import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicial from './pages/Inicial';
import PaginaBase from './pages/PaginaBase';
import Detalhes from './pages/Detalhes';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaBase />}>
                    <Route index element={<Inicial />}></Route>
                    <Route path='/:id' element={<Detalhes />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;