import React from "react";

import { Link, useLocation } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia";
import clsx from "clsx";

const Sidbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState<string>("");
  console.log("🚀 ~ Sidbar ~ activeLink:", activeLink);
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="w-full md:w-[20%] shadow-xl sidebar_screen pt-10">
      <ul className="float-end flex flex-col gap-4">
        <li>
          <Link
            to="/admin"
            className={clsx(
              "flex items-center gap-2 pl-4 border-y border-l py-1 pr-16",
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
              "flex items-center gap-2 pl-4 border-y border-l py-1 pr-16",
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
              "flex items-center gap-2 pl-4 border-y border-l py-1 pr-16",
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
  );
};

export default Sidbar;
