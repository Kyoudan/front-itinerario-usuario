import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";

export const OutlatNavbar = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
