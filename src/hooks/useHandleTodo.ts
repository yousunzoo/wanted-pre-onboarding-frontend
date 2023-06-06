import { ChangeEvent, useState } from 'react';
import { Todo } from '../interface/todo';
import { deleteTodo, updateTodo } from '../apis/todo';
import Swal from 'sweetalert2';

interface IUseHandleTodo {
	(args0: { data: Todo; refetch: () => Promise<void> }): [
		Todo,
		boolean,
		() => void,
		() => void,
		() => Promise<void>,
		() => void,
		(e: ChangeEvent<HTMLInputElement>) => void,
		() => Promise<void>
	];
}
const useHandleTodo: IUseHandleTodo = ({ data, refetch }) => {
	const [todo, setTodo] = useState({ ...data });
	const [isEditMode, setIsEditMode] = useState(false);
	const handleCheckbox = async () => {
		const editedTodo = { todo: todo.todo, isCompleted: !todo.isCompleted };
		await updateTodo({ todo: editedTodo, id: todo.id });
		setTodo({ ...todo, isCompleted: !todo.isCompleted });
	};

	const handleEditMode = () => {
		setIsEditMode(!isEditMode);
	};
	const handleCancel = () => {
		handleEditMode();
		setTodo({ ...todo, todo: data.todo });
	};

	const handleDelete = () => {
		Swal.fire({
			title: '<p>해당 항목을 삭제하시겠습니까?</p>',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: '네',
			cancelButtonText: '아니오',
		}).then(async (result) => {
			if (result.isConfirmed) {
				const res = await deleteTodo(todo.id);
				if (res.status === 204) {
					refetch();
					Swal.fire({
						title: '<p>삭제되었습니다.</p>',
						icon: 'success',
					});
				}
			}
		});
	};

	const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setTodo({ ...todo, todo: value });
	};

	const handleSubmit = async () => {
		const editedTodo = { todo: todo.todo, isCompleted: todo.isCompleted };
		const res = await updateTodo({ todo: editedTodo, id: todo.id });
		if (res.status === 200) {
			Swal.fire({
				title: '<p>수정되었습니다.</p>',
				icon: 'success',
			});
			setIsEditMode(!isEditMode);
		} else {
			Swal.fire({
				title: '<p>요청이 실패했습니다. 다시 시도해주세요</p>',
				icon: 'error',
			});
		}
	};
	return [todo, isEditMode, handleEditMode, handleCancel, handleCheckbox, handleDelete, handleEdit, handleSubmit];
};

export default useHandleTodo;
