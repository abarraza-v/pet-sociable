import { useState } from "react";
import Swal from "sweetalert2";
import { crearMascota } from "../../api/mascotas";
import { useNavigate } from "react-router-dom";

const FormularioMascotas = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [especieMascota, setEspecieMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [edadMascota, setEdadMascota] = useState("");
  const [descripcionMascota, setDescripcionMascota] = useState("");

  const navigate = useNavigate();

  const validarFormularioMascotas = () => {
    if (!nombreMascota.trim()) {
      Swal.fire("Error", "El nombre de la mascota es obligatorio.", "error");
      return false;
    }

    if (!especieMascota.trim()) {
      Swal.fire("Error", "La especie de la mascota es obligatoria.", "error");
      return false;
    }

    if (!razaMascota.trim()) {
      Swal.fire("Error", "La raza de la mascota es obligatoria.", "error");
      return false;
    }

    const edad = parseInt(edadMascota, 10);
    console.log("Edad parseada:", edad);
    if (edadMascota === "" || isNaN(edadMascota) || parseInt(edadMascota) < 0) {
      Swal.fire(
        "Error",
        "La edad debe ser un número válido mayor o igual a 0.",
        "error"
      );
      return false;
    }

    if (!descripcionMascota.trim()) {
      Swal.fire(
        "Error",
        "La descripción de la mascota es obligatoria.",
        "error"
      );
      return false;
    }

    return true; // Si todas las validaciones pasan
  };

  const limpiarFormulario = () => {
    setNombreMascota("");
    setEspecieMascota("");
    setRazaMascota("");
    setEdadMascota("");
    setDescripcionMascota("");
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    console.log("Se clickeo el botón enviar");
    console.log(validarFormularioMascotas());
    if (!validarFormularioMascotas()) return;

    const mascota = {
      nombre: nombreMascota,
      especie: especieMascota,
      raza: razaMascota,
      edad_aproximada: parseInt(edadMascota),
      descripcion: descripcionMascota,
    };

    try {
      await crearMascota(mascota);
      const result = await Swal.fire({
        title: "Mascota registrada",
        text: "¿Deseas ir a la lista de mascotas?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Ver lista",
        cancelButtonText: "Continuar aquí",
      });

      if (result.isConfirmed) {
        navigate("/mascotas/listar", {
          state: { mensaje: "Mascota registrada correctamente." },
        });
      } else {
        limpiarFormulario();
      }
    } catch (error) {
      console.error("Error al crear la mascota:", error);
    }
  };

  return (
    <>
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label htmlFor="nombreMascota" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreMascota"
            name="nombreMascota"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="especieMascota" className="form-label">
            Especie:
          </label>
          <input
            type="text"
            className="form-control"
            id="especieMascota"
            name="especieMascota"
            value={especieMascota}
            onChange={(e) => setEspecieMascota(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="razaMascota" className="form-label">
            Raza:
          </label>
          <input
            type="text"
            className="form-control"
            id="razaMascota"
            name="razaMascota"
            value={razaMascota}
            onChange={(e) => setRazaMascota(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="edadMascota" className="form-label">
            Edad:
          </label>
          <input
            type="number"
            className="form-control"
            id="edadMascota"
            name="edadMascota"
            value={edadMascota}
            onChange={(e) => setEdadMascota(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="descripcionMascota" className="form-label">
            Descripción:
          </label>
          <textarea
            className="form-control no-resize"
            id="descripcionMascota"
            name="descripcionMascota"
            rows="3"
            value={descripcionMascota}
            onChange={(e) => setDescripcionMascota(e.target.value)}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary w-100">
          Enviar Datos
        </button>
        </div>
        
      </form>
    </>
  );
};

export default FormularioMascotas;
