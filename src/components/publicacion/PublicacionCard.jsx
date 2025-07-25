import clsx from "clsx";
import estilos from "./PublicacionCard.module.css"
import ListaComentarios from "./ListaComentarios";

const PublicacionCard = ({ publicacion }) => {
  const {
    descripcion,
    ubicacion,
    fecha,
    imagen,
    mascota,
    estado,
    comentarios = [],
  } = publicacion;

  return (
    <div className={clsx("card", "mb-4", "p-4", estilos.card)}>
      <div className="card-body">
        <h2 className="h3 text-capitalize fw-bold card-title">
          {mascota?.nombre || "Sin nombre"}
        </h2>
        <h3 className="h5"><strong>{estado?.nombre || "Sin estado"}</strong> · Fecha Publicación {new Date(fecha).toLocaleDateString() }</h3>
        
        <ul>
          <li>
            <span className="fw-bold">Especie:</span>{" "}
            {mascota?.especie || "N/A"}
          </li>
          <li>
            <span className="fw-bold">Raza:</span> {mascota?.raza || "N/A"}
          </li>
          <li>
            <span className="fw-bold">Edad aprox.:</span>{" "}
            {mascota?.edad_aproximada || "N/A"} años
          </li>
          <li>
            <span className="fw-bold">Descripción de la mascota:</span>{" "}
            {mascota?.descripcion || "N/A"}
          </li>
        </ul>

        <p>
          <span className="fw-bold">Ubicación:</span>{" "}
          {ubicacion || "No especificada"}
        </p>
        <p>
          <span className="fw-bold">Descripción:</span>{" "}
          {descripcion || "N/A"}
        </p>
      </div>
      {imagen && (
        <div
          className="mb-3 text-center position-relative overflow-hidden"
          style={{ height: "600px" }}
        >
          {/* Fondo desenfocado */}
          <div
            style={{
              backgroundImage: `url(${imagen})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "blur(10px)",
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 1,
              transform: "scale(1.1)",
            }}
          />

          {/* Capa semi-transparente (opcional, por contraste) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(255, 255, 255, 0.2)", // puedes ajustar o quitar
              zIndex: 2,
            }}
          />

          {/* Imagen principal centrada y contenida */}
          <div
            style={{
              backgroundImage: `url(${imagen})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 3,
            }}
          />
        </div>
      )}
      <div className="card-body">
        <h3 className="h5">Comentarios</h3>
        
        <ListaComentarios comentarios={comentarios}/>
        <div className="input-group mt-2">
          <textarea
            className="form-control no-resize"
            placeholder="Escribe tu comentario..."
            rows={2}
            disable
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
