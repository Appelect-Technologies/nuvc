import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function PrivateRoute(Component) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Component />;
  }
  return <Navigate to="/login" />;
}
