import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const getAxiosInstance = () => {
	const config: AxiosRequestConfig = {
		baseURL: 'https://www.pre-onboarding-selection-task.shop',
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const instance = axios.create(config);

	instance.interceptors.request.use(
		(request) => {
			const access_token = localStorage.getItem('access_token');
			if (access_token) request.headers['Authorization'] = `Bearer ${access_token}`;
			return request;
		},
		(error: AxiosError) => {
			return Promise.reject(error);
		}
	);
	return instance;
};

export const axiosInstance = getAxiosInstance();
