import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem('access_token');
		navigate('/');
	};
	return (
		<div className='flex items-center justify-between px-6 w-[600px] h-14 bg-[#ffdc72]'>
			<h1 className='text-lg font-bold'>
				<Link to='/'>나만의 투두리스트</Link>
			</h1>
			{pathname === '/todo' && (
				<button className='text-sm bg-white px-3 py-1 rounded-xl' onClick={handleLogout}>
					{'로그아웃'}
				</button>
			)}
		</div>
	);
}

export default Header;
