import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const [count, setCount] = useState(3);
	const navigate = useNavigate();
	useEffect(() => {
		const timer = setTimeout(() => {
			setCount(count - 1);
		}, 1000);
		if (count === 0) {
			navigate('/');
		}
		return () => {
			clearTimeout(timer);
		};
	}, [count]);
	return (
		<section className='w-[600px] h-[600px] p-12 bg-white rounded-2xl'>
			<img src='/not-found.png' alt='not-found' />
			<h2 className='text-center pt-10 text-2xl font-semibold'>해당 페이지를 찾을 수 없습니다!</h2>
			<p className='text-center pt-10 text-xl'>{count}초 후에 메인 페이지로 리다이렉트 됩니다.</p>
		</section>
	);
}

export default NotFound;
