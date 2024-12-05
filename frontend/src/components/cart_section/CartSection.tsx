import { useContext, useEffect, useState } from "react";
import { DataContext, DataProviderProps } from "../context/DataProvider";
import { MdDeleteSweep } from "react-icons/md";
import CartTotal from "../cart_total/CartTotal";

const CartSection = () => {
  const {
    currency,
    cartItems,
    delivery_fee,
    handleUpdateQuantity,
    handleDeleteCartItem,
  } = useContext(DataContext) as DataProviderProps;
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const updatePrice = () => {
    const price = cartItems.reduce((acc: number, item: any) => {
      return acc + item.price * item.qnt;
    }, 0);
    setTotalPrice(price);
  };

  useEffect(() => {
    updatePrice();
  }, [cartItems]);

  return (
    <section
      className="w-full mt-10 mb-20 max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20"
      id="cart_section"
    >
      <h1 className="text-4xl font-Roboto tracking-[-0.05em] text-black font-extrabold mb-6">
        Your cart
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-5">
        <div className="w-full md:w-[60%] px-3 sm:px-6 rounded-2xl border border-gray-300">
          {cartItems.map((item: any) => (
            <div className="flex items-center justify-between py-3 sm:py-6 border-b border-gray-300">
              <div className="flex gap-4">
                <div className="w-full sm:w-[124px] sm:h-[124px] overflow-hidden rounded-xl bg-[#F0EEED] p-2 flex items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h3 className="font-satoshi text-sm md:text-xl font-bold text-black mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-satoshi text-black">
                    Size: <span className="text-gray-500">{item.size}</span>
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-satoshi text-black mb-4">
                    Quantity: <span className="text-gray-500">{item.qnt}</span>
                  </p>
                  <p className="font-Roboto text-black block tracking-[-0.05em] font-semibold">
                    {currency}
                    {item.price}
                  </p>
                </div>
              </div>
              <div className="h-[120px] flex flex-col items-end justify-between">
                <button onClick={() => handleDeleteCartItem(item.id)}>
                  <MdDeleteSweep size={25} color="red" />
                </button>
                <div className="py-1 px-3 bg-gray-200 flex items-center gap-3 md:gap-7 rounded-full">
                  <button
                    className="text-2xl"
                    onClick={() => handleUpdateQuantity(item.qnt - 1, item.id)}
                  >
                    -
                  </button>
                  <span>{item.qnt}</span>
                  <button
                    className="text-2xl"
                    onClick={() => handleUpdateQuantity(item.qnt + 1, item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CartTotal
          totalPrice={totalPrice}
          delivery_fee={delivery_fee}
          currency={currency}
          label="Go to Checkout"
          link="/place-order"
          isPlaceOrder={false}
          classname="md:w-[40%]"
        />
      </div>
    </section>
  );
};

export default CartSection;
