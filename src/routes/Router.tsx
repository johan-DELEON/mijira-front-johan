import { Route, Routes } from "react-router-dom";
import { routes } from "../routerConfig";
import BlankLayout from "../layouts/blank-layout/BlankLayout";
import FullLayout from "../layouts/full-layout/fullLayout";

const Router = () => {
  return (
    <>
      <Routes>
        {routes.map((element) => (
          <Route
            path={element.path}
            element={
              element.typeLayout === "full" ? (
                <FullLayout>{element.element}</FullLayout>
              ) : (
                <BlankLayout>{element.element}</BlankLayout>
              )
            }
          />
        ))}
      </Routes>
    </>
  );
};

export default Router;
