import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import clsx from "clsx";
import logo from "../../assets/SHOP.CO.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { DataContext, DataProviderProps } from "../context/DataProvider";

const Navbar = () => {
  const [bar, setBar] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menu, setMenu] = useState(false); 
  const {setSearch, cartItems} = useContext(DataContext) as DataProviderProps

  const  handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  return( <nav className=" z-50 w-full fixed top-0">
    <div className="relative">
       <div
        className={clsx(
          "w-full bg-black text-white text-center py-2 relative",
          bar ? "block" : "hidden"
        )}
      >
        <p className="text-xs md:text-base text-wrap">
          Sign up and get 20% off to your first order.{" "}
          <Link to="/create-account" className="underline ">
            Sign Up Now
          </Link>
        </p>
        <button
          className="absolute top-2 right-16 hidden md:block"
          onClick={() => setBar(false)}
        >
          <IoMdClose size={22} />
        </button>
      </div>
      <div className="w-full max-w-[1440px]  bg-white mx-auto flex items-center justify-between md:gap-10 px-4 lg:px-10 py-5 xl:px-20 relative">
        <div className="flex items-center gap-2">
         <button onClick={() => setMenu(!menu)} className="lg:hidden">
          {
            menu ? (
              <IoMdClose size={22} />
            ) : (
              <GiHamburgerMenu size={22} />
            )
          }
        
        </button>
        <Link to="/" className="text-white text-2xl font-bold">
          <img src={logo} alt="logo" className="w-[126px] md:w-[250px]" />
        </Link>    
        </div>
        
          <ul className={clsx("flex flex-col lg:flex-row items-center gap-7 lg:gap-5 nav_height absolute top-[76px] left-0 lg:static w-full lg:w-auto bg-white  lg:bg-transparent py-10 lg:py-0", menu ? "block" : "hidden lg:flex")}>
            <li className="">  
              <Link
                to="/"
                className="text-black font-satoshi text-2xl lg:text-base  hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black font-satoshi text-2xl lg:text-base  hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/collection"
                className="text-black font-satoshi text-2xl lg:text-base  hover:underline"
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black font-satoshi text-2xl lg:text-base hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>


          

        <div className="w-auto md:w-full flex items-center rounded-full bg-[#f0f0f0] p-2">
          <button onClick={() => setSearchOpen(!searchOpen)}>
             <CiSearch size={22} />
          </button>
          
            <input type="text" onChange={handleSearch} name="" id="" className="bg-transparent ml-2 outline-none hidden md:block placeholder:text-zinc-500" placeholder="Search"/>
            <div className={clsx("w-full absolute top-[70px] left-0 bg-[#f0f0f0] px-5 py-2", searchOpen ? "block md:hidden" : "hidden")}>
            <input type="text" onChange={handleSearch} name="" id="" className="bg-white ml-2 outline-none rounded-full w-full px-3 py-1" placeholder="Search"/>
            </div>
        </div>
        <div className="flex items-center gap-2"> 
        <Link to="/cart" className="relative">
            <FiShoppingCart size={22} />
            <p className="text-white absolute -top-2 -right-2 bg-black text-sm rounded-full w-4 h-4 flex items-center justify-center"><span>{cartItems.length}</span></p>
        </Link>  
          <button>
            <MdOutlineAccountCircle size={22} />
        </button>  
        </div>
       
      </div>
    </div>
     
    </nav>
  );
};

export default Navbar;
