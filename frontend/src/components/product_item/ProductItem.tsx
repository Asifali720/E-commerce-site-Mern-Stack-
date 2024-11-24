import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({name, image, price, currency, _id}: {name: string, image: string, price: number, rating: number, currency: string, _id:string}) => {
   
  return (
    <Link to={`/products/${_id}`} className='w-full group' key={_id}>
    <img src={image[0]} alt="" className='w-full rounded-2xl group-hover:scale-110 transition-all ease-in-out duration-300 mb-1'/>           
    <p className='text-base font-satoshi  text-black'>{name}</p> 
    <span className='text-sm font-Roboto text-black block tracking-[-0.05em] font-semibold'>{currency}{price}</span>
</Link>
  )
}

export default ProductItem