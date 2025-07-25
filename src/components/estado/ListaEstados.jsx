import { useEffect, useState } from "react";
import { getEstados, eliminarEstado } from "../../api/estados";
import EstadoCard from "./EstadoCard";

const ListaEstados = () => {
  const [estados, setEstados] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Elimina un estado de la base de datos por su ID.
   *
   * Envía una solicitud DELETE a la API para eliminar el estado especificado.
   * Si la eliminación es exitosa (código de estado 204), muestra una alerta de éxito y actualiza la lista de estados.
   * Si la eliminación falla, muestra una alerta de error.
   * Captura y muestra en consola cualquier error que ocurra durante el proceso.
   *
   * @async
   * @function
   * @param {number|string} id - El identificador único del estado a eliminar.
   * @returns {Promise<void>}
   */
  const eliminarYMostrar = async (id) => {
    const eliminado = await eliminarEstado(id);
    if (eliminado) {
      cargandoEstados();
    }
  };

  /**
   * Obtiene la lista de estados desde la API y actualiza el estado correspondiente.
   * Si la solicitud es exitosa, almacena los datos recibidos y cambia el estado de carga.
   * Si ocurre un error, lo muestra en la consola.
   *
   * @async
   * @function
   * @returns {Promise<void>} No retorna ningún valor, pero actualiza el estado del componente.
   */
  const cargandoEstados = async () => {
    const response = await getEstados();
    setEstados(response);
    setLoading(false);
  };

  useEffect(() => {
    cargandoEstados();
  }, []);

  return (
    <div>
      <h2>Lista Estados</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="container">
          <div className="row">
            {estados.map((estado) => (
              <EstadoCard
                key={estado.id}
                estado={estado}
                eliminarYMostrar={eliminarYMostrar}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaEstados;
