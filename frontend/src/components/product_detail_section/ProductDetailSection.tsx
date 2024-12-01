import React, { useContext } from "react";
import { assets } from "../../data/assets/frontend_assets/assets";
import Button from "../button/Button";
import clsx from "clsx";
import { DataContext, DataProviderProps } from "../context/DataProvider";

const ProductDetailSection = ({
  product,
  img,
  setImg,
}: {
  product: any | null;
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [size, setSize] = React.useState<string>("");
  const { addToCart, handleQuantity, quantity } = useContext(DataContext) as DataProviderProps;
 

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && imgRef.current) {
      const x = e.clientX - containerRef.current.offsetLeft;
      const y = e.clientY - containerRef.current.offsetTop;
      imgRef.current.style.transformOrigin = `${x}px ${y}px`;
      imgRef.current.style.transform = "scale(2)";
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transformOrigin = "center center";
      imgRef.current.style.transform = "scale(1)";
    }
  };



  return (
    <section className="w-full mb-20 mt-[140px]" id="product_detail_section">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20">
        {product && (
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            <div className="flex flex-col-reverse md:flex-row gap-2 w-full lg:w-2/4">
              <div className="flex flex-row md:flex-col gap-3">
                {product.image &&
                  product.image.slice(0, 3).map((image: any) => {
                    return (
                      <button
                        className={clsx(
                          "md:h-[167px] w-full h-[100px] md:w-[152px] border rounded-xl md:rounded-3xl overflow-hidden",
                          image === img
                            ? " border-gray-600"
                            : "border-transparent"
                        )}
                        onClick={() => setImg(image)}
                      >
                        <img
                          src={image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
              </div>

              <div
                className="flex w-full lg:w-[444px] h-[300px] md:h-[530px] rounded-3xl cursor-zoom-in overflow-hidden justify-center items-center"
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {product.image.length > 0 ? (
                  <img
                    src={img}
                    alt=""
                    ref={imgRef}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div>Loading....</div>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-start lg:w-2/4">
              <h2 className="font-Roboto text-4xl font-extrabold tracking-[-0.05em] text-black uppercase">
                {product.name}
              </h2>
              <div className="flex gap-1">
                <img src={assets.star_icon} alt="" className="w-5 h-5" />
                <img src={assets.star_icon} alt="" className="w-5 h-5" />
                <img src={assets.star_icon} alt="" className="w-5 h-5" />
                <img src={assets.star_icon} alt="" className="w-5 h-5" />
                <img src={assets.star_dull_icon} alt="" className="w-5 h-5" />
              </div>
              <p className="text-3xl font-satoshi font-bold text-black mt-5">
                ${product.price}
              </p>
              <p className="font-Roboto text-black/60 mt-5 pb-5 border-b border-b-gray-200">
                {product.description}
              </p>

              <div className="py-5 border-b border-b-gray-200 w-full">
                <p className="last:font-satoshi text-black/60 mb-3">
                  Choose Size
                </p>
                <div className="flex items-center gap-3">
                  {product.sizes.map((item: any) => (
                    <button
                      className={clsx(
                        "rounded-full py-1 px-4  text-black",
                        size === item
                          ? "bg-black font-medium text-white"
                          : "bg-gray-200"
                      )}
                      onClick={() => setSize(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <p className="mt-6 font-Roboto font-semibold text-gray-400">
                100% Original product.<br/> Cash on delivery is available on this
                product.<br/> Easy return and exchange policy within 7 days.
              </p>
              <div className="w-full flex gap-3 mt-24 md:mt-20">
                <div className="py-2 px-4 bg-gray-200 flex items-center gap-3 md:gap-7 rounded-full">
                  <button
                    className="text-2xl"
                    onClick={() => handleQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="text-2xl"
                    onClick={() => handleQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <Button
                  variant="primary"
                  label="Add to Cart"
                  className="w-full text-nowrap"
                  onClick={()=>addToCart(product._id, size, quantity, product.name, product.image[0], product.price)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailSection;
