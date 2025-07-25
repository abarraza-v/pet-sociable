import clsx from "clsx";
import FormularioMascotas from "../../components/mascota/FormularioMascotas";
import estilos from "./RegistroMascotasPage.module.css"

export default function RegistroMascotasPage() {
  return (
    <div>
      <div className={clsx("card", "p-sm-5", estilos.card)}>
        <h1 className="h2 text-center fw-bold">Registrar mascota</h1>
        <FormularioMascotas />
      </div>
    </div>
  );
}
