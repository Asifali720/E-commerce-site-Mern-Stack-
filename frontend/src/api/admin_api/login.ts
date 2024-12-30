import axios from "axios";



interface AdminLogin{
  email: string,
  password: string
}

export const adminLogin = async({email, password}: AdminLogin)=>{
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}api/user/admin`, 
    {
      email,
      password
    })
    return response.data
  } catch (err: any | string) {
    console.log(err.message)
  }
}