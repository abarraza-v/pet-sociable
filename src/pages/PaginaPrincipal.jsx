import portada from "../assets/portada.webp";

const PaginaPrincipal = () => {
  return (
    <main
      style={{
        margin: 0,
        backgroundImage: `url(${portada})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    ></main>
  );
};

export default PaginaPrincipal;