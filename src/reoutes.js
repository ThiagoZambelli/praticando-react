import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Footer from "components/Footer";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrado from "pages/NaoEncontrado";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        {/* pode-se usar o 'index' dentro do componente Route para determinar que esse é a rota index sem a necessidade de por path="/" */}
                        <Route index element={<Inicio />} />  
                        <Route path="/Favoritos" element={<Favoritos />} />
                        <Route path="/:id" element={<Player /> } />
                        <Route path="*" element={<NaoEncontrado />}   />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;