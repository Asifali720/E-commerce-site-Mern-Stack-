import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import PlaceOrder from "./PlaceOrder";
import Orders from "./Orders";
import Product from "./Product";
import Cart from "./Cart";
import Collections from "./Collections";
import ErrorPage from "./ErrorPage";
import AdminPanel from "./admin_pages";

const PagesRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-account" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </div>
  );
};

export default PagesRoutes;
