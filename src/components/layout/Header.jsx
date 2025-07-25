import { Link } from "react-router-dom";
import clsx from "clsx";
import estilos from "./Header.module.css";
import logo from "../../assets/petSociable.svg";

const Header = () => {
  return (
    <header className="sticky-top">
      <nav
        className={clsx(
          "navbar",
          "navbar-expand-lg",
          "navbar-light",
          "px-5",
          "shadow",
          estilos["bg-clara"]
        )}
      >
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Logo" className={estilos.logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3 ms-auto">
            <li className={clsx("nav-item", estilos["border-oscuro"])}>
              <Link className="nav-link" to="/mascotas/crear">
                ¡Registra tu mascota!
              </Link>
            </li>
            <li className={clsx("nav-item", estilos["border-oscuro"])}>
              <Link className="nav-link" to="/mascotas/listar">
                Lista de Mascotas
              </Link>
            </li>
            <li className={clsx("nav-item", estilos["border-oscuro"])}>
              <Link className="nav-link" to="/publicaciones">
                Publicaciones
              </Link>
            </li>
            <li className={clsx("nav-item", estilos["border-oscuro"])}>
              <Link className="nav-link" to="/mascotas/estados">
                Gestión de Estados
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
