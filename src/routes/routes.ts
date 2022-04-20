import Ico from '../pages/ico/Ico';
import Dashboard from '../pages/dashboard/Dashboard';

const routes = [
  {
    path: '/',
    element: Dashboard,
    exact: true,
  },
  {
    path: '/ico',
    element: Ico,
    exact: true,
  }
]

export default routes;