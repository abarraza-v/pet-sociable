import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaPrincipal from "./pages/PaginaPrincipal";
import TestPage from "./pages/TestPage"; // componente para probar

import RegistroMascotasPage from "./pages/mascotas/RegistroMascotasPage";
import ListaMascotasPage from "./pages/mascotas/ListaMascotasPage";
import FormularioMascotas from "./components/mascota/FormularioMascotas";

import EstadosPage from "./pages/estados/EstadosPage";
import ListaEstados from "./components/estado/ListaEstados";
import FormularioEstados from "./components/estado/FormularioEstados";
import PublicacionesPage from "./pages/publicaciones/PublicacionesPage"
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal sin layout */}
        <Route path="/" element={<PaginaPrincipal />} />

        {/* Rutas con layout */}
        <Route element={<MainLayout />}>
          <Route path="/test" element={<TestPage />} />

          {/* Rutas anidadas de mascotas */}
          <Route path="/mascotas/crear" element={<RegistroMascotasPage />} />
          <Route path="/mascotas/listar" element={<ListaMascotasPage />} />
          <Route path="/mascotas/estados" element={<EstadosPage />} />
        </Route>

        {/* Rutas anidadas de publicaciones */}
        <Route path="/publicaciones" element={<PublicacionesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
