import { ChangeEvent, FormEvent, useState } from 'react';
import { MdOutlineMail, MdOutlineLock } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signin, signup } from '../apis/auth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const DIV_STYLE = 'mb-8 flex flex-col gap-4';
const LABEL_STYLE = 'text-lg inline-flex items-center gap-1';
const INPUT_STYLE = 'rounded-3xl border-2 px-6 py-2 focus:outline-slate-600';
const TEXT_STYLE = 'text-gray-500 px-2';

function Form() {
	const MySwal = withReactContent(Swal);
	const [account, setAccount] = useState({ email: '', password: '' });
	const [isValidate, setIsValidate] = useState({ email: false, password: false });
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setAccount({ ...account, [id]: value });
		if (id === 'email') {
			setIsValidate({ ...isValidate, email: value.includes('@') ? true : false });
		}
		if (id === 'password') {
			setIsValidate({ ...isValidate, password: value.length >= 8 ? true : false });
		}
	};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = pathname === '/signup' ? await signup(account) : await signin(account);
		const { data, status } = result;
		if (status !== 201 && status !== 200) {
			MySwal.fire({
				title: <p>{data.message}</p>,
				icon: 'error',
			});
		}
		if (status === 201) {
			MySwal.fire({
				title: <p>회원가입이 완료되었습니다.</p>,
				icon: 'success',
			}).then(() => {
				navigate('/signin');
			});
		}
		if (status === 200) {
			const { access_token } = data;
			localStorage.setItem('access_token', access_token);
			navigate('/todo');
		}
	};

	const isDisabled = account.email && account.password && isValidate.email && isValidate.password ? false : true;
	return (
		<form className='w-full px-10' onSubmit={handleSubmit}>
			<div className={DIV_STYLE}>
				<label className={LABEL_STYLE} htmlFor='email'>
					<MdOutlineMail className='text-2xl' /> 이메일
				</label>
				<input
					className={INPUT_STYLE}
					type='email'
					data-testid='email-input'
					id='email'
					onChange={handleChange}
					value={account.email}
					placeholder='test@test.com'
				/>
				<p className={`${TEXT_STYLE} ${account.email && !isValidate.email && 'text-red-500'}`}>
					이메일 형식에 맞게 입력해주세요.
				</p>
			</div>
			<div className={DIV_STYLE}>
				<label className={LABEL_STYLE} htmlFor='password'>
					<MdOutlineLock className='text-2xl' /> 비밀번호
				</label>
				<input
					className={INPUT_STYLE}
					type='password'
					data-testid='password-input'
					id='password'
					onChange={handleChange}
					value={account.password}
					placeholder='비밀번호를 입력해주세요'
				/>
				<p className={`${TEXT_STYLE} ${account.password && !isValidate.password && 'text-red-500'}`}>
					비밀번호를 8자리 이상 입력해주세요.
				</p>
			</div>
			<div className='flex w-full gap-4'>
				<Link
					to={pathname === '/signup' ? '/signin' : '/signup'}
					className='w-1/2 py-3 border-4 rounded-lg text-center border-[#ffdc72] hover:bg-[#ffdc72]'>
					{pathname === '/signup' ? '로그인하러 가기' : '회원가입하러 가기'}
				</Link>
				<button
					className={`w-1/2 rounded-lg py-3 ${isDisabled ? 'bg-gray-300' : 'bg-[#ffdc72] hover:bg-[#ffd278]'}`}
					data-testid={pathname === '/signup' ? 'signup-button' : 'signin-button'}
					disabled={isDisabled}>
					{pathname === '/signup' ? '회원가입' : '로그인'}
				</button>
			</div>
		</form>
	);
}

export default Form;
