import logo from "../../assets/petSociable.svg"
import estilos from "./Footer.module.css"
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={clsx("bg-dark", estilos.footer)}>
        <div className={clsx("flex-column","d-flex", "justify-content-center", "align-items-center", "p-2", "text-light", estilos["borde-gris-arriba"])}>
            <img className={estilos.logo} src={logo} alt="logo" />
            <span className={estilos["texto-pequeño"]}>© PetSociable. Desarrollado por Alejandro Barraza y Angel Medina</span>
        </div>
    </footer>
  );
};

export default Footer;
