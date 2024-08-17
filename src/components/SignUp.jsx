import React from "react";
import { RxCross2 } from "react-icons/rx";
import CART_DISH from "../Images/cart_dish.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  const { setSignUpModel } = props;
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
          <div className="p-10 relative transform overflow-hidden bg-white text-left h-screen shadow-xl transition-all sm:w-4/12 sm:max-w-lg">
            <button
              onClick={() => setSignUpModel(false)}
              className="bg-slate-300 p-2 rounded-3xl text-2xl text-slate-700 font-semibold hover:bg-slate-500 hover:text-white hover:font-bold"
            >
              <RxCross2 />
            </button>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-txtFont mt-3 font-semibold">
                  Sign Up
                </h1>
                <h1 className="mt-2">
                  or{" "}
                  <span className="text-orange-500 font-txtFont text-sm">
                    login to your account
                  </span>
                </h1>
              </div>
              <img src={CART_DISH} alt="img" className="w-24 h-24" />
            </div>
            <hr className="w-12 bg-black h-[2px] mt-3 border-0" />
            <div className="mt-8 w-full font-txtFont flex flex-col justify-between h-auto items-center border-slate-600 border-2">
              <input
                type="text"
                placeholder="Phone Number"
                className="outline-none border-none bg-none text-start pl-3 h-20 w-full"
              />
              <hr className="w-full h-[2px] bg-slate-800" />
              <input
                type="text"
                placeholder="Name"
                className="outline-none border-none bg-none text-start pl-3 h-20 w-full"
              />
              <hr className="w-full h-[2px] bg-slate-800" />
              <input
                type="email"
                placeholder="Email"
                className="outline-none border-none bg-none text-start pl-3 h-20 w-full"
              />
            </div>
            <p className="mt-16 text-blue-800 font-txtFont text-sm text-start font-medium">
              Have a referral code?
            </p>
            <Link to="/home">
              <button className="bg-orange-500 w-full mt-7 h-16 px-4 text-white font-bold hover:bg-orange-600">
                CONTINUE
              </button>
            </Link>

            <h1 className="mt-4 font-medium text-sm text-slate-700 font-txtFont">
              By clicking on continue, I accept the Terms and Condition & <br />
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
