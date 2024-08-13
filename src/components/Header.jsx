import logoImg from "./logo.png";
import logoImg2 from "./logo2.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnliineStatus";
import UserContext from "../utills/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);
  // const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using the Selector (hook in react)
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header flex items-center shadow-md mx-2 h-20 sticky top-0 z-20 bg-white">
      <div className="flex items-center flex-grow">
        <img
          src={logoImg2}
          className="w-auto h-[70px] object-cover cursor-pointer mt-1 px-1 ml-4"
          alt="Logo"
        />
      </div>
      <button
        className="block md:hidden text-gray-800 ml-auto mr-4"
        onClick={toggleMenu}
      >
        <i
          className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}
        ></i>
      </button>
      <div
        className={`md:flex items-center ${
          isOpen ? "block" : "hidden"
        } lg:shadow-none md:shadow-none md:static absolute top-20 right-0 ${
          isOpen ? "bg-slate-200 sm:shadow-lg rounded-md p-2" : ""
        }`}
      >
        <ul
          className={`flex flex-col md:flex-row md:items-center md:justify-between font-medium font-txtFont text-gray-800`}
        >
          <li
            className={`md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-slate-100 to-orange-200 rounded-sm py-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link to="/search" className="search text-md font-[500]">
              <i className="fa-solid fa-magnifying-glass icons search-icon px-1"></i>
              Search
            </Link>
          </li>
          <li
            className={`md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-slate-100 to-orange-200 rounded-sm py-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link to="/" className="home text-md font-[500]">
              <i className="fa-solid fa-house icons home px-1"></i>Home
            </Link>
          </li>
          <li
            className={`md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-slate-100 to-orange-200 rounded-sm py-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link to="/about" className="offers text-md font-[500]">
              <i className="fa-solid fa-tags icons offers px-1"></i>About
            </Link>
          </li>
          <li
            className={`md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-slate-100 to-orange-200 rounded-sm py-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link
              to="/login"
              className="login text-md font-[500]"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
              target="_blank"
            >
              <i className="fa-solid fa-right-to-bracket icons login px-1"></i>
              {btnNameReact}
            </Link>
          </li>
          <li
            className={`md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-slate-100 to-orange-200 rounded-sm py-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link to="/cart" className="cart relative text-md font-[500]">
              <span className="cart-count absolute -top-3 left-0.5 text-xs bg-red-100 text-slate-800 rounded-b-2xl px-2">
                {cartItems.length}
              </span>
              <i className="fa-solid fa-box-open icons cart px-1"></i>
              Cart
            </Link>
          </li>
          {/* <li className="px-4">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
