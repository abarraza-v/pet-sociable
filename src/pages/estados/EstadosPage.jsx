import { NavLink, Outlet } from "react-router-dom";

export default function EstadosPage() {
  return (
    <div>
      <h2>Gestión de Estados</h2>
      <nav>
        <NavLink to="listar">Ver estados</NavLink>
        <NavLink to="crear">Registrar nuevo estado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
