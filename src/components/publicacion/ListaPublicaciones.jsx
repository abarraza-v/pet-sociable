import { useEffect, useState } from "react";
import { getPublicaciones } from "../../api/publicaciones";
import PublicacionCard from "./PublicacionCard";
import { ClipLoader } from "react-spinners";

const ListaPublicaciones = ({ nuevoDato }) => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Obtiene la lista de publicaciones desde la API y actualiza el estado.
   */
  const cargarPublicaciones = async () => {
    try {
      const data = await getPublicaciones();
      setPublicaciones(data);
    } catch (error) {
      console.error("Error al obtener publicaciones:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPublicaciones();
  }, [nuevoDato]);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <ClipLoader size={40} color={"#3b82f6"} />
        </div>
      ) : (
        <div className="container">
          <div className="row d-flex flex-column align-items-center">
            {publicaciones.map((publicacion) => (
              <PublicacionCard
                key={publicacion.id}
                publicacion={publicacion}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaPublicaciones;
