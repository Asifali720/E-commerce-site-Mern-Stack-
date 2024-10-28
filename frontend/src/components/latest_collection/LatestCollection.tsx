import React, { useContext, useEffect } from 'react'
import { DataContext, DataProviderProps} from '../context/DataProvider'
import ProductItem from '../product_item/ProductItem'


const LatestCollection = () => {
const [latestCollection, setLatestCollection] = React.useState<any[]>([])
const {products, currency} = useContext(DataContext) as DataProviderProps

useEffect(() => {   
    products && setLatestCollection(products.slice(0, 10))
}, [])

console.log(latestCollection, '>...')

  return (
   <section className="bg-white py-20 relative w-full" id="latest_collection">
      <div className='w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20'>
          <h2 className='font-Roboto text-4xl font-extrabold tracking-[-0.05em] text-black text-center'>NEW ARRIVALS</h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
             {
              latestCollection && latestCollection.map((product: any) => {
                 return <ProductItem {...product} currency={currency}/>
              })
             }
          </div>
      </div>
   </section>
  )
}

export default LatestCollection