import api from "./index";
import Swal from "sweetalert2";

// Obtener lista de mascotas
export const getMascotas = async () => {
  try {
    const response = await api.get("/mascotas");
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire("Error", "No se encontraron mascotas.", "warning");
    } else {
      Swal.fire("Error", "Hubo un problema al cargar las mascotas.", "error");
    }
    console.error("Error al obtener mascotas:", error);
    return [];
  }
};

// Crear una nueva mascota
export const crearMascota = async (datos) => {
  try {
    const response = await api.post("/mascotas/", datos);

    return response.data;
  } catch (error) {
    if (error.response?.status === 400) {
      Swal.fire(
        "Advertencia",
        "Datos inválidos. Verifica el formulario.",
        "warning"
      );
    } else {
      Swal.fire("Error", "No se pudo registrar la mascota.", "error");
    }
    console.error("Error al crear mascota:", error);
    throw error;
  }
};

// Eliminar mascota
export const eliminarMascota = async (id) => {
  try {
    const response = await api.delete(`/mascotas/${id}/`);

    if (response.status === 200 || response.status === 204) {
      Swal.fire(
        "Eliminado",
        "La mascota fue eliminada correctamente.",
        "success"
      );
    }

    return true;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire("Error", "Mascota no encontrada.", "warning");
    } else {
      Swal.fire("Error", "No se pudo eliminar la mascota.", "error");
    }
    console.error("Error al eliminar mascota:", error);
    return false;
  }
};

// Verifica si hay al menos una mascota registrada antes de crear una publicación
export const verificarMascotasDisponibles = async () => {
  try {
    const response = await api.get("/mascotas/");
    const mascotas = response.data;

    if (!Array.isArray(mascotas) || mascotas.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Sin mascotas registradas",
        text: "Debes registrar al menos una mascota antes de crear una publicación.",
        confirmButtonText: "Entendido",
      });
      return false;
    }

    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al obtener mascotas",
      text: "No se pudo verificar la lista de mascotas. Intenta más tarde.",
    });
    console.error("Error al verificar mascotas:", error);
    return false;
  }
};

export const getMascotaPorId = async (id) => {
  try {
    const response = await api.get(`/mascotas/${id}/`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire("Advertencia", "Mascota no encontrada.", "warning");
    } else {
      Swal.fire("Error", "Error al obtener la mascota.", "error");
    }
    console.error("Error al obtener la mascota por ID:", error);
    return null;
  }
};
