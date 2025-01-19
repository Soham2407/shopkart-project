import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen flex flex-col container mx-auto p-3">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
