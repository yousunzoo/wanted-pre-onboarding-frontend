import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Todo from '../pages/Todo';
import Home from '../pages/Home';
import ProtectedRouter from './ProtectedRouter';
import NotFound from '../pages/NotFound';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route element={<ProtectedRouter />}>
						<Route path='/' element={<Home />} />
						<Route path='signin' element={<Signin />} />
						<Route path='signup' element={<Signup />} />
						<Route path='todo' element={<Todo />} />
					</Route>
				</Route>
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
