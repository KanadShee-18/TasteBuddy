import logoImg from "./logo.png";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex flex-wrap justify-between shadow-md mx-2 h-20 sticky top-0 z-10 bg-white">
      <div>
        <img
          src={logoImg}
          className="w-auto h-[70px] cursor-pointer mt-1 px-1"
        ></img>
      </div>
      <div className="flex justify-evenly items-center box-border mr-4">
        <ul className="flex justify-center items-center">
          <li className="px-7 cursor-pointer hover:text-[#ff5d0d]">
            <a href="#search" className="search text-md font-[600]">
              <i className="fa-solid fa-magnifying-glass icons search-icon px-1"></i>
              Search
            </a>
          </li>
          <li className="px-7 cursor-pointer hover:text-[#ff5d0d]">
            <a href="#home" className="home text-md font-[600]">
              <i className="fa-solid fa-house icons home px-1"></i>Home
            </a>
          </li>
          <li className="px-7 cursor-pointer hover:text-[#ff5d0d]">
            <a href="#offers" className="offers text-md font-[600]">
              <i className="fa-solid fa-tags icons offers px-1"></i>Offers
            </a>
          </li>
          <li className="px-7 cursor-pointer hover:text-[#ff5d0d]">
            <a
              href="#login"
              className="login text-md font-[600]"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              <i className="fa-solid fa-right-to-bracket icons login px-1"></i>
              {btnNameReact}
            </a>
          </li>
          <li className="px-7 cursor-pointer hover:text-[#ff5d0d]">
            <a href="#yourcart" className="cart text-md font-[600]">
              <i className="fa-solid fa-cart-shopping icons cart px-1"></i>Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
