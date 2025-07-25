import { useState } from "react";
import Swal from "sweetalert2";
import { crearEstado } from "../../api/estados";

const FormularioEstados = () => {
  const [nombreEstado, setNombreEstado] = useState("");

  const validarFormularioEstados = () => {
    if (!nombreEstado.trim()) {
      Swal.fire("Error", "El nombre del estado es obligatorio.", "error");
      return false;
    }

    return true; // Si la validación pasa
  };

  const limpiarFormulario = () => {
    setNombreEstado("");
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    console.log("Se clickeo el botón enviar");
    console.log(validarFormularioEstados());
    if (!validarFormularioEstados()) return;

    const estado = {
      nombre: nombreEstado,
    };

    try {
      await crearEstado(estado);
      Swal.fire('Éxito', 'Estado creado correctamente.', 'success');
      limpiarFormulario();
    } catch (error) {
      console.error("Error al crear el estado:", error);
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div className="mb-3 d-flex flex-column gap-2">
        <input
          placeholder="Nombre del Estado"
          type="text"
          className="form-control"
          id="nombreEstado"
          name="nombreEstado"
          value={nombreEstado}
          onChange={(e) => setNombreEstado(e.target.value)}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Agregar Estado"
        />
      </div>
    </form>
  );
};

export default FormularioEstados;
