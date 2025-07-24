import api from './index';
import Swal from 'sweetalert2';

// Obtener lista de mascotas
export const getMascotas = async () => {
  try {
    const response = await api.get('/mascotas');
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire('Error', 'No se encontraron mascotas.', 'warning');
    } else {
      Swal.fire('Error', 'Hubo un problema al cargar las mascotas.', 'error');
    }
    console.error('Error al obtener mascotas:', error);
    return [];
  }
};

// Crear una nueva mascota
export const crearMascota = async (datos) => {
  try {
    const response = await api.post('/mascotas/', datos);

    if (response.status === 201) {
      Swal.fire('Éxito', 'Mascota registrada correctamente.', 'success');
    }

    return response.data;
  } catch (error) {
    if (error.response?.status === 400) {
      Swal.fire('Advertencia', 'Datos inválidos. Verifica el formulario.', 'warning');
    } else {
      Swal.fire('Error', 'No se pudo registrar la mascota.', 'error');
    }
    console.error('Error al crear mascota:', error);
    throw error;
  }
};

// Eliminar mascota
export const eliminarMascota = async (id) => {
  try {
    const response = await api.delete(`/mascotas/${id}/`);

    if (response.status === 200 || response.status === 204) {
      Swal.fire('Eliminado', 'La mascota fue eliminada correctamente.', 'success');
    }

    return true;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire('Error', 'Mascota no encontrada.', 'warning');
    } else {
      Swal.fire('Error', 'No se pudo eliminar la mascota.', 'error');
    }
    console.error('Error al eliminar mascota:', error);
    return false;
  }
};