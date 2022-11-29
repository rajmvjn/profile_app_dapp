import Ico from "../pages/ico/Ico";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import Blog from "../pages/blogs/Blog";
import DoBlog from "../pages/blogs/DoBlog";

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
  {
    path: "/blogs",
    element: Blog,
    exact: true,
  },
  {
    path: "/blogs/:bid",
    element: Blog,
    exact: true,
  },
  {
    path: "/doblog",
    element: DoBlog,
    exact: true,
  },
];

export default routes;
