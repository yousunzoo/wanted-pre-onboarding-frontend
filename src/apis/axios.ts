import axios, { AxiosRequestConfig } from 'axios'

const getAxiosInstance = (option?: { multi?: boolean }) => {
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
  }

  const instance = axios.create(config)

  return instance
}

export const axiosInstance = getAxiosInstance
