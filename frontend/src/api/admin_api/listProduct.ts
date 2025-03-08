import axios from "axios";



export const listProduct = async()=>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}api/product/list`)
    return response
  } catch (err: any | string) {
    console.log(err.message)
  }
}