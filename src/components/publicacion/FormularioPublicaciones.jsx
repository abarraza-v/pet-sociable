import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import { getEstados, getEstadoPorId } from "../../api/estados";
import { getMascotas, getMascotaPorId } from "../../api/mascotas";
import { crearPublicacion } from "../../api/publicaciones";

const FormularioPublicaciones = ({ setNuevoDato }) => {
  const [idMascota, setIdMascota] = useState("");
  const [idEstado, setIdEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [mascotas, setMascotas] = useState([]);
  const [estados, setEstados] = useState([]);
  const inputFileRef = useRef(null);

  useEffect(() => {
    const cargarDatos = async () => {
      const mascotasObtenidas = await getMascotas();
      const estadosObtenidos = await getEstados();

      if (mascotasObtenidas.length === 0) {
        Swal.fire("Advertencia", "No hay mascotas registradas.", "warning");
      }

      if (estadosObtenidos.length === 0) {
        Swal.fire("Advertencia", "No hay estados registrados.", "warning");
      }

      setMascotas(mascotasObtenidas);
      setEstados(estadosObtenidos);
    };

    cargarDatos();
  }, []);

  const limpiarFormulario = () => {
    setIdMascota("");
    setIdEstado("");
    setDescripcion("");
    setUbicacion("");
    setImagen(null);
    if (inputFileRef.current) {
      inputFileRef.current.value = null;
    }
  };

  const validarFormularioPublicaciones = async () => {
    if (!idMascota.trim()) {
      Swal.fire(
        "Error",
        "Debe seleccionar una mascota de manera obligatoria.",
        "error"
      );
      return false;
    }

    const mascotaExiste = await getMascotaPorId(idMascota);

    if (!mascotaExiste) {
      Swal.fire(
        "Error",
        "La mascota ingresada no coincide con ninguna registrada.",
        "error"
      );
      return false;
    }

    if (!idEstado.trim()) {
      Swal.fire("Error", "El estado es obligatorio.", "error");
      return false;
    }

    const estadoExiste = await getEstadoPorId(idEstado);

    if (!estadoExiste) {
      Swal.fire(
        "Error",
        "El estado ingresado no coincide con ningún estado existente.",
        "error"
      );
      return false;
    }

    if (!descripcion.trim()) {
      Swal.fire("Error", "La descripción es obligatoria.", "error");
      return false;
    }

    if (!ubicacion.trim()) {
      Swal.fire("Error", "La ubicación es obligatoria.", "error");
      return false;
    }

    if (!imagen) {
      Swal.fire("Error", "Debes subir una imagen.", "error");
      return false;
    }

    return true;
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const esValido = await validarFormularioPublicaciones();
    if (!esValido) return;

    const formData = new FormData();
    formData.append("mascota", idMascota);
    formData.append("estado", idEstado);
    formData.append("descripcion", descripcion);
    formData.append("ubicacion", ubicacion);
    formData.append("imagen", imagen);

    try {
      await crearPublicacion(formData);
      Swal.fire("Éxito", "Publicación creada exitosamente.", "success");
      setNuevoDato(formData);
      limpiarFormulario();
    } catch (error) {
      console.error("Error al crear publicación:", error);
      Swal.fire("Error", "No se pudo crear la publicación.", "error");
    }
  };

  return (
    <form onSubmit={manejarEnvio} encType="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="mascota" className="form-label">
          Mascota:
        </label>
        <select
          className="form-select"
          id="mascota"
          value={idMascota}
          onChange={(e) => setIdMascota(e.target.value)}
        >
          <option value="">Selecciona una mascota</option>
          {mascotas.map((mascota) => (
            <option key={mascota.id} value={mascota.id}>
              {mascota.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="estado" className="form-label">
          Estado:
        </label>
        <select
          className="form-select"
          id="estado"
          value={idEstado}
          onChange={(e) => setIdEstado(e.target.value)}
        >
          <option value="">Selecciona un estado</option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.id}>
              {estado.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">
          Descripción:
        </label>
        <textarea
          className="form-control no-resize"
          id="descripcion"
          rows="3"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="ubicacion" className="form-label">
          Ubicación:
        </label>
        <input
          type="text"
          className="form-control"
          id="ubicacion"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="imagen" className="form-label">
          Imagen:
        </label>
        <input
          type="file"
          className="form-control"
          id="imagen"
          accept="image/*"
          ref={inputFileRef}
          onChange={(e) => setImagen(e.target.files[0])}
        />
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary w-100">
          Crear Publicación
        </button>
      </div>
    </form>
  );
};

export default FormularioPublicaciones;
