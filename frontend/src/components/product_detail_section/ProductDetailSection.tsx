import React, { useContext } from "react"
import { DataContext, DataProviderProps } from "../context/DataProvider"
import { useParams } from "react-router-dom"


const ProductDetailSection = () => {
    const {id} = useParams()
    const [product, setProduct] = React.useState<any | null>(null)
    console.log("🚀 ~ ProductDetailSection ~ product:", product)
    const {products} = useContext(DataContext) as DataProviderProps
    
    React.useEffect(() => {   
        let product = products.find((item: any) => item._id === id)
        setProduct(product || {})
    }, [products, id])

  return (
        <section className="w-full mt-20 lg:mt-[140px]" id="product_detail_section">
            <div className="w-full max-w-[1440px] mx-auto">
             {
                product && <div className="flex">
                    <div>
                      {
                        product.image && product.image.slice(0, 3).map((image: any) => {
                            return <div className="w-full flex justify-center items-center">
                                <img src={image} alt="" className="w-full object-cover rounded-3xl"/>
                            </div>
                        })
                    }  
                    </div>
                    
                    <div className="w-full flex justify-center items-center">
                      { product.image.length > 0 ?  <img src={product.image[0]} alt="" className="w-full h-full max-w-[500px] object-cover rounded-3xl"/> : <div>
                        Loading....
                      </div>}
                    </div>
                    <div className="w-full flex flex-col justify-center items-start">
                        <h2 className="font-Roboto text-4xl font-extrabold tracking-[-0.05em] text-black uppercase">{product.name}</h2>
                        <p className="font-Roboto text-base font-medium text-black mt-5">{product.description}</p>
                        <p className="text-3xl font-satoshi font-bold text-black mt-5">${product.price}</p>
                        <div className="flex gap-3 mt-5">   
                            <button className="bg-black text-white text-base font-satoshi font-semibold py-3 px-5">Add to Cart</button>
                            <button className="bg-white text-black text-base font-satoshi font-semibold py-3 px-5">Buy Now</button>
                        </div>
                    </div>
                </div>
             }
            </div>
        </section>
    )
}

export default ProductDetailSection