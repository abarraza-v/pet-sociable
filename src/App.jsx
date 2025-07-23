import PaginaPrincipal from "./pages/PaginaPrincipal";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from "./pages/TestPage"; // componente para probar

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
