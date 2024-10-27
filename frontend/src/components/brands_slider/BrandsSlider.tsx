import React from 'react'
import Slider from "react-slick";
import {data} from './mock'

const BrandsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
         
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <section className="w-full bg-black max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20 py-10" id='brands_slider'>
        <Slider {...settings}>
         {
            data.map((item: string, index: number) => (
                <div className='' key={index}>
            <img src={item} alt=""  className='w-full h-10 object-contain'/>
        </div> 
            ))
         }   
        </Slider>
    </section>
  )
}

export default BrandsSlider