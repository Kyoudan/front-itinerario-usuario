import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { OutlatNavbar } from "../components/OutlatNavbar";
import { AppCategoriesProvider } from "../contexts/CategoriesContext";
import { CategoriesPage } from "../pages/Categories";
import { Postagens } from "../pages/Postagens";
import { PostagemIndividual } from "../pages/PostagemIndividual";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OutlatNavbar />}>
          <Route
            path="/"
            element={
              <AppCategoriesProvider>
                <Home />
              </AppCategoriesProvider>
            }
          ></Route>

          <Route
            path="/category/:name"
            element={
              <AppCategoriesProvider>
                <CategoriesPage />
              </AppCategoriesProvider>
            }
          ></Route>

          <Route
            path="/postagens"
            element={
              <AppCategoriesProvider>
                <Postagens />
              </AppCategoriesProvider>
            }
          ></Route>

          <Route
            path="/postagens/:uuid"
            element={
              <AppCategoriesProvider>
                <PostagemIndividual />
              </AppCategoriesProvider>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
