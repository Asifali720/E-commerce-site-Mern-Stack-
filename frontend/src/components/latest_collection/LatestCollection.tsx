import React, { useContext, useEffect } from 'react'
import { DataContext, DataProviderProps} from '../context/DataProvider'


const LatestCollection = () => {
const [latestCollection, setLatestCollection] = React.useState<any[]>([])
const {products, currency} = useContext(DataContext) as DataProviderProps

useEffect(() => {   
    products && setLatestCollection(products.slice(0, 10))
}, [])

  return (
   <section className="bg-white py-20 relative w-full" id="latest_collection">
      <div className='w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20'>
          <h2 className='font-Roboto text-4xl font-extrabold tracking-[-0.05em] text-black text-center'>NEW ARRIVALS</h2>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
             {
              latestCollection && latestCollection.map((product: any) => {
                 return <div className='w-full group'>                
                        <img src={product.image} alt="" className='w-full rounded-2xl group-hover:scale-110 transition-all ease-in-out duration-300'/>
                 </div>
              })
             }
          </div>
      </div>
   </section>
  )
}

export default LatestCollection