const PublicacionCard = ({ publicacion }) => {
  const {
    descripcion,
    ubicacion,
    fecha_publicacion,
    imagen,
    mascota,
    estado,
    comentarios = [],
  } = publicacion;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">
          {estado?.nombre || "Sin estado"} - {mascota?.nombre || "Sin nombre"}
        </h4>
        <ul>
          <li>
            <strong>Especie:</strong> {mascota?.especie || "N/A"}
          </li>
          <li>
            <strong>Raza:</strong> {mascota?.raza || "N/A"}
          </li>
          <li>
            <strong>Edad aprox.:</strong> {mascota?.edad_aproximada || "N/A"}{" "}
            años
          </li>
          <li>
            <strong>Descripción de la mascota:</strong>{" "}
            {mascota?.descripcion || "N/A"}
          </li>
        </ul>

        <p>
          <strong>Ubicación:</strong> {ubicacion || "No especificada"}
        </p>
        <p>
          <strong>Descripción de la publicación:</strong> {descripcion || "N/A"}
        </p>
        <p>
          <strong>Fecha de publicación:</strong>{" "}
          {new Date(fecha_publicacion).toLocaleDateString()}
        </p>

        {imagen && (
          <div className="mb-3">
            <img
              src={imagen}
              alt="Imagen de la publicación"
              className="img-fluid"
            />
          </div>
        )}

        <h5>Comentarios</h5>
        {comentarios.length > 0 ? (
          <ul>
            {comentarios.map((comentario) => (
              <li key={comentario.id}>{comentario.texto}</li>
            ))}
          </ul>
        ) : (
          <p>No hay comentarios aún.</p>
        )}

        <div className="d-flex mt-2">
          <textarea
            className="form-control me-2"
            placeholder="Escribe tu comentario..."
            rows={2}
            disabled
          ></textarea>
          <button className="btn btn-secondary" disabled>
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicacionCard;
