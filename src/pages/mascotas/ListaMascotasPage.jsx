import clsx from "clsx";
import ListaMascotas from "../../components/mascota/ListaMascotas";
import estilos from "./RegistroMascotasPage.module.css";

export default function RegistroMascotasPage() {
  return (
    <div>
      <h1 className="h2 text-center mb-4 fw-bold">Lista de Mascotas</h1>
      <ListaMascotas />
    </div>
  );
}
