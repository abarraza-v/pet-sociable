import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 96px)", padding: "1.5rem 48px", }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;