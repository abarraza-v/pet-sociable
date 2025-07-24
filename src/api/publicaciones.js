import api from './index';
import Swal from 'sweetalert2';

// Obtener todas las publicaciones
export const getPublicaciones = async () => {
  try {
    const response = await api.get('/publicaciones/');
    return response.data;
  } catch (error) {
    Swal.fire('Error', 'Error al cargar las publicaciones.', 'error');
    console.error('Error al obtener publicaciones:', error);
    return [];
  }
};

// Obtener detalle de una publicación por ID (opcional)
export const getPublicacionPorId = async (id) => {
  try {
    const response = await api.get(`/publicaciones/${id}/`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      Swal.fire('Advertencia', 'Publicación no encontrada.', 'warning');
    } else {
      Swal.fire('Error', 'Error al cargar los datos de la publicación.', 'error');
    }
    console.error(`Error al obtener publicación ${id}:`, error);
    return null;
  }
};

// Crear nueva publicación con FormData (incluye imagen, mascota, estado, etc.)
export const crearPublicacion = async (formData) => {
  try {
    const response = await api.post('/publicaciones/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 201) {
      Swal.fire('Éxito', 'Publicación creada correctamente.', 'success');
    }

    return response.data;
  } catch (error) {
    if (error.response?.status === 400) {
      Swal.fire('Advertencia', 'Datos inválidos. Verifica los campos del formulario.', 'warning');
    } else {
      Swal.fire('Error', 'No se pudo registrar la publicación.', 'error');
    }
    console.error('Error al crear publicación:', error);
    throw error;
  }
};