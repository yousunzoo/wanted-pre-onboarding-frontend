import axios, { AxiosRequestConfig } from 'axios';

const getAxiosInstance = () => {
	const config: AxiosRequestConfig = {
		baseURL: 'https://www.pre-onboarding-selection-task.shop',
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const instance = axios.create(config);

	return instance;
};

export const axiosInstance = getAxiosInstance();
