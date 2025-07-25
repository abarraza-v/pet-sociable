import logo from "../../assets/petSociable.svg"
import estilos from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <img className={estilos.logo} src={logo} alt="logo" />
        </header>
    );
}

export default Header;