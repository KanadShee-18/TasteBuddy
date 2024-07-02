import logoImg from "./logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header flex flex-wrap justify-between shadow-md mx-2 h-20 sticky top-0 z-20 bg-white">
      <div>
        <img
          src={logoImg}
          className="w-auto h-[70px] cursor-pointer mt-1 px-1"
        ></img>
      </div>
      <div className="flex justify-evenly items-center box-border mr-4">
        <ul className="flex justify-center items-center font-medium font-txtFont text-gray-800">
          <li className="md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d] md:flex sm:hidden">
            <Link to="/search" className="search text-md font-[600]">
              <i className="fa-solid fa-magnifying-glass icons search-icon px-1"></i>
              Search
            </Link>
          </li>
          <li className="md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d] md:flex sm:hidden">
            <Link to="/" className="home text-md font-[600]">
              <i className="fa-solid fa-house icons home px-1"></i>Home
            </Link>
          </li>
          <li className="md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d] md:flex sm:hidden">
            <Link to="/about" className="offers text-md font-[600]">
              <i className="fa-solid fa-tags icons offers px-1"></i>About
            </Link>
          </li>
          <li className="md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d]">
            <Link
              to="/login"
              className="login text-md font-[600]"
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
          <li className="md:px-7 sm:px-2 cursor-pointer hover:text-[#ff5d0d]">
            <Link
              to="/cart"
              className="cart text-md font-[600]"
              target="_blank"
            >
              <i className="fa-solid fa-cart-shopping icons cart px-1"></i>Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
