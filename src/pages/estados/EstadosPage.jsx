import FormularioEstados from "../../components/estado/FormularioEstados";
import ListaEstados from "../../components/estado/ListaEstados";

export default function EstadosPage() {
  return (
    <>
    <h1 className="h2 fw-bold text-center mb-4">Gestión de Estados</h1>
    <div className="card shadow-sm mb-5 w-75 m-auto">
      <div className="card-body">
        <h2 className="h4 ms-2">Agregar un estado</h2>
        <FormularioEstados/>
      </div>
    </div>
    <section>
      <h2 className="h4 text-center mb-4">Lista de Estados</h2>
      <ListaEstados/>
    </section>
    
    </>
  );
}
