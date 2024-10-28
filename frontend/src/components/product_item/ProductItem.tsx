import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductItem = ({name, image, price, rating, currency}: {name: string, image: string, price: number, rating: number, currency: string}) => {
   
  return (
    <div className='w-full group'>                
    <img src={image} alt="" className='w-full rounded-2xl group-hover:scale-110 transition-all ease-in-out duration-300 mb-1'/>
    <p className='text-lg font-bold font-satoshi text-black'>{name}</p>
    {/* <Rating  initialValue={5}  /> */}
    <span className='text-base font-satoshi text-black block font-bold'>{price} {currency}</span>
</div>
  )
}

export default ProductItem