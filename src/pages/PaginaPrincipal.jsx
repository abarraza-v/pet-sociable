import clsx from 'clsx';
import estilos from "./PaginaPrincipal.module.css";
import logo from "../assets/petSociable.svg";

const PaginaPrincipal = () => {
  return (
    <main className={estilos.main}>
      <div className={estilos["container-opciones"]}>
        <img className={estilos.logo} src={logo} alt="logo" tabIndex={-1}/>
        <div className={estilos["grupo-botones"]}>
          <button className={clsx('btn', estilos.boton)}> Registra tu mascota </button>
          <button className={clsx('btn', estilos.boton)}> test </button>
        </div>
      </div>
    </main>
  );
};

export default PaginaPrincipal;