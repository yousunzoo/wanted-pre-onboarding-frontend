import { ChangeEvent, FormEvent, useState } from 'react';
import { addTodo } from '../apis/todo';
import Swal from 'sweetalert2';

function AddTodoForm() {
	const [todo, setTodo] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setTodo(value);
	};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { status } = await addTodo(todo);
		if (status === 201) {
			setTodo('');
		} else {
			Swal.fire({
				title: '<p>잠시 후 다시 시도해주세요</p>',
				icon: 'warning',
			});
		}
	};
	return (
		<form className='relative border-4 overflow-hidden rounded-3xl mx-auto w-[300px]' onSubmit={handleSubmit}>
			<input
				className='outline-none w-4/5 px-4 py-2'
				data-testid='new-todo-input'
				onChange={handleChange}
				value={todo}
				placeholder='할 일을 입력해주세요'
			/>
			<button
				className='absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 rounded-3xl bg-[#ffdc72]'
				data-testid='new-todo-add-button'>
				추가
			</button>
		</form>
	);
}

export default AddTodoForm;
