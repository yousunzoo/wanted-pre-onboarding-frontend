import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProtectedRouter() {
	const access_token = localStorage.getItem('access_token');
	const navigate = useNavigate();

	if (!access_token) {
		Swal.fire({
			title: '<p>로그인이 필요한 영역입니다.</p>',
			icon: 'warning',
		}).then(() => {
			navigate('/signin');
		});
	}
	return (
		<>
			<Outlet />
		</>
	);
}

export default ProtectedRouter;
