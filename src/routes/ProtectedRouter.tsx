import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

function ProtectedRouter() {
	const access_token = localStorage.getItem('access_token');
	const { pathname } = useLocation();

	if (pathname === '/todo') {
		return access_token ? <Outlet /> : <Navigate to='/signin' replace />;
	} else {
		return access_token ? <Navigate to='/todo' replace /> : <Outlet />;
	}
}

export default ProtectedRouter;
