import clsx from "clsx";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordions = ({question, answer}: {question: string, answer: string}) => {
    const [open, setOpen] = React.useState<boolean>(false)
  return (
    <div className={clsx("w-full py-3 border-y border-y-gray-300 transition-all ease-linear duration-700 overflow-hidden", open ? "max-h-[500px]" : "max-h-[50px]")}>
        <button className="w-full flex items-center justify-between" onClick={()=>setOpen(!open)}>
         <h3 className="text-xl font-semibold font-Roboto tracking-tighter">{question}</h3>
         <FaChevronDown className={clsx("transition-all ease-linear duration-700",open? "rotate-180" : "rotate-0")}/>
        </button>
            <p className="pt-2">{answer}</p>
    </div>
  )
}

export default Accordions