import React from "react";

import { Link, useLocation } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaHamburger } from "react-icons/fa";
import clsx from "clsx";

const Sidbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false)

  console.log("🚀 ~ Sidbar ~ activeLink:", activeLink);
  React.useEffect(() => {
    setActiveLink(location.pathname);
    setOpen(false)
  }, [location]);

  return (
    <> 
    <button className="text-2xl absolute top-12 right-2 md:hidden" onClick={()=>setOpen(true)}><FaHamburger /></button>
    <div className={clsx("absolute top-0 left-0 md:static bg-white md:w-[30%] lg:w-[20%] shadow-xl sidebar_screen pt-10 ", open ? "w-full block": "w-0 hidden md:block")}>
      <ul className="float-start lg:float-end flex flex-col gap-4">
        <li>
          <Link
            to="/admin"
            className={clsx(
              "flex items-center gap-2 pl-4 border-y border-r text-nowrap lg:border-r-0 border-l py-1 pr-16",
              activeLink === "/admin"
                ? "bg-pink-100 border-y-pink-600 border-l-pink-600 text-pink-700"
                : "bg-transparent border-l-slate-300 border-y-slate-300"
            )}
          >
            <IoMdAddCircleOutline size={20} />
            <span className="font-satoshi font-bold">Add Items</span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/list"
            className={clsx(
              "flex items-center gap-2 pl-4 border-y border-l border-r text-nowrap lg:border-r-0 py-1 pr-16",
              activeLink === "/admin/list"
                ? "bg-pink-100 border-y-pink-600 border-l-pink-600 text-pink-700"
                : "bg-transparent border-l-slate-300 border-y-slate-300"
            )}
          >
            <LiaClipboardListSolid size={20} />
            <span className="font-satoshi font-bold">List Items</span>
          </Link>
        </li>
        <li>
          <Link
            to="/admin/order"
            className={clsx(
              "flex items-center gap-2 pl-4 border-y border-l border-r text-nowrap lg:border-r-0 py-1 pr-16",
              activeLink === "/admin/order"
                ? "bg-pink-100 border-y-pink-600 border-l-pink-600 text-pink-700"
                : "bg-transparent border-l-slate-300 border-y-slate-300"
            )}
          >
            <LiaClipboardListSolid size={20} />
            <span className="font-satoshi font-bold">Orders</span>
          </Link>
        </li>
      </ul>
    </div>
    </>
   
  );
};

export default Sidbar;
