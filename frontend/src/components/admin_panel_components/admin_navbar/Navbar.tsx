import React from "react";
import logo from "../../../assets/SHOP.CO.png";
import Button from "../../button/Button";
import { DataContext, DataProviderProps } from "../../context/DataProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setToken } = React.useContext(DataContext) as DataProviderProps;

  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 lg:px-10 shadow-md">
      <Link to={'/'}>
      <img src={logo} alt="" className="w-20 md:w-[180px]" />
      </Link>
      <Button label="Logout" variant="primary" onClick={() => setToken("")} />
    </nav>
  );
};

export default Navbar;
