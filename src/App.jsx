import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import TestPage from "./pages/TestPage"; // componente para probar
import MascotasPage from "./pages/mascotas/MascotasPage";
import ListaMascotas from "./components/mascota/ListaMascotas";
import FormularioMascotas from "./components/mascota/FormularioMascotas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/test" element={<TestPage />} />
        {/* Rutas anidadas de mascotas */}
        <Route path="/mascotas" element={<MascotasPage />}>
          <Route path="listar" element={<ListaMascotas />} />
          <Route path="crear" element={<FormularioMascotas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
