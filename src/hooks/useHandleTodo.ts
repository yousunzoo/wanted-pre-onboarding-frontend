import { useState } from 'react';
import { Todo } from '../interface/todo';
import { updateTodo } from '../apis/todo';

interface IUseHandleTodo {
	(arg0: Todo): [Todo, () => Promise<void>];
}
const useHandleTodo: IUseHandleTodo = (data: Todo) => {
	const [todo, setTodo] = useState({ ...data });
	const handleCheckbox = async () => {
		const editedTodo = { todo: todo.todo, isCompleted: !todo.isCompleted };
		updateTodo({ todo: editedTodo, id: todo.id });
		setTodo({ ...todo, isCompleted: !todo.isCompleted });
	};
	return [todo, handleCheckbox];
};

export default useHandleTodo;
