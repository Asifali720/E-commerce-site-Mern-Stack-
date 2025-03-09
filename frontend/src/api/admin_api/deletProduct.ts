import axios from "axios"



export const deleteProduct = async(id: string, token: string)=>{
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}api/product/remove?id=${id}`, 
    {},
    {
      headers: {
        token: token
      }
    })
    return response
  } catch (err: any | string) {
    console.log(err.message)
  }
}