import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
