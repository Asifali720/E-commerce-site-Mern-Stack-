import React from "react";
import sideImage from "../../assets/two_column_image.png";
import CountUp from "react-countup";
import sideImageMobile from "../../assets/two_column_hero_mobile.png";
import Button from "../button/Button";

const TwoColumnHeroSection = () => {
  return (
    <section className=" bg-[#f0f0f0] -z-20 relative w-full" id="two_column_hero">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20 pt-10 lg:py-10 md:py-20 relative" >
      <img
        src={sideImage}
        alt=""
        className="absolute top-0 right-0 w-full h-full -z-10 object-cover hidden md:block"
      />
      <div className="pt-10 lg:py-20 w-full md:max-w-[700px] relative z-30">
        <h1 className="text-4xl md:text-7xl tracking-[-0.05em] font-Roboto text-black font-extrabold mb-6">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-base text-gray-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button variant="primary" label="Shop Now"  className="w-full md:w-auto mt-6"/>
        <div className="mt-10 flex flex-wrap items-center gap-20">
          <div className="text-base text-gray-500 font-satoshi">
            <p className="text-3xl lg:text-5xl  font-satoshi text-black font-bold">
              <CountUp duration={3} end={200} />+
            </p>
            International Brands
          </div>
          <div className="text-base text-gray-500 font-satoshi">
            <p className="text-3xl lg:text-5xl font-satoshi text-black font-bold">
              <CountUp duration={3} end={2000} />+
            </p>
            High-Quality Products
          </div>
          <div className="text-base text-gray-500 font-satoshi">
            <p className="text-3xl lg:text-5xl font-satoshi text-black font-bold">
              <CountUp duration={3} end={30000} />+
            </p>
            Happy Customers
          </div>
        </div>
      </div>
      <img src={sideImageMobile} alt="" className="w-full h-full object-cover md:hidden"/>
      </div>
      
    </section>
  );
};
export default TwoColumnHeroSection;
