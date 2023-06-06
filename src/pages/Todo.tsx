import AddTodoForm from '../components/AddTodoForm';
import Spinner from '../components/Spinner';
import TodoList from '../components/TodoList';
import useSetTodosByResponse from '../hooks/useSetTodosByResponse';

function Todo() {
	const [todos, isLoading, setTodosByResponse] = useSetTodosByResponse();

	return (
		<div>
			<AddTodoForm refetch={setTodosByResponse} />
			<section className='flex w-full justify-center items-center h-[400px] border-4 rounded-2xl p-5'>
				{isLoading ? <Spinner /> : <TodoList todos={todos} refetch={setTodosByResponse} />}
			</section>
		</div>
	);
}

export default Todo;
