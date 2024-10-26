import React from 'react'
import sideImage from '../../assets/two_column_image.png'
import CountUp from 'react-countup'

const TwoColumnHeroSection = () => {
  return (
    <section className='w-full max-w-[1440px] mx-auto px-4 mt-[100px] lg:px-10 xl:px-20 py-10 md:py-20 relative'>
      <img src={sideImage} alt=""  className='absolute top-0 right-0 w-full h-full -z-10 object-cover'/>
      <div className='py-20 w-full md:max-w-[700px]'>
        <h1 className='text-4xl md:text-7xl tracking-[-0.05em] font-Roboto text-black font-extrabold mb-6'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-base text-gray-500'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='bg-black text-white py-3 px-20 rounded-full font-satoshi font-medium text-base mt-6'>Shop Now</button>
        <div className='mt-10 flex flex-wrap items-center gap-20'>
         <p className='text-5xl font-satoshi text-black font-bold'><CountUp duration={3} end={200}/>+</p> 
         <p className='text-5xl font-satoshi text-black font-bold'><CountUp duration={3} end={2000}/>+</p>  
         <p className='text-5xl font-satoshi text-black font-bold'><CountUp duration={3} end={30000}/>+</p>     
        </div>
       
      </div>
    </section>
  )
}

export default TwoColumnHeroSection