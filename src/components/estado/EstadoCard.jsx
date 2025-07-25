const EstadoCard = ({ estado, eliminarYMostrar }) => {
  const { id, nombre } = estado;

  const handleClick = () => {
    eliminarYMostrar(id);
  };
  console.log(estado);
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <button onClick={handleClick} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstadoCard;
