import { axiosInstance } from './axios';

export const addTodo = async (todo: string) => {
	try {
		const response = await axiosInstance.post('/todos', { todo });
		return response;
	} catch (error: any) {
		return error.response;
	}
};
