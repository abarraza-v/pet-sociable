import { useState } from "react";

const FormularioMascotas = () => {
    const [nombreMascota, setNombreMascota] = useState("");
    const [especieMascota, setEspecieMascota] = useState("");
    const [razaMascota, setRazaMascota] = useState("");
    const [edadMascota, setEdadMascota] = useState("");
    const [descripcionMascota, setDescripcionMascota] = useState("");

  const manejarEnvio = (evento) => {
    console.log("Se clickeo el botón enviar");
    evento.preventDefault();
  };

  return (
    <>
      <h2>Registrar mascota</h2>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombreMascota"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>

        <div>
          <label>Especie:</label>
          <input
            type="text"
            name="especieMascota"
            value={especieMascota}
            onChange={(e) => setEspecieMascota(e.target.value)}
          />
        </div>

         <div>
          <label>Raza:</label>
          <input
            type="text"
            name="razaMascota"
            value={razaMascota}
            onChange={(e) => setRazaMascota(e.target.value)}
          />
        </div>

        <div>
          <label>Edad:</label>
          <input
            type="number"
            name="edadMascota"
            value={edadMascota}
            onChange={(e) => setEdadMascota(e.target.value)}
          />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcionMascota"
            value={descripcionMascota}
            onChange={(e) => setDescripcionMascota(e.target.value)}
          />
        </div>

        <button type="submit"> Enviar </button>
      </form>
    </>
  );
};

export default FormularioMascotas;
