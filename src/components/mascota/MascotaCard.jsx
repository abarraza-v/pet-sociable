const MascotaCard = ({ mascota, eliminarYMostrar }) => {
  const { id, nombre, especie, raza, edad, descripcion } = mascota;

  const handleClick = () => {
    eliminarYMostrar(id);
  };
  console.log(mascota);
  return (
    <article>
      <div>
        <h5>{nombre}</h5>
        <p>
          <b>Especie:</b> {especie}
          <br />
          <b>Raza:</b> {raza}
          <br />
          <b>Edad aprox.:</b> {edad}
          <br />
          <b>Descripción:</b> {descripcion}
        </p>
        <button onClick={handleClick}>Eliminar</button>
      </div>
    </article>
  );
};

export default MascotaCard;
