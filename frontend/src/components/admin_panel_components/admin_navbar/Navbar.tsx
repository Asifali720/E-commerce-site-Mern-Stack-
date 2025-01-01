import React from "react";
import logo from "../../../assets/SHOP.CO.png";
import Button from "../../button/Button";
import { DataContext, DataProviderProps } from "../../context/DataProvider";

const Navbar = () => {
  const { setToken } = React.useContext(DataContext) as DataProviderProps;

  return (
    <nav className="w-full flex items-center justify-between px-4 py-5 lg:px-10">
      <img src={logo} alt="" className="w-[126px] md:w-[250px]" />
      <Button label="Logout" variant="primary" onClick={() => setToken("")} />
    </nav>
  );
};

export default Navbar;
