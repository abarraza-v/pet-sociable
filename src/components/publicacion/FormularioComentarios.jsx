import { useState } from 'react';
import { crearComentario } from '../../api/comentarios';
import ListaComentarios from './ListaComentarios';

const FormularioComentarios = ({ comentarios, setComentarios, publicacionId }) => {
  const [texto, setTexto] = useState('');
  const [cargando, setCargando] = useState(false);

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (texto.trim() === '') return;

    setCargando(true);

    try {
      const nuevoComentario = await crearComentario({
        texto,
        publicacion: publicacionId,
      });

      setComentarios((prev) => [...prev, nuevoComentario]);
      setTexto('');
    } catch (error) {
      console.error('Error al enviar comentario', error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <form onSubmit={manejarEnvio}>
        <div className="input-group mt-2">
          <textarea
            className="form-control no-resize"
            placeholder="Escribe tu comentario..."
            rows={2}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            disabled={cargando}
          />
          <button className="btn btn-primary" type="submit" disabled={cargando || texto.trim() === ''}>
            {cargando ? 'Enviando...' : 'Comentar'}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormularioComentarios;
