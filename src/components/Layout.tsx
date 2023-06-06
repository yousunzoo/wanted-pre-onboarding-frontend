import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
	return (
		<>
			<Header />
			<main className='w-[600px] h-[600px] bg-white rounded-b-xl p-12'>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
