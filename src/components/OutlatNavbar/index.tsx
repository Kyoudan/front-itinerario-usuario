import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";

export const OutlatNavbar = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
