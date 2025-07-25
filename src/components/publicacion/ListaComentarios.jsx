
const ListaComentarios = ({ comentarios }) => {
  return comentarios.length > 0 ? (
    <ul>
      {comentarios.map((comentario) => (
        <li key={comentario.id}>
          {comentario.texto} <br />
          <span style={{ fontSize: "smaller", color: "#4b4b4bff" }}>
            {new Date(comentario.fecha).toLocaleDateString()}
          </span>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay comentarios aún.</p>
  );
};

export default ListaComentarios;