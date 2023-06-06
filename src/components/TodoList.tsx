import { Todos } from '../interface/todo';
import TodoLi from './TodoLi';

interface TodoListProps {
	todos: Todos | [];
}
function TodoList({ todos }: TodoListProps) {
	console.log(todos);
	return (
		<ul className='w-full h-full overflow-y-auto'>
			{todos.map((todo) => (
				<TodoLi key={todo.id} data={todo} />
			))}
		</ul>
	);
}

export default TodoList;
