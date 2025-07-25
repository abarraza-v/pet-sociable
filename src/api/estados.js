import api from "./index";
import Swal from "sweetalert2";

// Obtener lista de estados
export const getEstados = async () => {
  try {
    const response = await api.get("/estados/");
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire("Advertencia", "No se encontraron estados.", "warning");
    } else {
      Swal.fire("Error", "Error al cargar los estados.", "error");
    }
    console.error("Error al obtener estados:", error);
    return [];
  }
};

// Crear un nuevo estado
export const crearEstado = async (datos) => {
  try {
    const response = await api.post("/estados/", datos);

    if (response.status === 201) {
      Swal.fire("Éxito", "Estado creado correctamente.", "success");
    }

    return response.data;
  } catch (error) {
    if (error.response?.status === 400) {
      Swal.fire(
        "Advertencia",
        "Datos inválidos. Revisa el formulario.",
        "warning"
      );
    } else {
      Swal.fire("Error", "No se pudo registrar el estado.", "error");
    }
    console.error("Error al crear estado:", error);
    throw error;
  }
};

// Eliminar un estado
export const eliminarEstado = async (id) => {
  try {
    const response = await api.delete(`/estados/${id}/`);

    if (response.status === 200 || response.status === 204) {
      Swal.fire(
        "Eliminado",
        "El estado fue eliminado correctamente.",
        "success"
      );
    }

    return true;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire("Error", "Estado no encontrado.", "warning");
    } else {
      Swal.fire("Error", "No se pudo eliminar el estado.", "error");
    }
    console.error("Error al eliminar estado:", error);
    return false;
  }
};

// Verifica si hay estados disponibles antes de continuar con el flujo de registro.
export const verificarEstadosDisponibles = async () => {
  try {
    const response = await api.get("/estados/");
    const estados = response.data;

    if (!Array.isArray(estados) || estados.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Sin estados disponibles",
        text: "Debes registrar al menos un estado antes de añadir una mascota.",
        confirmButtonText: "Entendido",
      });
      return false;
    }

    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al obtener estados",
      text: "No se pudo verificar la lista de estados. Intenta más tarde.",
    });
    console.error("Error al verificar estados:", error);
    return false;
  }
};

export const getEstadoPorId = async (id) => {
  try {
    const response = await api.get(`/estados/${id}/`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire("Advertencia", "Estado no encontrado.", "warning");
    } else {
      Swal.fire("Error", "Error al obtener el estado.", "error");
    }
    console.error("Error al obtener el estado por ID:", error);
    return null;
  }
};
