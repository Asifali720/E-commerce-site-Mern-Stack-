import React, { useContext, useEffect, useState } from "react";
import CartTotal from "../cart_total/CartTotal";
import { DataContext, DataProviderProps } from "../context/DataProvider";

const PlaceOrderSection = () => {
  const { delivery_fee, currency, cartItems, order, setOrder, handleOrder, paymentMethod } = useContext(
    DataContext
  ) as DataProviderProps;

  console.log("🚀 ~ PlaceOrderSection ~ paymentMethod:", paymentMethod)


  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [formData, setFormData] = useState<object>({})

  const updatePrice = () => {
    const price = cartItems.reduce((acc: number, item: any) => {
      return acc + item.price * item.qnt;
    }, 0);
    setTotalPrice(price);
  };

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>)=>{
     const {value, name} = e.target
     setFormData((prev: any)=>({
        ...prev,
        [name]: value
     }))
  }

  const date = new Date()
  // console.log("🚀 ~ PlaceOrderSection ~ date:", date)
  

  useEffect(() => {
    updatePrice();
  }, [cartItems]);

  useEffect(()=>{
    setOrder({
     ...cartItems,
     ...formData,
     paymentMethod,
     totalPrice: totalPrice+ delivery_fee,
     currency,
     date
    })
  }, [])

  return (
    <section
      className="w-full max-w-[1440px] mx-auto mt-10 mb-20 px-4 lg:px-10 xl:px-20"
      id="place_order_section"
    >
      <h1 className="font-Roboto text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-6 tracking-[-0.05em]">
        DELIVERY INFORMATION
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-20 items-start">
        <div className="w-full md:w-2/4">
          <form action="">
            <div className="flex items-center gap-2 w-full mb-4">
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full"
                onChange={handleFormData}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full"
                onChange={handleFormData}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full mb-4"
              onChange={handleFormData}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Street"
              className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full mb-4"
              onChange={handleFormData}
              required
            />

            <div className="flex items-center gap-2 w-full mb-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full"
                onChange={handleFormData}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full"
                onChange={handleFormData}
                required
              />
            </div>

            <div className="flex items-center gap-2 w-full mb-4">
              <input
                type="number"
                name="zipcode"
                placeholder="Zipcode"
                className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full"
                onChange={handleFormData}
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full"
                onChange={handleFormData}
                required
              />
            </div>
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone number"
              className="py-1 px-3 rounded-sm border border-gray-300 font-satoshi w-full"
              onChange={handleFormData}
              required
            />
          </form>
        </div>
        <CartTotal
          totalPrice={totalPrice}
          delivery_fee={delivery_fee}
          currency={currency}
          label="Place order"
          onClick={handleOrder(order)}
          isPlaceOrder={true}
          classname="md:w-2/4"
        />
      </div>
    </section>
  );
};

export default PlaceOrderSection;
