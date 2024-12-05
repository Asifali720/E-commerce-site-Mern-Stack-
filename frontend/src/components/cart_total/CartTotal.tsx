import clsx from "clsx";
import Button from "../button/Button";
import { useContext } from "react";
import { DataContext, DataProviderProps } from "../context/DataProvider";
import { data } from "../../data/payment_methods/data";

const CartTotal = ({
  totalPrice,
  currency,
  delivery_fee,
  classname,
  onClick,
  link,
  label,
  isPlaceOrder,
}: {
  totalPrice: number;
  currency: string;
  delivery_fee: number;
  onClick?: ()=>void;
  link?: string;
  label: string;
  isPlaceOrder: boolean;
  classname?: string;
}) => {

  const {paymentMethod, setPaymentMethod} = useContext(DataContext) as DataProviderProps

  

  return (
    <div className={clsx("w-full p-6 rounded-2xl border border-gray-300", classname)}>
      <h3 className="font-satoshi text-2xl font-bold mb-4">Order Summary</h3>
      <div className="w-full flex justify-between">
        <p className="text-sm text-gray-500 mb-4">Subtotal</p>
        <span className="font-satoshi font-bold">
          {currency}
          {totalPrice}
        </span>
      </div>
      <div className="w-full flex justify-between border-b border-b-gray-300">
        <p className="text-sm text-gray-500 mb-4">Delivery fee</p>
        <span className="font-satoshi font-bold">
          {currency}
          {delivery_fee}
        </span>
      </div>

      <div className="w-full flex justify-between mt-4">
        <p className="text-sm text-black font-satoshi font-medium mb-4">
          Total
        </p>
        <span className="font-satoshi font-bold">
          {currency}
          {totalPrice + delivery_fee}
        </span>
      </div>
      {
        isPlaceOrder && <div className="flex flex-col sm:flex-row sm:items-center gap-1 w-full mb-6">
           {
            data.map((item)=>(
              <button className="flex items-center gap-2 lg:gap-3 xl:gap-5 border border-gray-300 p-3 rounded-md" onClick={()=>setPaymentMethod(item.type)}>
                <div className={clsx("w-3 min-w-3 h-3 rounded-full border ", paymentMethod === item.type ? "bg-green-400 border-transparent": "bg-transparent border-gray-300")}>
                </div>
                {
                  item.logo && <img src={item.logo} className="w-full object-fill max-w-20 h-5"/>
                }
                {
                  item.title && <p className="uppercase font-Roboto font-semibold text-xs text-nowrap lg:text-sm text-gray-500">{item.title}</p>
                }
              </button>
            ))
           }
        </div>
      }
      <Button
        label={label}
        variant="primary"
        className="w-full text-nowrap text-center"
        link={link}
        onClick={onClick}
      />
    </div>
  );
};

export default CartTotal;
