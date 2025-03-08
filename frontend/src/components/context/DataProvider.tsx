import React, { createContext } from "react";
import { products } from "../../data/assets/frontend_assets/assets.ts";
import { toast, ToastOptions } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProductProps } from "../../api/admin_api/addProduct.ts";

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
  handleDeleteCartItem: (id: string) => void;
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  order: any;
  // setOrder: React.Dispatch<React.SetStateAction<object>>;
  handleOrder: (formData: object, total: number) => void;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  realProducts: ProductProps[];
  setRealProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

interface ToastStyleProp extends ToastOptions {
  position: string | any;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
}

export const DataContext = createContext<DataProviderProps | null>(null);

export const toastStyle: ToastStyleProp = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};


const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = React.useState<string>("");
  const [openReviews, setOpenReviews] = React.useState<boolean>(false);
  const [cartItems, setCartItems] = React.useState<any>([]);
  const [quantity, setQuantity] = React.useState<number>(1);
  const [paymentMethod, setPaymentMethod] = React.useState<string>("cod");
  const [realProducts, setRealProducts] = React.useState<ProductProps[]>([]);
  const [order, setOrder] = React.useState<any>({
    cartItems: "",
  });
  const navigate = useNavigate();
  const date = new Date();

  const getToken = localStorage.getItem("token");
  const [token, setToken] = React.useState<string>(getToken ? getToken : "");

 
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
      toast.error("Select product size", {});
    } else {
      carts.push({ id, size, qnt, name, image, price, currency });
      setCartItems((prev: any) => [...prev, ...carts]);
      toast.success("Product add to cart", toastStyle);
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

  const handleDeleteCartItem = (id: string) => {
    setCartItems((prev: any) => prev.filter((item: any) => item.id !== id));
    toast.success("Product has been deleted", toastStyle);
  };

  const handleOrder = (formData: any, total: number) => {
    if (!formData.first_name) {
      toast.error("Please enter Name", toastStyle);
    } else if (!formData.email) {
      toast.error("Please enter Email", toastStyle);
    } else if (!formData.address) {
      toast.error("Please enter Address", toastStyle);
    } else if (!formData.city) {
      toast.error("Please enter City", toastStyle);
    } else if (!formData.state) {
      toast.error("Please enter State", toastStyle);
    } else if (!formData.country) {
      toast.error("Please enter Country", toastStyle);
    } else if (!formData.phone_number || formData.phone_number.length <= 9) {
      toast.error("Please enter a valid phone number", toastStyle);
    } else {
      setOrder({
        cartItems,
        ...formData,
        currency,
        total: total + delivery_fee,
        paymentMethod,
        date,
      });
      navigate("/orders");
      toast.success("Order has been placed", toastStyle);
    }
  };

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
        handleDeleteCartItem,
        paymentMethod,
        setPaymentMethod,
        // setOrder,
        order,
        handleOrder,
        token,
        setToken,
        realProducts,
        setRealProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
