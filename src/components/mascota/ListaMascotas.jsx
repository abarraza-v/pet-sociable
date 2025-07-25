import { useEffect, useState } from "react";
import { getMascotas, eliminarMascota } from "../../api/mascotas";
import MascotaCard from "./MascotaCard";

const ListaMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Elimina un álbum de la base de datos por su ID.
   *
   * Envía una solicitud DELETE a la API para eliminar el álbum especificado.
   * Si la eliminación es exitosa (código de estado 204), muestra una alerta de éxito y actualiza la lista de mascotas.
   * Si la eliminación falla, muestra una alerta de error.
   * Captura y muestra en consola cualquier error que ocurra durante el proceso.
   *
   * @async
   * @function
   * @param {number|string} id - El identificador único del álbum a eliminar.
   * @returns {Promise<void>}
   */
  const eliminarYMostrar = async (id) => {
    const eliminado = await eliminarMascota(id);
    if (eliminado) {
      cargandoMascotas();
    }
  };

  /**
   * Obtiene la lista de mascotas desde la API y actualiza el estado correspondiente.
   * Si la solicitud es exitosa, almacena los datos recibidos y cambia el estado de carga.
   * Si ocurre un error, lo muestra en la consola.
   *
   * @async
   * @function
   * @returns {Promise<void>} No retorna ningún valor, pero actualiza el estado del componente.
   */
  const cargandoMascotas = async () => {
    const response = await getMascotas();
    setMascotas(response);
    setLoading(false);
  };

  useEffect(() => {
    cargandoMascotas();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <p className="fw-bold">Cargando...</p>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {mascotas.map((mascota) => (
              <MascotaCard
                key={mascota.id}
                mascota={mascota}
                eliminarYMostrar={eliminarYMostrar}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaMascotas;
