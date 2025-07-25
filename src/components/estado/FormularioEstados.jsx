import { useState } from "react";
import Swal from "sweetalert2";
import { crearEstado } from "../../api/estados";
import { useNavigate } from "react-router-dom";

const FormularioEstados = () => {
  const [nombreEstado, setNombreEstado] = useState("");

  const navigate = useNavigate();

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
      const result = await Swal.fire({
        title: "Estado registrado",
        text: "¿Deseas ir a la lista de estados?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Ver lista",
        cancelButtonText: "Continuar aquí",
      });

      if (result.isConfirmed) {
        navigate("/estados/listar", {
          state: { mensaje: "Estado registrado correctamente." },
        });
      } else {
        limpiarFormulario();
      }
    } catch (error) {
      console.error("Error al crear el estado:", error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-4">Registrar estado</h2>
        <form onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label htmlFor="nombreEstado" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreEstado"
              name="nombreEstado"
              value={nombreEstado}
              onChange={(e) => setNombreEstado(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormularioEstados;
