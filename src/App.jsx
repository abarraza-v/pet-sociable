import portada from "./assets/portada.webp";


function App() {
  return (
    <>
      <div
      style={{
        margin: 0,
        backgroundImage: `url(${portada})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      }}
      >
      </div>
    </>
  );
}

export default App;
