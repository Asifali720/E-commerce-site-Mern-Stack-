import React from 'react'
import { DataContext, DataProviderProps } from '../context/DataProvider'
import ProductItem from '../product_item/ProductItem'

const RelatedProductSection = ({category, subCategory}: {category: string, subCategory: string}) => {
    const {products, currency} = React.useContext(DataContext) as DataProviderProps
    const [product, setProduct] = React.useState<any>([])

    const handleRelatedProduct =()=>{
        const product = products && products.slice()
        const productCopy = product.filter((item)=> item.category === category && item.subCategory === subCategory)
        setProduct(productCopy)
    }

    React.useEffect(()=>{
        handleRelatedProduct()
    }, [products])

  return (
    <section className='w-full max-w-[1440px]  mb-10 mx-auto px-4 lg:px-10 xl:px-20' id='related_product_section'>
      <h2 className='text-3xl text-center mb-6 font-Roboto font-extrabold tracking-[-0.05em] uppercase'>You might also like</h2>
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {
        product.slice(0, 4).map((item: any)=>(
          <ProductItem {...item} currency={currency}/>
        ))
       }
      </div>
       
    </section>
  )
}

export default RelatedProductSection