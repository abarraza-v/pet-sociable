const MascotaCard = ({ mascota, eliminarYMostrar }) => {
  const { id, nombre, especie, raza, edad, descripcion } = mascota;

  const handleClick = () => {
    eliminarYMostrar(id);
  };
  console.log(mascota);
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 shadow-sm border-0"
        style={{
          backgroundColor: "#f3f3f3", // leve gris claro
          borderRadius: "1rem", // más redondeado
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            <strong>Especie:</strong> {especie} <br />
            <strong>Raza:</strong> {raza} <br />
            <strong>Edad aprox.:</strong> {edad} <br />
            <strong>Descripción:</strong> {descripcion}
          </p>
          <button onClick={handleClick} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MascotaCard;
