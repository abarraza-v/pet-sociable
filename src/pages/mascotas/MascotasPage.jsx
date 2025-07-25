import { NavLink, Outlet } from "react-router-dom";

export default function MascotasPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Gestión de Mascotas</h2>
      <nav style={{ marginBottom: "1rem" }}>
        <NavLink to="listar" style={{ marginRight: "1rem" }}>
          Ver mascotas
        </NavLink>
        <NavLink to="crear">Registrar nueva mascota</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
