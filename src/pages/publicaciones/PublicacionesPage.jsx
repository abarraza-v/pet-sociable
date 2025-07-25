import clsx from "clsx";
import FormularioPublicaciones from "../../components/publicacion/FormularioPublicaciones";

export default function RegistroMascotasPage() {
  return (
      <div className={clsx("card", "p-sm-5")}>
        <h1 className="h2 text-center fw-bold">Home</h1>
        <FormularioPublicaciones />
      </div>
  );
}
