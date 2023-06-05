import axios, { AxiosRequestConfig } from 'axios'

const getAxiosInstance = () => {
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const instance = axios.create(config)

  return instance
}

export const axiosInstance = getAxiosInstance()
