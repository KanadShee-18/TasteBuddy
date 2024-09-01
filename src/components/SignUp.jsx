import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CART_DISH from "../Images/cart_dish.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  const { setSignUpModel } = props;

  const handleButtonClick = () => {
    if (email && name) {
      navigate("/home");
    } else {
      setAlert(true);
    }
  };

  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 transition-opacity bg-gray-800 bg-opacity-75"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-end min-h-full p-4 text-center sm:items-center sm:p-0">
          <div className="relative h-screen p-10 overflow-hidden text-left transition-all transform shadow-xl bg-gradient-to-b from-slate-100 to-blue-200 sm:w-4/12 sm:max-w-lg">
            <button
              onClick={() => setSignUpModel(false)}
              className="p-2 text-2xl font-semibold bg-slate-300 rounded-3xl text-slate-700 hover:bg-slate-500 hover:text-white hover:font-bold"
            >
              <RxCross2 />
            </button>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="mt-3 text-3xl font-semibold font-txtFont">
                  Sign Up
                </h1>
                <h1 className="mt-2">
                  or{" "}
                  <span className="text-sm text-orange-600 font-txtFont">
                    login to your account
                  </span>
                </h1>
              </div>
              <img src={CART_DISH} alt="img" className="w-24 h-24" />
            </div>
            <hr className="w-12 bg-black h-[2px] mt-3 border-0" />
            <div className="flex flex-col items-center justify-between w-full h-auto mt-8 border-2 font-txtFont border-slate-500">
              <input
                type="text"
                placeholder="Enter mobile Number"
                className="w-full h-20 pl-3 border-none text-slate-700 bg-slate-500 bg-opacity-20 placeholder:text-orange-400 outline-orange-400 text-start"
              />
              <hr className="w-full h-[2px] bg-slate-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-20 pl-3 border-none text-slate-700 bg-slate-500 bg-opacity-20 bg-none outline-orange-400 placeholder:text-orange-500 text-start"
                onChange={(e) => setName(e.target.value)}
              />
              <hr className="w-full h-[2px] bg-slate-400" />
              <input
                type="email"
                placeholder="Enter yout email"
                className="w-full h-20 pl-3 border-none text-slate-700 bg-slate-500 bg-opacity-20 placeholder:text-orange-500 bg-none outline-orange-400 text-start"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p className="mt-16 text-sm font-medium text-blue-800 font-txtFont text-start">
              Already have an account?
            </p>
            <p className="mt-6 text-sm font-medium text-blue-800 font-txtFont text-start">
              Have a referral code?
            </p>

            <button
              className="w-full h-16 px-4 font-bold text-white bg-orange-500 mt-7 hover:bg-orange-600"
              onClick={handleButtonClick}
            >
              CONTINUE
            </button>

            {alert && (
              <p className="w-full mt-2 text-sm text-center text-orange-500 font-txtFont">
                Please fill both name and email.
              </p>
            )}

            <h1 className="mt-4 text-sm font-medium text-slate-700 font-txtFont">
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
