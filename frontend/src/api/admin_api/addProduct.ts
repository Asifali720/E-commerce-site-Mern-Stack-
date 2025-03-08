import axios from "axios";

export type ProductProps = {
    _id?: string
    name?: string
    description?: string
    price?: string
    category?: string
    subCategory?: string
    sizes?: string[]
    bestSeller?: boolean
    date?: Date
    image?: any[]
}

export const addProduct = async(formData: ProductProps, token: string)=>{
     try{
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}api/product/add`, 
        formData,
        {
            headers: {
                token: token
            }
        })
        return response
     } catch(err: any | string){
        console.log(err.message)
     }
}