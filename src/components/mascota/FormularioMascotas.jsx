const FormularioMascotas = () => {
  const manejarEnvio = (evento) => {
    evento.preventDefault();
  };

  return (
    <>
      <h2>Registrar mascota</h2>
      <form onSubmit={manejarEnvio}>
        <input type="text" placeholder="Nombre" name="nombre" />
        <input type="text" placeholder="Especie" name="especie" />
        <input type="text" placeholder="Raza" name="raza" />
        <input type="number" placeholder="Edad" name="edad" />
        <input type="text" placeholder="Nombre" name="nombre" />
        <textarea placeholder="Descripción" name="descripcion"></textarea>
        <button type="submit"> Enviar </button>
      </form>
    </>
  );
};

export default FormularioMascotas;
