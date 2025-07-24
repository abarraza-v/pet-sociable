import api from './index';
import Swal from 'sweetalert2';

// Obtener comentarios de una publicación por su ID
export const getComentariosPorPublicacion = async (publicacionId) => {
  try {
    const response = await api.get(`/comentarios/?publicacion_id=${publicacionId}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      // No mostrar SweetAlert en este caso
      console.warn(`No hay comentarios para la publicación ${publicacionId}.`);
    } else {
      Swal.fire('Error', 'Error al cargar los comentarios.', 'error');
    }
    console.error('Error al obtener comentarios:', error);
    return [];
  }
};

// Crear nuevo comentario asociado a una publicación
export const crearComentario = async (datos) => {
  try {
    const response = await api.post('/comentarios/', datos);

    if (response.status === 201) {
      Swal.fire('Éxito', 'Comentario publicado correctamente.', 'success');
    }

    return response.data;
  } catch (error) {
    if (error.response?.status === 400) {
      Swal.fire('Advertencia', 'Comentario inválido.', 'warning');
    } else {
      Swal.fire('Error', 'No se pudo publicar el comentario.', 'error');
    }
    console.error('Error al crear comentario:', error);
    throw error;
  }
};