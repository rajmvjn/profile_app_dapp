import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const RoutesView: React.FC<{ dappRef: any }> = (props) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={<route.element {...props} />}
          />
        );
      })}
    </Routes>
  );
};

export default RoutesView;
