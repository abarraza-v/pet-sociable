import ListaPublicaciones from "../../components/publicacion/ListaPublicaciones";
import BotonPublicar from "./BotonPublicar";
import { useState, useEffect } from "react";

export default function PublicacionesPage() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [nuevoDato, setNuevoDato] = useState(null);

  const cargarPublicaciones = async () => {
    const datos = await getPublicaciones();
    setPublicaciones(datos);
  };

  useEffect(() => {
    cargarPublicaciones();
  }, [publicaciones]);

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
