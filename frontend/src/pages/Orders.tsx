import React, { useContext } from "react";
import Layout from "../components/Layout";
import Button from "../components/button/Button";
import {
  DataContext,
  DataProviderProps,
} from "../components/context/DataProvider";

const Orders = () => {
  const { order } = useContext(DataContext) as DataProviderProps;
  // console.log("🚀 ~ Orders ~ order:", order.cartItems);
  const carts = order.cartItems;
  console.log("🚀 ~ Orders ~ carts:", carts);
  return (
    <Layout>
      <div className="w-full my-20 max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-20">
        <h1 className="text-4xl font-Roboto font-extrabold tracking-[-0.05em] text-black uppercase mb-6">
          My Orders
        </h1>

        {carts && carts.length > 0 ? (
          carts?.map((item: any) => (
            <div className="w-full py-4 border-y border-y-gray-300 flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
              <div className="flex gap-4 w-full md:w-2/4">
                <div className="w-24 h-24 bg-gray-300 flex items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h2 className="font-Roboto text-base md:text-xl tracking-[-0.05em] font-extrabold">
                    {item.name}
                  </h2>
                  <p className="font-satoshi font-medium">
                    {order.currency}
                    {item.price} Quantity: {item.qnt} Size: {item.size}
                  </p>
                  <p className="font-satoshi font-medium">
                    Date:{" "}
                    <span className="text-slate-500">
                      {order.date?.toLocaleDateString()}
                    </span>
                  </p>
                  <p className="font-satoshi font-medium">
                    Payment:{" "}
                    <span className="text-slate-500 capitalize">
                      {order.paymentMethod}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full md:w-2/4">
                <p className="flex items-center gap-2 font-satoshi text-slate-600">
                  {" "}
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                  Order Placed
                </p>
                <Button
                  variant="secondary"
                  label="Track Order"
                  className="border border-gray-200"
                />
              </div>
            </div>
          ))
        ) : (
          <p>No Orders</p>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
