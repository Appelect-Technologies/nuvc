import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
//
import Login from '../pages/auth/login';
import NotFound from '../pages/Page404';
import Register from '../pages/Register';
import DashboardApp from '../pages/DashboardApp';
import Users from '../pages/users';
import PrivateRoute from './privateRoutes';
import PublicRoute from './unauthenticatedRoutes';
import AppBar from 'src/layouts/Appbar';
import Leads from 'src/pages/leads';
import Jobs from 'src/pages/jobs';
import Courses from 'src/pages/courses';
import News from 'src/pages/news';
import Notifications from 'src/pages/notifications';
import Applicants from 'src/pages/applicants';
import Subscriptions from 'src/pages/subscriptions';
import Center from 'src/pages/./TrainingCenter/Center';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <AppBar />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: PublicRoute(Login) },
        { path: 'register', element: PublicRoute(Register) },
        { path: '404', element: PublicRoute(NotFound) },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: PrivateRoute(DashboardApp) },
        { path: 'users', element: PrivateRoute(Users) },
        { path: 'jobs', element: PrivateRoute(Jobs) },
        { path: 'applicants', element: PrivateRoute(Applicants) },
        { path: 'subscriptions', element: PrivateRoute(Subscriptions) },
        { path: 'news', element: PrivateRoute(News) },
        { path: 'notifications', element: PrivateRoute(Notifications) },
        { path: 'courses', element: PrivateRoute(Courses) },
        { path: 'leads', element: PrivateRoute(Leads) },
        { path: 'center', element: PrivateRoute(Center) },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
