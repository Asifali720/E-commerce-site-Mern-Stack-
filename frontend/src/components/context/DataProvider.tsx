import React, { createContext } from "react";
import { products } from "../../data/assets/frontend_assets/assets.ts";
import { toast } from "react-toastify";

export interface DataProviderProps {
  products: Array<any>;
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  openReviews: boolean;
  setOpenReviews: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (
    id: string,
    size: string,
    qnt: number,
    name: string,
    image: string,
    price: number
  ) => void;
  cartItems: [];
  setCartItems: React.Dispatch<React.SetStateAction<object>>;
  handleQuantity: (qnt: number) => void;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleUpdateQuantity: (qnt: number, id: string) => void;
  handleDeleteCartItem: (id: string)=>void
}

export const DataContext = createContext<DataProviderProps | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = React.useState<string>("");
  const [openReviews, setOpenReviews] = React.useState<boolean>(false);
  const [cartItems, setCartItems] = React.useState<any>([]);
  const [quantity, setQuantity] = React.useState<number>(1);

  const addToCart = (
    id: string,
    size: string,
    qnt: number,
    name: string,
    image: string,
    price: number
  ) => {
    const carts: any[] = [];
    if (!size) {
      toast.error("Select product size", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      carts.push({ id, size, qnt, name, image, price, currency });
      setCartItems((prev: any) => [...prev, ...carts]);
      toast.success("Product add to cart", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleQuantity = (qnt: number) => {
    if (qnt < 1) {
      setQuantity(1);
      return;
    }
    if (qnt > 10) {
      setQuantity(10);
      return;
    }
    setQuantity(qnt);
  };

  const handleUpdateQuantity = (qnt: number, id: string) => {
    if (qnt < 1) {
      setQuantity(1);
      return;
    }
    if (qnt > 10) {
      setQuantity(10);
      return;
    }
    setCartItems((prev: any) =>
      prev.map((item: any) => (item.id === id ? { ...item, qnt } : item))
    );
  };

 const handleDeleteCartItem=(id: string)=>{
    setCartItems((prev: any)=> prev.filter((item: any)=> item.id !== id))
    toast.success("Product has been deleted", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
 } 
  

  return (
    <DataContext.Provider
      value={{
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        openReviews,
        setOpenReviews,
        cartItems,
        addToCart,
        setCartItems,
        quantity,
        handleQuantity,
        setQuantity,
        handleUpdateQuantity,
        handleDeleteCartItem
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
