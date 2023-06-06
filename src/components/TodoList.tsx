import { Todos } from '../interface/todo';

interface TodoListProps {
	todos: Todos | [];
}
function TodoList({ todos }: TodoListProps) {
	console.log(todos);
	return (
		<ul className='w-full h-full overflow-y-auto'>
			{todos.map((todo) => (
				<h1>{todo.todo}</h1>
			))}
		</ul>
	);
}

export default TodoList;
