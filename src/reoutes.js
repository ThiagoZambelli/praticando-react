import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* pode-se usar o 'index' dentro do componente Route para determinar que esse é a rota index sem a necessidade de por path="/" */}
                <Route index element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;