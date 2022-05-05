import Ico from "../pages/ico/Ico";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";

const routes = [
  {
    path: "/",
    element: Dashboard,
    exact: true,
  },
  {
    path: "/ico",
    element: Ico,
    exact: true,
  },
  {
    path: "/admindashboard",
    element: AdminDashboard,
    exact: true,
    protected: true,
  },
];

export default routes;
