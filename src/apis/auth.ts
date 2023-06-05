import { axiosInstance } from "./axios"

interface AccountProp {
  email:string,
  password:string
} 
export const signin = async (account:AccountProp) => {
  const response = await axiosInstance.post('/auth/signin', account)
  return response
}

export const signup = async (account:AccountProp) => {
  try {
    const response = await axiosInstance.post('/auth/signup', account)
  return response
  } catch (error:any) {
    return error.response
  }
}