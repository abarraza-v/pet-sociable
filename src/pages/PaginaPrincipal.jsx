import clsx from "clsx";
import estilos from "./PaginaPrincipal.module.css";
import logo from "../assets/petSociable.svg";
import { Link } from "react-router-dom";

const PaginaPrincipal = () => {
  return (
    <main className={estilos.main}>
      <div className={estilos["container-opciones"]}>
        <img className={estilos.logo} src={logo} alt="logo" tabIndex={-1} />
        <div className={estilos["grupo-botones"]}>
          <Link to="/publicaciones" className={clsx("btn", estilos.boton)}>
            Inicio
          </Link>
          <Link to="/mascotas/crear" className={clsx("btn", estilos.boton)}>
            ¡Registra tu mascota!
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaginaPrincipal;
