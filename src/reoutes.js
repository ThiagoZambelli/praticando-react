import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrado from "pages/NaoEncontrado";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>            
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    {/* pode-se usar o 'index' dentro do componente Route para determinar que esse é a rota index sem a necessidade de por path="/" */}
                    <Route index element={<Inicio />} />
                    <Route path="Favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrado />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;