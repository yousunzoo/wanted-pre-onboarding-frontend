import { Todos } from '../interface/todo';
import TodoLi from './TodoLi';

interface TodoListProps {
	todos: Todos | [];
	refetch: () => Promise<void>;
}
function TodoList({ todos, refetch }: TodoListProps) {
	return (
		<ul className='w-full h-full overflow-y-auto'>
			{todos.map((todo) => (
				<TodoLi key={todo.id} data={todo} refetch={refetch} />
			))}
		</ul>
	);
}

export default TodoList;
