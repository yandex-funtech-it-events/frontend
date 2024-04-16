import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useCurrentUser } from '../../user/hooks/use-current-user.ts';

const RequiredAuth = () => {
  const location = useLocation();
  const { token } = useCurrentUser();

  return <>{token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}</>;
};

export default RequiredAuth;
