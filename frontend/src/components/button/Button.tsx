import clsx from "clsx";
// import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  variant,
  label,
  onClick,
  className,
  link,
  type
}: {
  variant: string;
  label: string;
  onClick?: () => void;
  className?: string;
  link?: string;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <button
      className={clsx(
        variant === "primary" &&
          "text-white bg-black py-3 px-20 rounded-full font-satoshi transition-all ease-in-out duration-300 font-medium text-base border border-transparent hover:border-black hover:bg-white hover:text-black",
        variant === "secondary" &&
          "bg-white text-black py-3 px-20 rounded-full font-satoshi transition-all ease-in-out duration-300 font-medium text-base border border-transparent hover:border-white hover:bg-black hover:text-white",
        variant === "tertiary" &&
          "text-black py-3 px-20 rounded-full font-satoshi transition-all ease-in-out duration-300 font-medium text-base border border-gray-400 hover:border-black hover:bg-black hover:text-white",
        className
      )}
      type={type}
      onClick={onClick}
    >
      {link ? <Link to={link}>{label}</Link>: label}
    </button>
  );
};

export default Button;
