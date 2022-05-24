import { Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes";
import { getJwt } from "../utils/getJwt";

const RoutesView: React.FC<{ dappRef: any; connectRef: any; aboutRef: any }> = (
  props
) => {
  const jwtToken = getJwt();

  return (
    <Routes>
      {routes.map((route, index) => {
        if (route.protected && !jwtToken) {
          return (
            <Route
              key={index}
              path="/admindashboard"
              element={<Navigate replace to="/" />}
            />
          );
        } else {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.element {...props} />}
            />
          );
        }
      })}
    </Routes>
  );
};

export default RoutesView;
