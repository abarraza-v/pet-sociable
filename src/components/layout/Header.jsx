import { Link } from "react-router-dom";
import clsx from "clsx";
import estilos from "./Header.module.css";
import logo from "../../assets/petSociable.svg";

const Header = () => {
  return (
    <header>
      <nav
        className={clsx(
          "navbar",
          "navbar-expand-lg",
          "navbar-light",
          "p-4",
          "sticky-top",
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
            <li className="nav-item dropdown">
              <button
                className={clsx(
                  "nav-link",
                  "dropdown-toggle",
                  "btn",
                estilos["border-oscuro"]
                )}
                id="dropdownEstados"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                Gestión de Estados
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownEstados">
                <li>
                  <Link className="dropdown-item" to="/estados/crear">
                    Crear Estado
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/estados/listar">
                    Listar Estados
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
