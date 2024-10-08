import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { updateLocation } from "../utills/locationSlice";
import logoImg2 from "./logo2.png";
import { BiHomeSmile, BiSearchAlt } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { apiKey } from "../utills/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utills/firebase";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();
  const locDetails = useSelector((store) => store.location.locationDetails);
  const { area, district, state } = locDetails || {};
  const navigate = useNavigate();

  const defaultPinCode = useSelector(
    (store) => store.location?.locationDetails[0]?.pincode
  );
  const pinCodeRef = useRef(null);

  const fetchData = async (searchCode) => {
    if (searchCode) {
      try {
        const url = `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${searchCode}`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host":
              "india-pincode-with-latitude-and-longitude.p.rapidapi.com",
          },
        };

        const response = await fetch(url, options);
        const result = await response.json();
        dispatch(updateLocation(result[0]));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSearch = () => {
    const searchCode = pinCodeRef.current.value || pinCode || defaultPinCode;
    if (searchCode) {
      setPinCode(searchCode);
      fetchData(searchCode);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (defaultPinCode) {
      fetchData(defaultPinCode);
    }
  }, [defaultPinCode, dispatch]);

  useEffect(() => {
    // Update the placeholder when the location details change
    if (!isInputFocused && area && district && state) {
      pinCodeRef.current.placeholder = `${area}, ${district}, ${state}`;
    }
  }, [area, district, state, isInputFocused]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const cartItems = useSelector((store) => store.cart.items);

  const handleFocus = () => {
    setIsInputFocused(true);
    pinCodeRef.current.placeholder = "Enter pincode";
  };

  const handleBlur = () => {
    if (!pinCodeRef.current.value) {
      setIsInputFocused(false);
      pinCodeRef.current.placeholder = `${area}, ${district}, ${state}`;
    }
  };

  return (
    <div className="sticky top-0 z-20 flex items-center h-20 md:mx-[calc(10%+16px)] mx-[calc(5%)] bg-white shadow-md header">
      <div className="flex items-center flex-grow">
        <img
          src={logoImg2}
          className="w-auto h-[70px] object-cover cursor-pointer mt-1 px-1 md:ml-4 ml-1"
          alt="Logo"
        />
        <div className="md:w-[200px] w-[150px] mt-5 ml-2 pb-1 border-b-[1px] border-slate-800 flex justify-between items-center">
          <input
            ref={pinCodeRef}
            type="text"
            placeholder={`${area}, ${district}, ${state}`}
            className="text-center text-nowrap overflow-hidden text-ellipsis border-b-2 text-[13px] placeholder:text-slate-700 px-2 border-none font-txtFont focus:outline-none w-4/5"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            className="flex items-center p-1 mx-1 duration-200 ease-in-out rounded-full hover:bg-slate-500 hover:bg-opacity-30 hover:scale-110 active:text-orange-500"
            onClick={handleSearch}
          >
            <IoSearch className="" />
          </button>
        </div>
      </div>

      <button
        className="block ml-auto mr-4 text-gray-800 lg:hidden"
        onClick={toggleMenu}
      >
        <i
          className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}
        ></i>
      </button>
      <div
        className={`lg:flex items-center ${
          isOpen ? "block" : "hidden"
        } lg:shadow-none md:shadow-none lg:static absolute top-20 right-0 ${
          isOpen
            ? "bg-gradient-to-tl from-slate-500 to-transparent sm:shadow-lg rounded-md p-2"
            : ""
        }`}
      >
        <ul
          className={`flex flex-col mr-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-14 lg:flex-row lg:items-center md:justify-around font-medium font-txtFont text-gray-800`}
        >
          <li
            className={` cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-orange-100 to-orange-50 rounded-sm py-1 px-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link
              to="/search"
              className="search flex justify-center items-center text-md font-[500]"
            >
              {/* <i className="px-1 fa-solid fa-magnifying-glass icons search-icon"></i> */}
              <BiSearchAlt className="px-1 text-3xl icons home" />
              Search
            </Link>
          </li>
          <li
            className={` cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-orange-100 to-orange-50 rounded-sm px-1 py-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link
              to="/home"
              className="home flex text-md font-[500] justify-center items-center"
            >
              {/* <i className="px-1 fa-solid fa-house icons home"></i> */}
              <BiHomeSmile className="px-1 text-3xl icons home" />
              Home
            </Link>
          </li>
          <li
            className={` cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-orange-100 to-orange-50 rounded-sm py-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link
              to="/about"
              className="offers flex justify-center items-center text-md font-[500]"
            >
              {/* <i className="px-1 fa-solid fa-tags icons offers"></i> */}
              <RiAccountPinCircleLine className="px-1 text-3xl icons home" />
              About
            </Link>
          </li>
          <li
            className={` cursor-pointer hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-orange-100 to-orange-50 rounded-sm py-1 mt-2 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <button
              className="offers flex justify-center items-center text-md font-[500]"
              onClick={handleSignOut}
            >
              <VscSignOut className="px-1 text-3xl icons home" />
              Signout
            </button>
          </li>
          <li
            className={` cursor-pointer flex justify-center items-center hover:text-[#ff5d0d] ${
              isOpen
                ? "bg-gradient-to-r from-orange-100 to-orange-50 rounded-sm py-1 mt-3 scale-95 duration-200"
                : "hover:scale-95 duration-200"
            }`}
          >
            <Link to="/cart" className="cart relative text-md font-[500]">
              <span className="cart-count absolute -top-3 left-0.5 text-xs bg-orange-500 text-slate-50 rounded-b-2xl px-2">
                {cartItems.length}
              </span>
              <i className="px-1 fa-solid fa-box-open icons cart"></i>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
