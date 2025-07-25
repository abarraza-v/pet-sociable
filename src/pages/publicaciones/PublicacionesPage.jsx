import ListaPublicaciones from "../../components/publicacion/ListaPublicaciones";
import BotonPublicar from "./BotonPublicar";
import { useState} from "react";

export default function PublicacionesPage() {
  const [nuevoDato, setNuevoDato] = useState(null);


  return (
    <>
      <h1 className="h2 text-center fw-bold mb-5">Home</h1>
      <div className="d-flex justify-content-center mb-4">
        <BotonPublicar setNuevoDato={setNuevoDato} />
      </div>

      <ListaPublicaciones nuevoDato={nuevoDato}/>
    </>
  );
}
