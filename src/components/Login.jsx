import { RxCross2 } from "react-icons/rx";
import CART_DISH from "../Images/cart_dish.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utills/firebase";
import { checkValidate } from "../utills/validate";

const Login = (props) => {
  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const { setLoginModel } = props;
  const { setSignUpModel } = props;
  console.log(setSignUpModel);

  const navigate = useNavigate();

  const toggleEye = () => {
    setOpen(!open);
  };

  const handleButtonClick = () => {
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const errMsg = checkValidate(nameValue, emailValue, passwordValue);
    setErrMsg(errMsg);
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorMessage);
      });
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
          <div className="relative h-screen p-10 overflow-hidden text-left transition-all transform shadow-xl bg-gradient-to-b from-white to-blue-200 sm:w-4/12 sm:max-w-lg">
            <button
              onClick={() => setLoginModel(false)}
              className="p-2 text-2xl font-semibold bg-slate-300 rounded-3xl text-slate-700 hover:bg-slate-500 hover:text-white hover:font-bold"
            >
              <RxCross2 />
            </button>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="mt-3 text-3xl font-semibold font-txtFont">
                  Login
                </h1>
                <h1 className="mt-2">
                  or{" "}
                  <span
                    className="text-sm text-orange-500 cursor-pointer font-txtFont"
                    onClick={() => setSignUpModel(true) && setLoginModel(false)}
                  >
                    create an account
                  </span>
                </h1>
              </div>
              <img src={CART_DISH} alt="img" className="w-24 h-24 mr-4" />
            </div>
            <hr className="w-12 bg-black h-[2px] mt-3 border-0" />

            <div className="w-full rounded font-txtFont h-16 mt-10 border-[1px] flex border-orange-500 justify-start pl-4 items-center">
              <input
                className="text-orange-500 bg-transparent border-none outline-none placeholder:text-orange-300"
                type="text"
                placeholder="Enter your name"
                ref={name}
              />
            </div>
            <div className="w-full rounded font-txtFont h-16 mt-10 border-[1px] flex border-orange-500 justify-start pl-4 items-center">
              <input
                className="text-orange-500 bg-transparent border-none outline-none placeholder:text-orange-300"
                type="email"
                placeholder="Enter your Email"
                ref={email}
              />
            </div>
            <div className="w-full pl-2 rounded font-txtFont h-16 mt-10 border-[1px] flex justify-between items-center border-orange-500">
              <input
                className="w-4/5 px-2 text-orange-500 bg-transparent border-none outline-none placeholder:text-orange-300"
                type={open ? "text" : "password"}
                placeholder="Enter your Password"
                ref={password}
              />
              <button
                className="mr-3 text-lg text-orange-600"
                onClick={toggleEye}
              >
                {open ? <IoEye /> : <IoEyeOffSharp />}
              </button>
            </div>

            <button
              className="w-full h-16 px-4 font-semibold text-white bg-orange-500 mt-7 hover:bg-orange-600"
              onClick={handleButtonClick}
            >
              LOG IN
            </button>
            {errMsg && (
              <p className="w-full mt-2 text-sm text-center text-orange-500 font-txtFont">
                {errMsg}
              </p>
            )}

            <h1 className="mt-4 text-sm font-medium text-slate-700 font-txtFont">
              By clicking on Login, I accept the Terms and Condition & <br />
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
