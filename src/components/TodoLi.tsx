import { Todo } from '../interface/todo';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import useHandleTodo from '../hooks/useHandleTodo';

interface TodoLiProps {
	data: Todo;
	refetch: () => Promise<void>;
}
const BUTTON_STYLE = 'px-3 py-1 border-2 rounded-2xl text-sm';

function TodoLi(props: TodoLiProps) {
	const [userTodo, isEditMode, handleEditMode, handleCancel, handleCheckbox, handleDelete, handleEdit, handleSubmit] =
		useHandleTodo(props);
	const { todo, isCompleted, id } = userTodo;

	return (
		<li className='flex w-full pb-2 border-b-2 border-slate-300 items-center mb-4 text-lg'>
			<label className='mr-2 text-2xl' htmlFor={`${id}-isCompleted`}>
				{isCompleted ? (
					<MdOutlineCheckBox className='text-green-600' />
				) : (
					<MdOutlineCheckBoxOutlineBlank className='text-slate-400' />
				)}
				<input
					className='hidden'
					type='checkbox'
					id={`${id}-isCompleted`}
					checked={isCompleted}
					onChange={handleCheckbox}
				/>
			</label>
			{!isEditMode && (
				<>
					<p className='grow'>{todo}</p>
					<div className='flex w-3/12 ml-2 justify-between'>
						<button onClick={handleEditMode} className={`${BUTTON_STYLE} border-blue-400`} data-testid='modify-button'>
							수정
						</button>
						<button className={`${BUTTON_STYLE} border-red-300`} onClick={handleDelete} data-testid='delete-button'>
							삭제
						</button>
					</div>
				</>
			)}
			{isEditMode && (
				<>
					<input
						className='grow px-2 border-2 border-slate-300 rounded-xl'
						value={todo}
						autoFocus
						onChange={handleEdit}
						data-testid='modify-input'
					/>
					<div className='flex w-3/12 ml-2 justify-between'>
						<button className={`${BUTTON_STYLE} border-green-500`} onClick={handleSubmit} data-testid='submit-button'>
							제출
						</button>
						<button onClick={handleCancel} className={`${BUTTON_STYLE} border-gray-400`} data-testid='cancel-button'>
							취소
						</button>
					</div>
				</>
			)}
		</li>
	);
}

export default TodoLi;
