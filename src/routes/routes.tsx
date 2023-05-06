import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ActivateAccount } from "../pages/ActivateAccount";
import { OutlatNavbar } from "../components/OutlatNavbar";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route element={<OutlatNavbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/activateAccount/:uuid"
            element={<ActivateAccount />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
