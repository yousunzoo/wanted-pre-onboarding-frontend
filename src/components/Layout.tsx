import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<>
			<main className='w-[600px] h-[600px] bg-white rounded-b-xl p-12'>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
