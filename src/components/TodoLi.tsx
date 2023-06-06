import React, { useState } from 'react';
import { Todo } from '../interface/todo';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';

interface TodoLiProps {
	data: Todo;
}
const BUTTON_STYLE = 'px-3 py-1 border-2 rounded-2xl text-sm';
function TodoLi({ data }: TodoLiProps) {
	const { todo, id, isCompleted } = data;
	const [isDone, setIsDone] = useState(isCompleted);
	const [isEditMode, setIsEditMode] = useState(false);

	const handleChange = () => {
		setIsDone(!isDone);
	};
	return (
		<li className='flex w-full pb-2 border-b-2 border-slate-300 items-center mb-4 text-lg'>
			<label className='mr-2 text-2xl w-1/12' htmlFor={`${id}-isCompleted`}>
				{isDone ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
				<input className='hidden' type='checkbox' id={`${id}-isCompleted`} checked={isDone} onChange={handleChange} />
			</label>
			<p className='w-8/12'>{todo}</p>
			<div className='flex w-3/12 justify-between'>
				<button className={`${BUTTON_STYLE} border-blue-400`} data-testid='modify-button'>
					수정
				</button>
				<button className={`${BUTTON_STYLE} border-red-300`} data-testid='delete-button'>
					삭제
				</button>
			</div>
		</li>
	);
}

export default TodoLi;
