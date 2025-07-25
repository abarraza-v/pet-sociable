const MascotaCard = ({ mascota, eliminarYMostrar }) => {
  const { id, nombre, especie, raza, edad_aproximada, descripcion } = mascota;

  const handleClick = () => {
    eliminarYMostrar(id);
  };
  console.log(mascota);
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 shadow"
        style={{
          backgroundColor: "#f3f3f3", // leve gris claro
          borderRadius: "1rem", // más redondeado
        }}
      >
        <div className="card-body h-100 d-flex flex-column" style={{minHeight: "300px",}}>
          <h3 className="card-title h4 fw-bold text-capitalize">{nombre}</h3>
          <p className="card-text">
            <span className="fw-bold">Especie:</span> {especie} <br />
            <span className="fw-bold">Raza:</span> {raza} <br />
            <span className="fw-bold">Edad aproximada:</span> {edad_aproximada} <br />
            <span className="fw-bold">Descripción:</span> {descripcion}
          </p>
          <button onClick={handleClick} className="btn btn-danger mt-auto align-self-center w-75">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MascotaCard;
