import { useEffect, useState } from 'react';
import { getTodos } from '../apis/todo';
import { Todos } from '../interface/todo';

interface UseSetTodosByResponse {
	(): [Todos | [], boolean, () => Promise<void>];
}
const useSetTodosByResponse: UseSetTodosByResponse = () => {
	const [todos, setTodos] = useState<Todos>([]);
	const [isLoading, setIsLoading] = useState(true);
	const setTodosByResponse = async () => {
		setIsLoading(true);
		const { data } = await getTodos();
		setTodos(data);
		setIsLoading(false);
	};

	useEffect(() => {
		setTodosByResponse();
	}, []);

	return [todos, isLoading, setTodosByResponse];
};

export default useSetTodosByResponse;
