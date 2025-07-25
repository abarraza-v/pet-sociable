import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaPrincipal from "./pages/PaginaPrincipal";
import TestPage from "./pages/TestPage"; // componente para probar

import MascotasPage from "./pages/mascotas/MascotasPage";
import ListaMascotas from "./components/mascota/ListaMascotas";
import FormularioMascotas from "./components/mascota/FormularioMascotas";

import EstadosPage from "./pages/estados/EstadosPage";
import ListaEstados from "./components/estado/ListaEstados";
import FormularioEstados from "./components/estado/FormularioEstados";

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
          <Route path="/mascotas" element={<MascotasPage />}>
            <Route path="listar" element={<ListaMascotas />} />
            <Route path="crear" element={<FormularioMascotas />} />
          </Route>

          {/* Rutas anidadas de estados */}
          <Route path="/estados" element={<EstadosPage />}>
            <Route path="listar" element={<ListaEstados />} />
            <Route path="crear" element={<FormularioEstados />} />
          </Route>
        </Route>

        {/* Rutas anidadas de publicaciones */}
        <Route path="/publicaciones" element={<PublicacionesPage />}>
          <Route path="listar" element={<ListaPublicaciones />} />
          <Route path="crear" element={<FormularioPublicaciones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
