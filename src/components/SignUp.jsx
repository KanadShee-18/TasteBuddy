import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CART_DISH from "../Images/cart_dish.png";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { checkValidate } from "../utills/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utills/firebase";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const { setSignUpModel } = props;

  const toggleEye = () => {
    setOpen(!open);
  };

  const handleButtonClick = () => {
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const errMsg = checkValidate(nameValue, emailValue, passwordValue);
    setErrMsg(errMsg);

    if (!errMsg) {
      // sign up
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage);
        });
      // sign in
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
                  <span className="text-sm text-orange-600 cursor-pointer font-txtFont">
                    login to your account
                  </span>
                </h1>
              </div>
              <img src={CART_DISH} alt="img" className="w-24 h-24" />
            </div>
            <hr className="w-12 bg-black h-[2px] mt-3 border-0" />
            <div className="flex flex-col items-center justify-between w-full h-auto mt-8 border-2 font-txtFont border-slate-500">
              <input
                ref={name}
                type="text"
                placeholder="Enter your name"
                className="w-full h-20 pl-3 border-none text-slate-700 bg-slate-500 bg-opacity-20 bg-none outline-orange-400 placeholder:text-orange-500 text-start"
              />
              <hr className="w-full h-[2px] bg-slate-400" />

              <input
                ref={email}
                type="email"
                placeholder="Enter your email"
                className="w-full h-20 pl-3 border-none text-slate-700 bg-slate-500 bg-opacity-20 placeholder:text-orange-500 bg-none outline-orange-400 text-start"
              />

              <hr className="w-full h-[2px] bg-slate-400" />
              <div className="flex justify-between w-full rounded-sm focus-within:outline focus-within:outline-2 focus-within:outline-orange-400">
                <input
                  ref={password}
                  type={open ? "text" : "password"}
                  placeholder="Enter a password"
                  className="w-full h-20 pl-3 border-none outline-none text-slate-700 bg-slate-500 bg-opacity-20 placeholder:text-orange-500 text-start"
                />
                <button
                  className="px-3 text-lg text-orange-600 bg-opacity-20 bg-slate-500"
                  onClick={toggleEye}
                >
                  {open ? <IoEye /> : <IoEyeOffSharp />}
                </button>
              </div>
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

            {errMsg && (
              <p className="w-full mt-2 text-sm text-center text-orange-500 font-txtFont">
                {errMsg}
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
