import { useState } from "react";
import Swal from "sweetalert2";
import { crearMascota } from "../../api/mascotas";

const FormularioMascotas = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [especieMascota, setEspecieMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [edadMascota, setEdadMascota] = useState("");
  const [descripcionMascota, setDescripcionMascota] = useState("");

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
      edad: parseInt(edadMascota),
      descripcion: descripcionMascota,
    };

    try {
      await crearMascota(mascota);
      limpiarFormulario();
    } catch (error) {
      console.error("Error al crear la mascota:", error);
    }
  };

  return (
    <>
      <h2>Registrar mascota</h2>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombreMascota"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>

        <div>
          <label>Especie:</label>
          <input
            type="text"
            name="especieMascota"
            value={especieMascota}
            onChange={(e) => setEspecieMascota(e.target.value)}
          />
        </div>

        <div>
          <label>Raza:</label>
          <input
            type="text"
            name="razaMascota"
            value={razaMascota}
            onChange={(e) => setRazaMascota(e.target.value)}
          />
        </div>

        <div>
          <label>Edad:</label>
          <input
            type="number"
            name="edadMascota"
            value={edadMascota}
            onChange={(e) => setEdadMascota(e.target.value)}
          />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcionMascota"
            value={descripcionMascota}
            onChange={(e) => setDescripcionMascota(e.target.value)}
          />
        </div>

        <button type="submit"> Enviar </button>
      </form>
    </>
  );
};

export default FormularioMascotas;
