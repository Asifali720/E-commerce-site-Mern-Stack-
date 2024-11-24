import React, { useContext } from 'react'
import { DataContext, DataProviderProps } from '../context/DataProvider'
import ProductItem from '../product_item/ProductItem'

const BestSellingCollection = () => {
  const [bestSellingCollection, setBestSellingCollection] = React.useState<any[]>([])
  const {products, currency} = useContext(DataContext) as DataProviderProps
  // console.log("🚀 ~ BestSellingCollection ~ products:", products)
  
   React.useEffect(() => {   
     const bestProducts = products && products.filter((items)=> items.bestseller === true).slice(0, 5)
     setBestSellingCollection(bestProducts)
  }, [])

  
  return (
   <section className='w-full' id='best_selling'>
    <div className='w-full max-w-[1440px] mx-auto my-10 lg:my-20 px-4 lg:px-10 xl:px-20 pt-10 lg:py20'>
<h2 className='font-Roboto text-4xl font-extrabold tracking-[-0.05em] text-black text-center uppercase'>top selling</h2>
<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
             {
              bestSellingCollection && bestSellingCollection.map((product: any) => {
                 return <ProductItem {...product} currency={currency}/>
              })
             }
          </div>
    </div>

   </section>
  )
}

export default BestSellingCollection