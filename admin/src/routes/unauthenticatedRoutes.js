import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function PublicRoute(Component) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Component />;
  }
  return <Navigate to="/dashboard/app" />;
}
