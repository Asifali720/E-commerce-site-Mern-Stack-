
import { TfiEmail } from "react-icons/tfi";
import logo from "../../assets/SHOP.CO.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import Button from "../button/Button";

const Footer = () => {
  return (
    <footer className="w-full">
         <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20 items-center p-10 bg-black rounded-2xl w-full max-w-[1220px] px-4 lg:px-10 mx-auto -mb-24 relative">
        <h3 className="text-white font-Roboto font-bold text-4xl w-full max-w-[700px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <form>
          <div className="w-full rounded-full flex gap-2 items-center bg-white p-3 mb-2">
            <TfiEmail size={22} />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent outline-none"
            />
          </div>
          <Button variant="secondary" label="Subcribe to Newsletter" type="submit"/>
        </form>
      </div>
      <div className="w-full bg-[#f0f0f0]">
       <div className="w-full max-w-[1440px] pt-20 mx-auto px-4 lg:px-10 xl:px-20 relative">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-24 py-10 border-b-2 border-b-gray-200">
        <div className="">
          <img src={logo} alt="logo" className="mb-5" />
          <p className="text-sm text-gray-500 font-satoshi">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3 mt-5">
            <Link
              to="https://github.com/Asifali720"
              className="p-2 bg-white rounded-full border border-slate-400 transition-all ease-in-out duration-300 hover:border-transparent hover:bg-black hover:text-white "
            >
              <FaGithub size={15} />
            </Link>
            <Link
              to="https://pk.linkedin.com/in/asif-ali-25157b2b6"
              className="p-2 bg-white rounded-full border border-slate-400 transition-all ease-in-out duration-300  hover:border-transparent hover:bg-black hover:text-white"
            >
              <FaLinkedinIn size={15} />
            </Link>
            <Link
              to="mailto:iamasifali7202gmail.com"
              className="p-2 bg-white rounded-full border border-slate-400 transition-all ease-in-out duration-300  hover:border-transparent hover:bg-black hover:text-white"
            >
              <TfiEmail size={15} />
            </Link>
          </div>
        </div>
        <ul>
          <li className="text-lg font-satoshi font-medium mb-3">Company</li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="/about">About</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Features</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Works</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Career</Link>
          </li>
        </ul>
        <ul>
          <li className="text-lg font-satoshi font-medium mb-3">Help</li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Customer Support</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Delivery Details</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Terms & Conditions</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Privacy Policy</Link>
          </li>
        </ul>
        <ul>
          <li className="text-lg font-satoshi font-medium mb-3">FAQ</li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Account</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Manage Deliveries</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Orders</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Payments</Link>
          </li>
        </ul>
        <ul>
          <li className="text-lg font-satoshi font-medium mb-3">Resources</li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Free eBooks</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Development Tutorial</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">How to - Blog</Link>
          </li>
          <li className="text-base text-gray-500 font-satoshi mb-2">
            <Link to="#">Youtube Playlist</Link>
          </li>
        </ul>
      </div>
      <div className="pt-5 pb-10 flex items-center justify-center gap-10">
        <p className="text-gray-500 text-sm">
          Shop.co © {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div> 
      </div> 
      </div>
      
     
    </footer>
  );
};

export default Footer;
